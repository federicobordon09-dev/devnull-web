export interface ProductSpecRow {
  code: string;
  label: string;
  value: string;
}

export interface SizingRow {
  size: string;
  measureA: number;
  measureB: number;
  measureC: number;
  measureD: number;
  stock: number;
  /** Rango de altura orientativo que se muestra en la columna RECOMENDACIÓN del modal. */
  recommendedHeight: string;
}

export interface ProductGalleryImage {
  src: string;
  alt: string;
  label: string;
  sublabel: string;
}

/** Etiquetas técnicas que acompañan al visor de galería (una por producto). */
export interface ProductGalleryMeta {
  viewportRef: string;
  color: string;
  density: string;
  cut: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  specTag: string;
  specId: string;
  shortDescription: string;
  longDescription: string;
  finishTone: {
    name: string;
    hex: string;
    badge: string;
  };
  stockByTalle: Record<string, number>;
  gallery: ProductGalleryImage[];
  galleryMeta: ProductGalleryMeta;
  specs: ProductSpecRow[];
  sizingColumns: [string, string, string, string];
  /** Encabezados técnicos (en) que usa la tabla del modal de medidas. */
  sizingColumnsModal: [string, string, string, string];
  sizingRows: SizingRow[];
  fitNote: string;
  logistics: string[];
  /** Tres pasos de medición mostrados en el modal, adaptados al tipo de prenda. */
  measurementInstructions: { title: string; body: string }[];
  terminalPath: string;
  specFile: string;
  buildHash: string;
  features: string[];
  image: {
    src: string;
    alt: string;
  };
  outfitIndex: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "root-hoodie",
    slug: "root-hoodie",
    name: "Root Hoodie",
    price: 89000,
    specTag: "SPEC // 420_GSM",
    specId: "01_ROOT_HOODIE",
    shortDescription: "Algodón peinado pesado 420g • Corte boxy oversize • Capucha doble panel con cordones colgantes.",
    longDescription: "Sudadera de especificación pesada con capucha de doble panel estructurada y cordones al tono. Algodón frisado denso de 420 GSM diseñado para conferir geometría estricta, caída recta y aislamiento térmico constante.",
    finishTone: {
      name: "Gris Melange (Default)",
      hex: "#A3A3A3",
      badge: "COMBED HEAVY"
    },
    stockByTalle: {
      S: 2,
      M: 5,
      L: 4,
      XL: 3,
      XXL: 1
    },
    gallery: [
      {
        src: "/Sudadera gris con capucha Dev_Null.png",
        alt: "Root Hoodie, vista frontal",
        label: "FRONT",
        sublabel: "OVERVIEW"
      }
    ],
    galleryMeta: {
      viewportRef: "01_ROOT",
      color: "GRIS MELANGE",
      density: "420 GSM",
      cut: "BOX_RELAXED_CUT"
    },
    specs: [
      { code: "01", label: "COMPOSICIÓN", value: "100% Algodón peinado pesado (Heavyweight)" },
      { code: "02", label: "GRAMAJE", value: "420 GSM (Frisado premium de alta densidad)" },
      { code: "03", label: "PATRÓN & CORTE", value: "Boxy / Relaxed fit (Caída perpendicular recta)" },
      { code: "04", label: "CAPUCHA", value: "Doble capa estructurada (2 paneles, cordones al tono)" }, // Corregido: provisorio, ligado al boceto actual
      { code: "05", label: "COMPARTIMIENTO", value: "Bolsillo canguro frontal con triple pespunte" }, // provisorio, ligado al boceto actual
      { code: "06", label: "APLICACIÓN IDENTIDAD", value: "Bordado tonal 'Dev/Null' al pecho en hilo gris" }, // provisorio, ligado al boceto actual
      { code: "07", label: "TOLERANCIA CONSTRUCTIVA", value: "±0.5mm strict build standard tolerance" },
      { code: "08", label: "MANUFACTURA", value: "Confeccionado éticamente en Buenos Aires, Arg." }
    ],
    sizingColumns: ["ANCHO DE PECHO (A)", "LARGO TOTAL (B)", "MANGA DESDE CUELLO (C)", "HOMBRO A HOMBRO (D)"],
    sizingColumnsModal: ["CHEST (A)", "LENGTH (B)", "SLEEVE (C)", "SHOULDER (D)"],
    sizingRows: [
      { size: "S", measureA: 60, measureB: 68, measureC: 78, measureD: 56, stock: 2, recommendedHeight: "Altura 1.65 – 1.74m" },
      { size: "M", measureA: 63, measureB: 71, measureC: 80, measureD: 59, stock: 5, recommendedHeight: "Altura 1.74 – 1.82m" },
      { size: "L", measureA: 66, measureB: 74, measureC: 82, measureD: 62, stock: 4, recommendedHeight: "Altura 1.82 – 1.89m" },
      { size: "XL", measureA: 69, measureB: 77, measureC: 84, measureD: 65, stock: 3, recommendedHeight: "Altura 1.89 – 1.95m" },
      { size: "XXL", measureA: 72, measureB: 80, measureC: 86, measureD: 68, stock: 1, recommendedHeight: "Altura 1.95m+" }
    ],
    fitNote: "Oversize natural cuadrado. Si preferís calce regular ajustado, optá por 1 talle menos.",
    logistics: [
      "Despacho en 24-48hs hábiles a toda la República Argentina.",
      "30 días para cambios sin fricción o costo logístico en primera gestión.",
      "Confección de alta densidad testeada en laboratorio contra encogimiento térmico."
    ],
    measurementInstructions: [
      { title: "Superficie Plana", body: "Colocá una sudadera que te quede cómoda completamente extendida sobre una superficie plana." },
      { title: "Medición de Ancho", body: "Medí el ancho de pecho 2.5 cm por debajo de la sisa de axila a axila de extremo a extremo." },
      { title: "Cotejo con la Matriz", body: "Compará tus medidas con la fila de tu talle: el ancho (A) debe quedar holgado y el largo (B) a la altura de la cadera para el calce boxy." }
    ],
    terminalPath: "root@devnull:~/store/drop_01/hoodie $",
    specFile: "cat root_hoodie.spec",
    buildHash: "BUILD_HASH: 0x4208GSM_COTTON",
    features: [
      "Algodón peinado pesado 420g",
      "Corte boxy oversize",
      "Capucha doble panel con cordones colgantes"
    ],
    image: {
      src: "/Sudadera gris con capucha Dev_Null.png",
      alt: "Root Hoodie, vista frontal"
    },
    outfitIndex: "01 // ROOT"
  },
  {
    // PLACEHOLDER: Null Tee no tiene boceto propio. Descripción larga, filas de
    // especificación, medidas por talle, stock y etiquetas de galería son valores
    // derivados del copy de la home — reemplazar cuando exista el spec real.
    id: "null-tee",
    slug: "null-tee",
    name: "Null Tee",
    price: 48000,
    specTag: "SPEC // 240_GSM",
    specId: "02_NULL_TEE",
    shortDescription: "Algodón premium 240g • Detalle tipográfico sutil • Cuello cerrado de rib reforzado anti-deformación.",
    longDescription: "Camiseta de especificación técnica en algodón premium de 240 GSM. Diseñada con cuello cerrado de rib reforzado y silueta equilibrada para uso continuo sin pérdida de estructura.",
    finishTone: {
      name: "Blanco Óptico (Default)",
      hex: "#F4F4F4",
      badge: "PREMIUM TEE"
    },
    stockByTalle: {
      S: 4,
      M: 8,
      L: 6,
      XL: 2,
      XXL: 0
    },
    gallery: [
      {
        src: "/Camiseta blanca minimalista Dev_Null.png",
        alt: "Null Tee, vista frontal",
        label: "FRONT",
        sublabel: "OVERVIEW"
      }
    ],
    galleryMeta: {
      viewportRef: "02_TEE",
      color: "BLANCO ÓPTICO",
      density: "240 GSM",
      cut: "REGULAR_STRAIGHT_CUT"
    },
    specs: [
      { code: "01", label: "COMPOSICIÓN", value: "100% Algodón premium ring-spun" },
      { code: "02", label: "GRAMAJE", value: "240 GSM (Jersey de alta compactación)" },
      { code: "03", label: "PATRÓN & CORTE", value: "Regular / Straight fit estructurado" },
      { code: "04", label: "CUELLO", value: "Rib reforzado anti-deformación de 2.5cm" }, // provisorio, ligado al boceto actual
      { code: "05", label: "TERMINACIÓN", value: "Doble costura en dobladillos y hombros" },
      { code: "06", label: "APLICACIÓN IDENTIDAD", value: "Micro-etiqueta lateral tejida Dev/Null" }, // provisorio, ligado al boceto actual
      { code: "07", label: "TOLERANCIA CONSTRUCTIVA", value: "±0.5mm strict build standard tolerance" },
      { code: "08", label: "MANUFACTURA", value: "Confeccionado éticamente en Buenos Aires, Arg." }
    ],
    sizingColumns: ["ANCHO DE PECHO (A)", "LARGO TOTAL (B)", "MANGA DESDE CUELLO (C)", "HOMBRO A HOMBRO (D)"],
    sizingColumnsModal: ["CHEST (A)", "LENGTH (B)", "SLEEVE (C)", "SHOULDER (D)"],
    sizingRows: [
      { size: "S", measureA: 52, measureB: 70, measureC: 42, measureD: 48, stock: 4, recommendedHeight: "Altura 1.65 – 1.74m" },
      { size: "M", measureA: 55, measureB: 72, measureC: 44, measureD: 51, stock: 8, recommendedHeight: "Altura 1.74 – 1.82m" },
      { size: "L", measureA: 58, measureB: 74, measureC: 46, measureD: 54, stock: 6, recommendedHeight: "Altura 1.82 – 1.89m" },
      { size: "XL", measureA: 61, measureB: 76, measureC: 48, measureD: 57, stock: 2, recommendedHeight: "Altura 1.89 – 1.95m" },
      { size: "XXL", measureA: 64, measureB: 78, measureC: 50, measureD: 60, stock: 0, recommendedHeight: "Altura 1.95m+" }
    ],
    fitNote: "Calce regular estándar. Elegí tu talle habitual para un ajuste limpio.",
    logistics: [
      "Despacho en 24-48hs hábiles a toda la República Argentina.",
      "30 días para cambios sin fricción o costo logístico en primera gestión.",
      "Jersey compactado testeado contra torsión lateral."
    ],
    measurementInstructions: [
      { title: "Superficie Plana", body: "Colocá una remera que te quede cómoda completamente extendida sobre una superficie plana." },
      { title: "Medición de Ancho", body: "Medí el ancho de pecho 2.5 cm por debajo de la sisa de axila a axila de extremo a extremo." },
      { title: "Cotejo con la Matriz", body: "Compará tus medidas con la fila de tu talle: el ancho (A) debe quedar al ras del cuerpo y el largo (B) a la altura de la cadera para el calce regular." }
    ],
    terminalPath: "root@devnull:~/store/drop_01/tee $",
    specFile: "cat null_tee.spec",
    buildHash: "BUILD_HASH: 0x240GSM_COTTON",
    features: [
      "Algodón premium 240g",
      "Detalle tipográfico sutil",
      "Cuello cerrado de rib reforzado anti-deformación"
    ],
    image: {
      src: "/Camiseta blanca minimalista Dev_Null.png",
      alt: "Null Tee, vista frontal"
    },
    outfitIndex: "02 // TEE"
  },
  {
    // PLACEHOLDER: Cargo Pants no tiene boceto propio. Descripción larga, filas de
    // especificación, medidas por talle, stock y etiquetas de galería son valores
    // derivados del copy de la home — reemplazar cuando exista el spec real.
    id: "cargo-pants",
    slug: "cargo-pants",
    name: "Cargo Pants",
    price: 78000,
    specTag: "SPEC // TECHNICAL_TWILL",
    specId: "03_CARGO_PANTS",
    shortDescription: "Sarga técnica elastizada • Bolsillos cargo tácticos con fuelle plano • Cintura articulada ergonómica.",
    longDescription: "Pantalón cargo de especificación utilitaria en sarga técnica elastizada. Diseñado con cintura articulada ergonómica y bolsillos tácticos de fuelle plano para máxima funcionalidad en estaciones de trabajo prolongadas.",
    finishTone: {
      name: "Negro Técnico (Default)",
      hex: "#1A1A1A",
      badge: "TACTICAL TWILL"
    },
    stockByTalle: {
      S: 3,
      M: 5,
      L: 5,
      XL: 2,
      XXL: 1
    },
    gallery: [
      {
        src: "/Pantalón cargo jogger negro Dev_Null.png",
        alt: "Cargo Pants, vista frontal",
        label: "FRONT",
        sublabel: "OVERVIEW"
      }
    ],
    galleryMeta: {
      viewportRef: "03_CARGO",
      color: "NEGRO TÉCNICO",
      density: "320 GSM",
      cut: "ERGONOMIC_TAPERED_CUT"
    },
    specs: [
      { code: "01", label: "COMPOSICIÓN", value: "98% Algodón, 2% Elastano (Sarga técnica)" },
      { code: "02", label: "GRAMAJE", value: "320 GSM (Tejido denso de alta resistencia)" },
      { code: "03", label: "PATRÓN & CORTE", value: "Ergonomic Jogger / Relaxed tapered" },
      { code: "04", label: "BOLSILLOS", value: "Bolsillos cargo laterales con fuelle plano y broches" }, // provisorio, ligado al boceto actual
      { code: "05", label: "CINTURA", value: "Cintura elástica integrada con cordón de ajuste interno" }, // provisorio, ligado al boceto actual
      { code: "06", label: "RODILLAS", value: "Pinzas de articulación anatómica en rodillas" }, // provisorio, ligado al boceto actual
      { code: "07", label: "TOLERANCIA CONSTRUCTIVA", value: "±0.5mm strict build standard tolerance" },
      { code: "08", label: "MANUFACTURA", value: "Confeccionado éticamente en Buenos Aires, Arg." }
    ],
    sizingColumns: ["CINTURA (A)", "CADERA (B)", "TIRO (C)", "LARGO (D)"],
    sizingColumnsModal: ["WAIST (A)", "HIP (B)", "RISE (C)", "LENGTH (D)"],
    sizingRows: [
      { size: "S", measureA: 38, measureB: 50, measureC: 30, measureD: 100, stock: 3, recommendedHeight: "Altura 1.65 – 1.74m" },
      { size: "M", measureA: 40, measureB: 53, measureC: 31, measureD: 102, stock: 5, recommendedHeight: "Altura 1.74 – 1.82m" },
      { size: "L", measureA: 42, measureB: 56, measureC: 32, measureD: 104, stock: 5, recommendedHeight: "Altura 1.82 – 1.89m" },
      { size: "XL", measureA: 44, measureB: 59, measureC: 33, measureD: 106, stock: 2, recommendedHeight: "Altura 1.89 – 1.95m" },
      { size: "XXL", measureA: 46, measureB: 62, measureC: 34, measureD: 108, stock: 1, recommendedHeight: "Altura 1.95m+" }
    ],
    fitNote: "Calce ergonómico con ajuste en tobillo. Elegí tu talle habitual.",
    logistics: [
      "Despacho en 24-48hs hábiles a toda la República Argentina.",
      "30 días para cambios sin fricción o costo logístico en primera gestión.",
      "Tejido testado contra abrasión y pérdida de elasticidad."
    ],
    measurementInstructions: [
      { title: "Superficie Plana", body: "Colocá un pantalón que te quede cómodo completamente extendido sobre una superficie plana." },
      { title: "Medición de Cintura y Cadera", body: "Medí la cintura de extremo a extremo y la cadera a la altura de los bolsillos cargo." },
      { title: "Cotejo con la Matriz", body: "Compará tus medidas con la fila de tu talle: la cintura (A) debe quedar cómoda y el largo (D) a la altura del tobillo." }
    ],
    terminalPath: "root@devnull:~/store/drop_01/cargo $",
    specFile: "cat cargo_pants.spec",
    buildHash: "BUILD_HASH: 0xTECHNICAL_TWILL",
    features: [
      "Sarga técnica elastizada",
      "Bolsillos cargo tácticos con fuelle plano",
      "Cintura articulada ergonómica"
    ],
    image: {
      src: "/Pantalón cargo jogger negro Dev_Null.png",
      alt: "Cargo Pants, vista frontal"
    },
    outfitIndex: "03 // CARGO"
  }
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-AR", {
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
