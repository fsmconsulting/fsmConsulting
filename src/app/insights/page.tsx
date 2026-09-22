import type { Metadata } from "next";
import { InteriorHero, CtaBand } from "@/components/templates";
import InsightsIndex from "@/components/insights/InsightsIndex";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Insights & Perspectives | FSM Consulting Limited",
  description:
    "Practical perspectives, field notes, and analytical viewpoints on development effectiveness, independent verification, and project acceleration across Africa.",
};

export default function InsightsPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights" },
        ]}
        title={
          <>
            Perspectives on Development<br />
            Delivery &amp; Measurable Impact
          </>
        }
        subtitle="Practical knowledge, field diagnostics, and analytical frameworks on what makes development investments translate into measurable, sustainable outcomes."
        ctaText="Explore Publications"
        ctaHref="#insights-index"
      />

      <main id="insights-index">
        <InsightsIndex />
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
