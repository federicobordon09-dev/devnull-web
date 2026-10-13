"use client";

import React, { createContext, useContext, useState } from "react";

export interface CartItem {
  slug: string;
  size: string;
  qty: number;
}

interface CartContextType {
  cartCount: number;
  items: CartItem[];
  addToCart: (slug: string, size: string, qty?: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  const addToCart = (slug: string, size: string, qty = 1) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.slug === slug && item.size === size
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          qty: copy[existingIndex].qty + qty,
        };
        return copy;
      }
      return [...prev, { slug, size, qty }];
    });
  };

  return (
    <CartContext.Provider value={{ cartCount, items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
