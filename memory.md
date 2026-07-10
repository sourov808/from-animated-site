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
  - Photographer Portrait: `public/photographer.png`
- **Section Components** (all absolute-positioned overlays, motion driven by the master GSAP scroll timeline in `app/page.tsx`):
  - `components/VideoSection.tsx` — sequential circular video cards + technical camera overlay frame.
  - `components/EditorialBreakSection.tsx` — full-screen typographic word reveals (LIGHT / PRESENCE / …), static DOM shell, no internal animation.
  - `components/TextSection.tsx` — photographer intro section with grayscale portrait (`photographer.png`) and a rich 7-line responsive typography stack.
  - `components/Header.tsx`, `components/ListedSection.tsx`, `components/StatsSection.tsx`.
- **Fonts**: `font-anton`, `font-cormorant`, `font-playfair` (editorial/fashion typography loaded via standard HTML link tags in `layout.tsx`).
- **Dev Dependency**: `puppeteer` (^25.3.0) for automated scroll-state diagnostics.

---

## What We Did (Latest Session)

1. **Connected Three-Part Hero/Intro Section**:
   - Replaced the old split-hero components with a single unified `components/HeroNewSection.tsx` component containing three vertically stacked, connected horizontal bands spanning `100vh` total.
   - **Part 1 (Intro/Top Bar)**: A light sage green (`#D6E3D8`) banner containing the branding logo (`FROM`), and menu navigation elements.
   - **Part 2 (Footer/Info Block)**: A deep black/charcoal (`#0F1012`) container displaying a large editorial statement in neon chartreuse/electric lime (`#C2F842`) and a three-column metadata display (Address, Email, and Phone number) along with a sub-footer copyright row.
   - **Part 3 (Banner)**: A dark high-contrast image banner (`#1A1110`) containing the model portrait with massive, centered white overlay typography (`FROM STUDIOS`).
   - **Scroll Transitions**: Set up scroll scrubbing in `app/page.tsx` from `0` to `0.22` where Part 1 slides up (`yPercent: -100`), Part 2 slides down (`yPercent: 100`), and Part 3 translates up and expands to cover the entire screen (`height: 100vh`, `y: "-56vh"`). Then, from `0.22` to `0.42`, Part 3 zooms and fades out (`scale: 2.2`, `opacity: 0`) to seamlessly reveal the video intermission, while the global navbar header fades back in at `0.34`.
2. **Photographer Intro Section (John K) Radial Quadrant & Snake-Style Reveal**:
   - Refactored the introduction section to feature a centered circular portrait (`.intro-portrait-container`) with a custom `clipPath: "circle(0% at 50% 50%)"` that expands outwards to a perfect circle upon entry.
   - Organized the typography into balanced, symmetric quadrants (top-left, top-right, bottom-left, bottom-right) orbiting the center card.
   - Removed the EXIF metadata text nodes entirely and hid the center header logo (`.header-logo`) as the gallery section exits (`6.10`).
   - Integrated a premium accordion **Bar Unfolding Transition** (`.intro-unfold-bar`) consisting of four colored columns that grow upwards from the bottom of the screen starting at `6.15` (exactly as the gallery cards are flying out/scroll is 90% complete), switching the underlying page visibility seamlessly while the screen is covered, and then folding back down to the bottom at `6.55` to reveal the intro content against the solid premium terracotta `#874F41` background of the pinned viewport (completely eliminating the `.intro-bg-panels` and any visual gaps/breaks).
   - Programmed a **Snake-Style Reveal**: The four quadrant blocks start positioned directly behind the central circular portrait. When the portrait begins to expand (`6.55`), the blocks slide out to their respective corners, while the child lines (`.intro-title-el`) inside each block slither/skew into position with staggered delays.
   - Added custom italic phrases in each quadrant with mixed bold and normal styles to create visual depth.
   - Updated the GSAP timeline triggers to choreograph these blocks, lines, and guidelines while maintaining the slow parallax drift during scroll progression.
2. **Editorial Break Section Badge Stickers & Running Straight Line Texts**:
   - Refactored `components/EditorialBreakSection.tsx` to replace static typographic slides with an interactive designer collage layer.
   - Drawn 6 custom vector badge shapes (scalloped circle, daisy flower, 16-point starburst, postage ticket stamp, octagon shield, cloud badge) and 1 center bordeaux red badge using pixel-perfect inline SVGs.
   - Added a subtle designer background grid pattern (`60px` squares) and a technical camera/film metadata overlay (shutter, ISO, aperture, frame tags, and coordinate crosshairs) to fill any spatial emptiness.
   - Placed 8 straight slanted line paths running diagonally, horizontally, and vertically behind the stickers.
   - Designed large bold typographic variations (`text-[clamp(28px,3vw,48px)]` to `text-[clamp(34px,3.6vw,56px)]`) mixing sans-serif bold, serif italic lowercase, and mono styles inside `<textPath>` elements.
   - Programmed GSAP scroll-scrubbing of the `<textPath>` `startOffset` attributes to make all 8 text lines run smoothly across the screen during scroll progression.
   - Scheduled the stickers to pop-in one-by-one with an organic spring animation (`back.out` ease) as scroll advances, and programmed a dramatic outward dispersion exit (scattering in all directions) at the end of the break phase (`3.80`).
3. **Offline Font Loading Optimization**:
   - Shifted font compilation from Next.js's build-time `next/font/google` fetcher (which failed offline) to runtime loading via HTML preconnect/link CDN references in `app/layout.tsx`.
   - Declared standard CSS font variables globally inside `:root` in `app/globals.css` to guarantee font-styling integrity.
4. **Seamless Theme Background Transitions**:
   - Added the `.pinned-viewport` class to the primary fixed screen wrapper.
   - Choreographed dynamic background color shifts matching each active timeline phase:
     - Transitions to `#0A0A0A` (dark) at `0.42` for Video.
     - Transitions back to `#FAF7F2` (beige) at `2.3` for Editorial Break.
     - Transitions to `#0F0202` (dark red) at `4.0` for Gallery.
     - Transitions to `#874F41` (premium terracotta) at `6.55` in sync with the gallery backdrop fade-out.
   - This ensures absolutely zero off-white flashes or gaps occur as layers fade or slide during transitions.
4. **Linter & Build Validation**:
   - Verified compilation and production build correctness (`npm run build` exits with code 0).

---

## Development Environment Info

- **Python Virtual Environment**: `/home/sourov/Desktop/modern-per/.venv`
- **Latest background removal script**: `/home/sourov/Desktop/modern-per/scratch/process_standing.py`
- **Diagnostic check script**: `/home/sourov/Desktop/modern-per/scratch/check_page.js`

---

## Next Steps / Future Enhancements

- Review responsiveness across diverse mobile devices and tablets.
- Verify scroll speeds and durations of other sections.
