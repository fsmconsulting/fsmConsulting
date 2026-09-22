const clientSegments = [
  {
    category: "International Financial Institutions",
    institutions: [
      "World Bank Group",
      "African Development Bank (AfDB)",
      "Islamic Development Bank (IsDB)",
      "International Finance Corporation (IFC)",
    ],
  },
  {
    category: "Development Partners & Bilaterals",
    institutions: [
      "United Nations Agencies (UNDP, UNICEF, etc.)",
      "European Union (EU)",
      "Foreign, Commonwealth & Development Office (FCDO)",
      "United States Agency for International Development (USAID)",
      "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
      "Development Finance Institutions (DFIs) & Global Foundations",
    ],
  },
  {
    category: "Governments & Public Entities",
    institutions: [
      "Federal Government Ministries, Departments & Agencies (MDAs)",
      "State Governments & Executive Councils",
      "Local Government Authorities",
      "Project Implementation Units (PIUs) & Delivery Secretariats",
    ],
  },
  {
    category: "Private Sector & Institutional Investors",
    institutions: [
      "Private Equity & Infrastructure Investors",
      "Commercial & Development Banks",
      "Infrastructure & Energy Concessionaires",
      "Agribusiness & Industrial Conglomerates",
    ],
  },
  {
    category: "Civil Society & Non-Governmental Organizations",
    institutions: [
      "International & National NGOs",
      "Philanthropic Foundations",
      "Development Networks & Think Tanks",
      "Community Development Associations",
    ],
  },
];

const sectors = [
  "Agriculture & Rural Development",
  "Health Systems Strengthening",
  "Education & Skills Development",
  "Energy, Power & Clean Tech",
  "Water, Sanitation & Hygiene (WASH)",
  "Transport & Urban Infrastructure",
  "Public Financial Management (PFM)",
  "Digital Economy & e-Governance",
  "Climate Resilience & Environment",
  "Trade, Industry & Job Creation",
];

export default function TargetClients() {
  return (
    <section className="bg-white py-20 md:py-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-14">
        
        {/* Header */}
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F5FA8]">
            Institutional Ecosystem &middot; Who We Serve
          </span>
          <h2 className="mt-2 text-[32px] md:text-[42px] font-bold tracking-tight text-[#07131e]">
            Target Client Segments &amp; Sector Expertise
            Clients we are built for
          </h2>
          <p className="mt-3 text-[16px] text-gray-600">
            FSM Consulting Limited focuses on supporting projects, reforms, and programs across public institutions, multilateral and bilateral development entities, and private sector partners.
          </p>
        </div>

        {/* Client Categories */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clientSegments.map((segment) => (
            <div
              key={segment.category}
              className="rounded-[20px] border border-gray-100 bg-[#F4F5F7] p-7 transition-all duration-200 hover:border-[#2F5FA8]/40 hover:shadow-md"
            >
              <div className="border-b border-gray-200/80 pb-3">
                <span className="font-mono text-xs font-semibold text-[#2F5FA8]">
                  TARGET CATEGORY
                </span>
                <h3 className="mt-1 text-[18.5px] font-bold text-[#07131e]">
                  {segment.category}
                </h3>
              </div>
              <ul className="mt-4 space-y-2">
                {segment.institutions.map((inst) => (
                  <li key={inst} className="flex items-start gap-2 text-[13.5px] text-gray-600">
                    <span className="text-[#2F5FA8] font-bold">&rsaquo;</span>
                    <span>{inst}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Priority Sectors Pill Grid */}
        <div className="mt-16 rounded-[24px] border border-gray-100 bg-[#F4F5F7] p-8 md:p-10">
          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#2F5FA8]">
            Multidisciplinary Roster
          </span>
          <h3 className="mt-1 text-[22px] font-bold tracking-tight text-[#07131e]">
            Core Sectoral Coverage
          </h3>
          <p className="mt-2 max-w-2xl text-[14.5px] text-gray-600">
            Our experts bring deep technical depth across key development sectors, aligning global best practices with local operating realities.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            {sectors.map((sec) => (
              <span
                key={sec}
                className="rounded-full border border-gray-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#07131e] transition-colors hover:border-[#2F5FA8] hover:text-[#2F5FA8]"
              >
                {sec}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
