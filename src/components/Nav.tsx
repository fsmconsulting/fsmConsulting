"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectorsData } from "@/data/sectorsData";

export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSectorsOpen, setMobileSectorsOpen] = useState(false);
  const [sectorsDropdownOpen, setSectorsDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const pathname = usePathname();
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Group sectors into 4 thematic columns
  const governanceDigital = sectorsData.filter((s) => s.category === "governance-digital");
  const economicFinance = sectorsData.filter((s) => s.category === "economic-finance");
  const humanCapital = sectorsData.filter((s) => s.category === "human-capital");
  const infrastructureEnv = sectorsData.filter((s) => s.category === "infrastructure-environment");

  const isSectorsActive = pathname.startsWith("/sectors");

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/services" && pathname.startsWith("/services")) return true;
    if (href === "/delivery-ecosystem" && pathname === "/delivery-ecosystem") return true;
    if (href === "/network" && pathname === "/network") return true;
    if (href === "/insights" && pathname.startsWith("/insights")) return true;
    return false;
  };

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setSectorsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setSectorsDropdownOpen(false);
    }, 180);
  };

  // Close dropdown on route change
  useEffect(() => {
    setSectorsDropdownOpen(false);
    setMobileMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Filter sectors for quick search
  const filteredSectors = searchQuery.trim()
    ? sectorsData.filter(
        (s) =>
          s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          s.tagline.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const shell = transparent
    ? "absolute inset-x-0 top-0 z-50 bg-transparent text-white"
    : "sticky top-0 z-50 border-b border-navy/10 bg-white/95 backdrop-blur-md text-navy transition-all";

  const brandCls = transparent ? "text-white" : "text-navy";

  const linkActiveCls = transparent
    ? "font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-white"
    : "font-semibold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-navy";

  const linkIdleCls = transparent
    ? "font-normal text-white/80 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-white/60 after:transition-all hover:after:w-full"
    : "font-normal text-ink-muted hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-navy/40 after:transition-all hover:after:w-full";

  const renderSectorDropdownItem = (s: (typeof sectorsData)[number]) => (
    <li key={s.id}>
      <Link
        href={`/sectors/${s.id}`}
        onClick={() => setSectorsDropdownOpen(false)}
        className="group flex items-center justify-between rounded-lg border border-white/10 bg-navy-2/70 px-3.5 py-2.5 transition-colors duration-200 hover:border-blue-bright/50 hover:bg-navy-2"
      >
        <span className="text-[12.5px] font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
          {s.title}
        </span>
        <span className="text-[11px] text-blue-bright transition-all duration-200 group-hover:translate-x-1 group-hover:text-white">
          &rarr;
        </span>
      </Link>
    </li>
  );

  return (
    <header className={shell}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:py-5">
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className={`flex items-center gap-2 p-1 lg:hidden ${
            transparent ? "text-white" : "text-navy"
          }`}
          aria-label="Open navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="font-mono text-xs uppercase tracking-wider">Menu</span>
        </button>

        {/* Logo / Brand */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center p-0.5">
            <Image
              src="/FSMLogo.png"
              alt="FSM Consulting Logo"
              width={80}
              height={80}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className={`font-serif text-[19px] font-semibold tracking-tight ${brandCls}`}>
              FSM Consulting
            </span>
            <span className={`font-serif text-[17px] tracking-tight opacity-90 pl-[7.2ch] ${brandCls}`}>
              Limited
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-7 text-[14px] lg:flex">
          <Link href="/" className={`relative py-1 transition-colors ${isActive("/") ? linkActiveCls : linkIdleCls}`}>
            Home
          </Link>
          <Link
            href="/about"
            className={`relative py-1 transition-colors ${isActive("/about") ? linkActiveCls : linkIdleCls}`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`relative py-1 transition-colors ${isActive("/services") ? linkActiveCls : linkIdleCls}`}
          >
            Services &amp; Capabilities
          </Link>

          {/* Sectors Interactive Dropdown Trigger */}
          <div
            className="group/sectors relative py-1"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setSectorsDropdownOpen(!sectorsDropdownOpen)}
              className={`flex items-center gap-1.5 cursor-pointer py-1 transition-colors focus:outline-none ${
                isSectorsActive
                  ? transparent
                    ? "font-semibold text-white"
                    : "font-semibold text-navy"
                  : transparent
                  ? "font-normal text-white/80 hover:text-white"
                  : "font-normal text-ink-muted hover:text-navy"
              }`}
              aria-label="Toggle Sectors Menu"
              aria-expanded={sectorsDropdownOpen}
            >
              <span>Sectors</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  sectorsDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Indicator underline */}
            <span
              className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                isSectorsActive
                  ? transparent
                    ? "w-full bg-white"
                    : "w-full bg-navy"
                  : sectorsDropdownOpen
                  ? transparent
                    ? "w-full bg-white/70"
                    : "w-full bg-navy/60"
                  : "w-0 group-hover/sectors:w-full"
              }`}
            />

            {/* Mega Dropdown Menu */}
            {sectorsDropdownOpen && (
              <div
                className="absolute left-1/2 top-full -translate-x-1/2 pt-3 w-[920px] max-w-[95vw] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="surface-card border border-navy/15 bg-navy p-6 shadow-2xl">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="font-serif text-[16px] text-white">15 Development Sectors</span>
                    <Link
                      href="/sectors"
                      onClick={() => setSectorsDropdownOpen(false)}
                      className="text-[12px] font-medium text-blue-bright hover:text-white transition-colors"
                    >
                      View all sectors directory &rarr;
                    </Link>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <span className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Governance &amp; Digital
                      </span>
                      <ul className="space-y-1.5">{governanceDigital.map(renderSectorDropdownItem)}</ul>
                    </div>
                    <div>
                      <span className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Economic &amp; Finance
                      </span>
                      <ul className="space-y-1.5">{economicFinance.map(renderSectorDropdownItem)}</ul>
                    </div>
                    <div>
                      <span className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Human Capital
                      </span>
                      <ul className="space-y-1.5">{humanCapital.map(renderSectorDropdownItem)}</ul>
                    </div>
                    <div>
                      <span className="mb-2 block text-[11px] font-mono uppercase tracking-wider text-white/50">
                        Infrastructure &amp; Climate
                      </span>
                      <ul className="space-y-1.5">{infrastructureEnv.map(renderSectorDropdownItem)}</ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/delivery-ecosystem"
            className={`relative py-1 transition-colors ${
              isActive("/delivery-ecosystem") ? linkActiveCls : linkIdleCls
            }`}
          >
            Delivery Ecosystem
          </Link>
          <Link
            href="/network"
            className={`relative py-1 transition-colors ${isActive("/network") ? linkActiveCls : linkIdleCls}`}
          >
            Our Network
          </Link>
          <Link
            href="/insights"
            className={`relative py-1 transition-colors ${isActive("/insights") ? linkActiveCls : linkIdleCls}`}
          >
            Insights
          </Link>
        </nav>

        {/* Right CTA and Search */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className={`hidden p-2 md:block transition-colors ${
              transparent ? "text-white/75 hover:text-white" : "text-navy/60 hover:text-navy"
            }`}
            aria-label="Search"
            title="Search"
          >
            <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <Link
            href="/contact"
            className={`pill-btn ${
              transparent
                ? "bg-white text-navy hover:bg-white/90"
                : "bg-navy text-white hover:bg-navy-2"
            }`}
          >
            <span>Discuss an assignment</span>
            <span className="pill-btn-arrow">&rarr;</span>
          </Link>
        </div>
      </div>

      {/* Quick Search Overlay if toggled */}
      {searchOpen && (
        <div className="border-t border-navy/10 bg-canvas px-6 py-4 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-center gap-3">
              <svg className="h-5 w-5 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sectors, practice areas, or delivery capabilities..."
                className="w-full bg-transparent text-[14.5px] text-navy outline-none placeholder:text-navy/40"
                autoFocus
              />
              <button
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-xs uppercase tracking-wider text-navy/60 hover:text-navy cursor-pointer"
              >
                Close
              </button>
            </div>

            {searchQuery.trim() && (
              <div className="mt-4 border-t border-navy/10 pt-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted">
                  Matching Sectors ({filteredSectors.length})
                </span>
                <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
                  {filteredSectors.slice(0, 6).map((sector) => (
                    <Link
                      key={sector.id}
                      href={`/sectors/${sector.id}`}
                      onClick={() => {
                        setSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="surface-card border border-navy/10 bg-white p-3 transition hover:border-navy"
                    >
                      <span className="font-serif text-[13.5px] font-medium text-navy block">
                        {sector.title}
                      </span>
                      <span className="line-clamp-1 text-[11.5px] text-ink-muted">
                        {sector.tagline}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Deliberate Mobile Navigation Overlay (Conceptzilla Reference Grammar) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-navy text-white animate-in fade-in duration-200 lg:hidden">
          {/* Header row in mobile menu */}
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
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

          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto px-6 py-8">
            <nav className="flex flex-col space-y-5">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/about") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/services") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Services &amp; Capabilities
              </Link>

              {/* Sectors Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                  className="flex w-full items-center justify-between font-serif text-[28px] font-medium leading-tight text-white/65 hover:text-white cursor-pointer"
                >
                  <span>Sectors</span>
                  <span className="font-sans text-[20px] text-white/40">
                    {mobileSectorsOpen ? "−" : "+"}
                  </span>
                </button>
                {mobileSectorsOpen && (
                  <div className="mt-4 grid grid-cols-1 gap-2 border-l border-white/20 pl-4">
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

              <Link
                href="/delivery-ecosystem"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/delivery-ecosystem") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Delivery Ecosystem
              </Link>
              <Link
                href="/network"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/network") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Our Network
              </Link>
              <Link
                href="/insights"
                onClick={() => setMobileMenuOpen(false)}
                className={`font-serif text-[28px] font-medium leading-tight transition-colors ${
                  isActive("/insights") ? "text-white" : "text-white/65 hover:text-white"
                }`}
              >
                Insights
              </Link>
            </nav>

            {/* Bottom Contact & Institutional Context */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-blue-bright">
                Headquarters &middot; Regional Delivery
              </p>
              <p className="mt-2 text-[14px] text-white/80">Abuja, Federal Capital Territory, Nigeria</p>
              <div className="mt-3 flex flex-col gap-1.5 text-[13.5px] text-white/60">
                <a href="mailto:info@fsmconsulting.com" className="hover:text-white">
                  info@fsmconsulting.com
                </a>
                <a href="tel:+2349040009512" className="hover:text-white">
                  +234 904 000 9512
                </a>
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="pill-btn w-full bg-white text-navy font-semibold hover:bg-white/90 justify-center"
                >
                  <span>Discuss an assignment</span>
                  <span className="pill-btn-arrow">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
