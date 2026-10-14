export type MeasureUnit = "cm" | "in";

/** Convierte una medida en cm a la unidad indicada (1 in = 2.54 cm, 1 decimal). */
export function convertMeasure(valueCm: number, unit: MeasureUnit): string {
  return unit === "in" ? (valueCm / 2.54).toFixed(1) : String(valueCm);
}

/** Etiqueta legible de la unidad activa para chips y leyendas. */
export function unitLabel(unit: MeasureUnit): string {
  return unit === "cm" ? "CENTÍMETROS (cm)" : "PULGADAS (in)";
}
