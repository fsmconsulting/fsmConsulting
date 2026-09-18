import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import Reveal from "@/components/Reveal";
import { getAllSectors, getSectorBySlug, sectorsData } from "@/data/sectorsData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSectors().map((sector) => ({
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
    title: `${sector.title} | Sector Practice | FSM Consulting Limited`,
    description: sector.overview,
    openGraph: {
      title: `${sector.title} - FSM Consulting Limited`,
      description: sector.tagline,
      type: "article",
    },
  };
}

export default async function SectorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sector = getSectorBySlug(slug);

  if (!sector) {
    notFound();
  }

  const currentIndex = sectorsData.findIndex((s) => s.id === sector.id);
  const prevSector = sectorsData[(currentIndex - 1 + sectorsData.length) % sectorsData.length];
  const nextSector = sectorsData[(currentIndex + 1) % sectorsData.length];

  const relatedSectorItems = sector.relatedSectors
    .map((relId) => getSectorBySlug(relId))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <>
      <main>
        {/* Hero */}
        <section className="bg-sand px-4 pt-4 md:px-10 md:pt-10">
          <div className="bento-card hero-card-enter relative min-h-[440px] overflow-hidden bg-navy md:min-h-[520px]">
            {sector.heroImage && (
              <div className="duotone-navy pointer-events-none absolute inset-0">
                <Image
                  src={sector.heroImage}
                  alt=""
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            )}

            <Nav transparent />

            <div className="relative flex min-h-[440px] flex-col justify-end px-6 pb-10 pt-24 md:min-h-[520px] md:px-12 md:pb-14 md:pt-28">
              <p className="mb-3 text-[13px] font-medium text-white/80">
                Sector {sector.num} of 15 &middot; {sector.categoryLabel}
              </p>
              <h1 className="max-w-[22ch] font-serif text-[32px] font-medium leading-[1.1] text-white md:text-[46px]">
                {sector.title}
              </h1>
              <p className="mt-4 max-w-[56ch] text-[15px] leading-relaxed text-white/75">
                {sector.overview}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link href="/#contact" className="pill-btn group inline-flex items-center bg-white text-navy hover:bg-white/90">
                  <span>Discuss an assignment</span>
                  <span className="pill-btn-arrow">&rarr;</span>
                </Link>
                <Link
                  href={`/sectors/${nextSector.id}`}
                  className="relative pb-1 text-[13.5px] font-medium text-white/75 transition-colors duration-200 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-white/60 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Next sector: {nextSector.shortTitle || nextSector.title} &rarr;
                </Link>
              </div>

              {sector.stats.length > 0 && (
                <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:max-w-[560px] md:gap-4">
                  {sector.stats.map((stat, idx) => (
                    <div key={idx} className="bento-card bg-white/[0.08] px-4 py-4">
                      <span className="block font-serif text-[22px] font-medium text-white">{stat.value}</span>
                      <span className="mt-1 block text-[12px] leading-snug text-white/70">{stat.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Strategic context */}
        <section className="bg-white px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 md:gap-4">
              <div className="bento-card bg-sand px-7 py-8">
                <span className="text-[12px] font-medium uppercase tracking-wide text-blue-accent">
                  Context
                </span>
                <h2 className="mt-2 font-serif text-[22px] font-medium text-navy md:text-[26px]">
                  Navigating the implementation reality in Africa
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-ink-muted">
                  Across Africa&rsquo;s development landscape, ambitious strategies frequently
                  encounter execution friction &mdash; fiduciary complexity, inter-agency
                  coordination hurdles, community safeguards requirements, and measurement gaps.
                </p>
              </div>
              <div className="bento-card bg-navy px-7 py-8 text-white">
                <span className="text-[12px] font-medium uppercase tracking-wide text-white/70">
                  Strategic imperative
                </span>
                <h3 className="mt-2 font-serif text-[20px] font-medium">
                  {sector.shortTitle || sector.title}
                </h3>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/75">
                  {sector.strategicContext}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {sector.targetClients.map((client, idx) => (
                    <span key={idx} className="rounded-[var(--radius-card-sm)] bg-white/10 px-3 py-1.5 text-[12px] font-medium text-white">
                      {client}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Focus areas */}
        <section className="bg-sand px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-serif text-[26px] font-medium text-navy md:text-[34px]">
              Core focus areas
            </h2>
            <p className="mt-3 max-w-[58ch] text-[15px] leading-relaxed text-ink-muted">
              Our capabilities address the complete project lifecycle, from diagnostic and
              readiness (D-Ready) through to execution acceleration and independent verification.
            </p>

            <Reveal>
              <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
                {sector.focusAreas.map((area, index) => (
                  <div key={index} className="bento-card bento-card--hover bg-white px-7 py-7">
                    <h3 className="font-serif text-[18px] font-medium text-navy">{area.title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-ink-muted">
                      {area.description}
                    </p>
                    <ul className="mt-4 space-y-1.5 border-t border-line pt-4">
                      {area.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="text-[13px] text-navy/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Interventions + experts + services */}
        <section className="bg-white px-4 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div>
                <h2 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                  Specialized interventions
                </h2>
                <div className="mt-6 space-y-3">
                  {sector.interventions.map((intervention, iIdx) => (
                    <div key={iIdx} className="bento-card flex items-start gap-4 bg-sand px-5 py-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-white">
                        {iIdx + 1}
                      </span>
                      <p className="text-[14px] leading-normal text-navy">{intervention}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <div className="bento-card bg-sand px-6 py-6">
                  <h3 className="font-serif text-[17px] font-medium text-navy">
                    Deployed experts for this sector
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.expertRoles.map((role, rIdx) => (
                      <span key={rIdx} className="rounded-[var(--radius-card-sm)] bg-white px-3 py-1.5 text-[12.5px] font-medium text-navy">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bento-card bg-sand px-6 py-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-[17px] font-medium text-navy">
                      Aligned service offerings
                    </h3>
                    <Link href="/services" className="text-[12.5px] font-medium text-blue-accent hover:underline">
                      All services &rarr;
                    </Link>
                  </div>
                  <div className="mt-4 space-y-2">
                    {sector.serviceCapabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="rounded-[var(--radius-card-sm)] bg-white px-3.5 py-2.5 text-[13px] font-medium text-navy">
                        {cap}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related sectors */}
        {relatedSectorItems.length > 0 && (
          <section className="bg-sand px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-serif text-[24px] font-medium text-navy md:text-[28px]">
                Related sectors
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-4">
                {relatedSectorItems.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/sectors/${rel.id}`}
                    className="group bento-card bento-card--hover flex flex-col justify-between bg-white px-6 py-6"
                  >
                    <div>
                      <span className="text-[11px] font-medium uppercase tracking-wide text-blue-accent">
                        {rel.categoryLabel}
                      </span>
                      <h3 className="mt-2 text-[16px] font-medium text-navy group-hover:text-blue-accent">
                        {rel.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[13.5px] text-ink-muted">{rel.tagline}</p>
                    </div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-navy/70 group-hover:text-navy">
                      Explore sector
                      <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pagination */}
        <section className="bg-white px-4 py-8 md:px-8">
          <div className="mx-auto flex max-w-6xl items-center justify-between">
            <Link href={`/sectors/${prevSector.id}`} className="group flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                &larr;
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-wide text-ink-muted">Previous</span>
                <span className="text-[14px] font-medium text-navy">{prevSector.title}</span>
              </div>
            </Link>
            <Link href={`/sectors/${nextSector.id}`} className="group flex items-center gap-3 text-right">
              <div>
                <span className="block text-[11px] uppercase tracking-wide text-ink-muted">Next</span>
                <span className="text-[14px] font-medium text-navy">{nextSector.title}</span>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}
