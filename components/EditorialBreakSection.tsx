"use client";

import React from "react";

// Helper to generate a scalloped circle path
function getScallopPath(points = 24, innerRadius = 42, outerRadius = 48) {
  let path = "";
  for (let i = 0; i < points; i++) {
    const angle = (i * 2 * Math.PI) / points;
    const nextAngle = ((i + 1) * 2 * Math.PI) / points;
    const midAngle = angle + (nextAngle - angle) / 2;

    const x1 = (50 + outerRadius * Math.cos(angle)).toFixed(3);
    const y1 = (50 + outerRadius * Math.sin(angle)).toFixed(3);
    const xMid = (50 + innerRadius * Math.cos(midAngle)).toFixed(3);
    const yMid = (50 + innerRadius * Math.sin(midAngle)).toFixed(3);
    const x2 = (50 + outerRadius * Math.cos(nextAngle)).toFixed(3);
    const y2 = (50 + outerRadius * Math.sin(nextAngle)).toFixed(3);

    if (i === 0) {
      path += `M ${x1} ${y1} Q ${xMid} ${yMid} ${x2} ${y2}`;
    } else {
      path += ` Q ${xMid} ${yMid} ${x2} ${y2}`;
    }
  }
  return path + " Z";
}

export default function EditorialBreakSection() {
  // Scalloped Badge path
  const scallopPath = getScallopPath(20, 42, 48);
  // Flower Badge path
  const flowerPath = getScallopPath(8, 36, 48);
  // Deep scallop/gear badge path
  const gearPath = getScallopPath(14, 38, 48);

  return (
    <section
      className="editorial-break-el absolute inset-0 w-full h-screen pointer-events-none overflow-hidden bg-transparent"
      style={{ display: "none", opacity: 0, zIndex: 36 }}
    >
      {/* ─── DESIGNER BACKGROUND GRID (Z-INDEX 0) ─── */}
      <div
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3D312A 1px, transparent 1px),
            linear-gradient(to bottom, #3D312A 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ─── EDITORIAL FILM/STUDIO METADATA LAYER (Z-INDEX 1) ─── */}
      <div className="absolute inset-0 w-full h-full z-1 pointer-events-none font-mono text-[9px] tracking-[0.25em] text-[#3D312A] opacity-35">
        <div className="absolute top-[8%] left-1/2 -translate-x-1/2 uppercase text-center font-bold">
          [ EDITORIAL MOODBOARD / PROOF SHEET #882 ]
        </div>
        <div className="absolute top-[12%] left-[4%] uppercase">
          LOC: STUDIO NYC / BACKDROP A
        </div>
        <div className="absolute top-[32%] left-[45%] uppercase">
          CAM: 1/250s | f/4.0 | ISO 100
        </div>
        <div className="absolute top-[68%] left-[53%] uppercase">
          EMULSION: KODAK PORTRA 400 [DEVELOPED]
        </div>
        <div className="absolute bottom-[8%] right-[5%] uppercase font-bold">
          © VANCE EDITORIAL ARCHIVE
        </div>
        <div className="absolute bottom-[25%] left-[8%] uppercase">
          FRAME: SS26-004
        </div>
        {/* Tiny crosshair indicators at intersection points */}
        <span className="absolute top-[20%] left-[25%] text-[12px] font-light">+</span>
        <span className="absolute top-[20%] right-[25%] text-[12px] font-light">+</span>
        <span className="absolute bottom-[20%] left-[25%] text-[12px] font-light">+</span>
        <span className="absolute bottom-[20%] right-[25%] text-[12px] font-light">+</span>
      </div>

      {/* ─── RUNNING STRAIGHT LINE TEXTS BACKGROUND LAYER (Z-INDEX 2) ─── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-2 opacity-[0.12]"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Straight Slanted Lines */}
          <path id="line-path-1" d="M -200,180 L 2200,320" fill="none" />
          <path id="line-path-2" d="M -200,920 L 2200,780" fill="none" />
          <path id="line-path-3" d="M 280,-200 L 420,1280" fill="none" />
          <path id="line-path-4" d="M 1640,-200 L 1500,1280" fill="none" />
          {/* Additional Slanted Lines to fill emptiness */}
          <path id="line-path-5" d="M -200,120 L 2200,950" fill="none" />
          <path id="line-path-6" d="M -200,950 L 2200,120" fill="none" />
          <path id="line-path-7" d="M 960,-200 L 960,1280" fill="none" />
          <path id="line-path-8" d="M -200,540 L 2200,540" fill="none" />
        </defs>

        {/* Text Line 1: Slanted Horizontal Top */}
        <text className="fill-[#3D312A] font-sans text-[clamp(28px,3vw,48px)] tracking-[0.08em] uppercase">
          <textPath id="break-path-1" href="#line-path-1" startOffset="0%">
            <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">HIGH END</tspan>{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">editorial campaign</tspan>{" "}
            • <tspan className="font-mono text-[clamp(20px,2vw,32px)]">SS 2026</tspan> •{" "}
            <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">FROM STUDIOS</tspan> •{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">creative space</tspan>{" "}
            • <tspan className="font-mono text-[clamp(20px,2vw,32px)]">SS 2026</tspan>
          </textPath>
        </text>

        {/* Text Line 2: Slanted Horizontal Bottom */}
        <text className="fill-[#3D312A] font-sans text-[clamp(28px,3vw,48px)] tracking-[0.08em] uppercase">
          <textPath id="break-path-2" href="#line-path-2" startOffset="50%">
            <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">MOMENTARY CAPTURES</tspan>{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">of light & shadow</tspan>{" "}
            • <tspan className="font-light">CONTEMPORARY</tspan>{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">perspective</tspan>{" "}
            • <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">CREATIVE INDEX</tspan>
          </textPath>
        </text>

        {/* Text Line 3: Slanted Vertical Left */}
        <text className="fill-[#3D312A] font-sans text-[clamp(28px,3vw,48px)] tracking-[0.08em] uppercase">
          <textPath id="break-path-3" href="#line-path-3" startOffset="0%">
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">fashion studies</tspan>{" "}
            • <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">HAUTE COUTURE</tspan>{" "}
            • <tspan className="font-mono text-[clamp(20px,2vw,32px)] lowercase">archive 01</tspan> •{" "}
            <tspan className="font-light">PORTRAIT ANTHOLOGY</tspan> •{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">selects</tspan>
          </textPath>
        </text>

        {/* Text Line 4: Slanted Vertical Right */}
        <text className="fill-[#3D312A] font-sans text-[clamp(28px,3vw,48px)] tracking-[0.08em] uppercase">
          <textPath id="break-path-4" href="#line-path-4" startOffset="30%">
            <tspan className="font-black text-[clamp(34px,3.6vw,56px)]">CREATIVE DIRECTION</tspan>{" "}
            <tspan className="italic font-serif normal-case font-light text-[clamp(32px,3.4vw,52px)] tracking-tight">visual storytelling</tspan>{" "}
            • <tspan className="font-light">EDITORIAL</tspan>{" "}
            • <tspan className="font-mono text-[clamp(20px,2vw,32px)] lowercase">selection //</tspan>
          </textPath>
        </text>

        {/* Text Line 5: Slanted Diagonal Top-Left to Bottom-Right */}
        <text className="fill-[#3D312A] font-sans text-[clamp(24px,2.5vw,40px)] tracking-[0.1em] uppercase">
          <textPath id="break-path-5" href="#line-path-5" startOffset="10%">
            <tspan className="font-light">VISUAL STUDIES</tspan> • <tspan className="font-black">MARCUS VANCE</tspan> • <tspan className="italic font-serif normal-case">selected works</tspan> • <tspan className="font-mono text-[clamp(18px,1.8vw,28px)]">VOL II</tspan>
          </textPath>
        </text>

        {/* Text Line 6: Slanted Diagonal Bottom-Left to Top-Right */}
        <text className="fill-[#3D312A] font-sans text-[clamp(24px,2.5vw,40px)] tracking-[0.1em] uppercase">
          <textPath id="break-path-6" href="#line-path-6" startOffset="40%">
            <tspan className="font-black">AUTHENTIC SERIES</tspan> • <tspan className="italic font-serif normal-case">couture edition</tspan> • <tspan className="font-light">FROM THE ARCHIVE</tspan>
          </textPath>
        </text>

        {/* Text Line 7: Center Vertical */}
        <text className="fill-[#3D312A] font-sans text-[clamp(24px,2.5vw,40px)] tracking-[0.1em] uppercase">
          <textPath id="break-path-7" href="#line-path-7" startOffset="20%">
            <tspan className="font-black">DESIGN SYSTEM</tspan> • <tspan className="italic font-serif normal-case">couture archive</tspan> • <tspan className="font-mono text-[clamp(18px,1.8vw,28px)]">SS26</tspan>
          </textPath>
        </text>

        {/* Text Line 8: Center Horizontal */}
        <text className="fill-[#3D312A] font-sans text-[clamp(24px,2.5vw,40px)] tracking-[0.1em] uppercase">
          <textPath id="break-path-8" href="#line-path-8" startOffset="0%">
            <tspan className="font-light">IMAGEMAKER // PORTRAIT SELECTIONS</tspan> • <tspan className="font-black">HAUTE COUTURE</tspan>
          </textPath>
        </text>
      </svg>

      {/* ─── STICKERS POPPERS LAYER (Z-INDEX 10) ─── */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 flex items-center justify-center">
        
        {/* STICKER 1: SCALLOPED CIRCLE BADGE (Top-Left) */}
        <div
          className="bk-sticker bk-s1 absolute pointer-events-auto select-none"
          style={{
            top: "16%",
            left: "14%",
            width: "clamp(120px, 14vw, 190px)",
            height: "clamp(120px, 14vw, 190px)",
            transform: "scale(0) rotate(-25deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100">
            <path d={scallopPath} fill="#599E9C" />
            <circle cx="50" cy="50" r="39" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" strokeDasharray="3 3" />
            <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[4.5px] tracking-[0.2em] font-semibold">ORIGINAL RAW</text>
            <text x="50" y="53" textAnchor="middle" fill="#FFFFFF" className="font-anton text-[12px] tracking-[0.05em] uppercase">VISION</text>
            <line x1="28" y1="62" x2="72" y2="62" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="2 2" />
            <text x="50" y="74" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[4.5px] tracking-[0.25em]">SS // 2026</text>
          </svg>
        </div>

        {/* STICKER 2: FLOWER BADGE (Top-Right) */}
        <div
          className="bk-sticker bk-s2 absolute pointer-events-auto select-none"
          style={{
            top: "20%",
            right: "15%",
            width: "clamp(125px, 15vw, 200px)",
            height: "clamp(125px, 15vw, 200px)",
            transform: "scale(0) rotate(20deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100">
            <path d={flowerPath} fill="#E5989B" />
            <circle cx="50" cy="50" r="37" fill="none" stroke="#FFFFFF" strokeWidth="0.75" />
            <text x="50" y="32" textAnchor="middle" fill="#2B1A1D" className="font-mono text-[4px] tracking-[0.25em] font-bold">CREATIVE</text>
            <text x="50" y="55" textAnchor="middle" fill="#2B1A1D" className="font-anton text-[10px] tracking-[0.05em] uppercase">INSTINCT</text>
            <text x="50" y="74" textAnchor="middle" fill="#2B1A1D" className="font-mono text-[3.8px] tracking-[0.1em] font-bold">PORTRAIT STUDY</text>
          </svg>
        </div>

        {/* STICKER 3: STARBURST BADGE (Center-Left) */}
        <div
          className="bk-sticker bk-s3 absolute pointer-events-auto select-none"
          style={{
            top: "46%",
            left: "8%",
            width: "clamp(130px, 15vw, 210px)",
            height: "clamp(130px, 15vw, 210px)",
            transform: "scale(0) rotate(-15deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100">
            <polygon
              points="50,2 57,18 74,11 70,29 88,29 79,45 94,56 78,65 83,83 65,80 60,98 48,94 40,98 35,80 17,83 22,65 6,56 21,45 12,29 30,29 26,11 43,18"
              fill="#E07A5F"
            />
            <circle cx="50" cy="50" r="32" fill="#FAF7F2" />
            <text x="50" y="35" textAnchor="middle" fill="#3D201A" className="font-mono text-[4px] tracking-[0.2em] font-bold">NEW WAVE</text>
            <text x="50" y="55" textAnchor="middle" fill="#3D201A" className="font-anton text-[9.5px] tracking-[0.05em] uppercase">COLLECTION</text>
            <text x="50" y="72" textAnchor="middle" fill="#E07A5F" className="font-mono text-[4px] tracking-[0.15em] font-semibold">001 // SELECT</text>
          </svg>
        </div>

        {/* STICKER 4: RETRO POSTAGE STAMP / TICKET (Center-Right) */}
        <div
          className="bk-sticker bk-s4 absolute pointer-events-auto select-none"
          style={{
            top: "43%",
            right: "10%",
            width: "clamp(140px, 16vw, 220px)",
            height: "clamp(100px, 12vw, 160px)",
            transform: "scale(0) rotate(15deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 140 100">
            <path
              d="M 10 10 
                 L 20 10 A 3 3 0 0 0 26 10 L 36 10 A 3 3 0 0 0 42 10 L 52 10 A 3 3 0 0 0 58 10 L 68 10 A 3 3 0 0 0 74 10 L 84 10 A 3 3 0 0 0 90 10 L 100 10 A 3 3 0 0 0 106 10 L 116 10 A 3 3 0 0 0 122 10 L 130 10
                 L 130 20 A 3 3 0 0 0 130 26 L 130 36 A 3 3 0 0 0 130 42 L 130 52 A 3 3 0 0 0 130 58 L 130 68 A 3 3 0 0 0 130 74 L 130 84 A 3 3 0 0 0 130 90 L 130 90
                 L 120 90 A 3 3 0 0 0 114 90 L 104 90 A 3 3 0 0 0 98 90 L 88 90 A 3 3 0 0 0 82 90 L 72 90 A 3 3 0 0 0 66 90 L 56 90 A 3 3 0 0 0 50 90 L 40 90 A 3 3 0 0 0 34 90 L 24 90 A 3 3 0 0 0 18 90 L 10 90
                 L 10 80 A 3 3 0 0 0 10 74 L 10 64 A 3 3 0 0 0 10 58 L 10 48 A 3 3 0 0 0 10 42 L 10 32 A 3 3 0 0 0 10 26 L 10 16 Z"
              fill="#8A4F7D"
            />
            <rect x="18" y="18" width="104" height="64" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
            <text x="70" y="36" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[5px] tracking-[0.3em] font-semibold uppercase">HAUTE</text>
            <text x="70" y="58" textAnchor="middle" fill="#FFFFFF" className="font-anton text-[13px] tracking-[0.1em] uppercase">COUTURE</text>
            <text x="70" y="73" textAnchor="middle" fill="rgba(255,255,255,0.5)" className="font-mono text-[4px] tracking-[0.1em]">★ SS2026 EDITION ★</text>
          </svg>
        </div>

        {/* STICKER 5: SHIELD / OCTAGON BADGE (Bottom-Left) */}
        <div
          className="bk-sticker bk-s5 absolute pointer-events-auto select-none"
          style={{
            bottom: "14%",
            left: "16%",
            width: "clamp(120px, 14vw, 190px)",
            height: "clamp(120px, 14vw, 190px)",
            transform: "scale(0) rotate(-10deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100">
            <polygon points="30,10 70,10 90,30 90,70 70,90 30,90 10,70 10,30" fill="#B8860B" />
            <polygon points="32,13 68,13 87,32 87,68 68,87 32,87 13,68 13,32" fill="none" stroke="#FFFFFF" strokeWidth="0.75" />
            <text x="50" y="32" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[3.8px] tracking-[0.15em] font-semibold">SHADOW & LIGHT</text>
            <text x="50" y="54" textAnchor="middle" fill="#FFFFFF" className="font-anton text-[11px] tracking-[0.05em] uppercase">STUDIO</text>
            <line x1="35" y1="62" x2="65" y2="62" stroke="#FFFFFF" strokeWidth="0.75" />
            <text x="50" y="74" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[4px] tracking-[0.2em]">FROM EDITION</text>
          </svg>
        </div>

        {/* STICKER 6: ORGANIC CLOUD BADGE (Bottom-Right) */}
        <div
          className="bk-sticker bk-s6 absolute pointer-events-auto select-none"
          style={{
            bottom: "16%",
            right: "17%",
            width: "clamp(130px, 15vw, 210px)",
            height: "clamp(130px, 15vw, 210px)",
            transform: "scale(0) rotate(22deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)]" viewBox="0 0 100 100">
            <path d={gearPath} fill="#2E5A88" />
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x="50" y="33" textAnchor="middle" fill="#FFFFFF" className="font-mono text-[4.5px] tracking-[0.2em] font-semibold">MOMENTS</text>
            <text x="50" y="55" textAnchor="middle" fill="#FFFFFF" className="font-anton text-[10.5px] tracking-[0.05em] uppercase">IN MOTION</text>
            <text x="50" y="73" textAnchor="middle" fill="#FAF7F2" className="font-mono text-[4px] tracking-[0.25em] opacity-80">PERSPECTIVE</text>
          </svg>
        </div>

        {/* CENTERPIECE / GRAND MOMENT BADGE */}
        <div
          className="bk-sticker bk-s-center absolute pointer-events-auto select-none"
          style={{
            width: "clamp(190px, 22vw, 320px)",
            height: "clamp(190px, 22vw, 320px)",
            transform: "scale(0) rotate(-45deg)",
          }}
        >
          <svg className="w-full h-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="#6B2D2D" />
            <circle cx="50" cy="50" r="42" fill="none" stroke="#FAF7F2" strokeWidth="0.75" strokeDasharray="3 3" />
            <text x="50" y="32" textAnchor="middle" fill="#FAF7F2" className="font-mono text-[4px] tracking-[0.35em] font-bold">FROM STUDIOS</text>
            <text x="50" y="57" textAnchor="middle" fill="#FAF7F2" className="font-anton text-[20px] tracking-[0.05em] uppercase">FROM</text>
            <line x1="25" y1="67" x2="75" y2="67" stroke="#FAF7F2" strokeWidth="1" />
            <text x="50" y="78" textAnchor="middle" fill="#FAF7F2" className="font-mono text-[3.8px] tracking-[0.2em] font-semibold">THE ANTHOLOGY</text>
          </svg>
        </div>

      </div>
    </section>
  );
}
