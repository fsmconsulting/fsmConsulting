import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { services, getServiceBySlug } from "@/data/servicesData";
import { sectorsData } from "@/data/sectorsData";
import { impact360Stages } from "@/data/impact360Data";
import { contactInfo } from "@/data/siteData";
import { InteriorHero, DarkCard, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

/* ── Static params for all 14 services ── */
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found | FSM Consulting Limited" };

  return {
    title: `${service.title} | FSM Consulting Limited`,
    description: service.summary,
  };
}

/* ── Service Detail Page Template ── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Related services (3 cards from relatedServices array or same pillar fallback)
  const related = service.relatedServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s))
    .slice(0, 3);

  // Related sectors metadata objects
  const relatedSectorsMeta = service.relatedSectors
    .map((secSlug) => sectorsData.find((sec) => sec.id === secSlug))
    .filter((sec): sec is NonNullable<typeof sec> => Boolean(sec));

  const isMobilisationService =
    service.slug === "expert-mobilisation" || service.slug === "assignment-support";

  const discussMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Discuss Service: " + service.title
  )}`;

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero: breadcrumb Services › [Pillar] › [Service]. Title = service title. Subtitle = purpose. */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.pillarLabel, href: `/services#${service.pillar}` },
          { label: service.title },
        ]}
        title={service.title}
        subtitle={service.purpose}
        ctaText="Discuss This Service"
        ctaHref="#discuss"
      />

      <main>
        {/* 2. What we deliver: clean 2-column list (or two titled groups for resilience-and-ppp) */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Core Practice Scope · Pillar: {service.pillarLabel}
              </span>
              <h2 className="mt-2 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight">
                What We Deliver
              </h2>
              <p className="mt-3 text-[16px] text-[#5A6876] leading-relaxed">
                {service.summary}
              </p>
            </div>

            {service.deliverableGroups && service.deliverableGroups.length > 0 ? (
              <div className="space-y-12">
                {service.deliverableGroups.map((group) => (
                  <div key={group.title} className="rounded-[24px] bg-[#F4F5F7] p-8 md:p-10 border border-gray-200/80">
                    <h3 className="text-[20px] sm:text-[22px] font-bold text-[#07131e] tracking-tight mb-6">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {group.items.map((item, idx) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-[16px] bg-white p-5 border border-gray-200/80 shadow-xs"
                        >
                          <span className="font-mono text-[12px] font-bold text-[#2F5FA8] mt-0.5">
                            0{idx + 1}
                          </span>
                          <span className="text-[14.5px] font-medium text-[#07131e] leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={item}
                    className="flex items-start gap-3.5 rounded-[18px] bg-[#F4F5F7] p-5 md:p-6 border border-gray-200/80 shadow-xs"
                  >
                    <span className="font-mono text-[12px] font-bold text-[#2F5FA8] mt-0.5">
                      {idx < 9 ? `0${idx + 1}` : idx + 1}
                    </span>
                    <span className="text-[15px] font-semibold text-[#07131e] leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Who it's for: clientTypes shown as pills */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-14 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Target Client Base
                </span>
                <h3 className="mt-1 text-[22px] font-bold text-[#07131e] tracking-tight">
                  Who This Service Is Built For
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                {service.clientTypes.map((client) => (
                  <span
                    key={client}
                    className="rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#07131e] border border-gray-200/80 shadow-xs"
                  >
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. How FSM delivers it: 6 Impact 360 stages (generic) */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-12">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Delivery Methodology
              </span>
              <h2 className="mt-2 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight">
                How FSM Delivers It: Impact 360™
              </h2>
              <p className="mt-3 text-[16px] text-[#5A6876] leading-relaxed">
                Applied across this practice area to maintain rigorous quality, proactive risk mitigation, and verified ground-level results.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {impact360Stages.map((st, idx) => (
                <div
                  key={st.letter}
                  className="rounded-[18px] bg-[#F4F5F7] p-6 border border-gray-200/70 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#07131e] text-white font-mono text-[13px] font-bold">
                        {st.letter}
                      </span>
                      <span className="font-mono text-[11px] font-semibold text-gray-500">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="mt-4 text-[14.5px] font-bold text-[#07131e] tracking-tight leading-snug">
                      {st.title}
                    </h4>
                    <p className="mt-2 text-[12.5px] text-[#5A6876] leading-relaxed">
                      {st.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Related services (3 cards) + related sectors (pills) */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            {/* Related Sectors */}
            <div className="mb-14">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Sector Applications
              </span>
              <h3 className="mt-2 text-[22px] font-bold text-[#07131e] tracking-tight">
                Relevant Development Sectors
              </h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {relatedSectorsMeta.map((sec) => (
                  <Link
                    key={sec.id}
                    href={`/sectors/${sec.id}`}
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[14px] font-medium text-[#07131e] border border-gray-200/80 hover:border-[#2F5FA8] hover:text-[#2F5FA8] transition-colors"
                  >
                    <span>{sec.title}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-[#2F5FA8] transition-transform group-hover:translate-x-0.5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Related Services */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                    Complementary Offerings
                  </span>
                  <h3 className="mt-1 text-[22px] font-bold text-[#07131e] tracking-tight">
                    Related Services
                  </h3>
                </div>
                <Link
                  href="/services"
                  className="text-[14px] font-semibold text-[#2F5FA8] hover:underline"
                >
                  All 14 practice areas &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group rounded-[20px] bg-white p-7 border border-gray-200/80 hover:border-[#2F5FA8]/50 transition-all flex flex-col justify-between shadow-xs hover:shadow-md"
                  >
                    <div>
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                        Pillar: {rel.pillarLabel}
                      </span>
                      <h4 className="mt-2 text-[17px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                        {rel.title}
                      </h4>
                      <p className="mt-2 text-[13.5px] text-[#5A6876] line-clamp-2">
                        {rel.summary}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-[13px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8]">
                      <span>View practice area</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. DarkCard CTA: "Discuss this service" */}
        <section id="discuss" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Practice Inquiry"
              title={`Discuss ${service.title}`}
              subtitle="Connect directly with our practice leaders and technical advisors to scope requirements, assemble field teams, or structure terms of reference:"
            >
              <div className="mt-6 space-y-6 text-gray-200">
                {isMobilisationService && (
                  <div className="rounded-[16px] bg-white/10 p-5 border border-white/15">
                    <p className="text-[15px] italic text-[#9BC2F5] leading-relaxed">
                      &ldquo;We don&rsquo;t just mobilize expertise. We mobilize the people and systems needed to deliver.&rdquo;
                    </p>
                    <div className="mt-3">
                      <Link
                        href="/partner-with-us"
                        className="inline-flex items-center gap-2 text-[13.5px] font-semibold text-white hover:text-[#9BC2F5] underline underline-offset-4"
                      >
                        <span>Learn about our consortium &amp; teaming models for international firms</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                )}

                <p className="text-[15px] text-white/80 leading-relaxed">
                  Whether issuing a formal Request for Proposals (RFP), structuring an independent verification protocol, or seeking specialized short-term technical assistance, our partners respond within 24 business hours.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={discussMailto}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white px-7 py-3.5 text-[14.5px] font-semibold shadow-lg transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email Practice Leaders</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-7 py-3.5 text-[14.5px] font-semibold border border-white/20 transition-colors"
                  >
                    <span>General Contact Form &rarr;</span>
                  </Link>
                </div>
              </div>
            </DarkCard>
          </div>
        </section>

        {/* 7. Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
