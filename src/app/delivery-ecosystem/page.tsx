import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import Ecosystem from "@/components/Ecosystem";
import DeliveryChain from "@/components/delivery-ecosystem/DeliveryChain";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Delivery Ecosystem",
  description:
    "An operational delivery system connecting institutional requirement to verified results across four strategic layers and eight implementation stages.",
  alternates: {
    canonical: "/delivery-ecosystem",
  },
  openGraph: {
    title: "Delivery Ecosystem | FSM Consulting Limited",
    description:
      "Operational delivery system connecting global expertise, regional access, and local capability to verified results in Africa.",
    url: "https://fsmconsulting.org/delivery-ecosystem",
  },
};

export default function DeliveryEcosystemPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Delivery Ecosystem", url: "/delivery-ecosystem" },
        ]}
      />
      <Nav transparent />
      <main>
        <PageHeader
          className="pt-24 md:pt-32"
          eyebrow="Operational Architecture"
          title="The FSM Delivery Ecosystem"
          intro="Global and regional expertise becomes useful only when it connects to local delivery capability. Four interconnected layers and eight structured stages move development investments from requirement to verified results."
        />
        <Ecosystem />
        <DeliveryChain />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
