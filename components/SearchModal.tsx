"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

type Product = {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SearchModal({ isOpen, onClose }: Props) {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch products once on mount
  useEffect(() => {
    setIsLoading(true);
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, []);

  // Auto-focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const filtered = query.trim().length > 0
    ? products.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description?.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: 'rgba(10,10,10,0.97)', backdropFilter: 'blur(16px)' }}
    >
      {/* Header / Search Input */}
      <div className="border-b border-[#222] px-4 sm:px-8 py-5 flex items-center gap-4">
        <svg className="w-5 h-5 text-brand-rosegold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search products, categories..."
          className="flex-1 bg-transparent text-white text-lg font-sans outline-none placeholder-gray-500"
        />
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-widest font-bold ml-4"
        >
          Close ✕
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-8">
        {isLoading && (
          <div className="flex justify-center pt-20">
            <div className="w-8 h-8 border-4 border-brand-rosegold border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {!isLoading && query.trim().length === 0 && (
          <div className="text-center text-gray-500 pt-20">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <p className="text-sm uppercase tracking-widest">Start typing to search products</p>
          </div>
        )}

        {!isLoading && query.trim().length > 0 && filtered.length === 0 && (
          <div className="text-center text-gray-500 pt-20">
            <p className="text-sm uppercase tracking-widest">No products found for &ldquo;{query}&rdquo;</p>
          </div>
        )}

        {filtered.length > 0 && (
          <>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-6">
              {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.map(product => (
                <div
                  key={product.id}
                  className="group bg-[#111] border border-[#222] rounded-xl overflow-hidden hover:border-brand-rosegold/50 transition-all cursor-pointer"
                  onClick={onClose}
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <div className="text-[10px] text-brand-rosegold uppercase tracking-widest mb-1">{product.category}</div>
                    <h3 className="font-serif text-sm text-white leading-tight mb-1 line-clamp-2">{product.title}</h3>
                    <div className="text-sm font-bold text-brand-ivory">₹{product.price.toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
