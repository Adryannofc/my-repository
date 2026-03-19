Create a new Astro component named "$ARGUMENTS".

Follow these conventions:
1. File: `src/components/$ARGUMENTS.astro`
2. TypeScript interface for Props at the top of the frontmatter
3. Use Tailwind utilities for styling, CSS variables for tokens
4. Scoped `<style>` tag for any custom CSS (animations, complex selectors)
5. If it needs JS in the browser, use the minimal Astro client directive
6. Support i18n: accept translated strings as props, don't hardcode text
7. Include aria attributes and semantic HTML
8. Test that it renders correctly at 375px and 1440px

Reference `docs/DESIGN_SPEC.md` for the component's visual spec if it exists there.
