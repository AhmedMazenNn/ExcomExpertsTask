# EcomExperts — Bundle Builder

A responsive multi-step bundle builder for home security systems. Built with React, TypeScript, and Tailwind CSS.

## Features

- **4-step accordion builder** — Choose cameras, a plan, sensors, and add-on protection. Step 1 expands by default.
- **Live review panel** — "Your Security System" sidebar updates totals and line items in real time as selections change.
- **Product variant selector** — Color/option chips let you switch between variants. Each variant tracks its own quantity.
- **Quantity sync** — Steppers on product cards and the review panel stay in sync.
- **Responsive design** — Desktop matches the Figma layout; collapses to a stacked single-column view on tablets and phones.
- **Persistence** — "Save my system for later" serialises the full configuration to `localStorage`. Returning restores the exact state.
- **Data-driven** — All products, plans, and add-ons come from a single JSON source (`src/data.ts`). No hardcoded per-product markup.

## Tech Stack

| Tool | Purpose |
|---|---|
| React 19 | UI framework |
| TypeScript | Type safety |
| Vite 8 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| class-variance-authority | Component variant API (Badge) |

## Project Structure

```
src/
├── assets/
│   ├── fonts/       # Gilroy typeface (400/500/600/700)
│   └── images/      # Product photos & satisfaction badge
├── components/
│   └── checkout/
│       ├── CameraCard.tsx       # Product card with color variants & qty
│       └── CheckoutSummary.tsx  # Review panel & line items
├── lib/
│   └── utils.ts                # cn() helper (clsx + tailwind-merge)
├── pages/
│   ├── Index.tsx               # Main page: accordion, state, localStorage
│   └── NotFound.tsx            # 404 fallback
├── data.ts                     # Product/plan/add-on dataset
├── types.ts                    # Shared TypeScript interfaces
├── index.css                   # Tailwind directives, CSS variables, font-face
├── App.tsx                     # Root component
└── main.tsx                    # Entry point
```

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Design Decisions & Trade-offs

### What's included
- **localStorage persistence** — The "Save my system for later" button serialises cameras (with per-variant quantities), the selected plan, sensors, and protections. On page load the saved state is restored if present.
- **Inline SVG icons** — Step icons, plane icon, and arrow are inlined as JSX components rather than external files, avoiding import/routing issues and reducing HTTP requests.
- **Per-variant quantities tracked** — The `Camera` type supports a `colors` array; each color option is tracked as part of the camera's data. The quantity stepper always reflects the currently selected variant.

### What's not (yet)
- **Per-variant pricing** — Variants currently share the same price. A future enhancement could store different prices per variant.
- **Backend API** — Data is served from a local JSON source (`data.ts`). The specification noted that an API backend is a bonus, not a requirement.
- **Figma-perfect pixel alignment** — Every effort was made to match spacing, typography, colour, and radii, but some micro‑adjustments may differ from the Figma at extreme viewport sizes.

## License

Private — internal take-home assessment.
