import Image from "next/image";

/**
 * Development Partners & Financing Institutions Strip
 * Matches Conceptzilla Reference (media_1789744082265.webp & media_1789744082327.webp):
 * Centered headline, balanced logo grid, and slider indicator.
 */
const funders = [
  { name: "World Bank Group", src: "/logos/worldBankLogo.jpeg", width: 140, height: 44 },
  { name: "African Development Bank", src: "/logos/ADBGLogo.jpeg", width: 130, height: 44 },
  { name: "Islamic Development Bank", src: "/logos/ISDBLogo.jpeg", width: 120, height: 44 },
  { name: "USAID", src: "/logos/USAIDLogo.jpeg", width: 110, height: 44 },
  { name: "UK FCDO", src: "/logos/UKFCDOLogo.jpeg", width: 110, height: 44 },
  { name: "European Union", src: "/logos/EULogo.jpeg", width: 85, height: 44 },
  { name: "GIZ", src: "/logos/GIZLogo.jpeg", width: 100, height: 44 },
  { name: "United Nations Agencies", src: "/logos/UNALogo.jpeg", width: 75, height: 44 },
];

export default function FunderLogoStrip() {
  return (
    <section
      className="bg-white py-16 px-6 md:px-12 md:py-24 border-t border-navy/5"
      aria-label="Supported development financing institutions"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Centered Headline matching reference */}
        <h2 className="text-[22px] md:text-[28px] font-semibold text-navy tracking-tight max-w-2xl mx-auto">
          Supporting projects financed by global development partners
        </h2>

        {/* Dignified Logo Grid */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-4 md:gap-x-12">
          {funders.map((funder) => (
            <div
              key={funder.name}
              className="flex h-12 w-full items-center justify-center p-2"
              title={funder.name}
            >
              <Image
                src={funder.src}
                alt={funder.name}
                width={funder.width}
                height={funder.height}
                className="max-h-10 w-auto object-contain mix-blend-multiply opacity-80 transition-opacity duration-200 hover:opacity-100"
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* Carousel indicator dashes matching reference */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <span className="h-1 w-6 rounded-full bg-navy" />
          <span className="h-1 w-2 rounded-full bg-navy/20" />
          <span className="h-1 w-2 rounded-full bg-navy/20" />
        </div>
      </div>
    </section>
  );
}
