const channels = [
  {
    title: "Direct Corporate Presence",
    tag: "Corporate Footprint",
    desc: "Assignments delivered directly through FSM Consulting Limited's established corporate, operational, and financial structures in Nigeria.",
  },
  {
    title: "Strategic Partnerships & Consortium Access",
    tag: "Institutional Alliances",
    desc: "Country-level delivery supported through vetted partnerships, consortium arrangements, local professional firms, and implementation organizations.",
  },
  {
    title: "Multidisciplinary Professional Network",
    tag: "Specialist Roster",
    desc: "Access to accredited national, regional, and international consultants, technical specialists, researchers, and field practitioners mobilized on demand.",
  },
  {
    title: "International Knowledge Exchange & South-South Cooperation",
    tag: "Cross-Regional Learning",
    desc: "Facilitation of comparative learning, peer exchange, and technical cooperation between African institutions and global experts, including Africa-Asia exchange.",
  },
];

const pipelineStages = [
  { step: "01", title: "Client Requirement", desc: "Diagnostic scoping & terms of reference alignment" },
  { step: "02", title: "FSM Technical Leadership", desc: "Strategy formulation & project management architecture" },
  { step: "03", title: "Global / Regional Expertise", desc: "Mobilization of subject matter leaders & sector experts" },
  { step: "04", title: "Country Partner & Local Access", desc: "Institutional grounding & stakeholder coordination" },
  { step: "05", title: "Consultant Mobilization", desc: "Rapid deployment with full operational readiness" },
  { step: "06", title: "Field & Implementation Support", desc: "Execution oversight, data collection & logistics management" },
  { step: "07", title: "Quality Assurance", desc: "Independent review against international standards" },
  { step: "08", title: "Measurable Results", desc: "Validated development outcomes & sustainable impact" },
];

const logistics = [
  "Pre-deployment planning & assignment mobilization",
  "Visa and immigration documentation support",
  "Invitation letters & assignment documentation",
  "Airport arrival & departure coordination",
  "Accommodation & secure lodging arrangements",
  "Local transportation & movement coordination",
  "Security, safety & risk protocols",
  "In-country orientation & assignment briefings",
  "Coordination with local counterparts & ministries",
  "Field mission & project site logistics",
  "Stakeholder meeting coordination",
  "Translation & interpretation services",
  "Local consultant, enumerator & field team mobilization",
  "Emergency, health & contingency coordination",
];

export default function DeliveryModel() {
  return (
    <section className="border-b border-navy/10 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">

        {/* Section Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Operating Architecture &middot; Geographic Reach
            </span>
            <h2 className="mt-3 font-sans text-[32px] font-bold leading-tight text-navy md:text-[42px]">
              Built for seamless cross-border delivery across Africa.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-ink/80">
              Headquartered in Abuja, Nigeria, FSM Consulting Limited combines strong national implementation capacity with a growing regional network that enables us to connect clients with the right expertise, partners, and implementation capacity across Africa and international markets.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-ink/70">
              Our network provides access to expertise and delivery relationships across <strong className="font-semibold text-navy">West Africa</strong> (Nigeria, Senegal, Sierra Leone), <strong className="font-semibold text-navy">Central Africa</strong> (Cameroon), and <strong className="font-semibold text-navy">East Africa</strong> (Kenya, Uganda), with active expansion across the continent and inter-regional Africa-Asia technical cooperation.
            </p>
          </div>

          <div className="rounded-[var(--radius-card)] border border-navy/10 bg-sand p-8">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-blue-accent">
              The FSM Mantra
            </span>
            <h3 className="mt-2 font-sans text-[24px] font-bold text-navy">
              Global Expertise. Regional Access. Local Capability.
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-ink/75">
              We remove avoidable operational barriers so that technical experts can concentrate fully on delivering technical excellence where it matters most: at the frontline of development.
            </p>
            <div className="mt-6 border-t border-navy/10 pt-4 font-mono text-xs text-ink/60">
              Coverage: 36 Nigerian States + FCT &bull; West, Central &amp; East Africa
            </div>
          </div>
        </div>

        {/* 4 Delivery Channels */}
        <div className="mt-20">
          <div className="border-b border-navy/15 pb-4">
            <span className="text-[12px] font-mono font-semibold uppercase tracking-wider text-blue-accent">
              Four Channels of Access
            </span>
            <h3 className="mt-1 font-sans text-[24px] font-bold text-navy md:text-[30px]">
              Complementary Delivery Mechanisms
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((chan) => (
              <div
                key={chan.title}
                className="flex flex-col justify-between rounded-[var(--radius-card-sm)] border border-navy/10 bg-white p-6 transition-all duration-200 hover:border-navy hover:shadow-xs"
              >
                <div>
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-1 text-[11px] font-medium text-navy">
                    {chan.tag}
                  </span>
                  <h4 className="mt-3 font-sans text-[18px] font-semibold text-navy">
                    {chan.title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink/70">
                    {chan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Stage Delivery Pipeline */}
        <div className="mt-20 rounded-[var(--radius-card)] border border-navy/10 bg-navy p-8 text-white md:p-12">
          <div className="mb-10 text-center">
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-bright">
              End-to-End Pipeline
            </span>
            <h3 className="mt-2 font-sans text-[26px] font-bold text-white md:text-[34px]">
              The FSM Cross-Border Delivery Model
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-[14.5px] text-white/70">
              From requirement definition to verified measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineStages.map((stage) => (
              <div
                key={stage.step}
                className="relative rounded-[var(--radius-card-sm)] border border-white/10 bg-white/5 p-5 transition-colors hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white/90">
                    STAGE {stage.step}
                  </span>
                  <span className="text-white/30">&rarr;</span>
                </div>
                <h4 className="mt-3 font-sans text-[16.5px] font-semibold text-white">
                  {stage.title}
                </h4>
                <p className="mt-1 text-[13px] text-white/70">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobilization & Operational Support */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 rounded-[var(--radius-card)] border border-navy/10 bg-sand p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-accent">
              Operational Infrastructure
            </span>
            <h3 className="mt-2 font-sans text-[26px] font-bold text-navy md:text-[32px]">
              We don&rsquo;t just mobilize expertise. We mobilize the systems needed to deliver.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/75">
              Successful technical delivery depends not only on the caliber of expertise deployed, but also on swift mobilization, field readiness, safety protocols, and in-country logistical coordination.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-ink/70">
              FSM coordinates end-to-end assignment mobilization across Nigeria and regional hubs, ensuring teams hit the ground running with zero downtime.
            </p>
          </div>

          <div className="rounded-[var(--radius-card-sm)] border border-navy/10 bg-white p-6 shadow-xs">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-blue-accent">
              Comprehensive Field Support
            </span>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {logistics.map((item) => (
                <div key={item} className="flex items-start gap-2 py-1 text-[12.5px] text-navy">
                  <svg className="mt-0.5 h-3.5 w-3.5 shrink-0 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
