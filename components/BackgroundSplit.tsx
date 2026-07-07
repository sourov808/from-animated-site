import React from "react";

export default function BackgroundSplit() {
  return (
    <>
      {/* Background split */}
      <div className="absolute inset-0 flex pointer-events-none select-none z-0">
        {/* Left background: Solid cream */}
        <div className="w-1/2 h-full bg-[#FAF7F2]" />
        {/* Right background: Gray with grain texture */}
        <div className="w-1/2 h-full bg-[#C5C2BB] relative overflow-hidden">
          <div className="absolute inset-0 grain-overlay" />
        </div>
      </div>

      {/* Torn paper edge divider overlay */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-[50%] w-24 z-10 pointer-events-none overflow-hidden select-none">
        <svg viewBox="0 0 100 1000" preserveAspectRatio="none" className="w-full h-full filter drop-shadow-[5px_0_12px_rgba(0,0,0,0.15)]">
          <path
            d="M 50 0
               Q 48 50, 52 100
               T 50 200
               Q 53 250, 47 300
               T 51 400
               Q 46 450, 52 500
               T 49 600
               Q 52 650, 48 700
               T 50 800
               Q 47 850, 52 900
               T 50 1000
               L 0 1000
               L 0 0 Z"
            fill="#FAF7F2"
          />
          {/* Fine light line representing the tear border for 3D realism */}
          <path
            d="M 50 0
               Q 48 50, 52 100
               T 50 200
               Q 53 250, 47 300
               T 51 400
               Q 46 450, 52 500
               T 49 600
               Q 52 650, 48 700
               T 50 800
               Q 47 850, 52 900
               T 50 1000"
            fill="none"
            stroke="rgba(255,255,255,0.85)"
            strokeWidth="1"
          />
        </svg>
      </div>
    </>
  );
}
