import Image from "next/image";

/**
 * Development Partners & Financing Institutions Strip
 * Matches Conceptzilla Reference (media_1789744082265.webp & media_1789744082327.webp):
 * Centered headline ("20+ years advising Fortune 500 clients" style), balanced logo grid, and slider indicator.
 */
const funders = [
  { name: "World Bank Group", src: "/logos/worldBankLogo.jpeg", width: 150, height: 48 },
  { name: "African Development Bank (AfDB)", src: "/logos/ADBGLogo.jpeg", width: 140, height: 48 },
  { name: "Islamic Development Bank (IsDB)", src: "/logos/ISDBLogo.jpeg", width: 130, height: 48 },
  { name: "African Development Bank", src: "/logos/ADBGLogo.jpeg", width: 140, height: 48 },
  { name: "Islamic Development Bank", src: "/logos/ISDBLogo.jpeg", width: 130, height: 48 },
  { name: "United Nations Agencies", src: "/logos/UNALogo.jpeg", width: 85, height: 48 },
  { name: "European Union", src: "/logos/EULogo.jpeg", width: 95, height: 48 },
  { name: "UK FCDO", src: "/logos/UKFCDOLogo.jpeg", width: 120, height: 48 },
  { name: "USAID", src: "/logos/USAIDLogo.jpeg", width: 110, height: 48 },
  { name: "GIZ", src: "/logos/GIZLogo.jpeg", width: 110, height: 48 },
  { name: "European Union", src: "/logos/EULogo.jpeg", width: 90, height: 48 },
  { name: "FCDO / UK Government", src: "/logos/UKFCDOLogo.jpeg", width: 120, height: 48 },
  { name: "United Nations Agencies", src: "/logos/UNALogo.jpeg", width: 75, height: 48 },
];

export default function FunderLogoStrip() {
  return (
    <section
      className="border-y border-navy/10 bg-white py-12 px-6 md:px-10"
      aria-label="Supported development financing frameworks"
      className="bg-white py-16 px-6 md:px-12 md:py-24 border-t border-navy/5"
      aria-label="Supported development financing institutions"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-baseline">
          <p className="max-w-xl font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted text-center md:text-left">
            Supporting projects financed across major multilateral, bilateral, and sovereign development frameworks:
          </p>
          <span className="hidden font-mono text-[11px] text-ink-muted/70 md:inline">
            Advisory &middot; Assurance &middot; Verification
          </span>
        </div>
      <div className="mx-auto max-w-5xl text-center">
        {/* Centered Headline matching reference: "20+ years advising Fortune 500 clients" */}
        <h2 className="text-[22px] md:text-[28px] font-semibold text-navy tracking-tight max-w-2xl mx-auto">
          Supporting projects financed by global development partners
        </h2>

        {/* Dignified static logo grid */}
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-8">
        {/* Dignified Logo Grid */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4 md:gap-x-12">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="flex h-12 w-full items-center justify-center p-1"
              className="flex h-12 w-full items-center justify-center p-2"
              title={funder.name}
            >
              <Image
                src={funder.src}
                alt={funder.name}
                width={funder.width}
                height={funder.height}
                className="max-h-9 w-auto object-contain mix-blend-multiply opacity-75 transition-opacity duration-200 hover:opacity-100"
                className="max-h-10 w-auto object-contain mix-blend-multiply opacity-80 transition-opacity duration-200 hover:opacity-100"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Carousel indicator dashes matching reference media_1789744082265.webp */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="h-1 w-6 rounded-full bg-navy" />
          <span className="h-1 w-2 rounded-full bg-navy/20" />
          <span className="h-1 w-2 rounded-full bg-navy/20" />
        </div>
      </div>
    </section>
  );
}
