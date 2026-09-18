# FSM Consulting — Agent Instructions

## 1. Read Before Changing Anything

Before modifying the project, read:

1. `FSM_DIGITAL_EXPERIENCE.md`
2. `DESIGN_SYSTEM.md`
3. FSM corporate profile / approved content sources
4. Existing project structure and components

These documents are the source of truth for the project.

Do not begin implementation until they have been understood.

---

## 2. Design Authority

### Creative / UX authority

`FSM_DIGITAL_EXPERIENCE.md`

Defines:

- visual direction
- reference fidelity
- composition
- experience
- responsive philosophy
- imagery
- page rhythm

### Implementation / visual-system authority

`DESIGN_SYSTEM.md`

Defines:

- typography
- colors
- spacing
- cards
- layout
- interaction
- responsive implementation
- component patterns

### Content authority

FSM corporate profile and other explicitly approved FSM content.

Never invent company claims.

---

## 3. Reference Fidelity

The supplied Conceptzilla consulting references are the primary visual reference.

Study them as complete compositions.

Do not reduce them to:

- "bento"
- "cards"
- "premium consulting"
- "dark blue website"

The target includes:

- typography hierarchy
- whitespace
- composition
- image treatment
- card usage
- section rhythm
- grid alignment
- navigation
- CTA treatment
- information density
- mobile recomposition

Cards are allowed and important.

Do NOT card-ify everything.

Do NOT turn the website into a bento dashboard.

---

## 4. Before Implementation

First inspect the current project.

Check:

- current working tree
- existing components
- routes
- current styles/tokens
- assets
- existing responsive behavior
- current implementation
- existing uncommitted work

Preserve existing work unless there is an explicit reason to modify it.

---

## 5. NEVER Use Destructive Git Commands

Do not run:

```txt
git checkout --
git restore
git reset
git clean
```

Do not delete or revert existing work simply because it does not match the new direction.

Do not assume the working tree is clean.

Do not overwrite uncommitted changes.

Do not commit unless explicitly asked.

---

## 6. Implementation Process

Follow this sequence:

### Phase 1 — Understand

Read the design documents and inspect the current implementation.

### Phase 2 — Audit

Identify:

* what already works
* what conflicts with the design system
* what should be preserved
* what needs modification
* what is missing

### Phase 3 — Plan

Create a concise implementation plan.

Do not immediately rewrite the project.

### Phase 4 — Implement

Modify the existing project carefully.

Reuse existing components where appropriate.

Do not rebuild working functionality unnecessarily.

### Phase 5 — Verify

Run the appropriate:

* build
* lint/type checks
* responsive checks

Review desktop and mobile behavior.

---

## 7. Content Rules

Use only verified FSM content.

Never invent:

* clients
* case studies
* testimonials
* statistics
* awards
* partnerships
* project outcomes
* project values
* team credentials
* years of experience
* financial figures

If content is unavailable, preserve the intended visual structure without fabricating information.

---

## 8. Component Rules

Reuse existing components when the visual pattern is genuinely shared.

Create a new component when:

* the pattern is genuinely new
* reuse would make the component unclear
* the section has a distinct interaction or layout

Do not create unnecessary abstractions.

Do not force visually different sections into the same component merely for code reuse.

---

## 9. Visual Rules

Use the established FSM system.

Do not introduce arbitrary:

* colors
* fonts
* radii
* shadows
* gradients
* spacing
* animation styles

Do not reintroduce gold.

Do not introduce a decorative second accent.

Do not introduce a new visual language without updating the design documentation first.

---

## 10. Responsive Rules

Desktop and mobile are deliberate compositions.

Do not treat mobile as:

"desktop stacked vertically."

Check:

* typography
* image crop
* card proportions
* spacing
* ordering
* navigation
* CTA placement
* content density

The supplied mobile references are part of the design target.

---

## 11. Motion Rules

Motion must be restrained.

Allowed:

* subtle reveals
* image zoom
* small card lift
* CTA movement
* navigation transitions

Avoid:

* parallax
* 3D tilt
* bouncing
* excessive stagger
* decorative floating animations
* scroll-jacking

Respect reduced-motion preferences.

---

## 12. Image Rules

Prefer real, meaningful development-context imagery.

Prioritize:

* African development
* infrastructure
* implementation
* institutions
* field work
* professionals
* communities
* project environments

Avoid generic corporate stock imagery when a more relevant asset is available.

---

## 13. New Design Decisions

Before creating a new UI pattern, ask:

1. Does it exist in the Conceptzilla references?
2. Does an existing FSM pattern solve it?
3. Is a new pattern actually necessary?
4. Does it visually belong to the same system?

If it looks like it belongs to another website, do not use it.

---

## 14. Quality Gate

Before reporting the task complete, verify:

### Design

* Reference grammar is preserved.
* Cards are used intentionally.
* The page is not bento/card-heavy.
* Typography is strong.
* Whitespace is intentional.
* Images are meaningful.
* Deep blue is used strategically.

### Content

* Claims are verified.
* No fake clients.
* No fake statistics.
* No fake case studies.
* No fake outcomes.

### Responsive

* Desktop works.
* Tablet works.
* Mobile is deliberately recomposed.
* Navigation works.
* Touch targets are usable.

### Technical

* Build passes.
* Lint/type checks pass where configured.
* No unnecessary dependencies were introduced.
* Existing functionality was preserved.

---

## 15. Most Important Rule

Do not optimize for speed by blindly rewriting the project.

Understand first.

Inspect the existing implementation.

Preserve good work.

Then make deliberate changes based on:

**FSM_DIGITAL_EXPERIENCE.md → DESIGN_SYSTEM.md → approved FSM content.**