"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Product = {
  id: string | number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export type CartItem = Product & {
  selectedSize: string;
  selectedColor: string;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  isCartOpen: boolean;
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string | number, size: string, color: string) => void;
  updateQuantity: (id: string | number, size: string, color: string, quantity: number) => void;
  toggleCart: () => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from local storage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("mayilini_cart");
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load cart from local storage", e);
    }
  }, []);

  // Save cart to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("mayilini_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (i) => i.id === item.id && i.selectedSize === item.selectedSize && i.selectedColor === item.selectedColor
      );

      if (existingItemIndex >= 0) {
        // Item already exists with same size and color, just increase quantity
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += item.quantity;
        return newItems;
      } else {
        // New item variation
        return [...prevItems, item];
      }
    });
    // Open cart automatically when an item is added
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string | number, size: string, color: string) => {
    setCartItems((prev) => prev.filter((i) => !(i.id === id && i.selectedSize === size && i.selectedColor === color)));
  };

  const updateQuantity = (id: string | number, size: string, color: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id, size, color);
      return;
    }
    setCartItems((prev) =>
      prev.map((i) =>
        i.id === id && i.selectedSize === size && i.selectedColor === color ? { ...i, quantity } : i
      )
    );
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        isCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleCart,
        clearCart,
        cartTotal,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
