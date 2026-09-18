import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "FSM Consulting Limited | Africa's Development Delivery Partner",
  description: "FSM Consulting Limited connects people, partnerships, and technical capability governments and development partners need to move projects from concept to lasting impact.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
    lang="en"
    className="h-full antialiased">
      <head>
        {/* Scroll-reveal blocks start at opacity 0 and are revealed by JS.
            Without JS that would hide real content permanently, so opt out. */}
        <noscript>
          <style>{`.reveal-up{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-white text-ink font-sans antialiased">{children}</body>
    </html>
  )
}

