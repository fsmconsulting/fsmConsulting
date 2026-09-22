import Link from "next/link";
import { officeLocations, partnerAccessText, contactInfo } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#07131e] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:py-20">
        {/* Top Branding & Footprint */}
        <div className="flex flex-col gap-6 pb-12 border-b border-white/10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <span className="text-[24px] font-bold tracking-tight text-white">
              FSM Consulting<span className="text-[#2F5FA8]">.</span>
            </span>
            <p className="mt-2 text-[14px] text-gray-400 max-w-[50ch]">
              Africa&rsquo;s multidisciplinary development delivery, implementation acceleration, and project assurance partner.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="text-[12px] font-mono uppercase tracking-wider text-gray-400">Footprint:</span>
            <div className="flex flex-wrap items-center gap-2">
              {officeLocations.map((loc) => (
                <span
                  key={loc.name}
                  className="rounded-full bg-white/10 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-white"
                >
                  {loc.name}
                </span>
              ))}
              <span className="rounded-full bg-white/5 px-3 py-1 text-[11px] text-gray-300">
                {partnerAccessText}
              </span>
            </div>
          </div>
        </div>

        {/* 4 Directory Columns */}
        <div className="grid grid-cols-2 gap-10 py-12 md:grid-cols-4 lg:gap-12">
          {/* Column 1: Firm */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Firm
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="text-gray-400 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/about/integrity" className="text-gray-400 hover:text-white transition-colors">
                  Integrity
                </Link>
              </li>
              <li>
                <Link href="/about/network" className="text-gray-400 hover:text-white transition-colors">
                  Network
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-400 hover:text-white transition-colors">
                  Approach
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/services#verify" className="text-gray-400 hover:text-white transition-colors">
                  Verify
                </Link>
              </li>
              <li>
                <Link href="/services#mobilise" className="text-gray-400 hover:text-white transition-colors">
                  Mobilise
                </Link>
              </li>
              <li>
                <Link href="/services#deliver" className="text-gray-400 hover:text-white transition-colors">
                  Deliver
                </Link>
              </li>
              <li>
                <Link href="/sectors" className="text-gray-400 hover:text-white transition-colors">
                  Sectors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Work with us */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Work with us
            </h3>
            <ul className="mt-5 space-y-3 text-[13.5px]">
              <li>
                <Link href="/partner-with-us" className="text-gray-400 hover:text-white transition-colors">
                  Partner with us
                </Link>
              </li>
              <li>
                <Link href="/experts" className="text-gray-400 hover:text-white transition-colors">
                  Join our experts
                </Link>
              </li>
              <li>
                <Link href="/procurement" className="text-gray-400 hover:text-white transition-colors">
                  Procurement pack
                </Link>
              </li>
              <li>
                <Link href="/experts" className="text-gray-400 hover:text-white transition-colors">
                  Careers &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-[14px] font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <div className="mt-5 space-y-3 text-[13.5px] leading-relaxed">
              <p className="text-gray-400">
                {contactInfo.address}
              </p>
              <p>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </p>
              <p>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/company/fsm-consulting-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  LinkedIn &rarr;
                </a>
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] px-5 py-2 text-[13px] font-semibold text-white shadow-md hover:bg-[#264E8C] transition-all"
                >
                  <span>Schedule a Consultation</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: © FSM Consulting Limited · Privacy · Recruitment fraud notice */}
        <div className="flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-[12.5px] text-gray-500 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-3">
            <span>&copy; {new Date().getFullYear()} FSM Consulting Limited. All rights reserved.</span>
            <span>&bull;</span>
            <span>CAC RC: {contactInfo.rcNumber}</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="/recruitment-fraud-notice" className="hover:text-gray-300 transition-colors">
              Recruitment fraud notice
            </Link>
            <a
              href="#top"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-gray-400 hover:bg-[#2F5FA8] hover:text-white transition-all"
              aria-label="Back to top"
            >
              &uarr;
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
