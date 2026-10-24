# Tralance — Swiss / International Typographic Style Landing Page

A complete, production-ready landing page for **Tralance — Freelance Income & Expense Tracker**, designed using authentic **Swiss / International Typographic Style** principles.

## Design Philosophy

- **Mathematical Grid**: Strict 12-column layout and hairline 1px dividers.
- **Typographic Hierarchy**: High-contrast grotesque typography using Inter with tight letter-spacing for headlines and tabular figures for numbers.
- **Restrained Palette**: Stark monochrome (black, white, neutral grays) punctuated by one controlled International Swiss Red accent.
- **Functional Information Design**: Clear data inspectors, transaction ledgers, milestone pipelines, and receivable status radars.
- **Zero Decoration**: No gradients, no glassmorphism, no rounded bubbles, no neumorphic bevels.
- **Dual Themes**: Complete light and dark themes with persistent localStorage sync and OS preference detection.

## Project Structure

```
Swiss/
├── public/
│   └── images/
│       └── tralance-preview.png   (User adds actual screenshot here)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── StandardsTicker.jsx
│   │   ├── CoreSplit.jsx
│   │   ├── AlternatingFeatures.jsx
│   │   ├── ProductPreview.jsx
│   │   ├── FinancialMatrix.jsx
│   │   ├── FinalCTA.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   └── useTheme.js
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
```

## Running the Application

```bash
cd Swiss
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
`Swiss/public/images/tralance-preview.png`

The image frame in `ProductPreview.jsx` will automatically detect, render, and scale the real screenshot without distortion.
