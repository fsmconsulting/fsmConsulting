import { vision, mission } from "@/data/companyData";

export default function VisionMission() {
  return (
    <section className="bg-sand py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 md:px-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="mb-4 font-serif text-[24px] font-medium text-navy">
            Our Vision
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink/75">
            {vision}
          </p>
        </div>
        <div>
          <h2 className="mb-4 font-serif text-[24px] font-medium text-navy">
            Our Mission
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink/75">
            {mission}
          </p>
        </div>
      </div>
    </section>
  );
}
