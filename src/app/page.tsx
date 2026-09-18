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
import NetworkSection from "@/components/NetworkSection";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        {/* 1. Major Photographic Editorial Hero */}
        <Hero />

        {/* 2. Open Value Advantage */}
        <ValueAdvantage />

        {/* 3. Open Editorial Positioning (Global, Regional, National, Local) */}
        <PositioningPillars />

        {/* 4. Open Ruled Platform Metrics */}
        <KeyFigures />

        {/* 5. Structured Services & Capabilities (14 Practice Lines in 4 Clusters) */}
        <HomeServices />

        {/* 6. Understated Development Financing Framework Strip */}
        <FunderLogoStrip />

        {/* 7. Operational Delivery Chain (8-Stage Movement to Measurable Results) */}
        <DeliveryChain />

        {/* 8. FSM Impact 360™ Continuous Framework (Contained Navy Surface) */}
        <ImpactProcess />

        {/* 9. Verified Case Studies & Disclosure Protocol */}
        <CaseStudies />

        {/* 10. Editorial Perspectives & Insights */}
        <FeaturedInsightsSection />

        {/* 11. Regional Delivery Footprint & 36 States + FCT Reach */}
        <NetworkSection />

        {/* 12. Closing Call-To-Action (Major Contained Surface) */}
        <Closing />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </>
  );
}