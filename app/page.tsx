"use client";

import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import BackgroundSplit from "@/components/BackgroundSplit";
import BackgroundTypography from "@/components/BackgroundTypography";
import ModelImages from "@/components/ModelImages";
import ForegroundTypography from "@/components/ForegroundTypography";
import StatsSection from "@/components/StatsSection";
import TextSection from "@/components/TextSection";
import VideoSection from "@/components/VideoSection";
import ListedSection from "@/components/ListedSection";
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
        // SECTION ORDER:  HERO → VIDEO → BREAK → STATS → TEXT → LISTED
        // Each section keeps its own internal animations; only the
        // sequencing and hand-offs are choreographed here.
        // ════════════════════════════════════════════════════════════════

        // ── PHASE 0: HERO (0 → 0.44) ────────────────────────────────────
        // Initial State to Scrolled Hero State (image / typography swap)
        tl.to(".hero-image-set-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-image-set-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-1, .hero-bg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-bg-text-2, .hero-bg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-1, .hero-fg-subtext-1", { opacity: 0, duration: 0.15, ease: "power1.inOut" }, 0)
          .to(".hero-fg-text-2, .hero-fg-subtext-2", { opacity: 1, duration: 0.15, ease: "power1.inOut" }, 0);

        // Zoom-in of Hero Models & Typography (Scroll: 22% to 42%)
        tl.to(".hero-model-container", { scale: 10.0, opacity: 0, duration: 0.20, ease: "power2.inOut" }, 0.22)
          .to(".hero-text-bg", { scale: 1.3, opacity: 0, duration: 0.20, ease: "power2.inOut" }, 0.22)
          .to(".hero-text-fg", { scale: 1.3, opacity: 0, duration: 0.20, ease: "power2.inOut" }, 0.22)
          .to(".hero-right-bg, .hero-divider, .hero-cta", { opacity: 0, duration: 0.20, ease: "power2.inOut" }, 0.22);

        // ── INIT: all later sections hidden at scroll start ─────────────
        tl.set(".video-section-el", { display: "none", opacity: 1, yPercent: 100, x: 0 }, 0.30)
          .set(".video-card-0, .video-card-1", { opacity: 0, clipPath: "circle(15vw at 50% 50%)", xPercent: 0 }, 0.30)
          .set(".video-card-2", { opacity: 1, xPercent: 100 }, 0.30)
          .set(".camera-overlay-frame", { opacity: 1 }, 0.30)
          .set(".video-text-left-0, .video-text-right-0, .video-text-left-1, .video-text-right-1, .video-text-left-2, .video-text-right-2", { opacity: 0 }, 0.30)
          .set(".editorial-break-el", { display: "none", opacity: 0, yPercent: 100 }, 0.30)
          .set(".stats-section-el", { display: "none", opacity: 0, yPercent: 100, backgroundColor: "#F8F6F2" }, 0.30)
          .set(".text-section-el", { display: "none", opacity: 1, yPercent: 100 }, 0.30)
          .set(".text-row-1, .text-row-2, .text-row-3", { yPercent: 105 }, 0.30)
          .set(".text-section-tag, .text-section-desc", { opacity: 0, y: 30 }, 0.30)
          .set(".sticker-polaroid, .sticker-film-strip, .sticker-stamp", { opacity: 0 }, 0.30)
          .set(".listed-section-el", { display: "none", opacity: 1, yPercent: 100 }, 0.30);

        for (let i = 0; i < 5; i++) {
          tl.set(`.story-block-${i}`, { display: "none", opacity: 0 }, 0.30);
          tl.set(`.look-img-wrapper-${i}`, { display: "none", opacity: 0 }, 0.30);
        }

        // ════════════════════════════════════════════════════════════════
        // PHASE 1: VIDEO (0.34 → 2.28) — dark section, white nav, logo off
        // ════════════════════════════════════════════════════════════════

        // Hero → Video hand-off
        tl.to(".hero-section-el", { opacity: 0, duration: 0.10, ease: "power2.inOut" }, 0.34)
          .set(".hero-section-el", { display: "none" }, 0.44)
          .set(".video-section-el", { display: "flex", pointerEvents: "auto" }, 0.42)
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

        // ════════════════════════════════════════════════════════════════
        // PHASE 2: EDITORIAL BREAK (2.30 → 3.98) — dark, white nav, logo on
        // ════════════════════════════════════════════════════════════════

        // Break slides up over Video, Video fades out underneath
        tl.set(".editorial-break-el", { display: "flex", pointerEvents: "auto" }, 2.30)
          .fromTo(".editorial-break-el", { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 0.16, ease: "power3.out" }, 2.30)
          .to(".video-section-el", { opacity: 0, duration: 0.14, ease: "power2.inOut" }, 2.40)
          .set(".video-section-el", { display: "none" }, 2.54)
          .to(".header-logo", { opacity: 1, duration: 0.12, ease: "power2.inOut" }, 2.30);

        // WORD 1: LIGHT
        tl.fromTo(".bk-w1", { opacity: 0, y: 90 }, { opacity: 1, y: 0, duration: 0.12, ease: "power3.out" }, 2.50)
          .fromTo(".bk-w1-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.10, ease: "power2.out" }, 2.54)
          .fromTo(".bk-w1-desc", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.10, ease: "power2.out" }, 2.57)
          .to(".bk-w1", { opacity: 0, y: -70, duration: 0.10, ease: "power2.in" }, 2.66)

          // WORD 2: PRESENCE
          .fromTo(".bk-w2", { opacity: 0, x: -140 }, { opacity: 1, x: 0, duration: 0.12, ease: "power3.out" }, 2.76)
          .fromTo(".bk-w2-desc", { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.10, ease: "power2.out" }, 2.81)
          .to(".bk-w2", { opacity: 0, x: 110, duration: 0.10, ease: "power2.in" }, 2.90)

          // WORD 3: MOVEMENT
          .fromTo(".bk-w3", { opacity: 0, x: 140 }, { opacity: 1, x: 0, duration: 0.12, ease: "power3.out" }, 3.00)
          .fromTo(".bk-w3-desc", { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.10, ease: "power2.out" }, 3.05)
          .to(".bk-w3", { opacity: 0, x: -110, duration: 0.10, ease: "power2.in" }, 3.14)

          // WORD 4: DETAIL
          .fromTo(".bk-w4", { opacity: 0, scale: 0.86 }, { opacity: 1, scale: 1, duration: 0.11, ease: "power2.out" }, 3.24)
          .fromTo(".bk-w4-line", { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.10, ease: "power2.out" }, 3.28)
          .fromTo(".bk-w4-desc", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.09, ease: "power2.out" }, 3.30)
          .to(".bk-w4", { opacity: 0, scale: 0.95, duration: 0.09, ease: "power2.in" }, 3.38)

          // WORD 5: MEMORY
          .fromTo(".bk-w5", { opacity: 0, y: 70 }, { opacity: 1, y: 0, duration: 0.10, ease: "power3.out" }, 3.46)
          .fromTo(".bk-w5-desc", { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.09, ease: "power2.out" }, 3.50)
          .to(".bk-w5", { opacity: 0, y: -55, duration: 0.09, ease: "power2.in" }, 3.58)

          // BRAND MOMENT: FROM
          .fromTo(".bk-brand", { opacity: 0, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.10, ease: "power2.out" }, 3.64)
          .fromTo(".bk-brand-rule-l, .bk-brand-rule-r", { width: "0px" }, { width: "160px", duration: 0.14, ease: "power3.out" }, 3.67)
          .to(".bk-brand", { opacity: 0, scale: 1.07, duration: 0.10, ease: "power2.in" }, 3.78)

          // FINALE TAGLINE
          .fromTo(".bk-tagline", { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.09, ease: "power2.out" }, 3.84)
          .to(".bk-tagline", { opacity: 0, duration: 0.08, ease: "power1.in" }, 3.94);

        // ════════════════════════════════════════════════════════════════
        // PHASE 3: STATS / LOOKBOOK (4.00 → 5.05) — light, dark nav
        // "The Invisible Echo" — 5 looks with background-colour journey
        // ════════════════════════════════════════════════════════════════

        // Stats slides up over Break; nav → dark (light stone bg)
        tl.set(".stats-section-el", { display: "flex", pointerEvents: "auto" }, 4.00)
          .fromTo(".stats-section-el", { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 0.16, ease: "power2.out" }, 4.00)
          .set(".editorial-break-el", { display: "none", opacity: 0 }, 4.18)
          .to(".nav-el", { color: "#0A0A0A", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".nav-underline", { backgroundColor: "#0A0A0A", duration: 0.14, ease: "power2.inOut" }, 4.00)
          .to(".mobile-burger-line", { backgroundColor: "#0A0A0A", duration: 0.14, ease: "power2.inOut" }, 4.00);

        // LOOK 1
        tl.set(".story-block-0", { display: "flex" }, 4.18)
          .set(".look-img-wrapper-0", { display: "flex" }, 4.18)
          .to(".story-block-0, .look-img-wrapper-0", { opacity: 1, duration: 0.05, ease: "power2.out" }, 4.20)
          .fromTo(".look-img-0", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 4.20)
          .fromTo(".look-support-img-0", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 4.20)
          .fromTo(".story-micro-0", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 4.20)
          .fromTo(".story-headline-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.21)
          .fromTo(".story-paragraph-0", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 4.22)
          .fromTo(".story-explore-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.23)
          .fromTo(".story-quote-wrapper-0", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.24);

        // LOOK 1 → 2  (bg → Soft Stone)
        tl.to(".story-block-0, .look-img-wrapper-0", { opacity: 0, duration: 0.04, ease: "power2.in" }, 4.33)
          .set(".story-block-0, .look-img-wrapper-0", { display: "none" }, 4.36)
          .to(".stats-section-el", { backgroundColor: "#E8E2D8", duration: 0.04, ease: "power2.inOut" }, 4.33);

        // LOOK 2
        tl.set(".story-block-1", { display: "flex" }, 4.36)
          .set(".look-img-wrapper-1", { display: "flex" }, 4.36)
          .to(".story-block-1, .look-img-wrapper-1", { opacity: 1, duration: 0.05, ease: "power2.out" }, 4.37)
          .fromTo(".look-img-1", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 4.37)
          .fromTo(".look-support-img-1", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 4.37)
          .fromTo(".story-micro-1", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 4.37)
          .fromTo(".story-headline-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.38)
          .fromTo(".story-paragraph-1", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 4.39)
          .fromTo(".story-explore-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.40)
          .fromTo(".story-quote-wrapper-1", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.41);

        // LOOK 2 → 3  (bg → Charcoal, typography → white)
        tl.to(".story-block-1, .look-img-wrapper-1", { opacity: 0, duration: 0.04, ease: "power2.in" }, 4.47)
          .set(".story-block-1, .look-img-wrapper-1", { display: "none" }, 4.50)
          .to(".stats-section-el", { backgroundColor: "#1B1B1B", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to(".concept-title", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-micro-']", { color: "rgba(255,255,255,0.5)", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-headline-']", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-paragraph-']", { color: "rgba(255,255,255,0.8)", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-explore-']", { color: "#FFFFFF", borderColor: "rgba(255,255,255,0.4)", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-quote-']", { color: "rgba(255,255,255,0.5)", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to("[class*='story-quote-wrapper-']", { borderColor: "rgba(255,255,255,0.1)", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to(".nav-el", { color: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 4.47)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.04, ease: "power2.inOut" }, 4.47);

        // LOOK 3
        tl.set(".story-block-2", { display: "flex" }, 4.50)
          .set(".look-img-wrapper-2", { display: "flex" }, 4.50)
          .to(".story-block-2, .look-img-wrapper-2", { opacity: 1, duration: 0.05, ease: "power2.out" }, 4.51)
          .fromTo(".look-img-2", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 4.51)
          .fromTo(".look-support-img-2", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 4.51)
          .fromTo(".story-micro-2", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 4.51)
          .fromTo(".story-headline-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.52)
          .fromTo(".story-paragraph-2", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 4.53)
          .fromTo(".story-explore-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.54)
          .fromTo(".story-quote-wrapper-2", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.55);

        // LOOK 3 → 4  (bg → Dark Brown)
        tl.to(".story-block-2, .look-img-wrapper-2", { opacity: 0, duration: 0.04, ease: "power2.in" }, 4.61)
          .set(".story-block-2, .look-img-wrapper-2", { display: "none" }, 4.64)
          .to(".stats-section-el", { backgroundColor: "#3A2F28", duration: 0.04, ease: "power2.inOut" }, 4.61);

        // LOOK 4
        tl.set(".story-block-3", { display: "flex" }, 4.64)
          .set(".look-img-wrapper-3", { display: "flex" }, 4.64)
          .to(".story-block-3, .look-img-wrapper-3", { opacity: 1, duration: 0.05, ease: "power2.out" }, 4.65)
          .fromTo(".look-img-3", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, duration: 0.08, ease: "power1.out" }, 4.65)
          .fromTo(".look-support-img-3", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, duration: 0.08, ease: "power1.out" }, 4.65)
          .fromTo(".story-micro-3", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, duration: 0.04, ease: "power2.out" }, 4.65)
          .fromTo(".story-headline-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.66)
          .fromTo(".story-paragraph-3", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, duration: 0.04, ease: "power2.out" }, 4.67)
          .fromTo(".story-explore-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.68)
          .fromTo(".story-quote-wrapper-3", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.04, ease: "power2.out" }, 4.69);

        // LOOK 4 → 5  (bg → Light Cream, typography → dark)
        tl.to(".story-block-3, .look-img-wrapper-3", { opacity: 0, duration: 0.04, ease: "power2.in" }, 4.75)
          .set(".story-block-3, .look-img-wrapper-3", { display: "none" }, 4.78)
          .to(".stats-section-el", { backgroundColor: "#F5F3EE", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to(".concept-title", { color: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-micro-']", { color: "rgba(10,10,10,0.5)", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-headline-']", { color: "#0A0A0A", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-paragraph-']", { color: "rgba(10,10,10,0.8)", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-explore-']", { color: "#0A0A0A", borderColor: "rgba(10,10,10,0.4)", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-quote-']", { color: "rgba(10,10,10,0.5)", duration: 0.04, ease: "power2.inOut" }, 4.75)
          .to("[class*='story-quote-wrapper-']", { borderColor: "rgba(10,10,10,0.1)", duration: 0.04, ease: "power2.inOut" }, 4.75);

        // LOOK 5
        tl.set(".story-block-4", { display: "flex" }, 4.78)
          .set(".look-img-wrapper-4", { display: "flex" }, 4.78)
          .to(".story-block-4, .look-img-wrapper-4", { opacity: 1, ease: "power2.out" }, 4.79)
          .fromTo(".look-img-4", { scale: 1.05, y: -20 }, { scale: 1.00, y: 0, ease: "power1.out" }, 4.79)
          .fromTo(".look-support-img-4", { scale: 1.7, y: 20 }, { scale: 1.5, y: 0, ease: "power1.out" }, 4.79)
          .fromTo(".story-micro-4", { opacity: 0, y: 15 }, { opacity: 0.5, y: 0, ease: "power2.out" }, 4.79)
          .fromTo(".story-headline-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 4.80)
          .fromTo(".story-paragraph-4", { opacity: 0, y: 15 }, { opacity: 0.8, y: 0, ease: "power2.out" }, 4.81)
          .fromTo(".story-explore-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 4.82)
          .fromTo(".story-quote-wrapper-4", { opacity: 0, y: 15 }, { opacity: 1, y: 0, ease: "power2.out" }, 4.83);

        // ════════════════════════════════════════════════════════════════
        // PHASE 4: TEXT (5.05 → 5.90) — dark, white nav
        // ════════════════════════════════════════════════════════════════

        // Text slides up over Stats
        tl.set(".text-section-el", { display: "flex", pointerEvents: "auto" }, 5.05)
          .fromTo(".text-section-el", { yPercent: 100 }, { yPercent: 0, duration: 0.14, ease: "power2.out" }, 5.05)
          .to(".nav-el", { color: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 5.05)
          .to(".nav-underline", { backgroundColor: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 5.05)
          .to(".mobile-burger-line", { backgroundColor: "#FFFFFF", duration: 0.12, ease: "power2.inOut" }, 5.05)
          .set(".stats-section-el", { display: "none", opacity: 0, pointerEvents: "none" }, 5.22)
          .to(".sticker-polaroid, .sticker-film-strip, .sticker-stamp", { opacity: 1, duration: 0.12, ease: "power1.inOut" }, 5.22);

        // Kinetic text rows + sticker parallax
        tl.to(".text-row-1", { xPercent: 20, duration: 0.42, ease: "none" }, 5.16)
          .to(".text-row-2", { xPercent: -20, duration: 0.42, ease: "none" }, 5.16)
          .to(".text-row-3", { xPercent: -20, duration: 0.42, ease: "none" }, 5.16)
          .to(".text-row-1", { yPercent: 0, duration: 0.14, ease: "power2.out" }, 5.20)
          .to(".text-row-2", { yPercent: 0, duration: 0.14, ease: "power2.out" }, 5.26)
          .to(".text-row-3", { yPercent: 0, duration: 0.14, ease: "power2.out" }, 5.32)
          .to(".text-section-tag", { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" }, 5.20)
          .to(".text-section-desc", { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" }, 5.32)
          .fromTo(".sticker-polaroid", { y: 120, rotate: -15 }, { y: -90, rotate: 5, duration: 0.42, ease: "none" }, 5.16)
          .fromTo(".sticker-film-strip", { y: -80 }, { y: 80, duration: 0.42, ease: "none" }, 5.16)
          .fromTo(".sticker-stamp", { y: 140, rotate: -25 }, { y: -80, rotate: 35, duration: 0.42, ease: "none" }, 5.16);

        // ════════════════════════════════════════════════════════════════
        // PHASE 5: LISTED / EXHIBITION (6.00 → 7.71) — dark, white nav
        // ════════════════════════════════════════════════════════════════

        // Listed slides up over Text
        tl.set(".listed-section-el", { display: "flex", pointerEvents: "auto" }, 6.00)
          .fromTo(".listed-section-el", { yPercent: 100 }, { yPercent: 0, opacity: 1, duration: 0.16, ease: "power2.out" }, 6.00)
          .set(".text-section-el", { display: "none", opacity: 0, pointerEvents: "none" }, 6.18);

        // SLIDE 0 image slow scale
        tl.to(".listed-slide-img-0", { scale: 1.00, duration: 0.22, ease: "none" }, 6.45)
          .fromTo(".listed-slide-details-0", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.07, ease: "power2.out" }, 6.45);

        // PROJECT 1 → 2
        tl.to(".listed-item-0", { opacity: 0.35, duration: 0.04 }, 6.67)
          .to(".listed-line-0", { width: "0px", opacity: 0, duration: 0.04 }, 6.67)
          .to(".listed-slide-details-0", { opacity: 0, y: -30, duration: 0.04 }, 6.67)
          .set(".listed-slide-1", { display: "block" }, 6.67)
          .fromTo(".listed-slide-1", { yPercent: 100 }, { yPercent: 0, duration: 0.12, ease: "power2.inOut" }, 6.67)
          .fromTo(".listed-slide-img-1", { yPercent: -10 }, { yPercent: 0, duration: 0.12, ease: "none" }, 6.67)
          .fromTo(".listed-slide-img-1", { scale: 1.03 }, { scale: 1.01, duration: 0.12, ease: "power2.out" }, 6.67)
          .set(".listed-slide-details-1", { display: "flex" }, 6.73)
          .fromTo(".listed-slide-details-1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" }, 6.73)
          .set(".listed-slide-0", { display: "none" }, 6.89)
          .to(".listed-item-1", { opacity: 1, duration: 0.04 }, 6.70)
          .to(".listed-line-1", { width: "24px", opacity: 1, duration: 0.04 }, 6.70)
          .to(".listed-slide-img-1", { scale: 1.00, duration: 0.15, ease: "none" }, 6.79);

        // PROJECT 2 → 3
        tl.to(".listed-item-1", { opacity: 0.35, duration: 0.04 }, 6.89)
          .to(".listed-line-1", { width: "0px", opacity: 0, duration: 0.04 }, 6.89)
          .to(".listed-slide-details-1", { opacity: 0, y: -30, duration: 0.04 }, 6.89)
          .set(".listed-slide-2", { display: "block" }, 6.89)
          .fromTo(".listed-slide-2", { yPercent: 100 }, { yPercent: 0, duration: 0.12, ease: "power2.inOut" }, 6.89)
          .fromTo(".listed-slide-img-2", { yPercent: -10 }, { yPercent: 0, duration: 0.12, ease: "none" }, 6.89)
          .fromTo(".listed-slide-img-2", { scale: 1.03 }, { scale: 1.01, duration: 0.12, ease: "power2.out" }, 6.89)
          .set(".listed-slide-details-2", { display: "flex" }, 6.95)
          .fromTo(".listed-slide-details-2", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" }, 6.95)
          .set(".listed-slide-1", { display: "none" }, 7.11)
          .to(".listed-item-2", { opacity: 1, duration: 0.04 }, 6.92)
          .to(".listed-line-2", { width: "24px", opacity: 1, duration: 0.04 }, 6.92)
          .to(".listed-slide-img-2", { scale: 1.00, duration: 0.15, ease: "none" }, 7.01);

        // PROJECT 3 → 4
        tl.to(".listed-item-2", { opacity: 0.35, duration: 0.04 }, 7.11)
          .to(".listed-line-2", { width: "0px", opacity: 0, duration: 0.04 }, 7.11)
          .to(".listed-slide-details-2", { opacity: 0, y: -30, duration: 0.04 }, 7.11)
          .set(".listed-slide-3", { display: "block" }, 7.11)
          .fromTo(".listed-slide-3", { yPercent: 100 }, { yPercent: 0, duration: 0.12, ease: "power2.inOut" }, 7.11)
          .fromTo(".listed-slide-img-3", { yPercent: -10 }, { yPercent: 0, duration: 0.12, ease: "none" }, 7.11)
          .fromTo(".listed-slide-img-3", { scale: 1.03 }, { scale: 1.01, duration: 0.12, ease: "power2.out" }, 7.11)
          .set(".listed-slide-details-3", { display: "flex" }, 7.17)
          .fromTo(".listed-slide-details-3", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" }, 7.17)
          .set(".listed-slide-2", { display: "none" }, 7.33)
          .to(".listed-item-3", { opacity: 1, duration: 0.04 }, 7.14)
          .to(".listed-line-3", { width: "24px", opacity: 1, duration: 0.04 }, 7.14)
          .to(".listed-slide-img-3", { scale: 1.00, duration: 0.15, ease: "none" }, 7.23);

        // PROJECT 4 → 5
        tl.to(".listed-item-3", { opacity: 0.35, duration: 0.04 }, 7.33)
          .to(".listed-line-3", { width: "0px", opacity: 0, duration: 0.04 }, 7.33)
          .to(".listed-slide-details-3", { opacity: 0, y: -30, duration: 0.04 }, 7.33)
          .set(".listed-slide-4", { display: "block" }, 7.33)
          .fromTo(".listed-slide-4", { yPercent: 100 }, { yPercent: 0, duration: 0.12, ease: "power2.inOut" }, 7.33)
          .fromTo(".listed-slide-img-4", { yPercent: -10 }, { yPercent: 0, duration: 0.12, ease: "none" }, 7.33)
          .fromTo(".listed-slide-img-4", { scale: 1.03 }, { scale: 1.01, duration: 0.12, ease: "power2.out" }, 7.33)
          .set(".listed-slide-details-4", { display: "flex" }, 7.39)
          .fromTo(".listed-slide-details-4", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.06, ease: "power2.out" }, 7.39)
          .set(".listed-slide-3", { display: "none" }, 7.55)
          .to(".listed-item-4", { opacity: 1, duration: 0.04 }, 7.36)
          .to(".listed-line-4", { width: "24px", opacity: 1, duration: 0.04 }, 7.36)
          .to(".listed-slide-img-4", { scale: 1.00, duration: 0.18, ease: "none" }, 7.45);

        // OUTRO
        tl.to(".listed-section-el", { opacity: 0, duration: 0.16, ease: "power2.inOut" }, 7.55);

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

        {/* Section 4: Lookbook Cinematic Storytelling Panel */}
        <StatsSection />

        {/* Section 5: Editorial Text Intermission */}
        <TextSection />

        {/* Section 6: Photography Listed Exhibition Panel */}
        <ListedSection />

      </div>

      {/* Scrollable Spacer Track — 8800vh covers full timeline */}
      <div className="h-[8800vh] w-full" />
    </div>
  );
}
