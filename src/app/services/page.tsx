import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ServicesHero from "@/components/services/ServicesHero";
import PracticeClusters from "@/components/services/PracticeClusters";
import DeliveryMethodology from "@/components/services/DeliveryMethodology";
import MobilizationSupport from "@/components/services/MobilizationSupport";
import QualityAssurance from "@/components/about/QualityAssurance";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & Capabilities | 14 Practice Areas | FSM Consulting Limited",
  description:
    "Explore FSM Consulting Limited's 14 specialized practice areas across Technical Expert Mobilization, Development Effectiveness, Project Assurance, D-Ready Implementation Acceleration, MEAL, Safeguards, and Digital Transformation.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav transparent />
      <main>
        <ServicesHero />
        <PracticeClusters />
        <DeliveryMethodology />
        <MobilizationSupport />
        <QualityAssurance />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
