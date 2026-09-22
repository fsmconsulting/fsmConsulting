import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";

export interface InteriorHeroProps {
  eyebrow?: string;
  breadcrumbs?: Array<{ label: string; href?: string }>;
  title: React.ReactNode;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
}

/**
 * InteriorHero (Conceptzilla "Prism" Pattern)
 * - Same photographic edge-to-edge treatment as homepage hero, ~60% height
 * - Desktop: Edge-to-edge photo with left-to-right gradient, bold 2-line headline, subtitle, white pill CTA
 * - Mobile: Split photo on top (~38vh), crisp white bottom sheet with rounded-t-[32px], dark headline, brand blue CTA
 * - Strictly NO stat blocks
 */
export default function InteriorHero({
  eyebrow,
  breadcrumbs,
  title,
  subtitle,
  ctaText,
  ctaHref,
  imageSrc = "/HeroBg.webp",
}: InteriorHeroProps) {
  return (
    <header className="relative w-full bg-[#07131e]">
      {/* ══════════════════════════════════════════════════════════
          DESKTOP HERO (~60% of Homepage Hero Height)
          Hidden on mobile, block on lg
      ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:relative lg:flex lg:min-h-[460px] lg:flex-col lg:justify-between overflow-hidden">
        {/* Full-bleed Edge-to-Edge Architectural Photography */}
        <div className="absolute inset-0 z-0">
          <Image
            src={imageSrc}
            alt="FSM Consulting Institutional Presence"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          {/* Directional left-to-right density gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07131e]/95 via-[#07131e]/85 to-[#07131e]/40" />
        </div>

        {/* Integrated Desktop Nav */}
        <div className="relative z-20 w-full">
          <Nav transparent={true} />
        </div>

        {/* Hero Editorial Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-8 lg:px-12 pt-28 pb-16">
          {/* Breadcrumb / Eyebrow */}
          {(breadcrumbs || eyebrow) && (
            <div className="mb-4 flex items-center gap-2">
              {breadcrumbs ? (
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-white/70">
                  {breadcrumbs.map((bc, idx) => (
                    <span key={bc.label} className="flex items-center gap-2">
                      {idx > 0 && <span className="text-white/40">/</span>}
                      {bc.href ? (
                        <Link href={bc.href} className="hover:text-white transition-colors">
                          {bc.label}
                        </Link>
                      ) : (
                        <span className="text-[#9BC2F5] font-semibold">{bc.label}</span>
                      )}
                    </span>
                  ))}
                </nav>
              ) : (
                <span className="inline-flex items-center rounded-full bg-white/10 px-3.5 py-1 text-[11px] font-mono font-medium uppercase tracking-[0.18em] text-[#9BC2F5] backdrop-blur-xs border border-white/15">
                  {eyebrow}
                </span>
              )}
            </div>
          )}

          {/* 2-line Bold Headline */}
          <h1 className="max-w-4xl text-[38px] lg:text-[48px] xl:text-[54px] font-bold tracking-tight text-white leading-[1.12]">
            {title}
          </h1>

          {/* Restrained Subtitle */}
          {subtitle && (
            <p className="mt-4 max-w-[54ch] text-[16px] lg:text-[17.5px] leading-relaxed text-white/85">
              {subtitle}
            </p>
          )}

          {/* Optional White Pill CTA */}
          {ctaText && ctaHref && (
            <div className="mt-7">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[14.5px] font-semibold text-[#07131e] shadow-lg hover:bg-gray-100 transition-all duration-200"
              >
                <span>{ctaText}</span>
                <span className="text-[#2F5FA8]">&rarr;</span>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          MOBILE HERO (Split Photo Top + White Bottom Sheet)
          Visible below lg
      ══════════════════════════════════════════════════════════ */}
      <div className="flex flex-col lg:hidden">
        {/* Top Half: Photographic treatment (~36vh) */}
        <div className="relative h-[36vh] min-h-[260px] w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt="FSM Consulting Institutional Background"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07131e]/90 via-[#07131e]/40 to-transparent" />

          {/* Integrated Nav for Mobile */}
          <div className="relative z-20">
            <Nav transparent={true} />
          </div>
        </div>

        {/* Bottom Half: Crisp White Sheet rounding up with rounded-t-[32px] */}
        <div className="relative z-10 -mt-6 rounded-t-[32px] bg-white px-6 pt-8 pb-10 shadow-xl">
          {/* Breadcrumb / Eyebrow */}
          {(breadcrumbs || eyebrow) && (
            <div className="mb-3">
              {breadcrumbs ? (
                <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-gray-400">
                  {breadcrumbs.map((bc, idx) => (
                    <span key={bc.label} className="flex items-center gap-1.5">
                      {idx > 0 && <span>/</span>}
                      {bc.href ? (
                        <Link href={bc.href} className="hover:text-[#07131e]">
                          {bc.label}
                        </Link>
                      ) : (
                        <span className="text-[#2F5FA8] font-semibold">{bc.label}</span>
                      )}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="inline-block font-mono text-[11px] uppercase tracking-wider text-[#2F5FA8] font-semibold">
                  {eyebrow}
                </span>
              )}
            </div>
          )}

          {/* Dark Mobile Headline */}
          <h1 className="text-[28px] sm:text-[32px] font-bold tracking-tight text-[#07131e] leading-[1.18]">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-3 text-[14.5px] leading-relaxed text-[#5A6876]">
              {subtitle}
            </p>
          )}

          {/* Brand Blue Full-Width Mobile Button */}
          {ctaText && ctaHref && (
            <div className="mt-6">
              <Link
                href={ctaHref}
                className="block w-full rounded-full bg-[#2F5FA8] py-3.5 px-6 text-center text-[15px] font-semibold text-white shadow-md hover:bg-[#264E8C] transition-colors"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

