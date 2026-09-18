import Image from "next/image";

const funders = [
  {
    name: "World Bank Group",
    src: "/logos/worldBankLogo.jpeg",
    width: 160,
    height: 60,
  },
  {
    name: "African Development Bank (AfDB)",
    src: "/logos/ADBGLogo.jpeg",
    width: 160,
    height: 60,
  },
  {
    name: "Islamic Development Bank (IsDB)",
    src: "/logos/ISDBLogo.jpeg",
    width: 140,
    height: 60,
  },
  {
    name: "USAID",
    src: "/logos/USAIDLogo.jpeg",
    width: 120,
    height: 60,
  },
  {
    name: "GIZ",
    src: "/logos/GIZLogo.jpeg",
    width: 120,
    height: 60,
  },
  {
    name: "European Union",
    src: "/logos/EULogo.jpeg",
    width: 100,
    height: 60,
  },
  {
    name: "FCDO / UK Government",
    src: "/logos/UKFCDOLogo.jpeg",
    width: 130,
    height: 60,
  },
  {
    name: "United Nations Agencies",
    src: "/logos/UNALogo.jpeg",
    width: 80,
    height: 60,
  },
  {
    name: "Federal & State Governments",
    src: "/logos/federalAndStateGovernmentLogo.jpeg",
    width: 140,
    height: 60,
  },
  {
    name: "International NGOs",
    src: "/logos/interntionalNGOSLogo.jpeg",
    width: 140,
    height: 60,
  },
  {
    name: "Private Sector Organisations",
    src: "/logos/privateSectorOrgLogo.jpeg",
    width: 140,
    height: 60,
  },
];

// Duplicate the array for seamless infinite loop
const track = [...funders, ...funders];

export default function FunderLogoStrip() {
  return (
    <section className="funder-strip-section" aria-label="Funders and financing partners">
      {/* Eyebrow label */}
      <p className="funder-strip-eyebrow">
        FSM Consulting Limited specializes in supporting projects financed by
      </p>

      {/* Scroll wrapper — masks overflow */}
      <div className="funder-strip-mask" aria-hidden="true">
        {/* Moving track */}
        <div className="funder-strip-track">
          {track.map((funder, idx) => (
            <div key={`${funder.name}-${idx}`} className="funder-logo-item">
              <Image
                src={funder.src}
                alt={funder.name}
                width={funder.width}
                height={funder.height}
                className="funder-logo-img"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
