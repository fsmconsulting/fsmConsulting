import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import { caseStudiesData } from "@/data/caseStudiesData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudiesData.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudiesData.find((i) => i.slug === slug);

  if (!item) {
    return { title: "Case Study Not Found | FSM Consulting Limited" };
  }

  return {
    title: `${item.title} | Case Study | FSM Consulting Limited`,
    description: item.shortDescription,
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const item = caseStudiesData.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <>
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
              <Link href="/#case-studies" className="hover:text-[#051C2C] transition-colors">
                Case Studies
              </Link>
              <span>/</span>
              <span className="text-[#051C2C] font-semibold">{item.category}</span>
            </nav>

            {/* Content-Type Eyebrow */}
            <span className="font-mono text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#2251FF] block">
              Evidence &middot; Verified Delivery Case
            </span>

            {/* Main Headline */}
            <h1 className="mt-3 font-serif text-[34px] sm:text-[44px] md:text-[52px] font-semibold text-[#051C2C] leading-[1.08] tracking-tight">
              {item.title}
            </h1>

            {/* Lead / Subtitle */}
            <p className="mt-5 text-[17.5px] sm:text-[19.5px] leading-relaxed text-[#2B4052] font-normal">
              {item.lead}
            </p>

            {/* Engagement Metadata Strip */}
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#D3DBE3] pt-6 sm:grid-cols-4">
              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Client &middot; Mandate
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {item.client}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Focus Discipline
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {item.clientType}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Geographic Scope
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {item.scope}
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10.5px] uppercase tracking-wider text-[#566B7D]">
                  Assurance Benchmark
                </span>
                <span className="mt-1 block text-[13.5px] font-semibold text-[#051C2C]">
                  {item.verification}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Body */}
        <article className="px-6 py-12 md:px-12 md:py-20">
          <div className="mx-auto max-w-4xl">
            {/* Section 1: Strategic Context */}
            <section className="mb-14">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Strategic Context
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                Operational Framework &amp; Mandate Baseline
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#2B4052]">
                {item.article.context.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Section 2: The Delivery Challenge */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Problem Diagnosis
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {item.article.challengeTitle}
              </h2>
              <div className="mt-5 space-y-4 text-[16px] leading-relaxed text-[#2B4052]">
                {item.article.challengeDetails.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Section 3: Technical Disciplines Deployed */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Implementation Architecture
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {item.article.disciplinesTitle}
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {item.article.disciplines.map((disc, idx) => (
                  <div
                    key={idx}
                    className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] p-5 shadow-2xs"
                  >
                    <h3 className="font-serif text-[18px] font-semibold text-[#051C2C]">
                      {disc.name}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#2B4052]">
                      {disc.detail}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: Verified Outcomes (Signature Callout Block) */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#2251FF] block mb-2">
                Verified Evidence
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {item.article.outcomesTitle}
              </h2>

              <div className="mt-6 rounded-r-[2px] border-l-4 border-[#2251FF] bg-[#F3F6F9] p-6 sm:p-8">
                <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-[#2251FF]">
                  Third-Party Benchmark Verifications
                </span>
                <ul className="mt-4 space-y-3">
                  {item.article.outcomeHighlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] font-medium text-[#051C2C]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#2251FF]" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 space-y-4 text-[16px] leading-relaxed text-[#2B4052]">
                {item.article.outcomeNarrative.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </section>

            {/* Section 5: Key Delivery Takeaways */}
            <section className="mb-14 border-t border-[#D3DBE3] pt-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] font-bold text-[#566B7D] block mb-2">
                Delivery Insights
              </span>
              <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#051C2C] leading-snug">
                {item.article.takeawaysTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {item.article.takeaways.map((takeaway, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 border-b border-[#D3DBE3] pb-4 last:border-b-0"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-[1px] bg-[#051C2C]" />
                    <p className="text-[15.5px] leading-relaxed text-[#2B4052]">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Core Practice Areas Tag Strip */}
            <div className="border-t border-[#D3DBE3] pt-8 pb-4">
              <span className="block font-mono text-[11px] font-bold uppercase tracking-[0.1em] text-[#566B7D] mb-3">
                Disciplines &amp; Thematic Focus
              </span>
              <div className="flex flex-wrap gap-2">
                {item.relevance.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-[2px] border border-[#D3DBE3] bg-[#F3F6F9] px-3 py-1 font-mono text-[12px] font-medium text-[#2B4052]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Back Link & Bottom Action */}
            <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 border-t border-[#D3DBE3] pt-8">
              <Link
                href="/#case-studies"
                className="inline-flex items-center gap-2 font-mono text-[13px] font-semibold text-[#051C2C] hover:text-[#2251FF] transition-colors"
              >
                <span>&larr;</span>
                <span>Back to Case Studies</span>
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
