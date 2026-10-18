/** Public facts about Global Business Services, rewritten for this site.
 *  Sources: gbs.uz, the firm’s Devex profile, and published assignment summaries.
 *  Edit this file to change copy across every page.
 */

export const company = {
  name: "Global Business Services",
  short: "GBS",
  founded: 2002,
  tagline: "Consultancy services from design to delivery.",
  email: "info@gbs.uz",
  website: "https://gbs.uz",
  address: ["21 Khusnutdin Asomov Street", "Tashkent 100084", "Uzbekistan"],
  phones: [
    { number: "+998 71 235 00 64", label: "Telephone" },
    { number: "+998 71 235 03 08", label: "Telephone" },
    { number: "+998 71 235 88 73", label: "Telephone" },
    { number: "+998 71 235 15 14", label: "Fax" },
  ],
  registrations: [
    { body: "Asian Development Bank", detail: "DACON No. 003966" },
    { body: "Islamic Development Bank", detail: "No. G0772" },
    { body: "World Bank", detail: "Registered consultant" },
    { body: "European Bank for Reconstruction and Development", detail: "Registered consultant" },
  ],
};

export const stats = [
  { value: 2002, label: "Founded in Tashkent" },
  { value: 50, suffix: "+", label: "IFI-financed projects delivered" },
  { value: 100, prefix: "~", label: "Clients on current assignments" },
  { value: 4, label: "Countries where work is underway" },
];

export const financiers = [
  "Asian Development Bank",
  "World Bank",
  "EBRD",
  "AFD",
  "SECO",
  "Islamic Development Bank",
  "KfW",
  "IFC",
];

export const method = [
  {
    n: "01",
    title: "Identify",
    text: "Frame the problem with the client: policy context, assets, institutions, and the constraint that actually matters.",
  },
  {
    n: "02",
    title: "Design",
    text: "Turn that diagnosis into a financeable scope — technical options, costs, safeguards, and an institution that can carry the work.",
  },
  {
    n: "03",
    title: "Deliver",
    text: "Stay with implementation. Procurement, supervision, corporate plans, and the decisions that keep a project moving.",
  },
  {
    n: "04",
    title: "Account",
    text: "Monitor, evaluate, and leave behind systems the utility or ministry can run after the consultants have left.",
  },
];

export const values = [
  {
    title: "Quality",
    text: "The firm’s standard is the durability of the result, not the volume of the report.",
  },
  {
    title: "Sustainability",
    text: "Infrastructure only counts if the institution, the tariff, and the environment can carry it.",
  },
  {
    title: "Trust",
    text: "Long assignments with governments and financiers depend on discretion and straight advice.",
  },
  {
    title: "Commitment",
    text: "GBS stays through the difficult middle of a project, when design meets procurement and politics.",
  },
];

export const services = [
  {
    slug: "financial-advisory",
    title: "Financial & economic advisory",
    kicker: "Finance",
    summary:
      "Cost of service, tariffs, due diligence, and the financial position of utilities that are learning to operate commercially.",
    image:
      "/images/engineering-plans.jpg",
    points: [
      "Cost-of-service and tariff design studies",
      "Financial and economic analysis of investment programmes",
      "Due diligence, feasibility, and tax analysis",
      "Billing, collection, and internal control",
      "Accounting systems aligned to the general ledger",
    ],
  },
  {
    slug: "institutional-reform",
    title: "Institutional reform",
    kicker: "Management",
    summary:
      "Restructuring advice for ministries and state-owned utilities moving from budget entities toward accountable operators.",
    image:
      "/images/civic-street.jpg",
    points: [
      "Corporate development and stakeholder programmes",
      "Revenue and cost strategies for utilities",
      "Organisational design and performance management",
      "Turnaround support for underperforming operators",
      "Capacity building for project implementation units",
    ],
  },
  {
    slug: "engineering",
    title: "Technical consultancy",
    kicker: "Engineering",
    summary:
      "Engineering judgement across the project cycle: options, design review, works supervision, and operational support.",
    image:
      "/images/engineering-plans.jpg",
    points: [
      "Concept and detailed engineering support",
      "Contract and construction supervision",
      "Procurement and disbursement assistance",
      "Asset condition and network planning",
      "Operational troubleshooting for live systems",
    ],
  },
  {
    slug: "project-implementation",
    title: "Project implementation",
    kicker: "Delivery",
    summary:
      "PIU support from mobilisation to completion reports — scope, quality, time, and the cost constraint held together.",
    image:
      "/images/engineering-plans.jpg",
    points: [
      "Project management for IFI-financed programmes",
      "Engineering design coordination",
      "Procurement planning and bid evaluation support",
      "Progress, completion, and facility reports",
      "Handover into ordinary operations",
    ],
  },
  {
    slug: "safeguards",
    title: "Environmental & social studies",
    kicker: "Safeguards",
    summary:
      "Impact assessment, affordability, and the environmental and social management systems financiers expect.",
    image:
      "/images/irrigation.jpg",
    points: [
      "Environmental impact assessment",
      "Social assessment and affordability analysis",
      "Environmental and social management systems",
      "Gender and stakeholder participation plans",
      "Monitoring against lender safeguards",
    ],
  },
  {
    slug: "regulation",
    title: "Policy & regulation",
    kicker: "Policy",
    summary:
      "Sector reviews of policy, institutions, and regulation — the frame in which a single project either works or fails.",
    image:
      "/images/civic-street.jpg",
    points: [
      "Policy, institutional, and regulatory assessments",
      "Targeted regulatory reform for utilities",
      "Service, coverage, and financial performance reviews",
      "Public–private options, including in solid waste",
      "Advice that can be read by a minister and a lender",
    ],
  },
  {
    slug: "operations",
    title: "Utility operations",
    kicker: "Operations",
    summary:
      "Practical support along the utilities value chain: service quality, maintenance, and the commercial habits of a network business.",
    image:
      "/images/water-works.jpg",
    points: [
      "Service and environmental performance",
      "Commercial standing of water companies",
      "Collection, treatment, and disposal chains",
      "Operation and maintenance planning",
      "Training for operating staff and managers",
    ],
  },
  {
    slug: "mis",
    title: "Management information",
    kicker: "Systems",
    summary:
      "Information systems that let a board see the utility clearly — beyond a ledger that only balances itself.",
    image:
      "/images/engineering-plans.jpg",
    points: [
      "Management information for utilities and ministries",
      "Financial management and accounting subsystems",
      "Reporting that supports a strategic decision",
      "Less manual consolidation, clearer records",
      "Systems sized to the institution that will run them",
    ],
  },
];

export const industries = [
  {
    slug: "water",
    title: "Water supply & sanitation",
    summary:
      "The centre of the practice. Network rehabilitation, corporate development of vodokanals, and the long work of making service reliable.",
    image:
      "/images/water-works.jpg",
    points: [
      "Urban water supply and wider network programmes",
      "Sewerage rehabilitation and expansion",
      "Corporate development of municipal utilities",
      "Climate resilience and service sustainability",
      "Completion reporting for multi-tranche facilities",
    ],
  },
  {
    slug: "waste",
    title: "Solid waste",
    summary:
      "Integrated household waste systems: collection, processing, disposal, recycling, and the institutions that have to run them.",
    image:
      "/images/waste-yard.jpg",
    points: [
      "City-wide integrated waste management",
      "Sector preparation for urban investment",
      "Recycling and waste-to-energy options",
      "Cost-effective operation and maintenance",
      "Private participation where it genuinely fits",
    ],
  },
  {
    slug: "energy",
    title: "Power & gas",
    summary:
      "Advisory support where energy utilities face the same institutional questions as water: cost, service, and reform.",
    image:
      "/images/power-yard.jpg",
    points: [
      "Economic and financial analysis",
      "Institutional strengthening",
      "Operational performance",
      "Investment preparation",
      "Safeguards alongside technical work",
    ],
  },
  {
    slug: "agriculture",
    title: "Agriculture & natural resources",
    summary:
      "Resource management assignments where infrastructure, institutions, and rural livelihoods have to be designed together.",
    image:
      "/images/irrigation.jpg",
    points: [
      "Natural resources management",
      "Irrigation-related institutional questions",
      "Economic analysis of rural investments",
      "Social and environmental assessment",
      "Programmes financed with international partners",
    ],
  },
  {
    slug: "health",
    title: "Healthcare",
    summary:
      "Health-sector management support, from equipment and facilities to the systems a public provider needs in order to function.",
    image:
      "/images/clinic-hall.jpg",
    points: [
      "Health management consulting",
      "Facility and medical equipment contexts",
      "Institutional and financial advice",
      "Procurement support",
      "Implementation alongside public clients",
    ],
  },
  {
    slug: "urban",
    title: "Urban infrastructure",
    summary:
      "Cities are the client. Roads, municipal services, and the planning work that sits underneath a capital investment.",
    image:
      "/images/city-dusk.jpg",
    points: [
      "Urban development preparation",
      "Municipal service reform",
      "Transport and civil infrastructure contexts",
      "Multi-sector investment programmes",
      "Coordination across city agencies",
    ],
  },
];

export const projects = [
  {
    id: "samarkand-swm",
    title: "Modernisation of solid waste management in Samarkand",
    country: "Uzbekistan",
    city: "Samarkand",
    sector: "Solid waste",
    role: "Technical assistance to the project implementation unit",
    summary:
      "An integrated household-waste system for Samarkand, built to international practice across collection, processing, and disposal.",
    facts: [
      { label: "Financing", value: "An AFD loan of €23.5 million, signed in December 2016, and an EU grant of €8.25 million." },
      { label: "Published scope", value: "About 200 collection points, 2,100 containers, 70 collection trucks, and a sanitary landfill with sorting." },
      { label: "City at the time", value: "A published note on the same programme puts Samarkand near 600,000 people, generating nearly 600 tonnes of solid waste a day." },
    ],
  },
  {
    id: "adb-sw-sector",
    title: "Solid waste sector development",
    country: "Uzbekistan",
    city: "National",
    sector: "Solid waste",
    role: "TA-9715 UZB · Preparing urban development projects",
    summary:
      "Preparation work to improve collection and disposal, cut volumes through recycling and waste-to-energy, and put operation on a cost-effective footing, including public–private options.",
  },
  {
    id: "western-uz-water",
    title: "Western Uzbekistan water supply development",
    country: "Uzbekistan",
    city: "Republic of Karakalpakstan",
    sector: "Water supply & sanitation",
    role: "Project management consultant · Loan No. 3659-UZB",
    summary:
      "Support to government for better water supply in Karakalpakstan: network upgrading, climate resilience, institutional capacity, and a utility that can sustain the service.",
    facts: [
      { label: "Financing", value: "ADB concessional loan of US$145 million (Loan 3659-UZB)." },
      { label: "Published reach", value: "ADB describes the benefit as reliable, metered water for 388,000 people in six districts and 116 rural settlements." },
      { label: "Works in the design", value: "The project technical analysis plans 315 km of distribution mains and 921 km of distribution network." },
    ],
  },
  {
    id: "fergana-sanitation",
    title: "Water supply and sanitation investment programme",
    country: "Uzbekistan",
    city: "Fergana, Margilan, Tashlak",
    sector: "Water supply & sanitation",
    role: "Project and facility completion reports · Tranche 4",
    summary:
      "Rehabilitation and expansion of sewerage serving Fergana and Margilan and neighbouring districts, with capacity development for the service agencies.",
  },
  {
    id: "wss-pir",
    title: "Global policy, institutions, and regulation assessments",
    country: "Multi-country",
    city: "Several countries",
    sector: "Water supply & sanitation",
    role: "Advisory to the World Bank Water Global Practice",
    summary:
      "Country reviews of water and sanitation policy, institutions, and regulation, as a basis for better outcomes against the sustainable development goals.",
  },
  {
    id: "taraz-water",
    title: "Taraz water corporate development",
    country: "Kazakhstan",
    city: "Taraz",
    sector: "Water supply & sanitation",
    role: "Corporate development programme",
    summary:
      "Corporate development and stakeholder participation for Taraz Su, the city’s water and wastewater utility, covering finance, economics, and environmental performance.",
  },
  {
    id: "central-asia-wss",
    title: "Water and sewerage services in Central Asia",
    country: "Multi-country",
    city: "Central Asia",
    sector: "Water supply & sanitation",
    role: "Sector analysis",
    summary:
      "A reading of services, infrastructure, institutions, and financial performance across the countries in the study — challenges, and a credible outlook.",
  },
  {
    id: "syrdarya-water",
    title: "Syrdarya water supply corporate plans",
    country: "Uzbekistan",
    city: "Gulistan, Bukhara, Samarkand",
    sector: "Water supply & sanitation",
    role: "Corporate development and regulatory reform",
    summary:
      "Corporate development, stakeholder participation, financial management, and service performance for the water companies of three cities.",
  },
  {
    id: "north-tajik-cdp",
    title: "North Tajik water rehabilitation — corporate development",
    country: "Tajikistan",
    city: "Several northern cities",
    sector: "Water supply & sanitation",
    role: "Corporate development and stakeholder participation",
    summary:
      "Commercial and service improvement for Khochagii Manziliu Kommunali and city water companies including Khujand’s neighbours: Chkalovsk, Khorog, Gafurov, Isfara, Kairakkum, Kanibadam, and Taboshar.",
  },
  {
    id: "osh-jalalabad",
    title: "Osh and Jalal-Abad water rehabilitation",
    country: "Kyrgyzstan",
    city: "Osh, Jalal-Abad",
    sector: "Water supply & sanitation",
    role: "PIU support, design, and supervision",
    summary:
      "Engineering design, procurement, disbursement, and environmental and social management for the two city programmes, aligned with EBRD requirements.",
  },
  {
    id: "north-tajik-piu",
    title: "North Tajik water rehabilitation — implementation",
    country: "Tajikistan",
    city: "Northern cities",
    sector: "Water supply & sanitation",
    role: "PIU support and contracts supervision",
    summary:
      "Engineering design of water and wastewater systems, procurement support, and supervision of contracts alongside the project unit.",
  },
  {
    id: "khujand-ii",
    title: "Khujand water supply improvement, phase II",
    country: "Tajikistan",
    city: "Khujand",
    sector: "Water supply & sanitation",
    role: "PIU support for design and supervision",
    summary:
      "A second phase of implementation support: design, procurement, and contract supervision for the city’s water supply improvement.",
    facts: [
      { label: "Published scope", value: "Phase II covered the remaining 70 percent of Khujand, including individual water meters." },
      { label: "Financing", value: "A SECO grant of €3.5 million alongside an EBRD loan of €1.5 million for that phase." },
      { label: "Published result", value: "After Phases I and II, published accounts say the city had a reliable 24-hour supply." },
    ],
  },
];

export const capabilities = [
  {
    title: "Multi-disciplinary teams",
    text: "Core staff supplemented by associate engineers, economists, architects, lawyers, and specialists in finance, procurement, and information technology.",
  },
  {
    title: "IFI practice",
    text: "More than fifty assignments financed by international institutions, with the reporting, procurement, and safeguard habits those programmes require.",
  },
  {
    title: "Judgement on the assignment",
    text: "Current work is in Uzbekistan, Kazakhstan, Kyrgyzstan, and Tajikistan, for about a hundred clients.",
  },
  {
    title: "From policy to site",
    text: "The same team can write a sector assessment and stand next to a project unit while a contractor is on the ground.",
  },
];

export const heroSlides = [
  {
    kicker: "Since 2002 · Tashkent",
    title: "Consultancy services from design to delivery.",
    deck: "Global Business Services advises governments, utilities, and international financiers on the work that keeps a city functioning.",
    image:
      "/images/city-dusk.jpg",
    caption: "Institutional advice with an engineer’s tolerance for detail.",
  },
  {
    kicker: "Water · Waste · Cities",
    title: "Utilities that can stand on their own accounts.",
    deck: "Corporate development, tariffs, and supervision for water, sanitation, and solid waste programmes across Central Asia.",
    image:
      "/images/water-works.jpg",
    caption: "Service, finance, and the network considered together.",
  },
  {
    kicker: "International financing",
    title: "An international firm, fluent in lender practice.",
    deck: "Assignments financed by ADB, the World Bank, EBRD, AFD, SECO, IsDB, KfW, and IFC — prepared, delivered, and closed with the client.",
    image:
      "/images/engineering-plans.jpg",
    caption: "Project units supported from mobilisation to completion.",
  },
];

export const countries = [
  {
    name: "Uzbekistan",
    role: "Headquarters",
    text: "The practice is based in Tashkent. National and city assignments run from Karakalpakstan to the Fergana Valley and Samarkand.",
    href: "/projects?country=Uzbekistan",
  },
  {
    name: "Kazakhstan",
    role: "Project country",
    text: "Corporate development for municipal water utilities, including the Taraz water company.",
    href: "/projects?country=Kazakhstan",
  },
  {
    name: "Kyrgyzstan",
    role: "Project country",
    text: "Implementation support for the Osh and Jalal-Abad water rehabilitation programmes.",
    href: "/projects?country=Kyrgyzstan",
  },
  {
    name: "Tajikistan",
    role: "Project country",
    text: "Corporate plans and supervision for water companies in Khujand and a string of northern cities.",
    href: "/projects?country=Tajikistan",
  },
];

export const perspectives = [
  {
    title: "A network is an institution",
    text: "Pipes and plants fail in predictable ways. Utilities fail when tariffs, billing, and accountability are designed as an afterthought. GBS treats the corporate plan as part of the engineering.",
  },
  {
    title: "Completion is a professional act",
    text: "Multi-tranche programmes accumulate silence. A clear completion report is how the next investment becomes possible, and how a lender trusts the borrower again.",
  },
  {
    title: "Waste is an urban system",
    text: "Collection without disposal is a queue. Disposal without recycling is a landfill strategy. Samarkand-type assignments only work when the whole chain, and its cost, is visible.",
  },
];

export function projectsByCountry(name) {
  if (name === "Multi-country") return projects.filter((p) => p.country === "Multi-country");
  return projects.filter((p) => p.country === name);
}

export function searchContent(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 1) return [];
  const rows = [];
  const push = (type, title, href, text) => {
    const hay = `${title} ${text}`.toLowerCase();
    if (hay.includes(q)) rows.push({ type, title, href, text });
  };
  services.forEach((s) =>
    push("Service", s.title, `/services#${s.slug}`, `${s.summary} ${s.points.join(" ")}`)
  );
  industries.forEach((s) =>
    push("Industry", s.title, `/industries#${s.slug}`, `${s.summary} ${s.points.join(" ")}`)
  );
  projects.forEach((p) =>
    push(
      "Project",
      p.title,
      `/projects/${p.id}`,
      `${p.city} · ${p.country}. ${p.role}. ${p.summary} ${(p.facts || []).map((fact) => `${fact.label} ${fact.value}`).join(" ")}`
    )
  );
  countries.forEach((c) => push("Location", c.name, "/locations", c.text));
  push("Company", "About GBS", "/about", company.tagline);
  push("Contact", "Tashkent", "/contact", company.address.join(", "));
  return rows.slice(0, 8);
}
