# Wajeeha Asad — Developer Portfolio

> A cinematic, responsive portfolio showcasing AI/ML, full-stack, frontend, and data-driven projects.

**Live Portfolio:** https://wajeehaasad-portfolio.vercel.app

## Overview

This repository contains the source code for my personal developer portfolio. The site presents my projects, technical skills, development process, experience, learning journey, and contact information in a polished, product-focused interface.

The portfolio combines a dark cinematic visual system with editorial layouts and interactive project cards to make the work easy to explore.

## Highlights

- Cinematic hero section with a personalized visual
- Featured project cards with previews, technology tags, ratings, and live/source links
- Responsive project carousel and mobile-friendly layouts
- Categorized skills section with proficiency indicators
- Dedicated **Discover → Design → Build → Refine** process section
- Experience, recognition, and current-learning sections
- Downloadable CV / resume
- Responsive navigation and layouts across desktop and mobile
- Contact form powered by Formspree
- Environment-based configuration for the contact form endpoint

## Featured Projects

| Project | Focus | Stack | Demo |
| --- | --- | --- | --- |
| **NeuraTrack** | AI / Full Stack | React, FastAPI, PostgreSQL, Supabase | [Live](https://neuratrack-app.vercel.app) |
| **Skill Gap Predictor** | AI / Career Intelligence | Python, Flask, scikit-learn | [Live](https://skill-gap-predictor.vercel.app) |
| **Luxe & Latte** | Frontend / Editorial UI | HTML, CSS, JavaScript | [Live](https://wajeeha-asad.github.io/Luxe-Latte-Premium-Coffee-Experience/) |
| **Velora** | Frontend / E-commerce | React, Vite, JavaScript, CSS | [Live](https://velora-atelier-e-com.vercel.app) |
| **Student Performance Prediction** | ML / Data Science | Python, Pandas, scikit-learn, Streamlit | [Live](https://ml-student-performance-prediction.streamlit.app) |

Project cards in the portfolio also link directly to their individual GitHub repositories.

## Tech Stack

### Frontend

- React 19
- TypeScript
- Vite
- HTML5 / CSS3
- Responsive design

### Integrations

- Formspree
- Vercel deployment

### Development Tools

- Git & GitHub
- VS Code
- npm

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/wajeeha-asad/wajeehaasad_Portfolio.git
cd wajeehaasad_Portfolio
npm install
```

Start the development server:

```bash
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Contact Form Setup

The contact form uses Formspree and reads its endpoint from an environment variable.

Create a `.env` file in the project root:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

Use `.env.example` as the template. Do **not** commit your real `.env` file or any secrets.

## Project Structure

```text
wajeehaasad_Portfolio/
├── public/
│   └── assets/
│       ├── projects/
│       └── ...
├── src/
│   ├── main.tsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

## Design & Engineering Approach

The portfolio is built to demonstrate how I approach digital products:

1. **Discover** — understand the problem, users, and constraints.
2. **Design** — shape the interface, flow, and visual direction.
3. **Build** — implement maintainable components and functionality.
4. **Refine** — test, polish, improve responsiveness, and ship.

## Deployment

The portfolio is deployed on Vercel and built with Vite.

**Live:** https://wajeehaasad-portfolio.vercel.app

## About Me

I'm Wajeeha Asad, a Computer Science student focused on becoming an AI Engineer. I enjoy building practical software that combines AI/ML, Python, modern web technologies, and thoughtful user experiences.

I'm currently building toward opportunities in **AI Engineering, Python development, and full-stack development**.

## Connect

- **GitHub:** https://github.com/wajeeha-asad
- **LinkedIn:** https://www.linkedin.com/in/wajeeha-asad/
- **Portfolio:** https://wajeehaasad-portfolio.vercel.app

## License

This project is a personal portfolio. The source code is available for learning and reference, but portfolio-specific content, images, branding, and personal assets should not be reused without permission.
