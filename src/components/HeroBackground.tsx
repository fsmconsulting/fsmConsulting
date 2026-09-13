import Image from "next/image";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-navy">
      {/* Background Image: HeroBg behind the animation */}
      <div className="absolute inset-0">
        <Image
          src="/HeroBg.webp"
          alt="FSM Consulting hero background"
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
  );
}
