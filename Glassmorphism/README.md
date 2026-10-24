# Tralance — Glassmorphism Edition

A production-ready Glassmorphism landing page for Tralance, the freelancer income and expense tracking platform.

## Technology Stack

- React 19
- Vite 6
- CSS custom properties with Glassmorphism styling and backdrop-filter fallbacks
- Inter font family
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
- Light Mode: Translucent pearlescent glass (`rgba(255, 255, 255, 0.68)`) with frosted blur, specular highlights, and ambient azure lighting.
- Dark Mode: Deep obsidian and navy glass (`rgba(15, 23, 42, 0.68)`) with subtle luminous borders, soft shadows, and midnight blue ambient glows.
- Theme preference is stored in `localStorage` under `tralance-theme`.
- Automatically respects the operating system preference on the first visit.

## Product Screenshot

The project displays the Tralance product screenshot from:

```
public/images/tralance-preview.png
```

If the file exists, it is displayed inside the frosted glass browser frame. If missing or loading, the container renders an intentional glass preview interface with zero layout shift.
