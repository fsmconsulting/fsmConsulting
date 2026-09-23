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
  /**
   * Brightness variant: "bright" uses lighter, higher-clarity overlays;
   * "standard" uses deeper contrast. Default is "bright".
   */
  variant?: "standard" | "bright";
}

/**
 * Continuous full-bleed photographic hero background.
 * Delivers natural documentary African infrastructure and sector imagery
 * with calibrated directional gradients for typography readability.
 */
export default function HeroBackground({
  src = "/",
  alt = "African development and urban infrastructure landscape",
  className = "",
  imageClassName = "object-cover object-center opacity-100 brightness-[1.06] contrast-[1.04]",
  priority = true,
  gradientDirection = "right-to-left",
  variant = "bright",
}: HeroBackgroundProps = {}) {
  const isBright = variant === "bright";

  const desktopGradient = isBright
    ? gradientDirection === "right-to-left"
      ? "linear-gradient(90deg, rgba(7, 19, 30, 0.76) 0%, rgba(7, 19, 30, 0.52) 38%, rgba(7, 19, 30, 0.2) 68%, transparent 100%)"
      : "linear-gradient(270deg, rgba(7, 19, 30, 0.76) 0%, rgba(7, 19, 30, 0.52) 38%, rgba(7, 19, 30, 0.2) 68%, transparent 100%)"
    : gradientDirection === "right-to-left"
    ? "linear-gradient(90deg, rgba(7, 19, 30, 0.90) 0%, rgba(7, 19, 30, 0.75) 38%, rgba(7, 19, 30, 0.45) 62%, rgba(7, 19, 30, 0.15) 85%, transparent 100%)"
    : "linear-gradient(270deg, rgba(7, 19, 30, 0.90) 0%, rgba(7, 19, 30, 0.75) 38%, rgba(7, 19, 30, 0.45) 62%, rgba(7, 19, 30, 0.15) 85%, transparent 100%)";

  const mobileGradient = isBright
    ? "linear-gradient(180deg, rgba(7, 19, 30, 0.55) 0%, rgba(7, 19, 30, 0.68) 50%, rgba(7, 19, 30, 0.8) 100%)"
    : "linear-gradient(180deg, rgba(7, 19, 30, 0.75) 0%, rgba(7, 19, 30, 0.85) 50%, rgba(7, 19, 30, 0.94) 100%)";

  const vignetteGradient = isBright
    ? "linear-gradient(180deg, rgba(7, 19, 30, 0.45) 0%, transparent 18%, transparent 82%, rgba(7, 19, 30, 0.45) 100%)"
    : "linear-gradient(180deg, rgba(7, 19, 30, 0.6) 0%, transparent 22%, transparent 78%, rgba(7, 19, 30, 0.8) 100%)";

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

      {/* Desktop directional overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{ background: desktopGradient }}
      />

      {/* Mobile directional overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: mobileGradient }}
      />

      {/* Subtle top & bottom integration vignettes */}
      <div
        className="absolute inset-0"
        style={{ background: vignetteGradient }}
      />
    </div>
  );
}
