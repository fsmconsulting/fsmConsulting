import HeroBackground from "@/components/HeroBackground";
import Nav from "@/components/Nav";
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { sectorsData } from "@/data/sectorsData";

/**
 * Continuous Full-Bleed Editorial Hero
 * Aligned with the Conceptzilla consulting visual grammar:
 * continuous photographic surface → integrated transparent navigation →
 * typography composed directly over the image.
 * Editorial Hero matching Conceptzilla Reference (media_1789744082329.webp & media_1789744082327.webp):
 * - Rounded photographic container set within #f4f5f7 canvas
 * - Seamless top navigation: brand wordmark on left, clean links on right
 * - Direct typography composed over image: 3-line headline, grounded narrative, white pill CTA
 * - Pure full-width transition to "Our value, your advantage" below.
 */
export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-navy text-white flex flex-col justify-between"
    >
      {/* 1. Continuous full-bleed photographic surface */}
      <HeroBackground />
    <section id="top" className="bg-[#f4f5f7] p-3 sm:p-4 md:p-6">
      {/* Massive Rounded Hero Photographic Container */}
      <div className="relative min-h-[640px] sm:min-h-[700px] md:min-h-[760px] lg:min-h-[800px] rounded-[24px] sm:rounded-[30px] md:rounded-[36px] overflow-hidden bg-[#07131e] text-white flex flex-col justify-between shadow-sm">
        
        {/* Full-bleed photography background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image
            src="/HeroBg.webp"
            alt="African development and urban infrastructure landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />

      {/* 2. Integrated transparent navigation */}
      <Nav transparent />
          {/* Desktop directional overlay: Left-to-right density gradient for text readability */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(7, 19, 30, 0.94) 0%, rgba(7, 19, 30, 0.78) 45%, rgba(7, 19, 30, 0.3) 80%, rgba(7, 19, 30, 0.1) 100%)",
            }}
          />

      {/* 3. Typography & content composed directly over the image */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12 pt-32 sm:pt-36 md:pt-44 pb-12 md:pb-16 flex-1 flex flex-col justify-between">
        <div className="max-w-[820px]">
          {/* Eyebrow / positioning tag */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-bright" />
            <span className="font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.22em] text-blue-bright">
              Advisory &middot; Implementation &middot; Assurance
          {/* Mobile directional overlay */}
          <div
            className="absolute inset-0 md:hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(7, 19, 30, 0.85) 0%, rgba(7, 19, 30, 0.92) 50%, rgba(7, 19, 30, 0.98) 100%)",
            }}
          />

          {/* Subtle top vignette for nav */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(7, 19, 30, 0.6) 0%, transparent 25%)",
            }}
          />
        </div>

        {/* 1. Seamless Integrated Top Navigation (matches media_1789744082329.webp) */}
        <header className="relative z-20 px-6 sm:px-10 md:px-14 pt-6 sm:pt-8 md:pt-10 flex items-center justify-between">
          {/* Brand Wordmark (matching "Prism." in reference) */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center p-0.5">
              <Image
                src="/FSMLogo.png"
                alt="FSM Consulting Logo"
                width={70}
                height={70}
                className="h-full w-auto object-contain brightness-125"
                priority
              />
            </div>
            <span className="text-[20px] md:text-[22px] font-semibold tracking-tight text-white">
              FSM Consulting.
            </span>
          </div>
          </Link>

          {/* Large editorial headline (Source Serif 4) */}
          <h1 className="mt-5 font-serif text-[44px] sm:text-[58px] md:text-[72px] lg:text-[84px] xl:text-[90px] font-normal leading-[1.02] tracking-tight text-white max-w-[17ch]">
            Africa&rsquo;s Development Delivery Partner.
          {/* Desktop Navigation Links matching reference */}
          <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium text-white/85">
            <Link href="/about" className="hover:text-white transition-colors">
              About Us
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/sectors" className="hover:text-white transition-colors">
              Sectors
            </Link>
            <a href="#case-studies" className="hover:text-white transition-colors">
              Case Studies
            </a>
            <Link href="/insights" className="hover:text-white transition-colors">
              Insights
            </Link>
            <Link href="/network" className="hover:text-white transition-colors">
              Team &amp; Network
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="flex items-center gap-2 p-1.5 lg:hidden text-white"
            aria-label="Open menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </header>

        {/* 2. Direct Typography & Content Composed Over Image (matches media_1789744082329.webp) */}
        <div className="relative z-10 px-6 sm:px-10 md:px-14 py-16 sm:py-20 md:py-28 max-w-[780px] my-auto">
          {/* 3-Line Large Headline matching reference: "We solve complex business & legal challenges" */}
          <h1 className="text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] font-medium leading-[1.05] tracking-tight text-white">
            We turn development<br />
            investments into<br />
            measurable results
          </h1>

          {/* Grounded corporate-profile narrative */}
          <p className="mt-6 md:mt-8 max-w-[54ch] text-[16px] sm:text-[17.5px] md:text-[18.5px] leading-[1.65] text-white/80 font-normal">
            Bridging the gap between ambitious strategy and ground-level execution. We partner with
            governments, development partners, and international financial institutions to translate
            investments into measurable results, institutional strength, and sustainable impact.
          {/* Supporting Narrative grounded in FSM Corporate Profile */}
          <p className="mt-5 sm:mt-6 text-[15.5px] sm:text-[17px] md:text-[18px] leading-relaxed text-white/80 max-w-[50ch]">
            We combine global expertise, regional access, and local implementation capability to help governments, development partners, and financial institutions accelerate delivery and create lasting impact.
          </p>

          {/* Primary action & secondary direction */}
          <div className="mt-9 md:mt-11 flex flex-wrap items-center gap-5 sm:gap-6">
          {/* White Pill CTA matching reference: "Schedule a Consultation" */}
          <div className="mt-8 sm:mt-10">
            <a
              href="/contact"
              className="pill-btn bg-white px-7 py-3.5 text-[15px] font-semibold text-navy transition-all duration-200 hover:bg-white/90 hover:shadow-lg"
              href="#contact"
              className="inline-flex items-center justify-center bg-white text-[#07131e] font-semibold text-[14.5px] px-8 py-3.5 rounded-full hover:bg-white/90 transition-all shadow-md active:scale-95 cursor-pointer"
            >
              <span>Discuss an assignment</span>
              <span className="pill-btn-arrow">&rarr;</span>
              Schedule a Consultation
            </a>
          </div>
        </div>

            <a
              href="/services"
              className="group inline-flex items-center gap-2 text-[14.5px] md:text-[15px] font-medium text-white/80 transition-colors hover:text-white"
        {/* Bottom subtle space */}
        <div className="h-4 sm:h-6" />
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-[#07131e] text-white p-6 animate-in fade-in duration-200 lg:hidden">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="text-[20px] font-semibold tracking-tight text-white">
              FSM Consulting.
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="h-10 w-10 flex items-center justify-center rounded-full border border-white/20 text-white"
              aria-label="Close menu"
            >
              <span>See our capabilities</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                &rarr;
              </span>
            </a>
              &times;
            </button>
          </div>
        </div>

        {/* Bottom editorial trust markers, integrated into the hero */}
        <div className="mt-16 md:mt-24 border-t border-white/15 pt-6 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[11.5px] md:text-[12px] text-white/60">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>HQ: Abuja, Nigeria</span>
            <span className="hidden sm:inline text-white/25">&bull;</span>
            <span>36 States + FCT Operational Reach</span>
            <span className="hidden sm:inline text-white/25">&bull;</span>
            <span>Pan-African Delivery Bench</span>
          <nav className="flex flex-col gap-6 pt-8 text-[22px] font-medium">
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link href="/sectors" onClick={() => setMobileMenuOpen(false)}>
              Sectors
            </Link>
            <a href="#case-studies" onClick={() => setMobileMenuOpen(false)}>
              Case Studies
            </a>
            <Link href="/insights" onClick={() => setMobileMenuOpen(false)}>
              Insights
            </Link>
            <Link href="/network" onClick={() => setMobileMenuOpen(false)}>
              Team &amp; Network
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </nav>

          <div className="mt-auto pt-8 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-white text-[#07131e] font-semibold py-3.5 rounded-full"
            >
              Schedule a Consultation
            </Link>
          </div>

          <a
            href="#positioning"
            className="hidden lg:inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
          >
            <span>Scroll to explore</span>
            <span className="text-[14px]">&darr;</span>
          </a>
        </div>
      </div>
      )}
    </section>
  );
}
