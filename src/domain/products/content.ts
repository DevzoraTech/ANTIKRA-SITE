import type {
  ProductDetailPageContent,
  ProductPrinciple,
  ProductSummary,
  ProductSystemNode,
} from "./models"

export const productSystemNodes: ProductSystemNode[] = [
  {
    id: "helios",
    name: "Helios",
    discipline: "Brand & Experience",
    icon: "sun",
    accent: "coral",
  },
  {
    id: "mechanism",
    name: "Mechanism",
    discipline: "Product Engineering",
    icon: "box",
    accent: "bronze",
  },
  {
    id: "astra",
    name: "Astra",
    discipline: "Security",
    icon: "shield",
    accent: "blue",
  },
  {
    id: "orrery",
    name: "Orrery",
    discipline: "Intelligence",
    icon: "orbit",
    accent: "violet",
  },
  {
    id: "cosmos",
    name: "Cosmos",
    discipline: "Infrastructure",
    icon: "cloud",
    accent: "green",
  },
]

export const rembehSummary: ProductSummary = {
  id: "rembeh",
  number: "01",
  total: "02",
  name: "Rembeh",
  category: "Financial Technology",
  description: "Financial operations infrastructure for lending businesses.",
  href: "/products/rembeh",
  accent: "green",
  initial: "R",
  details: [
    { label: "Status", value: "Operating" },
    { label: "Market", value: "Uganda" },
    { label: "Platform", value: "Web + Mobile" },
  ],
  builtBy: ["Mechanism", "Cosmos", "Orrery", "Astra", "Helios"],
}

export const carmieSummary: ProductSummary = {
  id: "carmie",
  number: "02",
  total: "02",
  name: "Carmie",
  category: "Automotive Technology",
  description: "Infrastructure connecting vehicle owners with automotive service providers.",
  href: "/products/carmie",
  accent: "blue",
  initial: "C",
  details: [
    { label: "Status", value: "Operating" },
    { label: "Market", value: "Uganda" },
    { label: "Platform", value: "Web + Mobile" },
  ],
  builtBy: ["Mechanism", "Cosmos", "Orrery", "Astra", "Helios"],
}

export const products: ProductSummary[] = [rembehSummary, carmieSummary]

export const productPrinciples: ProductPrinciple[] = [
  {
    id: "operations",
    title: "Built for real operations",
    description: "Products solve operational problems rather than demonstrating technology.",
    icon: "briefcase",
  },
  {
    id: "endure",
    title: "Designed to endure",
    description: "Architecture should support long-term operation and evolution.",
    icon: "sparkles",
  },
  {
    id: "security",
    title: "Security from the beginning",
    description: "Security is incorporated into the product lifecycle, not added later.",
    icon: "shield",
  },
  {
    id: "improved",
    title: "Continuously improved",
    description: "Products evolve from real-world usage and feedback.",
    icon: "refresh",
  },
]

export const rembehProductPage: ProductDetailPageContent = {
  product: rembehSummary,
  lead: "Financial operations, under control.",
  summary:
    "Rembeh brings lending operations, collections, cash management and portfolio oversight into one connected operating system.",
  externalHref: "https://rembeh.com",
  externalLabel: "Visit Rembeh",
  flowLabel: "Built around how lending businesses actually operate.",
  ctaTitle: "Run lending operations with greater control.",
  ctaBody:
    "Rembeh puts operations, cash and portfolio oversight into one connected system.",
  flow: [
    {
      id: "organization",
      title: "Organization",
      description: "Set strategy, policies and oversight.",
      icon: "landmark",
    },
    {
      id: "branches",
      title: "Branches",
      description: "Manage daily operations, teams and performance.",
      icon: "store",
    },
    {
      id: "managers",
      title: "Managers",
      description: "Oversee cash, loans, agents and collections.",
      icon: "user",
    },
    {
      id: "field-agents",
      title: "Field Agents",
      description: "Issue loans and collect repayments in the field.",
      icon: "badge",
    },
    {
      id: "borrowers",
      title: "Borrowers",
      description: "Access loans and make repayments.",
      icon: "users",
    },
  ],
  systemCards: [
    {
      id: "loan-management",
      title: "Loan Management",
      description: "Applications, active loans, repayments and loan histories.",
      visual: "loans",
    },
    {
      id: "field-operations",
      title: "Field Operations",
      description: "Agents issue loans and collect repayments from the field.",
      visual: "map",
    },
    {
      id: "cash-operations",
      title: "Cash Operations",
      description: "Opening cash, float, expenses, reconciliation and shortages.",
      visual: "cash",
    },
    {
      id: "collections",
      title: "Collections",
      description: "Track expected vs actual repayments and overdue exposure.",
      visual: "collections",
    },
    {
      id: "borrowers",
      title: "Borrowers",
      description: "Centralized borrower and guarantor records.",
      visual: "borrowers",
    },
    {
      id: "reporting",
      title: "Reporting & Oversight",
      description: "Branch reporting and organization-level visibility.",
      visual: "reporting",
    },
  ],
  roles: [
    {
      id: "owner",
      title: "Organization Owner",
      description: "Oversight across all branches.",
      visual: "dashboard",
    },
    {
      id: "manager",
      title: "Branch Manager",
      description: "Controls branch operations.",
      visual: "operations",
    },
    {
      id: "agent",
      title: "Field Agent",
      description: "Works from the field.",
      visual: "mobile",
    },
  ],
  reality: [
    {
      id: "offline",
      title: "Offline-capable field operations",
      description: "Work anywhere. Data is saved securely on device.",
      icon: "cloud",
    },
    {
      id: "sync",
      title: "Synchronization when connectivity returns",
      description: "Automatic, reliable and safe.",
      icon: "refresh",
    },
    {
      id: "mobile",
      title: "Mobile-first collection workflows",
      description: "Designed for speed, simplicity and accuracy.",
      icon: "phone",
    },
    {
      id: "reconciliation",
      title: "Operational reconciliation",
      description: "Cash, float and shortages tracked with clarity.",
      icon: "scale",
    },
    {
      id: "access",
      title: "Role-based access",
      description: "The right information for the right role.",
      icon: "shield",
    },
  ],
  metrics: [
    {
      title: "Collections",
      value: "UGX 842,450,000",
      note: "+9.4% vs last month",
      visual: "bars",
    },
    {
      title: "Outstanding Portfolio",
      value: "UGX 1,234,550,000",
      note: "+6.2% vs last month",
      visual: "line",
    },
    {
      title: "Overdue Exposure",
      value: "UGX 196,230,000",
      note: "12.6% of portfolio",
      visual: "donut",
    },
    {
      title: "Cash Position",
      value: "UGX 128,450,000",
      note: "Available: UGX 96,450,000",
      visual: "line",
    },
    {
      title: "Reports",
      value: "24 / 24",
      note: "Active today",
      visual: "spark",
    },
  ],
}

export const carmieProductPage: ProductDetailPageContent = {
  product: carmieSummary,
  lead: "Automotive service, connected.",
  summary:
    "Carmie connects vehicle owners with workshops, service providers and mobility operations — so maintenance, bookings and service history live in one system.",
  flowLabel: "Built around how automotive service actually runs.",
  ctaTitle: "Connect vehicle service end to end.",
  ctaBody:
    "Carmie gives owners, workshops and operators one operating layer for service, history and coordination.",
  flow: [
    {
      id: "owners",
      title: "Vehicle Owners",
      description: "Book service, track history and stay informed.",
      icon: "users",
    },
    {
      id: "workshops",
      title: "Workshops",
      description: "Manage intake, jobs and workshop capacity.",
      icon: "store",
    },
    {
      id: "technicians",
      title: "Technicians",
      description: "Execute jobs with clear work orders.",
      icon: "badge",
    },
    {
      id: "providers",
      title: "Service Providers",
      description: "Coordinate parts, towing and specialist work.",
      icon: "building",
    },
    {
      id: "operators",
      title: "Operators",
      description: "Oversee network performance and quality.",
      icon: "landmark",
    },
  ],
  systemCards: [
    {
      id: "vehicles",
      title: "Vehicle Records",
      description: "Ownership, history and service timelines in one place.",
      visual: "borrowers",
    },
    {
      id: "booking",
      title: "Service Booking",
      description: "Scheduling, intake and appointment coordination.",
      visual: "map",
    },
    {
      id: "workshop",
      title: "Workshop Operations",
      description: "Job cards, bay allocation and technician workflows.",
      visual: "loans",
    },
    {
      id: "parts",
      title: "Parts & Providers",
      description: "Parts requests and specialist provider coordination.",
      visual: "cash",
    },
    {
      id: "payments",
      title: "Payments & Invoicing",
      description: "Transparent service costs and settlement.",
      visual: "collections",
    },
    {
      id: "oversight",
      title: "Network Oversight",
      description: "Quality, turnaround and portfolio visibility.",
      visual: "reporting",
    },
  ],
  roles: [
    {
      id: "owner",
      title: "Vehicle Owner",
      description: "Books and tracks service.",
      visual: "mobile",
    },
    {
      id: "manager",
      title: "Workshop Manager",
      description: "Runs daily workshop operations.",
      visual: "operations",
    },
    {
      id: "agent",
      title: "Network Operator",
      description: "Oversees providers and quality.",
      visual: "dashboard",
    },
  ],
  reality: [
    {
      id: "mobile",
      title: "Mobile-first owner experience",
      description: "Book, approve and follow service from the phone.",
      icon: "phone",
    },
    {
      id: "history",
      title: "Durable service history",
      description: "Every job becomes part of the vehicle record.",
      icon: "refresh",
    },
    {
      id: "coordination",
      title: "Provider coordination",
      description: "Workshops, parts and specialists stay aligned.",
      icon: "cloud",
    },
    {
      id: "quality",
      title: "Operational quality signals",
      description: "Turnaround, rework and satisfaction stay visible.",
      icon: "scale",
    },
    {
      id: "access",
      title: "Role-based access",
      description: "Owners, workshops and operators see what they need.",
      icon: "shield",
    },
  ],
  metrics: [
    {
      title: "Active Vehicles",
      value: "12,480",
      note: "+8.1% vs last month",
      visual: "line",
    },
    {
      title: "Jobs Completed",
      value: "3,214",
      note: "This month",
      visual: "bars",
    },
    {
      title: "Avg. Turnaround",
      value: "1.8 days",
      note: "-0.3 vs last month",
      visual: "spark",
    },
    {
      title: "Workshop Partners",
      value: "86",
      note: "Active network",
      visual: "donut",
    },
    {
      title: "Owner Rating",
      value: "4.7 / 5",
      note: "Rolling 90 days",
      visual: "spark",
    },
  ],
}
