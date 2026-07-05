import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

// Upload base64 image to Supabase Storage and return public URL
async function uploadImage(imageBase64: string, productId: string): Promise<string | null> {
  try {
    const matches = imageBase64.match(/^data:image\/([A-Za-z-+\/]+);base64,(.+)$/);
    if (!matches || matches.length !== 3) return null;

    const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
    const buffer = Buffer.from(matches[2], 'base64');
    const filename = `${productId}.${ext}`;

    const { error } = await supabase.storage
      .from('product-images')
      .upload(filename, buffer, {
        contentType: `image/${matches[1]}`,
        upsert: true,
      });

    if (error) {
      console.error('Storage upload error:', error);
      return null;
    }

    const { data } = supabase.storage
      .from('product-images')
      .getPublicUrl(filename);

    return data.publicUrl;
  } catch (e) {
    console.error('Failed to upload image:', e);
    return null;
  }
}

// GET /api/products — fetch all products
export async function GET() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }

  return NextResponse.json(data);
}

// POST /api/products — add a new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const productId = `prod_${Date.now()}`;

    // Handle image upload
    let imageUrl = body.image || '';
    if (body.imageBase64) {
      const uploaded = await uploadImage(body.imageBase64, productId);
      if (uploaded) imageUrl = uploaded;
    }

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
      image: imageUrl,
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
