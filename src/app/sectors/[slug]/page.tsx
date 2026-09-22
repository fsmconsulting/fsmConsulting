import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { sectorsData, getSectorBySlug } from "@/data/sectorsData";
import { getServiceBySlug } from "@/data/servicesData";
import { contactInfo } from "@/data/siteData";
import { InteriorHero, SplitCards, DarkCard, CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return sectorsData.map((sector) => ({
    slug: sector.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) return { title: "Sector Not Found | FSM Consulting Limited" };

  return {
    title: `${sector.name} | FSM Consulting Limited`,
    description: sector.overview,
  };
}

export default async function SectorDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);
  if (!sector) notFound();

  const services = sector.relevantServices
    .map((sSlug) => getServiceBySlug(sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const discussMailto = `mailto:${contactInfo.email}?subject=${encodeURIComponent(
    "Discuss Sector Assignment: " + sector.name
  )}`;

  return (
    <div className="min-h-screen bg-white text-[#07131e] antialiased">
      {/* 1. InteriorHero with sector image */}
      <InteriorHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Sectors", href: "/sectors" },
          { label: sector.name },
        ]}
        title={sector.name}
        subtitle="Sector overview and technical delivery capabilities for development-financed assignments."
        ctaText="Discuss an Assignment"
        ctaHref="#discuss"
      />

      <main>
        {/* 2. Overview paragraph */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Sector Context
              </span>
              <h2 className="mt-2 text-[30px] sm:text-[36px] font-bold text-[#07131e] tracking-tight">
                Development Priority &amp; Operational Imperative
              </h2>
              <p className="mt-5 text-[17px] leading-relaxed text-[#5A6876]">
                {sector.overview}
              </p>
            </div>
          </div>
        </section>

        {/* 3. How FSM supports this sector: relevantServices as SplitCards */}
        <section className="bg-[#F4F5F7] px-6 md:px-12 py-16 md:py-24 border-b border-gray-200/70">
          <div className="mx-auto max-w-7xl">
            <SplitCards
              eyebrow="Delivery Alignment"
              title="How FSM supports this sector"
              subtitle="Core practice areas deployed to provide independent assurance, technical expertise, and accelerated project execution:"
              cards={services.map((svc) => ({
                title: svc.title,
                desc: svc.summary,
                href: `/services/${svc.slug}`,
                linkText: "Learn more →",
              }))}
            />
          </div>
        </section>

        {/* 4. Relevant expertise: pills */}
        <section className="px-6 md:px-12 py-16 md:py-24 border-b border-gray-100">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-8">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
                Multidisciplinary Roster
              </span>
              <h2 className="mt-2 text-[26px] sm:text-[30px] font-bold text-[#07131e] tracking-tight">
                Relevant Technical Disciplines
              </h2>
              <p className="mt-2 text-[15px] text-[#5A6876]">
                Specialists mobilized across this vertical from our multidisciplinary expert network:
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {sector.relevantExpertise.map((exp) => (
                <span
                  key={exp}
                  className="rounded-full bg-[#F4F5F7] px-5 py-2.5 text-[14px] font-medium text-[#07131e] border border-gray-200/80 shadow-xs"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DarkCard CTA: "Discuss a [sector] assignment" */}
        <section id="discuss" className="px-6 md:px-12 py-16 md:py-24 bg-white border-b border-gray-100 scroll-mt-20">
          <div className="mx-auto max-w-4xl">
            <DarkCard
              badge="Sector Engagement"
              title={`Discuss a ${sector.name} assignment`}
              subtitle="Connect directly with our practice specialists to scope requirements, deploy field teams, or structure terms of reference:"
            >
              <div className="mt-6 space-y-6 text-gray-200">
                <p className="text-[15px] text-white/80 leading-relaxed">
                  Whether issuing a formal Request for Proposals (RFP), structuring an independent verification protocol, or seeking specialized technical assistance in this sector, our partners respond within 24 business hours.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={discussMailto}
                    className="inline-flex items-center gap-2 rounded-full bg-[#2F5FA8] hover:bg-[#264E8C] text-white px-7 py-3.5 text-[14.5px] font-semibold shadow-lg transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>Email Sector Leads</span>
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

        {/* Closing Action Band */}
        <CtaBand />
      </main>

      <Footer />
    </div>
  );
}
