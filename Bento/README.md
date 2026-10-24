# Tralance — Bento Grid UI Landing Page

A complete, production-ready landing page for **Tralance — Freelance Income & Expense Tracker**, designed using modern **Bento Grid UI** principles.

## Design Highlights

- **Modular Bento Grid**: Asymmetrical yet balanced composition with varying card spans (12-column foundation).
- **Subtle Borders & Radius**: 20px rounded corners with 1px border lines and gentle hover elevations.
- **Purposeful Color Accents**: Indigo brand accent, Emerald for positive cashflow, Rose for business expenses, Amber for pending invoices, and Sky for local data sovereignty.
- **Dual Themes**: Complete light and dark themes with localStorage persistence and OS preference detection.
- **Real Screenshot Integration**: Strict empty area fallback in `ProductPreviewBento.jsx` until user adds `Bento/public/images/tralance-preview.png`.

## Running the Project

```bash
cd Bento
npm install
npm run dev
```

## Build and Lint

```bash
npm run lint
npm run build
```

## Adding the Product Screenshot

Place your Android app screenshot at:
`Bento/public/images/tralance-preview.png`
