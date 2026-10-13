"use client";

import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, formatPrice } from "@/data/products";

export function CollectionGrid() {
  return (
    <section id="coleccion" className="bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-8 border-b border-border">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-sec tracking-wider">{`// COLECCIÓN 001`}</span>
            <h2 className="font-mono font-bold text-text leading-tight">
              DROP_01 // SYSTEM RUNTIME
            </h2>
          </div>
          <p className="font-sans text-sec text-sm max-w-md leading-relaxed md:text-right">
            Tres piezas elementales. Sin logos ruidosos, sin distracciones innecesarias.
            Fabricadas bajo especificaciones funcionales puras.
          </p>
        </div>

        {/* Product Grid - shared borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({
  product,
  index,
}: {
  product: typeof PRODUCTS[0];
  index: number;
}) {
  return (
    <div className="bg-canvas flex flex-col">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface1 border-b border-border font-mono text-[11px] text-sec">
        <span>{String(index + 1).padStart(2, "0")} / 03</span>
        <span className="px-1.5 py-0.5 bg-canvas border border-border text-text">[ IN_STOCK ]</span>
      </div>

      {/* Image */}
      <Link href={`/producto/${product.slug}`} className="relative aspect-[4/5] bg-surface1 border-b border-border overflow-hidden group block">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={index === 0}
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-canvas/90 border border-border font-mono text-[10px] text-text tracking-wider backdrop-blur-[1px]">
          {product.specTag}
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4 flex flex-col gap-3 flex-1 bg-canvas">
        {/* Name + Price Row */}
        <div className="flex items-center justify-between">
          <Link href={`/producto/${product.slug}`} className="font-mono font-bold text-text text-sm tracking-wider hover:underline">
            {product.name}
          </Link>
          <span className="font-mono text-text text-sm">
            {formatPrice(product.price)} ARS
          </span>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-1.5 font-mono text-[11px] text-sec">
          {product.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span aria-hidden="true" className="text-ghost shrink-0">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Choose Size Button */}
        <Link
          href={`/producto/${product.slug}#talle`}
          aria-label={`Elegir talle y agregar ${product.name} al carrito`}
          className="mt-auto w-full py-2.5 bg-surface1 border border-border text-sec text-center font-mono text-xs tracking-wider hover:bg-text hover:text-canvas hover:border-text transition-colors focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-canvas block"
        >
          [ ELEGIR TALLE ]
        </Link>
      </div>
    </div>
  );
}
