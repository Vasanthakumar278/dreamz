"use client";

import React, { useState } from 'react';
import { useWishlist } from '../context/WishlistContext';
import QuickViewModal from './QuickViewModal';

export default function WishlistSidebar() {
  const { isWishlistOpen, toggleWishlistSidebar, wishlistItems, removeFromWishlist } = useWishlist();
  const [quickViewProductId, setQuickViewProductId] = useState<string | null>(null);

  if (!isWishlistOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={toggleWishlistSidebar}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0a0a0a] shadow-2xl z-50 flex flex-col transform transition-transform border-l border-[#222]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#222]">
          <h2 className="text-xl font-serif tracking-widest uppercase text-brand-ivory">Wishlist</h2>
          <button 
            onClick={toggleWishlistSidebar}
            className="text-gray-400 hover:text-brand-rosegold transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Wishlist Items */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-[#333]">
          {wishlistItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
              <svg className="w-16 h-16 mb-4 text-brand-rosegold opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <p className="font-serif text-lg tracking-wide text-brand-ivory mb-2">Your Wishlist is empty</p>
              <p className="text-sm text-gray-400">Find something beautiful and save it for later.</p>
              <button 
                onClick={toggleWishlistSidebar}
                className="mt-6 uppercase tracking-widest text-xs font-bold text-brand-rosegold border-b border-brand-rosegold pb-1 hover:text-[#a6686c] hover:border-[#a6686c] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-[#111] p-3 rounded-lg border border-[#222]">
                  {/* Item Image */}
                  <div className="w-24 h-32 flex-shrink-0 bg-[#1a1a1a] rounded overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex flex-col flex-1 py-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-serif text-lg text-gray-200 leading-tight mb-1">{item.title}</h3>
                        <p className="text-brand-rosegold font-semibold text-sm mb-2">₹{item.price.toLocaleString()}</p>
                      </div>
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors p-1"
                        title="Remove from wishlist"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                    
                    <div className="mt-auto">
                      <button
                        onClick={() => {
                          toggleWishlistSidebar();
                          setQuickViewProductId(item.id as string);
                        }}
                        className="w-full bg-[#222] hover:bg-brand-rosegold text-white text-xs font-bold uppercase tracking-widest py-2 rounded transition-colors border border-[#333] hover:border-brand-rosegold"
                      >
                        Select Options
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {quickViewProductId && (
        <QuickViewModal 
          productId={quickViewProductId} 
          productData={wishlistItems.find(p => p.id === quickViewProductId)}
          onClose={() => setQuickViewProductId(null)} 
        />
      )}
    </>
  );
}
