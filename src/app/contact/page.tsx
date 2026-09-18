import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
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
      <Nav />
      <main>
        <PageHeader
          eyebrow="Contact"
          title="Start a conversation"
          intro="Reach FSM Consulting Limited directly, or tell us about the assignment through the form below."
        />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
