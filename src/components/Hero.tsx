"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeroBackground from "@/components/HeroBackground";
import Nav from "@/components/Nav";
import { officeLocations, partnerAccessText, contactInfo } from "@/data/siteData";
import { sectorsData } from "@/data/sectorsData";

/**
 * Homepage Hero — Dual Layout
 *
 * Desktop (md+):
 *   Continuous full-bleed photographic editorial hero.
 *   Transparent Nav overlaid, large serif headline, trust markers.
 *
 * Mobile (< md):
 *   Top photographic half (42vh) with dark gradient overlay + FSM logo + hamburger.
 *   Overlapping white card (rounded-t-[32px]) with headline, narrative, and blue CTA button.
 *   Full-screen mobile drawer (navy, matching Nav's design grammar).
 */
export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/services" && pathname?.startsWith("/services")) return true;
    if (href === "/insights" && pathname?.startsWith("/insights")) return true;
    if (href === "/sectors" && pathname?.startsWith("/sectors")) return true;
    if (href === "/network" && pathname === "/network") return true;
    return false;
  };

  const mobileLinkCls = (href: string) =>
    `font-serif text-[28px] font-medium leading-tight transition-colors ${
      isActive(href) ? "text-white" : "text-white/65 hover:text-white"
    }`;

  return (
    <>
      {/* ══════════════════════════════════════════════════════════
          DESKTOP VIEWPORT (md and up) — Full-bleed editorial hero
      ══════════════════════════════════════════════════════════ */}
      <section
        id="top"
        className="relative hidden min-h-screen w-full overflow-hidden bg-navy text-white md:flex flex-col justify-between"
      >
        {/* Full-Bleed Photographic Surface — brighter variant */}
        <HeroBackground
          src="/HeroBg.webp"
          imageClassName="object-cover object-center opacity-100 brightness-[1.08] contrast-[1.05]"
          gradientDirection="right-to-left"
          variant="bright"
        />

        {/* Ambient luminous depth accent */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-[520px] w-[620px] rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(47, 95, 168, 0.5) 0%, rgba(79, 140, 222, 0.2) 45%, transparent 70%)",
          }}
        />

        {/* Transparent Navigation */}
        <Nav transparent />

        {/* Typography & Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 pt-32 sm:pt-36 md:pt-44 pb-12 md:pb-16 flex-1 flex flex-col justify-between">
          <div className="max-w-[820px]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full bg-navy/40 backdrop-blur-sm border border-white/10 px-3.5 py-1 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-bright shadow-[0_0_8px_#2F5FA8]" />
              <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-blue-200">
                Global Expertise &middot; Regional Access &middot; Local Capability &middot; Measurable Results
              </span>
            </div>

            {/* Large Editorial Headline */}
            <h1 className="mt-5 font-serif text-[44px] sm:text-[58px] md:text-[72px] lg:text-[84px] xl:text-[90px] font-normal leading-[1.02] tracking-tight text-white max-w-[17ch] drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
              FSM Consulting Limited
            </h1>

            {/* Narrative */}
            <p className="mt-6 md:mt-8 max-w-[54ch] text-[16px] sm:text-[17.5px] md:text-[18.5px] leading-[1.65] text-white/90 font-normal drop-shadow-[0_1px_8px_rgba(0,0,0,0.25)]">
              From Nigeria to Africa and Beyond, FSM Connects the Right people, Partnerships and Technical Capabilities to Deliver Complex Development Assignments Where They Matter Most.
            </p>

            {/* CTAs */}
            <div className="mt-9 md:mt-11 flex flex-wrap items-center gap-5 sm:gap-6">
              <a
                href="/contact"
                className="pill-btn bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all duration-200 hover:bg-white/95 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Schedule a Consultation</span>
                <span className="pill-btn-arrow">&rarr;</span>
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 text-[14.5px] md:text-[15px] font-medium text-white/90 transition-colors hover:text-white"
              >
                <span>See our capabilities</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>

          {/* Bottom Trust Markers */}
          <div className="mt-16 md:mt-24 border-t border-white/20 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[11.5px] md:text-[12px] text-white/75">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span>HQ: Abuja, Nigeria</span>
              <span className="hidden sm:inline text-white/40">&bull;</span>
              <span>36 States + FCT Operational Reach</span>
              <span className="hidden sm:inline text-white/40">&bull;</span>
              <span>Pan-African Delivery Bench</span>
            </div>
            <a
              href="#positioning"
              className="hidden lg:inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <span>Scroll to explore</span>
              <span className="text-[14px]">&darr;</span>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MOBILE VIEWPORT (< md) — Photo top + White card bottom
      ══════════════════════════════════════════════════════════ */}
      <section id="top-mobile" className="flex flex-col w-full bg-[#07131e] md:hidden">
        {/* Top Photographic Area */}
        <div className="relative h-[45vh] min-h-[280px] w-full overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="African development and urban infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.85] contrast-[1.08]"
          />
          {/* Gradient: header fade top, gentle fade to bottom edge */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131e]/70 via-transparent to-[#07131e]/30" />

          {/* Mobile Header Bar */}
          <div className="relative z-20 px-5 pt-5 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={32}
                height={32}
                className="h-7 w-auto object-contain brightness-125"
                priority
              />
              <span className="text-[19px] font-bold tracking-tight text-white leading-none">
                FSM Consulting.
              </span>
            </Link>

            {/* Two-line Hamburger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 flex flex-col items-end gap-[5px] focus:outline-none cursor-pointer"
              aria-label="Open navigation menu"
            >
              <span className="h-[2px] w-6 bg-white rounded-full" />
              <span className="h-[2px] w-4 bg-white rounded-full" />
            </button>
          </div>
        </div>

        {/* White Card — overlaps bottom of photo */}
        <div className="relative z-10 -mt-8 rounded-t-[32px] bg-white px-6 pt-8 pb-12 shadow-2xl text-[#07131e]">
          {/* Eyebrow tag */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2F5FA8]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#2F5FA8]">
              Development Delivery &middot; Implementation Acceleration
            </span>
          </div>

          <h1 className="text-[26px] sm:text-[30px] font-bold leading-[1.12] tracking-tight text-[#07131e]">
            FSM Consulting Limited
          </h1>
          <p className="mt-4 text-[14px] sm:text-[15px] leading-relaxed text-gray-600">
            From Nigeria to Africa and Beyond, FSM Connects the Right people, Partnerships and Technical Capabilities to Deliver Complex Development Assignments Where They Matter Most.
          </p>

          {/* CTA Button */}
          <div className="mt-7">
            <Link
              href="/contact"
              className="block w-full py-4 text-center rounded-full bg-[#2F5FA8] text-white font-semibold text-[15px] hover:bg-[#264E8C] active:scale-[0.98] transition-all shadow-md cursor-pointer"
            >
              Schedule a Consultation
            </Link>
          </div>

          {/* Secondary link */}
          <div className="mt-4 text-center">
            <a
              href="#services"
              className="inline-flex items-center gap-1.5 text-[13.5px] text-gray-500 hover:text-[#2F5FA8] transition-colors"
            >
              <span>See our capabilities</span>
              <span>&rarr;</span>
            </a>
          </div>

          {/* Trust markers strip */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap gap-x-5 gap-y-1.5 font-mono text-[10.5px] text-gray-400 uppercase tracking-wider">
            <span>HQ: Abuja, Nigeria</span>
            <span>36 States + FCT</span>
            <span>Pan-African Reach</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MOBILE MENU DRAWER — Full-screen, navy, matching Nav grammar
      ══════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-navy text-white animate-in fade-in duration-200 md:hidden">
          {/* Header row */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 flex-shrink-0">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={36}
                height={36}
                className="h-9 w-auto object-contain brightness-125"
              />
              <span className="font-serif text-[18px] font-semibold tracking-tight text-white">
                FSM Consulting
              </span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10 cursor-pointer"
              aria-label="Close navigation menu"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Scrollable nav content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col space-y-5">
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={mobileLinkCls("/about")}>
                About
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={mobileLinkCls("/services")}>
                Services &amp; Capabilities
              </Link>

              {/* Sectors accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                  className="flex w-full items-center justify-between font-serif text-[28px] font-medium leading-tight text-white/65 hover:text-white cursor-pointer"
                >
                  <span>Sectors</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`text-white/40 transition-transform duration-300 ${mobileSectorsOpen ? "rotate-180" : "rotate-0"}`}
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {mobileSectorsOpen && (
                  <div className="mt-4 grid grid-cols-1 gap-2 border-l border-white/20 pl-4">
                    <Link
                      href="/sectors"
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 text-[14px] font-semibold text-blue-bright hover:underline"
                    >
                      Explore All 15 Sectors &rarr;
                    </Link>
                    {sectorsData.map((sector) => (
                      <Link
                        key={sector.id}
                        href={`/sectors/${sector.id}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-1.5 text-[14px] text-white/80 hover:text-white"
                      >
                        <span className="font-mono text-[11px] text-blue-bright mr-2">{sector.num}</span>
                        {sector.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/network" onClick={() => setMobileMenuOpen(false)} className={mobileLinkCls("/network")}>
                Our Network
              </Link>
              <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className={mobileLinkCls("/insights")}>
                Insights
              </Link>
            </nav>

            {/* Contact & institutional footer */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                Headquarters &middot; Regional Delivery
              </p>
              <p className="mt-2 text-[14px] text-white/80">{contactInfo.address}</p>
              <div className="mt-3 flex flex-col gap-1.5 text-[13.5px] text-white/60">
                <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                  {contactInfo.phone}
                </a>
              </div>

              {officeLocations.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {officeLocations.map((loc) => (
                    <span
                      key={loc.name}
                      className="rounded-full border border-white/15 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/50"
                    >
                      {loc.name}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-3 text-[11.5px] text-white/40 leading-normal">{partnerAccessText}</p>

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pill-btn w-full bg-white text-navy font-semibold hover:bg-white/90 justify-center"
                >
                  <span>Schedule a Consultation</span>
                  <span className="pill-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
