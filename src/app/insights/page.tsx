import type { Metadata } from "next";
import Hero from "@/components/Hero";
import InsightsIndex from "@/components/insights/InsightsIndex";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights | FSM Consulting Limited",
  description:
    "Perspectives on development effectiveness, project delivery, and evidence-based verification from FSM Consulting Limited.",
};

export default function InsightsPage() {
  return (
    <>
      <Hero
        title={
          <>
            Perspectives on<br />
            Development Delivery<br />
            &amp; Measurable Impact
          </>
        }
        subtitle="Our thinking on what makes development investments translate into measurable, sustainable results across Africa's public and private sectors."
        ctaText="Explore Insights"
        ctaHref="#insights-index"
      />
      <main id="insights-index">
        <InsightsIndex />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
