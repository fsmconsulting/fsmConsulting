import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import InsightsIndex from "@/components/insights/InsightsIndex";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Insights & Perspectives",
  description:
    "Perspectives, analysis, and practical insights on development program delivery, implementation acceleration, and institutional performance across Africa.",
  alternates: {
    canonical: "/insights",
  },
  openGraph: {
    title: "Insights & Perspectives | FSM Consulting Limited",
    description:
      "Perspectives and analysis on development program delivery, project assurance, and measurable results across Africa.",
    url: "https://fsmconsulting.org/insights",
  },
};

export default function InsightsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
        ]}
      />
      <Nav transparent />
      <main>
        <PageHeader
          className="pt-24 md:pt-32"
          eyebrow="Perspectives &amp; Analysis"
          title="Insights on Development Delivery"
          intro="Analytical perspectives, field observations, and strategic frameworks on transforming development investments into verified results."
        />
        <InsightsIndex />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
