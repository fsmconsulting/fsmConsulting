import Link from "next/link";
import { ArrowRight, Briefcase, Globe, Users } from "lucide-react";

export interface CtaBandProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

/**
 * CtaBand (Conceptzilla Prism Grammar)
 * Closing action band presenting three clear conversion pathways:
 * 1. Commissioning work? → /contact
 * 2. Bidding in Africa? → /partner-with-us
 * 3. Expert? → /experts
 */
export default function CtaBand({
  title = "Work with FSM Consulting",
  subtitle = "Whether you are commissioning sovereign development assurance, bidding on major tenders, or joining our technical bench.",
  className = "",
}: CtaBandProps) {
  const pathways = [
    {
      badge: "Clients & Donors",
      question: "Commissioning work?",
      desc: "Discuss an IVA assignment, project readiness assessment, or nationwide field verification.",
      href: "/contact",
      cta: "Contact Our Team",
      icon: Briefcase,
    },
    {
      badge: "International Firms",
      question: "Bidding in Africa?",
      desc: "Partner with FSM for consortium bids, sub-consulting, vetted local experts, and full in-country logistics.",
      href: "/partner-with-us",
      cta: "Explore Partnerships",
      icon: Globe,
    },
    {
      badge: "Practitioners",
      question: "Technical Expert?",
      desc: "Join our vetted expert roster across 14 development disciplines for upcoming sovereign assignments.",
      href: "/experts",
      cta: "Join Expert Network",
      icon: Users,
    },
  ];

  return (
    <section className={`bg-[#07131e] px-6 md:px-12 py-16 md:py-24 text-white border-t border-white/10 ${className}`} aria-labelledby="cta-band-heading">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl mb-12">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9BC2F5]">
            Next Steps
          </span>
          <h2 id="cta-band-heading" className="mt-2.5 text-[30px] sm:text-[34px] md:text-[38px] font-bold tracking-tight text-white leading-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3.5 text-[15px] sm:text-[16px] leading-relaxed text-gray-300">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pathways.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.question}
                className="group rounded-[24px] bg-white/5 border border-white/10 p-8 flex flex-col justify-between hover:bg-white/[0.08] hover:border-[#2F5FA8]/50 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#9BC2F5]">
                      {p.badge}
                    </span>
                    <Icon className="w-5 h-5 text-[#9BC2F5]/70" />
                  </div>
                  <h3 className="text-[20px] font-bold text-white tracking-tight">
                    {p.question}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-300">
                    {p.desc}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-2 text-[14px] font-semibold text-white group-hover:text-[#9BC2F5] transition-colors"
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

