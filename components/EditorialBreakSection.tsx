"use client";

import React from "react";

export default function EditorialBreakSection() {
  return (
    <section
      className="editorial-break-el absolute inset-0 w-full h-screen pointer-events-none overflow-hidden z-[36]"
      style={{
        display: "none",
      }}
    >
      {/* ─── COLORED BACKGROUND BANDS (sliding from outside) ─── */}
      {/* Top band: Green #467235 */}
      <div 
        className="eb-top-band absolute top-0 left-0 w-full h-[22.5vh] z-20 overflow-hidden" 
        style={{ backgroundColor: "#467235" }}
      />

      {/* Bottom band: Red #BD4444 */}
      <div 
        className="eb-bottom-band absolute bottom-0 left-0 w-full h-[22.5vh] z-20 overflow-hidden" 
        style={{ backgroundColor: "#BD4444" }}
      />

      {/* ─── BIG BOLD OVERLAPPING BOUNDARY TEXTS ─── */}
      <div className="eb-boundary-text-top absolute top-[22.5vh] left-0 w-full z-30 flex justify-center pointer-events-none select-none overflow-visible">
        <span className="font-anton uppercase text-[clamp(32px,11vw,160px)] leading-none text-[#FAF7F2] tracking-[0.02em] text-center px-4">
          SILHOUETTE
        </span>
      </div>

      <div className="eb-boundary-text-bottom absolute top-[77.5vh] left-0 w-full z-30 flex justify-center pointer-events-none select-none overflow-visible">
        <span className="font-anton uppercase text-[clamp(32px,11vw,160px)] leading-none text-[#FAF7F2] tracking-[0.02em] text-center px-4">
          PERSPECTIVE
        </span>
      </div>

      {/* ─── CENTER BAND (55vh, centered, Charcoal #121212) ─── */}
      <div className="eb-center-band absolute left-0 right-0 top-[22.5vh] w-full h-[55vh] bg-[#121212] border-y border-white/[0.04] z-10 overflow-hidden">
        {/* PREMIUM GRADIENT & NOISE BACKGROUND */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
          {/* Soft radial vignette to shade the edges */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)]" />
          
          {/* Fine-grained noise overlay */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />

          {/* Dynamic backdrop thin grid lines */}
          <div className="absolute inset-0 flex justify-between px-[10%] opacity-[0.03] pointer-events-none">
            <div className="w-[1px] h-full bg-[#FAF7F2]" />
            <div className="w-[1px] h-full bg-[#FAF7F2]" />
            <div className="w-[1px] h-full bg-[#FAF7F2]" />
          </div>
        </div>

        {/* DYNAMIC FLOATING BACKGROUND TYPOGRAPHY */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-1 flex items-center justify-center select-none overflow-hidden">
          <span 
            className="floating-bg-text font-playfair font-black text-[22vw] text-[#FAF7F2] opacity-[0.015] tracking-[0.2em] whitespace-nowrap will-change-transform"
            style={{ transform: "translateX(0px)" }}
          >
            SILHOUETTE
          </span>
        </div>

        {/* EDITORIAL NARRATIVE LAYOUT (Z-INDEX 5) */}
        <div className="absolute inset-0 w-full h-full z-5 flex flex-col justify-center pl-[10%] md:pl-[12%] pr-[8%] pointer-events-none">
          <div className="flex flex-col gap-1.5 max-w-4xl text-left">
            
            {/* Line 1 */}
            <div className="eb-reveal-row relative overflow-hidden inline-block select-none py-0.5">
              <span 
                className="block font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-transparent leading-none"
                style={{ WebkitTextStroke: "1px rgba(250, 247, 242, 0.15)" }}
              >
                In the quiet space where shadows play,
              </span>
              <div className="eb-fill-line-1 absolute inset-0 top-0 left-0 w-0 overflow-hidden select-none py-0.5">
                <span className="block whitespace-nowrap font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-[#FAF7F2] leading-none">
                  In the quiet space where shadows play,
                </span>
              </div>
            </div>

            {/* Line 2 */}
            <div className="eb-reveal-row relative overflow-hidden inline-block select-none py-0.5">
              <span 
                className="block font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-transparent leading-none"
                style={{ WebkitTextStroke: "1px rgba(250, 247, 242, 0.15)" }}
              >
                We trace the contours of a line.
              </span>
              <div className="eb-fill-line-2 absolute inset-0 top-0 left-0 w-0 overflow-hidden select-none py-0.5">
                <span className="block whitespace-nowrap font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-[#FAF7F2] leading-none">
                  We trace the contours of a line.
                </span>
              </div>
            </div>

            {/* Line 3 */}
            <div className="eb-reveal-row relative overflow-hidden inline-block select-none py-0.5">
              <span 
                className="block font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-transparent leading-none"
                style={{ WebkitTextStroke: "1px rgba(250, 247, 242, 0.15)" }}
              >
                A silent posture, carved in light,
              </span>
              <div className="eb-fill-line-3 absolute inset-0 top-0 left-0 w-0 overflow-hidden select-none py-0.5">
                <span className="block whitespace-nowrap font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-[#FAF7F2] leading-none">
                  A silent posture, carved in light,
                </span>
              </div>
            </div>

            {/* Line 4 */}
            <div className="eb-reveal-row relative overflow-hidden inline-block select-none py-0.5">
              <span 
                className="block font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-transparent leading-none"
                style={{ WebkitTextStroke: "1px rgba(250, 247, 242, 0.15)" }}
              >
                Before it fades into the dark.
              </span>
              <div className="eb-fill-line-4 absolute inset-0 top-0 left-0 w-0 overflow-hidden select-none py-0.5">
                <span className="block whitespace-nowrap font-playfair font-medium italic text-[clamp(18px,3.8vw,44px)] tracking-tight text-[#FAF7F2] leading-none">
                  Before it fades into the dark.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
