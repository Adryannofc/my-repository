# Development Plan — Portfolio Developer

## Architecture
- **Pattern**: Static Site Generation (SSG) with Astro Islands
- **Framework**: Astro v4+ with TypeScript
- **Styling**: Tailwind CSS v4 with CSS custom properties for design tokens
- **Animations**: CSS keyframes + Intersection Observer API (no GSAP)
- **Fonts**: Fontsource (self-hosted Plus Jakarta Sans + JetBrains Mono)
- **Icons**: Lucide (SVG inline)
- **Deploy**: Vercel via GitHub Actions

## Data Architecture
No database. All content is hardcoded in typed files:
- `src/content/en.json` — English strings
- `src/content/pt-br.json` — Portuguese strings
- `src/data/projects.ts` — Project entries (typed array)
- `src/data/stack.ts` — Tech stack categories and items

## i18n Strategy
- Astro native i18n with route prefixing: `/en/`, `/pt-br/`
- Default language detected from Accept-Language header
- Preference saved in localStorage
- Each page has hreflang alternate links
- Helper function `t(key)` resolves current locale string

## Astro Islands (client-side JS)
Only these components need hydration:
- `Boot.astro` → `client:load` (runs immediately)
- `StatCounter.astro` → `client:visible` (Intersection Observer)
- `Ticker.astro` → CSS only (no JS needed)
- `Nav.astro` → `client:load` (scroll direction detection)
- `LanguageToggle.astro` → `client:load` (redirect logic)

Everything else is pure HTML/CSS, zero JS.

## Phases

### Phase 0: Setup (8-12h)
- Init Astro + TypeScript + Tailwind
- Design tokens in CSS variables + Tailwind config
- Fontsource fonts configured
- i18n routing skeleton
- CI/CD pipeline + Vercel deploy
- ESLint + Prettier

### Phase 1: MVP Layout (20-30h)
- All 6 sections rendered with placeholder content
- Responsive layout (mobile-first)
- i18n toggle working
- Accessibility foundation (semantic HTML, focus, aria)
- No animations yet

### Phase 2: Animations (12-18h)
- Boot sequence with clip-path reveal
- Hero stagger mount
- Ticker infinite scroll
- Counter animation (IO + rAF)
- Nav show/hide on scroll
- Text reveal on scroll
- prefers-reduced-motion global disable

### Phase 3: Polish (8-12h)
- Real content inserted
- SEO meta tags + Open Graph + sitemap
- Performance audit (Lighthouse ≥ 95)
- Cross-browser testing
- Security headers
- Production deploy

## Key Technical Decisions
1. Astro over Next.js — zero JS default, lower complexity for static site
2. CSS animations over GSAP — all specified animations achievable without library
3. JSON content over CMS — dev maintains alone, content changes rarely
4. Self-hosted fonts over Google CDN — eliminates external request, better LCP
5. Route-based i18n over client-side toggle — SEO-friendly, indexable by Googlebot

## Performance Targets
- Lighthouse: ≥ 95
- LCP: < 1.5s
- CLS: < 0.05
- JS bundle: < 50KB gzipped

## Boot Screen vs LCP Warning
The 1.5s boot screen delays visible content. Implementation must render real content in DOM with `visibility: hidden` during boot, so the browser paints hero text as LCP, not the loader.
