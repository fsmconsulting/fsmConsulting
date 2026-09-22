import Link from "next/link";

export interface SplitCardItem {
  tag?: string;
  title: string;
  desc: string;
  href?: string;
  linkText?: string;
}

export interface SplitCardsProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cards: SplitCardItem[];
  className?: string;
  columns?: 2 | 3;
}

/**
 * SplitCards (Conceptzilla Prism Grammar)
 * Left column: Section title & narrative
 * Right column: 2x2 (or 3) grid of light neutral cards (#F4F5F7) with rounded-[20px] corners.
 */
export default function SplitCards({
  eyebrow,
  title,
  subtitle,
  cards,
  className = "",
  columns = 2,
}: SplitCardsProps) {
  const gridColsCls = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";

  return (
    <div className={`grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-start ${className}`}>
      {/* Left Column: Title & Description */}
      <div className="lg:col-span-4">
        {eyebrow && (
          <span className="block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8] mb-2.5">
            {eyebrow}
          </span>
        )}
        <h2 className="text-[30px] sm:text-[34px] md:text-[38px] font-bold text-[#07131e] tracking-tight leading-[1.15]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-[15px] sm:text-[16px] leading-relaxed text-[#5A6876]">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Column: Grid of Canvas Cards */}
      <div className={`lg:col-span-8 grid grid-cols-1 ${gridColsCls} gap-5 md:gap-6`}>
        {cards.map((card) => (
          <div
            key={card.title}
            className="group rounded-[20px] bg-[#F4F5F7] p-8 md:p-9 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md border border-gray-200/50"
          >
            <div>
              {card.tag && (
                <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8] font-semibold mb-2">
                  {card.tag}
                </span>
              )}
              <h3 className="text-[18px] font-semibold text-[#07131e] tracking-tight">
                {card.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-[#5A6876]">
                {card.desc}
              </p>
            </div>

            {card.href && (
              <div className="mt-8">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#07131e] hover:text-[#2F5FA8] transition-colors"
                >
                  <span>{card.linkText || "Learn More"}</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">&rarr;</span>
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

