"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>({
    title: '',
    price: 0,
    description: '',
    image: '',
    colors: '',
    sizes: '',
    category: 'Kurti'
  });

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('API returned non-array data:', data);
        setProducts([]);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentProduct((prev: any) => ({
      ...prev,
      [name]: name === 'price' ? Number(value) : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCurrentProduct((prev: any) => ({
        ...prev,
        imageFile: file // Store the actual File object
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format colors and sizes into arrays
    const formattedProduct = {
      ...currentProduct,
      colors: typeof currentProduct.colors === 'string' ? currentProduct.colors.split(',').map((c: string) => c.trim()).filter(Boolean) : currentProduct.colors,
      sizes: typeof currentProduct.sizes === 'string' ? currentProduct.sizes.split(',').map((s: string) => s.trim()).filter(Boolean) : currentProduct.sizes,
    };

    try {
      const productId = currentProduct.id || `prod_${Date.now()}`;
      
      // Upload image directly to Supabase if a new file was selected
      let finalImageUrl = currentProduct.image;
      if (currentProduct.imageFile) {
        const file = currentProduct.imageFile;
        const fileExt = file.name.split('.').pop();
        const fileName = `${productId}.${fileExt}`;
        
        // Import supabase dynamically or assume it's available. 
        // We need to import it at the top of the file.
        const { supabase } = await import('@/lib/supabase');
        
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(fileName, file, { upsert: true });
          
        if (uploadError) {
          console.error("Upload error:", uploadError);
          alert("Failed to upload image to Supabase.");
          return;
        }
        
        const { data: publicUrlData } = supabase.storage
          .from('product-images')
          .getPublicUrl(fileName);
          
        finalImageUrl = publicUrlData.publicUrl;
      }
      
      formattedProduct.image = finalImageUrl;
      // Remove the file object before sending to API
      delete formattedProduct.imageFile;
      delete formattedProduct.imageBase64;

      if (isEditing && currentProduct.id) {
        await fetch(`/api/products/${currentProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedProduct)
        });
      } else {
        await fetch('/api/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedProduct)
        });
      }
      
      // Reset form
      setIsEditing(false);
      setCurrentProduct({ title: '', price: 0, description: '', image: '', colors: '', sizes: '', category: 'Kurti' });
      fetchProducts();
      
      // Reset file input
      const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } catch (e) {
      console.error(e);
      alert("Failed to save product.");
    }
  };

  const editProduct = (product: any) => {
    setIsEditing(true);
    setCurrentProduct({
      ...product,
      colors: product.colors.join(', '),
      sizes: product.sizes.join(', ')
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const deleteProduct = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    
    try {
      await fetch(`/api/products/${id}`, { method: 'DELETE' });
      fetchProducts();
    } catch (e) {
      console.error(e);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-[#333] pb-4">
          <h1 className="text-3xl font-serif tracking-wider text-brand-ivory">Admin Dashboard</h1>
          <Link href="/" className="text-gray-400 hover:text-brand-rosegold text-sm uppercase tracking-widest transition-colors">
            Back to Site
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-1 bg-[#111] p-6 rounded-xl border border-[#222]">
            <h2 className="text-xl font-sans uppercase tracking-widest mb-6 text-brand-rosegold font-bold">
              {isEditing ? 'Edit Product' : 'Add New Product'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Title</label>
                <input required type="text" name="title" value={currentProduct.title} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Price (₹)</label>
                  <input required type="number" name="price" value={currentProduct.price} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Category</label>
                  <select name="category" value={currentProduct.category} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors">
                    <option value="Kurti">Kurti</option>
                    <option value="2 Piece Set">2 Piece Set</option>
                    <option value="3 Piece Set">3 Piece Set</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Straight Pant">Straight Pant</option>
                    <option value="Short Frock">Short Frock</option>
                    <option value="Western - Long Frock">Western - Long Frock</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Westerns">Westerns</option>
                    <option value="Shirts">Shirts</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Image Upload</label>
                <input id="imageUpload" type="file" accept="image/*" onChange={handleImageUpload} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-brand-rosegold file:text-white hover:file:bg-[#a6686c] text-gray-300" />
                {currentProduct.imageBase64 ? (
                  <div className="mt-2 text-xs text-green-400">Image selected for upload</div>
                ) : currentProduct.image ? (
                  <div className="mt-2 text-xs text-gray-400">Current image: {currentProduct.image}</div>
                ) : null}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Description</label>
                <textarea required name="description" rows={3} value={currentProduct.description} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors"></textarea>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Colors (Comma Separated)</label>
                <input type="text" name="colors" placeholder="Red, Blue, Green" value={currentProduct.colors} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors" />
                <p className="text-[10px] text-gray-500 mt-1">Available valid colors map automatically. User will select from these.</p>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Sizes (Comma Separated)</label>
                <input type="text" name="sizes" placeholder="S, M, L, XL" value={currentProduct.sizes} onChange={handleInputChange} className="w-full bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 focus:border-brand-rosegold outline-none transition-colors" />
              </div>

              <div className="flex gap-2 mt-4">
                <button type="submit" className="flex-1 bg-brand-rosegold hover:bg-[#a6686c] text-white py-3 rounded font-bold uppercase tracking-wider text-sm transition-colors">
                  {isEditing ? 'Update' : 'Save'}
                </button>
                {isEditing && (
                  <button type="button" onClick={() => { 
                    setIsEditing(false); 
                    setCurrentProduct({ title: '', price: 0, description: '', image: '', imageBase64: '', colors: '', sizes: '', category: 'Kurti' }); 
                    const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }} className="px-4 border border-[#444] text-gray-300 hover:border-gray-400 py-3 rounded font-bold uppercase tracking-wider text-sm transition-colors">
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Product List */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-sans uppercase tracking-widest mb-6 text-brand-ivory font-bold">Inventory List</h2>
            
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-4 border-brand-rosegold border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : products.length === 0 ? (
              <div className="bg-[#111] border border-[#222] p-8 rounded-xl text-center text-gray-500">
                No products found. Add one above.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((p) => (
                  <div key={p.id} className="bg-[#111] border border-[#222] rounded-lg p-4 flex gap-4">
                    <img src={p.image} alt={p.title} className="w-20 h-24 object-cover rounded bg-[#1a1a1a]" />
                    <div className="flex flex-col flex-1">
                      <h3 className="font-serif text-lg text-white leading-tight mb-1">{p.title}</h3>
                      <div className="text-brand-rosegold font-bold text-sm mb-2">₹{p.price} <span className="text-gray-500 text-xs ml-2 font-normal">({p.category})</span></div>
                      
                      <div className="mt-auto flex gap-2">
                        <button onClick={() => editProduct(p)} className="flex-1 bg-[#222] hover:bg-[#333] text-white text-xs uppercase tracking-widest py-2 rounded transition-colors border border-[#444]">
                          Edit
                        </button>
                        <button onClick={() => deleteProduct(p.id)} className="flex-1 bg-red-900/20 hover:bg-red-900/40 text-red-400 text-xs uppercase tracking-widest py-2 rounded transition-colors border border-red-900/30">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
