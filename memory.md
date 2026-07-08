# Project Memory

## Project Overview

- **Name/Directory**: `modern-per` (`/home/sourov/Desktop/modern-per`)
- **Framework**: Next.js (App Router, Tailwind CSS, TypeScript)
- **Local Dev Server**: `pnpm dev` running on [http://localhost:3000](http://localhost:3000)
- **Primary Page**: `app/page.tsx`
- **Active Assets**:
  - Standing Model (Initial Left Side): `public/model_transparent.png`
  - Sitting Model on Stool (Initial Right Side): `public/model_stool_transparent.png`
  - Scrolled State Model (Light): `public/model2_light_transparent.png`
  - Scrolled State Model (Dark): `public/model2_dark_transparent.png`
  - Sequential Intermission Videos: `public/video1.mp4`, `public/video2.mp4`, `public/video3.mp4`
- **Section Components** (all absolute-positioned overlays, motion driven by the master GSAP scroll timeline in `app/page.tsx`):
  - `components/VideoSection.tsx` — sequential circular video cards + technical camera overlay frame.
  - `components/EditorialBreakSection.tsx` — full-screen typographic word reveals (LIGHT / PRESENCE / …), static DOM shell, no internal animation.
  - `components/TextSection.tsx` — editorial photography stickers (polaroid print, 35mm film strip, etc.) over a dark backdrop.
  - `components/Header.tsx`, `components/ListedSection.tsx`, `components/StatsSection.tsx`.
- **Fonts**: `font-anton`, `font-cormorant`, `font-playfair` (editorial/fashion typography).
- **Dev Dependency**: `puppeteer` (^25.3.0) for automated scroll-state diagnostics.

---

## What We Did (Latest Session)

1. **Multi-Video Sequential Morph & Zoom** (`components/VideoSection.tsx`):
   - Three video card containers (`.video-card-0/1/2`) using `video1.mp4`, `video2.mp4`, `video3.mp4`, absolutely stacked and centered.
   - Each card starts as a `clip-path: circle(15vw)` lens; the master GSAP timeline in `app/page.tsx` morphs each to fullscreen in sequence, layered by z-index, with a cinematic subtitle reveal per video.
   - Technical camera-overlay frame (crosshairs + inset border) for a viewfinder aesthetic.
2. **Editorial Break Typography** (`components/EditorialBreakSection.tsx`):
   - Full-screen word reveals (LIGHT, PRESENCE, …) in `font-anton`, with `font-mono` kickers and `font-cormorant` italic descriptions.
   - Pure static shell (`display:none; opacity:0`); all motion driven exclusively by the GSAP scroll timeline.
3. **Photography Sticker Layer** (`components/TextSection.tsx`):
   - Scattered editorial props — white polaroid print, vertical 35mm film strip with perforations — grayscale-treated, `font-playfair` italic captions, subtle parallax hooks.
4. **Scroll-Track Coordinates Calibration**:
   - Stretched the global scroll spacer container in `app/page.tsx` from `4300vh` to `6210vh` to afford a spacious, slow, luxurious scroll speed for the three morph animations.
   - Calibrated the `scrollToProject` method coordinates in `components/ListedSection.tsx` to `[5.06, 5.28, 5.50, 5.72, 5.94]` over the new `6.21` timeline divisor so sidebar navigation clicks map correctly to the grid project slides.
   - Shifted all project zoom/entrance triggers inside the master GSAP scroll timeline by `1.92` scroll units (commencing the project reveal animations at `4.95` instead of `3.03`).
5. **Linter & Build Validation**:
   - Successfully ran automated Puppeteer test checks at key scroll interval milestones (`transition_1_20` to `transition_5_05`).
   - Verified that the circular elements overlap and morph precisely without layout distortion.

---

## Development Environment Info

- **Python Virtual Environment**: `/home/sourov/Desktop/modern-per/.venv`
- **Latest background removal script**: `/home/sourov/Desktop/modern-per/scratch/process_standing.py`
- **Diagnostic check script**: `/home/sourov/Desktop/modern-per/scratch/check_page.js`

---

## Next Steps / Future Enhancements

- Review responsiveness across diverse mobile devices and tablets.
- Integrate click-based cursor interaction on the stickers for micro-reactive scale/tilt effects.
