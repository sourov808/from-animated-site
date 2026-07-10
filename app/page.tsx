"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import BackgroundSplit from "@/components/BackgroundSplit";
import BackgroundTypography from "@/components/BackgroundTypography";
import ModelImages from "@/components/ModelImages";
import ForegroundTypography from "@/components/ForegroundTypography";
import TextSection from "@/components/TextSection";
import VideoSection from "@/components/VideoSection";
import EditorialBreakSection from "@/components/EditorialBreakSection";
import ScrollCue from "@/components/ScrollCue";
import Loader from "@/components/Loader";

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
          // All supportive corner cards start fully BELOW the viewport — they
          // rise up from the bottom together (with an animated, staggered
          // overshoot) after the center deck finishes building.
          .set(
            ".gallery-supported-card",
            { opacity: 0, scale: 0.9, x: 0, y: "75vh", rotation: 0 },
            0.3,
          )
          // Each of the 5 center deck cards starts fully OFF-SCREEN from a
          // DIFFERENT direction — they fly in one-by-one to build a fanned
          // deck. (0: bottom, 1: left, 2: right, 3: top, 4: bottom-right)
          .set(".stack-card-0", { opacity: 0, scale: 0.9, x: 0, y: "100vh", rotation: -14 }, 0.3)
          .set(".stack-card-1", { opacity: 0, scale: 0.9, x: "-100vw", y: 0, rotation: 12 }, 0.3)
          .set(".stack-card-2", { opacity: 0, scale: 0.9, x: "100vw", y: 0, rotation: -12 }, 0.3)
          .set(".stack-card-3", { opacity: 0, scale: 0.9, x: 0, y: "-100vh", rotation: 10 }, 0.3)
          .set(".stack-card-4", { opacity: 0, scale: 0.9, x: "80vw", y: "80vh", rotation: -8 }, 0.3)
          .set(".text-section-el", { display: "none", opacity: 0 }, 0.3)
          .set(".intro-unfold-bar", { scaleY: 0 }, 0.3)
          .set(".reveal-line", { yPercent: 110 }, 0.3)
          .set(".hero-rule", { scaleX: 0 }, 0.3)
          .set(".hero-meta-item", { y: 24, opacity: 0 }, 0.3)
          .set(".brand-wordmark", { yPercent: 65, opacity: 0 }, 0.3)
          .set(".brand-media", { scale: 1.25, opacity: 0 }, 0.3)
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

        // Hide the entire navbar during the editorial break section
        tl.to(
          ".header-shell",
          { opacity: 0, duration: 0.12, ease: "power2.out" },
          2.04,
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

        // Reveal Gallery BEHIND the editorial break BEFORE the center band
        // closes. Gallery (z-35) sits under the break (z-36), so once it is
        // displayed + opaque the closing letterbox uncovers the Gallery
        // instead of the Video section (z-31) underneath.
        tl.set(".gallery-section-el", { display: "block", opacity: 1 }, 2.90)
          .set(".video-section-el", { display: "none" }, 2.90)
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
          )
          // Bring the navbar back for the gallery section
          .to(
            ".header-shell",
            { opacity: 1, duration: 0.14, ease: "power2.out" },
            3.20,
          );

        // ── CENTER DECK: 5 big images rise up FROM OFF-SCREEN one-by-one,
        // stacking on top. Each travels from below the viewport, scales to
        // full, and lands at a fanned angle/offset so the deck stays legible.
        tl.to(
          ".stack-card-0",
          { opacity: 1, y: -16, scale: 1, rotation: -9, x: -22, duration: 0.3, ease: "power3.out" },
          3.24,
        )
          .to(
            ".stack-card-1",
            { opacity: 1, y: -12, scale: 1, rotation: 6, x: 16, duration: 0.3, ease: "power3.out" },
            3.33,
          )
          .to(
            ".stack-card-2",
            { opacity: 1, y: 8, scale: 1, rotation: -5, x: -12, duration: 0.3, ease: "power3.out" },
            3.42,
          )
          .to(
            ".stack-card-3",
            { opacity: 1, y: 12, scale: 1, rotation: 5, x: 14, duration: 0.3, ease: "power3.out" },
            3.51,
          )
          .to(
            ".stack-card-4",
            { opacity: 1, y: 0, scale: 1, rotation: -2, x: 0, duration: 0.3, ease: "power3.out" },
            3.60,
          );

        // ── SUPPORTIVE: after the deck lands, all corner images rise up
        // FROM THE BOTTOM at once. No stagger + a smooth (non-overshoot) ease
        // keeps it glitch-free under scrub and finishes well before exit ──
        tl.to(
          ".gallery-supported-card",
          {
            opacity: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.32,
            ease: "power3.out",
          },
          3.64,
        );

        // Subtle parallax drift of the whole deck/grid while it holds
        tl.to(
          ".gallery-grid",
          { yPercent: -3, duration: 0.3, ease: "none" },
          3.98,
        );

        // ── EXIT: supportive images drop back down OFF-SCREEN to the bottom
        // first (staggered), then the deck scatters out ──
        tl.to(
          ".gallery-supported-card",
          {
            opacity: 0,
            y: "75vh",
            scale: 0.85,
            duration: 0.2,
            ease: "power2.in",
          },
          4.02,
        ).to(
          ".gallery-bg-container",
          { scale: 1.08, rotation: 1.5, duration: 0.25, ease: "power2.inOut" },
          4.10,
        );

        // Staggered scatter/fly-out of the 6 central deck cards
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
            { opacity: 0, x: 0, y: -190, rotation: -8, scale: 0.85, duration: 0.20, ease: "power2.in" },
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
            { backgroundColor: "#0B0B0D", duration: 0.15 },
            4.25,
          );

        // Accordion columns fold back down to the bottom
        tl.to(
          ".intro-unfold-bar",
          { scaleY: 0, duration: 0.18, ease: "power3.inOut", stagger: 0.03 },
          4.32,
        );

        // Giant brand wordmark + faded media rise/fade in behind the content
        tl.to(
          ".brand-media",
          { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" },
          4.34,
        ).to(
          ".brand-wordmark",
          { yPercent: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
          4.38,
        );

        // Top hairline draws in
        tl.to(
          ".hero-rule",
          { scaleX: 1, duration: 0.24, ease: "power3.inOut", stagger: 0.08 },
          4.40,
        );

        // Statement lines slide up (masked)
        tl.to(
          ".reveal-line",
          { yPercent: 0, duration: 0.34, ease: "power4.out", stagger: 0.08 },
          4.46,
        );

        // Info columns + meta row fade/rise in
        tl.to(
          ".hero-meta-item",
          {
            y: 0,
            opacity: 1,
            duration: 0.3,
            ease: "power2.out",
            stagger: 0.05,
          },
          4.70,
        );

        // Slow parallax settle while it holds as the final resting frame
        tl.to(
          ".brand-media",
          { scale: 1.08, duration: 0.6, ease: "none" },
          4.85,
        ).to(
          ".hero-content",
          { y: "-2vh", duration: 0.6, ease: "none" },
          4.85,
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
      {/* Logo preloader */}
      <Loader />

      {/* Pinned viewport containing both sections */}
      <div className="pinned-viewport fixed inset-0 w-full h-screen bg-[#FAF7F2] overflow-hidden pointer-events-none select-none z-10">
        {/* Navbar Header (clickable) */}
        <div className="header-shell pointer-events-auto relative z-50">
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

          {/* Scroll cue (+ idle nudge) */}
          <div className="hero-cta absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-center">
            <ScrollCue />
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
