import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        {/* Top Branding Section */}
        <div className="flex flex-col justify-between gap-6 border-b border-white/10 pb-12 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <Image
              src="/FSMLogo.png"
              alt="FSM Consulting Logo"
              width={70}
              height={65}
              className="h-12 w-auto md:h-14 object-contain brightness-110"
              unoptimized
            />
            <span className="font-serif text-[22px] font-medium tracking-tight text-white md:text-[24px]">
              FSM Consulting Limited
            </span>
          </div>
          <p className="max-w-xl text-[14px] leading-relaxed text-gray-400">
            Africa&rsquo;s Development Delivery Partner. Accelerating
            implementation, strengthening institutions, and delivering
            measurable results across sovereign and cross-border initiatives.
          </p>
        </div>

        {/* 4-Column Directory Grid */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:gap-12">
          {/* Practice Areas */}
          <div>
            <h4 className="font-serif text-[15px] font-medium text-white">
              Practice Areas
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Project Assurance &amp; IVA
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  MEAL &amp; Outcome Harvesting
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Governance &amp; Safeguards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Digital Systems &amp; GIS Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Procurement &amp; Fiduciary
                </Link>
              </li>
            </ul>
          </div>

          {/* Key Sectors */}
          <div>
            <h4 className="font-serif text-[15px] font-medium text-white">
              Key Sectors
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/sectors/governance-public-administration" className="hover:text-white transition-colors">
                  Governance &amp; Public Admin
                </Link>
              </li>
              <li>
                <Link href="/sectors/agriculture-rural-development" className="hover:text-white transition-colors">
                  Agriculture &amp; Rural Development
                </Link>
              </li>
              <li>
                <Link href="/sectors/health-systems-strengthening" className="hover:text-white transition-colors">
                  Health Systems Strengthening
                </Link>
              </li>
              <li>
                <Link href="/sectors/energy-renewable-energy" className="hover:text-white transition-colors">
                  Energy &amp; Renewables
                </Link>
              </li>
              <li>
                <Link href="/sectors/infrastructure-development" className="hover:text-white transition-colors">
                  Infrastructure Development
                </Link>
              </li>
              <li>
                <Link href="/sectors/digital-economy" className="hover:text-white transition-colors">
                  Digital Economy
                </Link>
              </li>
              <li>
                <Link href="/sectors/climate-change-sustainability" className="hover:text-white transition-colors">
                  Climate &amp; Sustainability
                </Link>
              </li>
              <li>
                <Link href="/sectors/water-sanitation-hygiene" className="hover:text-white transition-colors">
                  WASH (Water &amp; Sanitation)
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/sectors" className="text-blue-bright hover:underline font-medium transition-colors">
                  View All 15 Sectors &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Firm & Network */}
          <div>
            <h4 className="font-serif text-[15px] font-medium text-white">
              Our Firm
            </h4>
            <ul className="mt-4 space-y-2.5 text-[13.5px]">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About FSM Consulting
                </Link>
              </li>
              <li>
                <Link href="/#delivery-ecosystem" className="hover:text-white transition-colors">
                  Delivery Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/network" className="hover:text-white transition-colors">
                  Regional Network Reach
                </Link>
              </li>
              <li>
                <Link href="/#insights" className="hover:text-white transition-colors">
                  Perspectives &amp; Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Executive Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Registered Office */}
          <div>
            <h4 className="font-serif text-[15px] font-medium text-white">
              Headquarters
            </h4>
            <div className="mt-4 space-y-2 text-[13.5px] leading-relaxed">
              <p className="text-gray-300">Abuja, Federal Capital Territory, Nigeria</p>
              <p>
                <a href="mailto:info@fsmconsulting.com" className="hover:text-white transition-colors">
                  info@fsmconsulting.com
                </a>
              </p>
              <p>
                <a href="tel:+2349040009512" className="hover:text-white transition-colors">
                  +234 904 000 9512
                </a>
              </p>
              <div className="pt-2">
                <span className="inline-block border border-white/20 px-2.5 py-1 text-[11px] font-mono text-gray-400 rounded-full">
                  SCUML Registered Entity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Utility Bar */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[12px] text-gray-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-4">
            <span>&copy; {new Date().getFullYear()} FSM Consulting Limited. All rights reserved.</span>
            <span>&middot;</span>
            <span className="font-mono text-gray-400">RC: 9616494</span>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="transition-colors duration-200 hover:text-gray-300">
              Confidentiality &amp; Code of Conduct
            </Link>
            <Link href="/contact" className="transition-colors duration-200 hover:text-gray-300">
              Terms of Engagement
            </Link>
            <a href="#top" className="inline-flex items-center gap-1 text-blue-bright transition-all duration-200 hover:brightness-125">
              <span>Back to top</span>
              <span>&uarr;</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}