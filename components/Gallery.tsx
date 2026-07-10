"use client";

import React from "react";
import Image from "next/image";

export default function Gallery() {
  const stackCards = [
    { id: 1, src: "/section2_1.jpg", alt: "Stack 1" },
    { id: 2, src: "/section2_2.jpg", alt: "Stack 2" },
    { id: 3, src: "/section2_3.jpg", alt: "Stack 3" },
    { id: 4, src: "/section2_4.jpg", alt: "Stack 4" },
    { id: 5, src: "/section2_5.jpg", alt: "Stack 5" },
  ];

  // Sizes classification:
  // - small: width 90px / height 135px (or equivalent clamp)
  // - medium: width 130px / height 190px (or equivalent clamp)
  // - large: width 170px / height 245px (or equivalent clamp)
  const supportedCards = [
    // Top-Left corner
    { id: 6, src: "/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg", alt: "TL 1", left: "6%", top: "8%", corner: "tl", size: "large" },
    { id: 7, src: "/jenna-brenner-zm0xw-UF5Bg-unsplash.jpg", alt: "TL 2", left: "18%", top: "18%", corner: "tl", size: "medium" },
    { id: 8, src: "/rene-ranisch-L3cTvvdrCCk-unsplash.jpg", alt: "TL 3", left: "8%", top: "35%", corner: "tl", size: "small" },

    // Bottom-Left corner
    { id: 9, src: "/maureen-de-wit--Lu6d3i13Dg-unsplash.jpg", alt: "BL 1", left: "5%", top: "60%", corner: "bl", size: "medium" },
    { id: 10, src: "/rashtravardhan-kataria-1XWxeqhptp8-unsplash.jpg", alt: "BL 2", left: "16%", top: "72%", corner: "bl", size: "large" },
    { id: 11, src: "/section2_1.jpg", alt: "BL 3", left: "28%", top: "65%", corner: "bl", size: "small" },

    // Top-Right corner
    { id: 12, src: "/section2_2.jpg", alt: "TR 1", left: "75%", top: "8%", corner: "tr", size: "small" },
    { id: 13, src: "/section2_3.jpg", alt: "TR 2", left: "88%", top: "16%", corner: "tr", size: "large" },
    { id: 14, src: "/section2_4.jpg", alt: "TR 3", left: "78%", top: "38%", corner: "tr", size: "medium" },

    // Bottom-Right corner
    { id: 15, src: "/section2_5.jpg", alt: "BR 1", left: "85%", top: "62%", corner: "br", size: "medium" },
    { id: 16, src: "/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg", alt: "BR 2", left: "70%", top: "75%", corner: "br", size: "small" },
    { id: 17, src: "/jenna-brenner-zm0xw-UF5Bg-unsplash.jpg", alt: "BR 3", left: "84%", top: "82%", corner: "br", size: "large" },
  ];

  // Helper to resolve card sizes
  const getCardDimensions = (size: string) => {
    switch (size) {
      case "large":
        return {
          width: "clamp(150px, 12vw, 185px)",
          height: "clamp(220px, 17.5vw, 270px)",
        };
      case "medium":
        return {
          width: "clamp(115px, 9.5vw, 140px)",
          height: "clamp(170px, 14vw, 205px)",
        };
      case "small":
      default:
        return {
          width: "clamp(85px, 7vw, 105px)",
          height: "clamp(125px, 10.5vw, 155px)",
        };
    }
  };

  return (
    <section
      className="gallery-section-el absolute inset-0 w-full h-screen z-35 pointer-events-none opacity-0 overflow-hidden"
      style={{
        willChange: "opacity, transform",
        backgroundColor: "#0F0202",
      }}
    >
      {/* 1. Background Container (Dark-Red combination gradient + noise) */}
      <div 
        className="gallery-bg-container absolute inset-0 w-full h-full z-0 pointer-events-auto will-change-transform origin-center"
      >
        {/* Dark Red gradient combo background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0C0000] via-[#1A0404] to-[#2E0808] z-0">
          <div className="absolute inset-0 opacity-[0.25] mix-blend-color-dodge bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.15)_0%,transparent_70%)]" />
          <div 
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* Scattered Interactive Grid Container */}
        <div 
          className="gallery-grid absolute inset-0 w-[100vw] h-[100vh] z-5 pointer-events-none will-change-transform"
          style={{ transform: "translateY(0)" }}
        >
          {/* Supported Corner Cards (Varying Sizes) */}
          {supportedCards.map((card) => {
            const dims = getCardDimensions(card.size);
            return (
              <div
                key={card.id}
                className={`gallery-supported-card corner-${card.corner} absolute pointer-events-auto`}
                style={{
                  left: card.left,
                  top: card.top,
                  width: dims.width,
                  height: dims.height,
                  willChange: "transform, opacity",
                  opacity: 0,
                  zIndex: 5,
                }}
              >
                <div 
                  className="w-full h-full relative overflow-hidden shadow-[0_8px_25px_rgba(0,0,0,0.45)] border border-red-950/20 bg-neutral-900 rounded-sm"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    className="object-cover pointer-events-none select-none grayscale-[20%] contrast-[1.1] brightness-[0.9]"
                    sizes="(max-width: 768px) 115px, 150px"
                  />
                </div>
              </div>
            );
          })}

          {/* Central Stack Cards (Significantly Larger, stacked exactly in center) */}
          {stackCards.map((card, idx) => (
            <div
              key={card.id}
              className={`gallery-stack-card stack-card-${idx} absolute pointer-events-auto left-[calc(50%-145px)] top-[calc(50%-210px)] md:left-[calc(50%-170px)] md:top-[calc(50%-245px)]`}
              style={{
                width: "clamp(290px, 24vw, 340px)",
                height: "clamp(420px, 34vw, 490px)",
                willChange: "transform, opacity",
                opacity: 0,
                zIndex: 10 + idx, // Stacked chronologically
              }}
            >
              <div 
                className="w-full h-full relative overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.65)] border border-red-950/30 bg-neutral-900 rounded-sm"
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover pointer-events-none select-none contrast-[1.05] brightness-[0.95]"
                  sizes="(max-width: 768px) 290px, 340px"
                  priority={idx < 2}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
