import React from "react";
import Image from "next/image";

export function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
      {/* Left Column: Hero Text */}
      <div className="bg-canvas p-6 sm:p-10 flex flex-col justify-center order-2 md:order-1 min-h-[500px] md:min-h-[600px]">
        <div className="flex flex-col gap-8">
          {/* Chip */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface1 border border-border font-mono text-[11px] text-sec w-fit">
            <span className="text-text">■</span>
            <span>{`// 00_init :: lanzamiento`}</span>
          </div>

          {/* H1 */}
          <h1 className="font-mono font-bold tracking-tight text-text leading-[0.95]">
            LO ESENCIAL.{" "}
            <br />
            TODO LO DEMÁS, A{" "}
            <span className="text-sec">/DEV/NULL</span>.
            <br />
          </h1>

          {/* Description */}
          <p className="text-sec text-sm sm:text-base leading-relaxed max-w-lg">
            Ropa cómoda, sobria y pensada para pasar horas frente al código.
            Estructuras sólidas, cero distracciones superfluas y confección pesada.
          </p>

          {/* Buttons Row */}
          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => {
                const el = document.getElementById("coleccion");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-text text-canvas font-mono text-xs font-bold tracking-wider hover:bg-surface2 hover:text-text border border-text transition-colors focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-canvas"
            >
              [ VER COLECCIÓN ]
            </button>
            <a
              href="#detalles"
              className="px-6 py-3 border border-border text-sec font-mono text-xs tracking-wider hover:border-text hover:text-text transition-colors focus:outline-none focus:ring-2 focus:ring-text focus:ring-offset-2 focus:ring-offset-canvas"
            >
              read_spec.md
            </a>
          </div>

          {/* Divider & Metadata */}
          <div className="pt-6 border-t border-border">
            <div className="font-mono text-[11px] text-sec tracking-wider leading-relaxed">
              STACK: 100% COTTON / GSM: 380-420 / RUN: 001 // BUENOS_AIRES
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Outfit Panel */}
      <div className="order-1 md:order-2 bg-canvas">
        <OutfitPanel />
      </div>
    </div>
  );
}

function OutfitPanel() {
  return (
    <div className="bg-surface1 border-l border-t border-border flex flex-col h-full">
      {/* Top Bar */}
      <div className="px-4 py-3 bg-surface2 border-b border-border flex items-center justify-between font-mono text-xs">
        <span className="text-text tracking-wider">{`// OUTFIT 001 :: FULL STACK`}</span>
        <span className="px-2 py-0.5 bg-canvas border border-border text-sec text-[11px] tracking-wider">
          [ 3 PIECES COMPILED ]
        </span>
      </div>

      {/* 3 Images Grid with shared borders */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border flex-1">
        {[
          {
            src: "/Sudadera gris con capucha Dev_Null.png",
            alt: "Root Hoodie: buzo gris jaspeado con capucha y bolsillo canguro, logo Dev/Null bordado en el pecho",
            index: "01 // ROOT",
          },
          {
            src: "/Camiseta blanca minimalista Dev_Null.png",
            alt: "Null Tee: camiseta blanca minimalista de algodón premium con cuello cerrado reforzado",
            index: "02 // TEE",
          },
          {
            src: "/Pantalón cargo jogger negro Dev_Null.png",
            alt: "Cargo Pants: pantalón cargo jogger negro de sarga técnica con bolsillos tácticos y cintura articulada",
            index: "03 // CARGO",
          },
        ].map((product, i) => (
          <div key={i} className="bg-canvas flex flex-col justify-between p-4 group">
            <div className="relative aspect-[4/5] w-full mb-3 bg-surface1 border border-border/60 overflow-hidden">
              <Image
                src={product.src}
                alt={product.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                priority={i === 0}
              />
            </div>
            <div className="font-mono text-xs text-sec tracking-wider">
              {product.index}
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
