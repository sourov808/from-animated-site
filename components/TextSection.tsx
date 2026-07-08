"use client";

import React from "react";

export default function TextSection() {
  return (
    <section
      className="text-section-el absolute inset-0 w-full h-screen z-37 pointer-events-none flex flex-col justify-center items-center overflow-hidden bg-[#0A0A0A]"
      style={{
        opacity: 0,
        willChange: "transform, opacity",
      }}
    >
      {/* Editorial backdrop texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] z-0 pointer-events-none" />

      {/* --- Photography Items & Stickers --- */}

      {/* 1. Polaroid Exhibition Print (Left) */}
      <div className="sticker-polaroid absolute left-[2%] md:left-[3%] top-[24%] w-[150px] md:w-[220px] bg-white p-2.5 pb-7 md:p-3 md:pb-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)] rounded-sm z-10 pointer-events-auto border border-white/5 will-change-transform">
        <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden mb-2.5">
          <img
            src="/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg"
            alt="Polaroid print"
            className="w-full h-full object-cover grayscale brightness-95"
          />
        </div>
        <span className="font-playfair italic text-[10px] md:text-xs text-neutral-800 text-center block tracking-wide select-none">
          Frame #08 — Stillness
        </span>
      </div>

      {/* 2. Vertical 35mm Film Strip (Right) */}
      <div className="sticker-film-strip absolute right-[2%] md:right-[3%] top-[12%] w-[75px] md:w-[110px] bg-black/90 py-3 md:py-4 px-1.5 md:px-2 border-x border-dashed border-white/20 flex flex-col gap-2.5 md:gap-3.5 shadow-2xl z-5 select-none opacity-70 will-change-transform rounded-sm">
        {/* Film perforation holes */}
        <div className="absolute top-0 bottom-0 left-0.5 md:left-1 w-[2px] border-l-2 border-dotted border-white/30" />
        <div className="absolute top-0 bottom-0 right-0.5 md:right-1 w-[2px] border-r-2 border-dotted border-white/30" />
        
        <div className="w-full aspect-square bg-neutral-950 overflow-hidden relative border border-white/10">
          <img src="/maureen-de-wit--Lu6d3i13Dg-unsplash.jpg" alt="frame 1" className="w-full h-full object-cover grayscale contrast-125" />
        </div>
        <div className="w-full aspect-square bg-neutral-950 overflow-hidden relative border border-white/10">
          <img src="/rashtravardhan-kataria-1XWxeqhptp8-unsplash.jpg" alt="frame 2" className="w-full h-full object-cover grayscale contrast-125" />
        </div>
        <div className="w-full aspect-square bg-neutral-950 overflow-hidden relative border border-white/10">
          <img src="/rene-ranisch-L3cTvvdrCCk-unsplash.jpg" alt="frame 3" className="w-full h-full object-cover grayscale contrast-125" />
        </div>
        <span className="font-mono text-[7px] md:text-[8px] text-white/40 text-center tracking-[0.2em] uppercase">
          PAN 400
        </span>
      </div>

      {/* 3. Circular Studio Stamp Sticker (Bottom-Left) */}
      <div className="sticker-stamp absolute left-[12%] md:left-[15%] bottom-[12%] w-[90px] md:w-[130px] h-[90px] md:h-[130px] rounded-full border border-dashed border-[#C5A880]/30 flex items-center justify-center rotate-[-12deg] z-5 pointer-events-none select-none opacity-50 will-change-transform">
        <div className="w-[84%] h-[84%] rounded-full border border-[#C5A880]/20 flex flex-col items-center justify-center p-2 text-center text-[#C5A880]">
          <span className="font-mono text-[6px] md:text-[8px] uppercase tracking-[0.18em] mb-0.5 md:mb-1">
            VERIFIED PRINT
          </span>
          <div className="h-[1px] w-[50%] bg-[#C5A880]/25 my-0.5 md:my-1" />
          <span className="font-playfair italic text-[8px] md:text-[10px] leading-tight">
            Studio Archives
          </span>
          <span className="font-mono text-[6px] md:text-[7px] tracking-[0.1em] mt-0.5 md:mt-1 text-[#C5A880]/40">
            © 2026
          </span>
        </div>
      </div>

      {/* --- Centered Typography composition --- */}
      <div className="w-full max-w-[88vw] flex flex-col items-center justify-center relative z-10 select-none">
        
        {/* Section indicator */}
        <span className="text-section-tag font-mono text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-12 block will-change-transform">
          [ CHAPTER II • THE ARCHIVE ]
        </span>

        {/* Masked text rows for kinetic scroll reveal */}
        <div className="w-full overflow-hidden flex flex-col gap-3 md:gap-5 items-center">
          
          {/* Row 1: Bold Anton, left side starting overflow */}
          <div className="w-full overflow-hidden text-left pl-[2vw] md:pl-[6vw]">
            <h2 className="text-row-1 font-anton text-[clamp(2rem,6.8vw,9.5rem)] uppercase leading-none tracking-tight text-white whitespace-nowrap will-change-transform">
              EXPLORING THE ARCHIVE
            </h2>
          </div>

          {/* Row 2: Playfair Italic, centered */}
          <div className="w-full overflow-hidden text-center">
            <h2 className="text-row-2 font-playfair italic text-[clamp(2rem,6.5vw,9rem)] leading-none tracking-wide text-[#FAF7F2]/45 whitespace-nowrap will-change-transform">
              capturing silence, light & space
            </h2>
          </div>

          {/* Row 3: Bold Anton, right side starting overflow */}
          <div className="w-full overflow-hidden text-right pr-[2vw] md:pr-[6vw]">
            <h2 className="text-row-3 font-anton text-[clamp(2rem,6.8vw,9.5rem)] uppercase leading-none tracking-tight text-white whitespace-nowrap will-change-transform">
              A CURATED NARRATIVE
            </h2>
          </div>

        </div>

        {/* Explanatory subtitle */}
        <p className="text-section-desc font-playfair italic text-xs md:text-sm text-white/30 max-w-[340px] text-center mt-10 md:mt-14 leading-relaxed will-change-transform">
          A physical and digital exhibition documenting visual stories across landscapes and portraits.
        </p>

      </div>
    </section>
  );
}
