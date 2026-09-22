# FSM Consulting — Production Launch Readiness Checklist

This checklist defines the gatekeeping requirements and post-launch milestones for deploying `fsmconsulting.org` to production.

---

## 1. Blocking (Must Have Before Go-Live)

These items are hard prerequisites. Launching without them presents legal, operational, or reputational risks.

- [ ] **Confirm CAC RC Number**: Confirm whether `RC: 9616494` is the exact Corporate Affairs Commission registration number for FSM Consulting Limited before production launch.
- [ ] **Privacy Legal Review**: Obtain formal legal sign-off from FSM legal counsel on the draft Privacy Notice under the Nigeria Data Protection Act (NDPA 2023) at `/privacy`.
- [ ] **Policy Documents / On-Request Wording Approval**: Obtain client sign-off on the "Available on request" protocol (`info@fsmconsulting.com`) across all 8 institutional policies, or supply uploadable signed PDFs:
  - FSM Corporate Profile (2026 Edition PDF)
  - Anti-Corruption Framework & Code of Business Integrity PDF
  - Ethical Conduct Policy PDF
  - Environmental & Social Safeguarding Policy PDF
  - Data Protection Policy (NDPA Compliant) PDF
  - Gender Equality and Social Inclusion (GESI) Policy PDF
  - Risk Management Framework PDF
  - Quality Management System (QMS) Protocol PDF
- [ ] **Confirm Official LinkedIn URL**: Verify whether `https://www.linkedin.com/company/fsm-consulting-limited` is active and correct.
- [ ] **Monitored Corporate Inbox**: Ensure `info@fsmconsulting.com` (and fallback `support.fsmconsulting@gmail.com`) are configured with active MX records, spam filtering, and daily monitoring to receive enquiries from `/contact`, `/partner-with-us`, and `/experts`.
- [ ] **Domain & Hosting Infrastructure Setup**: Configure custom domain `www.fsmconsulting.org` with root domain apex redirect, SSL/TLS certificate, and Vercel/production deployment environment variables.

---

## 2. Post-Launch Milestones

Operational enhancements, credential updates, and digital marketing optimizations to be deployed after the initial public release.

- [ ] **Director Biographies & Professional Headshots**:
  - Non-Executive Director Rabiu Ademoh (Digital, Data & Technology)
  - Non-Executive Director Hadi Abdullah (Infrastructure & Development)
  - Non-Executive Director Jafar Garba (Agriculture, Food Systems & Agribusiness)
  - Non-Executive Director Umar Jibril (Legal & Compliance)
  - Non-Executive Director Vacancy (Fiduciary)
- [ ] **Verified Case Studies & Track Record**: Upload formal assignment profiles once explicit written permission is obtained from contracting clients (World Bank, MDAs, bilateral partners).
- [ ] **Form Backend / CRM Integration**: Transition from client-side `mailto:` generation to an automated database/CRM submission backend (e.g. Supabase, HubSpot, or Resend) for `/contact`, `/partner-with-us`, and `/experts`.
- [ ] **Monthly Insight Publications**: Commission and publish regular thought leadership articles from FSM sector specialists (target: 1 original piece per month) to maintain domain authority and SEO freshness.
- [ ] **Privacy-Friendly Web Analytics**: Deploy lightweight, cookie-less analytics (e.g. Plausible Analytics or Vercel Analytics) to monitor traffic and track key conversion events without requiring invasive consent banners:
  - `procurement_doc_request`: Downloads or mailto requests for institutional packs
  - `partner_enquiry_submit`: Teaming and consortium submissions from international firms
  - `expert_roster_signup`: Consultant applications to the multidisciplinary expert bench
  - `contact_inquiry_submit`: General and project advisory inquiries

