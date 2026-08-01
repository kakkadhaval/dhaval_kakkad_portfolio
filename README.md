# Dhaval Kakkad — Portfolio

A minimal, premium personal website built for a mechanical engineer and CFD
researcher. Dark by default, typography-led, and built around one signature
visual: a quiet field of streamlines behind the hero, a nod to computational
fluid dynamics without literal iconography.

## Design system

| Token | Value |
|---|---|
| Background | `#0A0A0B` |
| Surface | `#131316` |
| Border (subtle) | `#1C1C20` |
| Border | `#232327` |
| Foreground | `#F4F4F3` |
| Muted | `#9A9AA4` |
| Accent | `#7B9CD9` |

Display face: **Manrope** · Body face: **Inter** · Utility/mono: **IBM Plex Mono**
(loaded via `next/font/google`, self-hosted automatically by Next.js — no
external font requests at runtime).

## Folder structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Fonts, metadata, navbar/footer shell
│   │   ├── page.tsx            # Home
│   │   ├── globals.css
│   │   ├── loading.tsx         # Route-level loading skeleton
│   │   ├── error.tsx           # Client error boundary
│   │   ├── not-found.tsx       # Custom 404
│   │   ├── sitemap.ts          # Generates /sitemap.xml
│   │   ├── robots.ts           # Generates /robots.txt
│   │   ├── about/page.tsx
│   │   ├── research/page.tsx
│   │   ├── projects/page.tsx
│   │   └── contact/page.tsx
│   ├── components/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   ├── fade-in.tsx
│   │   ├── streamline-background.tsx   # Signature hero visual
│   │   ├── section-heading.tsx
│   │   ├── timeline.tsx
│   │   ├── skill-card.tsx
│   │   ├── publication-card.tsx
│   │   ├── project-card.tsx
│   │   ├── project-filter.tsx
│   │   └── contact-form.tsx
│   ├── lib/
│   │   ├── data.ts              # All content: education, skills, publications, projects
│   │   └── utils.ts             # `cn()` class-merge helper
│   └── types/index.ts
├── public/cv/                   # Add your real CV PDF here
├── tailwind.config.ts
├── next.config.mjs
└── package.json
```

## Installation

Requires Node.js 18.17 or later.

```bash
cd portfolio
npm install
```

## Run locally

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Framework preset: **Next.js** (auto-detected). No environment variables are
   required for the current feature set.
4. Deploy. Vercel will build and host it on a `*.vercel.app` domain, or attach
   your own domain under Project Settings → Domains.
5. Update `siteUrl` in `src/app/layout.tsx`, `src/app/sitemap.ts`, and
   `src/app/robots.ts` to match your final domain before going live.

## Before going live — checklist

- [ ] Add a real CV PDF at `public/cv/dhaval-kakkad-cv.pdf` (referenced by the
      "Download CV" button on the homepage).
- [ ] Replace the placeholder social links in `src/components/footer.tsx`
      with real LinkedIn / GitHub / Google Scholar / ResearchGate URLs.
- [ ] Confirm publication DOIs in `src/lib/data.ts` once assigned, and update
      the "In Preparation" entry as it progresses.
- [ ] Add a real `favicon.ico` to `src/app/`.
- [ ] Wire the contact form to a real email service (see below) instead of
      the current `mailto:` fallback.
- [ ] Update `siteUrl` across metadata files to the production domain.

## Suggested improvements

- **Contact form backend**: replace the `mailto:` fallback in
  `contact-form.tsx` with a serverless route (e.g. a Next.js Route Handler
  calling Resend, Postmark, or a Google Form/Sheets webhook) so messages land
  directly in an inbox without depending on the visitor's own mail client.
- **CMS-driven content**: move `src/lib/data.ts` into a lightweight headless
  CMS (Sanity, Contentful, or even a local MDX/JSON pipeline) once
  publications and projects are updated often enough that redeploying for
  every edit becomes friction.
- **Case study pages**: give each project a full `/projects/[slug]` page with
  more detail, figures, and (once available) links to code or documentation.
- **Light mode**: the design tokens are centralized in `tailwind.config.ts`
  and `globals.css`, so a light theme can be added later via a `data-theme`
  attribute and a parallel token set, without touching component markup.
- **Analytics**: add Vercel Analytics or Plausible for privacy-respecting
  traffic insight.

## Best practices for expanding the site

- Keep all real content in `src/lib/data.ts` — components should stay
  presentational and pull from this single source of truth.
- Reuse `FadeIn` for any new scroll-triggered section rather than writing new
  `framer-motion` variants, to keep the motion language consistent.
- Any new accent color or spacing value should be added to
  `tailwind.config.ts` as a named token, not used as a one-off arbitrary
  value, to preserve the design system's consistency.
- Run `npm run lint` before shipping changes.
