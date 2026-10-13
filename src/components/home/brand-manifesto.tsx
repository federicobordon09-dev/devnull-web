export function BrandManifesto() {
  return (
    <section id="nosotros" className="bg-canvas py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-surface1 border border-border flex flex-col">

          {/* Top Bar */}
          <div className="px-4 py-3 bg-surface2 border-b border-border flex items-center justify-between font-mono text-xs">
            <span className="text-text tracking-wider">{`// BRAND_MANIFESTO`}</span>
            <span className="text-sec tracking-wider text-[11px] hidden sm:inline">
              cat /etc/devnull.conf | grep &apos;philosophy&apos;
            </span>
          </div>

          {/* Main Quote Content */}
          <div className="p-8 sm:p-12 md:p-16 flex flex-col justify-center bg-canvas">
            <blockquote className="font-mono text-base sm:text-lg md:text-xl text-text leading-relaxed max-w-4xl">
              &ldquo;Prendas sobrias pensadas como buena arquitectura de software: sin código muerto, sin decorados superfluos. Diseñadas para resistir largas jornadas de concentración y sesiones infinitas de debugging.&rdquo;
            </blockquote>
          </div>

          {/* Bottom Bar */}
          <div className="px-4 py-3 bg-surface2 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[11px] text-sec">
            <span>{`// RUNTIME_ENVIRONMENT: DEV_NULL_LABS`}</span>
            <span className="tracking-wider">SPECIFICATION_REV: 1.0.4 [STABLE]</span>
          </div>

        </div>
      </div>
    </section>
  );
}
