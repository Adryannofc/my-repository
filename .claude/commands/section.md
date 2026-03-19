Read `docs/DESIGN_SPEC.md` for the design specification of this section.

Implement the section "$ARGUMENTS" following these steps:

1. Read the section anatomy in DESIGN_SPEC.md for this specific section
2. Create the Astro component in `src/components/`
3. Use design tokens from `src/styles/tokens.css` (never hardcode colors)
4. Follow the typography scale exactly (font, size, weight, color token)
5. Implement responsive layout mobile-first (375px → 1440px)
6. Add proper semantic HTML (section with aria-label, correct heading level)
7. Include focus-visible styles on all interactive elements
8. If the component needs client-side JS, use the appropriate Astro directive (client:load or client:visible)
9. Add the component to the page in `src/pages/en/index.astro` and `src/pages/pt-br/index.astro`

Before writing code, verify:
- Which container width applies (1200px default, 800px narrow, 1440px wide)
- The section gap (96px desktop, 64px mobile)
- Max 3 accent uses per viewport
- All spacing values follow the 4px scale
