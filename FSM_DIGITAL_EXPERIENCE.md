# FSM Digital Experience — Creative & UX Source of Truth

> **Read this before `DESIGN_SYSTEM.md`, and read both before touching any
> UI in this repo.** This document is the highest-level creative authority
> for the FSM Consulting Limited website. `DESIGN_SYSTEM.md` is the
> implementation of what this document decides — tokens, component classes,
> code-level rules. If the two ever seem to conflict, this document wins,
> and `DESIGN_SYSTEM.md` should be corrected to match it.

```
             FSM CORPORATE PROFILE
                     │
                     ▼
        ┌──────────────────────────┐
        │ FSM_DIGITAL_EXPERIENCE.md│   ← this file: reference UI, UX
        │                          │     philosophy, layout grammar,
        │                          │     responsive art direction
        └────────────┬─────────────┘
                     ▼
        ┌──────────────────────────┐
        │ DESIGN_SYSTEM.md         │   ← colors, type, radius, spacing,
        │                          │     component classes, motion tokens
        └────────────┬─────────────┘
                     ▼
                COMPONENTS → PAGES
```

`AGENTS.md` points every AI agent working on this repo to read this file
first, then `DESIGN_SYSTEM.md`, before designing or building anything.

## The actual instruction, stated precisely

Not: *"Build an FSM design system inspired by Prism."*

This is: **the three Conceptzilla "Website Design for Consulting Firm"
Dribbble references are the visual foundation of FSM's entire digital
experience. Rebuild FSM's website using that design language, with FSM's
brand and real content replacing Prism's. Every future AI working on this
site — Claude, Codex, Antigravity, Cursor, or otherwise — must preserve
this visual DNA, not reinterpret it into a generic "premium consulting
site."**

```
   REFERENCE UI/UX GRAMMAR
            +
     FSM BRAND
            +
FSM CORPORATE PROFILE (content, positioning, services, delivery model,
regional network, sectors, Impact 360)
            =
   FSM DIGITAL EXPERIENCE
```

The reference supplies composition, proportion, whitespace, surface
treatment, navigation structure, card behavior, and responsive
transformation. FSM supplies brand identity, voice, and every fact on the
page. Never let the reference's own brand (green, "Prism.", its invented
copy) leak through — and never let FSM's rebuild drift into a generic
SaaS-card aesthetic that isn't actually what the reference does either.

## Reference fidelity — the rule everything else follows

The three supplied Dribbble shots are the primary visual reference for
this project. Do not reinterpret them into a generic "premium consulting
website." Preserve their visual grammar across the FSM site:

- composition and proportion
- whitespace and canvas (large white/neutral canvas, image doing most of
  the work — not a wall of cards)
- rounded-surface treatment (contained panels, not universal card-ification)
- hero construction (one large inset photo panel with integrated nav and
  editorial headline, not a separate nav bar plus a floating text card)
- image treatment (full-bleed within its container, duotone/grayscale for
  mood shots, natural color for people/context shots)
- editorial typography hierarchy (a few large deliberate moments, not
  uniform card headings everywhere)
- card composition (cards vary in density and purpose — a stat tile, a
  case-study block, and a service tile are not the same shape or weight)
- navigation structure (minimal, overlaid on the hero photo, no separate
  utility bar)
- CTA treatment (pill buttons used deliberately — primary actions only)
- information density (some sections are sparse and quiet, others dense —
  this contrast is intentional, not inconsistency)
- case-study presentation (visually dominant, information-rich,
  horizontally oriented — not a generic blog card)
- responsive transformation (mobile is redesigned per-component, not the
  desktop layout shrunk and stacked)
- interaction philosophy (one orchestrated motion moment, quiet
  hover/press states elsewhere)

FSM's brand replaces the reference's brand. The reference's UI/UX
language remains the foundation underneath it.

## Brand color — extracted from FSM, not copied from the reference

The reference's palette (green + near-black + white) is **not** to be
copied. FSM's own identity determines the palette; the reference only
determines how that palette *behaves* (restrained, one dark neutral
dominant, one accent used sparingly, everything else neutral).

- Primary color relationship comes from the FSM logo and corporate
  profile: a navy/deep-blue dominant, paired with a gold accent, is what
  the actual logo supports — this was verified against the supplied FSM
  logo file, not assumed from "consulting = navy/gold" convention.
- Gold is retained **because** it is genuinely present in the FSM mark,
  not as a reflexive "consulting firm" choice. If a future brand refresh
  changes the logo, this palette must be re-derived from the new logo,
  not carried over by habit.
- The resulting palette stays restrained: one neutral canvas (white/sand),
  one dark surface color (navy) used the way the reference uses near-black
  — for contrast and emphasis, never as the default background — and gold
  as the only accent, used sparingly (hover states, small highlights,
  the FSM italic wordmark treatment).
- Do not add a second accent color. See `DESIGN_SYSTEM.md`'s color table
  for the exact tokens.

## Why, not just what — the component philosophy

`DESIGN_SYSTEM.md` documents implementation classes (`.bento-card`,
`.pill-btn`, `.delivery-card` and so on). Those are *how*. This is *why*:

- Cards create **contained moments of information** — a stat, a case
  study, a service. They are not a default wrapper for every piece of
  content on the page. If a section reads better as plain text on the
  canvas (like a centered stat line, or a section intro), leave it
  uncarded. Over-carding is the single easiest way to drift from the
  reference into generic SaaS territory.
- Large editorial text creates **visual pauses** between dense
  information — it's a breathing moment, not decoration.
- Images are **content**, not decoration. A photo should carry meaning
  (a real place, a real activity) — never a stock texture filling space.
- Dark surfaces create **contrast and emphasis**. Navy is used the way
  the reference uses near-black: for the hero photo card, for one bento
  tile in a stat grid, for the closing CTA panel. It is never the
  default section background.
- Rounded surfaces create **physical separation** between distinct
  pieces of content — they are a structural device, not a stylistic
  layer applied to make the site "feel modern."
- Pill CTAs are **actions**, used for the primary thing you actually want
  someone to do on that screen. Not every link needs to be a pill, and
  not every pill needs a trailing arrow (see `DESIGN_SYSTEM.md`'s
  genericness-avoidance section).

## Reference anatomy

Document what the reference actually does, section by section, so a
future agent building a new section can check its structure against a
real pattern rather than inventing one.

### Hero

Reference behavior:

```
┌──────────────────────────────────────┐
│  [logo]      nav links       [CTA]    │  ← nav overlaid on photo,
│                                        │     transparent, white text
│              PHOTO                    │
│         (full-bleed within            │
│          the rounded panel)           │
│                                        │
│  Editorial headline                   │
│  Supporting copy                      │
│  [ CTA ]   text link                  │
└──────────────────────────────────────┘
   ↑ the whole hero is ONE inset, rounded panel on a white/sand page
     background — not an edge-to-edge viewport photo with a separate
     nav bar above it
```

FSM version: same composition. Different imagery (FSM's own
architecture/skyline photography), typography (Source Serif 4 + IBM Plex
Sans, not the reference's faces), copy (FSM's real positioning), brand
colors (navy/gold, not green), and CTA text ("Discuss an assignment").
Implemented in `Hero.tsx` + `Nav.tsx`'s `transparent` mode.

### Stat / value section

The reference uses **compact structured statements**, not enormous
generic cards — a plain centered stat line ("20+ years advising Fortune
500 clients") directly on the white canvas above the logo row, and
*separately* a proper mixed-size bento grid elsewhere (25 years / 40+
countries / brand tile). Both patterns exist in the reference; use each
where it actually appears rather than bento-ifying everything. FSM
translates the plain-stat-line pattern into the `FunderLogoStrip.tsx`
intro line, and the bento-grid pattern into `BentoStats.tsx` — using only
real, sourced FSM numbers (corporate profile is the source of truth,
never invented).

### Services / expertise section

Not generic uniform 3-column icon cards. The reference uses a controlled
modular grid — light neutral-gray fill, generous padding, large radius,
heading + short description + "Learn more →" text link, no icon, no
border, no shadow. FSM should preserve that visual behavior
(`DeliveryModelSection.tsx`) while using its real capabilities (Global
Expertise, Regional Access, National Capability, Local Knowledge) as the
content, not the reference's legal-practice list.

### Case studies / project evidence

The reference's case-study cards are visually dominant, information-rich,
and horizontally paired (Challenge / Impact, with a "Learn More" pill),
in saturated dark-green/sage fills with a regional/global filter toggle —
not an ordinary blog-style card.

**FSM does not currently have enough verified, client-approved
case-study material to populate this pattern with real content.** Do not
invent case studies, deal figures, or client outcomes to fill it. This
rule already exists in `DESIGN_SYSTEM.md` and stays in force. The
component should still be *designed* now (structure, color treatment,
toggle interaction) so it's ready to receive real FSM material the moment
the client supplies it — ship it as a clearly marked placeholder state,
not as fabricated content.

### Insights

Reference uses a large featured image card plus smaller secondary cards
in a mixed grid, not a uniform list. FSM's `FeaturedInsightsSection.tsx`
follows this.

### Closing / contact

Reference uses a rounded dark (near-black) panel, inset from the page
edge like the hero, with a white pill primary CTA. FSM's `Closing.tsx`
follows this using navy instead of near-black.

## Responsive art direction (not just breakpoint testing)

**Mobile is not a breakpoint adaptation. Mobile is a deliberate
composition of the same visual language.** Checking a component at
375px/768px/1280px and confirming nothing visibly breaks is necessary but
not sufficient — it's QA, not design. For every major composition, decide
deliberately:

- **Desktop** — what's dominant? (e.g. hero: the photo and nav share the
  panel, headline sits at roughly 40% width)
- **Tablet** — what collapses, and into what? (e.g. a 4-column bento grid
  becomes 2-column; a 2-column insight grid becomes 1-column with the
  featured card first)
- **Mobile** — what becomes dominant? The reference's mobile hero doesn't
  shrink the desktop photo-plus-side-text layout — the photo becomes a
  full-width vertical surface with the white text panel taking over the
  lower portion of the screen, redesigned for the narrow viewport rather
  than compressed into it. FSM's `Hero.tsx` already does this (the bento
  card goes full-bleed-within-gutter, text panel sits at the bottom of a
  taller photo area).
- **Interaction** — what changes from hover to touch? Hover-only
  affordances (arrow-slide on link hover, card lift on hover) should have
  no missing-information cost on touch — the arrow or "Learn more" text
  must already be visibly present, not revealed only by a hover state
  that touch devices can't trigger.

Document this per-section as new components are built, not just "tested
responsive, looks fine."

## The reference test — before building anything new

Before creating a new component or section, an agent should ask in order:

1. **Does this exist in the reference language?** If yes, follow it
   (see Reference Anatomy above, and extend that section for the new
   pattern once found).
2. **If not, does it belong to an established FSM pattern already built
   in this repo?** If yes, extend that pattern rather than inventing a
   parallel one.
3. **If neither, is a new component genuinely necessary?** If yes, create
   it — but make it visually native to the system: same radius tokens,
   same motion curve, same restraint on accent color and card-ification.
4. **Does it look like it came from a different website?** If yes,
   reject it and go back to step 1.

## Visual QA — before calling any page done

Inspect every finished page against these, explicitly, not just "does it
build and does it look okay at a glance":

- **Reference fidelity** — does this actually feel like the selected
  reference, structurally, not just in having rounded corners?
- **Institutional credibility** — does it read as a serious
  development-delivery consultancy, not a generic startup template?
- **Composition** — are there deliberate visual relationships between
  elements, or is this just sections stacked in a column?
- **Hierarchy** — can you tell what's most important on the screen
  within a second?
- **Information density** — is any section too empty (feels unfinished)
  or too crowded (feels like a wall of cards)?
- **Image quality and intent** — does the photography feel chosen for a
  reason, or is it filling space?
- **Responsiveness** — does mobile feel *designed*, per the Responsive
  Art Direction section above, rather than compressed?
- **Interaction** — is motion purposeful (one orchestrated moment) or
  scattered (fade-up on every card)?
- **Consistency** — could another AI agent look at this page and know
  how to build the next one in the same voice?
- **Originality** — check this page against the generic-AI-tell list in
  `DESIGN_SYSTEM.md`'s genericness-avoidance section. Did something
  generic slip back in?

## What this document is for

Six months from now, someone should be able to say "build a new Climate &
Resilience sector page" and get something that belongs beside the
existing pages — not a fresh reinterpretation. That's the point of
writing this down: the beauty of the result should be the default outcome
of following this document, not something that has to be re-argued for
every new page.
