"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Global Navigation Component (Used across all interior pages & optionally homepage)
 * Matches Conceptzilla "Prism" Reference (c8e3e514595e74e2efef35761014d284.webp & 8bd1b8809a228bcdb45bd5d716fe3d4c.webp):
 * - Brand mark: "FSM Consulting."
 * - Desktop: Transparent or clean white background, spacious inline links, brand blue (#2f5fa8) hover states
 * - Mobile: Two-line hamburger icon (=)
 * - Mobile Drawer: Full-screen white modal with large bold typography, circular close button, regional office footprint pills, and contact info.
 */
export default function Nav({ transparent = false }: { transparent?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true;
    if (href === "/about" && pathname === "/about") return true;
    if (href === "/services" && pathname.startsWith("/services")) return true;
    if (href === "/insights" && pathname.startsWith("/insights")) return true;
    if (href === "/sectors" && pathname.startsWith("/sectors")) return true;
    if (href === "/network" && pathname === "/network") return true;
    if (href === "/contact" && pathname === "/contact") return true;
    return false;
  };

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
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

  const shellCls = transparent
    ? "absolute inset-x-0 top-0 z-50 bg-transparent text-white"
    : "sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md text-[#07131e] transition-all";

  const brandTextCls = transparent ? "text-white" : "text-[#07131e]";

  const getLinkCls = (href: string) => {
    const active = isActive(href);
    if (transparent) {
      return active
        ? "font-semibold text-white underline underline-offset-4"
        : "text-white/85 hover:text-white hover:underline underline-offset-4 transition-colors";
    }
    return active
      ? "font-semibold text-[#2f5fa8] underline underline-offset-4"
      : "text-gray-600 hover:text-[#2f5fa8] transition-colors";
  };

  return (
    <header className={shellCls}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10 lg:px-14">
        {/* Brand Mark matching reference "Prism." */}
        <Link href="/" className="group flex items-center gap-3">
          <span className={`text-[23px] md:text-[25px] font-bold tracking-tight ${brandTextCls}`}>
            FSM Consulting.
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-8 lg:gap-10 text-[15px] font-medium lg:flex">
          <Link href="/about" className={getLinkCls("/about")}>
            About Us
          </Link>
          <Link href="/services" className={getLinkCls("/services")}>
            Services
          </Link>
          <Link href="/insights" className={getLinkCls("/insights")}>
            Insights
          </Link>
          <Link href="/#case-studies" className={getLinkCls("/#case-studies")}>
            Case Studies
          </Link>
          <Link href="/sectors" className={getLinkCls("/sectors")}>
            Sectors
          </Link>
          <Link href="/network" className={getLinkCls("/network")}>
            Team
          </Link>
          <Link href="/contact" className={getLinkCls("/contact")}>
            Contact
          </Link>
        </nav>

        {/* Mobile Two-Line Hamburger Button matching reference */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="flex lg:hidden p-2 flex-col items-end gap-1.5 focus:outline-none cursor-pointer"
          aria-label="Open navigation menu"
        >
          <span className={`h-[2px] w-6 rounded-full ${transparent ? "bg-white" : "bg-[#07131e]"}`} />
          <span className={`h-[2px] w-4 rounded-full ${transparent ? "bg-white" : "bg-[#07131e]"}`} />
        </button>
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
            <span className="text-[22px] font-bold tracking-tight text-[#07131e]">
              FSM Consulting.
            </span>
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
            <Link href="/#case-studies" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#2f5fa8] transition-colors">
              Case Studies
            </Link>
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
    </header>
  );
}
