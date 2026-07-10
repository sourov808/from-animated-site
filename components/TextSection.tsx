"use client";

import React from "react";

export default function TextSection() {
  return (
    <section
      className="text-section-el absolute inset-0 w-full h-screen z-37 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{
        opacity: 0,
        willChange: "transform, opacity",
      }}
    >
      {/* 1. Bar Unfolding Transition Columns (Z-INDEX 50) */}
      <div className="absolute inset-0 w-full h-screen z-50 pointer-events-none flex">
        <div className="intro-unfold-bar w-1/4 h-full bg-[#1A1110] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#4A201A] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#D5B990] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#874F41] origin-bottom scale-y-0 will-change-transform" />
      </div>

      {/* 3. Radial Accent Color Glows */}
      <div className="absolute -top-[10%] -right-[5%] w-[45vw] h-[45vw] bg-[#D5B990] opacity-[0.09] blur-[130px] rounded-full pointer-events-none z-1" />
      <div className="absolute -bottom-[15%] -left-[10%] w-[50vw] h-[50vw] bg-[#FF3E3E] opacity-[0.07] blur-[160px] rounded-full pointer-events-none z-1" />

      {/* 4. Axis & Circular guidelines */}
      <div className="intro-axis-h absolute left-[8vw] right-[8vw] top-1/2 h-[1px] bg-white/10 -translate-y-1/2 z-2 pointer-events-none origin-center scale-x-0 will-change-transform" />
      <div className="intro-axis-v absolute top-[10vh] bottom-[10vh] left-1/2 w-[1px] bg-white/10 -translate-x-1/2 z-2 pointer-events-none origin-center scale-y-0 will-change-transform" />
      <div className="intro-circular-ring absolute left-1/2 top-1/2 w-[min(38vw,38vh)] h-[min(38vw,38vh)] min-w-[290px] min-h-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 z-2 pointer-events-none origin-center scale-0 will-change-transform" />

      {/* 5. Main Content Container */}
      <div className="relative w-full max-w-[92vw] h-[85vh] z-10 select-none">
        {/* Center: Circular Photographer Portrait */}
        <div className="absolute left-1/2 top-1/2 w-[min(30vw,30vh)] h-[min(30vw,30vh)] min-w-[230px] min-h-[230px] -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="intro-portrait-container w-full h-full rounded-full overflow-hidden bg-neutral-900 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10 will-change-transform">
            <img
              src="/photographer.png"
              alt="John K Portrait"
              className="intro-portrait-img w-full h-full object-cover grayscale contrast-115 brightness-90 scale-125 origin-center will-change-transform"
            />
          </div>
        </div>

        {/* Quadrant 1: Top-Left (Greeting, Role & Italic Statement) */}
        <div className="intro-block-tl absolute left-[3vw] top-[14vh] text-left max-w-[34vw] flex flex-col gap-2 z-10 will-change-transform">
          <div className="overflow-hidden">
            <h2 className="intro-title-el font-anton text-[clamp(1.5rem,3.2vw,4.5rem)] leading-none text-white uppercase tracking-tight will-change-transform">
              HI, I'M JOHN K
            </h2>
          </div>
          <div className="overflow-hidden">
            <h3 className="intro-title-el font-playfair italic text-[clamp(1.1rem,1.8vw,2.2rem)] leading-none text-[#C5A880] will-change-transform">
              Editorial Imagemaker
            </h3>
          </div>
          <div className="overflow-hidden">
            <p className="intro-title-el font-playfair italic text-[clamp(0.85rem,1.3vw,1.5rem)] text-white/70 leading-relaxed will-change-transform">
              capturing the raw,{" "}
              <strong className="font-bold text-[#C5A880]">
                unfiltered soul
              </strong>{" "}
              of haute fashion
            </p>
          </div>
        </div>

        {/* Quadrant 2: Top-Right (Campaign Target & Italic Statement) */}
        <div className="intro-block-tr absolute right-[3vw] top-[16vh] text-right max-w-[34vw] flex flex-col gap-2 z-10 will-change-transform">
          <div className="overflow-hidden">
            <h2 className="intro-title-el font-anton text-[clamp(1.3rem,2.6vw,3.6rem)] leading-none text-white uppercase tracking-tight will-change-transform">
              SHAPING MODERN CAMPAIGNS
            </h2>
          </div>
          <div className="overflow-hidden">
            <p className="intro-title-el font-playfair italic text-[clamp(0.85rem,1.3vw,1.5rem)] text-white/70 leading-relaxed will-change-transform">
              crafting{" "}
              <strong className="font-bold text-[#C5A880]">
                visual legacies
              </strong>{" "}
              that define contemporary culture
            </p>
          </div>
        </div>

        {/* Quadrant 3: Bottom-Left (Philosophy & Italic Statement) */}
        <div className="intro-block-bl absolute left-[4vw] bottom-[14vh] text-left max-w-[34vw] flex flex-col gap-2 z-10 will-change-transform">
          <div className="overflow-hidden">
            <h2 className="intro-title-el font-anton text-[clamp(1.3rem,2.6vw,3.6rem)] leading-none text-white uppercase tracking-tight will-change-transform">
              DOCUMENTING SILENT STORIES
            </h2>
          </div>
          <div className="overflow-hidden pl-[2vw]">
            <h3 className="intro-title-el font-playfair italic text-[clamp(1rem,1.5vw,1.8rem)] leading-none text-white/80 will-change-transform">
              Of Light, Shadow & Contrast
            </h3>
          </div>
          <div className="overflow-hidden pl-[2vw]">
            <p className="intro-title-el font-playfair italic text-[clamp(0.85rem,1.3vw,1.5rem)] text-white/70 leading-relaxed will-change-transform">
              where every frame becomes an{" "}
              <strong className="font-bold text-[#C5A880]">
                eternal whisper
              </strong>{" "}
              of truth
            </p>
          </div>
        </div>

        {/* Quadrant 4: Bottom-Right (Cities, Tenure & Italic Statement) */}
        <div className="intro-block-br absolute right-[4vw] bottom-[16vh] text-right max-w-[34vw] flex flex-col gap-2.5 z-10 will-change-transform">
          <div className="overflow-hidden">
            <h3 className="intro-title-el font-playfair italic text-[clamp(1.1rem,1.8vw,2.2rem)] leading-none text-[#C5A880] will-change-transform">
              Across Paris and Milan
            </h3>
          </div>
          <div className="overflow-hidden">
            <h3 className="intro-title-el font-playfair italic text-[clamp(0.85rem,1.3vw,1.5rem)] leading-none text-white/50 will-change-transform">
              twelve years of visual depth
            </h3>
          </div>
          <div className="overflow-hidden">
            <p className="intro-title-el font-playfair italic text-[clamp(0.85rem,1.3vw,1.5rem)] text-white/70 leading-relaxed will-change-transform">
              sculpting{" "}
              <strong className="font-bold text-[#C5A880]">
                dynamic dimensions
              </strong>{" "}
              through light and lens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
