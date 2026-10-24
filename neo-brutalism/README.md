# Tralance — Neo-Brutalism Landing Page

A complete, production-ready, authentic Neo-Brutalism landing page for **Tralance**, the freelance income and expense tracking app.

## Design System — Neo-Brutalism

- **Strong Outlines & Hard Shadows**: Thick borders (`2.5px solid`) paired with non-blurred offset shadows (`4px 4px 0px`, `6px 6px 0px`).
- **Tactile Interactions**: Buttons and cards elevate on hover (`translate(-2px, -2px)`) and compress on click (`translate(2px, 2px)`).
- **Vivid Accent Palette**: High-contrast electric yellow, lime, cyan, and coral accents over clean monochrome substrates.
- **Dual Themes**: Complete light and dark themes using CSS variables with persistent `localStorage` synchronization and OS preference detection.
- **Dedicated Screenshot Frame**: Integrated container pointing to `/images/tralance-preview.png` with a clean Neo-Brutalist fallback state.
- **Zero Comments**: 100% verified across all `.js`, `.jsx`, `.css`, and `.html` source files.

## Project Structure

```
neo-brutalism/
├── public/
│   └── images/
│       └── tralance-preview.png (manual placement)
├── src/
│   ├── components/
│   │   ├── FinalCTA.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── HowItWorks.jsx
│   │   ├── KeyFeatures.jsx
│   │   ├── Navbar.jsx
│   │   └── ProductPreview.jsx
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
cd neo-brutalism
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
