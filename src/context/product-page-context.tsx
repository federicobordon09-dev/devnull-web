"use client";

import React, { createContext, useContext, useMemo, useState } from "react";
import type { MeasureUnit } from "@/lib/units";

/**
 * Estado compartido de la página de producto: talle seleccionado y unidad de medida.
 * Lo consumen el panel de información, la matriz de medidas y el modal de talles
 * para mantenerse sincronizados (la fase 2B añade el selector visible de unidad).
 */
interface ProductPageState {
  selectedSize: string;
  setSelectedSize: (size: string) => void;
  unit: MeasureUnit;
  setUnit: (unit: MeasureUnit) => void;
}

const ProductPageContext = createContext<ProductPageState | undefined>(undefined);

export function ProductPageProvider({
  children,
  defaultSize = "M",
}: {
  children: React.ReactNode;
  defaultSize?: string;
}) {
  const [selectedSize, setSelectedSize] = useState<string>(defaultSize);
  const [unit, setUnit] = useState<MeasureUnit>("cm");

  const value = useMemo(
    () => ({ selectedSize, setSelectedSize, unit, setUnit }),
    [selectedSize, unit]
  );

  return <ProductPageContext.Provider value={value}>{children}</ProductPageContext.Provider>;
}

export function useProductPage() {
  const context = useContext(ProductPageContext);
  if (!context) {
    throw new Error("useProductPage must be used within a ProductPageProvider");
  }
  return context;
}
