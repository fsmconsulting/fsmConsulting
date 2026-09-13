import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans} from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

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
    className={`${fraunces.variable} ${plexSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-ink font-sans antialiased">{children}</body>
    </html>
  )
}

