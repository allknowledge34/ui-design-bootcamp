# Tralance — Maximalism Edition

A high-octane, bold, expressive Maximalism landing page for Tralance, the freelancer income and expense tracking platform.

## Technology Stack

- React 19
- Vite 6
- CSS custom properties with neo-maximalist styling (no bloated UI component libraries)
- Inter font family with expressive typography hierarchy
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Themes

The landing page features full light and dark mode support:
- Light Mode: High-contrast electric yellow, cyan, pink, and lime accents with tactile neo-brutalist borders and hard offset drop shadows.
- Dark Mode: Obsidian canvas with glowing neon borders, rich dark surfaces, and vivid status chips.
- Persistent state saved to localStorage (`tralance-theme`).
- Automatically honors the system preference on initial visit.

## Product Screenshot

The project looks for the Tralance product screenshot at:

```
public/images/tralance-preview.png
```

If the file exists, it is loaded directly inside the phone device chassis. If missing or loading, the chassis renders a high-fidelity interactive fallback interface with zero layout shift.
