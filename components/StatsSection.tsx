"use client";

import React from "react";

export default function StatsSection() {
  // Authentic editorial stories with high-end copywriting
  const stories = [
    {
      title: "LIGHT",
      paragraph:
        "Every story begins with light. Before composition, before color, before emotion, there is the quiet decision of where the light should fall.",
      quote: "Light reveals more than a subject. It reveals a feeling.",
      micro: "Editorial Series • 2026",
    },
    {
      title: "PRESENCE",
      paragraph:
        "The strongest portraits happen when people stop performing and simply exist in front of the camera.",
      quote: "The quietest expressions often say the most.",
      micro: "Portrait Studies • Selected Work",
    },
    {
      title: "MOVEMENT",
      paragraph:
        "Fashion is never truly still. Every gesture, every step, and every fold creates a new composition waiting to be seen.",
      quote: "Movement gives every frame its rhythm.",
      micro: "Fashion Editorial • Motion",
    },
    {
      title: "DETAIL",
      paragraph:
        "Small details shape the entire story. Texture, tailoring, light, and shadow work together to create photographs that feel intentional.",
      quote: "Details are where stories quietly unfold.",
      micro: "Texture • Composition",
    },
    {
      title: "MEMORY",
      paragraph:
        "Long after the day is over, photographs become the way we return to the moments that mattered most.",
      quote: "Some images stay with you long after you've looked away.",
      micro: "Visual Journal • Ongoing Archive",
    },
  ];

  // Images mapping (using the existing section2 images)
  const lookItems = [
    { src: "/section2_1.jpg", title: "LOOK 01" },
    { src: "/section2_2.jpg", title: "LOOK 02" },
    { src: "/section2_3.jpg", title: "LOOK 03" },
    { src: "/section2_4.jpg", title: "LOOK 04" },
    { src: "/section2_5.jpg", title: "LOOK 05" },
  ];

  return (
    <section
      className="stats-section-el absolute inset-0 w-full h-screen z-35 pointer-events-none opacity-0 flex items-center overflow-hidden"
      style={{
        willChange: "opacity, background-color",
        backgroundColor: "#F8F6F2",
      }}
    >
      {/* Dark overlay (5–10%) */}
      <div className="stats-dark-overlay absolute inset-0 bg-black/5 opacity-0 z-0 pointer-events-none transition-opacity duration-700" />

      <div className="w-full max-w-[88vw] h-full mx-auto flex flex-row items-stretch justify-between py-[10vh] relative z-10">
        {/* Left Column: Typography & Story Content (28% width) */}
        <div className="w-[28%] flex flex-col justify-between z-20 text-[#0A0A0A] h-full py-4 relative">
          {/* Large Editorial Concept Title (Magazine style) */}
          <div className="concept-title-wrapper mt-4 select-none">
            <h2 className="concept-title font-anton text-[clamp(2.5rem,5.5vw,7rem)] uppercase leading-[0.82] tracking-[-0.04em] text-[#0A0A0A]">
              THE
              <br />
              INVISIBLE
              <br />
              ECHO
            </h2>
          </div>

          {/* Active Story Layer Stacks */}
          <div className="relative w-full h-[52%] flex flex-col justify-end">
            {stories.map((story, i) => (
              <div
                key={i}
                className={`story-block-${i} absolute inset-0 flex flex-col justify-end text-left pointer-events-none opacity-0`}
              >
                {/* Micro Detail */}
                <span
                  className={`story-micro-${i} font-mono text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-[#0A0A0A]/55 mb-3 block`}
                >
                  {story.micro}
                </span>

                {/* Headline */}
                <h4
                  className={`story-headline-${i} font-anton text-2xl md:text-3xl lg:text-4xl uppercase tracking-tight text-[#0A0A0A] mb-3 leading-none`}
                >
                  {story.title}
                </h4>

                {/* Paragraph */}
                <p
                  className={`story-paragraph-${i} font-playfair text-sm md:text-base lg:text-lg leading-relaxed text-[#0A0A0A]/80 max-w-[340px] mb-6`}
                >
                  {story.paragraph}
                </p>

                {/* Explore CTA */}
                <a
                  href="#explore"
                  className={`story-explore-${i} font-anton text-xs uppercase tracking-[0.15em] text-[#0A0A0A] border-b border-[#0A0A0A]/40 pb-1 hover:opacity-70 transition-opacity pointer-events-auto w-fit mb-8`}
                >
                  Explore &rarr;
                </a>

                {/* Editorial Quote */}
                <div
                  className={`story-quote-wrapper-${i} border-t border-[#0A0A0A]/10 pt-4 max-w-[320px]`}
                >
                  <p
                    className={`story-quote-${i} font-playfair italic text-xs md:text-sm text-[#0A0A0A]/50 leading-relaxed`}
                  >
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Large Image + Overlapping Supporting Image (68% width) */}
        <div className="w-[68%] h-full flex flex-col justify-center relative z-10">
          {lookItems.map((item, i) => (
            <div
              key={i}
              className={`look-img-wrapper-${i} absolute inset-0 opacity-0 overflow-hidden pointer-events-none flex flex-col justify-center`}
            >
              {/* Main Image Frame (80% width of column, aligned right) */}
              <div className="w-[80%] h-[62vh] relative overflow-hidden bg-[#E5E2DA] border border-black/5 shadow-2xl self-end">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`look-img-${i} w-full h-full object-cover`}
                  style={{ transform: "scale(1.05)" }}
                />
              </div>

              {/* Small Supporting Detail Image (26% width of column, overlapping bottom-left) */}
              <div className="absolute w-[26%] h-[36vh] bottom-[6vh] left-[6%] z-20 overflow-hidden shadow-2xl border border-white/20 bg-[#D5D2CA]">
                <img
                  src={item.src}
                  alt={`${item.title} detail`}
                  className={`look-support-img-${i} w-full h-full object-cover scale-[1.6] object-[center_35%] filter contrast-[1.08]`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
