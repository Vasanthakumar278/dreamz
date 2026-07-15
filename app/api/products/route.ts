import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';


// GET /api/products — fetch all products
export async function GET() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Supabase error fetching products:', error);
    return NextResponse.json({ error: 'Failed to fetch products', details: error }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/products — add a new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const productId = body.id || `prod_${Date.now()}`;

    // Format arrays
    const colors = typeof body.colors === 'string'
      ? body.colors.split(',').map((c: string) => c.trim()).filter(Boolean)
      : body.colors || [];
    const sizes = typeof body.sizes === 'string'
      ? body.sizes.split(',').map((s: string) => s.trim()).filter(Boolean)
      : body.sizes || [];

    const newProduct = {
      id: productId,
      title: body.title,
      price: body.price,
      description: body.description,
      image: body.image || '',
      colors,
      sizes,
      category: body.category || 'Kurti',
    };

    const { data, error } = await supabase
      .from('products')
      .insert([newProduct])
      .select()
      .single();

    if (error) {
      console.error('Insert error:', error);
      return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}
