import React from "react";
import Link from "next/link";

export function ProductHeaderBar({
  terminalPath,
  specFile,
  buildHash,
  totalStock,
}: {
  terminalPath: string;
  specFile: string;
  buildHash: string;
  totalStock: number;
}) {
  const inStock = totalStock > 0;

  return (
    <div className="bg-surface1 border-b border-border py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-3 font-mono text-xs">

        {/* Left: breadcrumb & terminal file */}
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/#coleccion"
            className="text-sec hover:text-text transition-colors flex items-center gap-1 focus:outline-none focus:ring-1 focus:ring-text"
          >
            <span>‹ [ .. /colección ]</span>
          </Link>
          <span className="text-border" aria-hidden="true">/</span>
          <span className="text-sec">{terminalPath}</span>
          <span className="px-2 py-1 bg-surface2 border border-border text-text">
            {specFile}
          </span>
        </div>

        {/* Right: build hash & status */}
        <div className="flex items-center gap-4 text-sec">
          <span className="text-[11px]">{buildHash}</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-canvas border border-border">
            <span
              className={`w-2 h-2 ${inStock ? "bg-text" : "bg-ghost"}`}
              aria-hidden="true"
            />
            <span className="text-[11px] text-text font-bold">
              {inStock ? "STATUS: IN_STOCK" : "STATUS: OUT_OF_STOCK"}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
