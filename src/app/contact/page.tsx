import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ContactPanel from "@/components/contact/ContactPanel";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with FSM Consulting Limited about an assignment, program, or delivery challenge. Contact us by email or phone from Abuja, Nigeria.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | FSM Consulting Limited",
    description:
      "Start a conversation with FSM Consulting Limited about an assignment, program, or delivery challenge.",
    url: "https://fsmconsulting.org/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
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
