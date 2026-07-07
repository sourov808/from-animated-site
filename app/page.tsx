"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import BackgroundSplit from "@/components/BackgroundSplit";
import BackgroundTypography from "@/components/BackgroundTypography";
import ModelImages from "@/components/ModelImages";
import ForegroundTypography from "@/components/ForegroundTypography";
import StatsSection from "@/components/StatsSection";
import ListedSection from "@/components/ListedSection";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamic import to support Next.js SSR safely
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {
        // Master scroll timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.5, // Even slower and calmer scrub easing
          },
        });

        // 1. Initial State to Scrolled Hero State (Scroll: 0% to 15%)
        tl.to(".hero-image-set-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-image-set-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-1, .hero-bg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-2, .hero-bg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-1, .hero-fg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-2, .hero-fg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0);

        // 2. Hold the composition from 15% to 22% (No zoom begins)

        // 3. Zoom-in of Hero Models & Typography (Scroll: 22% to 42%)
        tl.to(".hero-model-container", {
          scale: 10.0,
          opacity: 0,
          duration: 0.20,
          ease: "power2.inOut",
        }, 0.22)
        .to(".hero-text-bg", {
          scale: 1.3,
          opacity: 0,
          duration: 0.20,
          ease: "power2.inOut",
        }, 0.22)
        .to(".hero-text-fg", {
          scale: 1.3,
          opacity: 0,
          duration: 0.20,
          ease: "power2.inOut",
        }, 0.22)
        .to(".hero-right-bg, .hero-divider, .hero-cta", {
          opacity: 0,
          duration: 0.20,
          ease: "power2.inOut",
        }, 0.22);

        // 4. StatsSection Reveal & Background Overlay (Scroll: 42% to 45%)
        tl.to(".stats-section-el", {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.03,
          ease: "power2.inOut",
        }, 0.42)
        .to(".stats-dark-overlay", {
          opacity: 1,
          duration: 0.03,
          ease: "power2.out",
        }, 0.43);

        // Initially hide all story blocks & look image wrappers to prevent overlaps
        for (let i = 0; i < 5; i++) {
          tl.set(`.story-block-${i}`, { display: "none", opacity: 0 }, 0.35);
          tl.set(`.look-img-wrapper-${i}`, { display: "none", opacity: 0 }, 0.35);
        }

        // Initially hide all ListedSection elements to prevent overlaps
        for (let i = 0; i < 5; i++) {
          tl.set(`.listed-item-${i}`, { opacity: i === 0 ? 1 : 0.25 }, 0.35);
          tl.set(`.listed-line-${i}`, { width: i === 0 ? "24px" : "0px", opacity: i === 0 ? 1 : 0, marginRight: i === 0 ? "16px" : "0px" }, 0.35);
          tl.set(`.listed-img-wrapper-${i}`, { display: i === 0 ? "flex" : "none", opacity: i === 0 ? 1 : 0 }, 0.35);
          tl.set(`.listed-details-${i}`, { display: i === 0 ? "flex" : "none", opacity: i === 0 ? 1 : 0, y: i === 0 ? 0 : 20 }, 0.35);
        }

        // --- LOOK 1 (0.45 to 0.58) ---
        tl.fromTo(".concept-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.05, ease: "power2.out" }, 0.44)
          .set(".story-block-0", { display: "flex" }, 0.45)
          .to(".story-block-0", { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.45)
          .fromTo(".story-micro-0", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 0.45)
          .fromTo(".story-headline-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.46)
          .fromTo(".story-paragraph-0", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 0.47)
          .fromTo(".story-explore-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.48)
          .fromTo(".story-quote-wrapper-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.49)
          
          .set(".look-img-wrapper-0", { display: "flex" }, 0.47)
          .to(".look-img-wrapper-0", { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.47)
          .fromTo(".look-img-0", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 0.47)
          .fromTo(".look-support-img-0", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 0.47);

        // Look 1 -> Look 2 Crossfade (0.58 to 0.62)
        // Transitions background to Soft Stone (#E8E2D8)
        tl.to(".story-block-0, .look-img-wrapper-0", { opacity: 0, duration: 0.04, ease: "power2.in" }, 0.58)
          .set(".story-block-0, .look-img-wrapper-0", { display: "none" }, 0.61)
          .to(".stats-section-el", { backgroundColor: "#E8E2D8", duration: 0.04, ease: "power2.inOut" }, 0.58);

        // --- LOOK 2 (0.62 to 0.72) ---
        tl.set(".story-block-1", { display: "flex" }, 0.61)
          .set(".look-img-wrapper-1", { display: "flex" }, 0.61)
          .to(".story-block-1, .look-img-wrapper-1", { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.62)
          .fromTo(".look-img-1", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 0.62)
          .fromTo(".look-support-img-1", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 0.62)
          .fromTo(".story-micro-1", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 0.62)
          .fromTo(".story-headline-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.63)
          .fromTo(".story-paragraph-1", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 0.64)
          .fromTo(".story-explore-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.65)
          .fromTo(".story-quote-wrapper-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.66);

        // Look 2 -> Look 3 Crossfade (0.72 to 0.76)
        // Transitions background to Charcoal (#1B1B1B) & typography to white
        tl.to(".story-block-1, .look-img-wrapper-1", { opacity: 0, duration: 0.04, ease: "power2.in" }, 0.72)
          .set(".story-block-1, .look-img-wrapper-1", { display: "none" }, 0.75)
          .to(".stats-section-el", { backgroundColor: "#1B1B1B", duration: 0.04, ease: "power2.inOut" }, 0.72)
          // Switch all text components to white
          .to(".concept-title", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-micro-']", { color: "rgba(255,255,255,0.5)", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-headline-']", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-paragraph-']", { color: "rgba(255,255,255,0.8)", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-explore-']", { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-quote-']", { color: "rgba(255,255,255,0.5)", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to("[class*='story-quote-wrapper-']", { borderColor: "rgba(255,255,255,0.1)", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to(".nav-el", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 0.72)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 0.72);

        // --- LOOK 3 (0.76 to 0.86) ---
        tl.set(".story-block-2", { display: "flex" }, 0.75)
          .set(".look-img-wrapper-2", { display: "flex" }, 0.75)
          .to(".story-block-2, .look-img-wrapper-2", { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.76)
          .fromTo(".look-img-2", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 0.76)
          .fromTo(".look-support-img-2", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 0.76)
          .fromTo(".story-micro-2", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 0.76)
          .fromTo(".story-headline-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.77)
          .fromTo(".story-paragraph-2", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 0.78)
          .fromTo(".story-explore-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.79)
          .fromTo(".story-quote-wrapper-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.80);

        // Look 3 -> Look 4 Crossfade (0.86 to 0.90)
        // Transitions background to Dark Brown (#3A2F28), keep typography white
        tl.to(".story-block-2, .look-img-wrapper-2", { opacity: 0, duration: 0.04, ease: "power2.in" }, 0.86)
          .set(".story-block-2, .look-img-wrapper-2", { display: "none" }, 0.89)
          .to(".stats-section-el", { backgroundColor: "#3A2F28", duration: 0.04, ease: "power2.inOut" }, 0.86);

        // --- LOOK 4 (0.90 to 1.00) ---
        tl.set(".story-block-3", { display: "flex" }, 0.89)
          .set(".look-img-wrapper-3", { display: "flex" }, 0.89)
          .to(".story-block-3, .look-img-wrapper-3", { opacity: 1, duration: 0.05, ease: "power2.out" }, 0.90)
          .fromTo(".look-img-3", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 0.90)
          .fromTo(".look-support-img-3", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 0.90)
          .fromTo(".story-micro-3", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 0.90)
          .fromTo(".story-headline-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.91)
          .fromTo(".story-paragraph-3", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 0.92)
          .fromTo(".story-explore-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.93)
          .fromTo(".story-quote-wrapper-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 0.94);

        // Look 4 -> Look 5 Crossfade (1.00 to 1.04)
        // Transitions background to Light Cream (#F5F3EE) & typography to dark (#0A0A0A)
        tl.to(".story-block-3, .look-img-wrapper-3", { opacity: 0, duration: 0.04, ease: "power2.in" }, 1.00)
          .set(".story-block-3, .look-img-wrapper-3", { display: "none" }, 1.03)
          .to(".stats-section-el", { backgroundColor: "#F5F3EE", duration: 0.04, ease: "power2.inOut" }, 1.00)
          // Switch all text components back to dark
          .to(".concept-title", { color: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-micro-']", { color: "rgba(10,10,10,0.5)", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-headline-']", { color: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-paragraph-']", { color: "rgba(10,10,10,0.8)", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-explore-']", { color: "#0A0A0A", borderColor: "rgba(10,10,10,0.4)", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-quote-']", { color: "rgba(10,10,10,0.5)", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to("[class*='story-quote-wrapper-']", { borderColor: "rgba(10,10,10,0.1)", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to(".nav-el", { color: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to(".nav-underline", { backgroundColor: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 1.00)
          .to(".mobile-burger-line", { backgroundColor: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 1.00);

        // --- LOOK 5 (1.04 to 1.14) ---
        tl.set(".story-block-4", { display: "flex" }, 1.03)
          .set(".look-img-wrapper-4", { display: "flex" }, 1.03)
          .to(".story-block-4, .look-img-wrapper-4", { opacity: 1, ease: "power2.out" }, 1.04)
          .fromTo(".look-img-4", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, ease: "power1.out" }, 1.04)
          .fromTo(".look-support-img-4", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, ease: "power1.out" }, 1.04)
          .fromTo(".story-micro-4", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, ease: "power2.out" }, 1.04)
          .fromTo(".story-headline-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 1.05)
          .fromTo(".story-paragraph-4", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, ease: "power2.out" }, 1.06)
          .fromTo(".story-explore-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 1.07)
          .fromTo(".story-quote-wrapper-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 1.08);

        // Transition from StatsSection to ListedSection (1.14 to 1.18)
        tl.to(".stats-section-el", { opacity: 0, pointerEvents: "none", duration: 0.04, ease: "power2.inOut" }, 1.14)
          .to(".listed-section-el", { opacity: 1, pointerEvents: "auto", duration: 0.04, ease: "power2.inOut" }, 1.14)
          // Transition header theme back to white on dark background
          .to(".nav-el", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 1.14)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 1.14)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 1.14);

        // --- PROJECT 1 to 2 Crossfade (1.30 to 1.36) ---
        tl.to(".listed-item-0", { opacity: 0.25, duration: 0.03 }, 1.30)
          .to(".listed-line-0", { width: "0px", opacity: 0, marginRight: "0px", duration: 0.03 }, 1.30)
          .to(".listed-details-0", { opacity: 0, y: -20, duration: 0.03 }, 1.30)
          .to(".listed-img-wrapper-0", { opacity: 0, duration: 0.04 }, 1.30)
          .set(".listed-details-0, .listed-img-wrapper-0", { display: "none" }, 1.34)
          
          .to(".listed-item-1", { opacity: 1, duration: 0.03 }, 1.32)
          .to(".listed-line-1", { width: "24px", opacity: 1, marginRight: "16px", duration: 0.03 }, 1.32)
          .set(".listed-details-1, .listed-img-wrapper-1", { display: "flex" }, 1.34)
          .to(".listed-img-wrapper-1", { opacity: 1, duration: 0.04 }, 1.34)
          .fromTo(".listed-img-1", { scale: 1.03 }, { scale: 1.00, duration: 0.06, ease: "power2.out" }, 1.34)
          .fromTo(".listed-details-1", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 1.35);

        // --- PROJECT 2 to 3 Crossfade (1.48 to 1.54) ---
        tl.to(".listed-item-1", { opacity: 0.25, duration: 0.03 }, 1.48)
          .to(".listed-line-1", { width: "0px", opacity: 0, marginRight: "0px", duration: 0.03 }, 1.48)
          .to(".listed-details-1", { opacity: 0, y: -20, duration: 0.03 }, 1.48)
          .to(".listed-img-wrapper-1", { opacity: 0, duration: 0.04 }, 1.48)
          .set(".listed-details-1, .listed-img-wrapper-1", { display: "none" }, 1.52)
          
          .to(".listed-item-2", { opacity: 1, duration: 0.03 }, 1.50)
          .to(".listed-line-2", { width: "24px", opacity: 1, marginRight: "16px", duration: 0.03 }, 1.50)
          .set(".listed-details-2, .listed-img-wrapper-2", { display: "flex" }, 1.52)
          .to(".listed-img-wrapper-2", { opacity: 1, duration: 0.04 }, 1.52)
          .fromTo(".listed-img-2", { scale: 1.03 }, { scale: 1.00, duration: 0.06, ease: "power2.out" }, 1.52)
          .fromTo(".listed-details-2", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 1.53);

        // --- PROJECT 3 to 4 Crossfade (1.66 to 1.72) ---
        tl.to(".listed-item-2", { opacity: 0.25, duration: 0.03 }, 1.66)
          .to(".listed-line-2", { width: "0px", opacity: 0, marginRight: "0px", duration: 0.03 }, 1.66)
          .to(".listed-details-2", { opacity: 0, y: -20, duration: 0.03 }, 1.66)
          .to(".listed-img-wrapper-2", { opacity: 0, duration: 0.04 }, 1.66)
          .set(".listed-details-2, .listed-img-wrapper-2", { display: "none" }, 1.70)
          
          .to(".listed-item-3", { opacity: 1, duration: 0.03 }, 1.68)
          .to(".listed-line-3", { width: "24px", opacity: 1, marginRight: "16px", duration: 0.03 }, 1.68)
          .set(".listed-details-3, .listed-img-wrapper-3", { display: "flex" }, 1.70)
          .to(".listed-img-wrapper-3", { opacity: 1, duration: 0.04 }, 1.70)
          .fromTo(".listed-img-3", { scale: 1.03 }, { scale: 1.00, duration: 0.06, ease: "power2.out" }, 1.70)
          .fromTo(".listed-details-3", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 1.71);

        // --- PROJECT 4 to 5 Crossfade (1.84 to 1.90) ---
        tl.to(".listed-item-3", { opacity: 0.25, duration: 0.03 }, 1.84)
          .to(".listed-line-3", { width: "0px", opacity: 0, marginRight: "0px", duration: 0.03 }, 1.84)
          .to(".listed-details-3", { opacity: 0, y: -20, duration: 0.03 }, 1.84)
          .to(".listed-img-wrapper-3", { opacity: 0, duration: 0.04 }, 1.84)
          .set(".listed-details-3, .listed-img-wrapper-3", { display: "none" }, 1.88)
          
          .to(".listed-item-4", { opacity: 1, duration: 0.03 }, 1.86)
          .to(".listed-line-4", { width: "24px", opacity: 1, marginRight: "16px", duration: 0.03 }, 1.86)
          .set(".listed-details-4, .listed-img-wrapper-4", { display: "flex" }, 1.88)
          .to(".listed-img-wrapper-4", { opacity: 1, duration: 0.04 }, 1.88)
          .fromTo(".listed-img-4", { scale: 1.03 }, { scale: 1.00, duration: 0.06, ease: "power2.out" }, 1.88)
          .fromTo(".listed-details-4", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 1.89);

        // --- OUTRO (2.05 to 2.10) ---
        tl.to(".listed-section-el", { opacity: 0, duration: 0.05, ease: "power2.inOut" }, 2.05);

      }, containerRef);

      return () => ctx.revert();
    };

    initGsap();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#FAF7F2]">
      
      {/* Pinned viewport containing both sections */}
      <div className="fixed inset-0 w-full h-screen bg-[#FAF7F2] overflow-hidden pointer-events-none select-none z-10">
        
        {/* Navbar Header (clickable) */}
        <div className="pointer-events-auto relative z-50">
          <Header />
        </div>

        {/* Section 1: Hero Container */}
        <main className="absolute inset-0 w-full h-screen overflow-hidden pointer-events-auto z-10">
          <BackgroundSplit />
          <BackgroundTypography />
          <ModelImages />
          <ForegroundTypography />

          {/* CTA Link */}
          <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center">
            <a
              href="#collection"
              className="font-anton text-xs md:text-sm uppercase tracking-[0.2em] text-black hover:opacity-75 transition-opacity"
            >
              [ SEE COLLECTION ]
            </a>
          </div>
        </main>

        {/* Section 2: Lookbook Cinematic Storytelling Panel */}
        <StatsSection />

        {/* Section 3: Photography Listed Exhibition Panel */}
        <ListedSection />

      </div>

      {/* Scrollable Spacer Track to scroll through the GSAP timeline */}
      <div className="h-[2100vh] w-full" />
    </div>
  );
}
