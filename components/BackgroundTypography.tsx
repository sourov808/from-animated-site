import React from "react";

export default function BackgroundTypography() {
  return (
    <div className="hero-text-bg absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none select-none z-5">
      {/* Left half: FROM (Initial) / LINE (Scrolled) */}
      <div className="w-1/2 flex justify-start pl-8 md:pl-20 relative h-[14vw] items-center">
        <h2 className="hero-bg-text-1 absolute left-8 md:left-20 font-anton text-[13.5vw] uppercase leading-none tracking-[-0.03em] text-[#0A0A0A] select-none opacity-100">
          FROM
        </h2>
        <h2 className="hero-bg-text-2 absolute left-8 md:left-20 font-anton text-[13.5vw] uppercase leading-none tracking-[-0.03em] text-[#0A0A0A] select-none opacity-0">
          LIGHT
        </h2>
      </div>
      
      {/* Right half: WHERE GLAM MEETS GRUNGE (Initial) / SHADOWS & SILENCE (Scrolled) */}
      <div className="w-1/2 flex justify-start pl-12 md:pl-28 relative h-[15vw] items-center">
        <div className="hero-bg-subtext-1 absolute left-12 md:left-28 opacity-100">
          <h2 className="font-anton text-[7.5vw] uppercase leading-[0.8] tracking-[-0.02em] text-[#0A0A0A] select-none text-left">
            WHERE GLAM <br /> MEETS GRUNGE
          </h2>
        </div>
        <div className="hero-bg-subtext-2 absolute left-12 md:left-28 opacity-0">
          <h2 className="font-anton text-[7.5vw] uppercase leading-[0.8] tracking-[-0.02em] text-[#0A0A0A] select-none text-left">
            SHADOWS & <br /> SILENCE
          </h2>
        </div>
      </div>
    </div>
  );
}
