# Himanshu Jangid - Personal Portfolio

A premium, single-page personal portfolio for Himanshu Jangid, built with performance and scalability in mind.

## Tech Stack

- **Build Tool:** Vite
- **Styling:** Tailwind CSS + PostCSS
- **Logic:** Vanilla JavaScript (ES Modules)
- **Icons:** SVG (Feather Icons style)
- **Fonts:** Space Grotesk (Headings), Inter (Body), JetBrains Mono (Code)

## Features

- **Single Page Architecture:** Smooth scrolling navigation with active section indicators.
- **GitHub Integration:** Fetches public repositories and generates stats (language distribution, total stars) using the GitHub REST API. Includes local caching to handle rate limits.
- **Responsive Design:** Mobile-first approach with a custom mobile menu.
- **SEO Optimized:** Meta tags, OpenGraph, Twitter Cards, and JSON-LD Schema for "Himanshu Jangid".
- **Privacy Focused:** No phone numbers or sensitive personal data exposed.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd himanshujangid.com
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` (or the port shown in the terminal).

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is a static site and can be deployed to any static hosting provider (Vercel, Netlify, GitHub Pages, Hostinger, etc.).

1. Run `npm run build`.
2. Upload the contents of the `dist` folder to your hosting provider's public directory (e.g., `public_html` or root).

## Privacy & Compliance

**Confirmed:** No phone number exists anywhere in this website (including metadata, schema, code comments, or output).
