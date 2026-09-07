export type SiteImageKey =
  | "studio"
  | "infrastructure"
  | "product"
  | "venture"

export interface CompanyCard {
  id: string
  number: string
  name: string
  discipline: string
  description: string
  accent: "bronze" | "green" | "violet" | "blue" | "coral" | "gold"
  icon: "box" | "cloud" | "orbit" | "shield" | "sun" | "venture"
}

export interface SystemStep {
  id: string
  title: string
  description: string
  owner: string
  icon: "target" | "pencil" | "code" | "cloud" | "brain"
  accent: "bronze" | "green" | "violet" | "blue" | "coral" | "gold"
}

export interface WorkShowcase {
  id: string
  title: string
  description: string
  contributors: string[]
  imageKey: SiteImageKey
  accent: "green" | "blue" | "violet"
}

export type CompanyAccent = "bronze" | "green" | "violet" | "blue" | "coral" | "gold"
export type CompanyId = "mechanism" | "cosmos" | "orrery" | "astra" | "helios" | "olympia"
export type CompanyVisualKind = CompanyId
export type CompanyWorkVisual =
  | "rembeh"
  | "carmie"
  | "client"
  | "datacenter"
  | "security"
  | "design"
  | "venture"
  | "analytics"

export interface CompanyCapability {
  id: string
  title: string
  description: string
  icon: string
}

export interface CompanyWorkItem {
  id: string
  title: string
  description: string
  linkLabel: string
  visual: CompanyWorkVisual
  accent: CompanyAccent
}

export interface CompanyProcessStep {
  id: string
  title: string
  description: string
  icon: string
}

export interface CompanySystemPartner {
  id: string
  title: string
  description: string
  icon: CompanyCard["icon"]
  accent: CompanyAccent
}

export interface CompanyMetric {
  title?: string
  value: string
  label: string
}

export interface CompanyNextLink {
  number: string
  total: string
  name: string
  discipline: string
  href: string
  accent: CompanyAccent
  visualKind: CompanyVisualKind
}

export interface CompanyVentureItem {
  id: string
  name: string
  category: string
  description: string
  details?: Array<{ label: string; value: string }>
  builtWith?: string[]
  bullets?: string[]
  linkLabel: string
  visual: CompanyWorkVisual
  accent: CompanyAccent
}

export interface CompanyPartnerOption {
  id: string
  title: string
  description: string
  icon: string
  accent: CompanyAccent
}

export interface CompanyPrinciple {
  id: string
  title: string
  description: string
  icon: string
}

export interface CompanyFinalCta {
  title: string
  description: string
  secondaryTitle: string
  secondaryDescription: string
  buttonLabel: string
  href: string
}

export interface CompanyPageContent {
  id: CompanyId
  number: string
  total: string
  name: string
  breadcrumb: string
  discipline: string
  lead?: string
  summary: string
  accent: CompanyAccent
  icon: CompanyCard["icon"]
  visualKind: CompanyVisualKind
  visualNotes: string[]
  primaryActionLabel?: string
  secondaryActionLabel?: string
  capabilityLabel: string
  workLabel: string
  workLinkLabel?: string | null
  workLinkHref?: string
  processLabel: string
  capabilities: CompanyCapability[]
  selectedWork: CompanyWorkItem[]
  process: CompanyProcessStep[]
  capabilityListLabel?: string
  capabilityList: string[]
  partners: CompanySystemPartner[]
  technologies: string[]
  technologyLabel?: string
  technologyLinkLabel?: string
  metrics?: CompanyMetric[]
  cta: {
    eyebrow: string
    title: string
    description: string
    buttonLabel: string
  }
  ventureWork?: CompanyVentureItem[]
  partnerOptions?: CompanyPartnerOption[]
  principles?: CompanyPrinciple[]
  finalCta?: CompanyFinalCta
  next?: CompanyNextLink
}
