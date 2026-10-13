"use client";

import React, { useState } from "react";
import { Product, formatPrice } from "@/data/products";
import { useCart } from "@/context/cart-context";
import { SizingModal } from "./sizing-modal";

export function ProductInfoPanel({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [feedbackState, setFeedbackState] = useState<"idle" | "success">("idle");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [unit, setUnit] = useState<"cm" | "in">("cm");

  const totalStock = Object.values(product.stockByTalle).reduce((a, b) => a + b, 0);
  const selectedStock = product.stockByTalle[selectedSize] ?? 0;
  const isOutOfStock = selectedStock === 0;

  const installmentPrice = Math.floor(product.price / 3);

  const handleAddToCart = () => {
    if (!selectedSize || isOutOfStock) return;
    addToCart(product.slug, selectedSize, 1);
    setFeedbackState("success");
    setTimeout(() => {
      setFeedbackState("idle");
    }, 2000);
  };

  return (
    <>
      <div id="talle" className="bg-surface1 border border-border p-6 sm:p-8 flex flex-col gap-6">

        {/* Top spec ID & Stock badge */}
        <div className="flex items-center justify-between font-mono text-xs pb-4 border-b border-border">
          <span className="text-sec tracking-wider">{`// SPEC_ID: 01_${product.slug.toUpperCase().replace(/-/g, "_")}`}</span>
          <span className="px-2 py-1 bg-canvas border border-border text-text tracking-wider">
            STOCK: {totalStock}_UNITS
          </span>
        </div>

        {/* Title & Price */}
        <div className="flex flex-col gap-2">
          <h1 className="font-mono font-bold text-text text-2xl sm:text-3xl tracking-tight">
            {product.name}
          </h1>
          <div className="flex flex-wrap items-baseline gap-3">
            <span className="font-mono text-xl sm:text-2xl font-bold text-text">
              {formatPrice(product.price)} ARS
            </span>
            <span className="font-mono text-xs text-sec">
              3 cuotas de ${formatPrice(installmentPrice)} sin interés
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="font-sans text-sec text-sm leading-relaxed">
          {product.longDescription}
        </p>

        {/* Finish Tone */}
        <div className="flex flex-col gap-2 pt-2 border-t border-border">
          <span className="font-mono text-xs text-sec tracking-wider">{`// FINISH_TONE:`}</span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-2 bg-canvas border border-text">
              <span
                className="w-3.5 h-3.5 border border-border inline-block"
                style={{ backgroundColor: product.finishTone.hex }}
                aria-hidden="true"
              />
              <span className="font-mono text-xs text-text">{product.finishTone.name}</span>
            </div>
            <span className="px-2 py-1 bg-surface2 border border-border font-mono text-[10px] text-sec">
              {product.finishTone.badge}
            </span>
          </div>
        </div>

        {/* Size Selection Header */}
        <div className="flex flex-col gap-3 pt-2 border-t border-border">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-sec tracking-wider">{`// SELECT_SIZE:`}</span>
            <button
              onClick={() => setIsModalOpen(true)}
              className="text-sec hover:text-text transition-colors underline focus:outline-none focus:ring-1 focus:ring-text bg-transparent border-none cursor-pointer p-0"
            >
              TABLA DE MEDIDAS (SIZE_MATRIX)
            </button>
          </div>

          {/* Size Radio Buttons */}
          <fieldset className="flex flex-wrap gap-2">
            <legend className="sr-only">Seleccioná un talle</legend>
            {Object.entries(product.stockByTalle).map(([size, stock]) => {
              const isSelected = selectedSize === size;
              const sizeOut = stock === 0;

              return (
                <label
                  key={size}
                  className={`relative flex flex-col items-center justify-center px-4 py-3 border font-mono text-xs cursor-pointer transition-colors ${
                    isSelected
                      ? "bg-text text-canvas border-text font-bold"
                      : sizeOut
                      ? "bg-canvas/40 text-sec/40 border-border/40 cursor-not-allowed"
                      : "bg-canvas text-text border-border hover:border-sec"
                  }`}
                >
                  <input
                    type="radio"
                    name="product-size"
                    value={size}
                    checked={isSelected}
                    disabled={sizeOut}
                    onChange={() => setSelectedSize(size)}
                    className="sr-only"
                  />
                  <span className="text-sm font-bold">{size}</span>
                  <span className={`text-[10px] mt-0.5 ${isSelected ? "text-canvas/80" : "text-sec"}`}>
                    {sizeOut ? "AGOTADO" : `${stock} LEFT`}
                  </span>
                </label>
              );
            })}
          </fieldset>

          {/* Fit Note */}
          <p className="font-mono text-[11px] text-sec leading-relaxed pt-1">
            FIT: {product.fitNote}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 pt-4 border-t border-border">
          <button
            onClick={handleAddToCart}
            disabled={isOutOfStock}
            aria-label={`Agregar ${product.name} talle ${selectedSize} al carrito`}
            className={`w-full py-3.5 font-mono text-xs font-bold tracking-wider border transition-colors focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-canvas ${
              isOutOfStock
                ? "bg-surface2 text-sec border-border cursor-not-allowed"
                : feedbackState === "success"
                ? "bg-text text-canvas border-text"
                : "bg-text text-canvas border-text hover:bg-surface2 hover:text-text"
            }`}
          >
            {isOutOfStock
              ? "[ TALLE AGOTADO ]"
              : feedbackState === "success"
              ? "[ ✓ AGREGADO ]"
              : "[ + AGREGAR AL CARRITO ]"}
          </button>

          <span aria-live="polite" className="sr-only">
            {feedbackState === "success" ? `Se agregó ${product.name} talle ${selectedSize} al carrito` : ""}
          </span>

          <div className="grid grid-cols-2 gap-3">
            <button
              disabled
              aria-label="Guardar en git stash (no disponible)"
              className="py-2.5 bg-canvas border border-border text-sec font-mono text-xs tracking-wider cursor-default"
            >
              [ $ git stash ]
            </button>
            <button
              disabled
              aria-label="Compra rápida (no disponible)"
              className="py-2.5 bg-canvas border border-border text-sec font-mono text-xs tracking-wider cursor-default"
            >
              [ ⚡ COMPRA RÁPIDA ]
            </button>
          </div>
        </div>

        {/* Logistics Protocol */}
        <div className="pt-4 border-t border-border flex flex-col gap-3 font-mono text-xs">
          <span className="text-sec tracking-wider">{`// PROTOCOLO_LOGÍSTICO`}</span>
          <ul className="flex flex-col gap-2 text-sec text-[11px] leading-relaxed">
            {product.logistics.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-text" aria-hidden="true">■</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Sizing Matrix Modal */}
      <SizingModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedSize={selectedSize}
        onSelectSize={(size) => setSelectedSize(size)}
        unit={unit}
        onToggleUnit={(u) => setUnit(u)}
      />
    </>
  );
}
