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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-4 left-4 right-4 z-50 glass-shelf rounded-2xl max-w-7xl mx-auto w-[calc(100%-2rem)]">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center group">
                <div
                  className="relative group-hover:scale-105 transition-transform duration-300"
                  style={{ width: '52px', height: '52px' }}
                >
                  <img
                    src="/images/logo_round.png"
                    alt="Label by Mayilini Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link href="#collections" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                Collections
              </Link>
              <Link href="#about" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                About
              </Link>
              <Link href="#products" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                New Arrivals
              </Link>
              <Link href="#visit-us" className="px-5 py-2.5 rounded-lg text-xs uppercase tracking-widest text-white font-bold drop-shadow-md transition-all duration-200 hover:text-brand-black hover:bg-rosegold-metallic hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.15)] hover:scale-[1.03]">
                Visit Store
              </Link>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative p-2 text-white drop-shadow-md hover:text-brand-rosegold transition-colors"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
              <button
                onClick={toggleCart}
                className="relative p-2 text-white drop-shadow-md hover:text-brand-rosegold transition-colors"
                aria-label="Cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-rosegold text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="px-4 py-2 rounded-lg text-xs uppercase tracking-widest font-bold text-white bg-black/40 shadow-sm border border-white/20 hover:scale-[1.03] active:translate-y-[1px] flex items-center gap-1.5"
              >
                {isMobileMenuOpen ? (
                  <span>Close ✕</span>
                ) : (
                  <span>Menu ☰</span>
                )}
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

        {/* Mobile Navigation Drawer / Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0f0f0f]/95 backdrop-blur-xl rounded-b-2xl px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col space-y-3">
              <Link 
                href="#collections" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-sm uppercase tracking-widest text-white font-bold bg-white/5 hover:bg-brand-rosegold hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                <span>Collections</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
              <Link 
                href="#about" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-sm uppercase tracking-widest text-white font-bold bg-white/5 hover:bg-brand-rosegold hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                <span>About</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
              <Link 
                href="#products" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-sm uppercase tracking-widest text-white font-bold bg-white/5 hover:bg-brand-rosegold hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                <span>New Arrivals</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
              <Link 
                href="#visit-us" 
                onClick={closeMobileMenu}
                className="px-4 py-3 rounded-xl text-sm uppercase tracking-widest text-white font-bold bg-white/5 hover:bg-brand-rosegold hover:text-white transition-all duration-200 flex items-center justify-between"
              >
                <span>Visit Store</span>
                <span className="text-xs opacity-60">→</span>
              </Link>
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3 text-xs uppercase tracking-widest font-bold">
              <button
                onClick={() => { closeMobileMenu(); toggleWishlistSidebar(); }}
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4 text-brand-rosegold fill-brand-rosegold" viewBox="0 0 24 24">
                  <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
              </button>

              <button
                onClick={() => { closeMobileMenu(); setIsSearchOpen(true); }}
                className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-white flex items-center justify-center gap-2 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search
              </button>
            </div>
          </div>
        )}
      </nav>

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
