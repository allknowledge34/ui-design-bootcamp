# Tralance — Pure Brutalism UI

A complete, production-ready landing page for **Tralance — Freelance Income & Expense Tracker** built using authentic **Brutalism web design**.

## Design System — Pure Brutalism

- **Solid Black & White Foundation**: Stark, high-contrast monochrome substrate with solid structural divisions.
- **Bold Yellow Accent**: Punchy `#ffe600` accent used purposefully on highlights, badges, and primary call-to-actions.
- **Hard Edges & Zero Radius**: Strict rectangular shapes with `border-radius: 0px` across all buttons, cards, frames, and interactive elements.
- **Heavy Borders & Hard Shadows**: Thick solid borders (`2.5px solid`) paired with non-blurred hard offset drop shadows (`4px 4px 0px`).
- **Heavy Typography**: Inter in weights 800 and 900 with uppercase editorial headings and high visual hierarchy.
- **Dual Themes**: Complete light and dark themes utilizing CSS custom properties with persistent `localStorage` storage and OS preference detection.
- **Zero Comments**: 100% verified across all `.js`, `.jsx`, `.css`, and `.html` source files.

## Project Structure

```
brutailsm/
├── public/
│   └── images/
│       └── tralance-preview.png
├── src/
│   ├── components/
│   │   ├── Features.jsx
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── Navbar.jsx
│   │   └── Showcase.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── useTheme.js
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── eslint.config.js
├── .gitignore
└── README.md
```

## Getting Started

### Development

```bash
cd brutailsm
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

### Linting

```bash
npm run lint
```
