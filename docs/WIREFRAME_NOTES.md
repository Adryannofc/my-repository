# Wireframe Notes — Component Anatomy Reference

> Extracted from the wireframe SVG. Use for implementation reference.

## Page Flow (top to bottom)
```
BOOT (00)  →  HERO (01)  →  TICKER  →  ABOUT (02)  →  STACK (03)  →  PROJECTS (04)  →  CONTACT (05)
```

## Section Dimensions (from wireframe)

### Boot
- Full viewport height during load
- Progress bar centered, 240px wide, 6px height
- Terminal text block below bar

### Hero
- Full width, ~260px height desktop
- Left block: 60% width (text area)
  - Overline at top
  - 3 lines of H1 display below (16px height bars in wireframe = text blocks)
  - 2 lines of body subtext
  - Social icons row (3 circles, 6px radius, 20px gap)
- Right block: 40% width
  - 200×140px dashed area (canvas/video ambient background)
- Ticker bar: full width, 24px height, bg-surface

### About
- 280px height section
- Overline + heading at top
- Text block: full width body lines
- 4 stat cards in row below:
  - Each card ~120px wide
  - Number large + label small
  - Equal spacing between cards

### Stack
- Overline + heading
- Grid of tech icons (implied by design spec, not detailed in wireframe)

### Projects
- Grid 2 columns, ~300px each
- Each card ~140px height:
  - Number top-left
  - Title line
  - 2 description lines
  - Badge row at bottom
  - Link text bottom-right
- 24px gap between cards

### Contact
- 180px height
- Overline at top
- 2 large text lines centered (CTA headline)
- Accent bar below (email link)
- 3 social circles centered

### Nav (fixed overlay)
- 50px height (wireframe), spec says 64px — use 64px
- Dashed border in wireframe = not always visible
- Logo left, links right
- blur backdrop
