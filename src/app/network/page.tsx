import type { Metadata } from "next";
import Hero from "@/components/Hero";
import NetworkBreakdown from "@/components/network/NetworkBreakdown";
import NetworkCoverage from "@/components/network/NetworkCoverage";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Network | FSM Consulting Limited",
  description:
    "FSM Consulting Limited's regional delivery network — headquarters, country partners, professional network, and cross-border delivery access.",
};

export default function NetworkPage() {
  return (
    <>
      <Hero
        title={
          <>
            A Regional Network<br />
            Built for Delivery,<br />
            Not Just Presence
          </>
        }
        subtitle="Headquartered in Abuja, with country partnerships and a multidisciplinary professional bench across Africa ready to deploy on complex assignments."
        ctaText="Explore Our Footprint"
        ctaHref="#network-breakdown"
      />
      <main id="network-breakdown">
        <NetworkBreakdown />
        <NetworkCoverage />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
