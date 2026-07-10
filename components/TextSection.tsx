"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const COLUMNS = [
  { label: "Based in", value: "Paris · Milan", href: null },
  { label: "Commissions", value: "hello@from.studio", href: "mailto:hello@from.studio" },
  { label: "Telephone", value: "+33 1 23 45 67 89", href: "tel:+33123456789" },
];

const SOCIALS = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Behance", href: "https://behance.net" },
  { name: "LinkedIn", href: "https://linkedin.com" },
];

const ARCHIVE = [
  { src: "/section2_1.jpg", title: "Nocturne", tag: "Editorial · 2025" },
  { src: "/rene-ranisch-L3cTvvdrCCk-unsplash.jpg", title: "Bias Cut", tag: "Campaign · 2025" },
  { src: "/section2_3.jpg", title: "Grain Study", tag: "Editorial · 2024" },
  { src: "/jenna-brenner-zm0xw-UF5Bg-unsplash.jpg", title: "Atelier", tag: "Print · 2024" },
  { src: "/section2_2.jpg", title: "Silhouette", tag: "Editorial · 2024" },
  { src: "/maureen-de-wit--Lu6d3i13Dg-unsplash.jpg", title: "Contour", tag: "Campaign · 2023" },
  { src: "/section2_5.jpg", title: "Low Light", tag: "Editorial · 2023" },
  { src: "/ivan-kazlouskij-h1-bqZGYSLQ-unsplash.jpg", title: "Monochrome", tag: "Print · 2023" },
  { src: "/section2_4.jpg", title: "Motion", tag: "Editorial · 2022" },
];

export default function TextSection() {
  const [archiveOpen, setArchiveOpen] = useState(false);

  // Lock page scroll (so the scrub timeline can't move underneath and hide
  // this section along with the overlay) + Esc close. The scroller is the
  // root element (tall spacer track), so lock <html> too, not just <body>.
  useEffect(() => {
    if (!archiveOpen) return;
    const html = document.documentElement;
    const prevHtml = html.style.overflow;
    const prevBody = document.body.style.overflow;
    html.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setArchiveOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prevHtml;
      document.body.style.overflow = prevBody;
      window.removeEventListener("keydown", onKey);
    };
  }, [archiveOpen]);

  // Live local time (Paris) — client-only to avoid SSR mismatch.
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Paris",
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="text-section-el absolute inset-0 w-full h-screen z-37 pointer-events-none overflow-hidden"
      style={{ opacity: 0, willChange: "transform, opacity" }}
    >
      {/* Bar Unfolding Transition Columns (section hand-off) */}
      <div className="absolute inset-0 w-full h-screen z-50 pointer-events-none flex">
        <div className="intro-unfold-bar w-1/4 h-full bg-[#0B0B0D] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#1A1113] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#A23A3A] origin-bottom scale-y-0 will-change-transform" />
        <div className="intro-unfold-bar w-1/4 h-full bg-[#2A2426] origin-bottom scale-y-0 will-change-transform" />
      </div>

      {/* Giant brand wordmark + faded media behind everything */}
      <div className="brand-media absolute left-1/2 bottom-[-6vh] -translate-x-1/2 w-[52vw] h-[52vw] max-w-[720px] max-h-[720px] z-0 pointer-events-none will-change-transform [mask-image:radial-gradient(circle_at_center,black_35%,transparent_72%)]">
        <Image
          src="/photographer.png"
          alt=""
          aria-hidden="true"
          fill
          quality={80}
          sizes="52vw"
          className="object-cover object-top grayscale opacity-[0.16] contrast-125"
        />
      </div>
      <div className="brand-wordmark absolute left-0 bottom-[-2vw] w-full z-1 flex justify-center pointer-events-none overflow-hidden will-change-transform">
        <span className="font-anton uppercase leading-[0.7] tracking-tight text-[26vw] text-[#ECE7DE]/[0.09] whitespace-nowrap">
          FROM
        </span>
      </div>

      {/* ── MAIN COMPOSITION ── */}
      <div className="hero-content absolute inset-0 z-10 flex flex-col px-[5vw] pt-[13vh] pb-[4vh] will-change-transform">
        {/* Top dotted rule */}
        <div className="hero-rule w-full border-t border-dashed border-[#ECE7DE]/20 origin-left scale-x-0 will-change-transform" />

        {/* Statement (left) + right rail — grows to fill the full height */}
        <div className="flex-1 flex flex-col lg:flex-row justify-between gap-[6vh] lg:gap-[5vw] py-[5vh] min-h-0">
          {/* Big statement */}
          <div className="max-w-[46ch] lg:self-center">
            <div className="overflow-hidden">
              <h2 className="reveal-line font-anton text-[clamp(1.9rem,4.4vw,5.2rem)] leading-[0.98] uppercase tracking-tight text-[#ECE7DE] will-change-transform">
                An editorial photographer
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="reveal-line font-anton text-[clamp(1.9rem,4.4vw,5.2rem)] leading-[0.98] uppercase tracking-tight text-[#ECE7DE] will-change-transform">
                shaping fashion imagery with
              </h2>
            </div>
            <div className="overflow-hidden">
              <h2 className="reveal-line font-anton text-[clamp(1.9rem,4.4vw,5.2rem)] leading-[0.98] uppercase tracking-tight text-[#A23A3A] will-change-transform">
                grain, contrast &amp; nerve.
              </h2>
            </div>
          </div>

          {/* Right rail: 3 info columns + selected clients + archive CTA —
              spread top-to-bottom to fill the right side */}
          <div className="flex flex-col justify-between gap-[7vh] lg:items-end">
            {/* 3 info columns */}
            <div className="flex flex-wrap gap-x-[4vw] gap-y-[5vh] lg:flex-nowrap">
              {COLUMNS.map((c) => (
                <div key={c.label} className="hero-meta-item flex flex-col gap-3 min-w-[160px] will-change-transform">
                  <span className="font-anton text-[clamp(0.62rem,0.85vw,0.8rem)] uppercase tracking-[0.35em] text-[#A23A3A]">
                    {c.label}
                  </span>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="pointer-events-auto font-anton text-[clamp(0.9rem,1.15vw,1.2rem)] uppercase tracking-[0.12em] text-[#ECE7DE] transition-colors duration-300 hover:text-[#A23A3A]"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <span className="font-anton text-[clamp(0.9rem,1.15vw,1.2rem)] uppercase tracking-[0.12em] text-[#ECE7DE]">
                      {c.value}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Rotating seal badge — compact, fills the center-right void */}
            <div className="hero-meta-item relative w-[clamp(108px,11vw,150px)] aspect-square lg:self-end will-change-transform">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full animate-[spin_16s_linear_infinite] motion-reduce:animate-none"
                aria-hidden="true"
              >
                <defs>
                  <path id="sealArc" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
                </defs>
                <text
                  fill="#ECE7DE"
                  fillOpacity="0.75"
                  className="font-anton uppercase"
                  style={{ fontSize: "17px", letterSpacing: "1.5px" }}
                >
                  <textPath href="#sealArc" textLength="465" lengthAdjust="spacing">
                    Available for commissions · 2026 ·
                  </textPath>
                </text>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-[#A23A3A] text-[clamp(1.3rem,1.8vw,2rem)]">
                ↗
              </span>
            </div>

            {/* Selected clients + archive CTA — fills the lower-right space */}
            <div className="flex flex-col gap-6 max-w-[38ch] lg:text-right lg:items-end">
              <div className="hero-meta-item flex flex-col gap-2.5 will-change-transform">
                <span className="font-anton text-[clamp(0.62rem,0.85vw,0.8rem)] uppercase tracking-[0.35em] text-[#A23A3A]">
                  Selected clients
                </span>
                <span className="font-anton text-[clamp(0.8rem,1vw,1.05rem)] uppercase tracking-[0.14em] leading-relaxed text-[#ECE7DE]/75">
                  Vogue · Dazed · SSAW · Numéro · Self-Published Editions
                </span>
              </div>
              <button
                type="button"
                onClick={() => setArchiveOpen(true)}
                className="hero-meta-item group pointer-events-auto inline-flex items-center gap-3 self-start lg:self-end font-anton uppercase tracking-tight text-[clamp(1.2rem,2vw,2.1rem)] text-[#ECE7DE] transition-colors duration-300 hover:text-[#A23A3A] will-change-transform"
              >
                <span className="relative">
                  View the full archive
                  <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#A23A3A] transition-all duration-500 ease-out group-hover:w-full" />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom dotted rule + meta row */}
        <div className="hero-rule w-full border-t border-dashed border-[#ECE7DE]/20 origin-left scale-x-0 will-change-transform" />
        <div className="flex flex-wrap items-center justify-between gap-x-[4vw] gap-y-3 pt-[3vh]">
          <span className="hero-meta-item font-anton text-[clamp(0.62rem,0.9vw,0.85rem)] uppercase tracking-[0.3em] text-[#ECE7DE] will-change-transform">
            Jack — FROM Studio
          </span>
          <span className="hero-meta-item font-anton text-[clamp(0.62rem,0.9vw,0.85rem)] uppercase tracking-[0.3em] text-[#837D72] will-change-transform">
            © 2026
          </span>
          <div className="hero-meta-item flex items-center gap-[2.5vw] will-change-transform">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="pointer-events-auto font-anton text-[clamp(0.62rem,0.9vw,0.85rem)] uppercase tracking-[0.3em] text-[#ECE7DE] transition-colors duration-300 hover:text-[#A23A3A]"
              >
                {s.name}
              </a>
            ))}
          </div>
          <span className="hero-meta-item font-anton text-[clamp(0.62rem,0.9vw,0.85rem)] uppercase tracking-[0.3em] text-[#837D72] tabular-nums will-change-transform">
            Paris {time || "--:--"}
          </span>
        </div>
      </div>

      {/* ── ARCHIVE OVERLAY (portaled to <body> so it sits above the nav) ── */}
      {archiveOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-[#0B0B0D] overflow-y-auto overflow-x-hidden"
            style={{ animation: "archiveIn 0.5s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            <style>{`@keyframes archiveIn{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}`}</style>

            {/* Overlay header — Back button on the left */}
            <div className="sticky top-0 z-10 flex items-center gap-4 px-[5vw] py-6 bg-[#0B0B0D]/80 backdrop-blur-md border-b border-dashed border-[#ECE7DE]/15">
              <button
                type="button"
                onClick={() => setArchiveOpen(false)}
                className="group flex items-center gap-3 font-anton uppercase text-[clamp(0.7rem,1vw,0.95rem)] tracking-[0.3em] text-[#ECE7DE] transition-colors duration-300 hover:text-[#A23A3A]"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-x-1">
                  ←
                </span>
                Back
              </button>
              <span className="ml-auto font-anton uppercase text-[clamp(0.6rem,0.85vw,0.78rem)] tracking-[0.35em] text-[#A23A3A]">
                The Archive · {ARCHIVE.length} Works
              </span>
            </div>

          {/* Image grid */}
          <div className="px-[5vw] py-[5vh] grid grid-cols-2 md:grid-cols-3 gap-[clamp(0.75rem,1.5vw,1.5rem)]">
            {ARCHIVE.map((item, i) => (
              <figure
                key={item.src + i}
                className={`group relative overflow-hidden rounded-sm bg-[#15151A] ${
                  i % 5 === 0 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
                }`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  quality={85}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover grayscale-[30%] contrast-[1.05] transition-all duration-700 ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0D]/85 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2 translate-y-1 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="font-anton uppercase text-[clamp(0.85rem,1.2vw,1.15rem)] tracking-tight text-[#ECE7DE]">
                    {item.title}
                  </span>
                  <span className="font-anton uppercase text-[0.6rem] tracking-[0.25em] text-[#A23A3A] whitespace-nowrap">
                    {item.tag}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Overlay footer */}
          <div className="px-[5vw] pb-[6vh] pt-[2vh] flex flex-wrap items-center justify-between gap-4 border-t border-dashed border-[#ECE7DE]/15">
            <span className="font-anton uppercase text-[clamp(0.6rem,0.85vw,0.78rem)] tracking-[0.3em] text-[#837D72]">
              Jack — FROM Studio · Selected works 2022–2025
            </span>
            <a
              href="mailto:hello@from.studio"
              className="font-anton uppercase text-[clamp(0.6rem,0.85vw,0.78rem)] tracking-[0.3em] text-[#ECE7DE] transition-colors duration-300 hover:text-[#A23A3A]"
            >
              Commission a project ↗
            </a>
          </div>
          </div>,
          document.body,
        )}
    </section>
  );
}
