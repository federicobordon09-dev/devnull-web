import React from "react";

export function SizingDiagram({ type }: { type: "top" | "bottom" }) {
  if (type === "bottom") {
    return (
      <div className="w-full h-64 bg-surface1 border border-border flex items-center justify-center p-4">
        <svg viewBox="0 0 200 240" className="w-full h-full stroke-text fill-none" strokeWidth="1.5" aria-hidden="true">
          {/* Pantalón cargo outline */}
          <path d="M70 20 L130 20 L140 100 L170 220 L145 220 L125 130 L105 220 L95 220 L75 130 L55 220 L30 220 L60 100 Z" />
          {/* Cotas y líneas de referencia */}
          <line x1="65" y1="20" x2="135" y2="20" strokeDasharray="3 3" stroke="#8A8A8A" />
          <text x="100" y="15" fill="#8A8A8A" fontSize="10" textAnchor="middle" fontFamily="monospace">[A] CINTURA</text>

          <line x1="50" y1="100" x2="150" y2="100" strokeDasharray="3 3" stroke="#8A8A8A" />
          <text x="100" y="95" fill="#8A8A8A" fontSize="10" textAnchor="middle" fontFamily="monospace">[B] CADERA</text>

          <line x1="100" y1="20" x2="100" y2="110" strokeDasharray="3 3" stroke="#8A8A8A" />
          <text x="110" y="70" fill="#8A8A8A" fontSize="10" fontFamily="monospace">[C] TIRO</text>

          <line x1="20" y1="20" x2="20" y2="220" strokeDasharray="3 3" stroke="#8A8A8A" />
          <text x="5" y="120" fill="#8A8A8A" fontSize="10" fontFamily="monospace" transform="rotate(-90 5 120)">[D] LARGO</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="w-full h-64 bg-surface1 border border-border flex items-center justify-center p-4">
      <svg viewBox="0 0 200 240" className="w-full h-full stroke-text fill-none" strokeWidth="1.5" aria-hidden="true">
        {/* Sudadera / Remera outline */}
        <path d="M70 20 L130 20 L150 40 L180 60 L160 90 L140 80 L140 220 L60 220 L60 80 L40 90 L20 60 L50 40 Z" />
        {/* Cotas y líneas de referencia */}
        <line x1="60" y1="80" x2="140" y2="80" strokeDasharray="3 3" stroke="#8A8A8A" />
        <text x="100" y="75" fill="#8A8A8A" fontSize="10" textAnchor="middle" fontFamily="monospace">[A] PECHO</text>

        <line x1="55" y1="220" x2="145" y2="220" strokeDasharray="3 3" stroke="#8A8A8A" />
        <text x="100" y="235" fill="#8A8A8A" fontSize="10" textAnchor="middle" fontFamily="monospace">[B] LARGO TOTAL</text>

        <line x1="20" y1="60" x2="70" y2="20" strokeDasharray="3 3" stroke="#8A8A8A" />
        <text x="35" y="35" fill="#8A8A8A" fontSize="10" fontFamily="monospace">[C] MANGA</text>

        <line x1="70" y1="20" x2="130" y2="20" strokeDasharray="3 3" stroke="#8A8A8A" />
        <text x="100" y="15" fill="#8A8A8A" fontSize="10" textAnchor="middle" fontFamily="monospace">[D] HOMBRO</text>
      </svg>
    </div>
  );
}
