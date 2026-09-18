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

export default function Nav({ transparent = false }: { transparent?: boolean } = {}) {
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

    const renderSectorDropdownItem = (s: (typeof sectorsData)[number]) => (
        <li key={s.id}>
            <Link
                href={`/sectors/${s.id}`}
                onClick={() => setSectorsDropdownOpen(false)}
                className="group flex items-center justify-between rounded-[var(--radius-card-sm)] border border-white/10 bg-navy-2/60 px-3.5 py-2.5 transition-colors duration-200 hover:border-white/30 hover:bg-navy-2"
                className="group flex items-center justify-between rounded-[var(--radius-card-sm)] border border-white/10 bg-navy-2/60 px-3.5 py-2.5 transition-colors duration-200 hover:border-gold/40 hover:bg-navy-2"
            >
                <span className="text-[12.5px] font-medium text-gray-200 transition-colors duration-200 group-hover:text-white">
                <span className="text-[12.5px] font-medium text-gray-200 transition-colors duration-200 group-hover:text-gold-light">
                    {s.title}
                </span>
                <span className="text-[11px] text-white/50 transition-all duration-200 group-hover:text-white group-hover:translate-x-1">
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

    const shell = transparent
        ? "absolute inset-x-0 top-0 z-50 text-white bg-transparent border-none"
        ? "absolute inset-x-0 top-0 z-50 text-white"
        : "sticky top-0 z-50 border-b border-navy/10 bg-white text-navy transition-all";

    const linkBase = transparent
        ? "font-medium text-white/80 hover:text-white after:bg-white/70"
        : "font-medium text-navy/75 hover:text-navy after:bg-navy/40";
        ? "font-normal text-white/85 hover:text-white"
        : "font-medium text-navy/75 hover:text-navy";
    const linkActive = transparent
        ? "font-bold text-white after:bg-white"
        : "font-bold text-navy after:bg-navy";
    const brandColor = transparent ? "text-white" : "text-navy";
        ? "font-medium text-white"
        : "font-semibold text-navy";

    return (
        <header className="sticky top-0 z-50 border-b border-navy/10 bg-white text-navy transition-all">
            {/* Top Utility Bar */}
            <div className="border-b border-navy/10 bg-[#001326] text-[12px] text-gray-400">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-10">
                    <div className="flex items-center gap-4">
                        <span className="font-medium text-white/90">Global Reach &middot; Africa Delivery</span>
                        <span className="hidden text-white/20 md:inline">|</span>
                        <span className="hidden md:inline text-gray-300">Abuja &middot; Regional Network</span>
        <header className={shell}>
            {/* Top Utility Bar (only on regular pages, not transparent hero) */}
            {!transparent && (
                <div className="border-b border-navy/10 bg-[#001326] text-[12px] text-gray-400">
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-1.5 md:px-10">
                        <div className="flex items-center gap-4">
                            <span className="font-medium text-white/90">Global Reach &middot; Africa Delivery</span>
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
            )}

            {/* Main Header */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-6 py-5 md:px-10">
                <div className="flex items-center gap-6">
                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex items-center gap-2 text-[14px] font-medium text-navy transition-colors hover:text-blue-accent lg:hidden"
                        className={`flex items-center gap-2 text-[14px] font-medium transition-colors lg:hidden ${
                            transparent ? "text-white hover:text-white/70" : "text-navy hover:text-blue-accent"
                        }`}
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
                        <div className="flex h-14 w-14 items-center justify-center p-1">
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
                            <span className={`font-serif text-[20px] font-semibold tracking-tight ${brandColor}`}>
                                FSM Consulting
                            </span>
                            <span className="font-serif text-[20px] font-semibold tracking-tight text-navy pl-[7.5ch]">
                            <span className={`font-serif text-[20px] font-semibold tracking-tight ${brandColor} pl-[7.5ch]`}>
                                Limited
                            </span>
                        </div>
                    {/* Logo / Brand — wordmark only, matching the reference's plain typographic mark */}
                    <Link href="/" className="group flex items-center gap-2">
                        <span
                            className={`font-serif text-[21px] italic tracking-tight ${
                                transparent ? "text-white" : "text-navy"
                            }`}
                        >
                            FSM Consulting.
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation Links */}
                <nav className="hidden items-center gap-8 text-[14px] lg:flex">
                <nav className="hidden items-center gap-8 text-[13.5px] lg:flex">
                    <Link
                        href="/"
                        className={`relative py-1.5 transition-colors ${
                        className={`relative py-1.5 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all ${
                            isActive("/")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-navy"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy/40 after:transition-all hover:after:w-full"
                                ? `${linkActive} after:w-full`
                                : `${linkBase} after:w-0 hover:after:w-full`
                        }`}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className={`relative py-1.5 transition-colors ${
                        className={`relative py-1.5 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all ${
                            isActive("/about")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-navy"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy/40 after:transition-all hover:after:w-full"
                                ? `${linkActive} after:w-full`
                                : `${linkBase} after:w-0 hover:after:w-full`
                        }`}
                        className={`transition-colors ${isActive("/about") ? linkActive : linkBase}`}
                    >
                        About
                    </Link>

                    <Link
                        href="/services"
                        className={`relative py-1.5 transition-colors ${
                        className={`relative py-1.5 transition-colors after:absolute after:bottom-0 after:left-0 after:h-[2px] after:transition-all ${
                            isActive("/services")
                                ? "font-bold text-navy after:absolute after:bottom-0 after:left-0 after:h-[2.5px] after:w-full after:bg-navy"
                                : "font-medium text-navy/75 hover:text-navy after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy/40 after:transition-all hover:after:w-full"
                                ? `${linkActive} after:w-full`
                                : `${linkBase} after:w-0 hover:after:w-full`
                        }`}
                        className={`transition-colors ${isActive("/services") ? linkActive : linkBase}`}
                    >
                        Services &amp; Capabilities
                        Services
                    </Link>

                    {/* Sectors Interactive Dropdown Trigger */}
                    <div
                        className="group/sectors relative py-1.5"
                        className="group/sectors relative"
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
                                    ? linkActive
                                    : linkBase
                            className={`flex cursor-pointer items-center gap-1.5 transition-colors focus:outline-none ${
                                isSectorsActive ? linkActive : linkBase
                            }`}
                            aria-label="Toggle Sectors Menu"
                            aria-expanded={sectorsDropdownOpen}
                        >
                            <span>Sectors</span>
                            <svg
                                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                                    sectorsDropdownOpen ? "rotate-180 text-navy" : "text-navy/60"
                                }`}
                                    sectorsDropdownOpen ? "rotate-180" : ""
                                } ${transparent ? "text-white/80" : "text-navy/60"}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {/* Navy underline - expands on hover or when dropdown is open */}
                        <span
                            className={`absolute bottom-0 left-0 h-[2px] bg-navy/40 transition-all duration-200 ${
                                isSectorsActive
                                    ? "w-full bg-navy h-[2.5px]"
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
                                <div className="rounded-[var(--radius-card)] border border-navy/10 bg-navy p-6 shadow-xl">
                                <div className="bento-card border border-navy/10 bg-navy p-6">
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
                        className="font-medium text-navy/75 hover:text-navy relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all hover:after:w-full"
                    >
                        Delivery Ecosystem
                    </Link>

                    {/* Our Network */}
                    <Link
                        href="/#network"
                        className="font-medium text-navy/75 hover:text-navy relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-navy after:transition-all hover:after:w-full"
                        className={`transition-colors ${linkBase}`}
                    >
                        Our Network
                    </Link>

                    <Link href="/#contact" className={`transition-colors ${linkBase}`}>
                        Contact
                    </Link>
                </nav>

                {/* Right CTA and Search */}
                {/* Search (utility, kept out of the main link row) */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setSearchOpen(!searchOpen)}
                        className="hidden p-2 text-navy/60 hover:text-navy md:block"
                        className={`hidden p-2 md:block transition-colors ${
                            transparent ? "text-white/80 hover:text-white" : "text-navy/60 hover:text-navy"
                        className={`hidden p-2 md:block ${
                            transparent ? "text-white/70 hover:text-white" : "text-navy/60 hover:text-navy"
                        }`}
                        aria-label="Search"
                        title="Search"
                    >
                        <svg className="h-4.5 w-4.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>

                    <Link
                        href="/#contact"
                        className="group inline-flex items-center gap-2 bg-navy px-5 py-2.5 text-[13px] font-medium uppercase tracking-[0.06em] text-white transition-colors duration-200 hover:bg-navy-2"
                        className={`pill-btn group hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-[13px] font-medium transition-colors duration-200 ${
                            transparent
                                ? "bg-white text-navy hover:bg-white/90 shadow-sm"
                                : "bg-navy text-white hover:bg-navy-2"
                        }`}
                    >
                        <span className="inline-block">Discuss an assignment</span>
                        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                        <span className="pill-btn-arrow">&rarr;</span>
                    </Link>
                </div>
            </div>

            {/* Quick Search Overlay if toggled */}
            {searchOpen && (
                <div className="border-t border-navy/10 bg-gray-50 px-6 py-4 md:px-10">
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
                                            className="border border-gray-200 bg-white p-2.5 transition hover:border-navy"
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
            {/* Mobile full-screen menu — editorial stacked links, matching the reference's mobile pattern */}
            {mobileMenuOpen && (
                <div className="border-t border-navy/10 bg-white px-6 py-6 lg:hidden max-h-[85vh] overflow-y-auto">
                    {/* Mobile Direct Contacts */}
                    <div className="mb-4 flex items-center justify-between border-b border-navy/10 pb-3 text-[12px] text-navy/70">
                        <a href="mailto:info@fsmconsulting.com" className="font-medium hover:text-navy">
                            info@fsmconsulting.com
                        </a>
                        <span>&middot;</span>
                        <a href="tel:+2349040009512" className="font-medium hover:text-navy">
                            +234 904 000 9512
                        </a>
                    </div>

                    <nav className="flex flex-col gap-3 text-[15px] font-medium text-navy">
                        <Link
                            href="/"
                <div className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-white px-6 pb-8 pt-6 text-navy lg:hidden">
                    <div className="flex items-center justify-between">
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/") ? "border-navy font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                            className="flex items-center gap-2 text-navy"
                            aria-label="Close navigation menu"
                        >
                            Home
                        </Link>
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <span className="font-serif text-[19px] italic tracking-tight text-navy">
                            FSM Consulting.
                        </span>
                    </div>

                        <Link
                            href="/about"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/about") ? "border-navy font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                        >
                    <nav className="mt-12 flex flex-col gap-1">
                        <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="font-serif text-[32px] leading-[1.35] text-navy">
                            About
                        </Link>

                        <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className={`border-b pb-2.5 transition-colors ${
                                isActive("/services") ? "border-navy font-bold text-navy" : "border-navy/10 font-medium text-navy/75 hover:text-navy"
                            }`}
                        <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="font-serif text-[32px] leading-[1.35] text-navy">
                            Services
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                            className="flex items-center gap-3 text-left font-serif text-[32px] leading-[1.35] text-navy"
                        >
                            Services &amp; Capabilities
                        </Link>

                        {/* Mobile Accordion for Sectors (collapsed by default) */}
                        <div className="border-b border-navy/10 pb-2.5">
                            <button
                                type="button"
                                onClick={() => setMobileSectorsOpen(!mobileSectorsOpen)}
                                className="flex w-full items-center justify-between py-1 text-left font-medium text-navy"
                            Sectors
                            <svg
                                className={`h-5 w-5 text-navy/50 transition-transform duration-200 ${mobileSectorsOpen ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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
                                <div className="mt-2 space-y-1.5 pl-3 border-l-2 border-navy/20 animate-in fade-in duration-200">
                                    {sectorsData.map((sector) => (
                                        <Link
                                            key={sector.id}
                                            href={`/sectors/${sector.id}`}
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block py-1 text-[13px] text-navy/80 hover:text-blue-accent"
                                        >
                                            <span className="font-mono text-[10px] text-blue-accent mr-1.5">{sector.num}</span>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {mobileSectorsOpen && (
                            <div className="mb-2 mt-1 grid grid-cols-2 gap-x-4 gap-y-2 border-l-2 border-navy/10 pl-4">
                                {sectorsData.map((sector) => (
                                    <Link
                                        key={sector.id}
                                        href={`/sectors/${sector.id}`}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="text-[13.5px] text-navy/70"
                                    >
                                        {sector.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <Link href="/#network" onClick={() => setMobileMenuOpen(false)} className="font-serif text-[32px] leading-[1.35] text-navy">
                            Our Network
                        </Link>
                        <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="font-serif text-[32px] leading-[1.35] text-navy">
                            Contact
                        </Link>
                    </nav>

                        <div className="pt-2">
                            <Link
                                href="/#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="pill-btn flex w-full items-center justify-center bg-navy py-3 text-center text-[13px] font-medium text-white hover:bg-navy-2"
                    {/* Quick-access sector chips — same purpose as the reference's location chips, real content */}
                    <div className="mt-10 flex flex-wrap gap-2">
                        {["Governance", "Agriculture", "Health Systems", "Energy"].map((label) => (
                            <span
                                key={label}
                                className="rounded-full border border-navy/15 px-4 py-1.5 text-[12.5px] font-medium text-navy/70"
                            >
                                <span>Discuss an assignment</span>
                                <span className="pill-btn-arrow ml-2">&rarr;</span>
                            </Link>
                        </div>
                    </nav>
                                {label}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto space-y-1 border-t border-navy/10 pt-6 text-[14px]">
                        <a href="tel:+2349040009512" className="block font-medium text-navy">
                            +234 904 000 9512
                        </a>
                        <a href="mailto:info@fsmconsulting.com" className="block text-navy/70">
                            info@fsmconsulting.com
                        </a>
                        <p className="pt-2 text-navy/50">Abuja, Federal Capital Territory, Nigeria</p>
                    </div>
                </div>
            )}
        </header>
    );
}
