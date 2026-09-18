import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import NetworkSection from "@/components/NetworkSection";
import NetworkBreakdown from "@/components/network/NetworkBreakdown";
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
      <Nav transparent />
      <main>
        <PageHeader
          eyebrow="Our Network"
          title="A regional network built for delivery, not just presence."
          intro="Headquartered in Abuja, with country partnerships and a multidisciplinary professional bench across Africa."
        />
        <NetworkSection />
        <NetworkBreakdown />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
