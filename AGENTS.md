<!-- BEGIN:nextjs-agent-rules -->

**# This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# FSM UI / Design Rules

Before touching any UI, read these files in this order:

1. `FSM_DIGITAL_EXPERIENCE.md`
2. `DESIGN_SYSTEM.md`

Do not skip either document.

## Authority

- `FSM_DIGITAL_EXPERIENCE.md` is the **creative and UX source of truth**.
  It defines the visual direction, reference language, composition, layout
  grammar, responsive art direction, interaction philosophy, and visual QA.
- `DESIGN_SYSTEM.md` is the **implementation source of truth**.
  It defines the colors, typography, spacing, shape language, motion tokens,
  component patterns, and implementation rules.

If the two documents conflict, follow `FSM_DIGITAL_EXPERIENCE.md` and update
`DESIGN_SYSTEM.md` when appropriate.

## Reference fidelity

The three selected Conceptzilla "Website Design for Consulting Firm"
references are the visual foundation of this website.

Do not turn FSM into a generic:

- consulting template
- SaaS dashboard
- startup landing page
- NGO website
- government portal
- card-heavy AI-generated website

Preserve the reference's visual grammar while using FSM's own brand,
content, imagery, and institutional character.

Do not copy the reference's branding, colors, wording, or identity.

## Content

FSM content must come from the corporate profile and approved project
content.

Do not invent:

- clients
- case studies
- statistics
- project outcomes
- testimonials
- partnerships
- awards
- team credentials
- financial figures
- geographic claims

When verified content is unavailable, design the structure so the real
content can be added later rather than fabricating it.

## Building new UI

Before creating a new component or section:

1. Check whether the pattern already exists in `FSM_DIGITAL_EXPERIENCE.md`.
2. Check whether an existing FSM component can be extended.
3. Only create a new pattern when genuinely necessary.
4. Make the new pattern visually native to the existing experience.

Do not create a second design language for a new page.

## Responsive behavior

Responsive design is part of the design, not an afterthought.

Do not simply shrink or stack the desktop layout.

For major sections, deliberately decide how the composition changes across:

- desktop
- tablet
- mobile

Mobile must remain intentional, readable, and visually consistent with the
reference language.

## Motion

Use motion sparingly and purposefully.

Prefer:

- subtle hover states
- controlled image movement
- small interaction feedback
- deliberate section reveals

Avoid:

- excessive scroll animations
- parallax
- 3D tilt
- bouncing elements
- animation on everything
- motion that hides or delays important information

Respect reduced-motion preferences.

## Implementation

Follow the existing architecture and conventions before introducing new
dependencies, patterns, or abstractions.

Use the existing design tokens and components whenever possible.

Do not override the design system with arbitrary:

- colors
- fonts
- radii
- shadows
- spacing
- animation curves

If a genuinely new visual pattern is required, update the appropriate
documentation instead of silently introducing it.

## Final check

Before considering UI work complete, verify:

- It follows `FSM_DIGITAL_EXPERIENCE.md`.
- It follows `DESIGN_SYSTEM.md`.
- It uses real FSM content.
- It does not introduce a generic AI visual pattern.
- Desktop, tablet, and mobile are intentionally composed.
- Interactions work without relying on hover.
- Accessibility is preserved.
- No unnecessary dependencies or abstractions were introduced.