export function Footer() {
  const currentYear = 2026;

  return (
    <footer id="contacto" className="bg-canvas border-t border-border pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-border">

          {/* Column 1: Brand & Desc */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-surface2 border border-border flex items-center justify-center font-mono font-bold text-text text-xs">
                DN
              </div>
              <span className="font-mono font-bold tracking-wider text-text text-sm">DEV/NULL</span>
            </div>
            <p className="text-sec text-sm leading-relaxed">
              Prendas de especificación técnica y utilitarismo brutalista concebidas para entornos de ejecución continua.
            </p>
            <div>
              <span className="inline-block px-2.5 py-1 bg-surface1 border border-border font-mono text-[11px] text-sec tracking-wider">
                SYSTEM_STATUS // COMPILED_OK
              </span>
            </div>
          </div>

          {/* Column 2: Directory Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs tracking-wider text-sec uppercase">{`// NAVEGACIÓN_DIRECTORIO`}</h3>
            <ul className="flex flex-col gap-2.5 font-mono text-xs">
              <li>
                <a href="#coleccion" className="text-sec hover:text-text transition-colors">
                  Colección
                </a>
              </li>
              <li>
                <a href="#nosotros" className="text-sec hover:text-text transition-colors">
                  Nosotros
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-sec hover:text-text transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <span aria-disabled="true" className="text-sec/60 cursor-not-allowed select-none">
                  Términos
                </span>
              </li>
              <li>
                <span aria-disabled="true" className="text-sec/60 cursor-not-allowed select-none">
                  Envíos
                </span>
              </li>
            </ul>
          </div>

          {/* Column 3: Kernel Stdout */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs tracking-wider text-sec uppercase">{`// KERNEL_STDOUT`}</h3>
            <div className="p-4 bg-surface1 border border-border font-mono text-xs text-sec flex flex-col gap-2">
              <p className="text-text/90">echo &quot;dev/null&quot; &gt; /universe</p>
              <p className="text-sec/70 text-[11px]">BUILD_ID: 0x7F4B2A90</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-sec">
          <p>DEV_NULL_OS © {currentYear}. Proyecto conceptual, sin ventas reales</p>
          <p className="tracking-wider">NULL_DEVICE // /DEV/NULL // ALL RIGHTS RESERVED</p>
        </div>
      </div>
    </footer>
  );
}
