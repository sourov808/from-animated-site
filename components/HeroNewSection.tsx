"use client";

import React from "react";

export default function HeroNewSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-between overflow-hidden bg-[#FAF7F2] select-none z-10">
      
      {/* ─── PART 1: INTRO TOP BAR (HEIGHT: 12vh) ─── */}
      <div
        className="hero-part-top w-full h-[12vh] min-h-[80px] bg-[#D6E3D8] border-b border-[#0F1012]/10 flex items-center relative z-30 transition-transform will-change-transform"
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Menu / Links Left */}
          <div className="hidden md:flex items-center space-x-8 font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#1C281A]">
            <a href="#menu" className="hover:opacity-75 transition-opacity">[ MENU + ]</a>
            <a href="#shop" className="hover:opacity-75 transition-opacity">[ SHOP ALL ]</a>
            <a href="#categories" className="hover:opacity-75 transition-opacity">[ CATEGORIES + ]</a>
          </div>

          {/* Logo Center */}
          <div className="font-anton text-3xl md:text-4xl font-normal tracking-[0.05em] text-[#1C281A]">
            FROM
          </div>

          {/* Search Button Right */}
          <button className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-[#1C281A] hover:opacity-75 transition-opacity">
            [ SEARCH ]
          </button>
        </div>
      </div>

      {/* ─── PART 2: FOOTER / INFO SECTION (HEIGHT: 44vh) ─── */}
      <div
        className="hero-part-middle w-full h-[44vh] bg-[#0F1012] flex flex-col justify-between p-6 md:p-12 relative z-20 transition-transform will-change-transform"
      >
        {/* Main content grid */}
        <div className="w-full max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          
          {/* Statement Left (60% width equivalent) */}
          <div className="lg:col-span-3">
            <h1 className="font-anton text-[clamp(1.4rem,2.8vw,3.2rem)] leading-[1.05] tracking-tight text-[#C2F842] uppercase text-left">
              AN EDITORIAL PORTFOLIO DEDICATED TO HAUTE FASHION, REFINED CONTRAST, AND THE POETRY OF LIGHT.
            </h1>
          </div>

          {/* Info Columns Right (40% width equivalent) */}
          <div className="lg:col-span-2 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase mb-2">
                ADDRESS
              </div>
              <div className="font-sans text-[11px] text-white leading-relaxed uppercase tracking-wider">
                Studio Paris<br />
                & Milan
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase mb-2">
                NEW PROJECTS
              </div>
              <div className="font-sans text-[11px] text-white leading-relaxed lowercase tracking-wider">
                contact@<br />from.studio
              </div>
            </div>

            <div>
              <div className="font-mono text-[9px] text-neutral-400 tracking-widest uppercase mb-2">
                CALL US
              </div>
              <div className="font-sans text-[11px] text-white leading-relaxed uppercase tracking-wider">
                +33 1 45<br />67 89 00
              </div>
            </div>
          </div>
        </div>

        {/* Small bottom footer row inside the block */}
        <div className="w-full max-w-[1440px] mx-auto">
          <div className="w-full border-t border-neutral-800 my-4 opacity-50" />
          <div className="flex flex-wrap justify-between items-center text-[9px] font-mono tracking-widest text-neutral-500 uppercase gap-2">
            <div>FROM STUDIOS</div>
            <div>© 2026 EDITION</div>
            <div className="flex space-x-6">
              <a href="#return" className="hover:text-white transition-colors">RETURN POLICY</a>
              <a href="#terms" className="hover:text-white transition-colors">TERMS OF USE</a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── PART 3: BANNER SECTION (HEIGHT: 44vh) ─── */}
      <div
        className="hero-part-bottom w-full h-[44vh] bg-[#1A1110] relative z-10 overflow-hidden flex items-center justify-center transition-all will-change-transform"
      >
        {/* Banner image with dark/halftone filter overlay */}
        <div className="absolute inset-0 w-full h-full opacity-60">
          <img
            src="/model_transparent.png"
            alt="From Editorial Model"
            className="w-full h-full object-cover grayscale contrast-125 brightness-75 scale-110 origin-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent opacity-80" />
        </div>

        {/* Huge Typographic Overlay */}
        <div className="relative z-10 w-full text-center px-4">
          <h2 className="hero-banner-title font-anton text-[clamp(4rem,9.5vw,11.5rem)] leading-none text-white tracking-[0.04em] uppercase select-none drop-shadow-2xl">
            FROM STUDIOS
          </h2>
        </div>
      </div>

    </div>
  );
}
