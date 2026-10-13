import { notFound } from "next/navigation";
import { PRODUCTS, getProductBySlug } from "@/data/products";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ProductHeaderBar } from "@/components/product/product-header-bar";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductInfoPanel } from "@/components/product/product-info-panel";
import { MaterialSpecsTable } from "@/components/product/material-specs-table";
import { SizingMatrix } from "@/components/product/sizing-matrix";
import { StackRecommendation } from "@/components/product/stack-recommendation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Producto no encontrado | Dev/Null",
    };
  }

  return {
    title: `${product.name} | Dev/Null`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const totalStock = Object.values(product.stockByTalle).reduce((a, b) => a + b, 0);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-text focus:text-canvas font-mono text-xs"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main" className="flex-1 bg-canvas">
        <ProductHeaderBar
          terminalPath={product.terminalPath}
          specFile={product.specFile}
          buildHash={product.buildHash}
          totalStock={totalStock}
        />

        {/* Main Product Section: Gallery & Info Panel */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7">
              <ProductGallery gallery={product.gallery} />
            </div>
            <div className="lg:col-span-5">
              <ProductInfoPanel product={product} />
            </div>
          </div>
        </div>

        <MaterialSpecsTable specs={product.specs} />
        <SizingMatrix columns={product.sizingColumns} rows={product.sizingRows} />
        <StackRecommendation currentSlug={product.slug} />
      </main>
      <Footer />
    </>
  );
}
