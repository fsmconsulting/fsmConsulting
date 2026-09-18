import Link from "next/link";

/**
 * Institutional Footer Component
 * Matches Conceptzilla visual grammar:
 * - Deep navy (#07131e) background with crisp typography and subtle borders
 * - Brand heading with "FSM Consulting." mark & regional presence badges
 * - Clean 4-column directory for Practice Areas, Priority Sectors, Institutional, and Headquarters
 * - Accent color #2f5fa8 for hover states and Back to Top
 */
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07131e] text-gray-400 antialiased" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      
      <div className="mx-auto max-w-7xl px-8 lg:px-14 py-16 lg:py-20">
        {/* Top Branding & Regional Footprint Bar */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div>
            <Link href="/" className="inline-block">
              <span className="text-[26px] lg:text-[28px] font-bold tracking-tight text-white hover:text-white/90 transition-colors">
                FSM Consulting.
              </span>
            </Link>
            <p className="mt-2 text-[14.5px] text-gray-400 max-w-lg leading-relaxed">
              Africa&rsquo;s Development Delivery Partner. Turning investments into measurable results across sovereign and cross-border initiatives.
            </p>
          </div>

          {/* Regional Presence Badges matching reference style */}
          <div className="flex flex-col items-start lg:items-end gap-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
              Regional Delivery Footprint
            </span>
            <div className="flex flex-wrap gap-2">
              {["Abuja (HQ)", "Lagos", "Dakar", "Nairobi"].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1 text-[12px] font-medium text-white/90"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:gap-14">
          {/* Column 1: Core Practice Areas */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Practice Areas
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Project Assurance &amp; IVA
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Implementation Acceleration
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  MEAL &amp; Evidence Tracking
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Governance &amp; Safeguards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Fiduciary &amp; Procurement
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Priority Sectors */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Key Sectors
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/sectors/governance-public-administration" className="hover:text-white transition-colors">
                  Governance &amp; Public Admin
                </Link>
              </li>
              <li>
                <Link href="/sectors/agriculture-rural-development" className="hover:text-white transition-colors">
                  Agriculture &amp; Rural Dev
                </Link>
              </li>
              <li>
                <Link href="/sectors/health-systems-strengthening" className="hover:text-white transition-colors">
                  Health Systems
                </Link>
              </li>
              <li>
                <Link href="/sectors/energy-renewable-energy" className="hover:text-white transition-colors">
                  Energy &amp; Renewables
                </Link>
              </li>
              <li>
                <Link href="/sectors/infrastructure-development" className="hover:text-white transition-colors">
                  Infrastructure
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Institutional Navigation */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About FSM Consulting
                </Link>
              </li>
              <li>
                <Link href="/delivery-ecosystem" className="hover:text-white transition-colors">
                  Delivery Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Perspectives &amp; Insights
                </Link>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Verified Case Studies
                </a>
              </li>
              <li>
                <Link href="/network" className="hover:text-white transition-colors">
                  Advisory Bench &amp; Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Headquarters & Contact */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Headquarters
            </h3>
            <div className="mt-5 space-y-3 text-[13.5px] leading-relaxed">
              <p className="text-gray-300">
                Abuja, Federal Capital Territory,<br />Nigeria
              </p>
              <p>
                <a href="mailto:info@fsmconsulting.com" className="text-gray-300 hover:text-white transition-colors">
                  info@fsmconsulting.com
                </a>
              </p>
              <p>
                <a href="tel:+2349040009512" className="text-gray-300 hover:text-white transition-colors">
                  +234 904 000 9512
                </a>
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#2f5fa8] hover:text-white transition-colors"
                >
                  <span>Schedule a Consultation</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility & Copyright Bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[12.5px] text-gray-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} FSM Consulting Limited. All rights reserved.</span>
            <span>&middot;</span>
            <span className="font-mono text-gray-400">RC: 9616494</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-gray-300 transition-colors">
              Confidentiality
            </Link>
            <a
              href="#top"
              className="inline-flex items-center gap-1 font-medium text-[#2f5fa8] hover:text-white transition-colors"
            >
              <span>Back to top</span>
              <span>&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
