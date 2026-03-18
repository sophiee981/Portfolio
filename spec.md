# spec.md — Product Specification: Designer Portfolio Website

## 1. Product Overview

The project is a personal portfolio website for a Designer. The interface utilizes a Dark theme and features a modern, clean, and creative style to highlight design projects.

### Core User Actions

1. View featured design projects and the complete portfolio.
2. Read the designer's personal information, skills, and experience.
3. Filter projects by categories (e.g., UI/UX, Branding, Illustration).
4. Contact the designer via direct email or social media platforms.

### Pages to Build (Priority Order)

| Priority | Page    | Route      | Description                                                  |
| -------- | ------- | ---------- | ------------------------------------------------------------ |
| P0       | Home    | `/`        | Creative hero section, featured projects, and contact CTA.   |
| P0       | Projects| `/projects`| Full list of projects with a category filter.                |
| P1       | About   | `/about`   | Designer's bio, skills, and work experience timeline.        |
| P1       | Contact | `/contact` | Social media links and direct email address.                 |
| P2       | 404     | `*`        | Page not found error screen.                                 |

---

## 2. UI Design System

The UI design system will be built using **Tailwind CSS**, a utility-first CSS framework. For the component library, we will use **shadcn/ui** to leverage a set of beautifully designed, customizable components.

### 2.1 Theming & Colors

- The website will focus exclusively on a **Dark Theme** using Tailwind's `dark:` prefix to ensure high contrast and a modern feel.
- **Primary/Accent Color:** The primary brand color must be color-picked and matched exactly from Ezhil Arasan's Wall of Portfolios page. Register this custom color in `tailwind.config.ts` under `theme.extend.colors`.
- **Base Theme:** Use a **Neutral** theme base from shadcn/ui.

### 2.2 Typography

- The font family must be inspected and cloned directly from Ezhil Arasan's Wall of Portfolios page. Configure this typography scale in `tailwind.config.ts`.

### 2.3 Grid & Layouts

- Using CSS grid utilities directly in the HTML for complex layout structures.

### 2.4 Transitions & Animations

- Use Tailwind's built-in transition utilities (e.g., `transition duration-150 ease-in-out`) for smooth hover states and interactions.

---

## 3. Page Specifications

### PAGE 1: Home ( `/` )

**Goal:** Create a strong first impression, showcase creativity, and navigate users to view projects.

**Sections:**
- **Navigation Bar** — Logo (Designer's name), nav links (Home, Projects, About, Contact).
- **Hero Section** — High-impact headline, short bio subtext (e.g., showcasing years of experience driving business impact), and a "View Work" CTA button.
- **Featured Projects** — A grid layout of the 3–4 best projects.
- **Footer** — Social links (Behance, Dribbble, LinkedIn, X) and copyright.

**Interactions:** Smooth scroll, hover states on cards, and button transitions.

---

### PAGE 2: Projects ( `/projects` )

**Goal:** Display all design projects and allow users to search or filter them.

**Sections:**
- **Page Header** — Page title.
- **Filter Bar** — Category tabs (All / UI-UX / Branding / Motion).
- **Project Grid** — Displayed as cards with large thumbnails, project titles, and categories.

**Interactions:** Switching tabs automatically filters the grid. Hovering over a thumbnail shows a dark overlay with a "View Project" prompt.

---

### PAGE 3: About ( `/about` )

**Goal:** Provide detailed information about the designer to build trust.

**Sections:**
- **Profile Section** — Artistic portrait avatar, professional bio (similar to Ezhil's track record in transforming ideas from concept to reality).
- **Skills & Tools** — List of skills (e.g., Figma, Framer, GPT) displayed using shadcn/ui `Badge`s.
- **Experience Timeline** — A clean timeline showing work history and education.

---

### PAGE 4: Contact ( `/contact` )

**Goal:** Provide direct communication channels for potential clients.

**Sections:**
- **Contact Info** — Display direct Email address (with a "Copy to clipboard" functionality, e.g., "Copy my mail").
- **Social Links** — Large, easily clickable icons/links to LinkedIn, Behance, Dribbble, X, etc.

> **Note:** The direct messaging form has been explicitly removed from the scope.

---

## 4. Shared Components (shadcn/ui base)

- **UI Primitives** (`src/components/ui/`): We will initialize and customize shadcn/ui components such as `Button` (variants, sizes), `Badge` (for skill tags), `Avatar` (for profile pictures), and `Skeleton` (for image loading states).
- **Layout Components** (`src/components/layout/`): `Navbar` (sticky top), `Footer`, and `PageWrapper` (Container for max-width).

---

## 5. Mock Data Schemas

Create local mock data files containing:

- **`projects.ts`**: Array of project objects (`id`, `title`, `thumbnail URL`, `category`, `description`).
- **`experience.ts`**: Array of work history objects (`role`, `company`, `duration`).

---

## 6. Build Roadmap

- **Phase 0 — Setup:** Initialize Vite + React + TypeScript. Install Tailwind CSS and configure the dark theme variables. Initialize shadcn/ui and add base components (button, badge, card). Extract and apply the specific typography and primary color from the reference URL. Setup React Router.
- **Phase 1 — Core Pages:** Build the UI primitives. Develop Home, Projects, About, and Contact pages. Feed mock data into the Project Grid.
- **Phase 2 — Logic & Details:** Implement the category filtering logic on the Projects page. Add a "copy to clipboard" feature for the email on the Contact page.
- **Phase 3 — Polish & Pixel Perfect:** Refine the dark theme contrast. Match the exact vibe of the reference portfolio. Implement responsive design using screen size prefixes (e.g., `sm`, `md`, `lg`).
- **Phase 4 — Pre-Launch:** Audit the flow, check responsiveness on mobile devices, and remove unused code. Tailwind will automatically remove all unused CSS for a small production bundle.

---

## 7. Pre-Launch Checklist

**Functional:**
- [ ] All 4 routes work perfectly.
- [ ] Project filtering works correctly.
- [ ] Email copy button works.

**Design Fidelity:**
- [ ] Dark theme looks consistent across all pages.
- [ ] Typography and primary color match the referenced Ezhil Arasan portfolio perfectly.

**Quality:**
- [ ] Responsive layout adapts correctly on mobile, tablet, and desktop.
- [ ] Zero console or TypeScript errors.

---

## 8. Scope Cuts (If behind schedule)

If time is tight, prioritize cutting the following:

1. Complex scroll animations — Stick to basic Tailwind CSS hover transitions.
2. Project Filtering — Remove the tabs and display all projects in a single static grid.

**Never cut:**
- ✅ Core 4 pages: Home, Projects, About, Contact.
- ✅ Exact Typography and Primary Color matches from the reference URL.
- ✅ The polished look of the Tailwind Dark theme.
- ✅ Basic mobile responsiveness.
