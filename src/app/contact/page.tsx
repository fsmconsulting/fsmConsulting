import type { Metadata } from "next";
import { InteriorHero } from "@/components/templates";
import ContactPanel from "@/components/contact/ContactPanel";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact & Inquiries | FSM Consulting Limited",
  description:
    "Get in touch with FSM Consulting Limited to discuss advisory engagements, sovereign project assurance, consortium partnerships, or expert mobilization.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        title="Contact FSM Consulting"
        subtitle="Reach FSM Consulting Limited directly in Abuja, or tell us about your assignment, upcoming tender, or delivery challenge."
        ctaText="Send Enquiry"
        ctaHref="#contact-panel"
      />

      <main id="contact-panel">
        <ContactPanel />
      </main>

      <Footer />
    </div>
  );
}
