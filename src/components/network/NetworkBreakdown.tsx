const tiers = [
  {
    label: "Headquarters",
    detail: "Abuja, Federal Capital Territory, Nigeria",
    body: "FSM Consulting Limited is headquartered in Abuja, with national implementation capacity across all 36 Nigerian states and the FCT.",
  },
  {
    label: "Country Partners",
    detail: "Senegal · Sierra Leone · Cameroon · Kenya · Uganda",
    body: "Strategic in-country partnerships that give FSM delivery access and local coordination beyond Nigeria, without implying a corporate office in each location.",
  },
  {
    label: "Professional Network",
    detail: "Multidisciplinary technical bench",
    body: "A curated network of economists, engineers, safeguards specialists, MEAL practitioners, and sector experts assembled around each assignment's requirements.",
  },
  {
    label: "Delivery Access",
    detail: "Africa–Asia technical exchange",
    body: "Cross-border logistics coordination — visas, field mobilization, local consultant engagement — so technical experts can focus on delivery.",
  },
];

export default function NetworkBreakdown() {
  return (
    <section className="bg-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-serif text-[28px] font-normal text-navy md:text-[36px]">
          How the network is structured
        </h2>
        <p className="mt-3 max-w-[60ch] text-[15.5px] leading-relaxed text-ink-muted">
          Four distinct operating tiers designed to deploy specialized technical capability with localized contextual grounding.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {tiers.map((t) => (
            <div key={t.label} className="surface-card border border-navy/10 bg-canvas p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-blue-bright">
                {t.label}
              </p>
              <p className="mt-2 font-serif text-[20px] font-medium text-navy">{t.detail}</p>
              <p className="mt-3 text-[14.5px] leading-relaxed text-ink-muted">{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
