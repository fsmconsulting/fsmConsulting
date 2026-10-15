import Link from "next/link";
import Image from "next/image";
import { User, Quote, Camera, ArrowRight } from "lucide-react";
import { boardMembersData, type BoardMember } from "@/data/boardMembersData";

interface BoardMembersSectionProps {
  id?: string;
  headingLevel?: "h1" | "h2";
}

export default function BoardMembersSection({
  id = "board-members",
  headingLevel = "h2",
}: BoardMembersSectionProps) {
  const Heading = headingLevel;
  const leadMember = boardMembersData.find((m) => m.isLead) || boardMembersData[0];
  const regularBoardMembers = boardMembersData.filter((m) => !m.isLead);

  // Helper for initials
  const getInitials = (name: string) => {
    return name
      .replace(/,.*$/, "") // strip degrees/fellowships like ", FCGP"
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id={id}
      aria-label="Board Members - Governance & Strategic Stewardship"
      className="bg-white py-16 md:py-24 border-t border-navy/10 scroll-mt-20"
    >
      {/* Anchor for backwards compatibility with #founder */}
      <div id="founder" className="scroll-mt-24" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <Heading
            className="mt-3 text-[30px] md:text-[42px] font-serif font-normal leading-tight text-navy"
          >
            Board Members
          </Heading>
          <p className="mt-4 text-[15px] md:text-[16px] leading-relaxed text-ink/75">
            FSM Consulting Limited is guided by a multidisciplinary Board bringing together
            deep international development experience, public policy leadership, enterprise
            technology systems, legal governance, and infrastructure investment to steer our
            Pan-African delivery mission.
          </p>
        </div>

        {/* ── PART 1: FOUNDER & CHIEF EXECUTIVE OFFICER (LEAD PROFILE) ── */}
        <div className="rounded-[var(--radius-card)] bg-white p-6 md:p-10 lg:p-12 shadow-[0_12px_36px_rgba(7,19,30,0.08)] transition-all">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-start">
            {/* Portrait / Photo Column */}
            <div className="lg:col-span-4 flex flex-col items-center">
              <Link
                href={`/about/board-members/${leadMember.id}`}
                className="group relative aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-none bg-sand/60 border border-navy/10 block"
              >
                {leadMember.photoPath ? (
                  <Image
                    src={leadMember.photoPath}
                    alt={leadMember.photoAlt || leadMember.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 380px"
                    priority={false}
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-sand/80">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/5 text-navy/40 border border-navy/10 mb-3">
                      <User className="h-8 w-8 text-navy/50" />
                    </div>
                    <span
                      className="text-[18px] font-serif font-medium text-navy/80"
                    >
                      {getInitials(leadMember.name)}
                    </span>
                    <span className="mt-2 text-[11.5px] font-medium text-ink-muted">
                      Portrait Placeholder
                    </span>
                  </div>
                )}
              </Link>

              {/* Focus tags */}
              {leadMember.focusAreas && (
                <div className="mt-5 w-full max-w-[340px] flex flex-wrap gap-1.5 justify-center">
                  {leadMember.focusAreas.map((area, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-sand px-2.5 py-1 text-[11px] font-medium text-navy border border-navy/10"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Content Column */}
            <div className="lg:col-span-8 flex flex-col justify-center">
              <div className="border-b border-navy/10 pb-5">
                <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-bright">
                  {leadMember.role}
                </span>
                <h3
                  className="mt-1 text-[26px] md:text-[32px] font-serif font-medium leading-snug text-navy"
                >
                  <Link
                    href={`/about/board-members/${leadMember.id}`}
                    className="hover:text-blue-bright transition-colors"
                  >
                    {leadMember.name}
                  </Link>
                </h3>
                <p className="mt-1.5 text-[13.5px] md:text-[14px] font-medium text-ink-muted">
                  {leadMember.title}
                </p>
                {leadMember.portfolio && (
                  <p className="mt-1 text-[12.5px] font-medium text-blue-accent/90">
                    {leadMember.portfolio}
                  </p>
                )}
              </div>

              {/* Bio Paragraphs Preview */}
              <div className="mt-6 space-y-4 text-[14.5px] md:text-[15px] leading-[1.7] text-ink/80">
                <p>{leadMember.bioParagraphs[0]}</p>
                <p>{leadMember.bioParagraphs[1]}</p>

                {/* Link to Dedicated Full Biography Page */}
                <div className="pt-2">
                  <Link
                    href={`/about/board-members/${leadMember.id}`}
                    className="group inline-flex items-center gap-2 text-[13.5px] font-semibold text-blue-accent hover:text-navy transition-colors py-1"
                  >
                    <span>Read Full Executive Profile</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Block from Founder & CEO */}
          {leadMember.quote && (
            <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-navy/10">
              <div className="max-w-4xl border-l-4 border-navy pl-6 md:pl-10 py-1">
                <div className="flex items-center gap-3 mb-3">
                  <Quote className="h-5 w-5 text-navy/60 shrink-0" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-accent">
                    {leadMember.quote.eyebrow}
                  </span>
                </div>

                <blockquote className="space-y-3 text-[14px] md:text-[15px] leading-[1.7] text-ink/85 italic">
                  {leadMember.quote.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </blockquote>

                <cite className="not-italic block mt-5 pt-3 border-t border-navy/10">
                  <span className="block text-[13px] font-semibold text-navy">
                    &mdash; {leadMember.quote.attributionName}
                  </span>
                  <span className="block text-[11.5px] text-ink-muted mt-0.5">
                    {leadMember.quote.attributionTitle}
                  </span>
                </cite>
              </div>
            </div>
          )}
        </div>

        {/* ── PART 2: BOARD MEMBERS DIRECTORY ── */}
        <div className="mt-16 md:mt-24">
          <div className="mb-8 md:mb-12 border-b border-navy/10 pb-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-accent">
                FSM Consulting Limited
              </span>
              <h3
                className="mt-1 text-[24px] md:text-[30px] font-serif font-normal text-navy"
              >
                Board of Directors
              </h3>
            </div>
            <p className="text-[12.5px] text-ink-muted">
              {regularBoardMembers.length} Appointed Members
            </p>
          </div>

          {/* 2-Column Responsive Card Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
            {regularBoardMembers.map((member) => {
              const initials = getInitials(member.name);

              return (
                <article
                  key={member.id}
                  id={member.id}
                  className="flex flex-col justify-between rounded-[var(--radius-card)] bg-white p-6 md:p-8 shadow-[0_12px_36px_rgba(7,19,30,0.08)] hover:shadow-[0_18px_45px_rgba(7,19,30,0.14)] hover:-translate-y-0.5 transition-all duration-300 scroll-mt-24"
                >
                  <div>
                    {/* Top Header Row with Portrait Placeholder + Identity */}
                    <div className="flex flex-col sm:flex-row gap-5 items-start">
                      {/* Portrait / Image Placeholder Link */}
                      <Link
                        href={`/about/board-members/${member.id}`}
                        className="group relative aspect-[4/5] w-28 sm:w-32 shrink-0 overflow-hidden rounded-none bg-sand border border-navy/10 shadow-none block"
                      >
                        {member.photoPath ? (
                          <Image
                            src={member.photoPath}
                            alt={member.photoAlt || member.name}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            sizes="140px"
                          />
                        ) : (
                          <div
                            className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-gradient-to-b from-sand/50 to-sand select-none group-hover:bg-sand/80 transition-colors"
                            title="Portrait Placeholder — Add image to /public and specify photoPath in src/data/boardMembersData.ts"
                          >
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/5 text-navy/50 border border-navy/10 mb-1.5">
                              <User className="h-5 w-5 text-navy/60" />
                            </div>
                            <span
                              className="text-[14px] font-serif font-medium text-navy/80 tracking-wider"
                            >
                              {initials}
                            </span>
                            <div className="mt-1 inline-flex items-center gap-1 rounded bg-navy/5 px-1.5 py-0.5 text-[9px] font-semibold text-ink-muted tracking-tight">
                              <Camera className="h-2.5 w-2.5" />
                              <span>Photo</span>
                            </div>
                          </div>
                        )}
                      </Link>

                      {/* Header Info */}
                      <div className="flex-1 min-w-0">
                        <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.16em] text-blue-bright">
                          {member.role}
                        </span>
                        <h4
                          className="mt-1 text-[20px] md:text-[22px] font-serif font-medium leading-snug text-navy"
                        >
                          <Link
                            href={`/about/board-members/${member.id}`}
                            className="hover:text-blue-bright transition-colors"
                          >
                            {member.name}
                          </Link>
                        </h4>
                        <p className="mt-1 text-[12.5px] md:text-[13px] font-medium leading-normal text-ink-muted">
                          {member.portfolio || member.title}
                        </p>
                      </div>
                    </div>

                    {/* Divider */}
                    <div className="my-5 h-px w-full bg-navy/10" />

                    {/* Bio Lead Paragraph */}
                    <div className="text-[13.5px] md:text-[14px] leading-[1.65] text-ink/80">
                      <p>{member.bioParagraphs[0]}</p>
                    </div>
                  </div>

                  {/* Direct Link to Dedicated Biography Page */}
                  <div className="mt-5 pt-3 border-t border-navy/10 flex items-center justify-between">
                    <Link
                      href={`/about/board-members/${member.id}`}
                      className="group inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-blue-accent hover:text-navy transition-colors py-1"
                    >
                      <span>Read Full Executive Profile</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <span className="text-[11px] text-ink-muted/70 hidden sm:inline">
                      FSM Board
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
