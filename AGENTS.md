<!-- BEGIN:nextjs-agent-rules -->

**# This is NOT the Next.js you know**

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# FSM Consulting — Locked UI / Design System Rules

> **MANDATORY INSTRUCTION FOR ALL AI CODING AGENTS (Antigravity, Cursor, Claude Code, Copilot, ChatGPT):**
> 
> The visual identity, layout grammar, component patterns, and design tokens of this website are **strictly locked** to the Conceptzilla "Prism" consulting firm visual reference and FSM's institutional profile.
>
> You MUST read these files in order before proposing or executing ANY UI change:
> 1. `FSM_DIGITAL_EXPERIENCE.md` (Creative & UX Source of Truth)
> 2. `DESIGN_SYSTEM.md` (Technical & Token Implementation Truth)
> 3. Verified Profile: `FSM Consulting - Corporate Profile - r1.pdf` (Content Source of Truth)

---

## 1. Locked Brand Colors & Tokens

Every page, component, and style MUST strictly adhere to these exact color tokens. Never introduce arbitrary blues, greens, or gold:

- **Primary Brand Blue**: `#2F5FA8` (`--color-brand`, `--color-blue-accent`, `--color-blue-bright`)
  - Used for: Primary mobile CTAs, interactive hover highlights, active filter toggles, link arrows, and key accent details.
- **Brand Blue Hover**: `#264E8C` (`--color-brand-hover`)
- **Institutional Dark / Midnight Navy**: `#07131E` (`--color-navy`)
  - Used for: Desktop hero background, case study cards, dark editorial blocks, footer, mobile drawer text, and primary headings.
- **Light Neutral Canvas & Cards**: `#F4F5F7` (`--color-canvas`)
  - Used for: Services overview cards, secondary pill buttons (`Show All Insights`), and soft neutral backgrounds.
- **Pure White**: `#FFFFFF`
  - Used for: Primary content surfaces, mobile hero bottom sheet card, desktop hero CTA pill button.
- **Muted Body Text**: `#5A6876` / `#61717C` (`--color-ink-muted`)

---

## 2. Locked Component & Layout Grammar (Conceptzilla Prism)

All pages (Homepage AND all interior pages) must strictly follow these locked patterns:

### A. Navigation Bar & Mobile Drawer
- **Brand Typography**: Pure bold text `FSM Consulting.` (with period). No bulky square logo badge beside it.
- **Desktop Nav**: Transparent or clean white background, spacious inline links (`About Us`, `Services`, `Insights`, `Case Studies`, `Sectors`, `Team`, `Contact`), text-[15px] font-medium, hover accent `#2F5FA8`.
- **Mobile Hamburger**: Exactly **two thin horizontal lines** (`=`), never three lines or icon soup.
- **Mobile Menu Drawer**: Full-screen white modal drawer with oversized bold links (`text-[32px] sm:text-[36px] font-bold text-[#07131E]`), circular close button, regional office footprint pills (`Abuja (HQ)`, `Lagos`, `Dakar`, `Nairobi`), and official contact details at the bottom.

### B. Hero Sections (Never a Floating Card on Desktop)
- **Desktop Homepage Hero**:
  - Full-bleed edge-to-edge high-angle architectural aerial photography (`/HeroBg.webp`).
  - Directional left-to-right density gradient for crisp text legibility.
  - Bold 3-line sans-serif headline directly over image (`text-[56px] lg:text-[72px] font-bold leading-[1.05] text-white`).
  - Subtitle paragraph (`max-w-[52ch] text-white/80`).
  - Solid white pill button: `Schedule a Consultation` (`bg-white text-[#07131E]`).
- **Mobile Homepage Hero**:
  - Top half (`~46vh`): Architectural aerial photo with two-line hamburger.
  - Bottom half: Crisp white card rounding up with `rounded-t-[32px]`, dark 3-line headline, subtitle, and full-width pill button in brand color `#2F5FA8`.
- **Interior Page Heroes (`/about`, `/services`, `/sectors`, `/insights`, `/contact`)**:
  - Full-width dark navy (`#07131E`) or clean white editorial banner with bold sans-serif headings and structured breadcrumbs.
  - **NEVER place a floating white card sitting over a background photograph**.

### C. Services Presentation
- Two-column layout: Left column contains ONLY the section title (`Services overview`).
- Right column: 2x2 grid of `#F4F5F7` light cards with `rounded-[20px]`, concise descriptions, and `Learn More →` hover links.

### D. Evidence & Case Studies
- Header with `Regional | Global` pill filter toggle and `← →` circle navigation buttons.
- Vertical Deep Midnight Navy cards (`#07131E`) with client tag, headline, Challenge section, Impact section, and pill button.

### E. Editorial Insights
- Wide editorial headline statement spanning the width.
- Exactly 3 prominent cards side-by-side with 16/10 aspect ratio rounded images (`rounded-[18px]`, hover zoom `group-hover:scale-105`), bold titles, and concise deks.
- Light grey pill button: `Show All Insights`.

### F. Institutional Footer
- Deep Navy (`#07131E`) background with subtle border `border-white/10`.
- Brand heading `FSM Consulting.` with regional delivery footprint badges (`Abuja (HQ)`, `Lagos`, `Dakar`, `Nairobi`).
- 4 clean directory columns (Practice Areas, Key Sectors, Company, Headquarters & Inquiries).
- Consultation CTA link and Back to Top arrow in brand color `#2F5FA8`.

---

## 3. Strict Content Integrity

All claims, services, figures, and narratives MUST originate from `FSM Consulting - Corporate Profile - r1.pdf`.

**NEVER fabricate**:
- Client names or logos not in approved materials
- Financial figures or fabricated project budgets
- Fabricated statistics or awards
- Fictitious team credentials

---

## 4. Final Quality Verification Checklist

Before considering ANY UI work complete, verify:
- [ ] Primary brand color is `#2F5FA8` (no gold, no arbitrary greens or blues).
- [ ] Desktop hero is NOT a floating card; it is edge-to-edge with transparent/integrated nav.
- [ ] Mobile hero matches the split photo + `rounded-t-[32px]` white card + `#2F5FA8` button.
- [ ] Mobile navigation uses the two-line hamburger and full-screen white drawer with city pills.
- [ ] Services use the clean 2-column + 2x2 `#F4F5F7` card grid.
- [ ] Case studies use deep navy `#07131E` cards with Regional/Global toggle.
- [ ] Insights use the 3-card horizontal grid with 16/10 photos and pill button.
- [ ] Footer uses the 4-column directory with regional presence badges and `#2F5FA8` accents.
- [ ] `npm run build` compiles with zero errors (all 31 static routes passing).\n