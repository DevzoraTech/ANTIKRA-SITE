export type ProductAccent = "green" | "blue"
export type ProductId = "rembeh" | "carmie"

export interface ProductSummary {
  id: ProductId
  number: string
  total: string
  name: string
  category: string
  description: string
  href: string
  accent: ProductAccent
  initial: string
  details: Array<{
    label: string
    value: string
  }>
  builtBy: string[]
}

export interface ProductPrinciple {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProductSystemNode {
  id: string
  name: string
  discipline: string
  icon: "box" | "cloud" | "orbit" | "shield" | "sun" | "venture"
  accent: "bronze" | "green" | "violet" | "blue" | "coral" | "gold"
}

export interface RembehFlowStep {
  id: string
  title: string
  description: string
  icon: string
}

export interface RembehSystemCard {
  id: string
  title: string
  description: string
  visual: "loans" | "map" | "cash" | "collections" | "borrowers" | "reporting"
}

export interface RembehRoleCard {
  id: string
  title: string
  description: string
  visual: "dashboard" | "operations" | "mobile"
}

export interface RembehRealityItem {
  id: string
  title: string
  description: string
  icon: string
}

export interface RembehMetric {
  title: string
  value: string
  note: string
  visual: "bars" | "line" | "donut" | "spark"
}

export interface ProductDetailPageContent {
  product: ProductSummary
  lead: string
  summary: string
  externalHref?: string
  externalLabel?: string
  flowLabel: string
  flow: RembehFlowStep[]
  systemCards: RembehSystemCard[]
  roles: RembehRoleCard[]
  reality: RembehRealityItem[]
  metrics: RembehMetric[]
  ctaTitle: string
  ctaBody: string
}

/** @deprecated Prefer ProductDetailPageContent */
export type RembehProductPageContent = ProductDetailPageContent
