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

1. **Editorial Break Height Reduction**:
   - Refactored `components/EditorialBreakSection.tsx` from a full-height `h-screen` overlay to a vertical band/strip (`h-[55vh]` at `top-[22.5vh]`).
   - Adjusted typography and margins inside the component to scale correctly within the new horizontal layout box.
2. **Sliding Colored Background Bands & Inset Reveal**:
   - Implemented a horizontal letterbox reveal (`clipPath: "inset(50% 0% 50% 0%)"` to `inset(0% 0% 0% 0%)`) on `.eb-center-band`.
   - Included top green band (`#467235`, `22.5vh`) sliding down from above (`yPercent: -100` to `0`) and bottom red band (`#BD4444`, `22.5vh`) sliding up from below (`yPercent: 100` to `0`).
3. **Transition Easing and Durations Optimization**:
   - Removed the video section opacity animation completely, keeping the looping video fully visible under the transparent gaps until the colored bands slide in and cover it, eliminating the cream background bleed-through.
   - Converted the `.eb-center-band` entrance tween to an explicit GSAP `.fromTo()` starting from `{ clipPath: "inset(50% 0% 50% 0%)" }` to ensure it animates from a height of 0 on every scroll without any sudden popping or flashing.
   - Overlapped the colored bands' entrance: they slide in sequentially starting when the center band is 60% open. The top green band starts sliding down at `2.33` (duration `0.24s`), and the bottom red band starts sliding up at `2.49` (duration `0.24s`).
   - Retimed the exit sequence starting at `2.92` with a `0.24` duration collapse and slide-out.
4. **Verified Build Integrity**:
   - Successfully compiled the Next.js application with zero TypeScript warnings or errors (exit code 0).

---

## Development Environment Info

- **Python Virtual Environment**: `/home/sourov/Desktop/modern-per/.venv`
- **Latest background removal script**: `/home/sourov/Desktop/modern-per/scratch/process_standing.py`
- **Diagnostic check script**: `/home/sourov/Desktop/modern-per/scratch/check_page.js`

---

## Next Steps / Future Enhancements

- Confirm client feedback on the horizontal letterbox connector feel.
- Ensure all elements interact properly in highly scaled desktop resolutions.
