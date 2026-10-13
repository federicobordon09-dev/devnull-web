import Image from "next/image";
import { PRODUCTS } from "@/data/products";

export function OutfitPanel() {
  return (
    <div className="bg-surface1 border border-border flex flex-col h-full">
      {/* Top Bar */}
      <div className="px-4 py-3 bg-surface2 border-b border-border flex items-center justify-between font-mono text-xs">
        <span className="text-text tracking-wider">{`// OUTFIT 001 :: FULL STACK`}</span>
        <span className="px-2 py-0.5 bg-canvas border border-border text-sec text-[11px] tracking-wider">
          [ 3 PIECES COMPILED ]
        </span>
      </div>

      {/* 3 Images Grid with shared borders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border flex-1">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-canvas flex flex-col justify-between p-4 group">
            <div className="relative aspect-[4/5] w-full mb-3 bg-surface1 border border-border/60 overflow-hidden">
              <Image
                src={product.image.src}
                alt={product.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="font-mono text-xs text-sec tracking-wider">
              {product.outfitIndex}
            </div>
          </div>
        ))}
      </div>

      {/* Terminal Footer Block */}
      <div className="p-4 bg-surface2 border-t border-border flex flex-col gap-3 font-mono text-xs">
        <div className="flex items-center justify-between text-sec">
          <span className="text-text/90">$ verify-uniformity --strict</span>
          <span className="text-text font-bold">EXIT 0</span>
        </div>
        <p className="text-sec text-[11px] leading-relaxed">
          Tolerancia de costura ±0.5mm. Tintura reactiva al tono. Sin adornos plásticos ni etiquetas rugosas.
        </p>
      </div>
    </div>
  );
}
