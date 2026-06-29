<p align="center">
  <img src="docs/logo.png" alt="Smokehouse" width="280" />
</p>

<h1 align="center">Smokehouse Landing Page</h1>

<p align="center">
  <strong>Unofficial redesign concept</strong> for <a href="https://www.smokehouse.cz/">Smokehouse</a> — premium shisha lounge & restaurant in Prague.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Design%20Concept-gold?style=flat-square" alt="Design Concept" />
  <img src="https://img.shields.io/badge/Official%20site-smokehouse.cz-orange?style=flat-square" alt="Official site" />
</p>

> **⚠️ Disclaimer** — This is **not** the official Smokehouse website. It is a personal portfolio project / UI-UX case study. The author is **not affiliated** with Smokehouse or MATEA Restaurants s.r.o. Brand assets and content are used for demonstration only. See [DISCLAIMER.md](DISCLAIMER.md) for full details.

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-12-0055FF?style=flat-square" alt="Framer Motion" />
  <img src="https://github.com/Zirvey/smokehouse-desing/actions/workflows/ci.yml/badge.svg" alt="CI" />
</p>

<br />

<p align="center">
  <img src="docs/hero.png" alt="Smokehouse — hero section" width="100%" />
</p>

<br />

## Overview

A dark, premium **landing page concept** for **Smokehouse** with three Prague locations. Built as a modern alternative to the [current website](https://www.smokehouse.cz/) — keeping brand identity, original photos, and Czech content while adding smooth animations and a cleaner layout.

**Purpose:** portfolio piece, design exploration, and front-end case study. Not intended for production use by the brand without permission.

| | |
|---|---|
| **Type** | Unofficial redesign concept · UI/UX case study |
| **Brand** | Dark lounge aesthetic, gold accents, original Smokehouse logo (demo use) |
| **Content** | Czech language, 3 branches, menu, loyalty program, e-shop |
| **Assets** | Photos sourced from [smokehouse.cz](https://www.smokehouse.cz/) for illustration |

## Features

- **Hero** — parallax background, glowing ember particles, CTA buttons
- **Locations** — Klimentská, Italská, Ortenovo náměstí with real branch photos
- **Menu & Reservations** — split CTA blocks with hover effects
- **Loyalty program** — original poster from the official site
- **Features & About** — brand story and lounge highlights
- **E-shop banner** — link to [smokehouseshop.cz](https://www.smokehouseshop.cz/)
- **Responsive** — mobile-first layout, sticky navbar, scroll animations

## Screenshots

### Hero

<p align="center">
  <img src="docs/hero.png" alt="Hero — 3 pobočky, ember glow, CTA buttons" width="100%" />
</p>

### Pobočky

<p align="center">
  <img src="docs/locations.png" alt="Locations — three Prague branches" width="100%" />
</p>

### Menu & Rezervace

<p align="center">
  <img src="docs/cta.png" alt="Menu and reservation CTA blocks" width="100%" />
</p>

### Věrnostní program

<p align="center">
  <img src="docs/loyalty.png" alt="Loyalty program section" width="100%" />
</p>

### Premium experience

<p align="center">
  <img src="docs/features.png" alt="Features — premium shisha experience section" width="100%" />
</p>

### E-shop & O nás

<p align="center">
  <img src="docs/about.png" alt="E-shop banner and about section" width="100%" />
</p>

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | [Next.js 15](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Font | Montserrat (Proxima Nova alternative) |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
git clone https://github.com/Zirvey/smokehouse-desing.git
cd smokehouse-desing
npm install
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

### Deploy (GitHub Pages)

The site deploys automatically via GitHub Actions when pushed to `main`.  
Live demo: **https://zirvey.github.io/smokehouse-desing/** *(requires public repository)*

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
├── public/
│   ├── images/          # Hero, menu, e-shop assets
│   ├── locations/       # Branch photos (from smokehouse.cz)
│   └── logo.png         # Official Smokehouse logo
├── src/
│   ├── app/             # Next.js app router
│   ├── components/      # UI sections (Hero, Navbar, Footer…)
│   └── lib/images.ts    # Image path constants
└── docs/                # README screenshots
```

## Sections

| Section | ID | Description |
|---------|-----|-------------|
| Úvod | `#uvod` | Hero with 3 branches |
| Pobočky | `#pobocky` | Location cards |
| Menu | `#menu` | Food & drinks CTA |
| Věrnost | `#vernost` | Loyalty program |
| O nás | `#onas` | Brand story |
| Kontakt | `#kontakt` | Footer & contacts |

## Author

**Zirvey** — [GitHub](https://github.com/Zirvey)

## Legal

This project is licensed under the [MIT License](LICENSE).  
Brand trademarks belong to their respective owners — see [DISCLAIMER.md](DISCLAIMER.md).

---

<p align="center">
  <sub>Design concept · Unofficial redesign · Not affiliated with <a href="https://www.smokehouse.cz/">smokehouse.cz</a></sub>
</p>
