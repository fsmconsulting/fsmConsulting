import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
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
      <Nav />
      <main>
        <PageHeader
          eyebrow="Delivery Ecosystem"
          title="An operational system, not a generic process diagram."
          intro="Global and regional expertise becomes useful only when it connects to local delivery capability. This is how FSM structures that connection."
        />
        <DeliveryChain />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
