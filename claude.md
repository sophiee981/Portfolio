# Designer Portfolio — Build Guide

This document is the authoritative guide for building this portfolio website. **Design fidelity and consistency over feature breadth.** Complete one page perfectly before moving to the next.

---

## Core Principles

1. **Dark theme is law** — Every decision serves the dark, moody aesthetic. No light mode fallback.
2. **No dead UI** — Every button, link, and interactive element must be functional or not exist.
3. **Depth over breadth** — One polished page beats four half-finished ones.

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Neutral base theme) |
| Routing | React Router v6 |
| State | useState / useContext (no external state lib needed) |
| Build | Vite |
| Data | Local mock data files — no backend, no API calls |

All color values **must** be registered in `tailwind.config.ts` with semantic names. Never use inline hex codes.

---

## Routes

| Priority | Route | Page | Description |
|---|---|---|---|
| P0 | `/` | Home | Hero, featured projects, footer |
| P0 | `/projects` | Projects | Full grid + category filter |
| P1 | `/about` | About | Bio, skills (Badges), timeline |
| P1 | `/contact` | Contact | Email copy + social links |
| P2 | `*` | 404 | Not found screen |

---

## Design System

### Colors
- Dark theme only — use Tailwind `dark:` prefix throughout.
- **Primary/Accent color** must be color-picked from Ezhil Arasan's Wall of Portfolios and registered as `colors.accent` in `tailwind.config.ts`.
- Never hardcode hex values in JSX or CSS — always reference the token.

### Typography
- Font family must be cloned from the same reference. Register in `tailwind.config.ts`.
- Scale: use Tailwind's default type scale (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-4xl`, `text-6xl`).
- Line height: 1.5–1.75 for body text.

### Spacing & Layout
- Spacing rhythm: multiples of 4px (Tailwind default scale).
- CSS Grid for complex layouts (`grid grid-cols-*`).
- Max content width: wrapped in `PageWrapper` component.

### Transitions & Animations
- Use Tailwind utilities only: `transition duration-150 ease-in-out`.
- Hover states on all cards and buttons.
- No complex JS-driven animations — scope cut if behind.

---

## Component Architecture

```
src/
├── components/
│   ├── ui/              ← shadcn/ui primitives (Button, Badge, Avatar, Skeleton, Card)
│   └── layout/          ← Navbar, Footer, PageWrapper
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── mock-data/
│   ├── projects.ts      ← Project objects
│   └── experience.ts    ← Work history objects
└── types/
    └── index.ts         ← All TypeScript interfaces
```

### shadcn/ui Components in Use
- `Button` — variants: default, ghost, outline
- `Badge` — for skill tags on About page
- `Avatar` — for profile picture
- `Skeleton` — for image loading states
- `Card` — for project cards (if not custom-built)

---

## Mock Data Schemas

### `projects.ts`
```ts
export interface Project {
  id: string
  title: string
  thumbnail: string      // URL or local path
  category: 'UI-UX' | 'Branding' | 'Motion'
  description: string
  featured: boolean      // true = show on Home hero grid
}
```

### `experience.ts`
```ts
export interface Experience {
  role: string
  company: string
  duration: string       // e.g. "Jan 2022 – Present"
  type: 'work' | 'education'
  bullets: string[]
}
```

---

## Page Specs

### Home `/`
- Sticky Navbar with designer name + nav links
- Hero: large headline, subtext (years of experience + impact), "View Work" CTA
- Featured Projects: grid of 3–4 `featured: true` projects from mock data
- Footer: Behance, Dribbble, LinkedIn, X + copyright

### Projects `/projects`
- Page header
- Filter Bar: tabs — All / UI-UX / Branding / Motion
- Project Grid: large thumbnail cards, title, category badge
- Hover: dark overlay + "View Project" prompt appears

### About `/about`
- Avatar (shadcn/ui `Avatar`) + professional bio paragraph
- Skills & Tools: rendered as shadcn/ui `Badge` components
- Experience Timeline: clean vertical list from `experience.ts`

### Contact `/contact`
- Email display with **"Copy my mail"** button → shows "Copied!" for 2 seconds
- Social links: LinkedIn, Behance, Dribbble, X — large and clearly clickable
- No contact form (explicitly out of scope)

### 404 `*`
- Simple, on-brand error screen
- "Go back home" link

---

## Interaction Standards

| Interaction | Behaviour |
|---|---|
| Copy email | Shows "Copied!" feedback for 2 seconds, then reverts |
| Project filter | Tab click instantly re-filters grid (no loading state needed) |
| Card hover | Dark overlay appears with smooth `transition duration-150` |
| Button hover | `opacity-90` or border/bg change — always visible feedback |
| Nav scroll | Navbar background appears/darkens on scroll (backdrop-blur) |

---

## Code Standards

- **Naming:** Components `PascalCase`, hooks `camelCase` with `use` prefix
- **Imports:** Always use `@/` alias, never relative `../../../`
- **TypeScript:** Strict mode, no `any`, no `@ts-ignore`
- **Styling:** Tailwind only — no `style={{}}` attributes, no inline hex
- **Data:** All data from mock files — no hardcoded strings in JSX
- **console.log:** Not allowed in committed code

### Prohibited
```
❌ any types
❌ Raw hex colors in JSX/TSX
❌ style={{ }} attributes
❌ <div onClick> — use <button>
❌ Buttons without handlers
❌ Hardcoded data in JSX
❌ console.log()
❌ @ts-ignore
❌ Placeholder/lorem text in final UI
```

---

## Build Roadmap

| Phase | Goal | Done when |
|---|---|---|
| **Phase 0** | Setup: Tailwind config, shadcn/ui init, color + font tokens, React Router | `npm run dev` runs, tokens defined |
| **Phase 1** | Core pages: Home, Projects, About, Contact with mock data | All 4 routes render with real mock data |
| **Phase 2** | Logic: category filter, email copy button | Filter works, copy shows feedback |
| **Phase 3** | Polish: dark theme contrast, responsive (375px, 768px, 1280px) | Looks right at all breakpoints |
| **Phase 4** | Pre-launch: audit flow, remove dead code, zero TS errors | `npm run build` clean, checklist passed |

---

## Pre-Launch Checklist

**Functional**
- [ ] All 5 routes work (`/`, `/projects`, `/about`, `/contact`, `*`)
- [ ] Project category filter works
- [ ] Email copy button shows "Copied!" feedback

**Design Fidelity**
- [ ] Dark theme consistent on all pages
- [ ] Accent color matches reference (color-picked)
- [ ] Typography matches reference font

**Quality**
- [ ] Zero TypeScript errors (`tsc --noEmit`)
- [ ] Zero console errors in browser
- [ ] Responsive at 375px, 768px, 1280px
- [ ] No placeholder text in UI

---

## Scope Cuts (If behind schedule)

**Can cut:**
1. Complex scroll animations → use basic Tailwind hover transitions only
2. Project filtering → show all projects in a static grid

**Never cut:**
- ✅ All 4 core pages: Home, Projects, About, Contact
- ✅ Exact typography + accent color from reference
- ✅ Polished dark theme
- ✅ Basic mobile responsiveness
