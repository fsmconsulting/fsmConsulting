import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Closing from "@/components/Closing";
import { CtaBand } from "@/components/templates";
import Footer from "@/components/Footer";
import { sectorsData, getSectorBySlug } from "@/data/sectorsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return sectorsData.map((sector) => ({
    slug: sector.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    return { title: "Sector Not Found | FSM Consulting Limited" };
  }

  return {
    title: `${sector.title} | FSM Consulting Limited`,
    description: sector.overview,
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const currentIndex = sectorsData.findIndex((s) => s.id === sector.id);
  const prevSector =
    sectorsData[(currentIndex - 1 + sectorsData.length) % sectorsData.length];
  const nextSector = sectorsData[(currentIndex + 1) % sectorsData.length];

  const relatedSectorItems = sector.relatedSectors
    .map((relId) => getSectorBySlug(relId))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <>
      <main>
        {/* Shorter Editorial Header (Design System §13) */}
        <section className="relative overflow-hidden bg-navy text-white min-h-[480px] md:min-h-[540px] flex flex-col justify-between">
          {sector.heroImage && (
            <div className="duotone-navy pointer-events-none absolute inset-0">
              <Image
                src={sector.heroImage}
                alt={sector.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          )}

          <Nav transparent />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-14 md:px-10 md:pt-36 md:pb-16">
            <div className="max-w-3xl">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#9BC2F5]">
                Sector {sector.num} of 15 &middot; {sector.categoryLabel}
              </span>
              <h1 className="mt-3 text-[34px] md:text-[48px] font-bold leading-[1.08] tracking-tight text-white">
                {sector.title}
              </h1>
              <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-white/80">
                {sector.overview}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-[14.5px] font-semibold text-[#07131e] shadow-md hover:bg-white/90 transition-all"
                >
                  <span>Discuss an assignment</span>
                  <span className="ml-2">&rarr;</span>
                </Link>
                <Link
                  href={`/sectors/${nextSector.id}`}
                  className="group inline-flex items-center gap-1.5 text-[14px] font-medium text-white/75 hover:text-white transition-colors"
                >
                  <span>Next sector: {nextSector.shortTitle || nextSector.title}</span>
                  <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </Link>
              </div>
            </div>

            {sector.stats.length > 0 && (
              <div className="mt-12 grid grid-cols-2 gap-4 border-t border-white/15 pt-6 sm:grid-cols-3 sm:max-w-xl">
                {sector.stats.map((stat, idx) => (
                  <div key={idx}>
                    <span className="block text-[24px] md:text-[28px] font-bold text-white">
                      {stat.value}
                    </span>
                    <span className="mt-1 block font-mono text-[11px] uppercase text-white/60">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Strategic Context (Open Editorial Layout) */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              <div className="lg:col-span-6">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Sector Context &middot; Delivery Reality
                </span>
                <h2 className="mt-2 text-[28px] md:text-[36px] font-bold tracking-tight text-[#07131e]">
                  Navigating the implementation reality in Africa
                </h2>
                <p className="mt-5 text-[15.5px] leading-relaxed text-gray-600">
                  Across Africa&rsquo;s development landscape, ambitious strategies frequently encounter execution friction &mdash; fiduciary complexity, inter-agency coordination hurdles, community safeguards requirements, and baseline measurement gaps. FSM delivers targeted technical leadership to overcome these bottlenecks.
                </p>
              </div>

              <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-8 md:p-10 lg:col-span-6">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8]">
                  Strategic Imperative
                </span>
                <h3 className="mt-2 text-[22px] font-bold text-[#07131e]">
                  {sector.shortTitle || sector.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600">
                  {sector.strategicContext}
                </p>
                <div className="mt-6 border-t border-gray-200/60 pt-4 flex flex-wrap gap-2">
                  {sector.targetClients.map((client, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-gray-200 bg-white px-3 py-1 font-mono text-[11px] text-[#07131e]"
                    >
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="bg-[#F4F5F7] px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="border-b border-gray-200/80 pb-8 mb-12">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5FA8]">
                Practice Scope
              </span>
              <h2 className="mt-2 text-[28px] md:text-[38px] font-bold tracking-tight text-[#07131e]">
                Core focus areas
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-gray-600">
                Our capabilities address the complete project lifecycle, from diagnostic and readiness (D-Ready) through to execution acceleration and independent verification.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {sector.focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-gray-100 bg-white p-8 md:p-9 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="font-mono text-[11px] font-semibold text-[#2F5FA8]">0{index + 1}</span>
                    <h3 className="mt-2 text-[20px] font-bold text-[#07131e]">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                      {area.description}
                    </p>
                  </div>
                  <ul className="mt-6 space-y-2 border-t border-gray-100 pt-4">
                    {area.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="text-[13px] text-gray-700 flex items-baseline gap-2">
                        <span className="text-[#2F5FA8]">&bull;</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Interventions & Delivery Configuration */}
        <section className="bg-white px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
              {/* Interventions list (7 cols) */}
              <div className="lg:col-span-7">
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#2F5FA8]">
                  Execution Capabilities
                </span>
                <h2 className="mt-2 text-[26px] md:text-[32px] font-bold tracking-tight text-[#07131e]">
                  Specialized interventions
                </h2>
                <div className="mt-6 divide-y divide-gray-100 border-y border-gray-100">
                  {sector.interventions.map((intervention, iIdx) => (
                    <div key={iIdx} className="py-4 flex items-start gap-4">
                      <span className="font-mono text-[12px] font-semibold text-[#2F5FA8] pt-0.5 shrink-0">
                        {String(iIdx + 1).padStart(2, "0")}
                      </span>
                      <p className="text-[14.5px] leading-relaxed text-[#07131e]">{intervention}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar: Deployed Experts & Aligned Services (5 cols) */}
              <div className="space-y-6 lg:col-span-5">
                <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-7">
                  <h3 className="text-[18px] font-bold text-[#07131e]">
                    Deployed technical specialists
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.expertRoles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="rounded-full border border-gray-200 bg-white px-3 py-1 font-mono text-[11.5px] text-[#07131e]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-7">
                  <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                    <h3 className="text-[18px] font-bold text-[#07131e]">
                      Aligned practice areas
                    </h3>
                    <Link href="/services" className="text-[12px] font-semibold text-[#2F5FA8] hover:underline">
                      Catalogue &rarr;
                    </Link>
                  </div>
                  <div className="mt-4 space-y-2">
                    {sector.serviceCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="rounded-xl border border-gray-200/80 bg-white px-3.5 py-2 text-[13px] font-medium text-[#07131e]"
                      >
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Sectors Strip */}
        {relatedSectorItems.length > 0 && (
          <section className="border-t border-gray-100 bg-[#F4F5F7] px-6 py-16 md:px-10 md:py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight text-[#07131e]">
                Related development sectors
              </h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedSectorItems.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/sectors/${rel.id}`}
                    className="group flex flex-col justify-between rounded-[20px] border border-gray-200/80 bg-white p-6 transition-all hover:border-[#2F5FA8]/40 hover:shadow-md"
                  >
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8]">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="mt-2 text-[17px] font-bold text-[#07131e] group-hover:text-[#2F5FA8] transition-colors">
                        {rel.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[13px] text-gray-500">{rel.tagline}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F5FA8]">
                      <span>Explore sector</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sector Pagination */}
        <section className="border-t border-navy/10 bg-white px-6 py-8 md:px-10">
          <div className="mx-auto flex max-w-7xl items-center justify-between">
            <Link href={`/sectors/${prevSector.id}`} className="group flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                &larr;
              </span>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">Previous</span>
                <span className="text-[13.5px] font-medium text-navy">{prevSector.title}</span>
              </div>
            </Link>
            <Link href={`/sectors/${nextSector.id}`} className="group flex items-center gap-3 text-right">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-muted">Next</span>
                <span className="text-[13.5px] font-medium text-navy">{nextSector.title}</span>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-navy/15 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        <Closing />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
