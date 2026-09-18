import Image from "next/image";

interface HeroBackgroundProps {
  src?: string;
  alt?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  /**
   * Direction of the dark-to-light gradient overlay on desktop.
   * "right-to-left" (default) matches the homepage hero.
   */
  gradientDirection?: "right-to-left" | "left-to-right";
}

/**
 * Continuous full-bleed photographic hero background.
 * Delivers natural documentary African infrastructure and sector imagery
 * with calibrated directional gradients for typography readability (dark fade on left/text side to light on right).
 */
export default function HeroBackground({
  src = "/",
  alt = "African development and urban infrastructure landscape",
  className = "",
  imageClassName = "object-cover object-center opacity-85",
  priority = true,
  gradientDirection = "right-to-left",
}: HeroBackgroundProps = {}) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-navy ${className}`}>
      {/* Full-bleed photography */}
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={imageClassName}
      />

      {/* Desktop directional overlay: gradient direction based on prop */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            gradientDirection === "right-to-left"
              ? "linear-gradient(90deg, rgba(7, 19, 30, 0.94) 0%, rgba(7, 19, 30, 0.86) 38%, rgba(7, 19, 30, 0.55) 62%, rgba(7, 19, 30, 0.2) 85%, rgba(7, 19, 30, 0.05) 100%)"
              : "linear-gradient(270deg, rgba(7, 19, 30, 0.94) 0%, rgba(7, 19, 30, 0.86) 38%, rgba(7, 19, 30, 0.55) 62%, rgba(7, 19, 30, 0.2) 85%, rgba(7, 19, 30, 0.05) 100%)",
        }}
      />

      {/* Mobile directional overlay: Top-to-bottom density gradient */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(7, 19, 30, 0.84) 0%, rgba(7, 19, 30, 0.92) 50%, rgba(7, 19, 30, 0.98) 100%)",
        }}
      />

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

