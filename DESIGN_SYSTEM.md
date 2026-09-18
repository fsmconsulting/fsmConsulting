# FSM Consulting — Design System

> **Read `FSM_DIGITAL_EXPERIENCE.md` first, then this file, before
> touching any UI in this repo.** That document is the creative/UX
> source of truth (why the reference looks the way it does, layout
> grammar, responsive art direction, the "reference test" for new
> components); this file is its implementation — the canonical spec for
> tokens, component classes, and code-level rules. If you are an AI agent
> (Claude, Codex, Antigravity, Cursor, etc.) asked to build a new section,
> page, or component, follow both documents — don't invent a new visual
> style. If something here is ambiguous or a new pattern is genuinely
> needed, extend both files in the same commit that introduces the
> pattern.

## Origin

The visual language is adapted from a reference UI ("Prism.", a fictional
consulting-firm concept by Conceptzilla on Dribbble) and remapped onto
FSM Consulting's own brand (navy + gold, from the FSM logo) and its real
corporate content (see `FSM Consulting - Corporate Profile.pdf`, provided
by the client). We are not cloning Prism's brand — we are reusing its
**shape language and interaction patterns** with FSM's own colors, type,
and content.

## Brand colors (source of truth: `src/app/globals.css` `@theme inline`)

| Token | Hex | Use |
|---|---|---|
| `--color-navy` | `#061a29` | Primary dark — nav, footer, hero card accents, dark bento tiles |
| `--color-navy-2` | `#09263a` | Hover state for navy surfaces |
| `--color-navy-3` | `#12364b` | Tertiary dark surface |
| `--color-blue-accent` | `#1d4961` | Links, eyebrow labels, secondary interactive text |
| `--color-gold` | `#c6a15b` | Accent only — never a second primary. Hover states, small highlights |
| `--color-gold-light` | `#d7b970` | Gold hover |
| `--color-sand` | `#f5f3ee` | Section background alternate to white |
| `--color-ink` | `#152532` | Body text |
| `--color-ink-muted` | `#61717c` | Secondary/supporting text |
| `--color-line` | `#d9ddd9` | Borders |

Do not introduce new brand colors without updating this table.

## Typography

- **Display / serif** — `Source Serif 4`, self-hosted as `@font-face` in
  `src/app/fonts.css` pointing at `.woff2` files in `public/fonts/`.
  **Do not** switch back to `next/font/google` or a bare
  `@import "@fontsource/...")` — both have failed in this project
  (Google Fonts is blocked in the cloud sandbox; the `@fontsource` bare
  import fails to resolve under Turbopack/Tailwind v4 on Windows). If you
  need another weight/style, download the `.woff2` from the installed
  `@fontsource` package (or fontsource CDN) and add an `@font-face` rule
  by hand — never re-add the package import.
- **Interface / sans** — `IBM Plex Sans`, same self-hosting approach.
- Headlines use the serif at editorial scale (30–46px for H1, per
  `Hero.tsx`). Body copy is always the sans.
- The FSM logotype in dark bento tiles (see `BentoStats.tsx`) is set in
  serif italic — this echoes the reference's "Prism." wordmark treatment.

## Shape language — "Bento + Pill"

This is the core visual signature. Two radius tokens, defined in
`globals.css`:

```css
--radius-card: 24px;     /* .bento-card — all cards, tiles, photo frames */
--radius-card-sm: 16px;  /* smaller nested cards, e.g. mega-menu items */
--radius-pill: 999px;    /* .pill-btn — every primary/secondary CTA button */
```

Rules:

1. **Cards are rounded 24px, never sharp, never a small 2–4px radius.**
   Use the `.bento-card` utility class (add `.bento-card--hover` for the
   translateY(-4px) hover lift used throughout).
2. **Buttons are full pill shape**, not rectangular, not slightly rounded.
   Use `.pill-btn` (+ `.pill-btn-arrow` on the trailing arrow span) for
   every call-to-action — primary (navy bg / white text) and inverted
   (white bg / navy text on dark sections) alike. **`.pill-btn` does NOT
   set `display`** — always add Tailwind's own `inline-flex items-center`
   (or `hidden lg:inline-flex items-center` for a responsive CTA)
   alongside it in the `className`. This is deliberate: a plain CSS rule
   in `globals.css` and a Tailwind utility class have the same
   specificity, so whichever is declared later in the compiled
   stylesheet wins — and this file's custom rules are declared *after*
   `@import "tailwindcss"`, so a `display` in `.pill-btn` would silently
   defeat `hidden`/`lg:inline-flex` on every breakpoint. The same trap
   bit `.duotone-navy` (a `position` in that rule broke the hero photo's
   `absolute inset-0`) — as a rule, **never declare `display` or
   `position` in a plain custom class in this file; always let Tailwind
   utilities on the element own those two properties.**
3. **Mixed-size grids ("bento grids")** — when laying out stats, service
   summaries, or highlights, vary card spans (`col-span-1`, `col-span-2`)
   rather than a uniform grid. See `BentoStats.tsx` for the reference
   implementation: two 1-col stat tiles, one 2-col dark brand tile, two
   more 1-col tiles.
4. Photography sits in full-bleed, edge-to-edge frames — never with
   internal padding or a border. Apply `.duotone-navy` when the image is
   part of a dark/moody hero moment (grayscale + navy multiply-blend
   gradient); leave photography natural-color in lighter editorial
   sections (e.g. the corporate profile's Africa/team imagery).

## Motion / microinteractions

Defined in `globals.css`, respecting `prefers-reduced-motion`:

- `.bento-card--hover:hover` → `translateY(-4px)`, 0.28s
  `cubic-bezier(0.16, 1, 0.3, 1)`.
- `.pill-btn:hover` → `translateY(-2px)`; `.pill-btn-arrow` slides 4px on
  hover via the parent's `:hover .pill-btn-arrow` rule.
- `.img-hover-zoom:hover img` → `scale(1.045)`, 0.6s — use for any card
  or link that wraps a photograph.
- `.reveal-up` + `Reveal.tsx` — a tiny `IntersectionObserver` wrapper
  component. Wrap any section/tile that should fade+rise into view on
  scroll: `<Reveal delay={120}><Card /></Reveal>`. Don't hand-roll a new
  scroll animation approach; extend `Reveal.tsx` if you need variants.
- The hero card uses a one-shot CSS keyframe (`.hero-card-enter`) rather
  than `Reveal`, since it's above the fold and should animate
  immediately on load, not on scroll.

Keep motion subtle. No parallax, no 3D tilt, no bounce easing — everything
uses the same `cubic-bezier(0.16, 1, 0.3, 1)` "ease-out-expo-ish" curve
for a consistent, quiet feel.

## Layout patterns by section type

- **Hero** — full-bleed duotone photo, bottom-left (or bottom-full-width
  on mobile) white bento card overlapping the image, containing eyebrow
  label, serif H1, supporting paragraph, pill CTA + text link. See
  `Hero.tsx` / `HeroBackground.tsx`.
- **Nav** — slim dark utility bar (contact info) above a white main bar:
  logo lockup left, links center/right, pill CTA far right. Dropdowns
  (e.g. the Sectors mega-menu) are dark bento cards containing smaller
  rounded (`--radius-card-sm`) link tiles.
- **Stat / brand bento grid** — see `BentoStats.tsx`. Use real, sourced
  numbers only (corporate profile is the source of truth) — never invent
  metrics, matching the existing "no invented stats" rule already in
  this codebase.
- **Service/capability grid** — `.delivery-card` bento tiles with a
  border, hover lift, and "Learn more →" affordance.
- **Logo strip** — grayscale, evenly spaced, marquee-scrolling on
  desktop. Already implemented in `FunderLogoStrip.tsx` — reuse as-is
  for any additional logo lockup needs.

## Responsiveness

Mobile-first is mandatory — this was an explicit client priority.

- Every new component must be checked at 375px (mobile), 768px (tablet),
  and 1280px+ (desktop) before being considered done.
- Bento grids collapse from 4-col → 2-col → stacked; never let a bento
  tile go below ~140px min-height or text starts clipping.
- The hero card's `max-w-[600px]` cap keeps it readable on desktop while
  naturally going full-width (minus the page gutter) on mobile — don't
  hardcode a fixed width.
- Touch targets (buttons, nav links) stay ≥44px tall.

## Avoiding generic "AI-generated" tells

This site follows the `/frontend-design` skill's guidance on top of everything
above. The bento/pill shape language and photography direction come straight
from the client's chosen reference — keep those. But apply restraint on the
parts of that reference that are *also* the commonest generic-AI defaults:

- **No ALL-CAPS tracked-letter-spacing eyebrow labels as a reflex.** The Hero
  originally had one ("GLOBAL EXPERTISE · AFRICA DELIVERY") sitting above the
  H1 for no structural reason — it was removed. Only add an eyebrow/label
  when it encodes real structure (a category tag on an insight card, a
  section context like "MEAL" or "Governance" — those stay, in sentence case
  or small caps, never tracked-out all-caps as decoration).
- **One orchestrated motion moment per section, not motion on every tile.**
  `BentoStats.tsx` used to wrap each of its five tiles in its own
  `<Reveal delay={...}>` with a staggered delay — a textbook "fade-and-slide-
  up on each card" pattern. It's now a single `<Reveal>` around the whole
  grid, so the section arrives as one moment, not five. Follow this pattern:
  wrap the *container*, not each child, unless a genuinely sequential reveal
  is the point.
- **Arrow suffixes (`→`) are a deliberate choice, not a blanket default.**
  Keep them where the reference itself uses them (primary pill CTAs, "Learn
  more" service links) but don't append one to every single link just
  because it's available — e.g. insight-card links and the footer nav don't
  get one.
- **Numbered markers (01/02/03) only for genuine sequences.** Nothing on
  this site is currently numbered — don't add numbering to the service grid
  or capability cards; they're a set, not a sequence.
- **Middle-dot-joined meta strings ("A · B · C") are used sparingly** — fine
  for the nav utility bar's short locale tag, not for repeating across every
  section header.

When in doubt: does this choice come from the client's reference or FSM's
actual content, or is it just the easiest default? If the latter, cut it.

## What NOT to do

- Don't reintroduce heavy drop shadows or sharp corners — an earlier
  pass in this repo's history deliberately flattened those in favor of
  borders; the bento language now deliberately reintroduces *rounded*
  corners but still no heavy shadows (cards use border + hover-lift, not
  `box-shadow` glow).
- Don't add a second accent color. Gold is the only accent; everything
  else is navy/ink/sand/white.
- Don't fetch fonts from Google Fonts or any external CDN at build/runtime
  — self-hosted `.woff2` only (see Typography section above).
- Don't invent client stats, testimonials, or case studies for FSM. The
  corporate profile PDF is the only source of truth for claims; if a
  section in the reference design (e.g. a "case studies" bento card)
  needs content FSM hasn't supplied, either omit it or mark it clearly
  as a placeholder ("Case study — pending client content") rather than
  fabricating numbers.
