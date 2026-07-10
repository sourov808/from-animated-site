"use client";

import { useEffect, useState } from "react";

export default function ScrollCue() {
  // Idle nudge — if the user lingers at the top without scrolling, gently
  // invite them to keep going.
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const arm = () => {
      setIdle(false);
      clearTimeout(t);
      t = setTimeout(() => {
        if (window.scrollY < 60) setIdle(true);
      }, 6000);
    };
    arm();
    window.addEventListener("scroll", arm, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", arm);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <span
        className={`font-anton uppercase text-[0.6rem] tracking-[0.35em] text-black/60 transition-all duration-500 ${
          idle ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
      >
        Keep exploring
      </span>
      <div className="relative w-px h-10 bg-black/20 overflow-hidden">
        <span className="scrollcue-dot absolute left-1/2 top-0 w-[3px] h-[3px] rounded-full bg-black" />
      </div>
      <span className="font-anton uppercase text-[0.58rem] tracking-[0.35em] text-black/70">
        Scroll
      </span>
      <style>{`
        @keyframes scrollcueDot {
          0% { transform: translate(-50%, -6px); opacity: 0; }
          25% { opacity: 1; }
          100% { transform: translate(-50%, 40px); opacity: 0; }
        }
        .scrollcue-dot { animation: scrollcueDot 1.8s cubic-bezier(0.65,0,0.35,1) infinite; }
        @media (prefers-reduced-motion: reduce) {
          .scrollcue-dot { animation: none; top: 50%; }
        }
      `}</style>
    </div>
  );
}
