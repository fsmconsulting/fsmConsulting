import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHeader from "@/components/PageHeader";
import ContactPanel from "@/components/contact/ContactPanel";
import Footer from "@/components/Footer";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Contact & Inquiries | FSM Consulting Limited",
  description:
    "Start a conversation with FSM Consulting Limited about an assignment, program, or delivery challenge. Contact us by email or phone from Abuja, Nigeria.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact & Inquiries | FSM Consulting Limited",
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
          eyebrow="Advisory Engagements & Inquiries"
          title="Contact FSM Consulting"
          intro="Reach FSM Consulting Limited directly in Abuja, or tell us about your assignment, upcoming tender, or delivery challenge."
        />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
