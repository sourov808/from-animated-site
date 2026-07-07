"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import BackgroundSplit from "@/components/BackgroundSplit";
import BackgroundTypography from "@/components/BackgroundTypography";
import ModelImages from "@/components/ModelImages";
import ForegroundTypography from "@/components/ForegroundTypography";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showSecondImage = scrollY > 120;

  return (
    <div className="relative min-h-[200vh] bg-[#FAF7F2] font-sans text-[#0A0A0A] selection:bg-[#0A0A0A] selection:text-[#FAF7F2]">
      {/* Navbar & Mobile Overlay Drawer */}
      <Header />

      {/* Main Hero Container */}
      <main className="fixed inset-0 w-full h-screen overflow-hidden">
        
        {/* Split Color Backgrounds */}
        <BackgroundSplit />

        {/* Big Typography behind the models */}
        <BackgroundTypography showSecondImage={showSecondImage} />

        {/* Model Images */}
        <ModelImages showSecondImage={showSecondImage} />

        {/* Red & Outlined Typography in front of the models */}
        <ForegroundTypography showSecondImage={showSecondImage} />

        {/* Bottom Bracket Action Link */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center">
          <a
            href="#collection"
            className="font-anton text-xs md:text-sm uppercase tracking-[0.2em] text-black hover:opacity-75 transition-opacity pointer-events-auto"
          >
            [ SEE COLLECTION ]
          </a>
        </div>

      </main>
      
      {/* Scroll indicator hint */}
      <div className="fixed bottom-8 right-8 z-30 pointer-events-none font-anton text-[10px] tracking-[0.2em] text-black/30 hidden md:block">
        SCROLL DOWN
      </div>
    </div>
  );
}
