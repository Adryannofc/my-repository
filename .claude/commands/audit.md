Read `docs/DESIGN_SPEC.md` then audit the current implementation for design compliance.

Check every component in `src/components/` against these rules:

1. **Colors**: No hardcoded hex values. All colors via CSS variables (--bg-base, --text-primary, --accent, etc.)
2. **Accent rule**: Count accent (#F28705) occurrences per viewport. Max 3.
3. **Typography**: 
   - ALL-CAPS only on H1 display and overlines
   - Body text never uses --text-primary
   - JetBrains Mono only in overlines, badges, captions, code
4. **Spacing**: Every spacing value must be on the 4px scale (4,8,12,16,24,32,48,64,80,96,128)
5. **Icons**: Only Lucide icons, no emojis, no decorative elements
6. **Accessibility**: Focus visible on interactives, semantic HTML, aria-labels on sections
7. **Reduced motion**: All animations wrapped in prefers-reduced-motion media query
8. **Containers**: Correct max-width per section (1200/800/1440)

Report violations with file path, line, and the specific rule broken.
