"use client";

import React, { useState, useEffect, useRef } from "react";
import { Product } from "@/data/products";
import { recomendarTalle } from "@/lib/fit";
import { convertMeasure } from "@/lib/units";
import { SizingDiagram } from "./sizing-diagram";

interface SizingModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  selectedSize: string;
  onSelectSize: (size: string) => void;
  unit: "cm" | "in";
  onToggleUnit: (unit: "cm" | "in") => void;
}

export function SizingModal({
  product,
  isOpen,
  onClose,
  selectedSize,
  onSelectSize,
  unit,
  onToggleUnit,
}: SizingModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [altura, setAltura] = useState<string>("");
  const [peso, setPeso] = useState<string>("");
  const [preferencia, setPreferencia] = useState<"boxy" | "regular">("boxy");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = "hidden";
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = "";
      }
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  const alturaNum = parseFloat(altura);
  const pesoNum = parseFloat(peso);
  const fitResult = recomendarTalle(
    { alturaCm: alturaNum, pesoKg: pesoNum, preferencia },
    product
  );

  const recommendedSize = fitResult.talleRecomendado;
  const recommendedStock = recommendedSize ? product.stockByTalle[recommendedSize] ?? 0 : 0;
  const isRecommendedOutOfStock = recommendedStock === 0;

  const isBottom = product.id === "cargo-pants";
  const calcHeaderCode = String.fromCharCode(47, 47, 32) + "FIT_CALCULATOR_V1.2";

  return (
    <dialog
      ref={dialogRef}
      onClose={handleClose}
      className="bg-canvas text-text border border-border p-0 w-[95vw] md:w-[75vw] max-w-5xl max-h-[90vh] overflow-y-auto backdrop:bg-black/80 open:flex flex-col select-none"
    >
      {/* Top Bar */}
      <div className="sticky top-0 z-20 bg-surface2 border-b border-border px-6 py-3 flex items-center justify-between font-mono text-xs">
        <span className="text-text tracking-wider">{`// SYS_DIALOG: SIZING_MATRIX.SPEC // [ESC to close]`}</span>
        <button
          onClick={handleClose}
          aria-label="Cerrar tabla de medidas"
          className="px-2.5 py-1 bg-canvas border border-border text-text hover:bg-text hover:text-canvas transition-colors"
        >
          [ × ESC ]
        </button>
      </div>

      <div className="p-6 sm:p-10 flex flex-col gap-10">
        {/* Header & Unit Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-border">
          <div className="flex flex-col gap-2">
            <span className="font-mono text-xs text-sec tracking-wider">{`// TECHNICAL_FIT_ARCHITECTURE`}</span>
            <h2 className="font-mono font-bold text-text text-xl sm:text-2xl tracking-tight">
              TABLA DE MEDIDAS & CALCE // {product.name.toUpperCase()}
            </h2>
            <p className="font-sans text-sec text-sm max-w-2xl leading-relaxed">
              Dimensiones técnicas rigurosas optimizadas para confort y ergonomía de larga duración en entorno de desarrollo.
            </p>
          </div>

          {/* Unit Toggle */}
          <fieldset className="flex border border-border bg-surface1 p-1 font-mono text-xs">
            <legend className="sr-only">Unidad de medida</legend>
            <label className={`px-3 py-1.5 cursor-pointer transition-colors ${unit === "cm" ? "bg-text text-canvas font-bold" : "text-sec hover:text-text"}`}>
              <input
                type="radio"
                name="sizing-unit"
                checked={unit === "cm"}
                onChange={() => onToggleUnit("cm")}
                className="sr-only"
              />
              CM
            </label>
            <label className={`px-3 py-1.5 cursor-pointer transition-colors ${unit === "in" ? "bg-text text-canvas font-bold" : "text-sec hover:text-text"}`}>
              <input
                type="radio"
                name="sizing-unit"
                checked={unit === "in"}
                onChange={() => onToggleUnit("in")}
                className="sr-only"
              />
              IN
            </label>
          </fieldset>
        </div>

        {/* Diagram & Vector Spec Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <SizingDiagram type={isBottom ? "bottom" : "top"} />
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="font-mono text-xs text-sec tracking-wider">{`// VECTOR_SPEC_REFERENCE`}</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              {isBottom ? (
                <>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[A] CINTURA</span>
                    <span className="text-sec text-[11px]">Contorno superior de banda elástica extendida.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[B] CADERA</span>
                    <span className="text-sec text-[11px]">Ancho horizontal a la altura de bolsillos cargo.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[C] TIRO</span>
                    <span className="text-sec text-[11px]">Distancia desde la costura central hasta la cintura.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[D] LARGO</span>
                    <span className="text-sec text-[11px]">Longitud total exterior desde cintura hasta el tobillo.</span>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[A] Ancho de Pecho</span>
                    <span className="text-sec text-[11px]">De costura a costura bajo la sisa axilar.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[B] Largo Total</span>
                    <span className="text-sec text-[11px]">Desde el punto más alto del hombro hasta la base del rib.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[C] Manga</span>
                    <span className="text-sec text-[11px]">Desde costura de unión de hombro hasta el puño.</span>
                  </div>
                  <div className="p-3 bg-surface1 border border-border">
                    <span className="text-text font-bold block mb-1">[D] Hombro a Hombro</span>
                    <span className="text-sec text-[11px]">Vértice a vértice de costura frontal superior.</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Full Table */}
        <div className="border border-border bg-surface1 overflow-x-auto">
          <table className="w-full text-left font-mono text-xs border-collapse">
            <caption>Matriz dimensional completa por talle</caption>
            <thead>
              <tr className="bg-surface2 border-b border-border text-sec">
                <th scope="col" className="p-4 uppercase">TALLA</th>
                <th scope="col" className="p-4 uppercase">{product.sizingColumns[0]}</th>
                <th scope="col" className="p-4 uppercase">{product.sizingColumns[1]}</th>
                <th scope="col" className="p-4 uppercase">{product.sizingColumns[2]}</th>
                <th scope="col" className="p-4 uppercase">{product.sizingColumns[3]}</th>
                <th scope="col" className="p-4 uppercase">RECOMENDACIÓN</th>
                <th scope="col" className="p-4 uppercase">STOCK</th>
              </tr>
            </thead>
            <tbody>
              {product.sizingRows.map((row) => {
                const isSelected = row.size === selectedSize;
                const recs: Record<string, string> = {
                  S: "Altura 1.65 – 1.70m",
                  M: "Altura 1.70 – 1.78m",
                  L: "Altura 1.78 – 1.84m",
                  XL: "Altura 1.84 – 1.90m",
                  XXL: "Altura 1.90m+",
                };

                return (
                  <tr
                    key={row.size}
                    className={`border-b border-border/60 transition-colors ${
                      isSelected ? "bg-surface2 text-text font-bold" : "text-sec hover:bg-surface2/30"
                    }`}
                  >
                    <td className="p-4 text-text font-bold">
                      {row.size}
                      {isSelected && <span className="ml-2 px-1 bg-canvas border border-border text-[9px]">ACTIVE</span>}
                    </td>
                    <td className="p-4">{convertMeasure(row.measureA, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureB, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureC, unit)} {unit}</td>
                    <td className="p-4">{convertMeasure(row.measureD, unit)} {unit}</td>
                    <td className="p-4 text-text/80">{recs[row.size] || "Altura estándar"}</td>
                    <td className="p-4">{row.stock} disp.</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Fit Calculator V1.2 */}
        <div className="p-6 bg-surface1 border border-border flex flex-col gap-6">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-text font-bold">{calcHeaderCode}</span>
            <span className="text-sec text-[11px]">Algoritmo heurístico de recomendación</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="altura-input" className="font-mono text-xs text-sec">
                TU ALTURA (cm)
              </label>
              <input
                id="altura-input"
                type="number"
                min="140"
                max="210"
                placeholder="Ej. 175"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
                className="px-4 py-2.5 bg-canvas border border-border font-mono text-sm text-text focus:border-text outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="peso-input" className="font-mono text-xs text-sec">
                TU PESO (kg)
              </label>
              <input
                id="peso-input"
                type="number"
                min="40"
                max="150"
                placeholder="Ej. 75"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
                className="px-4 py-2.5 bg-canvas border border-border font-mono text-sm text-text focus:border-text outline-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs text-sec">PREFERENCIA DE CALCE</span>
              <div className="grid grid-cols-2 gap-2 h-full">
                <button
                  type="button"
                  onClick={() => setPreferencia("boxy")}
                  className={`border font-mono text-xs px-2 py-2 transition-colors ${
                    preferencia === "boxy" ? "bg-text text-canvas font-bold border-text" : "bg-canvas text-sec border-border"
                  }`}
                >
                  Oversize
                </button>
                <button
                  type="button"
                  onClick={() => setPreferencia("regular")}
                  className={`border font-mono text-xs px-2 py-2 transition-colors ${
                    preferencia === "regular" ? "bg-text text-canvas font-bold border-text" : "bg-canvas text-sec border-border"
                  }`}
                >
                  Regular
                </button>
              </div>
            </div>
          </div>

          {/* Calculator Output / Error */}
          <div className="pt-4 border-t border-border font-mono text-xs">
            {fitResult.error ? (
              <p aria-live="polite" className="text-text font-bold">{fitResult.error}</p>
            ) : recommendedSize ? (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <p aria-live="polite" className="text-text font-bold">
                  {`> CALCE RECOMENDADO: TALLE ${recommendedSize}`}
                  {isRecommendedOutOfStock && <span className="text-sec font-normal ml-2">{`// SIN_STOCK en talle ${recommendedSize}`}</span>}
                </p>
                {!isRecommendedOutOfStock && (
                  <button
                    onClick={() => {
                      onSelectSize(recommendedSize);
                      handleClose();
                    }}
                    className="px-4 py-2 bg-text text-canvas font-bold hover:bg-surface2 hover:text-text border border-text transition-colors"
                  >
                    [ APLICAR TALLE {recommendedSize} ]
                  </button>
                )}
              </div>
            ) : (
              <p aria-live="polite" className="text-sec">&gt; INGRESÁ ALTURA Y PESO</p>
            )}
          </div>
        </div>

        {/* Instructions */}
        <div className="flex flex-col gap-3 font-mono text-xs">
          <span className="text-sec tracking-wider">{`// INSTRUCCIONES DE MEDICIÓN EXACTA`}</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sec text-[11px] leading-relaxed">
            <div className="p-4 bg-surface1 border border-border">
              <span className="text-text font-bold block mb-1">01. Superficie Plana</span>
              Colocá una prenda similar que te quede cómoda completamente extendida sobre una superficie plana.
            </div>
            <div className="p-4 bg-surface1 border border-border">
              <span className="text-text font-bold block mb-1">02. Medición de Ancho</span>
              Medí el ancho de pecho 2.5 cm por debajo de la sisa de axila a axila de extremo a extremo.
            </div>
          </div>
        </div>

        {/* Modal Foot Actions */}
        <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-end gap-4">
          <button
            onClick={handleClose}
            className="w-full sm:w-auto px-6 py-3 bg-surface1 border border-border text-sec font-mono text-xs tracking-wider hover:text-text hover:border-text transition-colors"
          >
            [ VOLVER AL PRODUCTO ]
          </button>
          <button
            onClick={() => {
              if (recommendedSize && !isRecommendedOutOfStock) {
                onSelectSize(recommendedSize);
                handleClose();
              }
            }}
            disabled={!recommendedSize || isRecommendedOutOfStock}
            className={`w-full sm:w-auto px-6 py-3 font-mono text-xs font-bold tracking-wider border transition-colors ${
              !recommendedSize || isRecommendedOutOfStock
                ? "bg-surface2 text-sec border-border cursor-not-allowed"
                : "bg-text text-canvas border-text hover:bg-surface2 hover:text-text"
            }`}
          >
            {recommendedSize && !isRecommendedOutOfStock
              ? `✓ SELECCIONAR TALLE ${recommendedSize} Y CERRAR`
              : "[ SELECCIONAR TALLE VÁLIDO ]"}
          </button>
        </div>
      </div>
    </dialog>
  );
}
