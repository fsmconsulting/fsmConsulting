# FSM Digital Experience — Creative & UX Source of Truth

> **Read this document before `DESIGN_SYSTEM.md`, and read both before touching any UI in this repository.**
>
> This document defines the creative direction, information architecture, visual composition, interaction philosophy, responsive art direction, and UX behavior of the FSM Consulting Limited digital experience.
>
> `DESIGN_SYSTEM.md` translates these decisions into implementation tokens, reusable classes, component primitives, typography tokens, spacing rules, motion tokens, and code-level constraints.
>
> If implementation and creative direction ever conflict, **this document wins**. Correct `DESIGN_SYSTEM.md` rather than silently changing the experience.

---

# 01 — THE DIGITAL EXPERIENCE IN ONE SENTENCE

**FSM is not a corporate website made from components. FSM is an institutional digital experience expressed through components.**

The site must feel like the digital presence of an organisation capable of handling complex development assignments across institutions, countries, sectors, technical disciplines, and implementation environments.

It must communicate:

> **seriousness → intelligence → delivery capability → regional access → evidence → action**

The visual language must therefore feel:

- institutional
- editorial
- intelligent
- restrained
- spatial
- contemporary
- credible
- African without cliché
- internationally legible
- technically sophisticated without looking like a technology company
- premium without becoming luxurious
- confident without becoming promotional

The site must **never** feel like:

- a generic consulting template
- a SaaS dashboard
- a startup landing page
- an NGO website
- a government portal
- a banking website
- a luxury brand
- an AI-generated "premium" website
- a page made entirely from rounded cards

---

# 02 — THE SOURCE HIERARCHY

The digital experience is created from three sources:

```text
                    FSM CORPORATE PROFILE
                            │
                            │
                            ▼
             CONTENT / POSITIONING / FACTS
                            │
                            ▼
                 FSM DIGITAL EXPERIENCE
                            │
                 creative + UX authority
                            │
                            ▼
                    DESIGN SYSTEM
                            │
                  implementation rules
                            │
                            ▼
                     COMPONENTS
                            │
                            ▼
                       PAGES
```

## Priority

### 1. FSM Corporate Profile

Determines:

- what FSM says
- what FSM offers
- who FSM serves
- geographic claims
- service names
- positioning
- delivery model
- sectors
- Impact 360
- differentiators
- organisational claims

Do not invent corporate facts.

The profile describes FSM as a multidisciplinary development delivery, implementation acceleration and project assurance firm helping governments, development partners, international financial institutions and private-sector organisations turn investments into measurable results and sustainable impact. :contentReference[oaicite:2]{index=2}

### 2. `FSM_DIGITAL_EXPERIENCE.md`

Determines:

- how the information is experienced
- composition
- hierarchy
- visual rhythm
- interaction
- responsive art direction
- page grammar
- section relationships
- visual storytelling

### 3. `DESIGN_SYSTEM.md`

Determines:

- exact tokens
- implementation primitives
- colours
- typography implementation
- radii
- spacing
- component classes
- motion tokens
- technical constraints

Never use the design system as an excuse to ignore the composition described here.

---

# 03 — THE REFERENCE FOUNDATION

The three selected Conceptzilla consulting-firm references are the primary visual foundation:

1. Website Design for Consulting Firm — Conceptzilla
2. Website Design for Consulting Firm — Conceptzilla
3. Website Design for Consulting Firm — Conceptzilla

The references establish the site's:

- composition
- proportion
- whitespace
- image-to-text relationship
- navigation behavior
- rounded-surface language
- editorial hierarchy
- modular information architecture
- case-study treatment
- CTA treatment
- restrained motion
- responsive philosophy

FSM does **not** copy the reference brand.

The reference's green becomes FSM's deep blue.

The reference's content becomes FSM's real institutional content.

The reference's brand identity disappears.

The **visual grammar remains**.

---

# 04 — REFERENCE TRANSLATION

The relationship is:

```text
REFERENCE
composition
      +
REFERENCE
interaction
      +
REFERENCE
information density
      +
FSM
brand
      +
FSM
content
      +
FSM
development context
      =
FSM DIGITAL EXPERIENCE
```

Do not do this:

```text
Reference
   ↓
generic consulting template
   ↓
FSM content
```

Do this:

```text
Reference visual language
   ↓
FSM visual translation
   ↓
FSM institutional experience
```

---

# 05 — THE MOST IMPORTANT VISUAL RULE

## Composition before components.

Do not begin a page by asking:

> "Which cards do I need?"

Begin by asking:

> "What should the user see first, second and third?"

Then:

> "What deserves visual weight?"

Then:

> "Where should the page breathe?"

Then:

> "Which information deserves containment?"

Then:

> "Which information should remain directly on the canvas?"

Only then choose components.

This prevents the most common failure mode:

```text
heading
↓
three cards
↓
heading
↓
four cards
↓
heading
↓
three cards
↓
CTA
```

That is not the FSM experience.

---

# 06 — VISUAL DNA

Every page should contain some combination of these characteristics.

## 6.1 Large canvas

White or very light neutral space should dominate.

The page should have room to breathe.

Do not fill every available pixel.

---

## 6.2 Strong photography

Photography should perform narrative work.

A photograph should communicate:

- place
- people
- infrastructure
- field work
- implementation
- institutions
- communities
- project environments
- professional collaboration
- African context

Do not use:

- abstract blue technology backgrounds
- random office stock photography
- generic handshakes
- fake boardrooms
- laptop stock photos
- decorative gradients pretending to be imagery

---

# 07 — THE AFRICA TEST

Every major photographic choice must pass:

> **Could this image plausibly belong to the real environments FSM operates in?**

Good:

- African cities
- project sites
- field teams
- public infrastructure
- communities
- transport networks
- agricultural environments
- urban development
- government/institutional environments
- professional teams working in African contexts
- real landscapes and built environments

Bad:

- stereotypical "Africa" imagery
- poverty porn
- safari clichés
- random African flags
- excessive maps of Africa used as decoration
- generic smiling-businesspeople imagery
- imagery selected only because it contains blue

Africa should feel **present and real**, not advertised.

---

# 08 — COLOUR PHILOSOPHY

FSM uses a restrained palette.

The reference's green/black relationship becomes:

```text
FSM DEEP BLUE
        +
WHITE / LIGHT NEUTRAL CANVAS
        +
BLUE ACCENT
```

The deep blue occupies the same conceptual role that near-black/deep green occupies in the reference.

It provides:

- authority
- contrast
- depth
- emphasis
- visual punctuation

It does **not** become the default background for the whole website.

## Gold is retired.

Even though the logo contains gold, the digital experience does not use gold as an accent.

Do not reintroduce gold.

The existing `--color-gold` token is a legacy naming issue and must be treated as a blue accent token as defined in `DESIGN_SYSTEM.md`.

---

# 09 — INFORMATION HIERARCHY

Every screen should have a clear hierarchy.

At any moment the user should understand:

### Level 1

**What is this page about?**

### Level 2

**Why does it matter?**

### Level 3

**What does FSM actually do here?**

### Level 4

**What evidence / mechanism / capability supports this?**

### Level 5

**What should I do next?**

Do not present all five levels with identical typography.

Hierarchy is created through:

- size
- position
- whitespace
- contrast
- image scale
- containment
- density

—not merely bold text.

---

# 10 — TYPOGRAPHY PHILOSOPHY

FSM uses two voices.

## IBM Plex Sans

Primary institutional voice.

Use for:

- hero headlines
- navigation
- body copy
- buttons
- labels
- service descriptions
- metadata
- UI
- functional information

## Source Serif 4

Editorial voice.

Use for:

- section statements
- large editorial moments
- selected page headings
- pull quotes
- high-level narrative statements
- closing statements
- moments intended to slow the user down

### Important

Do not turn every heading into serif.

Do not turn every heading into sans-serif.

The contrast between the two creates rhythm.

---

# 11 — PAGE RHYTHM

The site should alternate between information density.

A typical page rhythm:

```text
HIGH IMPACT
Hero

↓

QUIET
Positioning statement

↓

MEDIUM DENSITY
Capabilities

↓

QUIET / EDITORIAL
Impact statement

↓

HIGH DENSITY
Delivery model / evidence

↓

VISUAL
Photography / network / context

↓

MEDIUM DENSITY
Insights

↓

HIGH CONTRAST
Closing CTA
```

This rhythm prevents visual fatigue.

A user should not encounter six dense card grids consecutively.

---

# 12 — HOMEPAGE EXPERIENCE

The homepage is the primary expression of the FSM system.

Its conceptual journey is:

```text
NAVIGATION
      ↓
HERO
      ↓
WHAT FSM IS
      ↓
WHY FSM
      ↓
CAPABILITIES
      ↓
IMPACT 360
      ↓
DELIVERY ECOSYSTEM
      ↓
SECTOR / CONTEXT
      ↓
REGIONAL NETWORK
      ↓
INSIGHTS
      ↓
CLOSING CTA
      ↓
FOOTER
```

The exact content may evolve, but the experience should preserve this movement.

---

# 13 — NAVIGATION

## Desktop

Navigation should feel integrated with the visual experience rather than sitting in a generic corporate header.

The hero navigation is:

```text
FSM WORDMARK
                         About
                         Capabilities
                         Sectors
                         Delivery
                         Network
                         Insights

                         [Discuss an assignment]
```

The hero navigation sits directly over the hero image.

There is **no utility bar above the hero**.

Do not add:

```text
email | phone | global reach | social
```

above the main navigation.

That creates the generic corporate website structure that the reference intentionally avoids.

---

## Navigation behavior

At the top of the homepage:

```text
transparent
white/light navigation
```

As the user scrolls:

```text
solid/light surface
dark navigation text
subtle transition
```

The transition should be quiet.

No dramatic animation.

No bouncing header.

---

# 14 — NAVIGATION MOBILE

Mobile navigation is a deliberate composition.

Do not simply shrink desktop navigation.

Structure:

```text
FSM
                                      MENU
```

Opening the menu produces a full-screen or near-full-screen institutional navigation surface.

It should contain:

```text
About

Capabilities
    Development Effectiveness
    Project Assurance
    MEAL
    Governance
    ...
    
Sectors

Delivery Ecosystem

Network

Insights

[Discuss an assignment]
```

The mobile menu should feel like part of the site, not a browser drawer.

---

# 15 — HERO

The hero is the site's strongest visual moment.

## Desktop anatomy

```text
┌──────────────────────────────────────────────────────┐
│ FSM                           NAVIGATION             │
│                                                      │
│                                                      │
│                  FULL-BLEED IMAGE                    │
│                                                      │
│                                                      │
│                                                      │
│  HEADLINE                                            │
│  Supporting statement                                │
│                                                      │
│  [PRIMARY CTA]   Secondary action                    │
│                                                      │
└──────────────────────────────────────────────────────┘
```

The image runs edge-to-edge.

No page gutter.

No outer card radius.

No utility bar.

The navigation belongs to the hero.

---

# 16 — HERO IMAGE TREATMENT

The image is the first visual signal of the company.

It should have enough tonal control to support readable typography.

Preferred treatment:

- natural documentary image
- controlled darkening where text sits
- restrained blue/monochrome treatment when appropriate
- no excessive overlay
- no gradient covering the entire photograph unless genuinely required for legibility

The image must remain recognisable.

Do not destroy photographic detail with a heavy blue filter.

---

# 17 — HERO COPY

The hero should not contain a paragraph of corporate filler.

It should communicate FSM's core proposition quickly.

The profile gives the organisation's central positioning around supporting governments, development partners, international financial institutions and private-sector organisations to accelerate implementation, deliver results and create sustainable impact. :contentReference[oaicite:3]{index=3}

The homepage should translate that into a short, forceful hierarchy.

Conceptually:

```text
EYEBROW
Africa's Development Delivery Partner

HEADLINE
A large institutional proposition.

SUPPORTING COPY
One concise explanation.

PRIMARY ACTION
Discuss an assignment

SECONDARY ACTION
Explore capabilities
```

Do not overload the hero with all 14 services.

---

# 18 — HERO RESPONSIVE ART DIRECTION

## Desktop

The photograph dominates.

Headline occupies approximately 35–45% of usable width.

Navigation sits over the image.

Content is anchored toward the lower portion.

---

## Tablet

Preserve the photographic dominance.

Reduce headline width.

Navigation simplifies.

Secondary action may move closer to the primary CTA.

Do not unnecessarily turn the hero into a text-only block.

---

## Mobile

The composition changes.

It does not shrink.

Preferred structure:

```text
┌─────────────────────┐
│ NAV                 │
│                     │
│                     │
│     PHOTO           │
│                     │
│                     │
│                     │
├─────────────────────┤
│ HEADLINE            │
│ Supporting copy     │
│                     │
│ [CTA]               │
└─────────────────────┘
```

The lower content area becomes a deliberate editorial panel.

The image should remain tall enough to feel like a real photograph, not a banner.

---

# 19 — HERO MOTION

The hero receives the site's primary orchestrated motion moment.

Possible sequence:

```text
hero image
      ↓
navigation settles
      ↓
headline enters
      ↓
supporting copy enters
      ↓
CTA becomes available
```

Use one coherent choreography.

Do not:

```text
fade-up heading
fade-up paragraph
fade-up button
fade-up card
fade-up image
fade-up nav
fade-up everything
```

That creates an AI-generated motion signature.

The hero should feel **composed**, not animated for animation's sake.

---

# 20 — POSITIONING SECTION

Immediately after the hero, the site should breathe.

This section explains what FSM actually is.

FSM describes itself as an Africa-based development solutions, delivery and professional contracting partner combining global expertise, regional access and local implementation capability. :contentReference[oaicite:4]{index=4}

This should become an editorial statement rather than a grid of four cards.

Possible structure:

```text
SMALL LABEL

A large statement spanning the canvas.

Supporting explanation.

                    GLOBAL EXPERTISE
                    REGIONAL ACCESS
                    NATIONAL CAPABILITY
                    LOCAL KNOWLEDGE
```

The four concepts can be visually structured without automatically becoming four cards.

---

# 21 — VALUE / DIFFERENTIATOR COMPOSITION

FSM's four-part delivery proposition is:

```text
Global Expertise
Regional Access
National Capability
Local Knowledge
```

The corporate profile explicitly describes this relationship. :contentReference[oaicite:5]{index=5}

Treat these as a **system**, not four identical cards.

Possible composition:

```text
┌────────────────────────────┬───────────────┐
│                            │ GLOBAL        │
│ Large editorial statement   │ EXPERTISE     │
│                            │               │
│                            ├───────────────┤
│                            │ REGIONAL      │
│                            │ ACCESS        │
└────────────────────────────┴───────────────┘
┌───────────────┬───────────────┬─────────────┐
│ NATIONAL      │ LOCAL         │ IMAGE       │
│ CAPABILITY    │ KNOWLEDGE     │             │
└───────────────┴───────────────┴─────────────┘
```

The exact grid may change.

The principle does not:

**vary the visual weight.**

---

# 22 — CAPABILITIES

FSM has a broad service portfolio.

Do not display 14 identical cards in a monotonous grid as the primary experience.

The profile contains 14 major service areas including Development Effectiveness, Project Assurance, MEAL, Governance and Public Sector Reform, Environmental and Social Safeguards, Land Governance and Investment Advisory, Digital Transformation and Data Solutions, Implementation Support, Crisis Resilience and Adaptive Development, Jobs and Economic Transformation Advisory, Procurement Excellence and Fiduciary Services, and PPP and Investment Facilitation. :contentReference[oaicite:6]{index=6} :contentReference[oaicite:7]{index=7}

The homepage should communicate the breadth without overwhelming the user.

---

# 23 — CAPABILITIES HOMEPAGE PATTERN

Use a modular editorial grid.

Example:

```text
CAPABILITIES

We help organisations move from
strategy to measurable delivery.

┌──────────────────────────┬───────────────────┐
│ Development Effectiveness│ Project Assurance │
│ description              │ description       │
│ Learn more →             │ Learn more →      │
├──────────────────┬───────┴───────────────────┤
│ MEAL             │ Governance                │
│ description      │ description               │
├──────────────────┴──────────────┬─────────────┤
│ Digital Transformation          │ Safeguards   │
└─────────────────────────────────┴─────────────┘
```

The grid should vary.

Not every item gets:

```text
icon
heading
paragraph
arrow
```

That is prohibited.

---

# 24 — CAPABILITY DETAIL PAGE

Every major capability page should share a common grammar.

```text
PAGE HEADER
      ↓
CAPABILITY INTRO
      ↓
WHAT THIS COVERS
      ↓
HOW FSM DELIVERS IT
      ↓
RELATED EXPERTISE
      ↓
RELEVANT SECTORS
      ↓
DELIVERY / EVIDENCE
      ↓
RELATED CAPABILITIES
      ↓
CTA
```

The page should feel like a continuation of the homepage, not a completely different template.

---

# 25 — SERVICE PAGE HERO

Interior pages do **not** use the exact homepage hero.

Use the shorter inset rounded `PageHeader`.

Conceptually:

```text
┌────────────────────────────────────────────┐
│                                            │
│ CAPABILITY                                │
│                                            │
│ Development Effectiveness                  │
│                                            │
│ Short explanatory statement                │
│                                            │
│                                      IMAGE │
└────────────────────────────────────────────┘
```

This distinction is intentional.

Homepage:

**full-bleed hero**

Interior page:

**shorter inset editorial header**

Do not unify them merely for component reuse.

---

# 26 — IMPACT 360

FSM Impact 360 is one of the site's strongest proprietary structural concepts.

The profile defines:

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

:contentReference[oaicite:8]{index=8}

This should not be displayed as six generic cards.

It should feel like a **system**.

---

# 27 — IMPACT 360 VISUALIZATION

Desktop:

```text
              IDENTIFY
                 ↓
MEASURE → PLAN → ACCELERATE → CHECK → TRACK
```

or another continuous editorial composition.

The user should visually understand:

> FSM does not simply advise. It follows the delivery journey.

Possible interaction:

- hover/focus on a stage
- stage becomes visually dominant
- related explanation appears
- neighbouring stages remain visible
- progress line remains continuous

Do not create a dashboard-like stepper.

Do not use glowing progress bars.

Do not use excessive animation.

---

# 28 — IMPACT 360 MOBILE

On mobile, the sequence becomes a vertical journey:

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
      ↓
04
ACCELERATE IMPLEMENTATION
description
      ↓
05
CHECK PROGRESS
description
      ↓
06
TRACK OUTCOMES
description
```

A subtle connecting line may run through the sequence.

Each stage must remain readable without interaction.

---

# 29 — DELIVERY ECOSYSTEM

FSM's delivery chain is a major differentiator.

The profile defines:

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

:contentReference[oaicite:9]{index=9}

This should become a visual journey.

---

# 30 — DELIVERY ECOSYSTEM VISUAL LANGUAGE

Do not represent it as eight rounded cards.

Instead, think:

```text
01 ───── 02 ───── 03 ───── 04
                           │
                           ↓
08 ←───── 07 ───── 06 ───── 05
```

or another editorial sequence.

Use:

- numbered markers
- connecting lines
- restrained typography
- selective containment
- one or two dark surfaces

The user should feel that the system **moves**.

---

# 31 — REGIONAL NETWORK

FSM is headquartered in Nigeria and describes a growing delivery network across Africa, including strategic partnerships and professional networks in Senegal, Sierra Leone, Cameroon, Kenya and Uganda. :contentReference[oaicite:10]{index=10}

The network section should therefore communicate:

```text
Nigeria
     +
West Africa
     +
Central Africa
     +
East Africa
     +
international expertise
```

Do not turn this into a decorative Africa map.

---

# 32 — NETWORK VISUALIZATION

A geographic visualization can be used when it adds meaning.

Preferred:

- restrained map
- subtle country markers
- selected highlighted locations
- connecting lines only where meaningful
- hover/focus reveals country context
- supporting text explains the access model

The map must not become the entire section.

The message is:

> **FSM can assemble the appropriate combination of global, regional and local capability around an assignment.**

The profile explicitly describes four complementary delivery channels: direct corporate presence, strategic partnership/consortium access, multidisciplinary professional network, and international knowledge exchange/technical cooperation. :contentReference[oaicite:11]{index=11}

These channels should be represented in the content, not merely implied by geography.

---

# 33 — NATIONAL REACH

FSM's profile states that it can mobilize qualified professionals across all 36 states of Nigeria and the Federal Capital Territory. :contentReference[oaicite:12]{index=12}

This is one of the few numerical/geographic claims that can be used prominently because it is directly sourced.

Possible visual treatment:

```text
36 STATES + FCT

National Presence

Community-level reach
Project-site access
Field verification
Stakeholder engagement
```

This should feel like evidence, not advertising.

---

# 34 — CROSS-BORDER DELIVERY

The cross-border model includes operational support such as:

- visa and immigration coordination
- invitation documentation
- airport coordination
- accommodation
- transport
- security
- field logistics
- orientation
- translation
- local counterpart coordination
- stakeholder meetings
- consultant mobilisation
- ongoing operational support

:contentReference[oaicite:13]{index=13}

Do not dump this into a long list.

Turn it into an operational story:

```text
PREPARE
      ↓
MOBILISE
      ↓
ARRIVE
      ↓
OPERATE
      ↓
COORDINATE
      ↓
DELIVER
```

This is a good example of where FSM's content can produce a distinctive interaction pattern rather than another card grid.

---

# 35 — SECTORS

Sector content should feel contextual.

The corporate profile identifies expertise across areas including:

- development planning and policy
- project management
- MEAL
- governance and public-sector reform
- environmental and social safeguards
- land administration and governance
- agriculture and rural development
- health systems strengthening
- education and skills development
- infrastructure and urban development
- climate change and sustainability
- gender equality and social inclusion
- financial management and procurement
- digital transformation and data analytics

:contentReference[oaicite:14]{index=14}

Do not show every sector as an identical icon card.

---

# 36 — SECTOR EXPERIENCE PATTERN

A sector page should establish context first.

```text
SECTOR
      ↓
WHY THIS CONTEXT MATTERS
      ↓
FSM'S RELEVANT CAPABILITIES
      ↓
TECHNICAL EXPERTISE
      ↓
DELIVERY MODEL
      ↓
RELATED SECTORS
      ↓
CTA
```

For example, a future Climate & Resilience page should not look like a copy of the Digital Transformation page with new text.

The composition can remain consistent while the visual evidence and content density adapt to the subject.

---

# 37 — CASE STUDIES / EVIDENCE

The reference treats case studies as major visual objects.

FSM must preserve this.

But:

## Never fabricate case studies.

If client-approved evidence is not available, do not invent:

- clients
- project values
- outcomes
- countries
- dates
- impact percentages
- testimonials
- project names

The corporate profile does not currently provide enough verified case-study material to justify invented project stories.

Therefore the UI must support an **evidence-ready state**.

---

# 38 — CASE STUDY PLACEHOLDER STATE

The structure should already exist:

```text
PROJECT EVIDENCE

[REGIONAL] [NATIONAL]

Challenge
────────────

Impact
────────────

Delivery role
────────────

[Learn more]
```

When content is unavailable:

```text
Selected project evidence
will appear here as client-approved
case material becomes available.
```

Do not make the placeholder look like a fake project.

Do not use:

> "Coming soon"

in huge typography.

The site should feel complete even while remaining honest.

---

# 39 — CASE STUDY DETAIL PAGE

When real material becomes available:

```text
PROJECT HERO
      ↓
CONTEXT
      ↓
CHALLENGE
      ↓
FSM ROLE
      ↓
APPROACH
      ↓
DELIVERY
      ↓
RESULTS
      ↓
LESSONS / IMPACT
      ↓
RELATED CAPABILITIES
      ↓
NEXT ASSIGNMENT
```

The case-study page should be information-rich.

It should not become a blog post.

---

# 40 — INSIGHTS

Insights should feel editorial.

The reference uses:

```text
one dominant feature
+
smaller supporting stories
```

not:

```text
3-column blog grid
3-column blog grid
3-column blog grid
```

FSM's insights can cover:

- development effectiveness
- implementation
- project assurance
- governance
- MEAL
- digital transformation
- safeguards
- land governance
- economic transformation
- procurement
- resilience

Only publish content that actually exists.

---

# 41 — INSIGHTS CARD HIERARCHY

Featured insight:

```text
LARGE IMAGE

CATEGORY
TITLE

short description

Read insight →
```

Secondary:

```text
CATEGORY
TITLE
metadata
→
```

The featured item should visually dominate.

Not every insight deserves equal weight.

---

# 42 — ABOUT PAGE

The About page should answer:

> Who is FSM?

Then:

> Why does FSM exist?

Then:

> How is FSM different?

Then:

> How does FSM operate?

Then:

> Where can FSM operate?

The profile describes FSM as an "Africa's Development Delivery and Intelligence platform" combining strategy, project assurance, implementation, technology and talent. :contentReference[oaicite:15]{index=15}

Use that as a conceptual foundation.

---

# 43 — ABOUT PAGE GRAMMAR

```text
PAGE HEADER
      ↓
WHO FSM IS
      ↓
VISION / MISSION
      ↓
POSITIONING
      ↓
VALUES
      ↓
WHAT MAKES FSM DIFFERENT
      ↓
DELIVERY MODEL
      ↓
REGIONAL NETWORK
      ↓
QUALITY / COMMITMENT
      ↓
CTA
```

Values should not necessarily be six cards.

The six values are:

- Integrity
- Excellence
- Innovation
- Accountability
- Collaboration
- Impact

:contentReference[oaicite:16]{index=16}

---

# 44 — WHY FSM

This section should answer the client's underlying question:

> Why should I trust FSM with this assignment?

The corporate profile identifies:

1. Deep development-sector expertise
2. Evidence-driven approach
3. Multidisciplinary team
4. National and regional reach
5. Technology-enabled solutions
6. Independent and objective approach
7. Strong stakeholder engagement

:contentReference[oaicite:17]{index=17}

Do not present these as seven identical marketing cards.

Use editorial grouping.

---

# 45 — TARGET CLIENTS

FSM serves multiple audiences.

The profile identifies:

### International Financial Institutions

- World Bank Group
- African Development Bank
- Islamic Development Bank

### Development Partners

- United Nations agencies
- European Union
- FCDO
- USAID
- GIZ
- DFIs and foundations

### Governments

- Federal ministries
- State governments
- Local government authorities

### Private Sector

- Investors
- Financial institutions
- Infrastructure companies
- Agribusiness firms

### Civil Society

- NGOs
- Foundations
- Development networks

:contentReference[oaicite:18]{index=18}

The site should allow each audience to quickly recognise relevance.

---

# 46 — AUDIENCE UX

Do not create a giant audience selector.

Instead, allow the information architecture to naturally surface:

```text
For governments
For development partners
For financial institutions
For private-sector organisations
For civil society
```

These can appear in relevant sections and navigation.

A future audience-specific landing page should reuse FSM's existing grammar rather than create a new visual system.

---

# 47 — QUALITY / TRUST

FSM's profile explicitly commits to:

- quality management systems
- ethical conduct policies
- anti-corruption frameworks
- data protection policies
- safeguarding policies
- gender equality
- risk management frameworks
- continuous professional development

:contentReference[oaicite:19]{index=19}

Trust content should therefore feel operational.

Avoid oversized:

> "TRUSTED"

marketing statements.

Instead show the actual systems and principles.

---

# 48 — CLOSING CTA

The closing CTA is a major visual punctuation point.

Reference behavior:

```text
large inset rounded dark panel
white/light text
one strong CTA
```

FSM version:

```text
NAVY PANEL

Ready to move an assignment forward?

Tell us what you are working on.

[Discuss an assignment]
```

Keep it simple.

Do not add four competing buttons.

---

# 49 — CTA LANGUAGE

Primary CTA:

**Discuss an assignment**

Possible secondary actions:

- Explore capabilities
- View our approach
- Explore our network
- Read insights

Avoid generic:

- Get Started
- Learn More
- Contact Us
- Let's Talk
- Book a Call

unless context genuinely requires them.

---

# 50 — CONTACT EXPERIENCE

The contact experience should feel like an institutional intake, not a generic contact form.

The user should be able to communicate:

```text
Organisation
Name
Email
Assignment / area
Location
What are you working on?
```

Do not require unnecessary information.

The contact page should explain what happens after submission.

---

# 51 — FOOTER

Footer should be dense but structured.

Recommended hierarchy:

```text
FSM
Africa's Development Delivery Partner

Capabilities
About
Sectors
Delivery Ecosystem
Network
Insights

Contact
Abuja, Nigeria
info@fsmconsulting.com
+234 9040009512

LinkedIn
```

The corporate profile lists Abuja, Nigeria, the official website, email addresses and phone number. :contentReference[oaicite:20]{index=20}

Do not invent additional offices.

---

# 52 — CARD PHILOSOPHY

Cards are not the design.

Cards are a tool.

Use a card when information benefits from:

- containment
- separation
- interaction
- visual emphasis
- scanning

Do not use a card merely because:

> "Every section needs cards."

---

# 53 — THREE CARD TYPES

At minimum distinguish:

## Information card

Small and quiet.

Used for:

- capabilities
- supporting information
- metadata

## Feature card

Larger.

Used for:

- featured insight
- key proposition
- major capability
- evidence

## Narrative card

Visually dominant.

Used for:

- case study
- major delivery story
- project evidence

These should not all look identical.

---

# 54 — BENTO RULE

Bento layouts are permitted.

But:

> **Bento is composition, not decoration.**

A bento grid should create hierarchy through unequal proportions.

Bad:

```text
[card] [card] [card]
[card] [card] [card]
```

Better:

```text
[       LARGE       ][ small ]
[       LARGE       ][ small ]
[ small ][    MEDIUM       ]
```

But only use this when the content hierarchy justifies it.

---

# 55 — ROUNDED SURFACE RULE

Rounded corners indicate:

> this information is a contained object.

They should not be applied indiscriminately.

Do not round:

- every image
- every section
- every paragraph
- every button-like link
- every container

The page needs contrast between:

```text
canvas
image
contained surface
dark panel
plain editorial text
```

---

# 56 — IMAGE + CONTENT RELATIONSHIP

Whenever possible:

```text
IMAGE
+
INFORMATION
```

should feel like one composition.

Avoid:

```text
image card

then

text card
```

with no visual relationship.

Instead:

```text
┌──────────────────────────────┐
│                              │
│ IMAGE                        │
│                              │
├──────────────────────────────┤
│ CONTENT                      │
└──────────────────────────────┘
```

or:

```text
┌────────────────┬─────────────┐
│                │             │
│ IMAGE          │ CONTENT     │
│                │             │
└────────────────┴─────────────┘
```

depending on content.

---

# 57 — LINK BEHAVIOUR

Not every link gets an arrow.

Use arrows where they communicate movement.

Examples:

```text
Learn more →
Explore capability →
View insight →
```

Navigation links should remain simple.

Primary CTAs use pills.

Secondary actions may remain text links.

---

# 58 — MICROINTERACTIONS

Interactions should feel engineered, not advertised.

## Buttons

On hover:

- subtle upward movement
- arrow moves slightly
- transition is quick

On press:

- slight compression

No bounce.

---

## Cards

On hover:

- subtle lift
- image may scale slightly
- content remains stable
- no giant shadow

---

## Images

On hover:

- restrained scale
- no aggressive zoom

---

## Navigation

Active state:

- clear
- quiet
- no glowing underline
- no animated blob

---

# 59 — MOTION LIMIT

The site should have:

**one orchestrated motion moment per major section at most.**

The hero can have the strongest choreography.

Other sections should primarily use:

- hover
- focus
- subtle entrance
- image movement
- state transitions

Do not animate everything.

---

# 60 — SCROLL BEHAVIOUR

Do not use:

- scroll hijacking
- mandatory horizontal scrolling
- parallax everywhere
- excessive sticky sections
- artificial scroll storytelling

Scrolling should feel natural.

If a horizontal interaction is used, provide:

- obvious affordance
- touch support
- keyboard support where appropriate
- a non-interactive fallback

---

# 61 — RESPONSIVE PHILOSOPHY

Three explicit compositions must be designed:

```text
DESKTOP
TABLET
MOBILE
```

Not:

```text
desktop
↓
CSS media query
↓
hope it works
```

---

# 62 — DESKTOP

Desktop should emphasise:

- horizontal relationships
- image scale
- asymmetry
- large editorial typography
- multi-column composition
- visual pauses
- generous whitespace

Typical maximum content width should feel spacious but controlled.

Do not allow text lines to become excessively long.

---

# 63 — TABLET

Tablet is its own composition.

Typical transformations:

```text
4-column → 2-column

3-column → 2-column

2-column → 1-column or asymmetric stack

horizontal metadata → compact rows

desktop navigation → reduced navigation
```

Do not simply keep desktop dimensions and reduce font sizes.

---

# 64 — MOBILE

Mobile prioritises:

1. content hierarchy
2. readability
3. image storytelling
4. touch interaction
5. speed

Typical transformations:

```text
horizontal → vertical
large grid → editorial stack
side-by-side → image + content
hover interaction → always-visible affordance
large nav → menu
dense metadata → simplified metadata
```

---

# 65 — MOBILE MUST NOT FEEL LIKE A STACKED DESKTOP

This is a hard rule.

Bad:

```text
desktop card
desktop card
desktop card
desktop card
```

stacked vertically.

Good:

```text
mobile composition

image
↓
short statement
↓
focused content
↓
next visual
```

Mobile should feel intentionally designed.

---

# 66 — TOUCH BEHAVIOUR

Anything that reveals essential information on hover must have a visible non-hover state.

Never hide:

- titles
- descriptions
- arrows
- navigation labels
- CTA meaning

behind hover.

Touch devices do not have hover.

---

# 67 — ACCESSIBILITY

Accessibility is part of the visual experience.

Required:

- keyboard navigation
- visible focus states
- semantic headings
- correct heading hierarchy
- sufficient contrast
- reduced-motion support
- meaningful alt text
- buttons that behave like buttons
- links that behave like links
- touch targets of at least 44px
- no interaction dependent solely on colour

Do not sacrifice accessibility for visual fidelity.

---

# 68 — PERFORMANCE

The experience should feel premium because it is **fast**, not merely because it looks polished.

Priorities:

- optimised imagery
- responsive image sizes
- lazy loading below the fold
- limited animation
- no unnecessary JavaScript
- no enormous WebGL scene
- no heavy 3D background
- no autoplay video that destroys performance
- no unnecessary third-party scripts

---

# 69 — 3D

FSM may eventually have:

- maps
- project visualisations
- infrastructure visualisations
- interactive geographic experiences

But:

> **3D is not part of the default FSM visual language.**

Use it only when it communicates something.

Never add:

- rotating 3D objects
- floating spheres
- WebGL blobs
- interactive particles

merely to make the website look advanced.

---

# 70 — DATA VISUALISATION

When FSM has real data, visualisation can become a major part of the experience.

Use:

- maps
- timelines
- process diagrams
- metric blocks
- geographic networks
- delivery flows
- before/after comparisons

But every number must have a source.

Never fabricate:

```text
95% success rate
$40M delivered
27 countries
500+ projects
98% client satisfaction
```

unless FSM supplies verified evidence.

---

# 71 — CONTENT HONESTY

The website must distinguish between:

```text
verified fact
marketing language
placeholder
future capability
```

Never present a future capability as an established achievement.

Never present a design placeholder as a real project.

Never invent client logos.

Never invent testimonials.

Never invent awards.

Never invent statistics.

---

# 72 — AI-GENERICNESS TEST

Before accepting a section, ask:

### 1.

Could this exact section appear on 500 other consulting websites?

If yes, reconsider.

### 2.

Does it rely on six identical cards?

If yes, reconsider.

### 3.

Does every section have an eyebrow?

If yes, reconsider.

### 4.

Does every card have an arrow?

If yes, reconsider.

### 5.

Is everything centered?

If yes, reconsider.

### 6.

Is every section animated on scroll?

If yes, reject.

### 7.

Does every image have identical rounded corners?

If yes, reconsider.

### 8.

Does the section need a gradient to look interesting?

If yes, reconsider.

### 9.

Could the section work equally well for a SaaS startup?

If yes, reconsider.

### 10.

Does the page feel assembled rather than composed?

If yes, reject.

---

# 73 — INSTITUTIONAL TEST

Ask:

> Does this feel like an organisation that understands governments, development finance, implementation, procurement, safeguards, institutions and field realities?

If not, redesign.

The visual language should communicate **operational intelligence**.

---

# 74 — PREMIUM TEST

Premium does not mean:

- gradients
- glassmorphism
- huge typography everywhere
- dark mode
- 3D
- excessive animation
- glowing borders

For FSM, premium means:

- excellent spacing
- controlled hierarchy
- strong photography
- precise typography
- deliberate composition
- restraint
- useful interaction
- credible content
- excellent responsive behaviour

---

# 75 — ORIGINALITY TEST

FSM should feel recognisable as FSM.

The reference provides the grammar.

FSM's identity comes from:

- development delivery
- African context
- implementation
- project assurance
- regional access
- field capability
- measurable results
- multidisciplinary expertise
- Impact 360
- delivery ecosystem

These concepts should create the site's distinctive visual storytelling.

---

# 76 — PAGE GRAMMAR

Every new page should generally contain:

```text
01 — ENTRY
Strong visual/contextual introduction

02 — ORIENTATION
What the page is about

03 — EXPLANATION
Why it matters

04 — SYSTEM
How FSM approaches it

05 — EVIDENCE
Relevant proof/context

06 — CONNECTION
Related capabilities/sectors/network

07 — ACTION
Clear next step
```

Not every page needs every section literally.

The **rhythm** should remain.

---

# 77 — NEW PAGE DECISION TREE

Before creating a component:

```text
Does the reference already contain this pattern?
              │
             YES
              ↓
        adapt the pattern
              │
             NO
              ↓
Does FSM already have an established pattern?
              │
             YES
              ↓
        extend that pattern
              │
             NO
              ↓
Is a new pattern genuinely necessary?
              │
             YES
              ↓
Create it using FSM visual grammar
              │
              ↓
Document it
```

Never jump directly from:

> "I need this UI"

to:

> "I'll make a new card."

---

# 78 — NEW COMPONENT RULE

A new component must answer:

1. What information does it contain?
2. Why does that information require a distinct visual treatment?
3. Does the reference provide a precedent?
4. Does FSM already have a precedent?
5. What is its desktop composition?
6. What is its tablet composition?
7. What is its mobile composition?
8. What happens on hover?
9. What happens on focus?
10. What happens without interaction?
11. What happens with reduced motion?
12. Why does it belong to FSM?

If these questions cannot be answered, the component is probably premature.

---

# 79 — COMPONENT REUSE WITHOUT VISUAL MONOTONY

Reuse:

- spacing logic
- typography logic
- interaction logic
- surface treatment
- motion
- image behavior

Do not blindly reuse:

- identical card dimensions
- identical layouts
- identical heading structures
- identical section compositions

Consistency should come from **design grammar**, not repetition.

---

# 80 — THE DIFFERENCE BETWEEN CONSISTENCY AND REPETITION

Bad consistency:

```text
every section = same card grid
```

Good consistency:

```text
different compositions
same visual language
```

This distinction is critical.

---

# 81 — EMPTY STATES

If content is missing:

Do not invent it.

Do not leave a broken-looking layout.

Do not hide the entire section if the structure is valuable.

Instead create a designed informational state.

Example:

```text
PROJECT EVIDENCE

Client-approved project stories
will appear here as they become
available.
```

The empty state should use the same typography, spacing and surface language as the rest of the website.

---

# 82 — ERROR STATES

Errors should feel native.

Avoid default browser-looking error pages.

Use:

```text
small label
clear statement
short explanation
primary action
```

No excessive illustrations.

---

# 83 — LOADING STATES

Use restrained skeleton/loading behaviour.

Avoid:

- animated rainbow loaders
- bouncing dots everywhere
- shimmer over entire page
- unnecessary loading animations

Where possible, optimise so the user sees content quickly instead.

---

# 84 — SEARCH / FILTER UX

If search/filter functionality exists:

Filters should be quiet.

Example:

```text
ALL
CAPABILITIES
SECTORS
INSIGHTS
```

Active state should use FSM blue.

Do not use bright pills everywhere.

Filtering should update content smoothly without shifting the entire page unexpectedly.

---

# 85 — CASE STUDY FILTERS

The reference uses a regional/global filter pattern.

FSM can adapt this when real evidence exists:

```text
ALL
NIGERIA
REGIONAL
INTERNATIONAL
```

But only expose categories supported by actual content.

Never create filters simply because they look sophisticated.

---

# 86 — FOOTER CTA RELATIONSHIP

The CTA immediately before the footer should feel like the final conclusion of the page.

The footer then becomes infrastructure.

Do not place a random promotional block between CTA and footer.

---

# 87 — VISUAL TRANSITIONS BETWEEN SECTIONS

Sections should not all begin with:

```text
eyebrow
huge heading
paragraph
```

Transitions can happen through:

- image
- whitespace
- dark surface
- editorial statement
- numerical marker
- process line
- change in grid density
- change in typography scale

This is how the page becomes a composition.

---

# 88 — SECTION SPACING

Spacing should communicate relationships.

Large spacing means:

> new thought / visual pause.

Small spacing means:

> these elements belong together.

Do not choose spacing arbitrarily.

For example:

```text
heading
small gap
paragraph
```

because they form one unit.

Then:

```text
large gap
next section
```

because the thought has ended.

---

# 89 — IMAGE CROP RULE

Images should be art-directed per viewport.

Desktop crop:

- preserve environmental context

Mobile crop:

- preserve subject
- remove unnecessary peripheral information

Never simply use:

```css
object-fit: cover;
```

and consider the job finished.

Crop decisions matter.

---

# 90 — PHOTOGRAPHIC DENSITY

Do not use a photo in every section.

A good page might alternate:

```text
photo
↓
plain canvas
↓
structured grid
↓
photo
↓
dark surface
↓
plain canvas
```

Photography gains power through scarcity.

---

# 91 — DARK SURFACE RULE

Use navy strategically.

Strong candidates:

- hero treatment
- one feature/stat tile
- Impact 360 emphasis
- closing CTA
- selected capability/evidence block

Do not create:

```text
navy section
navy section
navy section
```

The dark surface must feel like punctuation.

---

# 92 — BLUE ACCENT RULE

Blue accent should be subtle.

Use for:

- hover
- focus
- selected states
- small labels
- active filters
- tiny visual highlights

Do not use it to colour every heading.

Do not use blue gradients.

Do not introduce another accent.

---

# 93 — LOGO / BRAND MARK

The FSM wordmark must remain visually controlled.

Do not distort.

Do not add:

- glowing logo
- gradient logo
- animated logo
- giant decorative logo watermark

The wordmark should establish identity quietly.

---

# 94 — ICONOGRAPHY

Icons are secondary.

Do not create an icon for every service.

Use icons only where they improve comprehension.

Preferred icon language:

- simple
- geometric
- restrained
- consistent stroke
- no colourful illustrations

---

# 95 — NUMBERS

Numbers can create strong editorial moments.

Good:

```text
36 STATES + FCT
```

because it is supported by the corporate profile. :contentReference[oaicite:21]{index=21}

Bad:

```text
500+
PROJECTS
```

unless sourced.

Numbers must communicate evidence, not decoration.

---

# 96 — TRUST SIGNALS

Trust should emerge from:

- specificity
- expertise
- geographic reach
- process
- quality systems
- actual evidence
- clarity

not from:

```text
★★★★★
Trusted by 100+ clients
Award-winning
Industry-leading
```

unless verified.

---

# 97 — CLIENT LOGOS

Client/funder logos may only appear where the corporate profile or approved client material supports their use.

The profile identifies organisations such as the World Bank Group, African Development Bank, Islamic Development Bank, UN agencies, EU, FCDO, USAID and GIZ in its target-client context. :contentReference[oaicite:22]{index=22}

Do not imply:

> "These organisations hired FSM"

unless FSM explicitly confirms that relationship.

Context matters.

---

# 98 — COPY DENSITY

Corporate profile content is dense.

The website must **translate**, not dump the PDF onto the screen.

Avoid:

```text
huge paragraph
huge paragraph
huge paragraph
```

Instead:

```text
statement
+
short explanation
+
structured details
```

Long-form detail can exist on deeper pages.

---

# 99 — CONTENT PROGRESSIVE DISCLOSURE

Homepage:

> understand FSM.

Capability page:

> understand the service.

Detailed service content:

> understand the methodology.

Case study:

> understand the evidence.

Contact:

> act.

Do not put every detail on the homepage.

---

# 100 — THE HOMEPAGE MUST NOT BECOME THE PDF

The PDF is the source of truth for facts.

It is not the source of truth for page structure.

The website should be an **experience derived from the profile**, not a web version of the PDF.

---

# 101 — DESIGNING FOR FUTURE CONTENT

The architecture must accommodate future:

- case studies
- insights
- project evidence
- countries
- sectors
- experts
- publications
- data
- digital tools

without requiring a visual redesign.

Future content should inherit existing grammar.

---

# 102 — FUTURE CASE STUDIES

When a case study is added, it should automatically inherit:

- typography
- hero treatment
- evidence blocks
- image behaviour
- CTA
- related capabilities
- responsive rules

The content changes.

The design language does not.

---

# 103 — FUTURE SECTOR PAGES

If someone says:

> "Build Climate & Resilience."

the result should immediately feel related to the rest of FSM.

It should not suddenly introduce:

- green gradients
- leaf icons
- climate-themed illustrations
- a different navigation
- different card shapes

Sector identity comes through **content and imagery**, not a new colour system.

---

# 104 — FUTURE CAPABILITY PAGES

If someone says:

> "Build Procurement Excellence."

the page should use the existing FSM service grammar.

Do not create:

```text
Procurement page
= dashboard UI
```

because procurement sounds operational.

The visual language remains institutional/editorial.

---

# 105 — FUTURE AI RULE

Any future AI agent must assume:

> **The existing design is intentional.**

Do not "improve" the design by replacing it with a familiar modern UI pattern.

Do not introduce a new style because it looks fashionable.

Do not interpret "premium" as:

- glass
- gradients
- huge text
- dark mode
- 3D
- excessive motion

The AI's job is to **extend the language**, not restart it.

---

# 106 — AI REFERENCE CHECK

Before committing a new UI, the agent should mentally compare it against the selected Conceptzilla references.

Ask:

```text
Does the composition feel related?

Does the amount of whitespace feel related?

Does the image/text relationship feel related?

Does the surface treatment feel related?

Does the typography feel editorial?

Does the density vary?

Does the interaction remain restrained?

Does this look like FSM rather than Prism?

Does this look like a serious development consultancy rather than SaaS?
```

If the answer to several is no:

**stop and redesign.**

---

# 107 — VISUAL QA

Every completed page must be checked at:

```text
375px
390px
768px
1024px
1280px
1440px+
```

At minimum.

But width testing alone is not enough.

---

# 108 — DESKTOP QA

Check:

- hero composition
- image crop
- navigation integration
- headline width
- section hierarchy
- whitespace
- grid proportions
- CTA prominence
- content density
- footer structure

---

# 109 — MOBILE QA

Check:

- navigation
- hero height
- image crop
- text readability
- CTA width
- card stacking
- section spacing
- touch targets
- overflow
- horizontal scroll
- image loading
- long headings
- long service names

---

# 110 — INTERACTION QA

Check:

- hover
- focus
- active state
- pressed state
- keyboard navigation
- reduced motion
- touch interaction
- loading
- empty state

Every interaction should still communicate meaning without animation.

---

# 111 — CONTENT QA

Before launch:

- every claim checked against source
- every number verified
- every location verified
- every service name verified
- every client relationship verified
- every testimonial verified
- every case study verified
- every image appropriately licensed/approved
- no placeholder content presented as fact

---

# 112 — VISUAL WEIGHT QA

For every section ask:

```text
What is the dominant object?

What is the supporting object?

What should the eye see next?

Where does the eye rest?

Where does the next section begin?
```

If everything has equal visual weight, the composition has failed.

---

# 113 — INFORMATION DENSITY QA

Look at the page from a distance.

If it looks like:

```text
████████████████████
████████████████████
████████████████████
```

there is too much information.

If it looks like:

```text
headline

huge empty space

headline

huge empty space
```

there may be insufficient content structure.

The target is:

```text
dense
↓
quiet
↓
structured
↓
visual
↓
dense
↓
quiet
```

---

# 114 — THE "DIFFERENT WEBSITE" TEST

Take any new section and place it mentally beside the existing site.

Ask:

> Could a user believe this was designed by another team?

If yes:

**reject it.**

---

# 115 — THE "REFERENCE WITHOUT COPYING" TEST

Ask:

> Does this clearly share the reference's visual DNA without looking copied?

Correct answer:

```text
same grammar
different identity
```

Incorrect:

```text
same colours
same copy
same brand
same layout
```

---

# 116 — THE "FSM" TEST

Ask:

> If I removed the logo, would the content and composition still feel like an organisation focused on development delivery and implementation?

If the answer is no, the design is relying too heavily on generic branding.

FSM's distinctive identity must come from the combination of:

```text
development
+
implementation
+
assurance
+
Africa
+
technical expertise
+
delivery systems
+
measurable results
```

---

# 117 — WHAT MUST NEVER HAPPEN

Never introduce:

- generic SaaS dashboards
- glassmorphism
- neon gradients
- purple AI gradients
- excessive blue gradients
- generic blob backgrounds
- floating 3D spheres
- excessive rounded cards
- icon grids for everything
- giant statistics without sources
- fake testimonials
- fake client logos
- invented case studies
- fake awards
- fake certifications
- generic stock imagery
- excessive parallax
- scroll hijacking
- 3D tilt cards
- bounce animations
- animated counters for meaningless numbers
- giant "TRUSTED BY" walls without verified relationships
- dark mode as the default
- gold accents
- a utility bar above the hero
- a separate generic hero card
- a different visual system for every page

---

# 118 — WHAT SHOULD FEEL EXPENSIVE

Not decoration.

Precision.

The site should feel expensive because:

- every image is intentional
- every line break matters
- every section has hierarchy
- every interaction has purpose
- every card has a reason to exist
- every number is credible
- every animation is restrained
- every mobile composition is designed
- every page feels related
- every piece of whitespace feels deliberate

---

# 119 — THE EXPERIENCE MODEL

The final experience should feel like:

```text
ENTER
  ↓
ORIENT
  ↓
UNDERSTAND
  ↓
EXPLORE
  ↓
SEE THE SYSTEM
  ↓
SEE THE REACH
  ↓
SEE THE EVIDENCE
  ↓
TRUST THE CAPABILITY
  ↓
ENGAGE
```

Not:

```text
LAND
↓
READ MARKETING COPY
↓
LOOK AT CARDS
↓
CONTACT US
```

---

# 120 — THE CORE DESIGN EQUATION

```text
REFERENCE VISUAL GRAMMAR
            +
FSM INSTITUTIONAL IDENTITY
            +
REAL CORPORATE CONTENT
            +
AFRICAN DELIVERY CONTEXT
            +
EDITORIAL COMPOSITION
            +
RESPONSIVE ART DIRECTION
            +
RESTRAINED INTERACTION
            +
CONTENT HONESTY
            =
FSM DIGITAL EXPERIENCE
```

---

# 121 — FINAL CREATIVE DIRECTIVE

When building FSM, do not ask:

> "What would a modern consulting website look like?"

Ask:

> **"How would this exact information be composed if FSM had the same design intelligence, restraint and visual confidence as the selected Conceptzilla reference?"**

Then adapt it to FSM.

The reference supplies the visual grammar.

FSM supplies the meaning.

The corporate profile supplies the truth.

The design system supplies the implementation.

The result must feel like one coherent institution from the homepage through the deepest capability page.

---

# 122 — DEFINITION OF DONE

A page is not done because:

- it compiles
- it is responsive
- the components are reusable
- the colours match
- the content exists

A page is done when:

### VISUAL

It belongs to the selected reference family.

### INSTITUTIONAL

It feels credible for FSM.

### CONTENT

Every claim is supported.

### COMPOSITION

The page has deliberate visual relationships.

### HIERARCHY

The important information is immediately apparent.

### DENSITY

The page has controlled rhythm.

### IMAGERY

Images communicate something meaningful.

### RESPONSIVE

Mobile is designed, not merely stacked.

### INTERACTION

Motion is purposeful and restrained.

### ACCESSIBILITY

The experience works for keyboard, touch and reduced-motion users.

### PERFORMANCE

The page feels fast.

### EXTENSIBILITY

Another AI agent could build the next page without inventing a new visual language.

---

# 123 — FINAL RULE

**Do not reinterpret this design language. Extend it.**

The goal is not to make every page identical.

The goal is for every page to feel like it belongs to the same institution.

```text
SAME VISUAL DNA
        ↓
DIFFERENT CONTENT
        ↓
DIFFERENT COMPOSITION
        ↓
SAME FSM EXPERIENCE
```

Six months from now, another engineer or AI agent should be able to open this repository, read this document and immediately understand:

> **what FSM looks like, why it looks that way, how it behaves, how it responds, and what not to do.**

That is the purpose of this document.