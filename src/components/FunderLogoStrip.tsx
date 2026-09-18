import Image from "next/image";

const funders = [
  { name: "World Bank Group", src: "/logos/worldBankLogo.jpeg", width: 150, height: 48 },
  { name: "African Development Bank (AfDB)", src: "/logos/ADBGLogo.jpeg", width: 140, height: 48 },
  { name: "Islamic Development Bank (IsDB)", src: "/logos/ISDBLogo.jpeg", width: 130, height: 48 },
  { name: "USAID", src: "/logos/USAIDLogo.jpeg", width: 110, height: 48 },
  { name: "GIZ", src: "/logos/GIZLogo.jpeg", width: 110, height: 48 },
  { name: "European Union", src: "/logos/EULogo.jpeg", width: 90, height: 48 },
  { name: "FCDO / UK Government", src: "/logos/UKFCDOLogo.jpeg", width: 120, height: 48 },
  { name: "United Nations Agencies", src: "/logos/UNALogo.jpeg", width: 75, height: 48 },
];

export default function FunderLogoStrip() {
  // Duplicate array so it seamlessly loops indefinitely
  const duplicatedFunders = [...funders, ...funders];

  return (
    <section
      className="border-y border-navy/10 bg-white py-8 px-4 sm:px-6 md:px-10 overflow-hidden"
      aria-label="Supported development financing frameworks"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 flex flex-col items-center justify-between gap-3 text-center md:flex-row md:items-baseline md:text-left">
          <p className="max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            Supporting projects financed across major multilateral, bilateral, and sovereign development frameworks:
          </p>
          <span className="hidden font-mono text-[11px] text-ink-muted/70 md:inline">
            Advisory &middot; Assurance &middot; Verification
          </span>
        </div>

        {/* Infinite looping horizontal marquee with edge fade masks */}
        <div className="relative w-full overflow-hidden">
          {/* Left gradient fade mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-28 bg-gradient-to-r from-white to-transparent" />

          {/* Right gradient fade mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-28 bg-gradient-to-l from-white to-transparent" />

          {/* Marquee Track */}
          <div className="animate-marquee-infinite flex items-center gap-12 sm:gap-16 py-1">
            {duplicatedFunders.map((funder, idx) => (
              <div
                key={`${funder.name}-${idx}`}
                className="flex h-12 shrink-0 items-center justify-center px-4"
                title={funder.name}
              >
                <Image
                  src={funder.src}
                  alt={funder.name}
                  width={funder.width}
                  height={funder.height}
                  className="max-h-9 w-auto object-contain mix-blend-multiply opacity-75 transition-opacity duration-200 hover:opacity-100"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

