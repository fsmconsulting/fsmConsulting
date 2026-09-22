import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ShieldCheck, FileCheck, Layers } from "lucide-react";
import { services, getServiceBySlug } from "@/data/servicesData";
import { InteriorHero, SectionHeader, DarkCard, CtaBand } from "@/components/templates";
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

/* ── Service Detail Page ── */
export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  // Related services in the same pillar
  const relatedServices = services
    .filter((s) => s.pillar === service.pillar && s.slug !== service.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. Interior Hero */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.pillarLabel, href: `/services#${service.pillar}` },
          { label: service.shortTitle },
        ]}
        title={service.title}
        subtitle={service.tagline}
        ctaText="Request a Service Briefing"
        ctaHref="/contact"
      />

      <main>
        {/* 2. Overview & Problem Solved */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: Strategic Context */}
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Practice Focus · Pillar: {service.pillarLabel}
                </span>
                <h2 className="mt-3 text-[30px] sm:text-[34px] font-bold text-[#07131e] tracking-tight leading-[1.18]">
                  Grounded execution and technical assurance
                </h2>
                <p className="mt-4 text-[16px] leading-relaxed text-[#5A6876]">
                  {service.summary}
                </p>
                <div className="mt-8 rounded-[20px] bg-[#F4F5F7] p-6 sm:p-8 border border-gray-200/60">
                  <h3 className="text-[16px] font-bold text-[#07131e] tracking-tight">
                    Who this service is built for:
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-[#5A6876]">
                    {service.whoItsFor}
                  </p>
                </div>
              </div>

              {/* Right Column: Key Deliverables (DarkCard) */}
              <div className="lg:col-span-5">
                <DarkCard
                  badge="Core Deliverables"
                  icon={ShieldCheck}
                  title="Verified Outputs"
                  subtitle="Tangible artifacts and compliance deliverables produced during execution:"
                  className="shadow-lg"
                >
                  <ul className="space-y-3 mt-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[14px] text-gray-200">
                        <CheckCircle2 className="h-4 w-4 text-[#9BC2F5] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </DarkCard>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Detailed Scope of Service (from Corporate Profile) */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Scope of Delivery"
              title="What FSM delivers on the ground"
              subtitle="Full technical scope and capabilities grounded in the FSM Consulting Corporate Profile:"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-8">
              {service.bulletPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[18px] bg-white p-6 border border-gray-200/80 shadow-xs flex items-start gap-3.5 hover:border-[#2F5FA8]/40 transition-colors"
                >
                  <FileCheck className="h-5 w-5 text-[#2F5FA8] shrink-0 mt-0.5" />
                  <p className="text-[14.5px] text-[#07131e] font-medium leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Priority Sectors & Cross-Discipline Teaming */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Sector Applications
                </span>
                <h2 className="mt-2 text-[28px] sm:text-[32px] font-bold text-[#07131e] tracking-tight">
                  Cross-sector delivery depth
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-[#5A6876]">
                  This practice area is regularly deployed across our primary development verticals, combining technical specialization with deep sectoral insight.
                </p>
              </div>

              <div className="lg:col-span-7 flex flex-wrap gap-2.5">
                {service.relatedSectors.map((sector) => (
                  <span
                    key={sector}
                    className="inline-flex items-center gap-2 rounded-full bg-[#F4F5F7] px-5 py-2.5 text-[14px] font-medium text-[#07131e] border border-gray-200/80"
                  >
                    <Layers className="h-4 w-4 text-[#2F5FA8]" />
                    <span>{sector}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Related Services in Pillar */}
        {relatedServices.length > 0 && (
          <section className="px-6 md:px-12 py-16 md:py-20 bg-white">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-[20px] font-bold text-[#07131e]">
                  Other services in Pillar {service.pillarLabel}
                </h3>
                <Link
                  href="/services"
                  className="text-[14px] font-semibold text-[#2F5FA8] hover:underline"
                >
                  View all 14 services &rarr;
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="group rounded-[20px] bg-[#F4F5F7] p-7 border border-gray-200/70 hover:border-[#2F5FA8]/50 hover:bg-white transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[10.5px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                        {rel.pillarLabel}
                      </span>
                      <h4 className="mt-1 text-[17px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                        {rel.shortTitle}
                      </h4>
                      <p className="mt-2 text-[13.5px] text-[#5A6876] line-clamp-2">
                        {rel.tagline}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-[13.5px] font-semibold text-[#07131e] group-hover:text-[#2F5FA8]">
                      <span>View details</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 6. Closing Action Band */}
        <CtaBand />
      </main>

      {/* 7. Institutional Footer */}
      <Footer />
    </div>
  );
}

