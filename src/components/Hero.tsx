"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface StatItem {
  value: string;
  label: string;
}

export interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  stats?: StatItem[];
  isHomepage?: boolean;
}

/**
 * Reusable Hero Component
 * 100% Pixel-perfect match to Conceptzilla Reference across all pages:
 * - Desktop:
 *   Full aerial architectural cityscape background clearly visible across the entire hero.
 *   Integrated logo + bold "FSM Consulting." text mark.
 *   Spacious inline navigation (About Us, Services, Insights, Case Studies, Sectors, Team, Contact).
 *   Bold sans-serif headline directly over image, subtitle, and white pill button.
 * - Mobile:
 *   Top half is the dark architectural photograph with two-line hamburger icon,
 *   bottom half is a white card with rounded-t-[32px] containing dark headline,
 *   subtitle, optional highlight stats, and full-width brand blue (#2f5fa8) pill button.
 * - Mobile Drawer:
 *   Full-screen white modal with large bold links, regional footprint badges, and contact details.
 */
export default function Hero({
  title,
  subtitle,
  ctaText = "Schedule a Consultation",
  ctaHref = "/contact",
  stats,
  isHomepage,
}: HeroProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHome = isHomepage ?? (pathname === "/");

  const resolvedTitle = title ?? (
    <>
      We solve complex<br />
      development &amp; delivery<br />
      challenges
    </>
  );

  const resolvedSubtitle = subtitle ?? (
    "We combine decades of development expertise with an execution-first perspective, guiding global companies and sovereign partners through complex challenges with clarity, precision, and trust."
  );

  const isActiveLink = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/services" && pathname?.startsWith("/services")) return true;
    if (href === "/insights" && pathname?.startsWith("/insights")) return true;
    if (href === "/sectors" && pathname?.startsWith("/sectors")) return true;
    if (href === "/network" && pathname === "/network") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    return false;
  };

  const getDesktopLinkClass = (href: string) => {
    const active = isActiveLink(href);
    return active
      ? "text-white font-semibold border-b-2 border-[#2F5FA8] pb-1 transition-colors"
      : "text-white/85 hover:text-white transition-colors duration-200";
  };

  const getMobileLinkClass = (href: string) => {
    const active = isActiveLink(href);
    return active
      ? "text-[#2F5FA8] transition-colors"
      : "text-[#07131e] hover:text-[#2F5FA8] transition-colors";
  };

  const desktopMinHeight = isHome
    ? "min-h-[100vh]"
    : stats && stats.length > 0
    ? "min-h-[82vh] lg:min-h-[88vh] pb-14"
    : "min-h-[75vh] lg:min-h-[82vh] pb-12";

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#07131e]">
      {/* ══════════════════════════════════════════════════════════
          DESKTOP VIEWPORT (Hidden on mobile)
          Full architectural background + logo + white pill button
      ══════════════════════════════════════════════════════════ */}
      <div className={`hidden md:flex flex-col ${desktopMinHeight} relative w-full text-white`}>
        {/* Background architectural photography */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="Aerial metropolis architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.78] contrast-[1.1]"
          />
          {/* Subtle top header gradient & soft left shadow for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131e]/75 via-transparent to-[#07131e]/45" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07131e]/85 via-[#07131e]/40 to-transparent" />
        </div>

        {/* Desktop Navigation */}
        <header className="relative z-20 mx-auto w-full max-w-7xl px-8 lg:px-14 pt-7 lg:pt-9 flex items-center justify-between">
          {/* Logo & Brand Mark */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={36}
                height={36}
                className="h-full w-auto object-contain brightness-125 drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <span className="text-[23px] lg:text-[25px] font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
              FSM Consulting.
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="flex items-center gap-7 lg:gap-9 text-[14.5px] font-medium text-white/90">
            <Link href="/about" className={getDesktopLinkClass("/about")}>
              About Us
            </Link>
            <Link href="/services" className={getDesktopLinkClass("/services")}>
              Services
            </Link>
            <Link href="/insights" className={getDesktopLinkClass("/insights")}>
              Insights
            </Link>
            <Link href="/#case-studies" className="text-white/85 hover:text-white transition-colors duration-200">
              Case Studies
            </Link>
            <Link href="/sectors" className={getDesktopLinkClass("/sectors")}>
              Sectors
            </Link>
            <Link href="/network" className={getDesktopLinkClass("/network")}>
              Team
            </Link>
            <Link href="/contact" className={getDesktopLinkClass("/contact")}>
              Contact
            </Link>
          </nav>
        </header>

        {/* Desktop Hero Content composed directly over photo */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-14 pt-24 lg:pt-28 flex-1 flex flex-col justify-center">
          <div className="max-w-[540px]">
            {/* Bold Headline */}
            <h1 className="text-[28px] md:text-[42px] lg:text-[46px] font-bold leading-[1.08] tracking-tight text-white">
              {resolvedTitle}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 lg:mt-6 text-[15px] lg:text-[16px] leading-relaxed text-white/85 max-w-[520px]">
              {resolvedSubtitle}
            </p>

            {/* White pill button */}
            {ctaText && (
              <div className="mt-8 lg:mt-10">
                <a
                  href={ctaHref}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 lg:py-3 text-[15px] font-semibold text-[#07131e] shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  {ctaText}
                </a>
              </div>
            )}
          </div>

          {/* Optional Quick Highlights Strip */}
          {stats && stats.length > 0 && (
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl">
              {stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#2F5FA8] pl-4">
                  <span className="block text-[22px] lg:text-[25px] font-bold text-white">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[13px] text-white/75 leading-snug">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE VIEWPORT (Hidden on desktop)
          Top photo half + White card with rounded-t-[32px] + Brand Blue (#2f5fa8) button
      ══════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden flex-col w-full bg-[#07131e]">
        {/* Top Photographic Area */}
        <div className="relative h-[42vh] min-h-[300px] w-full overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="Aerial metropolis architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131e]/75 via-transparent to-black/40" />

          {/* Mobile Header Bar */}
          <div className="relative z-20 px-6 pt-6 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={28}
                height={28}
                className="h-6 w-auto object-contain brightness-125"
                priority
              />
              <span className="text-[20px] font-bold tracking-tight text-white">
                FSM Consulting.
              </span>
            </Link>
            {/* Two-line Hamburger Menu Icon */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 flex flex-col items-end gap-1.5 focus:outline-none cursor-pointer"
              aria-label="Open menu"
            >
              <span className="h-[2px] w-6 bg-white rounded-full" />
              <span className="h-[2px] w-4 bg-white rounded-full" />
            </button>
          </div>
        </div>

        {/* White Card Overlapping Bottom of Photo */}
        <div className="relative z-10 -mt-7 rounded-t-[32px] bg-white px-6 pt-8 pb-10 shadow-2xl text-[#07131e]">
          <h1 className="text-[28px] sm:text-[32px] font-bold leading-[1.14] tracking-tight text-[#07131e]">
            {resolvedTitle}
          </h1>
          <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600">
            {resolvedSubtitle}
          </p>

          {ctaText && (
            <div className="mt-7">
              <a
                href={ctaHref}
                className="block w-full py-4 text-center rounded-full bg-[#2f5fa8] text-white font-semibold text-[15px] hover:bg-[#254e8c] active:scale-[0.98] transition-all shadow-md cursor-pointer"
              >
                {ctaText}
              </a>
            </div>
          )}

          {/* Optional Quick Highlights Strip on mobile */}
          {stats && stats.length > 0 && (
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
              {stats.map((s, idx) => (
                <div key={idx} className="border-l-2 border-[#2F5FA8] pl-3">
                  <span className="block text-[17px] font-bold text-[#07131e]">
                    {s.value}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-gray-500 leading-tight">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Reference Site URL indicator at bottom */}
          <div className="mt-6 text-center">
            <span className="text-[12px] text-gray-400 font-medium tracking-wide">
              fsmconsultingltd.com
            </span>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE MENU MODAL
          Full white screen, oversized bold typography, locations at bottom
      ══════════════════════════════════════════════════════════ */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-white text-[#07131e] p-6 sm:p-8 animate-in fade-in duration-200 lg:hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <div className="flex items-center gap-2.5">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={28}
                height={28}
                className="h-6 w-auto object-contain"
              />
              <span className="text-[21px] font-bold tracking-tight text-[#07131e]">
                FSM Consulting.
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-100 text-[#07131e] hover:bg-gray-200 transition-colors text-[22px] cursor-pointer"
              aria-label="Close menu"
            >
              &times;
            </button>
          </div>

          {/* Large Menu Items */}
          <nav className="flex flex-col gap-6 py-8 text-[32px] sm:text-[36px] font-bold tracking-tight text-[#07131e]">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/about")}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/services")}>
              Services
            </Link>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/insights")}>
              Insights
            </Link>
            <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Case Studies
            </Link>
            <Link href="/sectors" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/sectors")}>
              Sectors
            </Link>
            <Link href="/network" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/network")}>
              Team
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={getMobileLinkClass("/contact")}>
              Contact
            </Link>
          </nav>

          {/* Footer of mobile menu */}
          <div className="pt-6 border-t border-gray-100 text-[13px] text-gray-500">
            <div className="flex flex-wrap gap-2 mb-4 font-mono text-[11px] uppercase tracking-wider text-[#07131e]">
              <span className="rounded-full bg-gray-100 px-3 py-1">Abuja (HQ)</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">Lagos</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">Dakar</span>
              <span className="rounded-full bg-gray-100 px-3 py-1">Nairobi</span>
            </div>
            <p className="text-[#07131e] font-semibold text-[14px]">+234 904 000 9512</p>
            <p className="text-gray-600">info@fsmconsulting.com</p>
            <p className="mt-1 text-gray-400 text-[12px]">Abuja, Federal Capital Territory, Nigeria</p>
          </div>
        </div>
      )}
    </section>
  );
}
