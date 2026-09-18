import Hero from "@/components/Hero";
import ValueAdvantage from "@/components/ValueAdvantage";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import KeyFigures from "@/components/KeyFigures";
import PositioningPillars from "@/components/positioning/PositioningPillars";
import ImpactProcess from "@/components/ImpactProcess";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueAdvantage />
        <FunderLogoStrip />
        <KeyFigures />
        <PositioningPillars />
        <ImpactProcess />
        <FeaturedInsightsSection />
        <Closing />
      </main>
      <Footer />
    </>
  );
}