# CLAUDE.md — Designer Portfolio

This document is the single source of truth for all development decisions on this project.

## Core Rules

1. **spec.md is authoritative** — all pages, routes, and features are defined there
2. **No dead UI** — every clickable element must produce a visible state change
3. **Dark theme only** — never build light mode variants
4. **Home page first** — complete one page fully before moving to the next

## Tech Stack

- **Framework:** React 18 + TypeScript (strict, no `any`)
- **Styling:** Tailwind CSS v4 with CSS variables design system (cloned from skill.market)
- **Components:** Custom UI primitives in `src/components/ui/` (Button, Badge, Card, Tabs, Avatar, Skeleton)
- **Routing:** React Router DOM v6
- **State:** useState/useContext only — no Redux unless 5+ pages share complex state
- **Icons:** Lucide React
- **Mock data:** Typed `.ts` files in `src/data/`
- **Build:** Vite + TypeScript

## Project Structure

```
src/
├── components/
│   ├── ui/          (Button, Badge, Card, Tabs, Avatar, Skeleton)
│   └── layout/      (Navbar, Footer, PageWrapper)
├── pages/           (Home, Projects, About, Contact, NotFound)
├── data/            (projects.ts, experience.ts, content.ts)
├── hooks/           (useFilter.ts, useCopyToClipboard.ts)
├── types/           (index.ts — shared TypeScript interfaces)
├── utils/           (cn.ts — classname helper)
├── App.tsx
└── index.css        (design system CSS variables)
```

## Pages & Routes

| Route | Priority | Status |
|-------|----------|--------|
| `/` | P0 | Home — Hero, Featured Projects, Footer |
| `/projects` | P0 | All projects + category filter |
| `/about` | P1 | Bio, Skills (Badge), Timeline |
| `/contact` | P1 | Email copy + social links |
| `*` | P2 | 404 Not Found |

## Design System (cloned from skill.market)

### Color Tokens — Dark Theme (always active)

```css
--background: #000000;
--foreground: #fafafa;
--card: #0a0a0a;
--primary: #fafafa;
--secondary: #171717;
--muted: #171717;
--muted-foreground: #a3a3a3;
--border: #262626;
--accent: #171717;
```

### Typography Scale

```
2xs: 11px / 16px
xs:  12px / 18px
sm:  13px / 20px
base:14px / 20px
md:  15px / 22px
lg:  18px / 26px
xl:  20px / 28px
2xl: 24px / 32px
3xl: 30px / 36px
4xl: 36px / 40px
5xl: 48px / 52px
6xl: 60px / 64px
```

Font: JetBrains Mono (monospace) — matches skill.market

### Border Radius

```
sm: 2px | md: 4px | lg: 6px | xl: 8px | 2xl: 10px
```

## Component Conventions

All UI components live in `src/components/ui/` and follow these patterns:

```tsx
// Always use cn() for className merging
import { cn } from '@/utils/cn'

// Use CVA for variants
import { cva, type VariantProps } from 'class-variance-authority'

// Never hardcode hex — always use CSS variables via Tailwind tokens
className="bg-card text-foreground border-border"  // ✅
className="bg-[#0a0a0a] text-white"               // ❌
```

## Data Schemas

### Project

```ts
type Project = {
  id: string
  title: string
  thumbnail: string       // URL or placeholder color
  category: 'UI-UX' | 'Branding' | 'Motion'
  description: string
  year: string
  tags: string[]
  featured?: boolean
}
```

### Experience

```ts
type Experience = {
  role: string
  company: string
  duration: string
  type: 'work' | 'education'
  description: string[]
}
```

## Critical Prohibitions

❌ `any` types
❌ Raw hex colors in JSX/TSX — use CSS tokens
❌ `<div onClick>` instead of `<button>`
❌ Dead buttons with no visible feedback
❌ Data hardcoded inline in JSX — use `src/data/`
❌ `console.log` left in code
❌ `@ts-ignore`
❌ Light mode styles
❌ Importing from `../../../` — use `@/` alias

## Build Order (follow spec.md Phase roadmap)

1. **Phase 0** — Design tokens, UI components, Router setup *(done)*
2. **Phase 1** — Home → Projects → About → Contact pages
3. **Phase 2** — Filter logic, copy-to-clipboard
4. **Phase 3** — Responsive (sm/md/lg), hover polish
5. **Phase 4** — Audit, remove unused code

## Pre-Commit Checklist

- [ ] Zero TypeScript errors (`npm run build` passes)
- [ ] All buttons/links have visible hover states
- [ ] No raw hex colors in component files
- [ ] Mock data drives all lists — nothing hardcoded in JSX
- [ ] Responsive at 375px and 1280px
- [ ] Dark theme consistent across all pages

---

**This document overrides any conflicting conventions found elsewhere in the codebase.**
