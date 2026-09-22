import type { Metadata } from "next";
import { contactInfo } from "@/data/siteData";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fsmconsulting.org"),
  title: {
    default: "FSM Consulting Limited | Africa's Development Delivery Partner",
    template: "%s | FSM Consulting",
  },
  description:
    "FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration, and project assurance firm dedicated to helping governments, development partners, and IFIs transform investments into measurable results and sustainable impact.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.fsmconsulting.org",
    siteName: "FSM Consulting Limited",
    title: "FSM Consulting Limited | Africa's Development Delivery Partner",
    description:
      "Global expertise, regional access, and local implementation capability to transform development investments into measurable and sustainable results.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FSM Consulting Limited | Africa's Development Delivery Partner",
    description:
      "Global expertise, regional access, and local capability delivering measurable results across Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FSM Consulting Limited",
    url: "https://www.fsmconsulting.org",
    logo: "https://www.fsmconsulting.org/FSMLogo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Abuja",
      addressRegion: "Federal Capital Territory",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contactInfo.phone,
      contactType: "customer service",
      email: contactInfo.email,
    },
    ...(contactInfo.linkedin ? { sameAs: [contactInfo.linkedin] } : {}),
  };

  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Organization JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Scroll-reveal blocks start at opacity 0 and are revealed by JS.
            Without JS that would hide real content permanently, so opt out. */}
        <noscript>
          <style>{`.reveal-up{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-white text-ink font-sans antialiased">
        {/* Skip to Content accessible navigation link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[999] focus:bg-[#2F5FA8] focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F5FA8]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
