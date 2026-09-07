import type {
  OpenResearchItem,
  ResearchDomain,
  ResearchImpactMap,
  ResearchPublication,
} from "./models"

export const researchDomains: ResearchDomain[] = [
  {
    id: "ai-data",
    number: "01",
    title: "Artificial Intelligence & Data",
    description: "Applied AI, machine learning and data systems for real operating environments.",
    accent: "violet",
  },
  {
    id: "digital-infrastructure",
    number: "02",
    title: "Digital Infrastructure",
    description: "Cloud architecture, distributed systems and reliable operating foundations.",
    accent: "green",
  },
  {
    id: "financial-systems",
    number: "03",
    title: "Financial Systems",
    description: "Digital lending, financial operations and payments infrastructure.",
    accent: "green",
  },
  {
    id: "mobility",
    number: "04",
    title: "Mobility & Automotive Systems",
    description: "Connected mobility and automotive-service infrastructure.",
    accent: "blue",
  },
  {
    id: "security",
    number: "05",
    title: "Security & Trust",
    description: "Cybersecurity, identity, privacy and trusted systems.",
    accent: "blue",
  },
  {
    id: "hti",
    number: "06",
    title: "Human-Technology Interaction",
    description: "How people interact with complex technology under real constraints.",
    accent: "coral",
  },
]

export const researchPublications: ResearchPublication[] = [
  {
    id: "digital-operations-lending",
    slug: "digital-operations-in-distributed-lending",
    title: "Digital Operations in Distributed Lending Businesses",
    summary:
      "How lending organizations can run branch networks through centralized financial operations infrastructure.",
    type: "report",
    domainId: "financial-systems",
    date: "2026-03-12",
    readTime: "21 min",
    pages: "98 pages",
    featured: true,
  },
  {
    id: "systems-under-constraint",
    slug: "systems-under-constraint",
    title: "Systems under constraint",
    summary:
      "Notes on building technology for markets where complexity, intermittence and real operations are the default.",
    type: "insight",
    domainId: "digital-infrastructure",
    date: "2026-01-20",
    readTime: "12 min",
    body: [
      "Most technology advice assumes stable connectivity, abundant capital and clean institutional interfaces. Many of the environments where ANTIKRA builds do not.",
      "Constraint is not an edge case. Intermittent networks, distributed operations, uneven documentation and high operational stakes are the normal conditions of work.",
      "Designing for constraint changes architecture: offline-first behavior, clearer ownership boundaries, observability that survives partial failure, and interfaces that respect how people actually work.",
      "Research before assumption is how we avoid importing models that look sophisticated and fail in production. The job is not to romanticize difficulty—it is to engineer systems that remain useful when conditions are imperfect.",
      "This note is a starting frame for ANTIKRA Research: study the operating environment first, then choose the technology.",
    ],
  },
  {
    id: "event-driven-service-platforms",
    slug: "event-driven-architecture-for-service-platforms",
    title: "Event-Driven Architecture for Service Platforms",
    summary: "Patterns for synchronizing operational events across distributed service businesses.",
    type: "paper",
    domainId: "digital-infrastructure",
    date: "2025-11-08",
    readTime: "16 min",
  },
  {
    id: "offline-first-field",
    slug: "designing-offline-first-systems-for-field-operations",
    title: "Designing Offline-First Systems for Field Operations",
    summary: "Field notes on synchronization, conflict and trust when connectivity cannot be assumed.",
    type: "field-note",
    domainId: "hti",
    date: "2025-09-30",
    readTime: "9 min",
  },
]

export const researchImpactMaps: ResearchImpactMap[] = [
  {
    domainTitle: "Financial Systems Research",
    target: "Rembeh",
    targetHref: "/products/rembeh",
    note: "Financial operations platform",
  },
  {
    domainTitle: "Mobility Research",
    target: "Carmie",
    targetHref: "/products/carmie",
    note: "Automotive services platform",
  },
  {
    domainTitle: "AI Research",
    target: "Orrery",
    targetHref: "/companies/orrery",
    note: "Data & intelligence systems",
  },
  {
    domainTitle: "Infrastructure Research",
    target: "Cosmos",
    targetHref: "/companies/cosmos",
    note: "Infrastructure & cloud systems",
  },
]

export const openResearchItems: OpenResearchItem[] = [
  {
    id: "datasets",
    title: "Datasets",
    description: "Curated datasets released where sharing advances the field safely.",
  },
  {
    id: "resources",
    title: "Technical resources",
    description: "Notes, frameworks and references from ANTIKRA delivery environments.",
  },
  {
    id: "tools",
    title: "Research tools",
    description: "Methods and tooling used in studies and validation work.",
  },
  {
    id: "oss",
    title: "Open-source work",
    description: "Selected contributions where open collaboration creates leverage.",
  },
]

export function getResearchBySlug(slug: string) {
  return researchPublications.find((item) => item.slug === slug)
}
