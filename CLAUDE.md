# Portfolio Developer — Dark Terminal Aesthetic

## Quick Facts
- **Stack**: Astro v4+ / TypeScript / Tailwind CSS v4
- **Type**: Static site (SSG), zero backend
- **i18n**: Bilingual (EN + PT-BR) via Astro native routing (/en, /pt-br)
- **Content**: Hardcoded in JSON files, no CMS
- **Deploy**: Vercel (static, CDN)
- **Dev command**: `npm run dev` (localhost:4321)
- **Build**: `npm run build`
- **Lint**: `npm run lint`

## Key Directories
```
src/components/    → Astro components (.astro files)
src/content/       → i18n JSON files (en.json, pt-br.json)
src/data/          → Typed data files (projects.ts, stack.ts)
src/i18n/          → i18n config and helpers
src/layouts/       → Base layout (Layout.astro)
src/pages/         → Route pages (/en/index.astro, /pt-br/index.astro)
src/styles/        → Global CSS, design tokens, animation keyframes
public/            → Static assets (favicon, og-image, robots.txt)
docs/              → Project documentation (design spec, dev plan)
```

## Design System — Non-Negotiable Rules

These rules come from the design specification in `docs/DESIGN_SPEC.md`. Read it before implementing any visual component.

### Color Tokens (use CSS variables, never raw hex)
- Backgrounds: `--bg-base` (#0B0B0D), `--bg-surface` (#141416), `--bg-elevated` (#1e1e21)
- Text: `--text-primary` (#F2F2F2), `--text-secondary` (#BFBFBF), `--text-muted` (#8C8C8C), `--text-ghost` (#595959)
- Accent: `--accent` (#F28705), max 3 uses per viewport
- Borders: `--border-subtle` (rgba(242,135,5,0.12)), `--border-accent` (rgba(242,135,5,0.40))

### Typography
- Display/Body: Plus Jakarta Sans (Fontsource, self-hosted)
- Code/Overlines/Badges: JetBrains Mono (Fontsource, self-hosted)
- ALL-CAPS: only H1 display and overlines. Never on body text.
- Body text uses `--text-muted` or `--text-secondary`, never `--text-primary`

### Spacing
- All spacing follows 4px scale: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128
- Section gap: 96px desktop, 64px mobile
- No arbitrary values (17px, 23px, 37px)

### Anti-Patterns — Never Use
- Emojis as icons (use Lucide only, outline, 1.5px stroke, 24px)
- Gradient backgrounds
- Percentage skill bars
- Generic photo
- Contact forms (use mailto: or wa.me links)
- Copy with superlativos ("amazing", "passionate")

## Code Conventions

### Astro Components
- One component per file in `src/components/`
- Props typed with TypeScript interfaces
- Scoped styles with `<style>` tag, Tailwind utilities in markup
- Islands (client-side JS) only when needed: `client:visible` for scroll-triggered, `client:load` for immediate

### CSS
- Design tokens live in `src/styles/tokens.css` as CSS custom properties
- Tailwind config extends with custom tokens
- Animations in `src/styles/animations.css` as @keyframes
- Always include `prefers-reduced-motion` alternative (required, not optional)

### i18n
- Content strings in `src/content/{locale}.json`
- Use `t()` helper from `src/i18n/utils.ts` for translations
- Technical content (project names, tech badges) stays in English
- Routes: `/en/` and `/pt-br/` with hreflang tags

### Accessibility (WCAG AA)
- Focus visible: outline 2px `--accent`, offset 2px on all interactives
- Skip to content as first DOM element
- Semantic HTML: header, main, section (with aria-label), footer
- Single h1 per page, h2 per section, hierarchical
- `--text-ghost` never for text the user must read to complete an action

## Detailed Documentation
- Full design spec: read `docs/DESIGN_SPEC.md`
- Development plan and roadmap: read `docs/DEV_PLAN.md`
- Component anatomy and wireframes: read `docs/WIREFRAME_NOTES.md`
