import React from "react";

interface ForegroundTypographyProps {
  showSecondImage: boolean;
}

export default function ForegroundTypography({ showSecondImage }: ForegroundTypographyProps) {
  return (
    <div className="absolute inset-x-0 bottom-[14vh] flex pointer-events-none select-none z-20 h-[22vw]">
      {/* Left side: BEAUTY THE (Initial) / POETRY IN (Scrolled) */}
      <div className="w-1/2 pr-4 md:pr-[36vh] text-right flex flex-col justify-end relative h-full">
        <div className={`absolute right-4 md:right-[36vh] bottom-0 flex flex-col items-end transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          !showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E]">
            BEAUTY
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E] mr-[3vw]">
            THE
          </span>
        </div>
        
        <div className={`absolute right-4 md:right-[36vh] bottom-0 flex flex-col items-end transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E]">
            POETRY
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E] mr-[3vw]">
            IN
          </span>
        </div>
      </div>
      
      {/* Right side: WILL SAVE WORLD (Initial) / CHAOTIC MOTION (Scrolled) */}
      <div className="w-1/2 pl-4 md:pl-[36vh] text-left flex flex-col justify-end relative h-full">
        <div className={`absolute left-4 md:left-[36vh] bottom-0 flex flex-col items-start transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          !showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        }`}>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white">
            WILL SAVE
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white ml-[1.5vw]">
            WORLD
          </span>
        </div>
        
        <div className={`absolute left-4 md:left-[36vh] bottom-0 flex flex-col items-start transition-all duration-[1100ms] cubic-bezier(0.16, 1, 0.3, 1) ${
          showSecondImage ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
        }`}>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white">
            CHAOTIC
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white ml-[1.5vw]">
            MOTION
          </span>
        </div>
      </div>
    </div>
  );
}
