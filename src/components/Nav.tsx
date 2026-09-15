"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sectorsData } from "@/data/sectorsData";

const mainNavLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services & Capabilities" },
    // "Sectors" is handled specially as an interactive dropdown
    { href: "/#ecosystem", label: "Delivery Ecosystem" },
    { href: "/#network", label: "Our Network" },
];

export default function Nav() {
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

    const renderSectorDropdownItem = (s: (typeof sectorsData)[number]) => (
        <li key={s.id}>
            <Link
                href={`/sectors/${s.id}`}
                onClick={() => setSectorsDropdownOpen(false)}
                className="group flex items-center justify-between rounded-lg bg-slate-800/90 px-3.5 py-2.5 shadow-[0_2px_8px_rgba(255,255,255,0.08)] transition-all duration-200 hover:bg-slate-700/90 hover:shadow-[0_4px_18px_rgba(255,255,255,0.22)] hover:-translate-y-0.5"
            >
                <span className="text-[12.5px] font-medium text-gray-200 transition-colors duration-200 group-hover:text-gold-light">
                    {s.title}
                </span>
                <span className="text-[11px] text-gold-light/70 transition-all duration-200 group-hover:text-gold-light group-hover:translate-x-1">
                    &rarr;
                </span>
            </Link>
        </li>
    );

    const isSectorsActive = pathname.startsWith("/sectors");

    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href === "/about" && pathname === "/about") return true;
        if (href === "/services" && pathname.startsWith("/services")) return true;
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

    // Filter sectors for quick search
    const filteredSectors = searchQuery.trim()
        ? sectorsData.filter(
              (s) =>
                  s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  s.tagline.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : [];

    return (
        <header className="sticky top-0 z-50 border-b border-navy/10 bg-white text-navy shadow-sm transition-all">
            {/* Top Utility Bar */}
            <div className="border-b border-navy/10 bg-[#001326] text-[12px] text-gray-400">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-10">
                    <div className="flex items-center gap-4">
                        <span className="font-medium text-gold-light">Global Reach &middot; Africa Delivery</span>
                        <span className="hidden text-white/20 md:inline">|</span>
                        <span className="hidden md:inline text-gray-300">Abuja &middot; Regional Network</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@fsmconsulting.com" className="text-gray-300 transition-colors hover:text-white">
                            info@fsmconsulting.com
                        </a>
                        <span className="text-white/20">|</span>
                        <a href="tel:+2349040009512" className="text-gray-300 transition-colors hover:text-white">
                            +234 904 000 9512
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
                <div className="flex items-center gap-6">
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex items-center gap-2 text-[14px] font-medium text-navy transition-colors hover:text-gold-light lg:hidden"
                        aria-label="Toggle navigation menu"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                        <span className="font-serif uppercase tracking-wider text-xs">Menu</span>
                    </button>

                    {/* Logo / Brand */}
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded p-1 transition-transform duration-300 group-hover:scale-105">
                            <Image
                                src="/FSMLogo.png"
                                alt="FSM Consulting Logo"
                                width={90}
                                height={90}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                        {/* Brand wordmark */}
                        <div className="flex flex-col leading-none">
                            <span className="font-serif text-[20px] font-semibold tracking-tight text-navy">
                                FSM Consulting
                            </span>
                            <span className="font-serif text-[20px] font-semibold tracking-tight text-navy pl-[7.5ch]">
                                Limited
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-8 text-[14px] lg:flex">
                    <Link
                        href="/"
                        className={`relative py-1.5 transition-colors ${
                            isActive("/")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-gold"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
                        }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className={`relative py-1.5 transition-colors ${
                            isActive("/about")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-gold"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
                        }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/services"
                        className={`relative py-1.5 transition-colors ${
                            isActive("/services")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-gold"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
                        }`}
                    >
                        Services &amp; Capabilities
                    </Link>

                    {/* Sectors Interactive Dropdown Trigger */}
                    <div
                        className="group/sectors relative py-1.5"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button
                            type="button"
                            onClick={() => setSectorsDropdownOpen(!sectorsDropdownOpen)}
                            className={`flex items-center gap-1.5 cursor-pointer py-1.5 transition-colors focus:outline-none ${
                                isSectorsActive
                                    ? "font-bold text-navy"
                                    : "font-medium text-navy/75 hover:text-navy"
                            }`}
                            aria-label="Toggle Sectors Menu"
                            aria-expanded={sectorsDropdownOpen}
                        >
                            <span>Sectors</span>
                            <svg
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                    sectorsDropdownOpen ? "rotate-180 text-navy" : "text-navy/60"
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Gold underline - expands on hover or when dropdown is open */}
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-gold-light transition-all duration-200 ${
                                isSectorsActive
                                    ? "w-full bg-gold h-[2.5px]"
                                    : sectorsDropdownOpen
                                    ? "w-full"
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
                                <div className="rounded-2xl bg-navy p-6 shadow-[0_10px_35px_rgba(255,255,255,0.15),0_20px_45px_rgba(0,0,0,0.5)]">
                                    {/* 4 Thematic Columns */}
                                    <div className="grid grid-cols-4 gap-4">
                                        {/* Column 1: Governance & Digital */}
                                        <div>
                                            <ul className="space-y-2">
                                                {governanceDigital.map(renderSectorDropdownItem)}
                                            </ul>
                                        </div>

                                        {/* Column 2: Economic Growth & Finance */}
                                        <div>
                                            <ul className="space-y-2">
                                                {economicFinance.map(renderSectorDropdownItem)}
                                            </ul>
                                        </div>

                                        {/* Column 3: Human Capital & Social */}
                                        <div>
                                            <ul className="space-y-2">
                                                {humanCapital.map(renderSectorDropdownItem)}
                                            </ul>
                                        </div>

                                        {/* Column 4: Infrastructure & Environment */}
                                        <div>
                                            <ul className="space-y-2">
                                                {infrastructureEnv.map(renderSectorDropdownItem)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Delivery Ecosystem */}
                    <Link
                        href="/#ecosystem"
                        className="font-medium text-navy/75 hover:text-navy relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
                    >
                        Delivery Ecosystem
                    </Link>

                    {/* Our Network */}
                    <Link
                        href="/#network"
                        className="font-medium text-navy/75 hover:text-navy relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-gold-light after:transition-all hover:after:w-full"
                    >
                        Our Network
                    </Link>
                </nav>

                {/* Right CTA and Search */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="hidden p-2 text-navy/60 hover:text-navy md:block"
                        aria-label="Search"
                        title="Search"
                    >
                        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <Link
                        href="/#contact"
                        className="group inline-flex items-center gap-2 bg-gold-light px-5 py-2.5 text-[13.5px] font-medium text-navy shadow-sm transition-all duration-200 hover:brightness-110"
                    >
                        <span className="transition-transform duration-200 group-hover:scale-105 inline-block">Start a conversation</span>
                        <span className="transition-transform duration-200 group-hover:translate-x-1 inline-block">&rarr;</span>
                    </Link>
                </div>
            </div>

            {/* Quick Search Overlay if toggled */}
            {searchOpen && (
                <div className="border-t border-navy/10 bg-gray-50 px-6 py-4 shadow-inner md:px-10">
                    <div className="mx-auto max-w-7xl">
                        <div className="flex items-center gap-3">
                            <svg className="h-5 w-5 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search all 15 sectors, practices, or capabilities (e.g. Agriculture, Energy, Governance, FRILIA, WASH)..."
                                className="w-full bg-transparent text-[14px] text-navy outline-none placeholder:text-navy/40"
                                autoFocus
                            />
                            <button
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchQuery("");
                                }}
                                className="text-xs uppercase tracking-wider text-navy/50 hover:text-navy"
                            >
                                Close
                            </button>
                        </div>

                        {/* Search preview results */}
                        {searchQuery.trim() && (
                            <div className="mt-3 border-t border-gray-200 pt-3">
                                <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">
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
                                            className="rounded border border-gray-200 bg-white p-2.5 transition hover:border-navy hover:shadow-xs"
                                        >
                                            <span className="font-serif text-[13px] font-medium text-navy block">
                                                {sector.title}
                                            </span>
                                            <span className="line-clamp-1 text-[11px] text-gray-500">
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

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className="border-t border-navy/10 bg-white px-6 py-6 shadow-xl lg:hidden max-h-[85vh] overflow-y-auto">
                    <nav className="flex flex-col gap-3 text-[15px] font-medium text-navy">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/") ? "border-gold font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/about") ? "border-gold font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                        >
                            About
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/services") ? "border-gold font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                        >
                            Services &amp; Capabilities
                        </Link>

                        {/* Mobile Accordion for Sectors */}
                        <div className="border-b border-navy/10 pb-2.5">
                            <button
                                type="button"
                                onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                                className="flex w-full items-center justify-between py-1 text-left font-medium text-navy"
                            >
                                <span className={isSectorsActive ? "font-bold text-navy" : "text-navy/75"}>
                                    Sectors (15 Verticals)
                                </span>
                                <svg
                                    className={`h-4 w-4 transition-transform duration-200 ${
                                        mobileSectorsOpen ? "rotate-180 text-navy" : "text-navy/60"
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {mobileSectorsOpen && (
                                <div className="mt-2 space-y-1.5 pl-3 border-l-2 border-gold/40 animate-in fade-in duration-200">
                                    {sectorsData.map((sector) => (
                                        <Link
                                            key={sector.id}
                                            href={`/sectors/${sector.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-1 text-[13px] text-navy/80 hover:text-blue-accent"
                                        >
                                            <span className="font-mono text-[10px] text-gold mr-1.5">{sector.num}</span>
                                            {sector.title}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/#ecosystem"
                            onClick={() => setMobileMenuOpen(false)}
                            className="border-b border-navy/10 pb-2.5 font-medium text-navy/75 hover:text-navy"
                        >
                            Delivery Ecosystem
                        </Link>

                        <Link
                            href="/#network"
                            onClick={() => setMobileMenuOpen(false)}
                            className="border-b border-navy/10 pb-2.5 font-medium text-navy/75 hover:text-navy"
                        >
                            Our Network
                        </Link>

                        <div className="pt-2">
                            <Link
                                href="/#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex w-full items-center justify-center bg-gold-light py-3 text-center text-sm font-semibold text-navy hover:brightness-105"
                            >
                                Start a conversation &rarr;
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
