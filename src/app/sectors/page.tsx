import type { Metadata } from "next";
import { InteriorHero, CtaBand } from "@/components/templates";
import SectorDirectory from "@/components/sectors/SectorDirectory";
import ExpertNetwork from "@/components/sectors/ExpertNetwork";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sectors | Development Verticals | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's sector depth across agriculture, infrastructure, digital economy, health, governance, climate resilience, and public finance.",
};

export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors" },
        ]}
        title={
          <>
            Deep Domain Expertise Across<br />
            Critical Development Verticals
          </>
        }
        subtitle="Translating policy and financing into field execution across agriculture, infrastructure, digital economy, climate, governance, and health."
        ctaText="Explore Sector Directory"
        ctaHref="#sector-directory"
      />

      <main>
        <div id="sector-directory">
          <SectorDirectory />
        </div>
        <ExpertNetwork />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
