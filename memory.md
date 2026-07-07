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

---

## Development Environment Info
- **Python Virtual Environment**: `/home/sourov/Desktop/modern-per/.venv`
- **Latest background removal script**: `/home/sourov/Desktop/modern-per/scratch/process_standing.py`

---

## Next Steps / Future Enhancements
- Fine-tune transition animations between initial state and scrolled state.
- Test responsiveness across mobile viewports.
