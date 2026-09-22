import type { Metadata } from "next";
import Hero from "@/components/Hero";
import SectorDirectory from "@/components/sectors/SectorDirectory";
import ExpertNetwork from "@/components/sectors/ExpertNetwork";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sectors | 15 Sector Verticals | FSM Consulting Limited",
  description:
    "FSM Consulting Limited's sector expertise spans governance, agriculture, health, education, infrastructure, digital economy, climate, and 8 further development verticals.",
};

export default function SectorsPage() {
  return (
    <>
      <Hero
        title={
          <>
            Deep Domain Expertise<br />
            Across Critical<br />
            Development Sectors
          </>
        }
        subtitle="Transforming policy into action across agriculture, energy, health, infrastructure, climate, governance, and jobs with profound technical knowledge and field-tested frameworks."
        ctaText="Explore 15 Sectors"
        ctaHref="#sector-directory"
        stats={[
          { value: "15 Verticals", label: "Economic & social infrastructure sectors" },
          { value: "Full Cycle", label: "Readiness through verification & tracking" },
          { value: "Pan-African", label: "Sovereign & cross-border operations" },
          { value: "Fiduciary Trust", label: "Meeting international financing benchmarks" },
        ]}
      />
      <main>
        <SectorDirectory />
        <ExpertNetwork />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
