import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import NetworkSection from "@/components/NetworkSection";
import NetworkBreakdown from "@/components/network/NetworkBreakdown";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Our Network",
  description:
    "FSM Consulting Limited's regional delivery network — headquartered in Abuja with country partnerships and a multidisciplinary professional bench across Africa.",
  alternates: {
    canonical: "/network",
  },
  openGraph: {
    title: "Our Network | FSM Consulting Limited",
    description:
      "Headquartered in Abuja with country partnerships and a multidisciplinary professional bench across West, Central, and East Africa.",
    url: "https://fsmconsulting.org/network",
  },
};

export default function NetworkPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Our Network", url: "/network" },
        ]}
      />
      <Nav transparent />
      <main>
        <PageHeader
          className="pt-24 md:pt-32"
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
