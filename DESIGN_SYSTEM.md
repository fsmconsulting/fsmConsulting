# FSM CONSULTING LIMITED

# DESIGN SYSTEM

> **READ `FSM_DIGITAL_EXPERIENCE.md` FIRST.**
>
> This document is the canonical implementation-level design system for FSM Consulting.
>
> `FSM_DIGITAL_EXPERIENCE.md` defines the **creative intent, UX philosophy, reference anatomy, composition rules, responsive art direction, interaction philosophy, and visual decision-making framework.**
>
> This file defines the **tokens, typography, layout primitives, components, interaction primitives, responsive rules, accessibility rules, and implementation constraints** used to express that experience in code.
>
> If the two documents ever appear to conflict:
>
> **FSM_DIGITAL_EXPERIENCE.md defines WHY.**
>
> **This document defines HOW.**
>
> Neither document may be ignored.
>
> Any AI agent working on this repository — Claude, Codex, Cursor, Antigravity, ChatGPT, or another coding agent — MUST read both documents before changing UI.

---

# 01 — PRODUCT DESIGN NORTH STAR

FSM Consulting is not being designed as a conventional corporate website.

It is an **institutional digital experience**.

The visual foundation comes from the supplied Conceptzilla consulting references, whose design language emphasizes expertise, clarity, strong hero storytelling, concise value communication, modular service presentation, interactive evidence/case-study treatment, editorial insights, structured typography, controlled iconography, clear grids, consistent spacing, and subtle interaction.

FSM translates that language into its own identity:

```text
REFERENCE
Deep institutional dark tone
        ↓
FSM
Deep institutional NAVY

REFERENCE
Editorial neutral surfaces
        ↓
FSM
Paper / White / Sand

REFERENCE
Restrained accent
        ↓
FSM
Gold

REFERENCE
Consulting / advisory content
        ↓
FSM
Development delivery / implementation / assurance / evidence

REFERENCE
Generic consulting narrative
        ↓
FSM
Africa's Development Delivery Partner
```

The result should feel:

**international-standard + African delivery intelligence.**

---

# 02 — BRAND EXPERIENCE

The website should communicate five things in sequence:

```text
01
THIS IS SERIOUS.

02
THEY UNDERSTAND DEVELOPMENT.

03
THEY UNDERSTAND IMPLEMENTATION.

04
THEY HAVE TECHNICAL + REGIONAL DEPTH.

05
I UNDERSTAND HOW TO ENGAGE THEM.
```

Every visual decision should support this progression.

---

# 03 — SOURCE HIERARCHY

When implementing the website, use this order of authority:

```text
1. FSM Corporate Profile
2. FSM logo / supplied brand assets
3. FSM_DIGITAL_EXPERIENCE.md
4. This DESIGN_SYSTEM.md
5. Existing repository architecture
6. Reference UI
7. Developer preference
```

The FSM corporate profile is the source of truth for company claims, services, positioning, network, values, sectors and capabilities.

Never invent:

* clients
* statistics
* testimonials
* case studies
* partnerships
* offices
* employees
* certifications
* awards
* project results
* financial numbers
* impact numbers

The corporate profile explicitly positions FSM around development delivery, implementation acceleration, project assurance, technical expertise, evidence, institutional strengthening, technology-enabled delivery and regional/local capability.

---

# 04 — REFERENCE TRANSLATION
# 04 — REFERENCE TRANSLATION (CONCEPTZILLA "PRISM" VISUAL GRAMMAR)

The reference is **not** being copied.
The reference is **not** being copied blindly. We translate its exact design grammar into FSM's institutional identity.

We are translating its design grammar.
The visual foundation is the Conceptzilla "Prism" consulting firm reference (`media_1789744082327.webp`, `ebdf5e970be111583e80774ede2691f3.webp`, `8bd1b8809a228bcdb45bd5d716fe3d4c.webp`, `91e92a42cb383981c55b96b7197da0d2.webp`, `media_1789744082297.webp`, `2433588c582ab68b20ec69ab1722d0b2.webp`, and `540aa52634cc0b07c8d6bf69c6049af7.webp`).

The reference contributes:
### Core Reference Architecture Rules:

* composition
* spatial rhythm
* image treatment
* editorial hierarchy
* grid discipline
* modular content architecture
* restrained interaction
* card geometry
* CTA treatment
* navigation behavior
* responsive principles
* information density
1. **Hero (Never a Floating Card on Desktop)**:
   - **Desktop**: Full-bleed edge-to-edge dark photographic surface (`100vw`, `min-h-[90vh]`). Integrated transparent navigation bar (`FSM Consulting.`, nav links). Bold 3-line headline directly composed over the photo. Subtitle paragraph. White pill button (`Schedule a Consultation`).
   - **Mobile**: Top half photo (`~48vh`); bottom half white card rounding up with `rounded-t-[32px]`, dark bold headline, subtext, and full-width dark pill button (`Schedule a Consultation`).
   - **Mobile Menu**: Full-screen white modal drawer with bold oversized links (`text-[32px]`), close button, and regional office locations + contact info at bottom.

FSM contributes:
2. **"Our value, your advantage"**:
   - 4-column open layout with clean, elegant icons (Target, Globe, CheckCircle, Shield), bold titles, and institutional copy derived strictly from FSM's corporate profile.

* brand colors
* typography
* logo
* company content
* service architecture
* sectors
* delivery model
* Impact 360 methodology
* Africa network
* institutional positioning
3. **"Services overview"**:
   - Two-column layout: left column contains only the bold section title ("Services overview"); right column contains a 2x2 grid of `#f4f5f7` rounded cards (`rounded-[20px]`) with concise descriptions and "Learn More →" hover links.

The implementation must therefore look like:
4. **Financing / Partner Strip**:
   - Centered headline: "Supporting projects financed by global development partners".
   - Balanced logo grid (World Bank, AfDB, IsDB, USAID, FCDO, EU, GIZ, UN Agencies).
   - 3-dash slider indicator (`[ —  -  - ]`) centered below the logos.

> **FSM designed using the visual intelligence of the chosen reference.**
5. **"Case studies"**:
   - Header row with bold title, `Regional | Global` pill filter toggle, and `← →` circle navigation buttons.
   - Deep Midnight Navy cards (`#07131e`) matching reference geometry (the reference uses green; FSM uses Midnight Navy).
   - Structured internal layout: Entity badge, Challenge description, Impact description, and bottom pill button (`Learn More →`).

Not:
6. **Featured Insights**:
   - Top editorial statement spanning the width ("We don't just advise clients — we bridge the gap between ambitious strategy and ground-level execution...").
   - Exactly 3 prominent cards side-by-side with rounded photography (`rounded-[18px]`, `hover:scale-105`), bold titles, deks.
   - Light grey pill button (`Show All Insights`) at the bottom.

> “Conceptzilla website with FSM text.”
7. **Purposeful Motion & Interactivity**:
   - Subtle hover lifts (`hover:-translate-y-1.5` / `hover:-translate-y-2`).
   - Controlled image zooms (`group-hover:scale-105`).
   - Interactive filter toggles and arrow shift states (`group-hover:translate-x-1.5`).
   - Smooth transitions without noisy bounce or gratuitous 3D tilt.

The implementation must look like:

> **FSM designed using the visual intelligence of the Conceptzilla Prism reference — exact in composition, layout, typography rhythm, and interaction, translated faithfully into FSM's deep navy institutional brand.**

---

# 05 — COLOR SYSTEM

## Primary dark system

FSM's deep blue replaces the reference's deep green/dark institutional tone.

This is intentional.

```css
--color-navy: #061A29;
--color-navy-2: #09263A;
--color-navy-3: #12364B;
--color-brand: #2F5FA8;
--color-blue-accent: #2F5FA8;
--color-blue-bright: #2F5FA8;
```

### `--color-navy`

Primary institutional dark.

Use for:

* navigation
* hero surfaces
* dark editorial sections
* footer
* CTA sections
* selected bento surfaces
* active states
* dark image overlays

### `--color-navy-2`

Use for:

* hover surfaces
* secondary dark panels
* nested dark UI
* interactive states

### `--color-navy-3`

Use for:

* tertiary dark surfaces
* visual separation
* dark diagrams
* supporting blocks

### `--color-blue-accent`

Use sparingly for:

* links
* secondary interactive text
* small contextual labels
* selected indicators

Do not let this become a second primary brand color.

---

# 06 — GOLD SYSTEM

```css
--color-gold: #C6A15B;
--color-gold-light: #D7B970;
--color-gold-soft: #E5CF98;
```

Gold is an **accent**.

It is not a second primary color.

Use gold for:

* active indicators
* small rules
* selected numbers
* subtle highlights
* map markers
* interaction states
* selected CTA details
* tiny visual punctuation

Do NOT:

* make every button gold
* make every heading gold
* create gold backgrounds everywhere
* create gold gradients
* outline every card in gold

The gold should feel discovered, not shouted.

---

# 07 — LIGHT SURFACES

```css
--color-paper: #F5F3EE;
--color-white: #FFFFFF;
```

Use:

### White

For:

* primary content surfaces
* navigation
* cards where appropriate
* high-contrast editorial sections

### Paper

For:

* alternate sections
* editorial areas
* publication sections
* institutional content
* softer page transitions

Avoid alternating backgrounds mechanically.

Surface changes must create visual rhythm.

---

# 08 — TEXT COLORS

```css
--color-ink: #152532;
--color-ink-muted: #61717C;
--color-line: #D9DDD9;
```

Primary body text:

`--color-ink`

Secondary/supporting text:

`--color-ink-muted`

Borders/dividers:

`--color-line`

Never introduce arbitrary gray values inside components.

---

# 09 — COLOR PROPORTION

The approximate visual distribution should be:

```text
45–55%
White / Paper

25–35%
Deep Navy

10–20%
Photography

<5%
Gold
```

These are visual guidelines, not rigid CSS percentages.

The important rule:

> **Navy must feel substantial without turning the entire website into a dark website.**

---

# 10 — TYPOGRAPHY

## Display

**Source Serif 4**

Use for:

* hero headlines
* major page headings
* major editorial statements
* selected pull quotes
* signature methodology statements
* high-value numbers where appropriate

## Interface

**IBM Plex Sans**

Use for:

* body
* navigation
* buttons
* metadata
* labels
* forms
* service descriptions
* technical information
* supporting text

---

# 11 — FONT IMPLEMENTATION

Fonts are self-hosted.

Never fetch fonts at runtime.

Do not use:

```text
next/font/google
```

Do not use:

```text
@import "@fontsource/..."
```

Use local `.woff2` files.

Expected structure:

```text
public/
  fonts/
    SourceSerif4-*.woff2
    IBMPlexSans-*.woff2
```

Font declarations belong in:

```text
src/app/fonts.css
```

Use `font-display: swap`.

If another weight is required:

1. obtain the `.woff2`
2. place it in `public/fonts/`
3. add the corresponding `@font-face`
4. update the typography tokens
5. do not introduce a remote font dependency

---

# 12 — TYPE SCALE

The following values are the starting system.

Do not treat them as immutable if composition requires adjustment.

## Display XL

```text
72–88px desktop
52–64px tablet
40–48px mobile
```

Use extremely selectively.

## Display

```text
56–68px desktop
46–56px tablet
38–44px mobile
```

## H1

```text
48–60px desktop
42–52px tablet
36–44px mobile
```

## H2

```text
40–48px desktop
34–42px tablet
30–36px mobile
```

## H3

```text
28–34px desktop
24–30px tablet
22–26px mobile
```

## H4

```text
20–24px
```

## Body Large

```text
19–21px
```

## Body

```text
16–17px
```

## Small

```text
13–14px
```

## Micro

```text
11–12px
```

Typography must always be evaluated against the composition.

Do not enlarge type simply because large type looks “premium.”

---

# 13 — TYPOGRAPHIC CHARACTER

The typography must feel:

* editorial
* intelligent
* restrained
* institutional
* contemporary
* confident

Avoid:

* giant startup typography
* overly compressed headings
* excessive uppercase
* excessive tracking
* decorative typography
* type effects
* gradient text

---

# 14 — LINE HEIGHT

General starting values:

```text
Display:
0.95–1.05

Large headings:
1.00–1.10

H2/H3:
1.05–1.15

Body:
1.55–1.70

Small:
1.40–1.50
```

Adjust based on actual text length.

---

# 15 — LETTER SPACING

Default:

near-normal.

Use tracking only where it improves readability or hierarchy.

Do not use:

```text
letter-spacing: 0.2em
```

as a generic “premium” effect.

Especially avoid decorative tracked-out ALL CAPS.

---

# 16 — EYEBROWS / LABELS

Eyebrows are structural.

They should communicate something real:

* service category
* page context
* insight type
* methodology stage
* sector
* navigation context

They should NOT exist simply because the design looks empty.

Avoid:

```text
GLOBAL · EXPERTISE · AFRICA · DELIVERY
```

above every heading.

Use labels when they provide information.

---

# 17 — LAYOUT CONTAINER

Primary desktop container:

```text
max-width: 1440–1520px
```

Side padding:

```text
desktop: 48–64px
tablet: 32–40px
mobile: 20–24px
```

Never allow content to touch the viewport edge unintentionally.

Full-bleed photography may intentionally escape the content container.

---

# 18 — GRID

Primary desktop grid:

**12 columns**

Typical gap:

```text
24px
```

Possible layouts:

```text
4 / 8
5 / 7
6 / 6
7 / 5
8 / 4
```

Do not force every section into 6/6.

Asymmetry is important to the editorial character.

---

# 19 — GRID PHILOSOPHY

The grid exists to create:

* alignment
* hierarchy
* tension
* rhythm
* whitespace

It is not merely a CSS utility.

When a section feels too symmetrical:

consider:

* changing column proportions
* offsetting the image
* changing content width
* introducing negative space
* creating a dominant element

---

# 20 — SPACING SYSTEM

Base:

```text
4
8
12
16
24
32
40
48
64
80
96
120
160
200
```

Major sections:

```text
96–120px
```

Major editorial moments:

```text
120–160px+
```

Mobile sections:

```text
72–96px
```

Do not use identical section padding everywhere.

---

# 21 — CORNER SYSTEM

Primary card:

```css
--radius-card: 24px;
```

Secondary card:

```css
--radius-card-sm: 16px;
```

Pill:

```css
--radius-pill: 999px;
```

The rounded geometry is part of the chosen reference translation.

But:

> **Rounded does not mean every element must be a card.**

Use open layouts extensively.

---

# 22 — CARDS

Cards should be used when content needs:

* containment
* comparison
* interaction
* grouping
* visual emphasis

Cards should NOT be used simply because the content exists.

Avoid:

```text
Card
Card
Card
Card
```

for every section.

---

# 23 — BENTO LANGUAGE

Bento is a compositional tool.

It is NOT the identity of the entire website.

Use bento when:

* combining different content weights
* showing supporting information
* creating visual rhythm
* presenting selected capabilities
* creating a trust/value composition

Do not use bento when an editorial list would communicate better.

---

# 24 — PHOTOGRAPHY

Photography is a major part of the visual identity.

Preferred:

* infrastructure
* fieldwork
* engineers
* technical teams
* agriculture
* urban development
* transport
* health
* education
* project sites
* stakeholder engagement
* data collection
* professional field environments

Photography should feel:

**documentary rather than promotional.**

---

# 25 — AFRICA REPRESENTATION

Africa should be communicated through:

* delivery
* geography
* implementation
* institutions
* infrastructure
* people doing real work
* regional networks
* communities
* technical environments

Avoid:

* stereotypical “African” decoration
* tribal patterns
* flags everywhere
* poverty imagery
* generic smiling-business stock
* safari imagery
* artificial “African” filters

---

# 26 — IMAGE TREATMENT

Natural photography:

```text
normal color
```

Dark hero photography:

```text
grayscale / muted image
+
navy overlay
```

The navy treatment should create the same visual role that the reference's deep green plays.

Do not turn every photograph navy.

---

# 27 — FULL-BLEED PHOTOGRAPHY

When photography is used as a major visual field:

* image may extend edge-to-edge
* no unnecessary internal padding
* no decorative border
* image should have intentional crop
* focal subject must remain visible
* responsive focal positioning must be considered

---

# 28 — HERO SYSTEM

The hero is a composition, not a generic component.

Canonical structure:

```text
FULL-BLEED / LARGE IMAGE FIELD

        ↓

EDITORIAL CONTENT PANEL

        ↓

EYEBROW / CONTEXT
SERIF HEADLINE
SUPPORTING COPY
PRIMARY CTA
SECONDARY ACTION / LINK
```

The content panel may overlap the image.

On mobile, the composition should recombine rather than merely shrink.

---

# 29 — HERO PANEL

Primary hero panel:

```css
border-radius: 24px;
```

Background:

```text
white / paper
```

Width:

```text
desktop:
approximately 520–620px

mobile:
full available width
```

The panel must have enough internal whitespace to feel editorial.

Do not cram content into it.

---

# 30 — HERO NAVIGATION RELATIONSHIP

The hero must visually connect to the navigation.

Desktop:

```text
utility bar
↓
main nav
↓
hero
```

The navigation should feel like part of the same institutional system.

Avoid a visually disconnected header.

---

# 31 — NAVIGATION

Desktop:

```text
UTILITY BAR
────────────────────────────

LOGO

ABOUT
CAPABILITIES
SECTORS
DELIVERY ECOSYSTEM
OUR NETWORK
INSIGHTS

START A CONVERSATION
```

The navigation should be compact.

It should not consume a huge amount of vertical space.

---

# 32 — UTILITY BAR

Use for:

* contact
* location
* concise institutional metadata

Example:

```text
Global Reach · Africa Delivery
```

Keep it quiet.

Do not turn the utility bar into another navigation system.

---

# 33 — STICKY NAV

On scroll:

* navigation may become sticky
* surface can transition from transparent/initial state to solid
* height may reduce slightly
* CTA remains accessible

Do not create a dramatic shrinking animation.

---

# 34 — MOBILE NAV

Mobile:

```text
LOGO
MENU
```

Menu should open into a deliberately designed navigation surface.

Minimum target:

```text
44px
```

Preferred:

```text
48px+
```

Capabilities and Sectors should become expandable groups.

---

# 35 — BUTTON SYSTEM

Primary button:

```text
pill
navy
white
```

Dark-section button:

```text
pill
white
navy
```

Accent button:

Use gold only where strategically appropriate.

Do not make gold the default CTA.

---

# 36 — BUTTON ANATOMY

Primary CTA:

```text
LABEL                    →
```

Arrow is an interaction indicator.

On hover:

```text
button:
slight lift

arrow:
3–4px translation
```

Duration:

approximately:

```text
250–300ms
```

---

# 37 — LINKS

Not every link needs an arrow.

Use arrows when the interaction represents:

* exploration
* navigation into a capability
* CTA
* “learn more” behavior

Do not append arrows to every footer link.

---

# 38 — BORDERS

Default:

```css
1px solid var(--color-line)
```

Use borders to:

* divide content
* create hierarchy
* structure lists
* define cards

Avoid thick borders.

---

# 39 — SHADOWS

Default:

**none**

Avoid:

* glow
* giant shadows
* floating SaaS cards
* neumorphism

Elevation should come from:

* surface contrast
* border
* spacing
* overlap
* image composition

---

# 40 — MOTION SYSTEM

Motion is restrained.

Primary easing:

```css
cubic-bezier(0.16, 1, 0.3, 1)
```

Do not introduce random easing curves.

---

# 41 — MICROINTERACTION PRINCIPLE

Every interaction should answer:

> What is the user learning or understanding from this motion?

If the answer is only:

> “It looks cool.”

remove it.

---

# 42 — HOVER MOTION

Cards:

```text
translateY(-3px to -4px)
```

Images:

```text
scale(1.03–1.045)
```

Buttons:

```text
translateY(-1px to -2px)
```

Arrows:

```text
translateX(3–4px)
```

Keep transitions:

```text
200–600ms
```

depending on the interaction.

---

# 43 — REVEAL MOTION

Use one reusable reveal system.

Preferred:

```text
opacity:
0 → 1

translateY:
16px → 0
```

Duration:

```text
500–700ms
```

Use `Reveal.tsx`.

Do not create a separate animation implementation for every page.

---

# 44 — SECTION MOTION

Do not animate every card individually.

Default:

```text
ONE ORCHESTRATED REVEAL PER SECTION
```

Children may stagger only when the content itself represents a sequence.

This prevents the site from looking like a generic AI landing page.

---

# 45 — HERO MOTION

Hero is above the fold.

Do not use the scroll reveal.

Use a one-time entrance:

```text
image
+
content panel
+
headline
```

The entrance should be subtle.

No dramatic cinematic intro.

---

# 46 — REDUCED MOTION

Support:

```css
@media (prefers-reduced-motion: reduce)
```

Disable:

* transforms
* nonessential motion
* autoplay animation
* large image zooms

Content must remain visible.

---

# 47 — INTERACTION HIERARCHY

Interaction priority:

```text
PRIMARY
Navigation / CTA

SECONDARY
Capability / sector exploration

TERTIARY
Image hover / subtle surface movement

DECORATIVE
Almost none
```

Do not make every element interactive.

---

# 48 — CAPABILITY SYSTEM

FSM's actual capabilities must remain the source.

Core services include:

1. Technical Expert Mobilization / Professional Contracting
2. Development Effectiveness Services
3. Project Assurance Services
4. Implementation Acceleration & Delivery Support
5. MEAL
6. Governance & Public Sector Reform
7. Environmental & Social Safeguards
8. Land Governance & Investment Advisory
9. Digital Transformation & Data Solutions
10. Implementation Support
11. Crisis Resilience & Adaptive Development
12. Jobs & Economic Transformation Advisory
13. Procurement Excellence & Fiduciary
14. PPP & Investment Facilitation

These are sourced from the corporate profile.

---

# 49 — CAPABILITY PRESENTATION

Do not automatically render the 14 capabilities as identical cards.

Preferred patterns:

* editorial list
* interactive rows
* grouped capabilities
* featured capability
* image-linked service
* expandable detail
* asymmetric bento

The visual weight of the section should be controlled.

---

# 50 — CAPABILITY ROW

A capability row may contain:

```text
SERVICE NAME
short contextual description
category
arrow
```

Hover/focus:

* background transition
* subtle movement
* image reveal where useful
* arrow movement
* active indicator

Never make hover the only way to access information.

---

# 51 — IMPACT 360

FSM Impact 360™ is a signature methodology.

Source sequence:

```text
Identify Priorities
↓
Measure Baselines
↓
Plan for Delivery
↓
Accelerate Implementation
↓
Check Progress
↓
Track Outcomes
```

The corporate profile explicitly presents this as FSM's continuous development-effectiveness cycle.

---

# 52 — IMPACT 360 UI

Desktop can use:

* circular composition
* connected sequence
* interactive stages
* central identity

or:

* horizontal continuous system

Choose the implementation that best matches the actual page composition.

Do not create a generic six-card process.

---

# 53 — IMPACT 360 MOBILE

Desktop geometry must NOT be forced onto mobile.

Mobile becomes:

```text
01
IDENTIFY PRIORITIES
description

↓

02
MEASURE BASELINES
description

↓

03
PLAN FOR DELIVERY
description
```

and so on.

---

# 54 — DELIVERY ECOSYSTEM

FSM's delivery chain is:

```text
CLIENT REQUIREMENT
↓
FSM TECHNICAL LEADERSHIP
↓
GLOBAL / REGIONAL EXPERTISE
↓
COUNTRY PARTNER & LOCAL ACCESS
↓
CONSULTANT MOBILIZATION
↓
FIELD & IMPLEMENTATION SUPPORT
↓
QUALITY ASSURANCE
↓
MEASURABLE RESULTS
```

This is sourced directly from the corporate profile.

---

# 55 — DELIVERY ECOSYSTEM UI

Desktop:

horizontal operational journey.

Tablet:

wrapped / structured journey.

Mobile:

vertical timeline.

The system must visually communicate:

```text
strategy
→ expertise
→ local access
→ field delivery
→ assurance
→ results
```

---

# 56 — SECTOR SYSTEM

Sectors should use an editorial list rather than a wall of cards.

Possible categories from FSM's profile include:

* governance
* development planning
* agriculture
* health
* education
* infrastructure / urban
* climate
* gender / social inclusion
* land
* safeguards
* financial management / procurement
* digital transformation / data analytics

The source describes FSM's multidisciplinary sector expertise across these areas.

---

# 57 — SECTOR INTERACTION

Desktop:

```text
01 GOVERNANCE
02 AGRICULTURE
03 HEALTH
04 EDUCATION
...
```

Hover/focus may reveal:

* image
* short context
* related capabilities

Mobile:

tap-to-expand.

Do not make critical information hover-only.

---

# 58 — NETWORK SYSTEM

FSM is headquartered in Nigeria and has a growing regional delivery network.

The profile references country-level partners/professional networks including:

* Senegal
* Sierra Leone
* Cameroon
* Kenya
* Uganda

Do not represent these as FSM-owned offices unless confirmed.

The profile explicitly describes a network/partner model rather than implying every location is a corporate office.

---

# 59 — AFRICA MAP

Map style:

* restrained
* editorial
* thin linework
* navy
* subtle gold markers
* minimal labels

Avoid:

* dashboard styling
* neon
* glowing dots everywhere
* excessive geographic data

---

# 60 — MAP MOBILE

Do not shrink the desktop map until it becomes unreadable.

Mobile:

```text
simplified map
+
country/network list
```

The information takes priority over preserving the exact geometry.

---

# 61 — INSIGHTS SYSTEM

The reference explicitly treats insights/publications as an editorial thought-leadership section.

FSM should therefore use:

**Insights**

rather than a generic:

**Blog**

unless the content model requires otherwise.

---

# 62 — INSIGHT PRESENTATION

Preferred:

```text
CATEGORY
TITLE
DATE / METADATA
SHORT DESCRIPTION
```

Use editorial rows and selected feature pieces.

Avoid repetitive blog cards.

---

# 63 — CASE STUDIES

If actual FSM case studies exist in the repository or source material:

use them.

If they do not:

do not fabricate them.

Build the architecture so real case studies can be inserted later.

---

# 64 — TRUST SYSTEM

Trust should come from:

* technical depth
* methodology
* delivery model
* evidence
* regional reach
* quality systems
* multidisciplinary expertise
* institutional clarity

Never use fake:

```text
99%
Success rate

500+
Projects

4.9/5
Client rating
```

---

# 65 — LOGO / ORGANIZATION MARKS

Only present organizations as clients/partners when the source explicitly supports that relationship.

Distinguish carefully between:

```text
Target / ecosystem organization
```

and:

```text
Verified FSM client / partner
```

This is a credibility rule.

---

# 66 — ABOUT PAGE COMPONENTS

The About page may use:

* editorial statement
* positioning block
* mission/vision
* values
* differentiators
* delivery model
* network
* quality systems

FSM's stated values are:

```text
Integrity
Excellence
Innovation
Accountability
Collaboration
Impact
```

These come from the corporate profile.

---

# 67 — FOOTER

The footer should feel like an institutional closing surface.

Use:

```text
FSM CONSULTING

Africa's Development Delivery Partner

Capabilities
Sectors
About
Network
Insights
Contact

Abuja, Nigeria
Email
Phone

© FSM Consulting Limited
```

Keep it visually substantial but not bloated.

---

# 68 — RESPONSIVE DESIGN

Responsive behavior is a **design requirement**, not a CSS cleanup phase.

Required validation:

```text
320px
375px
390px
430px

768px
820px
1024px

1280px
1440px
1600px
```

---

# 69 — MOBILE-FIRST RULE

Mobile is a first-class composition.

Never design:

```text
desktop
↓
stack everything
↓
call it responsive
```

Instead:

```text
desktop composition
tablet recomposition
mobile composition
```

Each breakpoint should preserve the hierarchy, not necessarily the geometry.

---

# 70 — MOBILE BENTO

Desktop:

```text
mixed spans
```

Tablet:

```text
2 columns
```

Mobile:

```text
single-column editorial stack
```

Do not preserve complicated desktop arrangements on mobile.

---

# 71 — MOBILE TYPOGRAPHY

Mobile typography must remain powerful without dominating the entire viewport.

Typical hero:

```text
38–48px
```

depending on actual text length.

Do not force fixed font sizes if they cause:

* awkward wrapping
* 4-line headlines
* overflow
* excessive hero height

---

# 72 — MOBILE HERO

Desktop:

```text
image
+
overlapping content panel
```

Mobile:

```text
image
↓
content panel
```

or another intentional recomposition.

No accidental overlap.

No text hidden behind image.

No fixed-height desktop hero carried onto mobile.

---

# 73 — TOUCH TARGETS

Minimum:

```text
44 × 44px
```

Preferred:

```text
48 × 48px
```

Applies to:

* buttons
* navigation
* accordion triggers
* menu controls
* interactive rows

---

# 74 — HOVER FALLBACKS

Every hover interaction must have an equivalent for:

* keyboard
* touch
* mobile

Never put critical content behind hover only.

---

# 75 — ACCESSIBILITY

Every component must support:

* semantic HTML
* heading hierarchy
* keyboard navigation
* focus state
* screen readers
* sufficient contrast
* reduced motion
* accessible labels
* correct ARIA only where needed

Do not add ARIA unnecessarily.

Prefer semantic HTML.

---

# 76 — FOCUS STATES

Focus states must remain visible.

Never:

```css
outline: none;
```

without providing an equivalent visible focus treatment.

Focus can use:

* gold ring
* navy contrast
* underline
* border

depending on context.

---

# 77 — MOTION ACCESSIBILITY

Respect:

```css
prefers-reduced-motion
```

When enabled:

* content appears immediately
* no large transforms
* no image zoom
* no decorative animation

---

# 78 — PERFORMANCE

Prioritize:

* optimized images
* responsive image sizing
* lazy loading
* font optimization
* minimal JavaScript
* route-level code splitting where appropriate
* avoiding unnecessary animation libraries

Do not introduce heavy dependencies to reproduce simple motion.

---

# 79 — NO WEBGL / NO 3D GIMMICKS

Do not introduce:

* WebGL
* Three.js
* particle fields
* 3D card tilt
* mouse-following effects
* excessive parallax

The sophistication comes from:

```text
composition
+
typography
+
photography
+
spacing
+
interaction
```

---

# 80 — COMPONENT NAMING

Components should describe FSM experiences.

Good:

```text
CapabilityRow
Impact360
DeliveryTimeline
NetworkMap
InsightRow
EditorialHero
ServiceExplorer
```

Bad:

```text
FancyCard
ModernCard
PremiumCard
GlassCard
MagicSection
```

---

# 81 — CORE COMPONENT LIBRARY

Expected reusable primitives:

```text
FSMLogo
FSMNavigation
FSMUtilityBar
FSMMenu
FSMMegaMenu
FSMButton
FSMArrowLink
FSMSectionHeading
FSMEditorialHero
FSMImagePanel
FSMBento
FSMCapabilityList
FSMCapabilityRow
FSMSectorList
FSMInsightRow
FSMImpact360
FSMDeliveryTimeline
FSMNetworkMap
FSMMetric
FSMLogoStrip
FSMAccordion
FSMQuote
FSMContactPanel
FSMFooter
FSMReveal
```

Only create components that are actually needed.

---

# 82 — COMPONENT REUSE RULE

Before creating a new component:

1. Search the existing component library.
2. Determine whether an existing component can express the requirement.
3. Reuse if possible.
4. Extend if appropriate.
5. Create a new component only when the interaction/composition is genuinely different.

Do not duplicate components.

---

# 83 — CONTENT DATA

Repeated content must live in structured data.

For example:

```text
data/
  capabilities
  sectors
  insights
  network
```

or an equivalent architecture appropriate to the existing repository.

Do not repeat the same content in:

* homepage
* navigation
* capability index
* service pages

independently.

Create one source and render it.

---

# 84 — ROUTING

Expected architecture:

```text
/
 /about
 /capabilities
 /capabilities/[slug]
 /sectors
 /sectors/[slug]
 /delivery-ecosystem
 /network
 /insights
 /insights/[slug]
 /contact
```

Follow the repository's actual routing framework.

---

# 85 — PAGE GRAMMAR

Every page should belong to the same visual family.

This does NOT mean every page should look identical.

Use:

```text
shared typography
shared navigation
shared grid
shared spacing
shared buttons
shared motion
shared photography language
shared surfaces
```

Then give each page its own signature section.

---

# 86 — HOMEPAGE GRAMMAR

```text
NAV
↓
HERO
↓
POSITIONING
↓
CAPABILITIES
↓
IMPACT 360
↓
DELIVERY ECOSYSTEM
↓
SECTORS
↓
NETWORK
↓
INSIGHTS
↓
CTA
↓
FOOTER
```

---

# 87 — SERVICE PAGE GRAMMAR

```text
NAV
↓
SERVICE HERO
↓
OVERVIEW
↓
WHAT WE DO
↓
HOW WE WORK
↓
WHERE IT MATTERS
↓
RELATED CAPABILITIES
↓
INSIGHTS
↓
CTA
↓
FOOTER
```

---

# 88 — SECTION RHYTHM

A page should not become:

```text
white
white
white
white
white
```

or:

```text
card
card
card
card
```

Use visual rhythm:

```text
image
↓
editorial
↓
list
↓
dark system
↓
image
↓
bento
↓
editorial
↓
dark CTA
```

The exact sequence may change.

The principle remains.

---

# 89 — VISUAL WEIGHT

Every page needs:

### One dominant moment

Example:

Hero.

### Several supporting moments

Example:

Capabilities / Impact 360.

### Quiet informational moments

Example:

Metadata / footer / secondary navigation.

Do not make everything equally loud.

---

# 90 — NEGATIVE SPACE

Whitespace is an active design element.

Do not fill empty space simply because it exists.

Use negative space to:

* isolate important ideas
* create pacing
* establish authority
* improve readability
* create visual tension

---

# 91 — EDITORIAL ALIGNMENT

Major text blocks should usually align to the grid.

Avoid random centered content unless the composition specifically calls for it.

Prefer:

* left alignment
* controlled content widths
* offset compositions
* asymmetric image/text balance

---

# 92 — DARK SECTION RULE

A dark section must have a purpose.

Good uses:

* hero
* methodology
* delivery system
* CTA
* footer
* selected institutional statement

Do not alternate dark/light purely because the page needs “variety.”

---

# 93 — INTERACTIVE LIST RULE

Interactive lists should have:

* obvious active state
* keyboard state
* touch state
* clear hierarchy
* predictable movement

Never make interaction ambiguous.

---

# 94 — ERROR STATES

Forms and dynamic systems need:

* loading
* success
* error
* validation

Do not rely only on color.

---

# 95 — NO FAKE FUNCTIONALITY

Every visible action should either:

1. work,
2. route somewhere real,
3. open a real interaction,
4. or clearly indicate that content/integration is pending.

Never create fake buttons.

---

# 96 — SEO / SEMANTICS

Implement:

* semantic HTML
* correct headings
* page titles
* descriptions
* Open Graph metadata
* canonical metadata where appropriate
* meaningful routes

Do not keyword stuff.

---

# 97 — 404

404 should belong to the same visual system.

Example structure:

```text
PAGE NOT FOUND

The page you're looking for
could not be located.

RETURN HOME →
```

No generic developer 404.

---

# 98 — VISUAL QA

Before a feature is considered complete, check:

### Reference fidelity

Does it belong to the visual world of the supplied reference?

### FSM identity

Does it clearly feel like FSM?

### Composition

Is the layout intentionally composed?

### Typography

Is hierarchy strong?

### Photography

Does the image feel credible?

### Information density

Is the page informative without becoming cluttered?

### Interaction

Are interactions useful and restrained?

### Mobile

Was mobile intentionally designed?

### Accessibility

Can it be used without a mouse?

### Performance

Does it load efficiently?

---

# 99 — AI-GENERIC TEST

Ask:

> Could this section have been produced by telling an AI “make me a premium consulting website”?

If yes:

**redesign it.**

Common failure patterns:

```text
3 identical cards
+
gradient
+
huge centered headline
+
floating glass cards
+
random statistics
+
three icons
+
“Learn More”
```

That is not FSM.

---

# 100 — INSTITUTIONAL TEST

Ask:

> Would this feel credible to a senior development professional, government stakeholder, development partner, or international financial institution?

If not:

rework it.

---

# 101 — AFRICAN DELIVERY TEST

Ask:

> Does this communicate Africa through actual delivery capability rather than decoration?

If not:

rework the imagery/content.

---

# 102 — PREMIUM TEST

Premium means:

```text
better composition
better typography
better imagery
better spacing
better hierarchy
better interaction
better restraint
```

Premium does NOT mean:

```text
more animation
more gold
more gradients
more 3D
more effects
```

---

# 103 — FUTURE AI RULE

Every future AI agent must preserve:

```text
FSM brand
+
reference visual grammar
+
institutional credibility
+
responsive art direction
+
content truth
+
motion restraint
```

A new AI may improve the system.

It may not casually replace it with another design language.

---

# 104 — EXTENDING THE SYSTEM

If a genuinely new UI pattern is needed:

1. determine why existing patterns fail
2. design the new pattern using existing visual grammar
3. implement it
4. document it here
5. document the UX reasoning in `FSM_DIGITAL_EXPERIENCE.md`
6. ensure responsive behavior
7. ensure accessibility
8. ensure reduced motion
9. ensure it passes the reference test

---

# 105 — WHAT MUST NEVER HAPPEN

Never introduce:

* random gradients
* glassmorphism
* neon
* excessive shadows
* sharp card corners
* giant blobs
* generic SaaS dashboard patterns
* generic NGO styling
* excessive gold
* multiple accent colors
* fake statistics
* fake testimonials
* fake case studies
* fake client relationships
* fake offices
* fake certifications
* generic AI copy
* unnecessary 3D
* excessive parallax
* scroll hijacking
* hover-only critical information
* desktop-only compositions
* inaccessible controls

---

# 106 — FINAL DESIGN FORMULA

The website should approximately feel like:

```text
EDITORIAL CONSULTING
        +
INSTITUTIONAL AUTHORITY
        +
AFRICAN DELIVERY REALITY
        +
TECHNICAL PRECISION
        +
SUBTLE DIGITAL INTERACTION
        +
FSM NAVY / GOLD IDENTITY
```

Not:

```text
CORPORATE TEMPLATE
+
AFRICAN STOCK PHOTO
+
BENTO CARDS
+
GOLD BUTTONS
```

---

# 107 — THE CORE RULE

> **The design system must constrain the visual language, not constrain creativity.**

Components are not the experience.

Tokens are not the experience.

Cards are not the experience.

The experience is:

> **FSM Consulting presented as a serious, technically capable, Africa-based development delivery partner with international-standard digital presence.**

The UI is the instrument used to communicate that.

---

# 108 — FINAL IMPLEMENTATION PRINCIPLE

When deciding between two implementations, choose the one that:

1. communicates FSM more clearly,
2. resembles the supplied reference's design intelligence more closely,
3. improves information hierarchy,
4. works better on mobile,
5. is more accessible,
6. uses less unnecessary UI,
7. feels more institutional,
8. remains maintainable by another AI.

**Do not optimize for code cleverness at the expense of visual quality.**

**Do not optimize for visual novelty at the expense of credibility.**

**Do not optimize for desktop at the expense of mobile.**

**Do not optimize for aesthetics at the expense of content truth.**

---

# 109 — DEFINITION OF DONE

A UI implementation is NOT finished when:

```text
npm run build
```

passes.

It is finished when:

```text
BUILD
✓

ROUTES
✓

CONTENT
✓

REFERENCE FIDELITY
✓

FSM BRAND
✓

RESPONSIVE
✓

ACCESSIBILITY
✓

MOTION
✓

PERFORMANCE
✓

NO FAKE CONTENT
✓

NO GENERIC AI UI
✓

VISUAL QA
✓
```

Only then is the work considered complete.
