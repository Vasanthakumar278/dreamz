"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "./CartContext";

type WishlistContextType = {
  wishlistItems: Product[];
  isWishlistOpen: boolean;
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: string | number) => void;
  toggleWishlistProduct: (item: Product) => void;
  isInWishlist: (id: string | number) => boolean;
  toggleWishlistSidebar: () => void;
  clearWishlist: () => void;
  wishlistCount: number;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Load wishlist from local storage on mount
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem("mayilini_wishlist");
      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist));
      }
    } catch (e) {
      console.error("Failed to load wishlist from local storage", e);
    }
  }, []);

  // Save wishlist to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("mayilini_wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToWishlist = (item: Product) => {
    setWishlistItems((prevItems) => {
      if (!prevItems.find((i) => i.id === item.id)) {
        return [...prevItems, item];
      }
      return prevItems;
    });
  };

  const removeFromWishlist = (id: string | number) => {
    setWishlistItems((prev) => prev.filter((i) => i.id !== id));
  };

  const toggleWishlistProduct = (item: Product) => {
    setWishlistItems((prevItems) => {
      if (prevItems.find((i) => i.id === item.id)) {
        return prevItems.filter((i) => i.id !== item.id);
      } else {
        return [...prevItems, item];
      }
    });
  };

  const isInWishlist = (id: string | number) => {
    return wishlistItems.some((i) => i.id === id);
  };

  const toggleWishlistSidebar = () => {
    setIsWishlistOpen((prev) => !prev);
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  const wishlistCount = wishlistItems.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isWishlistOpen,
        addToWishlist,
        removeFromWishlist,
        toggleWishlistProduct,
        isInWishlist,
        toggleWishlistSidebar,
        clearWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
