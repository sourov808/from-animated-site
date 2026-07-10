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
    let ctx: any;
    let active = true;

    // Dynamic import to support Next.js SSR safely
    const initGsap = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Disable target warnings to avoid spamming console
      gsap.config({ nullTargetWarn: false });

      if (!active) return;

      ctx = gsap.context(() => {
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
        tl.set(
          ".video-section-el",
          { display: "none", opacity: 1, yPercent: 100, x: 0 },
          0.3,
        )
          .set(
            ".video-card-0, .video-card-1",
            { opacity: 0, clipPath: "circle(15vw at 50% 50%)", xPercent: 0 },
            0.3,
          )
          .set(".video-card-2", { opacity: 1, xPercent: 100 }, 0.3)
          .set(".camera-overlay-frame", { opacity: 1 }, 0.3)
          .set(
            ".video-text-left-0, .video-text-right-0, .video-text-left-1, .video-text-right-1, .video-text-left-2, .video-text-right-2",
            { opacity: 0 },
            0.3,
          )
          .set(
            ".editorial-break-el",
            {
              display: "none",
              opacity: 1,
              yPercent: 0,
            },
            0.3,
          )
          .set(
            ".eb-center-band",
            {
              clipPath: "inset(50% 0% 50% 0%)",
            },
            0.3,
          )
          .set(
            ".eb-top-band",
            {
              yPercent: -100,
            },
            0.3,
          )
          .set(
            ".eb-bottom-band",
            {
              yPercent: 100,
            },
            0.3,
          )
          .set(
            ".eb-fill-line-1, .eb-fill-line-2, .eb-fill-line-3, .eb-fill-line-4",
            { width: "0%" },
            0.3,
          )
          .set(
            ".eb-reveal-row span",
            { yPercent: 105 },
            0.3,
          )
          .set(".gallery-section-el", { display: "none", opacity: 0 }, 0.3)
          .set(".gallery-bg-container", { scale: 1.15, rotation: -2 }, 0.3)
          .set(
            ".gallery-supported-card.corner-tl",
            { x: -140, y: -100, scale: 0.8, rotation: -15, opacity: 0 },
            0.3,
          )
          .set(
            ".gallery-supported-card.corner-bl",
            { x: -140, y: 100, scale: 0.8, rotation: 15, opacity: 0 },
            0.3,
          )
          .set(
            ".gallery-supported-card.corner-tr",
            { x: 140, y: -100, scale: 0.8, rotation: 15, opacity: 0 },
            0.3,
          )
          .set(
            ".gallery-supported-card.corner-br",
            { x: 140, y: 100, scale: 0.8, rotation: -15, opacity: 0 },
            0.3,
          )
          .set(
            ".stack-card-0",
            { scale: 0.85, rotation: -12, x: -30, y: -20, opacity: 0 },
            0.3,
          )
          .set(
            ".stack-card-1",
            { scale: 0.85, rotation: 8, x: 25, y: -15, opacity: 0 },
            0.3,
          )
          .set(
            ".stack-card-2",
            { scale: 0.85, rotation: -6, x: -15, y: 10, opacity: 0 },
            0.3,
          )
          .set(
            ".stack-card-3",
            { scale: 0.85, rotation: 6, x: 20, y: 15, opacity: 0 },
            0.3,
          )
          .set(
            ".stack-card-4",
            { scale: 0.85, rotation: -2, x: 0, y: 0, opacity: 0 },
            0.3,
          )
          .set(".text-section-el", { display: "none", opacity: 0 }, 0.3)
          .set(".intro-unfold-bar", { scaleY: 0 }, 0.3)
          .set(".intro-axis-h, .intro-axis-v", { scale: 0 }, 0.3)
          .set(".intro-circular-ring", { scale: 0 }, 0.3)
          .set(
            ".intro-portrait-container",
            { clipPath: "circle(0% at 50% 50%)" },
            0.3,
          )
          .set(".intro-portrait-img", { scale: 1.5 }, 0.3)
          .set(".intro-block-tl", { x: "35vw", y: "25vh", opacity: 0 }, 0.3)
          .set(".intro-block-tr", { x: "-35vw", y: "25vh", opacity: 0 }, 0.3)
          .set(".intro-block-bl", { x: "35vw", y: "-25vh", opacity: 0 }, 0.3)
          .set(".intro-block-br", { x: "-35vw", y: "-25vh", opacity: 0 }, 0.3)
          .set(".intro-title-el", { yPercent: 100, skewY: 10 }, 0.3)
          .set(".header-logo", { opacity: 0 }, 0.3)

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
        tl.to(
          ".hero-image-set-1",
          { opacity: 0, duration: 0.15, ease: "power1.inOut" },
          0,
        )
          .to(
            ".hero-image-set-2",
            { opacity: 1, duration: 0.15, ease: "power1.inOut" },
            0,
          )
          .to(
            ".hero-bg-text-1, .hero-bg-subtext-1",
            { opacity: 0, duration: 0.15, ease: "power1.inOut" },
            0,
          )
          .to(
            ".hero-bg-text-2, .hero-bg-subtext-2",
            { opacity: 1, duration: 0.15, ease: "power1.inOut" },
            0,
          )
          .to(
            ".hero-fg-text-1, .hero-fg-subtext-1",
            { opacity: 0, duration: 0.15, ease: "power1.inOut" },
            0,
          )
          .to(
            ".hero-fg-text-2, .hero-fg-subtext-2",
            { opacity: 1, duration: 0.15, ease: "power1.inOut" },
            0,
          );

        // 2. Zoom-in of Hero Models & Typography (Scroll: 22% to 42%)
        tl.to(
          ".hero-model-container",
          {
            scale: 10.0,
            opacity: 0,
            duration: 0.2,
            ease: "power2.inOut",
          },
          0.22,
        )
          .to(
            ".hero-text-bg",
            {
              scale: 1.3,
              opacity: 0,
              duration: 0.2,
              ease: "power2.inOut",
            },
            0.22,
          )
          .to(
            ".hero-text-fg",
            {
              scale: 1.3,
              opacity: 0,
              duration: 0.2,
              ease: "power2.inOut",
            },
            0.22,
          )
          .to(
            ".hero-right-bg, .hero-divider, .hero-cta",
            {
              opacity: 0,
              duration: 0.2,
              ease: "power2.inOut",
            },
            0.22,
          );

        // Outro: Fade out Hero
        tl.to(
          ".hero-section-el",
          { opacity: 0, duration: 0.1, ease: "power2.inOut" },
          0.34,
        )
          .set(".hero-section-el", { display: "none" }, 0.44)
          .to(
            ".header-logo",
            { opacity: 1, duration: 0.12, ease: "power2.inOut" },
            0.34,
          );

        // ── PHASE 1: VIDEO INTERMISSION (0.34 → 2.28) ───────────────────
        // Video slides up over Hero, Hero fades out underneath
        tl.set(
          ".video-section-el",
          { display: "flex", pointerEvents: "auto" },
          0.42,
        )
          .fromTo(
            ".video-section-el",
            { yPercent: 100 },
            { yPercent: 0, duration: 0.14, ease: "power2.out" },
            0.42,
          )
          .to(
            ".nav-el",
            { color: "#FFFFFF", duration: 0.12, ease: "power2.inOut" },
            0.42,
          )
          .to(
            ".nav-underline",
            {
              backgroundColor: "#FFFFFF",
              duration: 0.12,
              ease: "power2.inOut",
            },
            0.42,
          )
          .to(
            ".mobile-burger-line",
            {
              backgroundColor: "#FFFFFF",
              duration: 0.12,
              ease: "power2.inOut",
            },
            0.42,
          )
          .to(
            ".header-logo",
            { opacity: 0, duration: 0.12, ease: "power2.inOut" },
            0.42,
          );

        // Video 0 — reveal → morph → split texts
        tl.to(
          ".video-card-0",
          { opacity: 1, duration: 0.1, ease: "power2.out" },
          0.58,
        )
          .to(
            ".camera-overlay-frame",
            { opacity: 1, duration: 0.12, ease: "power2.out" },
            0.58,
          )
          .to(
            ".video-card-0",
            {
              clipPath: "circle(120vw at 50% 50%)",
              duration: 0.3,
              ease: "power2.inOut",
            },
            0.72,
          )
          .to(
            ".camera-overlay-frame",
            { opacity: 0, duration: 0.18, ease: "power1.in" },
            0.72,
          )
          .fromTo(
            ".video-text-left-0",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.02,
          )
          .fromTo(
            ".video-text-right-0",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.02,
          )
          .to(
            ".video-text-left-0",
            { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" },
            1.2,
          )
          .to(
            ".video-text-right-0",
            { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" },
            1.2,
          );

        // Video 1 — reveal → morph → split texts
        tl.set(".video-card-1", { display: "flex" }, 1.34)
          .to(
            ".video-card-1",
            { opacity: 1, duration: 0.1, ease: "power2.out" },
            1.34,
          )
          .to(".camera-overlay-frame", { opacity: 0.6, duration: 0.1 }, 1.34)
          .to(
            ".video-card-1",
            {
              clipPath: "circle(120vw at 50% 50%)",
              duration: 0.3,
              ease: "power2.inOut",
            },
            1.46,
          )
          .to(
            ".camera-overlay-frame",
            { opacity: 0, duration: 0.18, ease: "power1.in" },
            1.46,
          )
          .set(".video-card-0", { display: "none" }, 1.76)
          .fromTo(
            ".video-text-left-1",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.5,
          )
          .fromTo(
            ".video-text-right-1",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.5,
          )
          .to(
            ".video-text-left-1",
            { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" },
            1.68,
          )
          .to(
            ".video-text-right-1",
            { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" },
            1.68,
          );

        // Video 2 — slide reveal (pushes Video 1 off) → split texts
        tl.set(".video-card-2", { display: "flex" }, 1.8)
          .to(
            ".video-card-2",
            { xPercent: 0, duration: 0.3, ease: "power3.inOut" },
            1.8,
          )
          .to(
            ".video-card-1",
            { xPercent: -100, duration: 0.3, ease: "power3.inOut" },
            1.8,
          )
          .set(".video-card-1", { display: "none" }, 2.1)
          .fromTo(
            ".video-text-left-2",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.96,
          )
          .fromTo(
            ".video-text-right-2",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.16, ease: "power2.out" },
            1.96,
          )
          .to(
            ".video-text-left-2",
            { opacity: 0, x: -30, duration: 0.14, ease: "power2.in" },
            2.14,
          )
          .to(
            ".video-text-right-2",
            { opacity: 0, x: 30, duration: 0.14, ease: "power2.in" },
            2.14,
          );

        // Outro / Transition into Editorial Break (horizontal letterbox reveal of center band)
        tl.set(
          ".editorial-break-el",
          { display: "block", pointerEvents: "auto" },
          2.14,
        )
          .fromTo(
            ".eb-center-band",
            { clipPath: "inset(50% 0% 50% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 0.32,
              ease: "power3.inOut",
            },
            2.14,
          )
          // Navbar color transitions to cream as charcoal background is revealed
          .to(
            ".nav-el",
            { color: "#FAF7F2", duration: 0.24, ease: "power2.inOut" },
            2.14,
          )
          .to(
            ".nav-underline",
            {
              backgroundColor: "#FAF7F2",
              duration: 0.24,
              ease: "power2.inOut",
            },
            2.14,
          )
          .to(
            ".mobile-burger-line",
            {
              backgroundColor: "#FAF7F2",
              duration: 0.24,
              ease: "power2.inOut",
            },
            2.14,
          )
          .to(
            ".header-logo",
            { opacity: 1, duration: 0.24, ease: "power2.inOut" },
            2.14,
          );

        // ════════════════════════════════════════════════════════════════
        // PHASE 2: EDITORIAL BREAK (2.14 → 3.18) — sliding colored bands
        // ════════════════════════════════════════════════════════════════

        // Sliding colored bands slide in sequentially starting when center band is 60% open (starts at 2.33)
        tl.fromTo(
          ".eb-top-band",
          { yPercent: -100 },
          { yPercent: 0, duration: 0.24, ease: "power2.out" },
          2.33,
        )
          .fromTo(
            ".eb-bottom-band",
            { yPercent: 100 },
            { yPercent: 0, duration: 0.24, ease: "power2.out" },
            2.33,
          );

        // Background Typography horizontal drift (from 2.14 to 3.18)
        tl.fromTo(
          ".floating-bg-text",
          { x: -120 },
          { x: 120, duration: 1.04, ease: "none" },
          2.14,
        );

        // Entrance slide-up and fade-in for boundary texts and poetry lines
        tl.fromTo(
          ".eb-reveal-row span",
          { yPercent: 105 },
          { yPercent: 0, duration: 0.5, ease: "power3.out", stagger: 0.08 },
          2.20,
        )
          .fromTo(
            ".eb-boundary-text-top",
            { y: "-22.5vh", yPercent: -50, opacity: 0 },
            { y: 0, yPercent: -50, opacity: 1, duration: 0.24, ease: "power2.out" },
            2.33,
          )
          .fromTo(
            ".eb-boundary-text-bottom",
            { y: "22.5vh", yPercent: -50, opacity: 0 },
            { y: 0, yPercent: -50, opacity: 1, duration: 0.24, ease: "power2.out" },
            2.33,
          );

        // Scroll Text Color Fill-in Overlay (staggered reveal for the 4 lines, from 2.32 to 3.00)
        tl.fromTo(
          ".eb-fill-line-1",
          { width: "0%" },
          { width: "100%", duration: 0.35, ease: "power1.inOut" },
          2.32,
        )
          .fromTo(
            ".eb-fill-line-2",
            { width: "0%" },
            { width: "100%", duration: 0.35, ease: "power1.inOut" },
            2.45,
          )
          .fromTo(
            ".eb-fill-line-3",
            { width: "0%" },
            { width: "100%", duration: 0.35, ease: "power1.inOut" },
            2.58,
          )
          .fromTo(
            ".eb-fill-line-4",
            { width: "0%" },
            { width: "100%", duration: 0.35, ease: "power1.inOut" },
            2.71,
          );

        // Outro slide-up / exit animations (from 2.92 to 3.18)
        tl.to(
          ".eb-reveal-row span",
          { yPercent: -105, opacity: 0, duration: 0.22, ease: "power2.inOut" },
          2.92,
        )
          .to(
            ".eb-boundary-text-top",
            { y: "-22.5vh", yPercent: -50, opacity: 0, duration: 0.24, ease: "power2.in" },
            2.94,
          )
          .to(
            ".eb-boundary-text-bottom",
            { y: "22.5vh", yPercent: -50, opacity: 0, duration: 0.24, ease: "power2.in" },
            2.94,
          )
          .to(
            ".eb-top-band",
            { yPercent: -100, duration: 0.24, ease: "power2.in" },
            2.94,
          )
          .to(
            ".eb-bottom-band",
            { yPercent: 100, duration: 0.24, ease: "power2.in" },
            2.94,
          )
          .to(
            ".eb-center-band",
            {
              clipPath: "inset(50% 0% 50% 0%)",
              duration: 0.22,
              ease: "power3.inOut",
            },
            2.96,
          )
          .set(".editorial-break-el", { display: "none" }, 3.18)
          .set(".video-section-el", { display: "none" }, 3.18)
          .set(".eb-top-band", { yPercent: -100 }, 3.18)
          .set(".eb-bottom-band", { yPercent: 100 }, 3.18)
          .set(".eb-center-band", { clipPath: "inset(50% 0% 50% 0%)" }, 3.18)
          .set(".eb-boundary-text-top", { opacity: 0, yPercent: -50, y: "-22.5vh" }, 3.18)
          .set(".eb-boundary-text-bottom", { opacity: 0, yPercent: -50, y: "22.5vh" }, 3.18);

        // ════════════════════════════════════════════════════════════════
        // PHASE 3: GALLERY (3.20 → 4.25) — dark red bg, white nav
        // ════════════════════════════════════════════════════════════════

        // Gallery slides up and overlay fades in
        tl.set(".gallery-section-el", { display: "block" }, 3.16)
          .to(
            ".gallery-section-el",
            { opacity: 1, duration: 0.2, ease: "power2.out" },
            3.20,
          )
          .to(
            ".gallery-bg-container",
            { scale: 1.0, rotation: 0, duration: 0.45, ease: "power2.out" },
            3.20,
          )
          .to(
            ".pinned-viewport",
            {
              backgroundColor: "#0F0202",
              duration: 0.14,
              ease: "power2.inOut",
            },
            3.20,
          )
          .to(
            ".nav-el",
            { color: "#FFFFFF", duration: 0.14, ease: "power2.inOut" },
            3.20,
          )
          .to(
            ".nav-underline",
            {
              backgroundColor: "#FFFFFF",
              duration: 0.14,
              ease: "power2.inOut",
            },
            3.20,
          )
          .to(
            ".mobile-burger-line",
            {
              backgroundColor: "#FFFFFF",
              duration: 0.14,
              ease: "power2.inOut",
            },
            3.20,
          )
          .to(
            ".header-logo",
            {
              opacity: 1,
              color: "#FFFFFF",
              duration: 0.14,
              ease: "power2.inOut",
            },
            3.20,
          );

        // Gallery supported cards fan out from center with scale, rotation, and spring/back ease
        tl.to(
          ".gallery-supported-card.corner-tl",
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotation: 0,
            duration: 0.35,
            ease: "back.out(1.2)",
            stagger: 0.04,
          },
          3.30,
        )
          .to(
            ".gallery-supported-card.corner-bl",
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.35,
              ease: "back.out(1.2)",
              stagger: 0.04,
            },
            3.34,
          )
          .to(
            ".gallery-supported-card.corner-tr",
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.35,
              ease: "back.out(1.2)",
              stagger: 0.04,
            },
            3.38,
          )
          .to(
            ".gallery-supported-card.corner-br",
            {
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
              rotation: 0,
              duration: 0.35,
              ease: "back.out(1.2)",
              stagger: 0.04,
            },
            3.42,
          );

        // Stack cards reveal one by one with distinct fanned angles and offsets
        tl.to(
          ".stack-card-0",
          { opacity: 1, scale: 1, rotation: -8, x: -20, y: -15, duration: 0.28, ease: "power2.out" },
          3.48,
        )
          .to(
            ".stack-card-1",
            { opacity: 1, scale: 1, rotation: 6, x: 15, y: -10, duration: 0.28, ease: "power2.out" },
            3.56,
          )
          .to(
            ".stack-card-2",
            { opacity: 1, scale: 1, rotation: -4, x: -10, y: 8, duration: 0.28, ease: "power2.out" },
            3.64,
          )
          .to(
            ".stack-card-3",
            { opacity: 1, scale: 1, rotation: 4, x: 12, y: 10, duration: 0.28, ease: "power2.out" },
            3.72,
          )
          .to(
            ".stack-card-4",
            { opacity: 1, scale: 1, rotation: -1, x: 0, y: 0, duration: 0.28, ease: "power2.out" },
            3.80,
          );

        // Gallery cards fly out at 90% (scroll ~4.15) with scale and rotation scatter
        tl.to(
          ".gallery-supported-card.corner-tl",
          {
            opacity: 0,
            x: -180,
            y: -140,
            scale: 0.7,
            rotation: -25,
            duration: 0.22,
            ease: "power2.in",
          },
          4.10,
        )
          .to(
            ".gallery-supported-card.corner-bl",
            {
              opacity: 0,
              x: -180,
              y: 140,
              scale: 0.7,
              rotation: 25,
              duration: 0.22,
              ease: "power2.in",
            },
            4.10,
          )
          .to(
            ".gallery-supported-card.corner-tr",
            {
              opacity: 0,
              x: 180,
              y: -140,
              scale: 0.7,
              rotation: 25,
              duration: 0.22,
              ease: "power2.in",
            },
            4.10,
          )
          .to(
            ".gallery-supported-card.corner-br",
            {
              opacity: 0,
              x: 180,
              y: 140,
              scale: 0.7,
              rotation: -25,
              duration: 0.22,
              ease: "power2.in",
            },
            4.10,
          )
          .to(
            ".gallery-bg-container",
            { scale: 1.08, rotation: 1.5, duration: 0.25, ease: "power2.inOut" },
            4.10,
          );

        // Staggered scatter/fly-out of central stack cards in distinct directions
        tl.to(
          ".stack-card-0",
          { opacity: 0, x: -100, y: -160, rotation: -24, scale: 0.85, duration: 0.20, ease: "power2.in" },
          4.12,
        )
          .to(
            ".stack-card-1",
            { opacity: 0, x: 100, y: -140, rotation: 24, scale: 0.85, duration: 0.20, ease: "power2.in" },
            4.13,
          )
          .to(
            ".stack-card-2",
            { opacity: 0, x: -110, y: 120, rotation: -18, scale: 0.85, duration: 0.20, ease: "power2.in" },
            4.14,
          )
          .to(
            ".stack-card-3",
            { opacity: 0, x: 110, y: 130, rotation: 18, scale: 0.85, duration: 0.20, ease: "power2.in" },
            4.15,
          )
          .to(
            ".stack-card-4",
            { opacity: 0, x: 0, y: -180, rotation: -8, scale: 0.85, duration: 0.20, ease: "power2.in" },
            4.16,
          );

        // ════════════════════════════════════════════════════════════════
        // PHASE 4: TEXT / PHOTOGRAPHER INTRO (4.25 → 5.20) — dark, white nav
        // ════════════════════════════════════════════════════════════════

        // Accordion columns grow from bottom (starting exactly as gallery cards are flying out)
        tl.to(
          ".intro-unfold-bar",
          { scaleY: 1, duration: 0.18, ease: "power3.inOut", stagger: 0.04 },
          4.12,
        );

        // Hand-off at 4.25
        tl.set(".gallery-section-el", { display: "none" }, 4.25)
          .set(".text-section-el", { display: "flex", opacity: 1 }, 4.25)
          .to(
            ".pinned-viewport",
            { backgroundColor: "#874F41", duration: 0.15 },
            4.25,
          );

        // Accordion columns fold back down to the bottom
        tl.to(
          ".intro-unfold-bar",
          { scaleY: 0, duration: 0.18, ease: "power3.inOut", stagger: 0.03 },
          4.32,
        );

        // Guidelines & circular ring reveal
        tl.to(
          ".intro-axis-h, .intro-axis-v",
          { scale: 1, duration: 0.15, ease: "power2.out" },
          4.35,
        ).to(
          ".intro-circular-ring",
          { scale: 1, duration: 0.2, ease: "back.out(1.5)" },
          4.35,
        );

        // Central circular portrait clipPath expands & image parallax zoom down
        tl.to(
          ".intro-portrait-container",
          {
            clipPath: "circle(50% at 50% 50%)",
            duration: 0.3,
            ease: "power3.inOut",
          },
          4.40,
        ).to(
          ".intro-portrait-img",
          { scale: 1.0, duration: 0.3, ease: "power2.out" },
          4.40,
        );

        // Snake-style reveal: 4 quadrant blocks slide out from behind portrait to their corners
        tl.to(
          ".intro-block-tl, .intro-block-tr, .intro-block-bl, .intro-block-br",
          { x: 0, y: 0, opacity: 1, duration: 0.3, ease: "power3.out" },
          4.45,
        );

        // Child lines slither/skew into position
        tl.to(
          ".intro-title-el",
          {
            yPercent: 0,
            skewY: 0,
            duration: 0.25,
            ease: "power3.out",
            stagger: 0.02,
          },
          4.55,
        );

        // Slow parallax drift during scroll progression
        tl.to(
          ".intro-block-tl",
          { x: "-15px", y: "-15px", duration: 0.6, ease: "none" },
          4.60,
        )
          .to(
            ".intro-block-tr",
            { x: "15px", y: "-15px", duration: 0.6, ease: "none" },
            4.60,
          )
          .to(
            ".intro-block-bl",
            { x: "-15px", y: "15px", duration: 0.6, ease: "none" },
            4.60,
          )
          .to(
            ".intro-block-br",
            { x: "15px", y: "15px", duration: 0.6, ease: "none" },
            4.60,
          )
          .to(
            ".intro-portrait-img",
            { scale: 1.15, duration: 0.6, ease: "none" },
            4.60,
          );

        // OUTRO — fade text section out
        tl.to(
          ".text-section-el",
          { opacity: 0, duration: 0.16, ease: "power2.inOut" },
          5.20,
        );
      }, containerRef);
    };

    initGsap();

    return () => {
      active = false;
      if (ctx) ctx.revert();
    };
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

      {/* Scrollable Spacer Track — 7600vh covers full compressed timeline */}
      <div className="h-[7600vh] w-full" />
    </div>
  );
}
