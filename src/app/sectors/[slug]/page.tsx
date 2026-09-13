import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
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
    return {
      title: "Sector Not Found | FSM Consulting Limited",
    };
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

  // Find adjacent sectors for pagination
  const currentIndex = sectorsData.findIndex((s) => s.id === sector.id);
  const prevSector = sectorsData[(currentIndex - 1 + sectorsData.length) % sectorsData.length];
  const nextSector = sectorsData[(currentIndex + 1) % sectorsData.length];

  // Resolve related sector objects
  const relatedSectorItems = sector.relatedSectors
    .map((relId) => getSectorBySlug(relId))
    .filter((item): item is NonNullable<typeof item> => item !== undefined);

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white text-ink">
        {/* Breadcrumbs & Sector Top Header */}
        {sector.heroImage ? (
          <section className="relative overflow-hidden text-ivory min-h-[85vh] flex items-center bg-navy border-b border-navy/10">
            {/* Sector HeroBackground identical to HeroBackground.tsx */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden bg-navy">
              <div className="absolute inset-0">
                <Image
                  src={sector.heroImage}
                  alt={`${sector.title} hero background`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center opacity-85"
                />
              </div>

              {/* Background color fading from left (dark) to right (light) */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(90deg, #03111e 0%, #051c2c 35%, rgba(5, 28, 44, 0.75) 55%, rgba(10, 37, 64, 0.25) 78%, rgba(240, 246, 252, 0.15) 100%)",
                }}
              />
              {/* Subtle top and bottom vignette to integrate cleanly with navigation and following section */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#051c2c]/70 via-transparent to-[#051c2c]/80" />
            </div>

            <div className="relative mx-auto max-w-6xl w-full px-6 py-24 md:px-10 md:py-32">
              <div className="max-w-[660px]">
                <h1 className="font-serif font-medium leading-[1.05] text-[38px] md:text-[54px] lg:text-[66px] text-ivory">
                  {sector.title}
                </h1>

                <div className="my-6 h-0.5 w-16 bg-gold" />

                <p className="text-[18px] font-medium leading-relaxed text-gold-light md:text-[20px]">
                  {sector.tagline}
                </p>

                <p className="mt-4 max-w-[48ch] text-[17px] leading-relaxed text-ivory/80">
                  {sector.overview}
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-8">
                  <Link
                    href="/#contact"
                    className="group inline-flex items-center gap-2 bg-gold px-6.5 py-3.5 text-[14.5px] font-semibold text-navy transition-all duration-200 hover:brightness-110 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <span className="transition-transform duration-200 group-hover:scale-105 inline-block">Start a conversation</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                  </Link>
                  <Link
                    href={`/sectors/${nextSector.id}`}
                    className="relative pb-1 text-[14.5px] font-medium text-ivory/80 transition-colors duration-200 hover:text-ivory after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-ivory/60 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Next sector: {nextSector.shortTitle || nextSector.title} &rarr;
                  </Link>
                </div>

                <div className="mt-16 flex flex-wrap gap-10 md:gap-14 border-t border-ivory/15 pt-6">
                  {sector.stats.map((stat, idx) => (
                    <div key={idx}>
                      <span className="block font-serif text-[30px] font-bold text-gold">{stat.value}</span>
                      <span className="text-[13px] text-ivory/65">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* Default header for sectors without an image */
          <section className="relative overflow-hidden border-b border-navy/10 bg-[#001326] text-white">
            {/* Subtle background mesh glow */}
            <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-accent/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-20">
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
                <div>
                  <h1 className="font-serif text-[36px] font-normal leading-tight text-white md:text-[54px]">
                    {sector.title}
                  </h1>

                  <p className="mt-4 text-[18px] font-medium leading-relaxed text-gold-light md:text-[20px]">
                    {sector.tagline}
                  </p>

                  <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-gray-300">
                    {sector.overview}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/#contact"
                      className="group inline-flex items-center gap-2 bg-gold-light px-6 py-3 text-[14px] font-semibold text-navy transition-all duration-200 hover:brightness-110 shadow-sm"
                    >
                      <span>Engage Our Sector Experts</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </Link>

                    <Link
                      href={`/sectors/${nextSector.id}`}
                      className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3 text-[14px] font-medium text-white transition-all duration-200 hover:bg-white/10 hover:border-white/40"
                    >
                      <span>Next Sector &rarr;</span>
                    </Link>
                  </div>
                </div>

                {/* Stat callouts block */}
                <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:p-8">
                  <div className="border-b border-white/10 pb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-400">
                      Operational Impact Benchmarks
                    </span>
                  </div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 lg:grid-cols-1">
                    {sector.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="flex items-baseline gap-2">
                          <span className="font-serif text-[32px] font-bold text-gold-light md:text-[36px]">
                            {stat.value}
                          </span>
                        </div>
                        <span className="text-[13px] font-semibold text-white">{stat.label}</span>
                        <span className="text-[12px] leading-snug text-gray-400">{stat.detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Development Context & Strategic Challenge */}
        <section className="border-b border-gray-200 bg-sand py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                  Context &amp; Challenge
                </span>
                <h2 className="mt-2 font-serif text-[30px] font-normal leading-snug text-navy md:text-[38px]">
                  Navigating the Implementation Reality in Africa
                </h2>
                <div className="mt-6 h-1 w-16 bg-gold" />
                <p className="mt-6 text-[15px] leading-relaxed text-gray-600">
                  Across Africa&rsquo;s development landscape, ambitious strategies frequently encounter execution friction, including fiduciary complexity, inter-agency coordination hurdles, community safeguards requirements, and verified measurement gaps.
                </p>
                <div className="mt-6 rounded-lg border-l-4 border-navy bg-white p-5 shadow-sm">
                  <p className="text-[14px] italic text-navy/80">
                    &ldquo;FSM Consulting operates at the intersection of international development standards and ground-level African realities, ensuring investments produce verifiable, enduring value.&rdquo;
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
                <h3 className="font-serif text-[20px] font-medium text-navy">
                  Strategic Imperative for {sector.shortTitle || sector.title}
                </h3>
                <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                  {sector.strategicContext}
                </p>

                <div className="mt-8 border-t border-gray-100 pt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Target Clients &amp; Financing Ecosystem
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {sector.targetClients.map((client, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center rounded-full bg-sand-2 px-3 py-1 text-xs font-medium text-navy"
                      >
                        {client}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Focus Areas */}
        <section className="border-b border-gray-200 bg-white py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="max-w-3xl">
              <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                Thematic Architecture
              </span>
              <h2 className="mt-2 font-serif text-[32px] font-normal text-navy md:text-[42px]">
                Core Focus Areas in {sector.shortTitle || sector.title}
              </h2>
              <p className="mt-3 text-[16px] text-gray-600">
                Our multidimensional capabilities address the complete project lifecycle, from conceptual diagnostic and project preparation (D-Ready) to execution acceleration and independent verification.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {sector.focusAreas.map((area, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fcfdfe] p-7 transition-all duration-300 hover:border-navy hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-blue-accent">
                        Area 0{index + 1}
                      </span>
                      <span className="h-2 w-2 rounded-full bg-gold" />
                    </div>
                    <h3 className="mt-4 font-serif text-[20px] font-medium text-navy">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-gray-600">
                      {area.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-gray-100 pt-5">
                    <span className="text-[11.5px] font-semibold uppercase tracking-wider text-gray-400">
                      Key Capabilities Included:
                    </span>
                    <ul className="mt-2.5 space-y-1.5">
                      {area.highlights.map((item, hIdx) => (
                        <li key={hIdx} className="flex items-center gap-2 text-[13.5px] text-navy/80">
                          <span className="text-gold font-bold">&check;</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FSM Interventions & Signature Capabilities */}
        <section className="border-b border-gray-200 bg-sand-2 py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                  Execution Toolkit
                </span>
                <h2 className="mt-2 font-serif text-[30px] font-normal text-navy md:text-[38px]">
                  FSM Specialized Interventions &amp; Deliverables
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-600">
                  Concrete, high-value consulting and operational interventions deployed by our technical experts to unlock project performance and meet multilateral donor benchmarks.
                </p>

                <div className="mt-8 space-y-3">
                  {sector.interventions.map((intervention, iIdx) => (
                    <div
                      key={iIdx}
                      className="flex items-start gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-xs transition-colors hover:border-blue-accent"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy text-xs font-semibold text-gold-light">
                        {iIdx + 1}
                      </div>
                      <p className="text-[14.5px] font-medium leading-normal text-navy">
                        {intervention}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Deployed Expert Roles & Capabilities Crosswalk */}
              <div className="flex flex-col gap-6">
                {/* Deployed Experts Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-accent">
                        Technical Network
                      </span>
                      <h3 className="font-serif text-[18px] font-medium text-navy">
                        Deployed Experts for This Sector
                      </h3>
                    </div>
                    <span className="rounded bg-sand px-2.5 py-1 text-xs font-semibold text-navy">
                      Multidisciplinary
                    </span>
                  </div>
                  <p className="mt-3 text-[13.5px] text-gray-600">
                    FSM mobilizes pre-vetted senior consultants with direct track records on World Bank, AfDB, and government programs:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {sector.expertRoles.map((role, rIdx) => (
                      <span
                        key={rIdx}
                        className="inline-flex items-center gap-1.5 rounded-md border border-navy/10 bg-sand px-3 py-1.5 text-[13px] font-medium text-navy"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                        {role}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Service Offerings Crosswalk Card */}
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between border-b border-gray-100 pb-4">
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-accent">
                        Service Integration
                      </span>
                      <h3 className="font-serif text-[18px] font-medium text-navy">
                        Aligned FSM Service Offerings
                      </h3>
                    </div>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-blue-accent hover:underline"
                    >
                      View All Services &rarr;
                    </Link>
                  </div>
                  <p className="mt-3 text-[13.5px] text-gray-600">
                    How this sector leverages FSM&rsquo;s corporate service pillars from the Corporate Profile:
                  </p>
                  <div className="mt-4 space-y-2">
                    {sector.serviceCapabilities.map((cap, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center justify-between rounded border border-gray-100 bg-[#fbfcfd] px-3.5 py-2 text-[13px] font-medium text-navy"
                      >
                        <span>{cap}</span>
                        <span className="text-xs text-gray-400">&rarr;</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Sectors & Cross-Sectoral Synergies */}
        {relatedSectorItems.length > 0 && (
          <section className="border-b border-gray-200 bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-6 md:px-10">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                    Cross-Sector Synergies
                  </span>
                  <h2 className="mt-1 font-serif text-[28px] font-normal text-navy md:text-[34px]">
                    Related Sector Verticals
                  </h2>
                </div>
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Connected Practice Verticals
                </span>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedSectorItems.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/sectors/${rel.id}`}
                    className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-[#fbfcfd] p-6 transition-all duration-200 hover:border-navy hover:bg-white hover:shadow-md hover:-translate-y-1"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <span className="font-mono font-semibold text-blue-accent">Vertical {rel.num}</span>
                        <span>{rel.categoryLabel}</span>
                      </div>
                      <h3 className="mt-3 font-serif text-[18px] font-medium text-navy group-hover:text-blue-accent">
                        {rel.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-[13.5px] text-gray-600">
                        {rel.tagline}
                      </p>
                    </div>
                    <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-navy group-hover:text-blue-accent">
                      <span>Explore Sector</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pagination: Prev / Next Sector */}
        <section className="border-b border-gray-200 bg-sand py-8">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
            <Link
              href={`/sectors/${prevSector.id}`}
              className="group flex items-center gap-3 text-left"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                &larr;
              </span>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Previous Sector</span>
                <span className="font-serif text-[14px] font-medium text-navy group-hover:text-blue-accent md:text-[16px]">
                  {prevSector.title}
                </span>
              </div>
            </Link>

            <span className="hidden font-mono text-xs uppercase tracking-wider text-gray-400 md:block">
              Sector {sector.num} of 15
            </span>

            <Link
              href={`/sectors/${nextSector.id}`}
              className="group flex items-center gap-3 text-right"
            >
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-gray-400">Next Sector</span>
                <span className="font-serif text-[14px] font-medium text-navy group-hover:text-blue-accent md:text-[16px]">
                  {nextSector.title}
                </span>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-white">
                &rarr;
              </span>
            </Link>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="relative overflow-hidden bg-navy py-16 text-white md:py-20">
          <div className="relative mx-auto max-w-5xl px-6 text-center md:px-10">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-light">
              Sector Partnership
            </span>
            <h2 className="mt-3 font-serif text-[32px] font-normal leading-tight text-white md:text-[44px]">
              Ready to Accelerate Implementation in {sector.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-gray-300">
              Connect with FSM Consulting&rsquo;s specialized practice leaders to design, assure, monitor, and deliver measurable development impact.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 bg-gold-light px-7 py-3.5 text-[14.5px] font-semibold text-navy shadow-sm transition-all duration-200 hover:brightness-110"
              >
                <span>Initiate Sector Advisory Consultation</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </Link>
              <a
                href="mailto:info@fsmconsulting.com"
                className="inline-flex items-center gap-2 border border-white/20 bg-white/5 px-6 py-3.5 text-[14.5px] font-medium text-white transition-all duration-200 hover:bg-white/10"
              >
                <span>Email Our Practice Team</span>
              </a>
            </div>
          </div>
        </section>

        <Closing />
      </main>
      <Footer />
    </>
  );
}
