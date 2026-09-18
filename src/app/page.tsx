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

/**
 * FSM Consulting Homepage
 * Exactly matches Conceptzilla Reference (media_1789744082327.webp):
 * 1. Rounded Photographic Hero with Integrated Nav & Schedule a Consultation CTA
 * 2. "Our value, your advantage" (4-column icon & value grid)
 * 3. "Services overview" (Two-column layout: title on left, 2x2 rounded cards on right)
 * 4. "Supporting projects financed by global development partners" (Funder logo grid + slider indicator)
 * 5. "Case studies" (Regional/Global toggle, arrows, deep blue cards with Challenge & Impact)
 * 6. "We don't just advise clients..." (Editorial statement, 3 insight cards, Show All Insights pill)
 * 7. Institutional Footer
 */
export default function Home() {
  return (
    <>
      <main>
        {/* 1. Major Photographic Editorial Hero */}
      <main className="bg-[#f4f5f7]">
        {/* 1. Hero: Rounded Dark Photographic Container */}
        <Hero />

        {/* 2. Open Value Advantage */}
        {/* 2. "Our value, your advantage" 4-column section */}
        <ValueAdvantage />

        {/* 3. Open Editorial Positioning (Global, Regional, National, Local) */}
        <PositioningPillars />

        {/* 4. Open Ruled Platform Metrics */}
        <KeyFigures />

        {/* 5. Structured Services & Capabilities (14 Practice Lines in 4 Clusters) */}
        {/* 3. "Services overview" 2x2 card grid */}
        <HomeServices />

        {/* 6. Understated Development Financing Framework Strip */}
        {/* 4. Supported Development Financing Strip with Carousel Dots */}
        <FunderLogoStrip />

        {/* 7. Operational Delivery Chain (8-Stage Movement to Measurable Results) */}
        <DeliveryChain />

        {/* 8. FSM Impact 360™ Continuous Framework (Contained Navy Surface) */}
        <ImpactProcess />

        {/* 9. Verified Case Studies & Disclosure Protocol */}
        {/* 5. "Case studies" with Deep Navy Challenge & Impact Cards */}
        <CaseStudies />

        {/* 10. Editorial Perspectives & Insights */}
        {/* 6. Insights Editorial Statement, 3 Cards & Show All Insights Pill */}
        <FeaturedInsightsSection />

        {/* 11. Regional Delivery Footprint & 36 States + FCT Reach */}
        <NetworkSection />

        {/* 12. Closing Call-To-Action (Major Contained Surface) */}
        <Closing />
      </main>

      {/* Institutional Footer */}
      {/* 7. Institutional Footer */}
      <Footer />
    </>
  );
}