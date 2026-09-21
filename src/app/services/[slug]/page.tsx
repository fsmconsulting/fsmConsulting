import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import { practicesData, getPracticeBySlug } from "@/data/practicesData";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import ServiceJsonLd from "@/components/seo/ServiceJsonLd";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return practicesData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const practice = getPracticeBySlug(slug);

  if (!practice) {
    return { title: "Practice Not Found | FSM Consulting Limited" };
  }

  return {
    title: `${practice.title} | Practice Area`,
    description: practice.tagline,
    alternates: {
      canonical: `/services/${practice.slug}`,
    },
    openGraph: {
      title: `${practice.title} | Practice Area | FSM Consulting Limited`,
      description: practice.tagline,
      url: `https://fsmconsulting.org/services/${practice.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const practice = getPracticeBySlug(slug);

  if (!practice) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Services & Capabilities", url: "/services" },
          { name: practice.title, url: `/services/${practice.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={practice.title}
        description={practice.tagline}
        url={`https://fsmconsulting.org/services/${practice.slug}`}
        clusterName={practice.cluster}
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
              <span className="text-[#051C2C] font-semibold">{practice.clusterLabel}</span>
            </nav>

            {/* Content-Type Eyebrow */}
            <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#2251FF] block">
              Practice Discipline &middot; {practice.clusterLabel}
            </span>

            {/* Main Headline */}
            <h1 className="mt-3 font-serif text-[34px] sm:text-[44px] md:text-[52px] font-semibold text-[#051C2C] leading-[1.08] tracking-tight">
              {practice.title}
            </h1>

            {/* Subtitle / Lead */}
            <p className="mt-5 text-[17.5px] sm:text-[19.5px] leading-relaxed text-[#2B4052] font-normal">
              {practice.summary}
            </p>

            {/* Metadata Strip */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#D3DBE3] pt-6 sm:grid-cols-4">
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Practice Cluster
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {practice.clusterLabel}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Operational Reach
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  Pan-African &amp; 36 States
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Target Clients
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  Governments &amp; DFIs
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Delivery Mode
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  Embedded &amp; Independent
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Section: Strategic Context & Mandate */}
            <section className="mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Strategic Context
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                Operational Framework &amp; Institutional Need
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#2B4052]">
                {practice.article.context.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Section: Deliverables & Scope */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Specialized Services
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {practice.article.scopeTitle}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {practice.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] p-4 flex items-start gap-3"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#2251FF]" />
                    <span className="text-[14px] leading-snug text-[#051C2C] font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Methodology & Quality Standards */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Delivery Methodology
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {practice.article.methodologyTitle}
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#2B4052]">
                {practice.article.methodologyDetails.map((para, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-b border-[#D3DBE3] pb-4 last:border-b-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#051C2C]" />
                    <p className="text-[15.5px] leading-relaxed text-[#2B4052]">
                      {para}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Client Value & Impact Callout */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#2251FF] block mb-2">
                Demonstrated Impact
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {practice.article.impactTitle}
              </h2>

              <div className="mt-6 rounded-r-[2px] border-l-4 border-[#2251FF] bg-[#F3F6F9] p-6 sm:p-8">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#2251FF]">
                  Institutional Value Proposition
                </span>
                <p className="mt-2 text-[16.5px] font-medium leading-relaxed text-[#051C2C]">
                  {practice.clientValue}
                </p>
                
                <div className="mt-6 border-t border-[#D3DBE3] pt-4">
                  <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D] mb-2">
                    Verified Outcomes
                  </span>
                  <ul className="space-y-2.5">
                    {practice.article.impactDetails.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-[14.5px] text-[#2B4052]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#2251FF]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Related Sector Verticals */}
            {practice.relatedSectors.length > 0 && (
              <div className="border-t border-[#D3DBE3] pt-8 pb-4">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#566B7D] mb-3">
                  Cross-Cutting Sector Alignments
                </span>
                <div className="flex flex-wrap gap-2">
                  {practice.relatedSectors.map((sector, idx) => (
                    <span
                      key={idx}
                      className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] px-3 py-1 font-mono text-[12px] font-medium text-[#2B4052]"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Back Navigation & Action Bar */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[#D3DBE3] pt-8">
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
