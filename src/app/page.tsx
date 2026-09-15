import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import FunderLogoStrip from "@/components/FunderLogoStrip";
import DeliveryModelSection from "@/components/DeliveryModelSection";
import FeaturedInsightsSection from "@/components/FeaturedInsightsSection";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FunderLogoStrip />
        <DeliveryModelSection />
        <FeaturedInsightsSection />
        <Closing />
      </main>
      <Footer />
    </>
  );
}