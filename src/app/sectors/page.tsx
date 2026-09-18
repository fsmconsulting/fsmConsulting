import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SectorsHero from "@/components/sectors/SectorsHero";
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
      <Nav />
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
