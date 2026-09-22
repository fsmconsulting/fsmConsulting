"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { officeLocations, partnerAccessText, contactInfo } from "@/data/siteData";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/experience", label: "Experience" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

/**
 * Global Navigation Component (Conceptzilla "Prism" Reference)
 * - Brand typography: "FSM Consulting."
 * - Desktop: Exactly 6 links: About Us · Services · Sectors · Experience · Insights · Contact
 * - Mobile: Two-line hamburger icon (=)
 * - Mobile Drawer: Full-screen modal with oversized bold links, single Abuja (HQ) pill, partner reach, contacts.
 */
export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && pathname.startsWith(href)) return true;
    return false;
  };

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

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

  const shellCls = transparent
    ? "absolute inset-x-0 top-0 z-50 bg-transparent text-white"
    : "sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md text-[#07131e] transition-all";

  const getLinkCls = (href: string) => {
    const active = isActive(href);
    if (transparent) {
      return active
        ? "font-semibold text-white underline underline-offset-4"
        : "text-white/80 hover:text-white transition-colors";
    }
    return active
      ? "font-semibold text-[#2F5FA8]"
      : "text-[#07131e]/80 hover:text-[#2F5FA8] transition-colors";
  };

  return (
    <header className={shellCls}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
        {/* Brand: Logo Mark + Text */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-[#2F5FA8]/15 p-1.5 transition-colors group-hover:bg-[#2F5FA8]/25">
            <Image
              src="/FSMLogo.png"
              alt="FSM Consulting Logo"
              width={28}
              height={28}
              className="h-auto w-auto object-contain"
              priority
            />
          </div>
          <span className="text-[20px] font-bold tracking-tight">
            FSM Consulting<span className="text-[#2F5FA8]">.</span>
          </span>
        </Link>

        {/* Desktop Navigation Links: exactly 6 Prism links */}
        <nav className="hidden items-center gap-8 lg:gap-10 text-[15px] font-medium lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getLinkCls(link.href)}>
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Two-Line Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
            transparent ? "text-white hover:bg-white/10" : "text-[#07131e] hover:bg-gray-100"
          }`}
          aria-label="Open navigation menu"
        >
          <span className="h-[2px] w-6 bg-current" />
          <span className="h-[2px] w-6 bg-current" />
        </button>
      </div>

      {/* Mobile Menu Modal */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col justify-between bg-white text-[#07131e] p-6 sm:p-8 animate-in fade-in duration-200 lg:hidden overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <span className="text-[22px] font-bold tracking-tight text-[#07131e]">
              FSM Consulting<span className="text-[#2F5FA8]">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-[#07131e] hover:bg-gray-200 transition-colors"
              aria-label="Close navigation menu"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Large Menu Items: exactly 6 Prism links */}
          <nav className="flex flex-col gap-6 py-8 text-[32px] sm:text-[36px] font-bold tracking-tight text-[#07131e]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-[#2f5fa8] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Footer of mobile menu */}
          <div className="pt-6 border-t border-gray-100 text-[13px] text-gray-500">
            <div className="mb-2 flex flex-wrap gap-2">
              {officeLocations.map((loc) => (
                <span
                  key={loc.name}
                  className="rounded-full bg-gray-100 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-[#07131e]"
                >
                  {loc.name}
                </span>
              ))}
            </div>
            <p className="text-[12px] text-[#5A6876] mb-3">{partnerAccessText}</p>
            <div className="flex flex-col gap-1 text-[13px] text-[#07131e]">
              <a href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`} className="hover:text-[#2F5FA8]">
                {contactInfo.phone}
              </a>
              <a href={`mailto:${contactInfo.email}`} className="hover:text-[#2F5FA8]">
                {contactInfo.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
