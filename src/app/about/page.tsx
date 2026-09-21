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
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "About Us | Corporate Profile",
  description:
    "Africa's development delivery, implementation acceleration, and project assurance platform helping governments and IFIs transform investments into lasting impact.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | FSM Consulting Limited",
    description:
      "Africa's development delivery, implementation acceleration, and project assurance platform helping governments and IFIs transform investments into lasting impact.",
    url: "https://fsmconsulting.org/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <Nav transparent />

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
