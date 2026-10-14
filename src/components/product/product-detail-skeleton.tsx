import React from "react";

/**
 * Fallback del límite <Suspense> de la página de producto.
 * Aproxima el layout final (header bar, galería + panel, specs, matriz y stack)
 * para evitar saltos de layout mientras llega el contenido dependiente de la URL.
 */
export function ProductDetailSkeleton() {
  return (
    <div className="animate-pulse" aria-hidden="true">
      <span className="sr-only" role="status">
        Cargando especificación del producto…
      </span>

      {/* ProductHeaderBar */}
      <div className="bg-surface1 border-b border-border py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="h-4 w-32 bg-surface2" />
            <div className="h-5 w-40 bg-surface2" />
          </div>
          <div className="flex items-center gap-4">
            <div className="h-4 w-44 bg-surface2" />
            <div className="h-6 w-36 bg-surface2" />
          </div>
        </div>
      </div>

      {/* Galería + panel de información */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] w-full bg-surface1 border border-border" />
          </div>
          <div className="lg:col-span-5 bg-surface1 border border-border p-6 sm:p-8 flex flex-col gap-6">
            <div className="h-4 w-56 bg-surface2" />
            <div className="h-8 w-64 bg-surface2" />
            <div className="flex flex-col gap-2">
              <div className="h-3 w-full bg-surface2" />
              <div className="h-3 w-11/12 bg-surface2" />
              <div className="h-3 w-3/4 bg-surface2" />
            </div>
            <div className="flex flex-wrap gap-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="h-14 w-16 bg-surface2" />
              ))}
            </div>
            <div className="h-12 w-full bg-surface2" />
          </div>
        </div>
      </div>

      {/* MaterialSpecsTable */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-7 w-80 max-w-full bg-surface2 mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div key={i} className="bg-surface1 p-5 sm:p-6">
                <div className="h-3 w-3/4 bg-surface2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SizingMatrix */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-7 w-72 max-w-full bg-surface2 mb-8" />
          <div className="border border-border bg-surface1 p-4 flex flex-col gap-3">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-6 w-full bg-surface2" />
            ))}
          </div>
        </div>
      </section>

      {/* StackRecommendation */}
      <section className="py-12 md:py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-7 w-64 max-w-full bg-surface2 mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-surface1 p-4 flex flex-col gap-4">
                <div className="aspect-[4/5] w-full bg-surface2" />
                <div className="h-4 w-2/3 bg-surface2" />
                <div className="h-9 w-full bg-surface2" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
