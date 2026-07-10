"use client";

import { useEffect, useState } from "react";

function Lockup({ solid }: { solid: boolean }) {
  const ink = "#0A0A0A";
  const faint = "rgba(10,10,10,0.20)";
  const stroke = solid ? ink : faint;
  const letterStyle = solid
    ? { color: ink }
    : { color: "transparent", WebkitTextStroke: `2px ${faint}` };

  return (
    <div className="flex items-center gap-[0.04em] font-anton uppercase leading-none text-[clamp(3.5rem,13vw,11rem)]">
      <span style={letterStyle}>F</span>
      <span style={letterStyle}>R</span>
      {/* Aperture "O" */}
      <span className="relative inline-block h-[0.78em] aspect-square mx-[0.02em]">
        <svg
          viewBox="0 0 100 100"
          fill="none"
          className={`w-full h-full ${solid ? "animate-spin [animation-duration:2.6s]" : ""}`}
          aria-hidden="true"
        >
          <circle cx="50" cy="50" r="46" stroke={stroke} strokeWidth="3" />
          <g stroke={stroke} strokeWidth="2.4" strokeLinecap="round">
            <line x1="70" y1="50" x2="84.64" y2="30" />
            <line x1="60" y1="32.68" x2="50" y2="10" />
            <line x1="40" y1="32.68" x2="15.36" y2="30" />
            <line x1="30" y1="50" x2="15.36" y2="70" />
            <line x1="40" y1="67.32" x2="50" y2="90" />
            <line x1="60" y1="67.32" x2="84.64" y2="70" />
          </g>
          <polygon
            points="70,50 60,32.68 40,32.68 30,50 40,67.32 60,67.32"
            stroke={stroke}
            strokeWidth="2.2"
            fill="#FAF7F2"
          />
          <circle cx="50" cy="50" r="4" fill={solid ? "#A23A3A" : faint} />
        </svg>
      </span>
      <span style={letterStyle}>M</span>
    </div>
  );
}

export default function Loader() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"loading" | "exit" | "gone">("loading");

  // Progress counter + scroll lock while loading.
  useEffect(() => {
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + 2);
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        setTimeout(() => setPhase("exit"), 400);
      }
    }, 35);

    return () => {
      clearInterval(id);
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
    };
  }, []);

  // After the exit slide finishes, unmount and release scroll.
  useEffect(() => {
    if (phase !== "exit") return;
    const t = setTimeout(() => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      setPhase("gone");
    }, 950);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "gone") return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#FAF7F2] flex items-center justify-center overflow-hidden transition-transform duration-[950ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
        phase === "exit" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Logo that fills with progress: faint outline base + ink layer
          clipped from the bottom up as the counter climbs. */}
      <div className="relative">
        <Lockup solid={false} />
        <div
          className="absolute inset-0 transition-[clip-path] duration-150 ease-linear [will-change:clip-path]"
          style={{ clipPath: `inset(${100 - count}% 0 0 0)` }}
        >
          <Lockup solid />
        </div>
      </div>

      {/* Footer meta + counter */}
      <div className="absolute bottom-[8vh] left-0 w-full px-[6vw] flex items-end justify-between">
        <span className="font-anton uppercase tracking-[0.4em] text-[clamp(0.55rem,0.8vw,0.72rem)] text-[#0A0A0A]/45">
          Jack — FROM Studio
        </span>
        <span className="font-anton tabular-nums leading-none text-[clamp(1.6rem,4vw,3.2rem)] text-[#0A0A0A]">
          {count}
          <span className="text-[#A23A3A]">%</span>
        </span>
      </div>

      {/* Progress line */}
      <div
        className="absolute bottom-0 left-0 h-[3px] bg-[#A23A3A] transition-[width] duration-150 ease-linear"
        style={{ width: `${count}%` }}
      />
    </div>
  );
}
