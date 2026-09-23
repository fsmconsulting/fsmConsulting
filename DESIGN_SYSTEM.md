# FSM Consulting — Design System

## 0. Purpose

This document defines the visual and interaction system for the FSM Consulting website.

The website must reproduce the visual grammar, composition, rhythm, information density, typography hierarchy, card usage, imagery, navigation behavior, and responsive behavior of the supplied Conceptzilla consulting references while using FSM's own brand, verified content, and development-sector context.

This is not a generic "premium consulting website."

It is not a SaaS interface.

It is not a bento dashboard.

It is not an NGO/government template.

It is not a literal copy of the reference website.

The target is:

**Conceptzilla's visual language + FSM's institutional identity + FSM's actual development-delivery content.**

---

# 1. Design North Star

FSM should feel like:

> **An internationally credible development advisory and delivery firm with deep African implementation intelligence.**

The visual experience must communicate:

- institutional credibility
- technical competence
- implementation experience
- clarity
- restraint
- regional intelligence
- modernity
- confidence
- seriousness
- accessibility

The site should feel:

**Editorial. Institutional. Structured. Human. Precise. Contemporary.**

It should not feel:

**Generic. Corporate-template-like. Startup-ish. Over-designed. AI-generated. Dashboard-like.**

---

# 2. Reference Fidelity

The supplied Conceptzilla consulting references are the primary visual reference for the website.

Reference fidelity means reproducing the underlying design grammar, not copying artwork or content.

The implementation should study and preserve:

- overall composition
- section rhythm
- proportions
- whitespace
- typography scale
- typography hierarchy
- grid behavior
- image treatment
- card proportions
- rounded surface treatment
- navigation behavior
- CTA treatment
- information density
- section transitions
- case-study presentation
- insights presentation
- mobile recomposition
- responsive spacing
- visual hierarchy

Do not reduce the references to a collection of UI components.

The references work because the **whole page composition** is intentional.

---

# 3. Core Layout Philosophy

The primary design language is:

## Editorial composition + structured containment.

The page should alternate naturally between:

- open editorial sections
- contained card sections
- large image compositions
- structured grids
- typography-led sections
- dark institutional surfaces

The site must NOT turn every section into cards.

A useful mental model is:

**Open → Contained → Open → Visual → Contained → Open → Visual**

not:

**Card → Card → Card → Card → Card**

Cards are a structural tool, not the identity of the website.

---

# 4. When to Use Cards

Cards should exist when the content represents a naturally contained unit.

Appropriate uses include:

- services
- capabilities
- case studies
- insights
- selected expertise
- image + text combinations
- specific CTA compositions
- grouped information

Cards should NOT automatically be used for:

- every paragraph
- every statistic
- every section heading
- navigation
- simple value statements
- ordinary editorial copy
- every grid item

A section can use cards without becoming a "card grid."

---

# 5. Card Language

Cards should feel like the Conceptzilla references.

Characteristics:

- generous internal spacing
- controlled rounded corners
- strong typography hierarchy
- restrained borders
- little or no shadow
- meaningful imagery where appropriate
- clear relationship between heading and supporting content
- deliberate proportions
- consistent alignment

Cards should not look like:

- SaaS dashboard widgets
- pricing cards
- Material UI panels
- glassmorphism
- floating neumorphic boxes
- heavily shadowed UI components

### Radius

Primary large surfaces:

`24px`

Secondary surfaces:

`16px`

Small controls:

`999px`

Radius should be consistent but not mechanically applied to every element.

---

# 6. Open Editorial Layouts

Some of the most important sections should remain open.

Use open composition for:

- positioning statements
- value propositions
- introductory copy
- expertise narratives
- strategic statements
- reach/network information
- selected statistics
- section introductions

These sections should rely on:

- typography
- spacing
- alignment
- whitespace
- rules/dividers
- image placement

rather than containers.

---

# 7. Typography

Typography is one of the primary visual characteristics of the reference.

Use the existing self-hosted fonts:

- **Source Serif 4** — major editorial/headline typography
- **IBM Plex Sans** — body, navigation, metadata, UI and supporting typography

Do not introduce another font.

Do not use Google Fonts.

Do not use system font substitutions when the existing fonts are available.

---

## 7.1 Headline Character

Headlines should be:

- large
- confident
- editorial
- tightly composed
- readable
- visually dominant

Avoid excessive uppercase typography.

Avoid excessive letter spacing.

Avoid making every heading look like a label.

The serif headline should create the editorial character of the site.

---

## 7.2 Suggested Type Scale

These are starting points, not rigid values.

### Hero

Desktop:

`56–88px`

Mobile:

`42–56px`

### Major Section Heading

Desktop:

`44–64px`

Mobile:

`36–46px`

### Card Heading

Desktop:

`24–32px`

Mobile:

`22–28px`

### Body

Desktop:

`16–18px`

Mobile:

`16–17px`

### Metadata

`11–14px`

Typography must scale based on composition rather than blindly following a fixed scale.

---

# 8. Color System

FSM's visual identity is based on deep institutional blue.

Gold is retired.

Do not reintroduce gold as an accent.

Do not introduce a second decorative accent color.

### Primary Institutional Blue

```txt
#07131E
Secondary Blue
#122434
Deep Blue
#1A3246
Supporting Blue
#24455E
Light Blue
#38668A
Primary Light Canvas
#F4F5F7
Primary Text
#0D1721
Muted Text
#5A6876
Divider
#E1E5E9

White:

#FFFFFF
9. Color Usage

Deep blue should function similarly to the dominant dark institutional color in the Conceptzilla references.

It is for:

major contrast sections
hero overlays where appropriate
closing CTA
important emphasis
navigation contrast
selected large surfaces
institutional moments

It is NOT the default background of the entire website.

Avoid stacking multiple dark-blue sections consecutively.

Light/porcelain sections should provide visual breathing room.

10. Hero

The hero is one of the most important reference translations.

The desktop hero should use:

a large photographic composition
strong typography
substantial whitespace
clear hierarchy
restrained supporting copy
one primary CTA
minimal secondary action

The hero should feel like a major editorial composition rather than a standard SaaS landing-page hero.

Image Direction

Prefer:

African urban environments
infrastructure
development projects
institutions
field implementation
professionals working in real environments
transport
communities
public infrastructure
project sites
regional development activity

Avoid generic:

Silicon Valley imagery
Western skyscrapers
handshake stock photography
staged corporate boardrooms
generic laptops
abstract technology imagery

Photography should communicate development and delivery, not simply "business."

11. Hero Navigation

Desktop navigation should integrate naturally into the hero composition.

The navigation should be:

minimal
confident
clean
spacious
low-noise

Avoid utility-bar-heavy navigation.

Do not create unnecessary layers above the primary navigation.

Navigation should feel like part of the visual composition.

12. Hero CTA

Primary CTA:

Schedule a Consultation

Use a pill-shaped action.

The pill is a functional CTA language, not a universal styling rule.

Primary CTA characteristics:

high contrast
compact
clear
generous touch target
subtle hover movement

Avoid multiple competing pill buttons.

13. Interior Page Headers

Interior pages should not replicate the full homepage hero.

Use a shorter editorial header.

It may use:

large typography
controlled supporting copy
light or blue background
optional image
rounded major surface where appropriate

The header should establish context quickly without consuming the entire viewport.

14. Section Rhythm

The website must have strong visual rhythm.

Do not make every section visually identical.

Sections should intentionally alternate between:

light
dark
image-led
typography-led
open
contained
dense
spacious

Whitespace is an active design element.

Do not fill empty space simply because it exists.

15. Value / Positioning Sections

Value propositions should generally use an open editorial grid.

FSM's core positioning can be represented through:

Global Expertise
Regional Access
National Capability
Local Knowledge

These should not automatically become four identical cards.

Prefer:

large typography
short supporting copy
structured columns
subtle dividers
deliberate spacing

The content should feel like an institutional statement rather than feature cards.

16. Services and Capabilities

Services can use cards because they represent distinct offerings.

However, the card system must remain editorial.

Each card should contain:

service/capability title
concise description
optional supporting metadata
restrained "Learn more" interaction

Avoid:

icons on every card
huge decorative numbers
excessive borders
shadows
gradients
unnecessary badges

The card itself should provide the structure.

17. FSM Impact 360™

FSM Impact 360™ is a process and should visually communicate progression.

Stages:

Identify Priorities
Measure Baselines
Plan for Delivery
Accelerate Implementation
Check Progress
Track Outcomes

This should not become a generic six-card feature grid.

It should communicate:

sequence → progression → delivery → results

Use typography, numbering, lines, spacing and directional relationships where appropriate.

Numbering is acceptable here because this is an actual sequence.

18. Delivery Ecosystem

The delivery chain is:

CLIENT REQUIREMENT → FSM TECHNICAL LEADERSHIP → GLOBAL/REGIONAL EXPERTISE → COUNTRY PARTNER & LOCAL ACCESS → CONSULTANT MOBILIZATION → FIELD & IMPLEMENTATION SUPPORT → QUALITY ASSURANCE → MEASURABLE RESULTS

This is a process diagram/content structure.

Do not force it into unrelated decorative cards.

It should visually communicate a delivery system.

19. Case Studies

Case studies should follow the visual weight of the references.

They are substantial content objects.

Use:

large imagery where available
strong titles
concise challenge/context
delivery/approach
impact/outcome when verified
clear category or region metadata

Case studies can use large rounded surfaces.

They should feel significantly more substantial than ordinary service cards.

Important content rule

FSM currently does not have an approved public case-study library with verified project outcomes.

Therefore:

DO NOT INVENT CASE STUDIES.

Do not fabricate:

clients
project values
impact numbers
outcomes
dates
partnerships
testimonials
project names

If approved case studies are unavailable, create a restrained placeholder/state that preserves the intended visual structure without pretending that fictional work exists.

20. Insights

Insights should follow the editorial reference language.

Use a featured article with supporting articles where actual content exists.

The composition can combine:

one dominant image/content surface
smaller secondary content blocks
metadata
publication title
concise descriptions

Do not make every insight identical.

Do not use fake articles simply to populate the grid.

21. Development / Financing Framework Strip

If displaying organizations or development-financing frameworks, the presentation must clearly communicate what they represent.

Do NOT imply:

client relationships
funding relationships
partnerships
completed projects

unless those relationships are explicitly verified and approved.

The visual treatment should remain understated.

22. Statistics and Reach

Use only verified facts.

Supported example:

36 States + FCT

FSM also has a stated Pan-African/regional network.

Do not manufacture:

number of projects
number of clients
years of experience
countries served as a numerical claim unless verified
millions/billions delivered
success percentages
team-size statistics

Numbers should be used because they communicate something real, not because the design expects statistics.

23. Africa Network

The regional network should communicate:

Africa-based expertise
country-level access
local implementation capability
cross-border mobilization
professional networks
regional delivery

Avoid stereotypical "Africa" visual clichés.

Do not use:

decorative Africa-map overload
tribal patterns
flags everywhere
generic safari imagery
poverty imagery

The African identity should come through actual development context and delivery capability.

24. Closing CTA

The closing CTA should be a major contained surface.

Use:

deep FSM blue
strong editorial headline
concise supporting copy
white/light CTA pill
generous internal spacing
rounded corners

It should feel like a natural conclusion to the page.

25. Footer

The footer should be compact and institutional.

Include relevant:

FSM identity
navigation
services/capabilities
contact
locations/network
legal information
social/company links where appropriate

Do not turn the footer into a huge sitemap.

26. Imagery

Photography is part of the storytelling system.

Images should communicate:

people + places + implementation + infrastructure + institutions + development

Images should feel documentary/editorial rather than stock-heavy.

Where appropriate:

full-bleed images
rounded image surfaces
image crops
large horizontal compositions
image + text combinations

Avoid decorative image usage that adds no meaning.

27. Image Treatment

Images should generally remain natural.

Avoid:

heavy gradients
aggressive duotones
excessive overlays
artificial color grading
decorative filters

Dark overlays may be used when required for readable hero typography.

The image should still feel like a real photograph.

28. Grid

The grid should provide structure without becoming visually obvious.

Use:

strong alignment
asymmetric compositions where useful
generous gutters
varied column widths
intentional empty space

Do not force every section into the same grid.

The reference uses different compositions while maintaining a consistent underlying alignment system.

29. Width

Large content should not become excessively wide.

Use a consistent maximum content width.

Major visual surfaces may extend closer to the viewport edge.

Editorial text should remain comfortably readable.

Avoid long lines of body text.

30. Spacing

Spacing should feel generous.

Large sections require substantial vertical breathing room.

Prefer fewer, larger spacing decisions over many tiny gaps.

Do not compress sections merely to reduce page length.

Whitespace is part of the visual identity.

31. Responsive Design

Responsive behavior is a first-class design requirement.

Mobile is NOT:

desktop layout → stack everything vertically

Mobile is:

a deliberate recomposition of the same visual experience.

The supplied mobile references must be studied directly.

32. Mobile Hero

The mobile hero should become a deliberate vertical composition.

Possible structure:

image → content surface → CTA

or another composition faithful to the supplied reference.

The hero should retain:

strong typography
meaningful image scale
whitespace
clear CTA
visual hierarchy

Do not shrink the desktop hero until everything technically fits.

33. Mobile Typography

Do not simply scale desktop typography proportionally.

Mobile headlines should remain visually dominant.

Use:

large serif headings
controlled line length
strong contrast
deliberate line breaks where appropriate

Avoid tiny headings created solely to fit the viewport.

34. Mobile Cards

Cards remain cards on mobile when their content benefits from containment.

However:

widths should become natural
internal padding should remain generous
card proportions may change
images may change crop
content ordering may change
horizontal compositions may become vertical
unnecessary metadata may be removed

Do not blindly preserve desktop dimensions.

35. Mobile Navigation

Mobile navigation should be simple and spacious.

It should provide:

primary navigation
important locations/contact information
clear close interaction
large touch targets
readable typography

Do not create a tiny desktop navbar inside a mobile drawer.

Avoid unnecessarily long unstructured lists.

If a large service/sector list exists, organize it intelligently.

36. Responsive Recomposition Rule

For every major desktop section, ask:

"If this section were designed specifically for mobile, how would the reference compose it?"

Then implement that composition.

Do not rely on:

flex-direction: column;

as the entire mobile strategy.

Responsive changes may include:

order
width
image ratio
crop
typography
padding
alignment
card size
section spacing
visibility of secondary metadata
navigation behavior
37. Interaction

Interaction should be subtle.

Use motion to clarify:

hierarchy
hover state
navigation
image interaction
section entry

Do not use motion simply because the site can animate.

38. Motion Rules

Preferred easing:

cubic-bezier(0.16, 1, 0.3, 1)

Appropriate interactions:

card lift: approximately -4px
CTA lift: approximately -2px
arrow movement: approximately 4px
image scale: approximately 1.045
subtle reveal on viewport entry

Avoid:

parallax
3D tilt
bouncing cards
excessive stagger animations
spinning elements
constant floating objects
scroll-jacking

Motion should remain subordinate to the content.

39. One Orchestrated Moment

Each major page/section may have a primary visual interaction or reveal moment.

Do not animate every component independently.

The experience should feel controlled rather than busy.

40. Accessibility

All interactions must support:

keyboard navigation
visible focus states
readable contrast
semantic HTML
appropriate heading hierarchy
meaningful alt text
touch targets of at least 44px
reduced-motion preferences

Never hide essential content behind hover-only interactions.

41. Performance

Images should be optimized.

Use appropriate:

dimensions
compression
lazy loading where appropriate
responsive image sizing

Do not ship unnecessarily large images.

Avoid introducing heavy animation libraries or 3D libraries without a real requirement.

42. Components

Reuse components where the visual pattern is genuinely repeated.

Examples:

Nav
Footer
PageHeader
CTA
ServiceCard
InsightCard
CaseStudy
Reveal
ImageSurface

Do not create abstractions simply to force visually different sections into one component.

A component should represent a real recurring pattern.

43. Component Naming

Names should describe the content/pattern.

Good:

ServiceCard
InsightCard
CaseStudy
DeliveryModelSection
ImpactFramework
NetworkSection
PageHeader

Avoid vague names such as:

Box
Thing
Section1
PremiumCard
MagicGrid
BentoBlock
44. Page Grammar
Homepage

The homepage should generally follow the reference's editorial rhythm:

Navigation
Hero
Positioning / value
Services / capabilities
Development / delivery framework
Impact / delivery methodology
Case studies, only when verified
Insights
Reach / network
Closing CTA
Footer

This order may change when the content or reference composition requires it.

Do not mechanically reproduce a section list.

45. Service Page Grammar

A service page should establish:

Page header
What the capability means
Why it matters
Delivery approach
Relevant expertise
Supporting sectors/use cases
Related insights
CTA

Use editorial composition before adding cards.

46. Sector Page Grammar

Sector pages should communicate:

sector context
FSM role
relevant capabilities
implementation perspective
related expertise
supporting content
CTA

Do not make sector pages look like a directory of identical cards.

47. About Page

The About page should communicate:

who FSM is
what FSM does
how FSM works
values
technical depth
regional access
delivery philosophy

Avoid stacking multiple full-screen dark sections.

Deep blue should be used strategically.

48. Content Authority

Content must come from approved FSM materials.

Primary source:

FSM Corporate Profile

Additional approved project-specific material may be used where available.

Never invent:

clients
case studies
outcomes
statistics
testimonials
awards
partnerships
project values
team credentials
years of experience
financial figures

If information is unavailable, design around the absence rather than fabricating it.

49. FSM Brand Translation

The reference's visual identity must be translated into FSM's context.

Reference:

international consulting / institutional / modern

FSM:

development delivery / Africa / implementation / institutional / technical

The design should therefore use real contextual imagery and real FSM language.

Do not turn the site into an "African-themed" website.

FSM's African identity should be communicated through:

delivery context
regional network
local access
project environments
infrastructure
institutions
implementation intelligence
50. What Must Never Happen

Never allow the website to drift into:

generic SaaS
startup landing page
dashboard UI
NGO template
government portal
luxury brand aesthetic
excessive minimalism
excessive glassmorphism
excessive gradients
excessive shadows
icon-grid design
card-everything design
bento-everything design
fake corporate statistics
fake case studies
fake testimonials
fake client logos
fake partnerships
AI-generated visual clichés
51. Design Decision Hierarchy

When making a design decision, use this order:

1. Conceptzilla reference grammar

Does the decision belong to the visual language of the references?

2. FSM brand

Does it feel like FSM?

3. Content

Does the treatment make sense for the information?

4. Usability

Is it clear and easy to use?

5. Responsiveness

Does the composition work deliberately across desktop, tablet and mobile?

6. Implementation

Can it be implemented cleanly without unnecessary complexity?

Do not sacrifice the visual language simply because a generic UI pattern is easier to implement.

52. Visual QA

Before considering a page complete, check:

Reference fidelity
Does the page feel visually related to the supplied Conceptzilla references?
Is the section rhythm comparable?
Are typography and whitespace treated similarly?
Are cards used with similar restraint?
Are large image compositions present where appropriate?
Institutional credibility
Does this feel like a serious development consulting firm?
Does the content hierarchy communicate expertise?
Does it avoid startup/SaaS aesthetics?
Composition
Is there enough whitespace?
Are sections visually differentiated?
Is the page relying too heavily on cards?
Are image proportions intentional?
Responsive behavior
Does mobile feel designed rather than stacked?
Are typography and spacing still strong?
Are cards still usable?
Does navigation remain clean?
Are important actions accessible?
Content integrity
Is every factual claim supported?
Are there invented statistics?
Are there invented clients?
Are there invented case studies?
Are there unsupported partnerships or outcomes?
Generic-AI test

Ask:

"Could this exact page belong to any random AI-generated consulting website?"

If yes, redesign the composition.

53. Final Principle

The website should not announce its design system.

It should simply feel exceptionally well designed.

The goal is not to show that FSM has cards, grids, pills, animations or rounded corners.

The goal is to create a coherent visual experience where:

typography + imagery + whitespace + cards + composition + information hierarchy + responsive behavior

work together as one system.

The reference determines the visual grammar.

FSM determines the story.

The result should feel like:

FSM Consulting — Africa's Development Delivery Partner

with the visual confidence and editorial discipline of the supplied Conceptzilla references.

