import type { Metadata } from "next";
import Hero from "@/components/Hero";
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
      <Hero
        title={
          <>
            Africa&rsquo;s Development Delivery<br />
            &amp; Project Assurance<br />
            Platform
          </>
        }
        subtitle="Bridging the gap between ambitious strategy and ground-level execution. We partner with governments, development partners, IFIs, and the private sector to translate investments into measurable results and sustainable impact."
        ctaText="Explore Our Mandate"
        ctaHref="#mandate"
        stats={[
          { value: "36 States + FCT", label: "Complete nationwide operational reach across Nigeria" },
          { value: "Pan-African", label: "West, Central & East Africa regional delivery hubs" },
          { value: "Multidisciplinary", label: "Economists, engineers, MEAL, digital & safeguard specialists" },
          { value: "Outcome-Driven", label: "Measuring success through verifiable socio-economic impact" },
        ]}
      />
      <main>
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
