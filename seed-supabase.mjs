import fs from 'fs';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in .env.local');
  process.exit(1);
}

const productsData = JSON.parse(fs.readFileSync('./data/products.json', 'utf8'));

async function seed() {
  console.log(`Found ${productsData.length} products to seed...`);
  
  const payload = productsData.map(product => ({
    id: product.id || `prod_${Date.now()}_${Math.floor(Math.random()*1000)}`,
    title: product.title,
    price: product.price,
    description: product.description || '',
    image: product.image,
    colors: product.colors || [],
    sizes: product.sizes || [],
    category: product.category || 'Kurti'
  }));

  const response = await fetch(`${supabaseUrl}/rest/v1/products`, {
    method: 'POST',
    headers: {
      'apikey': supabaseKey,
      'Authorization': `Bearer ${supabaseKey}`,
      'Content-Type': 'application/json',
      'Prefer': 'resolution=merge-duplicates'
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    console.error('Failed to insert data:', await response.text());
  } else {
    console.log('Successfully seeded database!');
  }
}

seed();
