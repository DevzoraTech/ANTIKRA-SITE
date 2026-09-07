export type ResearchType =
  | "report"
  | "paper"
  | "insight"
  | "field-note"
  | "dataset"

export interface ResearchDomain {
  id: string
  number: string
  title: string
  description: string
  accent: string
}

export interface ResearchPublication {
  id: string
  slug: string
  title: string
  summary: string
  type: ResearchType
  domainId: string
  date: string
  readTime: string
  pages?: string
  featured?: boolean
  body?: string[]
}

export interface ResearchImpactMap {
  domainTitle: string
  target: string
  targetHref: string
  note: string
}

export interface OpenResearchItem {
  id: string
  title: string
  description: string
}
