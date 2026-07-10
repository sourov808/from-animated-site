export default function ForegroundTypography() {
  return (
    <div className="hero-text-fg absolute inset-x-0 bottom-[14vh] flex pointer-events-none select-none z-20 h-[22vw]">
      {/* Left side: BEAUTY THE (Initial) / POETRY IN (Scrolled) */}
      <div className="w-1/2 pr-4 md:pr-[36vh] text-right flex flex-col justify-end relative h-full">
        <div className="hero-fg-text-1 absolute right-4 md:right-[36vh] bottom-0 flex flex-col items-end opacity-100">
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E]">
            BEAUTY
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E] mr-[3vw]">
            THE
          </span>
        </div>
        
        <div className="hero-fg-text-2 absolute right-4 md:right-[36vh] bottom-0 flex flex-col items-end opacity-0">
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E]">
            FOUND
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-[#FF2E2E] mr-[3vw]">
            IN
          </span>
        </div>
      </div>
      
      {/* Right side: WILL SAVE WORLD (Initial) / SHADOWS & SILENCE (Scrolled) */}
      <div className="w-1/2 pl-4 md:pl-[36vh] text-left flex flex-col justify-end relative h-full">
        <div className="hero-fg-subtext-1 absolute left-4 md:left-[36vh] bottom-0 flex flex-col items-start opacity-100">
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white">
            WILL SAVE
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white ml-[1.5vw]">
            WORLD
          </span>
        </div>
        
        <div className="hero-fg-subtext-2 absolute left-4 md:left-[36vh] bottom-0 flex flex-col items-start opacity-0">
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white">
            SHADOWS &
          </span>
          <span className="font-anton text-[11vw] md:text-[8vw] uppercase leading-[0.8] tracking-[-0.04em] text-stroke-white ml-[1.5vw]">
            SILENCE
          </span>
        </div>
      </div>
    </div>
  );
}
