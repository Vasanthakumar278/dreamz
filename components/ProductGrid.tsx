"use client";

import React, { useState, useEffect } from 'react';
import QuickViewModal from './QuickViewModal';
import { Product } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function ProductGrid() {
  const [quickViewProductId, setQuickViewProductId] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [isLoading, setIsLoading] = useState(true);
  const { toggleWishlistProduct, isInWishlist } = useWishlist();

  const categories = [
    "All",
    "Kurti",
    "2 Piece Set",
    "3 Piece Set",
    "Jeans",
    "Straight Pant",
    "Short Frock",
    "Western - Long Frock",
    "T-Shirts",
    "Westerns",
    "Shirts"
  ];

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error("Failed to load products", err);
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter((p: any) => p.category === activeCategory);

  return (
    <section id="products" className="py-24 bg-[#0a0a0a] text-white w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter / Nav Bar for Products */}
        <div className="flex flex-col mb-12 border-b border-[#333] pb-4">
          <h2 className="font-serif text-3xl md:text-4xl tracking-wider uppercase mb-6">Collection</h2>
          <div className="flex gap-6 text-sm font-sans uppercase tracking-widest text-gray-400 overflow-x-auto pb-2 scrollbar-hide whitespace-nowrap">
            {categories.map((category) => (
              <button 
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`pb-1 transition-all ${activeCategory === category ? "text-white border-b-2 border-brand-rosegold" : "hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="w-8 h-8 border-4 border-brand-rosegold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-gray-500">No products found in this category.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
            <div key={product.id} className="group flex flex-col bg-[#111] rounded-xl overflow-hidden border border-[#222] transition-all hover:border-[#444]">
              {/* Product Image */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                {/* NEW Badge */}
                <div className="absolute top-3 left-3 z-10 bg-[#c67d82]/20 text-brand-rosegold text-xs font-bold px-2 py-1 uppercase tracking-widest border border-brand-rosegold/30 rounded-sm">
                  New
                </div>

                <button 
                  onClick={() => toggleWishlistProduct(product)}
                  className="absolute top-3 right-3 z-10 text-white hover:text-brand-rosegold transition-colors drop-shadow-md"
                >
                  <svg 
                    className={`w-6 h-6 ${isInWishlist(product.id) ? "fill-brand-rosegold text-brand-rosegold" : "fill-transparent"}`} 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Quick View Overlay (Shows on Hover) */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => setQuickViewProductId(String(product.id))}
                    className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-3 rounded uppercase text-xs tracking-widest font-bold hover:bg-white hover:text-black transition-colors"
                  >
                    Quick View
                  </button>
                </div>
              </div>
              
              {/* Product Details */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="text-[10px] text-brand-rosegold uppercase tracking-widest mb-1 font-bold">Womenswear</div>
                <h3 className="font-serif text-lg tracking-wide mb-2 flex-grow text-gray-200">{product.title}</h3>
                <div className="text-lg font-sans font-semibold text-brand-ivory">₹{product.price.toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProductId && (
        <QuickViewModal 
          productId={quickViewProductId} 
          productData={products.find(p => String(p.id) === quickViewProductId)}
          onClose={() => setQuickViewProductId(null)} 
        />
      )}
    </section>
  );
}
