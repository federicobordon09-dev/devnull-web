"use client";

import React, { createContext, useContext, useState } from "react";
import { getProductBySlug } from "@/data/products";

export interface CartItem {
  slug: string;
  size: string;
  qty: number;
}

export interface AddToCartResult {
  /** true si se agregó al menos una unidad; false si ya se alcanzó el tope de stock. */
  ok: boolean;
  /** true si el tope por stock impidió agregar la cantidad completa solicitada. */
  limitReached: boolean;
}

interface CartContextType {
  cartCount: number;
  items: CartItem[];
  addToCart: (slug: string, size: string, qty?: number) => AddToCartResult;
  quantityOf: (slug: string, size: string) => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  const quantityOf = (slug: string, size: string) =>
    items.find((item) => item.slug === slug && item.size === size)?.qty ?? 0;

  const addToCart = (slug: string, size: string, qty = 1): AddToCartResult => {
    // El tope es el stock declarado de ese talle en el catálogo (único origen de verdad).
    const stock = getProductBySlug(slug)?.stockByTalle[size] ?? 0;
    const remaining = stock - quantityOf(slug, size);

    if (remaining <= 0) {
      return { ok: false, limitReached: true };
    }

    const toAdd = Math.min(qty, remaining);

    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.slug === slug && item.size === size
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex] = {
          ...copy[existingIndex],
          qty: copy[existingIndex].qty + toAdd,
        };
        return copy;
      }
      return [...prev, { slug, size, qty: toAdd }];
    });

    return { ok: true, limitReached: toAdd < qty };
  };

  return (
    <CartContext.Provider value={{ cartCount, items, addToCart, quantityOf }}>
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
