export function DetailsStrip() {
  const details = [
    {
      code: "01 // TEXTILE",
      title: "ALGODÓN DE GRAMAJE ALTO",
      description:
        "Tejidos densos de 240 a 420 GSM para máxima durabilidad, caída perpendicular y estructura impecable tras múltiples lavados.",
    },
    {
      code: "02 // ERGONOMICS",
      title: "CORTE RELAJADO",
      description:
        "Patronaje pensado para comodidad absoluta sin rigideces sentado en el escritorio, facilitando horas de enfoque ininterrumpido.",
    },
    {
      code: "03 // MINIMALISM",
      title: "DETALLES BORDADOS DISCRETOS",
      description:
        "Micro-tipografías y terminaciones tonales al tono. La prenda habla por la nobleza de su hilado y su precisión técnica.",
    },
  ];

  return (
    <section id="detalles" className="bg-canvas py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
          {details.map((item, index) => (
            <div key={index} className="bg-surface1 p-6 md:p-8 flex flex-col gap-4">
              <span className="font-mono text-xs text-sec tracking-wider">{item.code}</span>
              <h3 className="font-mono font-bold text-text text-sm tracking-wider">
                {item.title}
              </h3>
              <p className="font-sans text-sec text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
