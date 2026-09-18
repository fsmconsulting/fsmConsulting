import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
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
      <main>
        <PageHeader
          eyebrow="Insights"
          title="Perspectives on development delivery."
          intro="Our thinking on what makes development investments translate into measurable, sustainable results."
        />
        <InsightsIndex />
        <Closing />
      </main>
      <Footer />
    </>
  );
}
