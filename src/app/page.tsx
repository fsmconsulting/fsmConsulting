import Hero from "@/components/Hero";
import ValueAdvantage from "@/components/ValueAdvantage";
import HomeServices from "@/components/HomeServices";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import CaseStudies from "@/components/CaseStudies";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import Footer from "@/components/Footer";

/**
 * FSM Consulting Homepage
 * Exactly matches Conceptzilla Reference (media_1789744082327.webp & companion reference screens):
 * 1. Full-Bleed Photographic Hero with Integrated Header & Nav
 * 2. "Our value, your advantage" (4-column icon & value grid)
 * 3. "Services overview" (Two-column layout: title on left, 2x2 rounded cards on right)
 * 4. "Supporting projects financed by global development partners" (Funder logo grid + slider indicator)
 * 5. "Case studies" (Regional/Global toggle, arrows, deep blue cards with Challenge & Impact)
 * 6. "We don't just advise..." (Editorial statement, 3 insight cards, Show All Insights pill)
 * 7. Institutional Footer
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

        {/* 4. Supported Development Financing Strip with Carousel Dots */}
        <FunderLogoStrip />

        {/* 5. "Case studies" with Deep Navy Challenge & Impact Cards */}
        <CaseStudies />

        {/* 6. Insights Editorial Statement, 3 Cards & Show All Insights Pill */}
        <FeaturedInsightsSection />
      </main>

      {/* 7. Institutional Footer */}
      <Footer />
    </div>
  );
}
