"use client";

import React from "react";

/**
 * EditorialBreakSection — pure static DOM shell.
 * All motion driven exclusively by GSAP scroll timeline in page.tsx.
 * No borders, no counters, no internal animations.
 */
export default function EditorialBreakSection() {
  return (
    <section
      className="editorial-break-el absolute inset-0 w-full h-screen pointer-events-none overflow-hidden bg-[#050505]"
      style={{ display: "none", opacity: 0, zIndex: 33 }}
    >
      {/* ─── WORD 1: LIGHT ────────────────────────────────────────────── */}
      <div
        className="bk-w1 absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-6"
        style={{ opacity: 0 }}
      >
        <p className="bk-w1-sub font-mono text-[10px] tracking-[0.55em] text-white/30 uppercase">
          Every story begins with
        </p>
        <span className="font-anton text-[clamp(6rem,18vw,19rem)] uppercase text-white leading-none select-none tracking-tight">
          LIGHT
        </span>
        <p className="bk-w1-desc font-cormorant italic text-[clamp(1rem,2vw,1.6rem)] text-white/40 font-light tracking-wide text-center max-w-lg">
          Before composition, before color, before emotion —<br />there is the quiet decision of where light falls.
        </p>
      </div>

      {/* ─── WORD 2: PRESENCE ─────────────────────────────────────────── */}
      <div
        className="bk-w2 absolute inset-0 flex flex-col justify-center pointer-events-none pl-[9vw] gap-5"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[9px] tracking-[0.5em] text-white/25 uppercase">PORTRAIT STUDIES</span>
        <span className="font-anton text-[clamp(4.5rem,14vw,15rem)] uppercase leading-none select-none tracking-tight text-white">
          PRE&shy;SENCE
        </span>
        <p className="bk-w2-desc font-cormorant italic text-[clamp(1rem,1.8vw,1.5rem)] text-white/35 font-light max-w-md leading-relaxed">
          The strongest portraits happen when<br />people stop performing and simply exist.
        </p>
      </div>

      {/* ─── WORD 3: MOVEMENT ─────────────────────────────────────────── */}
      <div
        className="bk-w3 absolute inset-0 flex flex-col justify-center items-end pointer-events-none pr-[8vw] gap-5"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[9px] tracking-[0.5em] text-white/25 uppercase">FASHION EDITORIAL</span>
        <span className="font-anton text-[clamp(4.5rem,14vw,15rem)] uppercase leading-none select-none tracking-tight text-white text-right">
          MOVE&shy;MENT
        </span>
        <p className="bk-w3-desc font-cormorant italic text-[clamp(1rem,1.8vw,1.5rem)] text-white/35 font-light max-w-md text-right leading-relaxed">
          Fashion is never truly still. Every gesture,<br />every step creates a composition.
        </p>
      </div>

      {/* ─── WORD 4: DETAIL ───────────────────────────────────────────── */}
      <div
        className="bk-w4 absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-6"
        style={{ opacity: 0 }}
      >
        <span
          className="font-cormorant italic text-[clamp(5rem,15vw,16rem)] text-white leading-none select-none font-light"
        >
          Detail
        </span>
        <div className="bk-w4-line w-24 h-px bg-white/20" />
        <p className="bk-w4-desc font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase text-center max-w-sm leading-loose">
          Texture · Tailoring · Light · Shadow<br />where stories quietly unfold
        </p>
      </div>

      {/* ─── WORD 5: MEMORY ───────────────────────────────────────────── */}
      <div
        className="bk-w5 absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-8"
        style={{ opacity: 0 }}
      >
        <span
          className="font-anton uppercase leading-none select-none tracking-tight"
          style={{
            fontSize: "clamp(5rem,19vw,21rem)",
            WebkitTextStroke: "1.5px rgba(255,255,255,0.45)",
            color: "transparent",
          }}
        >
          MEMORY
        </span>
        <p className="bk-w5-desc font-cormorant italic text-[clamp(1rem,2vw,1.6rem)] text-white/35 font-light tracking-wide text-center max-w-lg">
          Long after the day is over, photographs become<br />the way we return to what mattered most.
        </p>
      </div>

      {/* ─── BRAND MOMENT: FROM ───────────────────────────────────────── */}
      <div
        className="bk-brand absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-5"
        style={{ opacity: 0 }}
      >
        <span className="font-mono text-[9px] tracking-[0.7em] text-white/20 uppercase">FROM STUDIOS</span>
        <div className="flex items-center gap-8">
          <div className="bk-brand-rule-l h-px bg-white/25" style={{ width: 0 }} />
          <span className="font-anton text-[clamp(4rem,11vw,12rem)] uppercase text-white leading-none select-none tracking-[0.08em]">
            FROM
          </span>
          <div className="bk-brand-rule-r h-px bg-white/25" style={{ width: 0 }} />
        </div>
        <span className="font-mono text-[9px] tracking-[0.55em] text-white/25 uppercase">
          Editorial Series &nbsp;·&nbsp; SS 2026
        </span>
      </div>

      {/* ─── FINALE TAGLINE ───────────────────────────────────────────── */}
      <div
        className="bk-tagline absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-3"
        style={{ opacity: 0 }}
      >
        <span className="font-cormorant italic text-[clamp(2.2rem,6vw,7rem)] text-white/90 font-light leading-tight text-center tracking-wide">
          Every image begins
        </span>
        <span className="font-cormorant italic text-[clamp(2.2rem,6vw,7rem)] text-white/50 font-light leading-tight text-center tracking-wide">
          with observation.
        </span>
      </div>
    </section>
  );
}
