# Wajeeha Asad — Cinematic Netflix Portfolio v3

A dark, cinematic React + TypeScript + Vite portfolio that combines:

- the uploaded Wajeeha hero image as the actual hero background
- Netflix-inspired featured-project cards with poster artwork, hover reveal, match score, ratings and carousel controls
- separate GitHub/source and live-project links for every project
- horizontally sliding skill cards with category filters and proficiency bars
- an MD Yusuf-inspired white process section with punched ticket cards, a dashed scroll path and active card states
- experience, recognition and current-learning sections
- a complete contact form wired to Formspree via `VITE_FORMSPREE_ENDPOINT`
- responsive navigation and mobile layouts

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Formspree setup

Create a form in your Formspree dashboard, copy its unique endpoint, then create a local `.env` file from `.env.example`:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

The form already includes named fields, POST submission, a subject line and a hidden honeypot field. Replace `YOUR_FORM_ID` with your real endpoint before deployment.

## Main files

- `src/main.tsx` — portfolio content and interactions
- `src/styles.css` — complete visual system and responsive styles
- `public/assets/hero-wajeeha.png` — uploaded hero image
- `public/assets/projects/*.svg` — local project cover artwork

## Project links

- NeuraTrack — GitHub + live Vercel app
- Skill Gap Predictor — GitHub + live Vercel app
- Luxe & Latte — GitHub + live GitHub Pages app
- Velora — GitHub + live Vercel app
- Student Performance Prediction — GitHub + live Streamlit app
