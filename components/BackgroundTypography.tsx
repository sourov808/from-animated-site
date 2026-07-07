import React from "react";

interface BackgroundTypographyProps {
  showSecondImage: boolean;
}

export default function BackgroundTypography({ showSecondImage }: BackgroundTypographyProps) {
  return (
    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none select-none z-5">
      {/* Left half: FROM (Initial) / LINE (Scrolled) */}
      <div className="w-1/2 flex justify-start pl-8 md:pl-20 relative h-[14vw] items-center">
        <h2 className={`absolute left-8 md:left-20 font-anton text-[13.5vw] uppercase leading-none tracking-[-0.03em] text-[#0A0A0A] select-none transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          !showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}>
          FROM
        </h2>
        <h2 className={`absolute left-8 md:left-20 font-anton text-[13.5vw] uppercase leading-none tracking-[-0.03em] text-[#0A0A0A] select-none transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          LINE
        </h2>
      </div>
      
      {/* Right half: WHERE GLAM MEETS GRUNGE (Initial) / SHADOWS & STRUCTURE (Scrolled) */}
      <div className="w-1/2 flex justify-start pl-12 md:pl-28 relative h-[15vw] items-center">
        <div className={`absolute left-12 md:left-28 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          !showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
        }`}>
          <h2 className="font-anton text-[7.5vw] uppercase leading-[0.8] tracking-[-0.02em] text-[#0A0A0A] select-none text-left">
            WHERE GLAM <br /> MEETS GRUNGE
          </h2>
        </div>
        <div className={`absolute left-12 md:left-28 transition-all duration-[1000ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <h2 className="font-anton text-[7.5vw] uppercase leading-[0.8] tracking-[-0.02em] text-[#0A0A0A] select-none text-left">
            SHADOWS & <br /> STRUCTURE
          </h2>
        </div>
      </div>
    </div>
  );
}
