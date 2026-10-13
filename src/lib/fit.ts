import { Product } from "@/data/products";

export interface FitInput {
  alturaCm: number;
  pesoKg: number;
  preferencia: "boxy" | "regular";
}

export interface FitResult {
  talleRecomendado: string | null;
  error?: string;
}

export function recomendarTalle(input: FitInput, product: Product): FitResult {
  const { alturaCm, pesoKg, preferencia } = input;

  if (!alturaCm || isNaN(alturaCm)) {
    return { talleRecomendado: null };
  }

  if (alturaCm < 140 || alturaCm > 210) {
    return { talleRecomendado: null, error: "// ERROR: altura fuera de rango (140–210 cm)" };
  }

  if (pesoKg && (pesoKg < 40 || pesoKg > 150)) {
    return { talleRecomendado: null, error: "// ERROR: peso fuera de rango (40–150 kg)" };
  }

  // Heurística DEMO basada en altura y peso aproximado
  let baseIndex = 1; // M por defecto
  if (alturaCm < 168) baseIndex = 0; // S
  else if (alturaCm >= 168 && alturaCm < 175) baseIndex = 1; // M
  else if (alturaCm >= 175 && alturaCm < 182) baseIndex = 2; // L
  else if (alturaCm >= 182 && alturaCm < 189) baseIndex = 3; // XL
  else baseIndex = 4; // XXL

  // Ajuste por peso
  if (pesoKg) {
    if (pesoKg > 90 && baseIndex < 4) baseIndex += 1;
    if (pesoKg > 105 && baseIndex < 4) baseIndex += 1;
    if (pesoKg < 60 && baseIndex > 0) baseIndex -= 1;
  }

  // Ajuste por preferencia regular (baja un talle si busca calce ajustado)
  if (preferencia === "regular" && baseIndex > 0) {
    baseIndex -= 1;
  }

  const tallesDisponibles = Object.keys(product.stockByTalle);
  const talleFinal = tallesDisponibles[Math.min(baseIndex, tallesDisponibles.length - 1)];

  return { talleRecomendado: talleFinal };
}
