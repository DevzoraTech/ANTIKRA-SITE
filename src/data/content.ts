import antikraStudioBg from "../assets/antikra-studio-bg.webp"
import ecosystemInfrastructure from "../assets/ecosystem-infrastructure.webp"
import ecosystemIntelligence from "../assets/ecosystem-intelligence.webp"
import ecosystemProduct from "../assets/ecosystem-product.webp"
import ecosystemVenture from "../assets/ecosystem-venture.webp"

export interface ProofPoint {
  id: string
  title: string
  description: string
  metric: string
}

export interface Service {
  id: string
  title: string
  description: string
  outcome: string
  ownedBy: string[]
  items: string[]
}

export interface Industry {
  id: string
  title: string
  description: string
}

export interface Brand {
  id: string
  name: string
  tagline: string
  role: string
  description: string
  focus: string[]
  systems: string[]
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  category: string
  brand: string
  image: string
  featured?: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Insight {
  id: string
  date: string
  title: string
  excerpt: string
}

export interface OperatingLayer {
  id: string
  label: string
  title: string
  description: string
}

export interface PlatformPillar {
  id: string
  title: string
  description: string
}

export const proofPoints: ProofPoint[] = [
  {
    id: "group",
    title: "Built as a group, not a shop",
    description:
      "ANTIKRA is structured for many specialist companies to share one standard of delivery, governance, research, and technical direction.",
    metric: "Multi-brand",
  },
  {
    id: "stack",
    title: "Coverage across the technology stack",
    description:
      "Software, cloud, AI, security, design, automation, ventures, and managed teams are designed to operate as connected capabilities.",
    metric: "Full-stack",
  },
  {
    id: "model",
    title: "One relationship, many expert gears",
    description:
      "Clients can engage one ANTIKRA brand or assemble a coordinated group team around complex transformation work.",
    metric: "Unified",
  },
]

export const services: Service[] = [
  {
    id: "engineering",
    title: "Product & Platform Engineering",
    description:
      "We design and build serious software systems: customer platforms, internal tools, mobile apps, SaaS products, integrations, data pipelines, and enterprise-grade APIs.",
    outcome:
      "A production-ready system with architecture, delivery rhythm, QA, documentation, and a path to scale.",
    ownedBy: ["Mechanism", "Helios", "Cosmos"],
    items: [
      "Web, mobile, SaaS, and enterprise platforms",
      "MVPs that can mature into real products",
      "APIs, integrations, dashboards, and workflows",
      "Quality engineering, release management, and DevOps",
    ],
  },
  {
    id: "cloud",
    title: "Cloud, Infrastructure & Operations",
    description:
      "We create cloud foundations that can carry modern companies: secure environments, deployment pipelines, observability, cost control, and 24/7 operational discipline.",
    outcome:
      "A resilient operating base for digital products, AI systems, data workloads, and regulated platforms.",
    ownedBy: ["Cosmos", "Astra", "Mechanism"],
    items: [
      "Cloud architecture and migration",
      "Kubernetes, CI/CD, monitoring, and incident response",
      "Infrastructure security and reliability reviews",
      "Managed operations and SLA-backed support",
    ],
  },
  {
    id: "intelligence",
    title: "AI, Data & Intelligent Automation",
    description:
      "We help companies move beyond isolated experiments into useful intelligence systems: analytics, forecasting, decision support, AI agents, and automation flows.",
    outcome:
      "AI and data capabilities connected to real operations, with governance and measurable business value.",
    ownedBy: ["Orrery", "Mechanism", "Astra"],
    items: [
      "Machine learning and predictive analytics",
      "Generative AI products and internal copilots",
      "Data platforms, reporting, and governance",
      "Workflow automation and intelligent assistants",
    ],
  },
  {
    id: "security",
    title: "Security, Trust & Modernization",
    description:
      "We strengthen systems that already matter: legacy modernization, cybersecurity, compliance preparation, technical audits, and migration away from fragile infrastructure.",
    outcome:
      "A safer, cleaner technology estate that leadership can understand, operate, and invest in with confidence.",
    ownedBy: ["Astra", "Cosmos", "Mechanism"],
    items: [
      "Security assessments and penetration testing",
      "Legacy system rescue and phased modernization",
      "Compliance, access control, and threat modeling",
      "Architecture audits and remediation roadmaps",
    ],
  },
  {
    id: "ventures",
    title: "Ventures, Teams & New Brands",
    description:
      "We support new technology ventures from concept to operating company: product strategy, founding engineering teams, brand systems, investment readiness, and launch operations.",
    outcome:
      "A venture or business unit with sharper product direction, working technology, and the structure to keep moving.",
    ownedBy: ["Olympia", "Helios", "Mechanism"],
    items: [
      "Startup incubation and venture studio support",
      "Dedicated engineering and product teams",
      "Brand, UX, pitch, and launch systems",
      "Technical due diligence and investment readiness",
    ],
  },
]

export const brands: Brand[] = [
  {
    id: "mechanism",
    name: "ANTIKRA Mechanism",
    tagline: "Product Engineering",
    role: "The build engine",
    description:
      "Mechanism turns strategy into working systems: platforms, products, APIs, integrations, mobile apps, and the engineering foundations every other brand can rely on.",
    focus: ["Full-stack products", "Enterprise platforms", "QA & DevOps"],
    systems: ["Product squads", "Architecture", "Delivery"],
  },
  {
    id: "cosmos",
    name: "ANTIKRA Cosmos",
    tagline: "Cloud & Infrastructure",
    role: "The operating base",
    description:
      "Cosmos designs the environments where modern companies run: cloud architecture, infrastructure automation, observability, reliability, and managed operations.",
    focus: ["Cloud platforms", "Kubernetes", "Managed operations"],
    systems: ["Infrastructure", "Reliability", "Scale"],
  },
  {
    id: "orrery",
    name: "ANTIKRA Orrery",
    tagline: "AI & Predictive Systems",
    role: "The intelligence layer",
    description:
      "Orrery builds AI, analytics, forecasting, and automation systems that help organizations understand patterns, make decisions, and move faster.",
    focus: ["Machine learning", "Predictive analytics", "AI agents"],
    systems: ["Data", "Models", "Automation"],
  },
  {
    id: "astra",
    name: "ANTIKRA Astra",
    tagline: "Cybersecurity",
    role: "The trust layer",
    description:
      "Astra protects the group and its clients through security reviews, compliance support, threat modeling, penetration testing, and defensive engineering.",
    focus: ["Security testing", "Compliance", "Threat intelligence"],
    systems: ["Trust", "Risk", "Defense"],
  },
  {
    id: "helios",
    name: "ANTIKRA Helios",
    tagline: "Experience & Brand Systems",
    role: "The human interface",
    description:
      "Helios shapes how people experience technology: product design, brand systems, web experiences, service design, and workflow interfaces.",
    focus: ["UX/UI design", "Brand systems", "Digital products"],
    systems: ["Experience", "Identity", "Conversion"],
  },
  {
    id: "olympia",
    name: "ANTIKRA Olympia",
    tagline: "Ventures & Innovation",
    role: "The venture forge",
    description:
      "Olympia helps launch, incubate, and scale new technology companies, products, and investment-backed ideas inside the ANTIKRA ecosystem.",
    focus: ["Startup incubation", "Venture studio", "Investment readiness"],
    systems: ["Launch", "Capital", "Growth"],
  },
]

export const operatingLayers: OperatingLayer[] = [
  {
    id: "discover",
    label: "01",
    title: "Discover the system",
    description:
      "We map the business, users, risks, data, systems, and commercial goal before choosing the right brands.",
  },
  {
    id: "assemble",
    label: "02",
    title: "Assemble the gears",
    description:
      "A lead brand owns the engagement while supporting brands bring specialist capability where it matters.",
  },
  {
    id: "build",
    label: "03",
    title: "Build with one standard",
    description:
      "Engineering, design, cloud, security, and AI work from shared delivery rituals and technical guardrails.",
  },
  {
    id: "compound",
    label: "04",
    title: "Operate and compound",
    description:
      "After launch, the group keeps improving the system through support, analytics, modernization, and new capabilities.",
  },
]

export const platformPillars: PlatformPillar[] = [
  {
    id: "governance",
    title: "Group governance",
    description:
      "Shared technical leadership, architecture review, delivery standards, and brand-level accountability.",
  },
  {
    id: "research",
    title: "Research spine",
    description:
      "A permanent focus on AI, automation, security, cloud, emerging interfaces, and market-ready product patterns.",
  },
  {
    id: "talent",
    title: "Talent network",
    description:
      "Specialist teams that can join a project, run a capability, or become the founding team for a new venture.",
  },
  {
    id: "venture",
    title: "Venture engine",
    description:
      "A structure for turning internal ideas, client opportunities, and market gaps into new ANTIKRA companies.",
  },
]

export const industries: Industry[] = [
  {
    id: "fintech",
    title: "Fintech & Banking",
    description:
      "Payment rails, wallets, lending platforms, fraud tooling, dashboards, KYC flows, and compliance-aware financial systems.",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    description:
      "Telehealth, diagnostics, patient portals, scheduling, clinical workflows, and secure health data experiences.",
  },
  {
    id: "logistics",
    title: "Transportation & Logistics",
    description:
      "Fleet platforms, route optimization, tracking, warehouse tooling, dispatch systems, and operational visibility.",
  },
  {
    id: "realestate",
    title: "Real Estate & Construction",
    description:
      "Property platforms, construction management, CRM systems, procurement workflows, and investor reporting.",
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    description:
      "Commerce platforms, inventory systems, customer data, loyalty, automation, and omnichannel operations.",
  },
  {
    id: "education",
    title: "Education & EdTech",
    description:
      "Learning platforms, assessment engines, live classrooms, student data, creator tools, and institutional systems.",
  },
]

export const caseStudies: CaseStudy[] = [
  {
    id: "fintech-platform",
    title: "Digital Banking Platform",
    description:
      "A multi-currency banking platform blueprint with real-time processing, security controls, and AI-assisted fraud workflows.",
    category: "Fintech",
    brand: "Mechanism / Orrery / Astra",
    image: ecosystemProduct,
    featured: true,
  },
  {
    id: "health-app",
    title: "Telehealth Ecosystem",
    description:
      "Video consultations, EHR integration, clinical scheduling, and patient communication for a national care network.",
    category: "Healthcare",
    brand: "Mechanism / Helios",
    image: antikraStudioBg,
  },
  {
    id: "logistics-suite",
    title: "Fleet Intelligence System",
    description:
      "Real-time GPS, dispatch tools, route analytics, and operational dashboards for distributed logistics teams.",
    category: "Logistics",
    brand: "Cosmos / Mechanism",
    image: ecosystemInfrastructure,
  },
  {
    id: "ai-analytics",
    title: "Predictive Analytics Engine",
    description:
      "A decision-support layer that turns market, customer, and operational data into forecasts and recommendations.",
    category: "AI & Data",
    brand: "Orrery",
    image: ecosystemIntelligence,
  },
  {
    id: "edtech-platform",
    title: "Adaptive Learning Platform",
    description:
      "Learning paths, live classrooms, assessments, and scalable infrastructure for high-volume education delivery.",
    category: "Education",
    brand: "Mechanism / Helios",
    image: ecosystemVenture,
  },
]

export const faqItems: FaqItem[] = [
  {
    id: "1",
    question: "Why is the group called ANTIKRA?",
    answer:
      "ANTIKRA is named after the Antikythera mechanism, a 2,000-year-old bronze astronomical computer discovered off the coast of Greece in 1901. The name fits our structure: many precise parts working together as one system.",
  },
  {
    id: "2",
    question: "Is ANTIKRA one company or many brands?",
    answer:
      "ANTIKRA is a group platform. Each brand has a specialist mandate, but the group shares standards, leadership, delivery methods, and a unified client relationship.",
  },
  {
    id: "3",
    question: "Can a client work with one brand only?",
    answer:
      "Yes. A client can engage one brand for a focused need or ask ANTIKRA to assemble a cross-brand team for a larger transformation, product, or venture.",
  },
  {
    id: "4",
    question: "What kinds of projects fit ANTIKRA?",
    answer:
      "Complex technology work where strategy, engineering, cloud, AI, security, and design must align. That includes new products, enterprise systems, automation programs, modernization, and venture creation.",
  },
  {
    id: "5",
    question: "Does the group provide long-term support?",
    answer:
      "Yes. ANTIKRA is designed for long-term partnership: support, platform operations, iterative product improvement, security hardening, and new capability development after launch.",
  },
  {
    id: "6",
    question: "What makes ANTIKRA different from a traditional agency?",
    answer:
      "A traditional agency usually sells one blended service. ANTIKRA is designed as a group of specialist brands, so clients get focused expertise without losing coordination, governance, or strategic direction.",
  },
]

export const insights: Insight[] = [
  {
    id: "1",
    date: "12 MARCH 2026",
    title: "What the Antikythera Mechanism Teaches Us About Modern System Design",
    excerpt:
      "Thirty bronze gears, two thousand years old: lessons in modularity, precision, and interlocking architecture that still apply to software today.",
  },
  {
    id: "2",
    date: "28 FEBRUARY 2026",
    title: "Why Technology Groups Can Outperform Isolated Agencies",
    excerpt:
      "How a multi-brand structure gives clients deeper capability, clearer ownership, and more durable outcomes than a single generalist team.",
  },
  {
    id: "3",
    date: "15 FEBRUARY 2026",
    title: "From Automation Experiments to Operating Systems",
    excerpt:
      "The next wave of AI value will come from connected workflows, governed data, and products that fit how companies actually run.",
  },
]

export const stats = [
  { value: "6", label: "Foundational brands" },
  { value: "360", label: "Degree technology coverage" },
  { value: "24/7", label: "Operations-ready mindset" },
  { value: "1", label: "Unified group standard" },
]

export const heroPillars = [
  "Product engineering",
  "Cloud and AI systems",
  "Security, design, ventures",
]

export const location = "Inspired by Antikythera, built for global technology work"

export const groupSnapshot = {
  title: "Group snapshot",
  items: [
    { value: "6", label: "Foundational specialist brands" },
    { value: "4", label: "Operating layers from discovery to scale" },
    { value: "1", label: "Shared standard across the ecosystem" },
  ],
}

export const contactProof = {
  title: "A serious first conversation",
  description:
    "Bring the ambition, the problem, or the rough idea. ANTIKRA will help shape the right technical path, the right brand mix, and the first practical move.",
}

export const contactSteps = [
  "We map your business goal, users, constraints, systems, and risks.",
  "We identify the lead brand and any specialist brands needed around it.",
  "You receive a clear proposal with scope, team shape, delivery phases, and next steps.",
]

export { navLinks, navMenu, heroStats } from "./navigation"
