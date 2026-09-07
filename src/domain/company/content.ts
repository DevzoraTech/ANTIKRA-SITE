import type {
  CareerTeam,
  CareerWhyItem,
  CompanyAboutContent,
  ContactIntent,
  DirectContact,
  HiringStep,
  LeadershipProfile,
  OpenRole,
  PrincipleItem,
} from "./models"
import { companyCards } from "../antikra"

export const companyAbout: CompanyAboutContent = {
  lead: "Built as a system, not a conventional technology company.",
  summary:
    "ANTIKRA brings specialist companies together so complex problems can be solved as one coordinated system—products, client systems, ventures and research.",
  whyTitle: "Why ANTIKRA exists",
  whyDescription:
    "Serious technology problems rarely sit inside a single discipline. ANTIKRA exists so engineering, infrastructure, intelligence, security, design and venture capability can move together.",
  whySteps: [
    { id: "problem", title: "One problem" },
    { id: "disciplines", title: "Multiple disciplines" },
    { id: "system", title: "One coordinated system" },
  ],
  sharedCapabilities: [
    "Engineering",
    "Infrastructure",
    "Data",
    "Security",
    "Design",
    "Commercial",
  ],
  modelOutputs: ["Products", "Client systems", "Ventures", "Research"],
  systemFlow: [
    { id: "problem", title: "Problem / Opportunity" },
    { id: "assemble", title: "Assemble specialists" },
    { id: "research", title: "Research" },
    { id: "design", title: "Design" },
    { id: "engineer", title: "Engineer" },
    { id: "deploy", title: "Deploy" },
    { id: "operate", title: "Operate" },
    { id: "learn", title: "Learn" },
  ],
  buildPillars: [
    {
      id: "products",
      title: "Products",
      description: "Technology ANTIKRA owns and operates—starting with Rembeh and Carmie.",
      href: "/products",
    },
    {
      id: "solutions",
      title: "Solutions",
      description: "Capabilities clients engage ANTIKRA to design, build and operate.",
      href: "/solutions",
    },
    {
      id: "ventures",
      title: "Ventures",
      description: "Companies Olympia builds around consequential problems.",
      href: "/companies/olympia",
    },
  ],
  principles: [
    {
      id: "systems",
      title: "Systems over fragments",
      description: "We assemble capability as one operating system, not disconnected vendors.",
    },
    {
      id: "operation",
      title: "Build for operation",
      description: "Delivery that cannot be run, observed and improved is unfinished.",
    },
    {
      id: "evidence",
      title: "Evidence over theatre",
      description: "Decisions follow research, working systems and measurable outcomes.",
    },
    {
      id: "long-term",
      title: "Long-term thinking",
      description: "We build for resilience, compounding capability and lasting institutions.",
    },
    {
      id: "proximity",
      title: "Operational proximity",
      description: "We stay close to the environments where our technology actually runs.",
    },
    {
      id: "ownership",
      title: "Serious ownership",
      description: "From architecture to production, someone owns the outcome.",
    },
  ],
  meta: [
    { label: "Legal entity", value: "ANTIKRA Group" },
    { label: "Headquarters", value: "Kampala, Uganda" },
    { label: "Founded", value: "2024" },
    { label: "Contact", value: "hello@antikra.com" },
  ],
  careersCta: {
    title: "Build consequential technology with us.",
    description: "Join teams shipping products, infrastructure and ventures from Kampala.",
    buttonLabel: "Explore careers",
    href: "/company/careers",
  },
}

export const leadershipProfiles: LeadershipProfile[] = [
  {
    id: "kapeere-bonny",
    name: "Kapeere Bonny",
    title: "Co-Founder & Director",
    bio: "Leads product and technology direction across the ANTIKRA system—connecting specialist companies into coherent platforms, products and client engagements.",
    responsibilities: [
      "Product and technology strategy",
      "System architecture direction",
      "Delivery standards across companies",
      "Product portfolio oversight",
    ],
    systemRole: "Technology",
    systemRoleLabel: "How the system is engineered",
    linkedin: "https://linkedin.com",
  },
  {
    id: "mpango-hamza",
    name: "Mpango Hamza Rahman",
    title: "Founder, Chairman & Director",
    bio: "Shapes group strategy, venture direction and institutional design—ensuring ANTIKRA compounds as a long-term technology system rather than a collection of projects.",
    responsibilities: [
      "Group strategy",
      "Venture and portfolio direction",
      "Partnerships and institutional relationships",
      "Governance and long-term ownership",
    ],
    systemRole: "Direction",
    systemRoleLabel: "Where the system is headed",
    linkedin: "https://linkedin.com",
  },
]

export const leadershipPrinciples: PrincipleItem[] = [
  {
    id: "ownership",
    title: "Long-term ownership",
    description: "Leaders stay accountable for outcomes beyond launch moments.",
  },
  {
    id: "depth",
    title: "Technical depth",
    description: "Strategy is grounded in how systems are actually built and operated.",
  },
  {
    id: "proximity",
    title: "Operational proximity",
    description: "Leadership stays close to delivery, markets and live environments.",
  },
  {
    id: "evidence",
    title: "Evidence-led decisions",
    description: "Direction follows research, working products and measurable signal.",
  },
  {
    id: "accountability",
    title: "Accountability",
    description: "Clear ownership for commitments, quality and commercial integrity.",
  },
  {
    id: "thinking",
    title: "Long-term thinking",
    description: "We optimize for institutional strength, not short-cycle optics.",
  },
]

export const leadershipFlow = [
  { id: "direction", title: "Direction" },
  { id: "companies", title: "Specialist companies" },
  { id: "products", title: "Products & ventures" },
  { id: "operations", title: "Operations" },
  { id: "evidence", title: "Evidence" },
  { id: "evolution", title: "Evolution" },
]

export const careersWhy: CareerWhyItem[] = [
  {
    id: "real-systems",
    title: "Work on real systems",
    description: "Your work reaches products and operational environments people depend on.",
  },
  {
    id: "disciplines",
    title: "Move across disciplines",
    description: "Engineering, infrastructure, data, design and venture building work together.",
  },
  {
    id: "ownership",
    title: "Own meaningful problems",
    description: "High ownership of consequential problems—not slideware theatre.",
  },
  {
    id: "uganda",
    title: "Build from Uganda",
    description: "Create serious technology from Kampala with regional and global ambition.",
  },
]

export const careersTeams: CareerTeam[] = companyCards.map((company) => ({
  id: company.id,
  name: company.name,
  discipline: company.discipline,
  description: company.description,
  accent: company.accent,
  href: `/companies/${company.id}`,
}))

export const careersWorkFlow = [
  { id: "understand", title: "Understand deeply" },
  { id: "challenge", title: "Challenge assumptions" },
  { id: "build", title: "Build" },
  { id: "test", title: "Test in reality" },
  { id: "measure", title: "Measure" },
  { id: "improve", title: "Improve" },
]

export const careersValues: PrincipleItem[] = [
  { id: "ownership", title: "High ownership", description: "Take responsibility for outcomes end to end." },
  { id: "thinking", title: "Clear thinking", description: "Write and speak with precision." },
  { id: "depth", title: "Technical depth", description: "Respect craft and system complexity." },
  { id: "direct", title: "Direct communication", description: "Say what matters without theatre." },
  { id: "docs", title: "Documentation", description: "Leave systems others can operate." },
  { id: "learning", title: "Continuous learning", description: "Improve from evidence and reality." },
]

export const openRoles: OpenRole[] = [
  {
    id: "senior-backend",
    title: "Senior Backend Engineer",
    team: "Mechanism",
    location: "Kampala",
    type: "Full-time",
    href: "/company/contact",
  },
  {
    id: "devops",
    title: "DevOps Engineer",
    team: "Cosmos",
    location: "Kampala",
    type: "Full-time",
    href: "/company/contact",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    team: "Orrery",
    location: "Kampala",
    type: "Full-time",
    href: "/company/contact",
  },
]

export const hiringProcess: HiringStep[] = [
  {
    id: "application",
    number: "01",
    title: "Application",
    description: "Share your background and the problems you care about.",
  },
  {
    id: "conversation",
    number: "02",
    title: "Initial conversation",
    description: "A focused discussion on fit, craft and motivation.",
  },
  {
    id: "assessment",
    number: "03",
    title: "Technical / role assessment",
    description: "Work through a realistic problem for the role.",
  },
  {
    id: "team",
    number: "04",
    title: "Team conversation",
    description: "Meet the people you would build with.",
  },
  {
    id: "decision",
    number: "05",
    title: "Decision",
    description: "Clear outcome and next steps.",
  },
]

export const contactIntents: ContactIntent[] = [
  {
    id: "build",
    title: "Build something",
    description: "Design or engineer a product, platform or system.",
    accent: "bronze",
  },
  {
    id: "solve",
    title: "Solve a technology challenge",
    description: "Infrastructure, data, AI, security or experience.",
    accent: "green",
  },
  {
    id: "venture",
    title: "Explore a venture",
    description: "An opportunity worth validating and building.",
    accent: "gold",
  },
  {
    id: "research",
    title: "Research & collaboration",
    description: "Universities, researchers and institutions.",
    accent: "violet",
  },
  {
    id: "partnerships",
    title: "Partnerships",
    description: "Commercial, technology or strategic partnerships.",
    accent: "blue",
  },
  {
    id: "other",
    title: "Something else",
    description: "General, media and other enquiries.",
    accent: "coral",
  },
]

export const contactProcess = [
  { id: "received", title: "Enquiry received" },
  { id: "routed", title: "Routed internally" },
  { id: "conversation", title: "Initial conversation" },
  { id: "next", title: "Next step" },
]

export const directContacts: DirectContact[] = [
  { label: "General enquiries", email: "hello@antikra.com" },
  { label: "Business & solutions", email: "solutions@antikra.com" },
  { label: "Research", email: "research@antikra.com" },
  { label: "Careers", email: "careers@antikra.com", href: "/company/careers" },
]
