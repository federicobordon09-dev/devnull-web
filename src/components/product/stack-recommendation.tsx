import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, formatPrice } from "@/data/products";

export function StackRecommendation({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="bg-canvas py-12 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-sec tracking-wider">{`// SYSTEM_STACK_RECOMMENDATION`}</span>
            <h2 className="font-mono font-bold text-text text-xl sm:text-2xl tracking-tight">
              Complete the Stack
            </h2>
            <p className="font-sans text-sec text-sm">
              Módulos compatibles diseñados bajo el mismo lenguaje estético y proporciones de caída.
            </p>
          </div>
          <button
            disabled
            aria-label="Ver bundle completo (no disponible)"
            className="font-mono text-xs text-sec flex items-center gap-2 cursor-default select-none"
          >
            <span>[ BUNDLE COMPLETO // VER STACK ]</span>
            <span>→</span>
          </button>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {PRODUCTS.map((product) => {
            const isCurrent = product.slug === currentSlug;
            return (
              <div
                key={product.id}
                className={`bg-surface1 flex flex-col justify-between p-4 relative ${
                  isCurrent ? "border-2 border-text" : ""
                }`}
              >
                <div>
                  {/* Top tag & spec */}
                  <div className="flex items-center justify-between mb-3 font-mono text-[11px] text-sec">
                    <span>{`// SPEC_${product.id.toUpperCase().replace(/-/g, "_")}`}</span>
                    {isCurrent ? (
                      <span className="px-2 py-0.5 bg-text text-canvas font-bold">ESTÁS VIENDO</span>
                    ) : (
                      <span>{product.specTag}</span>
                    )}
                  </div>

                  {/* Image */}
                  <Link
                    href={`/producto/${product.slug}`}
                    className="relative aspect-[4/5] w-full bg-canvas border border-border block overflow-hidden group mb-4"
                  >
                    <Image
                      src={product.image.src}
                      alt={product.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Title & Price */}
                  <div className="flex items-center justify-between font-mono mb-4">
                    <span className="font-bold text-text text-sm">{product.name}</span>
                    <span className="text-text text-sm">{formatPrice(product.price)} ARS</span>
                  </div>
                </div>

                {/* Bottom link */}
                <Link
                  href={`/producto/${product.slug}`}
                  className="w-full py-2.5 bg-canvas border border-border text-center font-mono text-xs text-sec hover:text-text hover:border-text transition-colors block"
                >
                  [ VIEW_SPECIFICATION ] →
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
