import type { Metadata } from "next";
import SectorsHero from "@/components/sectors/SectorsHero";
import SectorDirectory from "@/components/sectors/SectorDirectory";
import ExpertNetwork from "@/components/sectors/ExpertNetwork";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Sectors | 15 Development Sector Verticals",
  description:
    "FSM Consulting expertise across 15 development sectors: governance, agriculture, health, education, infrastructure, digital economy, climate, financial inclusion, and more.",
  alternates: {
    canonical: "/sectors",
  },
  openGraph: {
    title: "Sectors | 15 Development Sector Verticals | FSM Consulting Limited",
    description:
      "Deep sector expertise across 15 development verticals — from governance and agriculture to digital economy and climate change across Africa.",
    url: "https://fsmconsulting.org/sectors",
  },
};

export default function SectorsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Sectors", url: "/sectors" },
        ]}
      />
      <main>
        <SectorsHero />
        <SectorDirectory />
        <ExpertNetwork />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
