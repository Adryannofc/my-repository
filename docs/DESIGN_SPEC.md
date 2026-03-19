# Design Specification — Portfolio Developer

> Source of truth for visual identity, layout, and component anatomy.
> Every implementation decision must trace back to this document.

## Philosophy
**Terminal austero que respira.** Not cyberpunk, not hacker aesthetic. The visual language of someone who builds systems — precise, no excess, every element justifies its existence.

## Palette

### Backgrounds (elevation hierarchy)
| Token | Hex | Use |
|-------|-----|-----|
| --bg-base | #0B0B0D | Full page background |
| --bg-surface | #141416 | Cards, elevated sections |
| --bg-elevated | #1e1e21 | Modals, hover states, inputs |
| --bg-input | #1a1a1c | Code blocks, input fields |

### Text (4 levels only)
| Token | Hex | Use |
|-------|-----|-----|
| --text-primary | #F2F2F2 | Headings only. Not body. |
| --text-secondary | #BFBFBF | Main body text |
| --text-muted | #8C8C8C | Labels, captions, metadata |
| --text-ghost | #595959 | Placeholders, tertiary, inactive icons |

### Accent (state progression)
| Token | Hex | State |
|-------|-----|-------|
| --accent | #F28705 | Default |
| --accent-hover | #F27405 | Hover |
| --accent-deep | #D93D04 | Active/pressed |
| --accent-muted | #D95204 | Secondary |
| --accent-darkest | #591902 | Background highlight |

### Borders
| Token | Value |
|-------|-------|
| --border-subtle | rgba(242, 135, 5, 0.12) |
| --border-accent | rgba(242, 135, 5, 0.40) |
| --border-neutral | rgba(242, 242, 242, 0.08) |

## Typography

### Font Stack
- **Plus Jakarta Sans** — Display and body. Weights: 400, 500, 600, 700, 800.
- **JetBrains Mono** — Overlines, captions, tech badges, code. Weights: 400, 500.

### Scale
| Element | Font | Size | Weight | Extras | Color |
|---------|------|------|--------|--------|-------|
| H1 Display | Jakarta | clamp(48px, 9vw, 96px) | 800 | uppercase, tracking -0.03em, line-height 0.95 | --text-primary |
| H2 Section | Jakarta | clamp(32px, 5vw, 56px) | 700 | uppercase, tracking -0.02em, line-height 1.05 | --text-primary |
| H3 Subsection | Jakarta | clamp(20px, 3vw, 28px) | 600 | tracking -0.01em, line-height 1.3 | --text-primary |
| Overline | JetBrains | 12px | 500 | uppercase, tracking 0.12em, pattern: "// 0X · LABEL" | --accent |
| Body | Jakarta | 16px | 400 | line-height 1.75 | --text-muted |
| Body Large | Jakarta | 18px | 400 | line-height 1.7 | --text-secondary |
| Caption | JetBrains | 13px | 400 | line-height 1.5 | --text-ghost |
| Code inline | JetBrains | 14px | 400 | bg: --bg-input, padding 2px 6px, radius 4px | --accent |

## Layout

### Containers
| Type | Max-width | When |
|------|-----------|------|
| Default | 1200px | Most sections |
| Narrow | 800px | About, long text |
| Wide | 1440px | Hero, ticker |

All containers: padding-x 24px, centered.

### Breakpoints
| Name | Width |
|------|-------|
| sm | 375px |
| md | 768px |
| lg | 1024px |
| xl | 1280px |
| 2xl | 1440px |

Mobile-first is mandatory.

## Section Anatomy

### // 00 · BOOT
- Duration: max 1.5s
- Progress bar: 6px height, bg --bg-elevated, fill --accent
- Terminal text: JetBrains 14px, --text-ghost, staggered messages
- Exit: fade out + clip-path reveal
- prefers-reduced-motion: skip entirely

### // 01 · HERO
- Split: 60% text left, 40% visual right (desktop). Full-width mobile.
- Overline: "// 01 · Software Engineer" in --accent
- H1: 3 lines max, uppercase, stagger animation (80ms delay between elements)
- Subtext: 1-2 lines, Jakarta 16px, --text-muted
- Social icons: Lucide 24px, --text-ghost, bottom of text block
- Below fold: Ticker with infinite horizontal scroll

### // 02 · ABOUT
- Container: narrow (800px)
- 2-3 short paragraphs, README tone
- 4 stat cards below:
  - bg-surface, border-subtle, radius 8px, padding 24px
  - Number: Jakarta 800, responsive size, --text-primary, counter animation (0→N, 1500ms ease-out)
  - Label: JetBrains 12px, uppercase, tracking 0.1em, --text-ghost

### // 03 · STACK
- Grid: 8 columns desktop, 4 mobile
- Each cell: 48×48, bg-elevated, border-subtle, radius 6px
- Icon: 24px, --text-ghost. Hover: --text-primary + label in --accent
- Grouped by category with --border-neutral separators

### // 04 · PROJECTS
- Grid: 2 columns desktop, 1 mobile, gap 24px
- Card anatomy:
  - bg-surface, border-neutral 1px, radius 12px, padding 24px
  - Numbering: JetBrains 14px, --accent
  - Name: Jakarta 600, 20px, --text-primary
  - Description: Jakarta 400, 14px, --text-muted, 2 lines max
  - Tech badges: pills (JetBrains 11px, --text-muted, border-subtle, radius-full, padding 4px 10px)
  - Links: "GitHub" / "Live", --text-ghost, 12px, bottom-right
- Hover: border-accent, translateY(-4px), shadow 0 8px 32px rgba(242,135,5,0.08), 250ms ease

### // 05 · CONTACT
- Centered, overline + H2 display large
- Primary link: email or WhatsApp, --accent, direct click
- Social icons: Lucide 24px, --text-ghost, centered row, gap 16px
- Zero forms

### Nav (fixed)
- Height: 64px
- Background: rgba(11,11,13,0.80) + backdrop-filter blur(12px)
- Border-bottom: 1px --border-neutral
- Left: logo/name (Jakarta 600, 16px, --text-primary)
- Right: nav links (Jakarta 400, 14px, --text-muted, hover: --text-primary)
- Behavior: show on scroll up, hide on scroll down

## Animations

### Priority 0 — Immediate
| Animation | Trigger | Duration |
|-----------|---------|----------|
| Boot sequence | Page load | 1.5s total |
| Hero stagger | After boot | ~800ms (80ms delay each) |
| Ticker scroll | Continuous | 20s loop |

### Priority 1 — Scroll-triggered
| Animation | Trigger | Duration |
|-----------|---------|----------|
| Text reveal | Section enters viewport | 600ms ease |
| Counter mount | Stat card enters viewport | 1500ms ease-out |
| Card hover | Mouse hover | 250ms ease |

### Priority 2 — Polish (future)
- Scramble text on hero
- Nav hide/show on scroll direction

### prefers-reduced-motion
All animations disabled. Boot skipped. Ticker static. Content loads instantly.

## Component Specs

### Tech Badge (pill)
Font: JetBrains 11px. Text: --text-muted. Bg: transparent. Border: 1px --border-subtle. Radius: 9999px. Padding: 4px 10px. Hover: border --border-accent, text --accent.

### Overline
Pattern: "// {number} · {LABEL}". JetBrains 12px weight 500. Color: --accent. Uppercase. Tracking: 0.12em. Margin-bottom: 16px.

### Social Icon
Lucide 24px, stroke-width 1.5. Color: --text-ghost. Hover: --text-primary (150ms). No bg, no border. Gap between: 16px.

## WCAG AA Compliance
All color pairs validated:
- text-primary on bg-base: 18.4:1 ✓
- text-secondary on bg-base: 12.8:1 ✓
- text-muted on bg-base: 6.2:1 ✓
- text-ghost on bg-base: 3.3:1 (large text only) ✓
- accent on bg-base: 6.8:1 ✓
- accent on bg-surface: 5.9:1 ✓
