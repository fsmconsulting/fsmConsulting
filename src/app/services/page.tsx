import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ServicesHero from "@/components/services/ServicesHero";
import PracticeClusters from "@/components/services/PracticeClusters";
import DeliveryMethodology from "@/components/services/DeliveryMethodology";
import MobilizationSupport from "@/components/services/MobilizationSupport";
import QualityAssurance from "@/components/about/QualityAssurance";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Services & Capabilities | 14 Practice Areas",
  description:
    "14 specialized practice areas: Expert Mobilization, Development Effectiveness, Project Assurance, MEAL, Safeguards, Digital Transformation, and Implementation Acceleration.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Capabilities | 14 Practice Areas | FSM Consulting Limited",
    description:
      "14 specialized practice lines across technical expert mobilization, project assurance, MEAL, governance, safeguards, and digital transformation.",
    url: "https://fsmconsulting.org/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services & Capabilities", url: "/services" },
        ]}
      />
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
