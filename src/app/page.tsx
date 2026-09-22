import Hero from "@/components/Hero";
import ValueAdvantage from "@/components/ValueAdvantage";
import HomeServices from "@/components/HomeServices";
import ExpertiseRelyOn from "@/components/ExpertiseRelyOn";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import CaseStudies from "@/components/CaseStudies";
import ImpactNumbers from "@/components/ImpactNumbers";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import Footer from "@/components/Footer";

/**
 * FSM Consulting Homepage
 * Exactly matches Conceptzilla Reference & Phase 1 Section Sequence:
 * 1. Full-Bleed Photographic Hero with Integrated Header & Nav
 * 2. "Our value, your advantage" (4-column icon & value grid)
 * 3. "Services overview" (Two-column layout: title on left, 2x2 rounded cards on right)
 * 4. "Expertise you can rely on" (Leadership narrative, portrait, and board chips)
 * 5. Supported Development Financing Strip with Carousel Dots
 * 6. "Where we deliver" (Assignment Types & Delivery Capability)
 * 7. "Our impact in numbers" (Stacked list with thin dividers & icons)
 * 8. Insights Editorial Statement, 3 Cards & Show All Insights Pill
 * 9. Institutional Footer
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f5f7] text-[#07131e] antialiased selection:bg-[#0c2340] selection:text-white">
      <main>
        {/* 1. Full-bleed Photographic Hero with Integrated Header & Nav */}
        <Hero />

        {/* 2. "Our value, your advantage" 4-column section */}
        <ValueAdvantage />

        {/* 3. "Services overview" 2x2 card grid */}
        <HomeServices />

        {/* 4. "Expertise you can rely on" Leadership & Board Bench */}
        <ExpertiseRelyOn />

        {/* 5. Supported Development Financing Strip with Carousel Dots */}
        <FunderLogoStrip />

        {/* 6. "Where we deliver" with Deep Navy Delivery Cards */}
        <CaseStudies />

        {/* 7. "Our impact in numbers" Stacked Metric List */}
        <ImpactNumbers />

        {/* 8. Insights Editorial Statement, 3 Cards & Show All Insights Pill */}
        <FeaturedInsightsSection />
      </main>

      {/* 9. Institutional Footer */}
      <Footer />
    </div>
  );
}
