import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// PUT /api/products/[id] — update a product
export async function PUT(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    // Format arrays
    const colors = typeof body.colors === 'string'
      ? body.colors.split(',').map((c: string) => c.trim()).filter(Boolean)
      : body.colors || [];
    const sizes = typeof body.sizes === 'string'
      ? body.sizes.split(',').map((s: string) => s.trim()).filter(Boolean)
      : body.sizes || [];

    const updatedProduct = {
      title: body.title,
      price: body.price,
      description: body.description,
      image: body.image || '',
      colors,
      sizes,
      category: body.category,
    };

    const { data, error } = await supabase
      .from('products')
      .update(updatedProduct)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Update error:', error);
      return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

// DELETE /api/products/[id] — delete a product
export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // Try to delete the image from storage (best-effort, don't fail if missing)
    await supabase.storage
      .from('product-images')
      .remove([`${id}.jpg`, `${id}.jpeg`, `${id}.png`, `${id}.webp`]);

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Delete error:', error);
      return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
