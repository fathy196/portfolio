# Fathy Abdelkader — Portfolio

Personal portfolio of Fathy Abdelkader, Backend Developer (PHP · Laravel · REST APIs).
Live at **https://fathy196.github.io/portfolio/**

Built with Next.js 15 (App Router, static export) and React 19.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000/portfolio/
npm run build      # static site in ./out
```

## Editing content

All content (experience, projects, skills, education, links) lives in [`lib/data.ts`](lib/data.ts).
Each project there automatically gets its own case study page, a sitemap entry, and structured data.

To update the CV, replace `public/Fathy-Abdelkader-Backend-Dev-CV.pdf`.
To change the photo, replace `public/me.jpg` and run `node scripts/optimize-images.mjs`.

## SEO

- Per-page titles, descriptions, canonical URLs, Open Graph and Twitter cards
- JSON-LD: `Person` (home), `SoftwareSourceCode` + `BreadcrumbList` (project pages)
- `sitemap.xml`, `robots.txt`, web manifest
- Self-hosted fonts, WebP images, no layout shift, light/dark theme without flash

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
