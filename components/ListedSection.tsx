"use client";

import React, { useState, useRef } from "react";

export default function ListedSection() {
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      num: "01",
      title: "Northern Silence",
      category: "Portrait Editorial",
      year: "2026",
      desc: "A portrait series exploring stillness, natural light and quiet expressions that speak louder than words.",
      src: "/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg",
    },
    {
      num: "02",
      title: "Concrete Dreams",
      category: "Architecture Photography",
      year: "2025",
      desc: "Geometry, symmetry and concrete forms documenting how architecture quietly shapes human perspective.",
      src: "/jenna-brenner-zm0xw-UF5Bg-unsplash.jpg",
    },
    {
      num: "03",
      title: "The Last Frame",
      category: "Studio Editorial",
      year: "2025",
      desc: "An intimate studio project using dramatic lighting and minimal composition to create cinematic portraits.",
      src: "/rene-ranisch-L3cTvvdrCCk-unsplash.jpg",
    },
    {
      num: "04",
      title: "Morning Ritual",
      category: "Lifestyle Photography",
      year: "2024",
      desc: "Small everyday moments observed without interruption, revealing beauty in ordinary routines.",
      src: "/maureen-de-wit--Lu6d3i13Dg-unsplash.jpg",
    },
    {
      num: "05",
      title: "After Rain",
      category: "Street Photography",
      year: "2024",
      desc: "Reflections, neon lights and quiet streets captured moments after the rain when cities feel most alive.",
      src: "/rashtravardhan-kataria-1XWxeqhptp8-unsplash.jpg",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorCoords({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      className="listed-section-el absolute inset-0 w-full h-screen z-40 pointer-events-none opacity-0 flex items-center overflow-hidden"
      style={{
        willChange: "opacity, background-color",
        backgroundColor: "#0E0E0E",
      }}
    >
      <div className="w-full max-w-[88vw] h-full mx-auto flex flex-row items-stretch justify-between py-[10vh] relative z-10">
        
        {/* Left Column (40% width): Project List */}
        <div className="w-[40%] flex flex-col justify-between h-full py-4 relative z-20">
          
          {/* Section Intro */}
          <div className="mb-8 select-none">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 block mb-3">
              [ SELECTED WORK ]
            </span>
            <h3 className="font-playfair italic text-sm text-white/60 max-w-[320px] leading-relaxed">
              Five visual stories exploring light, people, architecture and moments.
            </h3>
          </div>

          {/* Vertical Project Menu */}
          <div className="flex flex-col gap-6 md:gap-8 items-start my-auto">
            {projects.map((project, i) => (
              <button
                key={i}
                className={`listed-item-${i} flex items-center text-left pointer-events-auto group`}
                style={{ opacity: 0.25 }}
              >
                {/* Accent line - expands on active/hover */}
                <span className={`listed-line-${i} h-[2px] bg-white mr-0 w-0 opacity-0 transition-all duration-500`} />
                
                {/* Accent line hover class for backup interaction */}
                <span className="h-[2px] bg-white/40 w-0 group-hover:w-6 group-hover:mr-4 transition-all duration-300 opacity-100 h-[1.5px] block md:hidden" />

                <span className="font-mono text-xs md:text-sm text-white/40 mr-4 self-start mt-2">
                  {project.num}
                </span>
                
                <h3 className="font-anton text-[clamp(1.6rem,3.2vw,4.5rem)] uppercase leading-none tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2">
                  {project.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Footer placeholder padding for symmetry */}
          <div className="h-8" />
        </div>

        {/* Right Column (60% width): Large Preview Image */}
        <div className="w-[60%] h-full flex flex-col justify-center relative pl-8 z-10">
          
          {/* Main Exhibition Print Frame */}
          <div
            className="w-[85%] h-[52vh] relative overflow-hidden bg-[#161616] cursor-none border border-white/5 self-end"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHoveringImage(true)}
            onMouseLeave={() => setIsHoveringImage(false)}
          >
            {projects.map((project, i) => (
              <div
                key={i}
                className={`listed-img-wrapper-${i} absolute inset-0 opacity-0 pointer-events-none flex items-center justify-center overflow-hidden`}
              >
                <img
                  src={project.src}
                  alt={project.title}
                  className={`listed-img-${i} w-full h-full object-cover transition-transform duration-1000 ease-out`}
                  style={{
                    transform: isHoveringImage ? "scale(1.02)" : "scale(1.03)",
                  }}
                />
              </div>
            ))}

            {/* Custom Interactive Follow Cursor */}
            <div
              ref={cursorRef}
              className={`fixed pointer-events-none z-50 rounded-full bg-white text-black font-anton text-[10px] tracking-widest flex items-center justify-center w-14 h-14 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
                isHoveringImage ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
              style={{
                left: cursorCoords.x,
                top: cursorCoords.y,
              }}
            >
              OPEN
            </div>
          </div>

          {/* Details Bar under the Frame */}
          <div className="w-[85%] mt-6 relative h-[14vh] self-end">
            {projects.map((project, i) => (
              <div
                key={i}
                className={`listed-details-${i} absolute inset-x-0 top-0 flex flex-col opacity-0 pointer-events-none`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                  <div className="flex items-center gap-4">
                    <span className="font-anton text-lg tracking-tight uppercase text-white">
                      {project.title}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                      {project.category}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-white/50">
                    {project.year}
                  </span>
                </div>
                <p className="font-playfair text-sm leading-relaxed text-white/70 max-w-[480px]">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
