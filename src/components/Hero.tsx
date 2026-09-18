"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Hero Component
 * 100% Pixel-perfect match to Conceptzilla Reference:
 * - Desktop (media_1789758029354.webp & c8e3e514595e74e2efef35761014d284.webp):
 *   Full aerial architectural cityscape background clearly visible across the entire hero.
 *   Integrated logo + bold "FSM Consulting." text mark.
 *   Spacious inline navigation (About Us, Services, Insights, Case Studies, Team, Contact).
 *   Bold 3-line sans-serif headline directly over image, subtitle, and white pill "Schedule a Consultation" button.
 * - Mobile (ebdf5e970be111583e80774ede2691f3.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp):
 *   Top half is the dark architectural photograph with two-line hamburger icon,
 *   bottom half is a white card with rounded-t-[32px] containing dark 3-line headline,
 *   subtitle, and full-width brand blue (#2f5fa8) pill button.
 */
export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="top" className="relative w-full overflow-hidden bg-[#07131e]">
      {/* ══════════════════════════════════════════════════════════
          DESKTOP VIEWPORT (Hidden on mobile)
          media_1789758029354.webp & c8e3e514595e74e2efef35761014d284.webp
          Full architectural background + logo + white pill button
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden md:flex flex-col justify-between min-h-[88vh] lg:min-h-[92vh] relative w-full text-white">
        {/* Full-bleed background architectural photography */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="Aerial metropolis architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.12]"
          />
          {/* Subtle balanced film preserving architectural texture across entire width */}
          <div className="absolute inset-0 bg-[#07131e]/45" />
          {/* Gentle left directional density gradient for crisp text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 19, 30, 0.78) 0%, rgba(7, 19, 30, 0.52) 44%, rgba(7, 19, 30, 0.12) 75%, transparent 100%)",
            }}
          />
          {/* Subtle top vignette for navigation bar */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7, 19, 30, 0.65) 0%, rgba(7, 19, 30, 0.15) 18%, transparent 35%)",
            }}
          />
        </div>

        {/* Desktop Navigation matching Reference: media_1789758029354.webp */}
        <header className="relative z-20 mx-auto w-full max-w-7xl px-8 lg:px-14 pt-9 lg:pt-11 flex items-center justify-between">
          {/* Logo & Brand Mark smartly integrated with good design sense */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="relative flex h-8 w-8 items-center justify-center">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={40}
                height={40}
                className="h-full w-auto object-contain brightness-125 drop-shadow-sm group-hover:scale-105 transition-transform duration-200"
                priority
              />
            </div>
            <span className="text-[24px] lg:text-[25px] font-bold tracking-tight text-white group-hover:text-white/90 transition-colors">
              FSM Consulting.
            </span>
          </Link>

          {/* Desktop Nav Links matching reference order */}
          <nav className="flex items-center gap-8 lg:gap-10 text-[14.5px] font-medium text-white/90">
            <Link href="/about" className="hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white transition-colors duration-200">
              Services
            </Link>
            <Link href="/insights" className="hover:text-white transition-colors duration-200">
              Insights
            </Link>
            <a href="#case-studies" className="hover:text-white transition-colors duration-200">
              Case Studies
            </a>
            <Link href="/network" className="hover:text-white transition-colors duration-200">
              Team
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors duration-200">
              Contact
            </Link>
          </nav>
        </header>

        {/* Desktop Hero Content composed directly over photo */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-14 py-16 lg:py-24 my-auto">
          <div className="max-w-[740px]">
            {/* 3-Line Headline matching reference: "We solve complex business & legal challenges" */}
            <h1 className="text-[54px] lg:text-[68px] xl:text-[76px] font-bold leading-[1.06] tracking-tight text-white">
              We solve complex<br />
              development &amp; delivery<br />
              challenges
            </h1>

            {/* Subtitle matching reference cadence */}
            <p className="mt-6 text-[17px] lg:text-[18.5px] leading-relaxed text-white/85 max-w-[500px]">
              We combine decades of development expertise with an execution-first perspective, guiding global companies and sovereign partners through complex challenges with clarity, precision, and trust.
            </p>

            {/* White pill button matching reference: "Schedule a Consultation" */}
            <div className="mt-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-[#07131e] shadow-xl hover:bg-white/90 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>

        {/* Bottom spacer */}
        <div className="h-6" />
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE VIEWPORT (Hidden on desktop)
          ebdf5e970be111583e80774ede2691f3.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp
          Top photo half + White card with rounded-t-[32px] + Brand Blue (#2f5fa8) button
      ══════════════════════════════════════════════════════════ */}
      <div className="flex md:hidden flex-col w-full bg-[#07131e]">
        {/* Top Photographic Area matching ebdf5e970be111583e80774ede2691f3.webp */}
        <div className="relative h-[46vh] min-h-[340px] w-full overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="Aerial metropolis architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[0.72] contrast-[1.12]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07131e]/70 via-transparent to-black/35" />

          {/* Mobile Header Bar matching ebdf5e970be111583e80774ede2691f3.webp */}
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
            {/* Two-line Hamburger Menu Icon matching reference */}
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

        {/* White Card Overlapping Bottom of Photo (matches ebdf5e970be111583e80774ede2691f3.webp) */}
        <div className="relative z-10 -mt-7 rounded-t-[32px] bg-white px-6 pt-8 pb-10 shadow-2xl text-[#07131e]">
          <h1 className="text-[30px] sm:text-[34px] font-bold leading-[1.12] tracking-tight text-[#07131e]">
            We solve complex<br />
            development &amp; delivery<br />
            challenges
          </h1>
          <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600">
            We combine decades of development expertise with an execution-first perspective, guiding global companies and sovereign partners through complex challenges with clarity, precision, and trust.
          </p>
          <div className="mt-7">
            <a
              href="#contact"
              className="block w-full py-4 text-center rounded-full bg-[#2f5fa8] text-white font-semibold text-[15px] hover:bg-[#254e8c] active:scale-[0.98] transition-all shadow-md cursor-pointer"
            >
              Schedule a Consultation
            </a>
          </div>

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
          8bd1b8809a228bcdb45bd5d716fe3d4c.webp
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

          {/* Large Menu Items matching reference: 8bd1b8809a228bcdb45bd5d716fe3d4c.webp */}
          <nav className="flex flex-col gap-6 py-8 text-[32px] sm:text-[36px] font-bold tracking-tight text-[#07131e]">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              About Us
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Services
            </Link>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Insights
            </Link>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Case Studies
            </a>
            <Link href="/sectors" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Sectors
            </Link>
            <Link href="/network" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Team
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Footer of mobile menu matching reference */}
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
