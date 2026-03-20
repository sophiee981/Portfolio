# Design System — Portfolio · Xuan Sophie

> Source of truth for all visual decisions. Dark theme only.
> Stack: React + Vite + Tailwind CSS v4 + shadcn/ui (Base UI)
> Font: **Host Grotesk** (Google Fonts)

---

## Table of Contents

1. [Color Tokens](#1-color-tokens)
2. [Typography](#2-typography)
3. [Spacing](#3-spacing)
4. [Border Radius](#4-border-radius)
5. [Animations](#5-animations)
6. [Components — Button](#6-components--button)
7. [Custom Utilities](#7-custom-utilities)
8. [Hero Background](#8-hero-background)

---

## 1. Color Tokens

Defined in `src/index.css` → `:root`. Used via Tailwind utilities: `bg-background`, `text-foreground`, etc.

### Base
| Token | Value | Tailwind class |
|---|---|---|
| `--background` | `#000000` | `bg-background` |
| `--foreground` | `#fafafa` | `text-foreground` |
| `--foreground-secondary` | `#d4d4d4` | `text-foreground-secondary` |

### Surface
| Token | Value | Tailwind class |
|---|---|---|
| `--card` | `#0a0a0a` | `bg-card` |
| `--card-foreground` | `#fafafa` | `text-card-foreground` |
| `--popover` | `#0a0a0a` | `bg-popover` |
| `--popover-foreground` | `#fafafa` | `text-popover-foreground` |
| `--secondary` | `#171717` | `bg-secondary` |
| `--secondary-foreground` | `#fafafa` | `text-secondary-foreground` |
| `--muted` | `#171717` | `bg-muted` |

### Text
| Token | Value | Tailwind class |
|---|---|---|
| `--muted-foreground` | `#a3a3a3` | `text-muted-foreground` |
| `--muted-foreground-subtle` | `#737373` | `text-muted-foreground-subtle` |

### Border
| Token | Value | Tailwind class |
|---|---|---|
| `--border` | `#262626` | `border-border` |
| `--border-subtle` | `#171717` | `border-border-subtle` |
| `--input` | `#262626` | — |
| `--ring` | `#a3a3a3` | `ring-ring` |

### Action
| Token | Value | Tailwind class |
|---|---|---|
| `--primary` | `#fafafa` | `bg-primary` |
| `--primary-foreground` | `#0a0a0a` | `text-primary-foreground` |
| `--destructive` | `#dc2626` | `bg-destructive` / `text-destructive` |
| `--success` | `#28c840` | `text-success` |
| `--accent` | `#171717` | `bg-accent` |
| `--accent-foreground` | `#fafafa` | `text-accent-foreground` |

### Brand (Portfolio-specific)
| Token | Value | Usage |
|---|---|---|
| `--portfolio-accent` | `#aa3bff` | Purple accent — badges, links, highlights |
| `--portfolio-accent-dim` | `rgba(170,59,255,0.12)` | Badge backgrounds |
| `--portfolio-accent-border` | `rgba(170,59,255,0.35)` | Badge borders |

```css
/* Usage example */
color: var(--portfolio-accent);
background: var(--portfolio-accent-dim);
border: 1px solid var(--portfolio-accent-border);
```

---

## 2. Typography

Font: **Host Grotesk** — `'Host Grotesk', system-ui, sans-serif`

```html
<!-- Load in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
```

### Display — for hero headlines

| Class | Size | Line Height | Weight | Tracking |
|---|---|---|---|---|
| `text-display-2xl` | 72px | 80px | 700 | -0.04em |
| `text-display-xl` | 64px | 72px | 700 | -0.035em |
| `text-display-lg` | 48px | 56px | 700 | -0.03em |
| `text-display-md` | 36px | 44px | 700 | -0.025em |

### Heading — for section titles

| Class | Size | Line Height | Weight | Tracking |
|---|---|---|---|---|
| `text-heading-lg` | 28px | 36px | 600 | -0.02em |
| `text-heading-md` | 24px | 32px | 600 | -0.018em |
| `text-heading-sm` | 20px | 28px | 600 | -0.015em |

### Label — for nav, buttons, badges, captions

| Class | Size | Line Height | Weight | Notes |
|---|---|---|---|---|
| `text-label-lg` | 18px | 28px | 500 | — |
| `text-label-md` | 16px | 24px | 500 | — |
| `text-label-sm` | 14px | 20px | 500 | — |
| `text-label-xs` | 12px | 16px | 500 | — |
| `text-label-2xs` | 11px | 12px | 500 | — |
| `text-label-3xs` | 10px | 12px | 500 | — |
| `text-label-3xs-uc` | 10px | 12px | 600 | UPPERCASE + tracking 0.06em |

### Body — for paragraph content

| Class | Size | Line Height | Weight |
|---|---|---|---|
| `text-body-lg` | 18px | 28px | 400 |
| `text-body-md` | 16px | 24px | 400 |
| `text-body-sm` | 14px | 20px | 400 |
| `text-body-xs` | 12px | 16px | 400 |
| `text-body-2xs` | 11px | 12px | 400 |
| `text-body-3xs` | 10px | 12px | 400 |

### Usage

```tsx
<h1 className="text-display-xl">Hey, I'm Sophie.</h1>
<h2 className="text-heading-lg">Selected Work</h2>
<p className="text-body-md text-muted-foreground">Bio text here...</p>
<span className="text-label-3xs-uc">Available for work</span>
```

---

## 3. Spacing

Uses Tailwind's default 4px base scale.

| Token | Value | Class |
|---|---|---|
| 1 | 4px | `p-1`, `m-1`, `gap-1` |
| 2 | 8px | `p-2`, `gap-2` |
| 3 | 12px | `p-3`, `gap-3` |
| 4 | 16px | `p-4`, `gap-4` |
| 5 | 20px | `p-5`, `gap-5` |
| 6 | 24px | `p-6`, `gap-6` |
| 8 | 32px | `p-8`, `gap-8` |
| 10 | 40px | `p-10`, `gap-10` |
| 12 | 48px | `p-12` |
| 16 | 64px | `p-16` |
| 20 | 80px | `py-20` |
| 24 | 96px | `py-24` |

### Conventions
- Section padding: `py-20` (80px) or `py-24` (96px)
- Card padding: `p-6` (24px)
- Content max-width: `max-w-5xl` (1024px) or `max-w-6xl` (1152px)
- Page horizontal padding: `px-6 md:px-8`

---

## 4. Border Radius

Custom tokens + Tailwind defaults.

| Token | Value | Class |
|---|---|---|
| `--radius-sm` | 2px | — |
| `--radius-md` | 4px | — |
| `--radius-lg` | 6px | — |
| `--radius-xl` | 8px | — |
| `--radius-2xl` | 10px | — |
| Tailwind `rounded` | 4px | `rounded` |
| Tailwind `rounded-lg` | 8px | `rounded-lg` |
| Tailwind `rounded-xl` | 12px | `rounded-xl` |
| Tailwind `rounded-2xl` | 16px | `rounded-2xl` |
| Tailwind `rounded-3xl` | 24px | `rounded-3xl` |
| Tailwind `rounded-full` | 9999px | `rounded-full` |

### Conventions
- Cards: `rounded-2xl` (16px)
- Buttons: `rounded-lg` (8px) or `rounded-full` for pill
- Badges/tags: `rounded` (4px)
- Avatar: `rounded-full`
- Nav pill: `rounded-full`

---

## 5. Animations

Defined in `src/index.css`, applied via class.

| Class | Keyframe | Duration | Usage |
|---|---|---|---|
| `animate-pulse-dot` | `pulse-dot` | 2s ease-in-out ∞ | Green availability dot |
| `animate-float` | `float` | 6s ease-in-out ∞ | Floating decorative elements |
| `animate-glow` | `glow` | 4s ease-in-out ∞ | Background glow blobs |
| `animate-marquee` | `marquee` | 240s linear ∞ | Horizontal scrolling text |
| `animate-scroll-line` | `scroll-line` | 2s ease-in-out ∞ | Hero scroll indicator |

```tsx
{/* Availability badge */}
<span className="size-2 rounded-full bg-success animate-pulse-dot" />

{/* Floating element */}
<div className="animate-float">◆</div>
```

---

## 6. Components — Button

**Source:** `src/components/ui/button.tsx`
**Base:** shadcn/ui (Base UI) + `class-variance-authority`
**Install:** `pnpm dlx shadcn@latest add button`

### Import

```tsx
import { Button, buttonVariants } from '@/components/ui/button'
```

### Variants

| Variant | Background | Text | Border | Usage |
|---|---|---|---|---|
| `default` | `bg-primary` (#fafafa) | `text-primary-foreground` (#0a0a0a) | none | Primary CTA |
| `outline` | transparent | `text-foreground` | `border-border` | Secondary action |
| `secondary` | `bg-secondary` (#171717) | `text-secondary-foreground` | none | Tertiary action |
| `ghost` | none → `bg-muted` on hover | `text-foreground` | none | Minimal action |
| `destructive` | `bg-destructive/10` | `text-destructive` (#dc2626) | none | Delete / danger |
| `link` | none | `text-primary` | none (underline on hover) | Inline link |

### Sizes

| Size | Height | Padding | Font | Usage |
|---|---|---|---|---|
| `xs` | h-6 (24px) | px-2 | text-xs | Compact inline |
| `sm` | h-7 (28px) | px-2.5 | 0.8rem | Small UI |
| `default` | h-9 (36px) | px-3 | text-sm | Standard |
| `lg` | h-11 (44px) | px-6 | text-base | Hero CTA |
| `icon` | 36×36px | — | — | Square icon button |
| `icon-sm` | 28×28px | — | — | Small icon button |

### Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'default' \| 'outline' \| 'secondary' \| 'ghost' \| 'destructive' \| 'link'` | `'default'` | Visual style |
| `size` | `'xs' \| 'sm' \| 'default' \| 'lg' \| 'icon' \| 'icon-sm'` | `'default'` | Size variant |
| `asChild` | `boolean` | `false` | Merge props onto child element (e.g. `<Link>`) |
| `className` | `string` | — | Additional Tailwind classes |

### Usage Examples

```tsx
{/* Primary CTA */}
<Button>View Work</Button>

{/* With icon */}
<Button size="lg">
  View Work <ArrowRight size={16} />
</Button>

{/* As Link (react-router) */}
<Button asChild size="lg">
  <Link to="/projects">View Work</Link>
</Button>

{/* Ghost nav button */}
<Button variant="ghost" size="sm">About</Button>

{/* Outline secondary */}
<Button variant="outline" size="lg">
  <Mail size={16} /> Get in touch
</Button>

{/* Destructive */}
<Button variant="destructive">Delete project</Button>

{/* Icon button */}
<Button variant="ghost" size="icon">
  <Menu size={18} />
</Button>

{/* Custom accent (portfolio purple) */}
<Button className="bg-[var(--portfolio-accent)] hover:bg-[var(--portfolio-accent)]/80 text-white border-0">
  View Case Study
</Button>

{/* Rounded pill */}
<Button className="rounded-full" variant="outline">Download CV</Button>
```

### Base Styles (always applied)

```
inline-flex shrink-0 items-center justify-center gap-1.5
rounded-lg border border-transparent
text-sm font-medium whitespace-nowrap
transition-all outline-none select-none
focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50
active:translate-y-px
disabled:pointer-events-none disabled:opacity-50
[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:size-4
```

### Cursor Fix (Tailwind v4)

Tailwind v4 sets button cursor to `default`. To restore pointer:

```css
/* Already applied in index.css @layer base */
button:not(:disabled),
[role="button"]:not(:disabled) {
  cursor: pointer;
}
```

---

## 7. Custom Utilities

Defined via `@utility` in `src/index.css`.

### Text Styles
All 20 semantic text styles listed in [Typography section](#2-typography).

### Hero Backgrounds
```css
.hero-bg    /* Dark teal mesh gradient — used in Hero section */
.hero-grid  /* Subtle vertical grid lines overlay */
```

---

## 8. Hero Background

Clone of Ezhil Arasan's portfolio style — dark teal mesh gradient.

```css
.hero-bg {
  background: #070d12;
  background-image:
    radial-gradient(ellipse 80% 60% at 60% -10%, rgba(13,60,80,0.7) 0%, transparent 60%),
    radial-gradient(ellipse 50% 50% at 90% 30%,  rgba(8,40,55,0.5)  0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 10% 80%,  rgba(10,50,65,0.3) 0%, transparent 60%),
    radial-gradient(ellipse 70% 60% at 50% 50%,  rgba(5,20,30,0.8)  0%, transparent 100%);
}

.hero-grid {
  background-image: repeating-linear-gradient(
    90deg,
    transparent,
    transparent calc(100% / 6 - 0.5px),
    rgba(255,255,255,0.03) calc(100% / 6 - 0.5px),
    rgba(255,255,255,0.03) calc(100% / 6)
  );
}
```

```tsx
{/* Usage in Hero.tsx */}
<div className="absolute inset-0 hero-bg" />
<div className="absolute inset-0 hero-grid" />
```

---

## Quick Reference

```tsx
// Colors
bg-background        // #000
bg-card              // #0a0a0a
bg-secondary         // #171717
text-foreground      // #fafafa
text-muted-foreground // #a3a3a3
border-border        // #262626
text-success         // #28c840
text-destructive     // #dc2626

// Typography
text-display-2xl     // 72/80 w700
text-heading-lg      // 28/36 w600
text-label-sm        // 14/20 w500
text-body-md         // 16/24 w400
text-label-3xs-uc    // 10/12 w600 UPPERCASE

// Layout
max-w-5xl px-6 md:px-8   // content container
py-20 md:py-24            // section spacing
rounded-2xl               // card radius
rounded-full              // pill / avatar

// Animations
animate-pulse-dot    // availability dot
animate-float        // floating element
animate-glow         // glow blob
animate-marquee      // horizontal scroll

// Button variants
<Button>                          // default (white)
<Button variant="outline">        // ghost border
<Button variant="ghost">          // minimal
<Button variant="destructive">    // red danger
<Button size="lg">                // large CTA
<Button size="icon">              // square icon
```

---

*Last updated: 2026-03-20 · Maintained by Xuan Sophie*
