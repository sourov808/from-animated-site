"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import BackgroundSplit from "@/components/BackgroundSplit";
import BackgroundTypography from "@/components/BackgroundTypography";
import ModelImages from "@/components/ModelImages";
import ForegroundTypography from "@/components/ForegroundTypography";
import TextSection from "@/components/TextSection";
import VideoSection from "@/components/VideoSection";
import EditorialBreakSection from "@/components/EditorialBreakSection";

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

        // ════════════════════════════════════════════════════════════════
        // SECTION ORDER:  HERO → VIDEO → BREAK → GALLERY → TEXT (John K)
        // Each section keeps its own internal animations; only the
        // sequencing and hand-offs are choreographed here.
        // ════════════════════════════════════════════════════════════════

        // ── INIT: all later sections hidden at scroll start ─────────────
        tl.set(".video-section-el", { display: "none", opacity: 1, yPercent: 100, x: 0 }, 0.30)
          .set(".video-card-0, .video-card-1", { opacity: 0, clipPath: "circle(15vw at 50% 50%)", xPercent: 0 }, 0.30)
          .set(".video-card-2", { opacity: 1, xPercent: 100 }, 0.30)
          .set(".camera-overlay-frame", { opacity: 1 }, 0.30)
          .set(".video-text-left-0, .video-text-right-0, .video-text-left-1, .video-text-right-1, .video-text-left-2, .video-text-right-2", { opacity: 0 }, 0.30)
          .set(".editorial-break-el", { display: "none", opacity: 0, yPercent: 100 }, 0.30)
          .set(".bk-s1, .bk-s2, .bk-s3, .bk-s4, .bk-s5, .bk-s6, .bk-s-center", { scale: 0 }, 0.30)
          .set(".gallery-section-el", { display: "none", opacity: 0 }, 0.30)
          .set(".gallery-supported-card.corner-tl", { x: -60, y: -40, opacity: 0 }, 0.30)
          .set(".gallery-supported-card.corner-bl", { x: -60, y: 40, opacity: 0 }, 0.30)
          .set(".gallery-supported-card.corner-tr", { x: 60, y: -40, opacity: 0 }, 0.30)
          .set(".gallery-supported-card.corner-br", { x: 60, y: 40, opacity: 0 }, 0.30)
          .set(".stack-card-0, .stack-card-1, .stack-card-2, .stack-card-3, .stack-card-4", { opacity: 0 }, 0.30)
          .set(".text-section-el", { display: "none", opacity: 0 }, 0.30)
          .set(".intro-unfold-bar", { scaleY: 0 }, 0.30)
          .set(".intro-axis-h, .intro-axis-v", { scale: 0 }, 0.30)
          .set(".intro-circular-ring", { scale: 0 }, 0.30)
          .set(".intro-portrait-container", { clipPath: "circle(0% at 50% 50%)" }, 0.30)
          .set(".intro-portrait-img", { scale: 1.5 }, 0.30)
          .set(".intro-block-tl", { x: "35vw", y: "25vh", opacity: 0 }, 0.30)
          .set(".intro-block-tr", { x: "-35vw", y: "25vh", opacity: 0 }, 0.30)
          .set(".intro-block-bl", { x: "35vw", y: "-25vh", opacity: 0 }, 0.30)
          .set(".intro-block-br", { x: "-35vw", y: "-25vh", opacity: 0 }, 0.30)
          .set(".intro-title-el", { yPercent: 100, skewY: 10 }, 0.30)
          .set(".header-logo", { opacity: 0 }, 0.30)
          
          // Initial state of old HeroSection
          .set(".hero-image-set-1", { opacity: 1 }, 0)
          .set(".hero-image-set-2", { opacity: 0 }, 0)
          .set(".hero-model-container", { scale: 1, opacity: 1 }, 0)
          .set(".hero-bg-text-1, .hero-bg-subtext-1", { opacity: 1 }, 0)
          .set(".hero-bg-text-2, .hero-bg-subtext-2", { opacity: 0 }, 0)
          .set(".hero-text-bg", { scale: 1, opacity: 1 }, 0)
          .set(".hero-fg-text-1, .hero-fg-subtext-1", { opacity: 1 }, 0)
          .set(".hero-fg-text-2, .hero-fg-subtext-2", { opacity: 0 }, 0)
          .set(".hero-text-fg", { scale: 1, opacity: 1 }, 0)
          .set(".hero-right-bg, .hero-divider, .hero-cta", { opacity: 1 }, 0)
          .set(".hero-section-el", { display: "block", opacity: 1 }, 0);

        // ── PHASE 0: HERO (0 → 0.44) ────────────────────────────────────
        // 1. Initial State to Scrolled Hero State (Scroll: 0% to 15%)
        tl.to(".hero-image-set-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-image-set-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-1, .hero-bg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-2, .hero-bg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-1, .hero-fg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-2, .hero-fg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0);

        // 2. Zoom-in of Hero Models & Typography (Scroll: 22% to 42%)
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

        // Outro: Fade out Hero
        tl.to(".hero-section-el", { opacity: 0, duration: 0.10, ease: "power2.inOut" }, 0.34)
          .set(".hero-section-el", { display: "none" }, 0.44)
          .to(".header-logo", { opacity: 1, duration: 0.12, ease: "power2.inOut" }, 0.34);

        // ── PHASE 1: VIDEO INTERMISSION (0.34 → 2.28) ───────────────────
        // Video slides up over Hero, Hero fades out underneath
        tl.set(".video-section-el", { display: "flex", pointerEvents: "auto" }, 0.42)
          .fromTo(".video-section-el", { yPercent: 100 }, { yPercent: 0, duration: 0.14, ease: "power2.out" }, 0.42)
          .to(".nav-el", { color: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 0.42)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 0.42)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 0.42)
          .to(".header-logo", { opacity: 0, duration: 0.12, ease: "power2.inOut" }, 0.42);

        // Video 0 — reveal → morph → split texts
        tl.to(".video-card-0", { opacity: 1, duration: 0.10, ease: "power2.out" }, 0.58)
          .to(".camera-overlay-frame", { opacity: 1, duration: 0.12, ease: "power2.out" }, 0.58)
          .to(".video-card-0", { clipPath: "circle(120vw at 50% 50%)", duration: 0.30, ease: "power2.inOut" }, 0.72)
          .to(".camera-overlay-frame", { opacity: 0, duration: 0.18, ease: "power1.in" }, 0.72)
          .fromTo(".video-text-left-0", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.02)
          .fromTo(".video-text-right-0", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.02)
          .to(".video-text-left-0", { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" }, 1.20)
          .to(".video-text-right-0", { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" }, 1.20);

        // Video 1 — reveal → morph → split texts
        tl.set(".video-card-1", { display: "flex" }, 1.34)
          .to(".video-card-1", { opacity: 1, duration: 0.10, ease: "power2.out" }, 1.34)
          .to(".camera-overlay-frame", { opacity: 0.6, duration: 0.10 }, 1.34)
          .to(".video-card-1", { clipPath: "circle(120vw at 50% 50%)", duration: 0.30, ease: "power2.inOut" }, 1.46)
          .to(".camera-overlay-frame", { opacity: 0, duration: 0.18, ease: "power1.in" }, 1.46)
          .set(".video-card-0", { display: "none" }, 1.76)
          .fromTo(".video-text-left-1", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.50)
          .fromTo(".video-text-right-1", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.50)
          .to(".video-text-left-1", { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" }, 1.68)
          .to(".video-text-right-1", { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" }, 1.68);

        // Video 2 — slide reveal (pushes Video 1 off) → split texts
        tl.set(".video-card-2", { display: "flex" }, 1.80)
          .to(".video-card-2", { xPercent: 0, duration: 0.30, ease: "power3.inOut" }, 1.80)
          .to(".video-card-1", { xPercent: -100, duration: 0.30, ease: "power3.inOut" }, 1.80)
          .set(".video-card-1", { display: "none" }, 2.10)
          .fromTo(".video-text-left-2", { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.96)
          .fromTo(".video-text-right-2", { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" }, 1.96)
          .to(".video-text-left-2", { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" }, 2.14)
          .to(".video-text-right-2", { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" }, 2.14);

        // Outro: Video shrinks / fades out
        tl.to(".video-section-el", { scale: 0.92, opacity: 0, duration: 0.18, ease: "power2.inOut" }, 2.10)
          .set(".video-section-el", { display: "none" }, 2.28);

        // ════════════════════════════════════════════════════════════════
        // PHASE 2: EDITORIAL BREAK (2.30 → 3.98) — dark, white nav, logo on
        // ════════════════════════════════════════════════════════════════

        // Break slides up over Video
        tl.set(".editorial-break-el", { display: "flex", pointerEvents: "auto" }, 2.30)
          .fromTo(".editorial-break-el", { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 0.16, ease: "power3.out" }, 2.30)
          .to(".nav-el", { color: "#0A0A0A", duration: 0.12, ease: "power2.inOut" }, 2.30)
          .to(".nav-underline", { backgroundColor: "#0A0A0A", duration: 0.12, ease: "power2.inOut" }, 2.30)
          .to(".mobile-burger-line", { backgroundColor: "#0A0A0A", duration: 0.12, ease: "power2.inOut" }, 2.30)
          .to(".header-logo", { opacity: 1, duration: 0.12, ease: "power2.inOut" }, 2.30);

        // SVG Text Path offset scroll-scrub animations (from 2.30 to 3.82)
        tl.to("#break-path-1", { attr: { startOffset: "40%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-2", { attr: { startOffset: "10%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-3", { attr: { startOffset: "40%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-4", { attr: { startOffset: "70%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-5", { attr: { startOffset: "50%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-6", { attr: { startOffset: "0%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-7", { attr: { startOffset: "60%" }, duration: 1.52, ease: "none" }, 2.30)
          .to("#break-path-8", { attr: { startOffset: "40%" }, duration: 1.52, ease: "none" }, 2.30);

        // Pop stickers sequentially (from 2.30 to 2.60)
        tl.fromTo(".bk-s1", { scale: 0, rotate: -90 }, { scale: 1, rotate: -25, duration: 0.14, ease: "back.out(1.7)" }, 2.34)
          .fromTo(".bk-s2", { scale: 0, rotate: 90 }, { scale: 1, rotate: 20, duration: 0.14, ease: "back.out(1.7)" }, 2.38)
          .fromTo(".bk-s3", { scale: 0, rotate: -90 }, { scale: 1, rotate: -15, duration: 0.14, ease: "back.out(1.7)" }, 2.42)
          .fromTo(".bk-s4", { scale: 0, rotate: 90 }, { scale: 1, rotate: 15, duration: 0.14, ease: "back.out(1.7)" }, 2.46)
          .fromTo(".bk-s5", { scale: 0, rotate: -90 }, { scale: 1, rotate: -10, duration: 0.14, ease: "back.out(1.7)" }, 2.50)
          .fromTo(".bk-s6", { scale: 0, rotate: 90 }, { scale: 1, rotate: 22, duration: 0.14, ease: "back.out(1.7)" }, 2.54)
          .fromTo(".bk-s-center", { scale: 0, rotate: -180 }, { scale: 1, rotate: 0, duration: 0.18, ease: "back.out(1.5)" }, 2.58);

        // Drift stickers (from 2.60 to 3.82)
        tl.to(".bk-s1", { x: -30, y: -20, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s2", { x: 30, y: -30, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s3", { x: -40, y: 10, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s4", { x: 40, y: -10, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s5", { x: -20, y: 30, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s6", { x: 30, y: 20, duration: 1.22, ease: "none" }, 2.60)
          .to(".bk-s-center", { scale: 1.05, rotate: 15, duration: 1.22, ease: "none" }, 2.60);

        // Fade/Transition out Editorial Break
        tl.to(".editorial-break-el", { opacity: 0, duration: 0.16, ease: "power2.inOut" }, 3.82)
          .set(".editorial-break-el", { display: "none" }, 3.98);

        // ════════════════════════════════════════════════════════════════
        // PHASE 3: GALLERY (4.00 → 5.05) — dark red bg, white nav
        // ════════════════════════════════════════════════════════════════

        // Gallery slides up and overlay fades in
        tl.set(".gallery-section-el", { display: "block" }, 3.96)
          .to(".gallery-section-el", { opacity: 1, duration: 0.20, ease: "power2.out" }, 4.00)
          .to(".pinned-viewport", { backgroundColor: "#0F0202", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".nav-el", { color: "#FFFFFF", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".header-logo", { opacity: 1, color: "#FFFFFF", duration: 0.14, ease: "power2.inOut" }, 4.00);

        // Gallery supported cards fan out from center
        tl.to(".gallery-supported-card.corner-tl", { opacity: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out", stagger: 0.04 }, 4.10)
          .to(".gallery-supported-card.corner-bl", { opacity: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out", stagger: 0.04 }, 4.14)
          .to(".gallery-supported-card.corner-tr", { opacity: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out", stagger: 0.04 }, 4.18)
          .to(".gallery-supported-card.corner-br", { opacity: 1, x: 0, y: 0, duration: 0.18, ease: "power2.out", stagger: 0.04 }, 4.22);

        // Stack cards reveal one by one
        tl.to(".stack-card-0", { opacity: 1, duration: 0.12, ease: "power2.out" }, 4.28)
          .to(".stack-card-1", { opacity: 1, duration: 0.12, ease: "power2.out" }, 4.36)
          .to(".stack-card-2", { opacity: 1, duration: 0.12, ease: "power2.out" }, 4.44)
          .to(".stack-card-3", { opacity: 1, duration: 0.12, ease: "power2.out" }, 4.52)
          .to(".stack-card-4", { opacity: 1, duration: 0.12, ease: "power2.out" }, 4.60);

        // Gallery cards fly out at 90% (scroll ~4.95)
        tl.to(".gallery-supported-card.corner-tl", { opacity: 0, x: -120, y: -80, duration: 0.14, ease: "power2.in", stagger: 0.02 }, 4.90)
          .to(".gallery-supported-card.corner-bl", { opacity: 0, x: -120, y: 80, duration: 0.14, ease: "power2.in", stagger: 0.02 }, 4.90)
          .to(".gallery-supported-card.corner-tr", { opacity: 0, x: 120, y: -80, duration: 0.14, ease: "power2.in", stagger: 0.02 }, 4.90)
          .to(".gallery-supported-card.corner-br", { opacity: 0, x: 120, y: 80, duration: 0.14, ease: "power2.in", stagger: 0.02 }, 4.90)
          .to(".stack-card-0, .stack-card-1, .stack-card-2, .stack-card-3, .stack-card-4", { opacity: 0, y: -60, duration: 0.14, ease: "power2.in" }, 4.92);

        // ════════════════════════════════════════════════════════════════
        // PHASE 4: TEXT / PHOTOGRAPHER INTRO (5.05 → 6.00) — dark, white nav
        // ════════════════════════════════════════════════════════════════

        // Accordion columns grow from bottom (starting exactly as gallery cards are flying out)
        tl.to(".intro-unfold-bar", { scaleY: 1, duration: 0.18, ease: "power3.inOut", stagger: 0.04 }, 4.92);

        // Hand-off at 5.05
        tl.set(".gallery-section-el", { display: "none" }, 5.05)
          .set(".text-section-el", { display: "flex", opacity: 1 }, 5.05)
          .to(".pinned-viewport", { backgroundColor: "#874F41", duration: 0.15 }, 5.05);

        // Accordion columns fold back down to the bottom
        tl.to(".intro-unfold-bar", { scaleY: 0, duration: 0.18, ease: "power3.inOut", stagger: 0.03 }, 5.12);

        // Guidelines & circular ring reveal
        tl.to(".intro-axis-h, .intro-axis-v", { scale: 1, duration: 0.15, ease: "power2.out" }, 5.15)
          .to(".intro-circular-ring", { scale: 1, duration: 0.20, ease: "back.out(1.5)" }, 5.15);

        // Central circular portrait clipPath expands & image parallax zoom down
        tl.to(".intro-portrait-container", { clipPath: "circle(50% at 50% 50%)", duration: 0.30, ease: "power3.inOut" }, 5.20)
          .to(".intro-portrait-img", { scale: 1.0, duration: 0.30, ease: "power2.out" }, 5.20);

        // Snake-style reveal: 4 quadrant blocks slide out from behind portrait to their corners
        tl.to(".intro-block-tl, .intro-block-tr, .intro-block-bl, .intro-block-br", { x: 0, y: 0, opacity: 1, duration: 0.30, ease: "power3.out" }, 5.25);

        // Child lines slither/skew into position
        tl.to(".intro-title-el", { yPercent: 0, skewY: 0, duration: 0.25, ease: "power3.out", stagger: 0.02 }, 5.35);

        // Slow parallax drift during scroll progression
        tl.to(".intro-block-tl", { x: "-15px", y: "-15px", duration: 0.60, ease: "none" }, 5.40)
          .to(".intro-block-tr", { x: "15px", y: "-15px", duration: 0.60, ease: "none" }, 5.40)
          .to(".intro-block-bl", { x: "-15px", y: "15px", duration: 0.60, ease: "none" }, 5.40)
          .to(".intro-block-br", { x: "15px", y: "15px", duration: 0.60, ease: "none" }, 5.40)
          .to(".intro-portrait-img", { scale: 1.15, duration: 0.60, ease: "none" }, 5.40);

        // OUTRO — fade text section out
        tl.to(".text-section-el", { opacity: 0, duration: 0.16, ease: "power2.inOut" }, 6.00);

      }, containerRef);

      return () => ctx.revert();
    };

    initGsap();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-[#FAF7F2]">

      {/* Pinned viewport containing both sections */}
      <div className="pinned-viewport fixed inset-0 w-full h-screen bg-[#FAF7F2] overflow-hidden pointer-events-none select-none z-10">

        {/* Navbar Header (clickable) */}
        <div className="pointer-events-auto relative z-50">
          <Header />
        </div>

        {/* Section 1: Hero Container */}
        <main
          className="hero-section-el absolute inset-0 w-full h-screen overflow-hidden pointer-events-auto z-10"
          style={{ willChange: "opacity" }}
        >
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

        {/* Section 2: Cinematic Video Intermission */}
        <VideoSection />

        {/* Section 3: Editorial Break */}
        <EditorialBreakSection />

        {/* Section 4: Gallery */}
        <Gallery />

        {/* Section 5: Photographer Intro — TextSection */}
        <TextSection />

      </div>

      {/* Scrollable Spacer Track — 8800vh covers full timeline */}
      <div className="h-[8800vh] w-full" />
    </div>
  );
}
