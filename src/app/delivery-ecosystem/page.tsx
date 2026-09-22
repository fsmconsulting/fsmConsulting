import type { Metadata } from "next";
import Hero from "@/components/Hero";
import DeliveryChain from "@/components/delivery-ecosystem/DeliveryChain";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Delivery Ecosystem | FSM Consulting Limited",
  description:
    "How FSM Consulting Limited moves an assignment from client requirement to measurable results — technical leadership, expertise, local access, mobilization, and quality assurance.",
};

export default function DeliveryEcosystemPage() {
  return (
    <>
      <Hero
        title={
          <>
            An Operational System<br />
            Built for Real<br />
            Execution
          </>
        }
        subtitle="Global and regional expertise becomes useful only when it connects to local delivery capability. This is how FSM structures that connection."
        ctaText="Explore the Chain"
        ctaHref="#delivery-chain"
      />
      <main id="delivery-chain">
        <DeliveryChain />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
