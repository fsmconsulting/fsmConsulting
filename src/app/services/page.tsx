import type { Metadata } from "next";
import Hero from "@/components/Hero";
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
      <Hero
        title={
          <>
            Integrated Technical,<br />
            Fiduciary &amp; Delivery<br />
            Capabilities
          </>
        }
        subtitle="We provide governments, development partners, international financial institutions, and the private sector with an end-to-end suite of 14 integrated practice areas across four delivery clusters."
        ctaText="Explore Practice Areas"
        ctaHref="#practice-clusters"
        stats={[
          { value: "14 Practices", label: "Four specialized capability clusters" },
          { value: "Independent", label: "Rigorous verification & quality assurance" },
          { value: "Pan-African", label: "Rapid expert deployment across regions" },
          { value: "Outcome-Led", label: "Focused on tangible public value" },
        ]}
      />
      <main>
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
