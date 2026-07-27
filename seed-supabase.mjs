import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const validCategories = ['Kurti', 'Co-ord Sets', '2 Piece Set', '3-Piece Kurti Set', '3 Piece Set'];

async function syncDatabase() {
  console.log('Cleaning up old products from Supabase...');
  
  // 1. Fetch all existing products from Supabase
  const fetchRes = await fetch(`${supabaseUrl}/rest/v1/products?select=id,category`, {
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`
    }
  });

  const existingProducts = await fetchRes.json();
  
  if (Array.isArray(existingProducts)) {
    const toDelete = existingProducts.filter(p => !validCategories.includes(p.category));
    console.log(`Found ${toDelete.length} invalid category products to remove...`);
    
    for (const item of toDelete) {
      await fetch(`${supabaseUrl}/rest/v1/products?id=eq.${encodeURIComponent(item.id)}`, {
        method: 'DELETE',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      });
    }
  }

  // 2. Insert/Upsert cleaned products from data/products.json
  const productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));
  console.log(`Seeding ${productsData.length} valid products into Supabase...`);

  const payload = productsData.map(product => ({
    id: product.id,
    title: product.title,
    price: product.price,
    description: product.description || '',
    image: product.image,
    colors: product.colors || [],
    sizes: product.sizes || [],
    category: product.category || 'Kurti'
  }));

  const upsertRes = await fetch(`${supabaseUrl}/rest/v1/products`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(payload)
  });

  if (!upsertRes.ok) {
    console.error('Failed to upsert data:', await upsertRes.text());
  } else {
    console.log('Successfully cleaned up old products and updated database!');
  }
}

syncDatabase();
