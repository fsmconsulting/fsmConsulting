import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ContactPanel from "@/components/contact/ContactPanel";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact | FSM Consulting Limited",
  description:
    "Start a conversation with FSM Consulting Limited about an assignment, program, or delivery challenge.",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title={
          <>
            Start a Conversation<br />
            with Our Advisory<br />
            &amp; Delivery Team
          </>
        }
        subtitle="Reach FSM Consulting Limited directly, or tell us about your assignment, program, or delivery challenge through our direct inquiry channel."
        ctaText="Direct Inquiries"
        ctaHref="#contact-panel"
      />
      <main id="contact-panel">
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
