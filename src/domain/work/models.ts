export type WorkAccent = "green" | "blue" | "violet" | "bronze" | "coral" | "gold"

export type WorkVisualKey = "rembeh" | "carmie" | "venture" | "infrastructure" | "product" | "studio"

export interface WorkCaseStudy {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  problem: string
  approach: string
  outcome: string
  contributors: string[]
  accent: WorkAccent
  visual: WorkVisualKey
  productHref?: string
  highlights: string[]
}

export interface WorkAliasMap {
  [alias: string]: string
}
