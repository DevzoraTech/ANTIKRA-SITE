export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavSection {
  label: string
  href?: string
  description?: string
  children?: NavChild[]
}

export const heroStats = [
  { value: "6", label: "Foundational brands" },
  { value: "4", label: "Operating layers" },
  { value: "360", label: "Degree tech coverage" },
  { value: "1", label: "Unified group standard" },
]

export const navMenu: NavSection[] = [
  {
    label: "The Group",
    description: "Heritage, philosophy, and the story behind ANTIKRA.",
    children: [
      {
        label: "About the group",
        href: "#about",
        description: "Six brands, one calibrated system.",
      },
      {
        label: "Our heritage",
        href: "#heritage",
        description: "Named for the world's first analog computer.",
      },
      {
        label: "Operating model",
        href: "#architecture",
        description: "How the group assembles around serious technology work.",
      },
      {
        label: "Insights",
        href: "#insights",
        description: "Thoughts on systems, precision, and technology.",
      },
      {
        label: "FAQ",
        href: "#faq",
        description: "Common questions about how we work.",
      },
    ],
  },
  {
    label: "Brands",
    href: "#brands",
    description: "Specialist companies that interlock into one group.",
    children: [
      {
        label: "ANTIKRA Mechanism",
        href: "#brands",
        description: "Core engineering & product builds.",
      },
      {
        label: "ANTIKRA Cosmos",
        href: "#brands",
        description: "Cloud architecture & infrastructure.",
      },
      {
        label: "ANTIKRA Orrery",
        href: "#brands",
        description: "AI & predictive systems.",
      },
      {
        label: "ANTIKRA Astra",
        href: "#brands",
        description: "Cybersecurity & compliance.",
      },
      {
        label: "ANTIKRA Helios",
        href: "#brands",
        description: "Digital experience & design.",
      },
      {
        label: "ANTIKRA Olympia",
        href: "#brands",
        description: "Ventures & innovation.",
      },
    ],
  },
  {
    label: "Capabilities",
    href: "#services",
    description: "What the group delivers across every discipline.",
    children: [
      {
        label: "Precision Engineering",
        href: "#services",
        description: "Custom software & platform engineering.",
      },
      {
        label: "Systems Architecture",
        href: "#services",
        description: "Strategy, roadmaps & transformation.",
      },
      {
        label: "Legacy Modernization",
        href: "#services",
        description: "Migration, DevOps & long-term support.",
      },
      {
        label: "Specialist Talent",
        href: "#services",
        description: "Dedicated teams & on-demand experts.",
      },
    ],
  },
  {
    label: "Industries",
    href: "#industries",
    description: "Sectors where precision systems matter most.",
    children: [
      {
        label: "Fintech & Banking",
        href: "#industries",
        description: "Payment rails, compliance & core banking.",
      },
      {
        label: "Healthcare",
        href: "#industries",
        description: "Telehealth, diagnostics & patient platforms.",
      },
      {
        label: "Logistics",
        href: "#industries",
        description: "Fleet tracking & route optimization.",
      },
      {
        label: "Education",
        href: "#industries",
        description: "Adaptive learning & edtech delivery.",
      },
    ],
  },
  {
    label: "Work",
    href: "#works",
    description: "Selected projects across the group.",
    children: [
      {
        label: "Case studies",
        href: "#works",
        description: "Precision builds for startups & enterprises.",
      },
      {
        label: "Start a project",
        href: "#contact",
        description: "Tell us what you're building.",
      },
    ],
  },
]

export const navLinks = navMenu.map((section) => ({
  label: section.label,
  href: section.href ?? section.children?.[0]?.href ?? "#",
}))
