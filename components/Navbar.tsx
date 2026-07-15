"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import SearchModal from './SearchModal';

export default function Navbar() {
  const { toggleCart, cartCount } = useCart();
  const { toggleWishlistSidebar, wishlistCount } = useWishlist();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 glass-shelf rounded-2xl max-w-7xl mx-auto w-[calc(100%-2rem)]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative p-[2px] bg-gold-metallic rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.3)] group-hover:scale-105 transition-transform duration-300">
                  <img
                    src="/images/logo.jpeg"
                    alt="The Label by Mayilini Logo"
                    className="h-12 w-12 object-cover rounded-full border border-black/10"
                  />
                </div>
                <span className="font-serif text-2xl tracking-wider text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">MAYILINI</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#collections" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                Collections
              </Link>
              <Link href="#about" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                About
              </Link>
              <Link href="#gallery" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                Gallery
              </Link>
              <Link href="#visit-us" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                Visit Us
              </Link>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative p-2 text-white drop-shadow-md hover:text-brand-rosegold transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-white drop-shadow-md hover:text-brand-rosegold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-rosegold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-bold text-white bg-black/40 shadow-sm border border-white/20 hover:scale-[1.03] active:translate-y-[1px]">
                Menu
              </button>
            </div>
            <div className="hidden md:flex items-center ml-4 border-l border-white/30 pl-4 gap-6 text-sm uppercase tracking-widest font-sans font-bold">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="text-white drop-shadow-md hover:text-brand-rosegold transition-colors flex items-center gap-1.5"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>

              <button onClick={toggleWishlistSidebar} className="text-white drop-shadow-md hover:text-brand-rosegold transition-colors relative flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-brand-rosegold text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                    {wishlistCount}
                  </span>
                )}
              </button>

              <button
                onClick={toggleCart}
                className="relative p-2 text-white drop-shadow-md hover:text-brand-rosegold transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-rosegold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
