import type { WorkAliasMap, WorkCaseStudy } from "./models"

export const workCaseStudies: WorkCaseStudy[] = [
  {
    id: "rembeh",
    slug: "rembeh",
    title: "Rembeh",
    category: "Financial Technology",
    summary: "Financial operations infrastructure for lending businesses across distributed branch networks.",
    problem:
      "Lending businesses running multi-branch operations struggled with fragmented ledgers, weak visibility and manual reconciliation.",
    approach:
      "Mechanism, Cosmos, Orrery and Astra assembled a centralized operations platform: branch workflows, financial controls, infrastructure and security designed for real field conditions.",
    outcome:
      "An operating product serving lending organizations with clearer financial control, branch throughput and auditability.",
    contributors: ["Mechanism", "Cosmos", "Orrery", "Astra", "Olympia"],
    accent: "green",
    visual: "rembeh",
    productHref: "/products/rembeh",
    highlights: [
      "Branch operations on a shared financial core",
      "Infrastructure designed for uptime and growth",
      "Security controls embedded across the lifecycle",
    ],
  },
  {
    id: "carmie",
    slug: "carmie",
    title: "Carmie",
    category: "Automotive Services",
    summary: "Infrastructure connecting vehicle owners with garages and towing providers.",
    problem:
      "Automotive service demand was fragmented—owners, garages and tow providers lacked a reliable operating layer between them.",
    approach:
      "Olympia led venture formation while Mechanism, Cosmos, Helios and Astra engineered product, experience, infrastructure and security into one service platform.",
    outcome:
      "A live marketplace and operations platform improving how automotive service work is requested, fulfilled and tracked.",
    contributors: ["Mechanism", "Cosmos", "Helios", "Astra", "Olympia"],
    accent: "blue",
    visual: "carmie",
    productHref: "/products/carmie",
    highlights: [
      "Owner-to-provider service coordination",
      "Experience designed for urgent, real-world use",
      "Secure, scalable operating infrastructure",
    ],
  },
  {
    id: "grid-insights",
    slug: "grid-insights",
    title: "Grid Insights",
    category: "Energy Intelligence",
    summary: "AI-powered analytics platform for energy infrastructure operators.",
    problem:
      "Energy operators needed clearer signal from distributed infrastructure data without building a full intelligence stack alone.",
    approach:
      "Orrery led modeling and analytics, with Cosmos on data infrastructure and Astra on trust boundaries for sensitive operational data.",
    outcome:
      "An intelligence layer that turns infrastructure telemetry into operational insight and decision support.",
    contributors: ["Orrery", "Cosmos", "Astra"],
    accent: "violet",
    visual: "venture",
    highlights: [
      "Trusted data pipelines into analytics",
      "Models tuned to infrastructure realities",
      "Security-aware access to operational insight",
    ],
  },
]

/** Resolve company/solution work deep-links onto canonical case studies. */
export const workAliases: WorkAliasMap = {
  rembeh: "rembeh",
  carmie: "carmie",
  "grid-insights": "grid-insights",
  "powering-rembeh": "rembeh",
  "powering-carmie": "carmie",
  "client-work": "rembeh",
  "client-infrastructure": "grid-insights",
  datacenter: "grid-insights",
  security: "grid-insights",
  design: "carmie",
  venture: "carmie",
  analytics: "grid-insights",
  client: "rembeh",
  pipeline: "carmie",
}

export function resolveWorkSlug(slug: string): WorkCaseStudy | undefined {
  const canonical = workAliases[slug] ?? slug
  return workCaseStudies.find((item) => item.slug === canonical || item.id === canonical)
}
