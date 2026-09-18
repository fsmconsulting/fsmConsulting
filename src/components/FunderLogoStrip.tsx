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
  return (
    <section
      className="border-y border-navy/10 bg-white py-12 px-6 md:px-10"
      aria-label="Supported development financing frameworks"
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

        {/* Dignified static logo grid */}
        <div className="mt-8 grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-8">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="flex h-12 w-full items-center justify-center p-1"
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
    </section>
  );
}
