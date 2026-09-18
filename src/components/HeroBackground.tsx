import Image from "next/image";

/**
 * Continuous full-bleed photographic hero background.
 * Delivers natural documentary African infrastructure imagery
 * with calibrated directional gradients for typography readability.
 */
export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-navy">
      {/* Background Image: Aerial urban and infrastructure development landscape */}
      <div className="absolute inset-0">
        <Image
          src="/HeroBg.webp"
          alt="African development and infrastructure landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-85"
        />
      </div>
      {/* Full-bleed photography */}
      <Image
        src="/HeroBg.webp"
        alt="African development and urban infrastructure landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-85"
      />

      {/* Controlled editorial overlay: Darkens left side for text clarity while keeping photography natural on right */}
      {/* Desktop directional overlay: Left-to-right density gradient */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(7, 19, 30, 0.96) 0%, rgba(7, 19, 30, 0.88) 38%, rgba(7, 19, 30, 0.65) 60%, rgba(7, 19, 30, 0.25) 85%, rgba(7, 19, 30, 0.1) 100%)",
            "linear-gradient(90deg, rgba(7, 19, 30, 0.94) 0%, rgba(7, 19, 30, 0.86) 38%, rgba(7, 19, 30, 0.55) 62%, rgba(7, 19, 30, 0.2) 85%, rgba(7, 19, 30, 0.05) 100%)",
        }}
      />

      {/* Mobile overlay: vertical gradient for readability */}
      {/* Mobile directional overlay: Top-to-bottom density gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7, 19, 30, 0.82) 0%, rgba(7, 19, 30, 0.94) 50%, rgba(7, 19, 30, 0.98) 100%)",
            "linear-gradient(180deg, rgba(7, 19, 30, 0.84) 0%, rgba(7, 19, 30, 0.92) 50%, rgba(7, 19, 30, 0.98) 100%)",
        }}
      />

      {/* Subtle top & bottom vignette to bind smoothly with header and following section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07131e]/60 via-transparent to-[#07131e]/90" />
      {/* Subtle top & bottom integration vignettes */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(7, 19, 30, 0.7) 0%, transparent 22%, transparent 78%, rgba(7, 19, 30, 0.96) 100%)",
        }}
      />
    </div>
  );
}
