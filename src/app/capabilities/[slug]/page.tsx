import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import {
  capabilities,
  getCapabilityBySlug,
} from "@/data/capabilitiesData";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";

/* ── Static params ── */
export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) return { title: "Capability Not Found | FSM Consulting Limited" };
  return {
    title: `${cap.title} | Delivery Capability`,
    description: cap.summary,
    alternates: {
      canonical: `/capabilities/${cap.slug}`,
    },
    openGraph: {
      title: `${cap.title} | Delivery Capability | FSM Consulting Limited`,
      description: cap.summary,
      url: `https://fsmconsulting.org/capabilities/${cap.slug}`,
    },
  };
}

/* ── Page ── */
export default async function CapabilityDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cap = getCapabilityBySlug(slug);
  if (!cap) notFound();

  const otherCaps = capabilities.filter((c) => c.slug !== slug);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services & Capabilities", url: "/services" },
          { name: cap.title, url: `/capabilities/${cap.slug}` },
        ]}
      />
      <Nav />
      <main className="bg-white">
        {/* Editorial Article Header */}
        <header className="border-b border-[#D3DBE3] bg-[#F3F6F9] px-6 pt-12 pb-14 md:px-12 md:pt-16 md:pb-20">
          <div className="mx-auto max-w-4xl">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-2 font-mono text-[12px] text-[#566B7D]">
              <Link href="/" className="hover:text-[#051C2C] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#051C2C] transition-colors">
                Services &amp; Capabilities
              </Link>
              <span>/</span>
              <span className="text-[#051C2C] font-semibold">{cap.title}</span>
            </nav>

            {/* Content-Type Eyebrow */}
            <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#2251FF] block">
              Delivery Capability &middot; Operating Dimension
            </span>

            {/* Main Headline */}
            <h1 className="mt-3 font-serif text-[34px] sm:text-[44px] md:text-[52px] font-semibold text-[#051C2C] leading-[1.08] tracking-tight">
              {cap.title}
            </h1>

            {/* Subtitle / Lead */}
            <p className="mt-5 text-[17.5px] sm:text-[19.5px] leading-relaxed text-[#2B4052] font-normal">
              {cap.summary}
            </p>

            {/* Metadata Strip */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#D3DBE3] pt-6 sm:grid-cols-3">
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Operational Tier
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {cap.title}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Model Integration
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  Unified Delivery Platform
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Implementation Standard
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  Direct Field Groundedness
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Detailed Narrative Section */}
            <section className="mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Operational Dimension
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                Strategic Rationale &amp; Ground Execution
              </h2>
              <div className="mt-6 space-y-5 text-[16.5px] leading-relaxed text-[#2B4052]">
                {cap.fullDescription.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Connected Practice Areas & Sector Verticals */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {cap.relatedServices.length > 0 && (
                <div className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] p-6">
                  <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#566B7D] mb-3">
                    Connected Practice Disciplines
                  </span>
                  <ul className="space-y-2.5">
                    {cap.relatedServices.map((s, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#051C2C] font-medium">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#2251FF]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {cap.relatedSectors.length > 0 && (
                <div className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] p-6">
                  <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#566B7D] mb-3">
                    Relevant Sector Verticals
                  </span>
                  <ul className="space-y-2.5">
                    {cap.relatedSectors.map((sec, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#051C2C] font-medium">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#2251FF]" />
                        <span>{sec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </section>

            {/* Other Integrated Capabilities */}
            <section className="border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#566B7D] block mb-2">
                Integrated Delivery Model
              </span>
              <h2 className="font-serif text-[24px] sm:text-[28px] font-semibold text-[#051C2C] leading-snug mb-8">
                Explore Companion Delivery Capabilities
              </h2>
              <div className="border-t border-[#D3DBE3]">
                {otherCaps.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/capabilities/${other.slug}`}
                    className="group block border-b border-[#D3DBE3] py-6 transition-colors hover:bg-[#F3F6F9]/60"
                  >
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-serif text-[20px] font-medium text-[#051C2C] group-hover:text-[#2251FF] transition-colors">
                        {other.title}
                      </h3>
                      <span className="font-mono text-[14px] text-[#566B7D] group-hover:text-[#2251FF] group-hover:translate-x-1 transition-all">
                        &rarr;
                      </span>
                    </div>
                    <p className="mt-2 text-[14px] text-[#566B7D] leading-relaxed">
                      {other.tagline}
                    </p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Back Navigation & Bottom Action */}
            <div className="mt-14 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[#D3DBE3] pt-8">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-[#051C2C] hover:text-[#2251FF] transition-colors"
              >
                <span>&larr;</span>
                <span>Back to Services &amp; Capabilities</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[2px] bg-[#2251FF] px-6 py-3 font-sans text-[14px] font-semibold text-white hover:bg-[#1A3FD6] transition-colors"
              >
                Discuss an assignment
              </Link>
            </div>
          </div>
        </article>

        <Closing />
      </main>
      <Footer />
    </>
  );
}
