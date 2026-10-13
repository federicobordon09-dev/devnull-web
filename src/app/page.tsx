"use client";

import React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { CollectionGrid } from "@/components/home/collection-grid";
import { BrandManifesto } from "@/components/home/brand-manifesto";
import { DetailsStrip } from "@/components/home/details-strip";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-text focus:text-canvas font-mono text-xs"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <CollectionGrid />
        <BrandManifesto />
        <DetailsStrip />
      </main>
      <Footer />
    </>
  );
}
