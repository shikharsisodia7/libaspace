# JobNova Product Marketing Take-Home

Candidate: Shikhar Sisodia

This repository contains a submission-ready product marketing and growth take-home for Liba Space / JobNova.

## Challenge summary

The work covers two required areas:

- A LinkedIn acquisition strategy: competitive-content analysis, an original JobNova post and creative, audience definition, engagement hypothesis, and measurement plan.
- In-network marketing research: four verified Santa Clara University channels with activation ideas and clear attend / partner / sponsor recommendations.

## Strategic thesis

JobNova should market job-search execution: help candidates reduce repetitive discovery and application work while keeping their judgment for preparation, portfolio work, outreach, and interviews. The work avoids promising interviews, jobs, or response rates.

## Deliverables

- [`SUBMISSION.md`](./SUBMISSION.md) - self-contained written submission
- [`app/page.tsx`](./app/page.tsx) - responsive report site
- [`research/jobnova-product-research.md`](./research/jobnova-product-research.md) - public-product claim review
- [`research/linkedin-post-analysis.md`](./research/linkedin-post-analysis.md) - linked competitive post analysis
- [`content/jobnova-linkedin-post.md`](./content/jobnova-linkedin-post.md) - original post draft
- [`public/submission-assets/jobnova-linkedin-creative.svg`](./public/submission-assets/jobnova-linkedin-creative.svg) - 1080 x 1350 supporting creative
- [`VIDEO_SCRIPT.md`](./VIDEO_SCRIPT.md) - 3-4 minute walkthrough script
- [`SUBMISSION_EMAIL.md`](./SUBMISSION_EMAIL.md) - concise submission email

## Technical stack

Next.js, React, TypeScript, and CSS. The project is static and requires no environment variables or server-side secrets.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Repository structure

- `app/` - application and styles
- `components/` - reusable citation component
- `content/` - original campaign copy
- `data/` - structured source ledger
- `research/` - research notes and claim discipline
- `public/submission-assets/` - public creative and connection-screenshot instructions
- `tests/` - source-ledger integrity test

## Source method

JobNova descriptions are attributed to JobNova where they are company marketing claims. Public LinkedIn signals are only reported when visible on the linked post at the stated access date. Campus-channel claims use official Santa Clara University sources wherever possible.

## Deployment

Vercel will auto-detect Next.js. Import the GitHub repository, keep the default build command (`npm run build`), and deploy. No environment variables are required. The metadata intentionally requests `noindex, nofollow` because this is a private candidate submission.

## Remaining manual requirement

The take-home requests an authentic LinkedIn connection-count screenshot. Follow [`ACTION_REQUIRED.md`](./ACTION_REQUIRED.md); the site renders `public/submission-assets/linkedin-connections.png` automatically once it is added.
