"use client";

import React, { useState } from "react";
import { useCart } from "@/context/cart-context";

export function Header() {
  const { cartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Left: Logo + Name + Spec */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group focus:outline-none focus:ring-1 focus:ring-text">
            <div className="w-8 h-8 bg-surface2 border border-border flex items-center justify-center font-mono font-bold text-text group-hover:border-text transition-colors">
              DN
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold tracking-wider text-text text-sm">DEV/NULL</span>
              <span className="font-mono text-[10px] text-sec tracking-wider uppercase">[SPEC_SYS.V1]</span>
            </div>
          </a>
        </div>

        {/* Center: Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-wider text-sec">
          <a href="#coleccion" className="hover:text-text transition-colors focus:outline-none focus:ring-1 focus:ring-text py-1">
            COLECCIÓN
          </a>
          <a href="#nosotros" className="hover:text-text transition-colors focus:outline-none focus:ring-1 focus:ring-text py-1">
            NOSOTROS
          </a>
          <a href="#contacto" className="hover:text-text transition-colors focus:outline-none focus:ring-1 focus:ring-text py-1">
            CONTACTO
          </a>
        </nav>

        {/* Right: Controls (Find Spec, Cart, User) */}
        <div className="flex items-center gap-3">
          {/* FIND_SPEC ⌘K (Hidden on mobile) */}
          <button
            disabled
            aria-label="Buscar especificación (atajo no disponible)"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-surface1 border border-border text-sec font-mono text-xs cursor-default select-none"
          >
            <span>FIND_SPEC</span>
            <kbd className="px-1.5 py-0.5 bg-surface2 border border-border text-[10px] text-sec">⌘K</kbd>
          </button>

          {/* Cart Icon */}
          <button
            aria-label={`Carrito de compras, ${cartCount} ítems`}
            className="flex items-center gap-2 px-3 py-1.5 bg-surface1 border border-border text-text hover:border-text transition-colors font-mono text-xs focus:outline-none focus:ring-1 focus:ring-text"
            onClick={() => {
              // TODO: Open cart drawer
            }}
          >
            <svg className="w-4 h-4 text-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span aria-live="polite" className="font-mono">[{cartCount}]</span>
          </button>

          {/* User Icon Button */}
          <button
            disabled
            aria-label="Perfil de usuario (no disponible)"
            className="w-9 h-9 bg-surface1 border border-border flex items-center justify-center text-sec cursor-default"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={mobileMenuOpen}
            className="md:hidden w-9 h-9 bg-surface1 border border-border flex items-center justify-center text-text focus:outline-none focus:ring-1 focus:ring-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Disclosure Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface1 border-b border-border px-4 py-6 flex flex-col gap-4 font-mono text-sm">
          <a
            href="#coleccion"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sec hover:text-text transition-colors py-2 border-b border-border/40"
          >
            COLECCIÓN
          </a>
          <a
            href="#nosotros"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sec hover:text-text transition-colors py-2 border-b border-border/40"
          >
            NOSOTROS
          </a>
          <a
            href="#contacto"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sec hover:text-text transition-colors py-2"
          >
            CONTACTO
          </a>
        </div>
      )}
    </header>
  );
}
