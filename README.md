# Safé Selmi — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) *(optional components)*
- Fonts: DM Serif Display, DM Mono, Outfit via Google Fonts

---

## Getting Started

### 1. Create the project

```bash
npx create-next-app@latest safe-selmi-portfolio \
  --typescript --eslint --tailwind --src-dir --app --turbopack --import-alias "@/*"
cd safe-selmi-portfolio
```

### 2. Copy the files

Replace / create these files with the ones provided:

```
src/
  app/
    globals.css       ← replace
    layout.tsx        ← replace
    page.tsx          ← replace
  components/
    Navbar.tsx        ← new
    Hero.tsx          ← new
    About.tsx         ← new
    Projects.tsx      ← new
    Skills.tsx        ← new
    Experience.tsx    ← new
    Contact.tsx       ← new
tailwind.config.ts    ← replace
tsconfig.json         ← replace
```

### 3. (Optional) Add shadcn/ui

```bash
npx shadcn@latest init
npx shadcn@latest add button card badge
```

### 4. Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Customize

| File | What to edit |
|------|-------------|
| `components/Hero.tsx` | Name, title, description, button links |
| `components/Projects.tsx` | Project titles, descriptions, tech tags, links |
| `components/Skills.tsx` | Skill groups and pill labels |
| `components/Experience.tsx` | Jobs, dates, descriptions |
| `components/Contact.tsx` | Email, GitHub, LinkedIn URLs |
| `app/layout.tsx` | Page title and meta description |

Add your CV file as `public/cv.pdf` so the Download CV button works.

---

## Deploy on Vercel

```bash
git init
git add .
git commit -m "Initial portfolio setup"
# Push to GitHub, then import on vercel.com
```

Live URL will be: `safe-selmi-portfolio.vercel.app`
