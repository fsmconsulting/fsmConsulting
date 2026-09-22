import Image from "next/image";

/**
 * Development Partners & Financing Institutions Strip
 * Matches Conceptzilla Reference (media_1789744082265.webp & media_1789744082327.webp):
 * Centered headline, balanced logo grid, disclaimer caption, and slider indicator dots.
 */
const funders = [
  { name: "World Bank Group", src: "/logos/worldBankLogo.jpeg", width: 140, height: 44 },
  { name: "African Development Bank", src: "/logos/ADBGLogo.jpeg", width: 130, height: 44 },
  { name: "Islamic Development Bank", src: "/logos/ISDBLogo.jpeg", width: 120, height: 44 },
  { name: "European Union", src: "/logos/EULogo.jpeg", width: 85, height: 44 },
  { name: "United Nations Agencies", src: "/logos/UNALogo.jpeg", width: 75, height: 44 },
  { name: "UK FCDO", src: "/logos/UKFCDOLogo.jpeg", width: 110, height: 44 },
];

export default function FunderLogoStrip() {
  return (
    <section
      className="bg-white py-16 px-6 md:px-12 md:py-24 border-t border-navy/5"
      aria-label="Supported development financing institutions"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Centered Headline matching reference */}
        <h2 className="text-[22px] md:text-[28px] font-bold text-[#07131e] tracking-tight max-w-2xl mx-auto">
          Built for projects financed by global development partners
        </h2>

        {/* Dignified Logo Grid */}
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 md:gap-x-10">
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

        {/* Caption under the grid */}
        <p className="mt-8 text-[13px] leading-relaxed text-gray-500 max-w-2xl mx-auto">
          FSM supports assignments within the frameworks of these institutions. Logos indicate financing environments, not client endorsements.
        </p>

        {/* Carousel indicator dashes matching reference */}
        <div className="mt-10 flex items-center justify-center gap-2">
          <span className="h-1 w-6 rounded-full bg-[#07131e]" />
          <span className="h-1 w-2 rounded-full bg-[#07131e]/20" />
          <span className="h-1 w-2 rounded-full bg-[#07131e]/20" />
        </div>
      </div>
    </section>
  );
}
