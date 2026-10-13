import React from "react";
import { ProductSpecRow } from "@/data/products";

export function MaterialSpecsTable({ specs }: { specs: ProductSpecRow[] }) {
  const codeHeader = String.fromCharCode(47, 47, 32) + "HARDWARE_LEVEL_BREAKDOWN";

  return (
    <section className="bg-canvas py-12 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-sec tracking-wider">
              {codeHeader}
            </span>
            <h2 className="font-mono font-bold text-text text-xl sm:text-2xl tracking-tight">
              Especificación Técnica de Materiales
            </h2>
          </div>
          <span className="px-3 py-1 bg-surface1 border border-border font-mono text-xs text-sec">
            SPEC_VERSION: 1.4 // STRICT_BUILD
          </span>
        </div>

        {/* 2x4 Grid with shared borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {specs.map((row) => (
            <div key={row.code} className="bg-surface1 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <span className="font-mono text-xs text-sec tracking-wider shrink-0">
                {row.code} // {row.label}
              </span>
              <span className="font-mono text-xs text-text text-right font-medium">
                {row.value}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
