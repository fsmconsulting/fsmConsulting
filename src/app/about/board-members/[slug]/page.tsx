import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { User, Camera, Quote, Check, ArrowLeft, ArrowRight } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Closing from "@/components/Closing";
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd";
import { boardMembersData, getBoardMemberById, type BoardMember } from "@/data/boardMembersData";

/* ── Static params ── */
export function generateStaticParams() {
  return boardMembersData.map((m) => ({ slug: m.id }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = getBoardMemberById(slug);

  if (!member) {
    return { title: "Board Member Not Found | FSM Consulting Limited" };
  }

  const roleLabel = member.isLead ? "Founder & CEO" : "Board Member";
  const seoDescription = member.bioParagraphs[0]?.slice(0, 160) + "...";

  return {
    title: `${member.name} | ${roleLabel} | FSM Consulting Limited`,
    description: seoDescription,
    alternates: {
      canonical: `/about/board-members/${member.id}`,
    },
    openGraph: {
      title: `${member.name} | ${member.title}`,
      description: seoDescription,
      url: `https://fsmconsulting.org/about/board-members/${member.id}`,
      type: "profile",
    },
  };
}

export default async function BoardMemberDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = getBoardMemberById(slug);

  if (!member) {
    notFound();
  }

  const otherMembers = boardMembersData.filter((m) => m.id !== member.id);

  // Helper for initials
  const getInitials = (name: string) => {
    return name
      .replace(/,.*$/, "")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const initials = getInitials(member.name);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
          { name: "Board Members", url: "/about#board-members" },
          { name: member.name, url: `/about/board-members/${member.id}` },
        ]}
      />

      <Nav transparent={false} />

      <main className="bg-white">
        {/* Breadcrumb & Back Link Header */}
        <div className="border-b border-navy/10 bg-sand/30 py-4">
          <div className="mx-auto max-w-7xl px-6 md:px-10 flex flex-wrap items-center justify-between gap-4">
            <nav aria-label="Breadcrumb" className="text-[12.5px] text-ink-muted">
              <ol className="flex items-center gap-2 flex-wrap">
                <li>
                  <Link href="/" className="hover:text-navy transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/about" className="hover:text-navy transition-colors">
                    About Us
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/about#board-members" className="hover:text-navy transition-colors">
                    Board Members
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="font-semibold text-navy" aria-current="page">
                  {member.name}
                </li>
              </ol>
            </nav>

            <Link
              href="/about#board-members"
              className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-accent hover:text-navy transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Board Members</span>
            </Link>
          </div>
        </div>

        {/* Member Profile Main Section */}
        <section className="py-14 md:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              {/* Left Column: Portrait & Key Metadata (4 cols) */}
              <div className="lg:col-span-4 flex flex-col">
                <div className="relative aspect-[4/5] w-full max-w-[380px] mx-auto lg:mx-0 overflow-hidden rounded-none bg-sand/60 border border-navy/10 shadow-sm">
                  {member.photoPath ? (
                    <Image
                      src={member.photoPath}
                      alt={member.photoAlt || member.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 380px"
                      priority
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-sand/40 to-sand select-none"
                      title="Portrait Placeholder — Add image to /public and specify photoPath in src/data/boardMembersData.ts"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy/5 text-navy/50 border border-navy/10 mb-3">
                        <User className="h-10 w-10 text-navy/60" />
                      </div>
                      <span className="text-[22px] font-serif font-medium text-navy/80 tracking-wider">
                        {initials}
                      </span>
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-2.5 py-1 text-[11px] font-medium text-ink-muted">
                        <Camera className="h-3 w-3" />
                        <span>Official Portrait Placeholder</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Strategic Focus Tags */}
                {member.focusAreas && (
                  <div className="mt-6 w-full max-w-[380px] mx-auto lg:mx-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-accent mb-2.5">
                      Focus Areas
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {member.focusAreas.map((area, idx) => (
                        <span
                          key={idx}
                          className="inline-block rounded-full bg-sand px-3 py-1 text-[11.5px] font-medium text-navy border border-navy/10"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Institutional Role Card */}
                <div className="mt-8 rounded-[var(--radius-card-sm)] bg-white p-6 shadow-[0_10px_30px_rgba(7,19,30,0.08)] w-full max-w-[380px] mx-auto lg:mx-0">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-accent">
                    Governance Mandate
                  </span>
                  <h4 className="mt-1 text-[16px] font-medium text-navy">
                    {member.role}
                  </h4>
                  <p className="mt-2 text-[13px] leading-relaxed text-ink/75">
                    Contributing strategic governance, policy insight, and multidisciplinary advisory to FSM Consulting Limited&apos;s Pan-African development platform.
                  </p>
                  <div className="mt-4 pt-4 border-t border-navy/10">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-accent hover:text-navy transition-colors"
                    >
                      <span>Inquire about advisory engagement</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Full Biography (8 cols) */}
              <div className="lg:col-span-8">
                {/* Header Info */}
                <div className="border-b border-navy/10 pb-6">
                  <span className="inline-block text-[11.5px] font-semibold uppercase tracking-[0.2em] text-blue-bright">
                    {member.isLead ? "Executive Leadership" : "Board of Directors"}
                  </span>
                  <h1 className="mt-2 text-[32px] md:text-[44px] font-serif font-normal leading-tight text-navy">
                    {member.name}
                  </h1>
                  <p className="mt-2 text-[15px] md:text-[16px] font-medium text-blue-accent">
                    {member.portfolio || member.title}
                  </p>
                </div>

                {/* Full Biography Paragraphs */}
                <div className="mt-8 space-y-5 text-[15px] md:text-[16px] leading-[1.8] text-ink/85">
                  {member.bioParagraphs.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Core Areas of Expertise List (Technical Competencies Card) */}
                {member.areasOfExpertise && member.areasOfExpertise.length > 0 && (
                  <div className="mt-12 rounded-[var(--radius-card)] bg-white p-6 md:p-8 shadow-[0_22px_55px_rgba(7,19,30,0.24)]">
                    <div className="border-b border-navy/10 pb-3 mb-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
                        Technical Competencies
                      </span>
                      <h2 className="mt-1 text-[20px] md:text-[24px] font-serif font-medium text-navy">
                        Core Areas of Expertise
                      </h2>
                    </div>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13.5px] md:text-[14px] text-ink/85">
                      {member.areasOfExpertise.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-navy text-white mt-0.5">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Quote block for Founder & CEO */}
                {member.quote && (
                  <div className="mt-12 pt-8 border-t border-navy/10">
                    <div className="max-w-3xl border-l-4 border-navy pl-6 md:pl-8 py-2 bg-sand/30 rounded-r-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <Quote className="h-5 w-5 text-navy/60 shrink-0" aria-hidden="true" />
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-accent">
                          {member.quote.eyebrow}
                        </span>
                      </div>
                      <blockquote className="space-y-3.5 text-[14.5px] md:text-[15.5px] leading-[1.7] text-ink/85 italic">
                        {member.quote.paragraphs.map((p, idx) => (
                          <p key={idx}>{p}</p>
                        ))}
                      </blockquote>
                      <cite className="not-italic block mt-5 pt-3 border-t border-navy/10">
                        <span className="block text-[13.5px] font-semibold text-navy">
                          &mdash; {member.quote.attributionName}
                        </span>
                        <span className="block text-[12px] text-ink-muted mt-0.5">
                          {member.quote.attributionTitle}
                        </span>
                      </cite>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Other Board Members Directory Carousel/Grid */}
        <section className="border-t border-navy/10 bg-sand/30 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-navy/10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-accent">
                  Board of Directors
                </span>
                <h3 className="mt-1 text-[22px] md:text-[28px] font-serif font-normal text-navy">
                  Other Board Members
                </h3>
              </div>
              <Link
                href="/about#board-members"
                className="group inline-flex items-center gap-1.5 text-[13px] font-semibold text-blue-accent hover:text-navy transition-colors"
              >
                <span>View All Board Members</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherMembers.slice(0, 4).map((other) => {
                const otherInitials = getInitials(other.name);
                return (
                  <Link
                    key={other.id}
                    href={`/about/board-members/${other.id}`}
                    className="group flex flex-col justify-between rounded-[var(--radius-card-sm)] border border-navy/10 bg-white p-5 hover:border-navy/25 hover:shadow-sm transition-all duration-300"
                  >
                    <div>
                      <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand border border-navy/10 mb-4">
                        {other.photoPath ? (
                          <Image
                            src={other.photoPath}
                            alt={other.photoAlt || other.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-sand">
                            <span className="text-[16px] font-serif font-medium text-navy/70">
                              {otherInitials}
                            </span>
                            <span className="text-[10px] text-ink-muted mt-1">
                              Placeholder
                            </span>
                          </div>
                        )}
                      </div>
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-blue-bright">
                        {other.role}
                      </span>
                      <h4 className="mt-1 text-[16px] font-serif font-medium text-navy group-hover:text-blue-accent transition-colors">
                        {other.name}
                      </h4>
                      <p className="mt-1 text-[12px] text-ink-muted line-clamp-2">
                        {other.portfolio || other.title}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-navy/10 flex items-center justify-between text-[12px] font-semibold text-blue-accent group-hover:text-navy">
                      <span>View Profile</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <Closing />
      </main>

      <Footer />
    </>
  );
}
