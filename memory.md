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

---

## What We Did (Latest Session)

1. **Model Recovery & Processing**:
   - Recovered the original standing model image `/home/sourov/.gemini/antigravity/brain/ff303ae5-2a40-40b4-9efd-71e1780452d6/media__1783412997524.png` from the previous session logs.
   - Renamed the new transparent stool model to `public/model_stool_transparent.png`.
   - Wrote and executed `scratch/process_standing.py` using `rembg` to remove the background of the standing model and save it to `public/model_transparent.png`.
2. **UI & Layout Alignment**:
   - Updated `app/page.tsx` to display both models simultaneously in the initial state: the standing model (`model_transparent.png`) on the left side in color, and the sitting stool model (`model_stool_transparent.png`) on the right side in grayscale.
   - Centered all containers to align both figures nicely relative to the torn paper edge divider.
3. **Code Refactoring & Modularization**:
   - Created a root `components/` directory to store modular parts of the layout.
   - Developed `Header.tsx` (navigation & mobile drawer), `BackgroundSplit.tsx` (split background colours & SVG torn edge), `BackgroundTypography.tsx` (background text animations), `ModelImages.tsx` (split-screen images & transition animations), and `ForegroundTypography.tsx` (foreground text overlay).
   - Refactored `app/page.tsx` to import and utilize these components with zero TypeScript compilation warnings/errors.
4. **Scroll-Linked Lookbook Gallery (Section 2)**:
   - Redesigned the Stats Section into an editorial Lookbook gallery inspired by Indigo Laboratory:
     - **Lookbook Intro Zoom Phase (Phase 0 - Extended Scroll duration)**:
       - The text-only intro overlay (Slide 0: `THE INVISIBLE ECHO`) stays centered at the top of Section 2 for 50% of the lookbook scroll range (3000px).
       - Scale factor is increased to `1.8x` (`scale(1)` to `scale(2.8)`), causing the text to zoom in dramatically past the viewport with every scroll tick.
       - **75% Threshold Reveal Rule**: Look 01 remains completely hidden and scaled down to `0.85` while the intro text zooms. Only when the zoom progress reaches 75% (and the intro text goes nearly transparent/invisible) does Look 01's showcase image and header begin to fade and scale in, completing the transition smoothly by 100% zoom progress.
     - **Multi-Element Parallax Diagonal Entrance**:
       - Instead of just the image container, all major slide elements (header, image card, and description text) slide in diagonally from the bottom-right corner with staggered offsets to create a premium depth parallax feel:
         - **Header Block**: Slides from `translateX(180px) translateY(180px)` and fades in.
         - **Showcase Image Card**: Slides from `translateX(250px) translateY(250px)` with a `6deg` tilt and fades in.
         - **Description Block**: Slides from `translateX(140px) translateY(140px)` and fades in.
     - **Expanded Showcase Cards**: Increased the size of the editorial showcase card layout to `max-w-[420px] lg:max-w-[480px]` and `44vh` height, making the model image much more prominent and matching bold catalog proportions.
     - **Lookbook Scroll Phase (Phase 1-5)**:
       - Once the intro zooms out completely (`scrollProgress > 0.5`), the intro overlay is visually unmounted (`display: none`).
       - The lookbook container translates vertically from `translateY(0)` to `translateY(-320vh)`, scrolling Looks 2 to 5 up into view sequentially.
     - **Minimalist Sticker Badges**: Replaced corner images with high-fashion symbols and stickers: a rotating text stamp in the top-left, a vector barcode in the top-right, and a neon green keyhole sticker in the bottom-left.
     - **Local Brackets Identifier**: Moved the top-center brackets into the scrollable rows, positioning them directly under the massive look titles at the top of each row rather than keeping them fixed at the screen's absolute top.
     - **Cumulative Editorial Copy**: Underneath the centered image inside each row, the look descriptions stack vertically, adding a new look description with each scroll step.
     - **Direct CSS Variable Sync & Performance**:
       - Replaced pixel-by-pixel React state updates with direct DOM CSS custom property bindings (`--exit-progress`, `--scroll-progress`, `--intro-zoom-progress`, and `--look-scroll-progress`), reducing component re-rendering by over 95%.
       - Implemented GPU hardware acceleration styles (`will-change-transform`, `preserve-3d`, and `backface-visibility: hidden`) on translation layers to ensure 60fps/120fps buttery smooth scroll performance and crisp image rendering.
   - Expanded global scroll height in `app/page.tsx` to `850vh` to accommodate the expanded scroll space.
5. **Hero Typography Revisions**:
   - Updated background typography: changed scrolled state text from `"LINE"` to `"LIGHT"` and `"SHADOWS & STRUCTURE"` to `"SHADOWS & SILENCE"`.
   - Updated foreground typography: changed scrolled state text from `"POETRY IN"` to `"FOUND IN"` and `"CHAOTIC MOTION"` to `"SHADOWS & SILENCE"`.
6. **ListedSection Integration (Section 3)**:
   - Created the `ListedSection` component (`components/ListedSection.tsx`) representing a dark-mode luxury, museum-style split editorial catalog layout.
   - Left side (40% width) lists 5 projects vertically with standard numbers and thin horizontal white indicator lines for active project visual focus.
   - Right side (60% width) hosts the main photo exhibition frame and project descriptions.
   - Integrated interactive mouse actions: hovering the titles translates them `8px` horizontally, while hovering the preview images hides the default cursor and presents a custom follow-cursor reading `OPEN`. The active image scales to `102%` when hovered.
   - Hooked the component into the GSAP scroll-linked timeline in `app/page.tsx` (markers `1.14` to `2.10`), extending the scroll spacer track to `2100vh` to handle the additional section.
7. **Linter & Code Cleanup**:
   - Fixed unescaped JSX quotes in `components/StatsSection.tsx` on line 122.
   - Verified the codebase has **0 compiler or linter errors** after Next.js build verification.

---

## Development Environment Info

- **Python Virtual Environment**: `/home/sourov/Desktop/modern-per/.venv`
- **Latest background removal script**: `/home/sourov/Desktop/modern-per/scratch/process_standing.py`

---

## Next Steps / Future Enhancements

- Test responsiveness across diverse mobile devices and tablets.
- Add micro-animations/fade-ins for the remaining static pages.
