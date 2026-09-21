import type { Metadata } from "next";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/400-italic.css";
import "@fontsource/source-serif-4/500.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/source-serif-4/700.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import OrganizationJsonLd from "@/components/seo/OrganizationJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://fsmconsulting.org"),
  title: {
    default: "FSM Consulting Limited | Africa's Development Delivery Partner",
    template: "%s | FSM Consulting Limited",
  },
  description:
    "FSM Consulting Limited connects people, partnerships, and technical capability governments and development partners need to move projects from concept to lasting impact.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fsmconsulting.org",
    siteName: "FSM Consulting Limited",
    title: "FSM Consulting Limited | Africa's Development Delivery Partner",
    description:
      "Transforming investments into measurable results across Africa through implementation acceleration and project assurance.",
    images: [
      {
        url: "/FSMLogo.png",
        width: 1200,
        height: 630,
        alt: "FSM Consulting Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FSM Consulting Limited | Africa's Development Delivery Partner",
    description:
      "Transforming investments into measurable results across Africa through implementation acceleration and project assurance.",
    images: ["/FSMLogo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/FSMLogo.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        {/* Scroll-reveal blocks start at opacity 0 and are revealed by JS.
            Without JS that would hide real content permanently, so opt out. */}
        <noscript>
          <style>{`.reveal-up{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-white text-ink font-sans antialiased">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}


