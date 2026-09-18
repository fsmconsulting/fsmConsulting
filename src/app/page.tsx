import Hero from "@/components/Hero";
import ValueAdvantage from "@/components/ValueAdvantage";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import DeliveryModelSection from "@/components/DeliveryModelSection";
import CaseStudies from "@/components/CaseStudies";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import BentoStats from "@/components/BentoStats";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ValueAdvantage />
        <FunderLogoStrip />
        <DeliveryModelSection />
        <CaseStudies />
        <FeaturedInsightsSection />
        <BentoStats />
        <Closing />
      </main>
      <Footer />
    </>
  );
}