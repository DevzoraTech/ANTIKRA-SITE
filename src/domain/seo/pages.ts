export interface PageSeo {
  title: string
  description: string
  path: string
  keywords?: string
  type?: "website" | "article"
  noindex?: boolean
}

const site = "https://antikra.com"

export const defaultKeywords = [
  "ANTIKRA",
  "ANTIKRA Group",
  "global technology group",
  "technology companies",
  "product engineering",
  "cloud infrastructure",
  "AI and data systems",
  "cybersecurity",
  "experience design",
  "venture building",
  "Rembeh",
  "Carmie",
  "fintech infrastructure",
  "automotive technology",
  "Mechanism",
  "Cosmos",
  "Orrery",
  "Astra",
  "Helios",
  "Olympia",
  "Kampala",
  "Uganda",
  "Africa technology",
].join(", ")

/** Canonical SEO registry for every public route. */
export const seoPages: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "ANTIKRA | Global Technology Group",
    description:
      "ANTIKRA is a global technology group designing, engineering and operating products, infrastructure and companies for complex environments—with operations including Kampala, Uganda.",
    keywords: defaultKeywords,
  },
  "/companies": {
    path: "/companies",
    title: "Companies | ANTIKRA",
    description:
      "Six specialist ANTIKRA companies—Mechanism, Cosmos, Orrery, Astra, Helios and Olympia—working as one global technology system.",
  },
  "/companies/mechanism": {
    path: "/companies/mechanism",
    title: "Mechanism · Product Engineering | ANTIKRA",
    description:
      "Mechanism designs and builds digital products and operational systems for organizations worldwide.",
  },
  "/companies/cosmos": {
    path: "/companies/cosmos",
    title: "Cosmos · Cloud & Infrastructure | ANTIKRA",
    description:
      "Cosmos builds and operates secure, scalable cloud infrastructure and platform foundations globally.",
  },
  "/companies/orrery": {
    path: "/companies/orrery",
    title: "Orrery · AI & Data | ANTIKRA",
    description:
      "Orrery designs data systems and intelligent technologies that turn information into decisions and automation.",
  },
  "/companies/astra": {
    path: "/companies/astra",
    title: "Astra · Cybersecurity | ANTIKRA",
    description:
      "Astra protects applications, infrastructure and data by embedding security across the technology lifecycle.",
  },
  "/companies/helios": {
    path: "/companies/helios",
    title: "Helios · Experience & Design | ANTIKRA",
    description:
      "Helios designs digital experiences, interfaces and brand systems that make complex technology clear and usable.",
  },
  "/companies/olympia": {
    path: "/companies/olympia",
    title: "Olympia · Ventures | ANTIKRA",
    description:
      "Olympia identifies opportunities, validates models and builds technology ventures with the ANTIKRA system.",
  },
  "/products": {
    path: "/products",
    title: "Products | ANTIKRA",
    description:
      "Technology products built, owned and operated by ANTIKRA—including Rembeh and Carmie.",
  },
  "/products/rembeh": {
    path: "/products/rembeh",
    title: "Rembeh · Financial Operations | ANTIKRA",
    description:
      "Rembeh is financial operations infrastructure for lending businesses and distributed branch networks.",
  },
  "/products/carmie": {
    path: "/products/carmie",
    title: "Carmie · Automotive Services | ANTIKRA",
    description:
      "Carmie connects vehicle owners with garages and towing providers across the automotive service economy.",
  },
  "/solutions": {
    path: "/solutions",
    title: "Solutions | ANTIKRA",
    description:
      "Engage ANTIKRA globally for product engineering, cloud, AI & data, cybersecurity, experience design and venture building.",
  },
  "/solutions/product-engineering": {
    path: "/solutions/product-engineering",
    title: "Product Engineering | ANTIKRA Solutions",
    description:
      "Design and engineer digital products and operational systems with ANTIKRA Mechanism and the wider group.",
  },
  "/solutions/cloud-infrastructure": {
    path: "/solutions/cloud-infrastructure",
    title: "Cloud & Infrastructure | ANTIKRA Solutions",
    description:
      "Reliable cloud architecture, DevOps and operating foundations delivered by ANTIKRA Cosmos.",
  },
  "/solutions/ai-data": {
    path: "/solutions/ai-data",
    title: "AI & Data | ANTIKRA Solutions",
    description:
      "Data platforms, analytics and intelligent systems delivered by ANTIKRA Orrery.",
  },
  "/solutions/cybersecurity": {
    path: "/solutions/cybersecurity",
    title: "Cybersecurity | ANTIKRA Solutions",
    description:
      "Application, cloud and data security embedded across the lifecycle with ANTIKRA Astra.",
  },
  "/solutions/experience-design": {
    path: "/solutions/experience-design",
    title: "Experience & Design | ANTIKRA Solutions",
    description:
      "Product experiences, interfaces and brand systems crafted by ANTIKRA Helios.",
  },
  "/solutions/venture-building": {
    path: "/solutions/venture-building",
    title: "Venture Building | ANTIKRA Solutions",
    description:
      "From opportunity to operating company—venture building with ANTIKRA Olympia and the group system.",
  },
  "/work": {
    path: "/work",
    title: "Work | ANTIKRA",
    description:
      "Selected ANTIKRA work—Rembeh, Carmie, Grid Insights and systems delivered across the global group.",
  },
  "/work/rembeh": {
    path: "/work/rembeh",
    title: "Rembeh Case Study | ANTIKRA Work",
    description:
      "How ANTIKRA built financial operations infrastructure for lending businesses across branch networks.",
  },
  "/work/carmie": {
    path: "/work/carmie",
    title: "Carmie Case Study | ANTIKRA Work",
    description:
      "How ANTIKRA built infrastructure connecting vehicle owners with garages and towing providers.",
  },
  "/work/grid-insights": {
    path: "/work/grid-insights",
    title: "Grid Insights Case Study | ANTIKRA Work",
    description:
      "AI-powered analytics for energy infrastructure—intelligence work across Orrery, Cosmos and Astra.",
  },
  "/research": {
    path: "/research",
    title: "Research | ANTIKRA",
    description:
      "ANTIKRA Research studies technologies, systems and operating environments shaping products and companies worldwide.",
  },
  "/research/systems-under-constraint": {
    path: "/research/systems-under-constraint",
    title: "Systems under constraint | ANTIKRA Research",
    description:
      "Notes on building technology for markets where complexity, intermittence and real operations are the default.",
    type: "article",
  },
  "/research/digital-operations-in-distributed-lending": {
    path: "/research/digital-operations-in-distributed-lending",
    title: "Digital Operations in Distributed Lending | ANTIKRA Research",
    description:
      "How lending organizations can run branch networks through centralized financial operations infrastructure.",
    type: "article",
  },
  "/company": {
    path: "/company",
    title: "Company | ANTIKRA",
    description:
      "ANTIKRA is a global technology group—six specialist companies, shared capability, and outputs across products, solutions, ventures and research.",
  },
  "/company/leadership": {
    path: "/company/leadership",
    title: "Leadership | ANTIKRA",
    description:
      "Meet the people shaping ANTIKRA—technology, strategy and institutional direction for a global technology group.",
  },
  "/company/careers": {
    path: "/company/careers",
    title: "Careers | ANTIKRA",
    description:
      "Build consequential technology with ANTIKRA—open roles across Mechanism, Cosmos, Orrery and the wider group.",
  },
  "/company/contact": {
    path: "/company/contact",
    title: "Contact | ANTIKRA",
    description:
      "Tell ANTIKRA what you need—a product, infrastructure, venture, research collaboration or partnership.",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | ANTIKRA",
    description:
      "How ANTIKRA collects, uses and protects information when you use antikra.com and related services.",
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Use | ANTIKRA",
    description:
      "Terms governing use of antikra.com and related ANTIKRA public websites and materials.",
  },
  "/404": {
    path: "/404",
    title: "Page not found | ANTIKRA",
    description: "The requested ANTIKRA page could not be found.",
    noindex: true,
  },
  "/console": {
    path: "/console",
    title: "Console | ANTIKRA",
    description: "Work with ANTIKRA in Console—projects, decisions, documents, billing and support.",
    noindex: true,
  },
}

const knownPrefixes = [
  "/",
  "/companies",
  "/products",
  "/solutions",
  "/work",
  "/research",
  "/company",
  "/privacy",
  "/terms",
  "/console",
]

export function resolveSeo(pathname: string): PageSeo {
  const clean = pathname.replace(/\/$/, "") || "/"
  if (seoPages[clean]) return seoPages[clean]
  if (seoPages[pathname]) return seoPages[pathname]

  if (clean.startsWith("/console")) {
    return { ...seoPages["/console"], path: clean }
  }

  const work = clean.match(/^\/work\/([^/]+)/)
  if (work) {
    return {
      path: clean,
      title: `${work[1]} | ANTIKRA Work`,
      description: "Selected work delivered across the ANTIKRA global technology group.",
    }
  }

  const research = clean.match(/^\/research\/([^/]+)/)
  if (research) {
    return {
      path: clean,
      title: "Research | ANTIKRA",
      description: "ANTIKRA Research publication.",
      type: "article",
    }
  }

  const known = knownPrefixes.some(
    (prefix) => prefix !== "/" && (clean === prefix || clean.startsWith(`${prefix}/`)),
  )
  if (!known && clean !== "/") {
    return { ...seoPages["/404"], path: clean }
  }

  return seoPages["/"]
}

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path
  return `${site}${path.startsWith("/") ? path : `/${path}`}`
}

export const SITE_ORIGIN = site
export const OG_IMAGE = `${site}/og-image.jpg`
