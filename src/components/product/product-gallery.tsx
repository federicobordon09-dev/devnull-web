"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductGalleryImage } from "@/data/products";

export function ProductGallery({ gallery }: { gallery: ProductGalleryImage[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeImage = gallery[selectedIndex] || gallery[0];

  return (
    <div className="flex flex-col gap-4">
      {/* Main Viewport */}
      <div className="relative aspect-[4/5] w-full bg-surface1 border border-border overflow-hidden">
        {/* Top-left tag */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-canvas/90 border border-border font-mono text-[10px] text-text tracking-wider backdrop-blur-[1px]">
          VIEWPORT_REF: 01_ROOT
        </div>

        {/* Top-right tag */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-canvas/90 border border-border font-mono text-[10px] text-text tracking-wider backdrop-blur-[1px]">
          IMG: {String(selectedIndex + 1).padStart(2, "0")}/{String(gallery.length).padStart(2, "0")}
        </div>

        <Image
          src={activeImage.src}
          alt={activeImage.alt}
          fill
          sizes="(max-width: 768px) 100vw, 60vw"
          className="object-cover"
          priority
        />

        {/* Bottom Bar */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-canvas/90 border-t border-border flex items-center justify-between font-mono text-[11px] text-sec backdrop-blur-[1px]">
          <span>COLOR: GRIS MELANGE | DENSITY: 420 GSM</span>
          <span className="text-text font-bold">BOX_RELAXED_CUT</span>
        </div>
      </div>

      {/* Thumbnails (only if > 1 image) */}
      {gallery.length > 1 && (
        <div className="flex items-center gap-3">
          {gallery.map((img, i) => {
            const isSelected = i === selectedIndex;
            return (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                aria-label={`Ver miniatura ${i + 1}: ${img.label}`}
                className={`relative w-20 aspect-[4/5] bg-surface1 border transition-colors focus:outline-none focus:ring-2 focus:ring-text ${
                  isSelected ? "border-text" : "border-border hover:border-sec"
                }`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 bg-canvas/90 p-0.5 text-[9px] font-mono text-center text-text truncate">
                  [ {img.label} ]
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
