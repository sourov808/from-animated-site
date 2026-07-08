"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";

export default function ListedSection() {
  const [isHoveringImage, setIsHoveringImage] = useState(false);
  const [cursorCoords, setCursorCoords] = useState({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);

  interface Project {
    num: string;
    title: string;
    category: string;
    year: string;
    desc: string;
    src: string;
    objectPosition: string;
  }

  const projects: Project[] = [
    {
      num: "01",
      title: "Northern Silence",
      category: "Portrait Editorial",
      year: "2026",
      desc: "A portrait series exploring stillness, natural light and quiet expressions that speak louder than words.",
      src: "/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg",
      objectPosition: "center 12%",
    },
    {
      num: "02",
      title: "Concrete Dreams",
      category: "Architecture Photography",
      year: "2025",
      desc: "Geometry, symmetry and concrete forms documenting how architecture quietly shapes human perspective.",
      src: "/jenna-brenner-zm0xw-UF5Bg-unsplash.jpg",
      objectPosition: "center 30%",
    },
    {
      num: "03",
      title: "The Last Frame",
      category: "Studio Editorial",
      year: "2025",
      desc: "An intimate studio project using dramatic lighting and minimal composition to create cinematic portraits.",
      src: "/rene-ranisch-L3cTvvdrCCk-unsplash.jpg",
      objectPosition: "center 15%",
    },
    {
      num: "04",
      title: "Morning Ritual",
      category: "Lifestyle Photography",
      year: "2024",
      desc: "Small everyday moments observed without interruption, revealing beauty in ordinary routines.",
      src: "/maureen-de-wit--Lu6d3i13Dg-unsplash.jpg",
      objectPosition: "center 35%",
    },
    {
      num: "05",
      title: "After Rain",
      category: "Street Photography",
      year: "2024",
      desc: "Reflections, neon lights and quiet streets captured moments after the rain when cities feel most alive.",
      src: "/rashtravardhan-kataria-1XWxeqhptp8-unsplash.jpg",
      objectPosition: "center 50%",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorCoords({ x: e.clientX, y: e.clientY });
  };

  const scrollToProject = (index: number) => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    // Scroll coordinates mapped to new ListedSection GSAP positions (6.45 → 7.55, total 7.71)
    const times = [6.45, 6.67, 6.89, 7.11, 7.33];
    const progress = times[index] / 7.71;
    const targetScroll = progress * scrollHeight;
    window.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="listed-section-el absolute inset-0 w-full h-screen z-39 pointer-events-none opacity-0 overflow-hidden"
      style={{
        willChange: "opacity",
        backgroundColor: "#0E0E0E",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringImage(true)}
      onMouseLeave={() => setIsHoveringImage(false)}
    >
      {/* Background Slideshow: 5 Full-Screen Panels */}
      <div className="absolute inset-0 w-full h-full z-10 pointer-events-none">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`listed-slide-${i} absolute inset-0 w-full h-screen overflow-hidden pointer-events-none`}
            style={{
              display: i === 0 ? "block" : "none",
              willChange: "transform",
              boxShadow: "0 -20px 40px rgba(0,0,0,0.6)",
            }}
          >
            {/* Image Wrapper for Parallax - Fixed width/height responsive frame */}
            <div
              className={`listed-slide-img-wrapper-${i} absolute w-[88vw] h-[45vh] left-[6vw] top-[10vh] md:w-[32vw] md:h-[76vh] md:left-auto md:right-[6vw] md:top-[12vh] overflow-hidden z-10 rounded-sm shadow-2xl bg-[#151515]`}
              style={{
                willChange: "transform",
              }}
            >
              <Image
                src={project.src}
                alt={project.title}
                fill
                priority={i === 0}
                className={`listed-slide-img-${i} object-cover parallax-img`}
                sizes="(max-width: 768px) 88vw, 32vw"
                style={{
                  transform: "scale(1.03)",
                  willChange: "transform",
                  objectPosition: project.objectPosition,
                }}
              />
            </div>

            {/* Right-Side/Middle Editorial Details Panel */}
            <div
              className={`listed-slide-details-${i} absolute left-[6vw] top-[58vh] w-[88vw] md:left-[38vw] md:top-[28vh] md:w-[22vw] md:max-w-[320px] z-20 text-white flex flex-col items-start pointer-events-auto`}
              style={{
                display: i === 0 ? "flex" : "none",
                opacity: i === 0 ? 1 : 0,
                willChange: "opacity, transform",
              }}
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C0C0C0] mb-3 block">
                [ {project.category} ]
              </span>
              <h2 className="font-anton text-[clamp(2rem,4.5vw,4.5rem)] uppercase leading-[0.9] tracking-tight text-white mb-4">
                {project.title}
              </h2>
              <div className="w-16 h-[2px] bg-white/40 my-3" />
              <p className="font-playfair text-xs md:text-sm leading-relaxed text-white/80 mb-6">
                {project.desc}
              </p>
              
              <div className="flex items-center gap-6">
                <span className="font-mono text-xs text-white/50 tracking-wider">
                  RELEASED: {project.year}
                </span>
                <span className="text-white/20">|</span>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-white hover:text-[#C0C0C0] transition-colors border-b border-white/30 pb-0.5"
                >
                  Explore Shot
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pinned Overlay: Contains Pinned Project Menu (Sits on top of the slides) */}
      <div className="absolute inset-0 w-full h-screen z-30 pointer-events-none flex items-center">
        <div className="w-full max-w-[88vw] h-full mx-auto flex flex-row items-stretch justify-between py-[12vh] relative">
          {/* Left Column (30% width): Pinned Project Menu */}
          <div
            className="w-[30%] hidden md:flex flex-col justify-between h-full py-4 relative z-20"
            onMouseEnter={() => setIsHoveringImage(false)}
            onMouseLeave={() => setIsHoveringImage(true)}
          >
            {/* Section Intro */}
            <div className="mb-8 select-none">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-white/50 block mb-3">
                [ SELECTED WORK ]
              </span>
              <h3 className="font-playfair italic text-xs text-white/60 max-w-[260px] leading-relaxed">
                Five visual stories exploring light, space, and silent
                narratives.
              </h3>
            </div>

            {/* Vertical Project Menu */}
            <div className="flex flex-col gap-6 md:gap-8 items-start my-auto">
              {projects.map((project, i) => (
                <button
                  key={i}
                  onClick={() => scrollToProject(i)}
                  className={`listed-item-${i} flex items-center text-left pointer-events-auto group py-2.5`}
                  style={{
                    opacity: i === 0 ? 1 : 0.35,
                    willChange: "opacity",
                  }}
                >
                  {/* Fixed-width indicator container to prevent text shifting */}
                  <div className="w-10 hidden md:flex items-center justify-start pointer-events-none">
                    <span
                      className={`listed-line-${i} h-[1.5px] bg-white block`}
                      style={{
                        width: i === 0 ? "24px" : "0px",
                        opacity: i === 0 ? 1 : 0,
                      }}
                    />
                  </div>

                  <span className="font-mono text-xs text-white/40 mr-4 mt-0.5">
                    {project.num}
                  </span>

                  <h3 className="font-anton text-[clamp(1.4rem,2.8vw,3.6rem)] uppercase leading-none tracking-tight text-white transition-transform duration-300 group-hover:translate-x-2">
                    {project.title}
                  </h3>
                </button>
              ))}
            </div>

            {/* Empty space for layout balance */}
            <div className="h-8" />
          </div>
        </div>
      </div>

      {/* Custom Interactive Follow Cursor */}
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full bg-white text-black font-anton text-[10px] tracking-widest flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          isHoveringImage ? "opacity-100 scale-100" : "opacity-0 scale-50"
        }`}
        style={{
          left: cursorCoords.x,
          top: cursorCoords.y,
        }}
      >
        OPEN
      </div>
    </section>
  );
}
