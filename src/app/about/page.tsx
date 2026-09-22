import type { Metadata } from "next";
import { InteriorHero, CtaBand } from "@/components/templates";
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
  title: "About Us | Who We Are | FSM Consulting Limited",
  description:
    "FSM Consulting Limited is a multidisciplinary development delivery, implementation acceleration and project assurance partner turning investments into measurable results and sustainable impact.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* Prism Interior Hero without stat blocks */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        title={
          <>
            Africa&rsquo;s Development Delivery<br />
            &amp; Project Assurance Partner
          </>
        }
        subtitle="Bridging the gap between ambitious strategy and ground-level execution across sovereign programs, development partnerships, and capital investments."
        ctaText="Explore Our Mandate"
        ctaHref="#mandate"
      />

      <main>
        <div id="mandate">
          <ExecutiveSummary />
        </div>
        <FounderSection variant="full" id="founder" />
        <VisionMissionValues />
        <ImpactFramework />
        <DeliveryModel />
        <Differentiators />
        <TargetClients />
        <QualityAssurance />
        <Closing />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
