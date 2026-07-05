"use client";

import React from 'react';
import { useCart } from '../context/CartContext';

export default function CartSidebar() {
  const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  if (!isCartOpen) return null;

  const handleBookViaWhatsApp = () => {
    if (cartItems.length === 0) return;

    let message = `Hello Mayilini Boutique, I would like to book the following items:\n\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title}*\n`;
      message += `   Image: ${window.location.origin}${item.image}\n`;
      message += `   Size: ${item.selectedSize} | Color: ${item.selectedColor}\n`;
      message += `   Quantity: ${item.quantity} x ₹${item.price.toLocaleString()} = ₹${(item.quantity * item.price).toLocaleString()}\n\n`;
    });

    message += `*Total Amount:* ₹${cartTotal.toLocaleString()}\n\n`;
    message += `Please confirm the availability and booking details.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9677986327?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity"
        onClick={toggleCart}
      />
      
      {/* Sidebar Drawer */}
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#161616] border-l border-[#333] shadow-2xl z-[110] flex flex-col transform transition-transform duration-300 translate-x-0">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#2a2a2a]">
          <h2 className="text-xl font-sans font-bold uppercase tracking-widest text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
            My Cart
          </h2>
          <button 
            onClick={toggleCart}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
              <p className="font-sans uppercase tracking-widest text-sm">Your cart is empty</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4 bg-[#1e1e1e] p-4 rounded-lg border border-[#333]">
                <div className="w-20 h-24 bg-black rounded overflow-hidden flex-shrink-0">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-90" />
                </div>
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-serif text-sm text-gray-200 pr-4">{item.title}</h3>
                    <button 
                      onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                      className="text-gray-500 hover:text-red-400 mt-1"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 font-sans mb-2">
                    {item.selectedColor} · Size: {item.selectedSize}
                  </p>
                  <p className="text-brand-rosegold text-sm font-bold mb-auto">₹{item.price.toLocaleString()}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center bg-[#111] rounded-full border border-[#333] overflow-hidden">
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222]"
                      >
                        -
                      </button>
                      <span className="w-8 text-center text-xs font-bold text-white">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#222]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#2a2a2a] bg-[#1a1a1a]">
            <div className="flex justify-between items-end mb-6">
              <span className="text-gray-400 font-sans font-medium">Total</span>
              <span className="text-3xl font-bold font-sans text-white">₹{cartTotal.toLocaleString()}</span>
            </div>
            
            <p className="text-xs text-center text-gray-500 mb-4 tracking-wide">
              Booking & shipping discussed via WhatsApp
            </p>
            
            <button 
              onClick={handleBookViaWhatsApp}
              className="w-full bg-[#1db954] hover:bg-[#1ed760] text-black font-bold uppercase tracking-widest text-sm py-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-[0_0_15px_rgba(29,185,84,0.3)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              Book Via WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
}
