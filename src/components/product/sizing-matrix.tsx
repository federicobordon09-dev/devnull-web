"use client";

import React from "react";
import { useProductPage } from "@/context/product-page-context";
import { convertMeasure, unitLabel } from "@/lib/units";

export function SizingMatrix({
  columns,
  rows,
}: {
  columns: [string, string, string, string];
  rows: Array<{ size: string; measureA: number; measureB: number; measureC: number; measureD: number; stock: number }>;
}) {
  const { selectedSize, unit } = useProductPage();

  return (
    <section id="sizing-matrix" className="bg-canvas py-12 md:py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-sec tracking-wider">{`// SIZING_MATRIX.JSON`}</span>
            <h2 className="font-mono font-bold text-text text-xl sm:text-2xl tracking-tight">
              Dimensiones Corporales & Calce
            </h2>
          </div>
          {/* El chip refleja la unidad activa del estado compartido de la página */}
          <span className="px-3 py-1 bg-surface1 border border-border font-mono text-xs text-sec">
            UNIDAD_MEDIDA: {unitLabel(unit)}
          </span>
        </div>

        {/* Table Container with horizontal scroll for mobile */}
        <div
          tabIndex={0}
          role="region"
          aria-label="Tabla de medidas y dimensiones"
          className="border border-border bg-surface1 overflow-x-auto outline-none focus:ring-1 focus:ring-text"
        >
          <table className="w-full text-left font-mono text-xs border-collapse">
            <caption>
              Tabla de talles y especificación dimensional en {unit === "cm" ? "centímetros" : "pulgadas"}
            </caption>
            <thead>
              <tr className="bg-surface2 border-b border-border text-sec">
                <th scope="col" className="p-4 uppercase tracking-wider">SIZE_TAB</th>
                <th scope="col" className="p-4 uppercase tracking-wider">{columns[0]}</th>
                <th scope="col" className="p-4 uppercase tracking-wider">{columns[1]}</th>
                <th scope="col" className="p-4 uppercase tracking-wider">{columns[2]}</th>
                <th scope="col" className="p-4 uppercase tracking-wider">{columns[3]}</th>
                <th scope="col" className="p-4 uppercase tracking-wider">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const isSelected = row.size === selectedSize;
                return (
                  <tr
                    key={row.size}
                    className={`border-b border-border/60 transition-colors ${
                      isSelected ? "bg-surface2/80 text-text font-bold" : "text-sec hover:bg-surface2/30"
                    }`}
                  >
                    <td className="p-4 font-bold text-text flex items-center gap-2">
                      <span>{row.size}</span>
                      {isSelected && (
                        <span className="px-1.5 py-0.5 bg-canvas border border-border text-[9px] text-text font-normal">
                          SELECTED
                        </span>
                      )}
                    </td>
                    <td className="p-4">{convertMeasure(row.measureA, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureB, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureC, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureD, unit)} {unit}</td>
                    <td className="p-4">{row.stock} disp.</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Fit Recommendation Note */}
        <div className="mt-6 p-4 sm:p-6 bg-surface1 border border-border flex items-start gap-3">
          <span className="font-mono text-text font-bold mt-0.5">ℹ</span>
          <div className="flex flex-col gap-1 font-mono text-xs text-sec">
            <span className="text-text font-bold">{`// FIT_RECOMMENDATION`}</span>
            <p className="leading-relaxed">
              Si buscás un fit más contenido y tradicional, recomendamos elegir un talle menos; para lograr la silueta boxy oversize de autor concebida en el diseño original, seleccioná tu talle habitual.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
