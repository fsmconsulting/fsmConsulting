import Hero from "@/components/Hero";
import ValueAdvantage from "@/components/ValueAdvantage";
import PositioningPillars from "@/components/positioning/PositioningPillars";
import KeyFigures from "@/components/KeyFigures";
import HomeServices from "@/components/HomeServices";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import DeliveryChain from "@/components/delivery-ecosystem/DeliveryChain";
import ImpactProcess from "@/components/ImpactProcess";
import CaseStudies from "@/components/CaseStudies";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* 1. Major Photographic Editorial Hero */}
        <Hero />

        {/* 2. Development Financing Framework Strip (Infinite Marquee) */}
        <FunderLogoStrip />

        {/* 3. Open Value Advantage */}
        <ValueAdvantage />

        {/* 4. Open Editorial Positioning (Global, Regional, National, Local) */}
        <PositioningPillars />

        {/* 5. Open Ruled Platform Metrics */}
        <KeyFigures />

        {/* 6. Structured Services & Capabilities (14 Practice Lines in 4 Clusters) */}
        <HomeServices />

        {/* 7. Editorial Perspectives & Insights */}
        <FeaturedInsightsSection />

        {/* 8. Operational Delivery Chain (8-Stage Movement to Measurable Results) */}
        <DeliveryChain />

        {/* 9. FSM Impact 360™ Continuous Framework (Contained Navy Surface) */}
        <ImpactProcess />

        {/* 10. Verified Case Studies & Disclosure Protocol */}
        <CaseStudies />


        {/* 11. Closing Call-To-Action (Major Contained Surface) */}
        <Closing />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </>
  );
}