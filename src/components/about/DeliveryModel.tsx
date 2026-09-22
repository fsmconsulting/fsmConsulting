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
    <section className="border-b border-gray-100 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Operating Architecture &middot; Geographic Reach
            </span>
            <h2 className="mt-3 text-[32px] md:text-[42px] font-bold leading-tight tracking-tight text-[#07131e]">
              Built for seamless cross-border delivery across Africa.
            </h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-600">
              Headquartered in Abuja, Nigeria, FSM Consulting Limited combines strong national implementation capacity with a growing regional network that enables us to connect clients with the right expertise, partners, and implementation capacity across Africa and international markets.
            </p>
            <p className="mt-4 text-[15.5px] leading-relaxed text-gray-600">
              Our network provides access to expertise and delivery relationships across <strong className="font-semibold text-[#07131e]">West Africa</strong> (Nigeria, Senegal, Sierra Leone), <strong className="font-semibold text-[#07131e]">Central Africa</strong> (Cameroon), and <strong className="font-semibold text-[#07131e]">East Africa</strong> (Kenya, Uganda), with active expansion across the continent and inter-regional Africa-Asia technical cooperation.
            </p>
          </div>

          <div className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-8">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2F5FA8]">
              The FSM Mantra
            </span>
            <h3 className="mt-2 text-[24px] font-bold tracking-tight text-[#07131e]">
              Global Expertise. Regional Access. Local Capability.
            </h3>
            <p className="mt-4 text-[14.5px] leading-relaxed text-gray-600">
              We remove avoidable operational barriers so that technical experts can concentrate fully on delivering technical excellence where it matters most: at the frontline of development.
            </p>
            <div className="mt-6 border-t border-gray-200/80 pt-4 font-mono text-xs text-gray-500">
              Coverage: 36 Nigerian States + FCT &bull; West, Central &amp; East Africa
            </div>
          </div>
        </div>

        {/* 4 Delivery Channels */}
        <div className="mt-20">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2F5FA8]">
              Four Channels of Access
            </span>
            <h3 className="mt-1 text-[24px] md:text-[30px] font-bold tracking-tight text-[#07131e]">
              Complementary Delivery Mechanisms
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((chan) => (
              <div
                key={chan.title}
                className="flex flex-col justify-between rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-6 transition-all duration-200 hover:border-[#2F5FA8]/40 hover:shadow-md"
              >
                <div>
                  <span className="inline-block rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#07131e] border border-gray-200">
                    {chan.tag}
                  </span>
                  <h4 className="mt-4 text-[18px] font-bold text-[#07131e]">
                    {chan.title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-gray-600">
                    {chan.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 8-Stage Delivery Pipeline */}
        <div className="mt-20 rounded-[24px] border border-white/10 bg-[#07131e] p-8 text-white md:p-12 shadow-xl">
          <div className="mb-10 text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9BC2F5]">
              End-to-End Pipeline
            </span>
            <h3 className="mt-2 text-[26px] md:text-[34px] font-bold tracking-tight text-white">
              The FSM Cross-Border Delivery Model
            </h3>
            <p className="mx-auto mt-2 max-w-2xl text-[14.5px] text-white/75">
              From requirement definition to verified measurable outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pipelineStages.map((stage) => (
              <div
                key={stage.step}
                className="relative rounded-[16px] border border-white/10 bg-white/5 p-5 transition-all hover:border-[#2F5FA8] hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-[#9BC2F5]">
                    STAGE {stage.step}
                  </span>
                  <span className="text-white/40">&rarr;</span>
                </div>
                <h4 className="mt-3 text-[16.5px] font-bold text-white">
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
        <div className="mt-20 grid grid-cols-1 items-center gap-12 rounded-[24px] border border-gray-100 bg-[#F4F5F7] p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
              Operational Infrastructure
            </span>
            <h3 className="mt-2 text-[26px] md:text-[32px] font-bold tracking-tight text-[#07131e]">
              We don&rsquo;t just mobilize expertise. We mobilize the systems needed to deliver.
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-600">
              Successful technical delivery depends not only on the caliber of expertise deployed, but also on swift mobilization, field readiness, safety protocols, and in-country logistical coordination.
            </p>
            <p className="mt-3 text-[14.5px] leading-relaxed text-gray-600">
              FSM coordinates end-to-end assignment mobilization across Nigeria and regional hubs, ensuring teams hit the ground running with zero downtime.
            </p>
          </div>

          <div className="rounded-[20px] border border-gray-200/80 bg-white p-6 shadow-sm">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2F5FA8]">
              Comprehensive Field Support
            </span>
            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {logistics.map((item) => (
                <div key={item} className="flex items-start gap-2 py-1 text-[13px] text-gray-700">
                  <span className="text-[#2F5FA8] font-bold">&check;</span>
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
