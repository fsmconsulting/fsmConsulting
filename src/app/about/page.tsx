import type { Metadata } from "next";
import Nav from "@/components/Nav";
import AboutHero from "@/components/about/AboutHero";
import ExecutiveSummary from "@/components/about/ExecutiveSummary";
import FounderSection from "@/components/FounderSection";
import VisionMissionValues from "@/components/about/VisionMissionValues";
import ImpactFramework from "@/components/about/ImpactFramework";
import DeliveryModel from "@/components/about/DeliveryModel";
import Differentiators from "@/components/about/Differentiators";
import TargetClients from "@/components/about/TargetClients";
import QualityAssurance from "@/components/about/QualityAssurance";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile | FSM Consulting Limited",
  description:
    "FSM Consulting Limited is Africa's Development Delivery, Implementation Acceleration, and Project Assurance platform, dedicated to helping governments, development partners, IFIs, and the private sector transform investments into measurable results and sustainable impact.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <AboutHero />
        <ExecutiveSummary />
        <FounderSection variant="full" id="founder" />
        <VisionMissionValues />
        <ImpactFramework />
        <DeliveryModel />
        <Differentiators />
        <TargetClients />
        <QualityAssurance />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
