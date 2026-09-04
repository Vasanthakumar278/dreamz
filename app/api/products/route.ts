import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';


import productsFallback from '@/data/products.json';

// GET /api/products — fetch all products
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data || data.length === 0) {
      if (error) console.error('Supabase error fetching products, using local fallback:', error);
      const processedFallback = (productsFallback || []).map((product: any) => {
        const isNewArrival = Boolean(product.is_new_arrival || (product.description && product.description.includes('[NEW_ARRIVAL]')));
        const cleanDescription = product.description ? product.description.replace(/\[NEW_ARRIVAL\]/gi, '').trim() : '';
        return {
          ...product,
          is_new_arrival: isNewArrival,
          description: cleanDescription
        };
      });
      return NextResponse.json(processedFallback);
    }

    const processedData = (data || []).map((product: any) => {
      const isNewArrival = Boolean(product.is_new_arrival || (product.description && product.description.includes('[NEW_ARRIVAL]')));
      const cleanDescription = product.description ? product.description.replace(/\[NEW_ARRIVAL\]/gi, '').trim() : '';
      return {
        ...product,
        is_new_arrival: isNewArrival,
        description: cleanDescription
      };
    });

    return NextResponse.json(processedData);
  } catch (err) {
    console.error('Supabase fetch failed, using local products fallback:', err);
    const processedFallback = (productsFallback || []).map((product: any) => {
      const isNewArrival = Boolean(product.is_new_arrival || (product.description && product.description.includes('[NEW_ARRIVAL]')));
      const cleanDescription = product.description ? product.description.replace(/\[NEW_ARRIVAL\]/gi, '').trim() : '';
      return {
        ...product,
        is_new_arrival: isNewArrival,
        description: cleanDescription
      };
    });
    return NextResponse.json(processedFallback);
  }
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

    let description = body.description || '';
    if (body.is_new_arrival) {
      if (!description.includes('[NEW_ARRIVAL]')) {
        description = `${description}\n\n[NEW_ARRIVAL]`.trim();
      }
    } else {
      description = description.replace(/\[NEW_ARRIVAL\]/gi, '').trim();
    }

    const newProduct: any = {
      id: productId,
      title: body.title,
      price: body.price,
      description,
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

    const responseData = {
      ...data,
      is_new_arrival: Boolean(body.is_new_arrival),
      description: (data.description || '').replace(/\[NEW_ARRIVAL\]/gi, '').trim()
    };

    return NextResponse.json(responseData, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to save product' }, { status: 500 });
  }
}
