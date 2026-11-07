export type CompanyAccent =
  | "bronze"
  | "green"
  | "violet"
  | "blue"
  | "coral"
  | "gold"

export interface PrincipleItem {
  id: string
  title: string
  description: string
}

export interface FlowStep {
  id: string
  title: string
}

export interface CompanyMetaItem {
  label: string
  value: string
}

export type LeadershipPortraitKey = "mpango-hamza" | "kapeere-bonny"

export interface LeadershipProfile {
  id: string
  name: string
  title: string
  shortTitle: string
  bio: string
  focus: string
  responsibilities: string[]
  systemRole: string
  systemRoleLabel: string
  portrait: LeadershipPortraitKey
  linkedin?: string
}

export interface CareerWhyItem {
  id: string
  title: string
  description: string
}

export interface CareerTeam {
  id: string
  name: string
  discipline: string
  description: string
  accent: CompanyAccent
  href: string
}

export interface OpenRole {
  id: string
  title: string
  team: string
  location: string
  type: string
  href: string
}

export interface HiringStep {
  id: string
  number: string
  title: string
  description: string
}

export interface ContactIntent {
  id: string
  title: string
  description: string
  accent: CompanyAccent
}

export interface DirectContact {
  label: string
  email: string
  href?: string
}

export interface CompanyAboutContent {
  lead: string
  summary: string
  whyTitle: string
  whySteps: FlowStep[]
  whyDescription: string
  modelOutputs: string[]
  sharedCapabilities: string[]
  systemFlow: FlowStep[]
  buildPillars: Array<{
    id: string
    title: string
    description: string
    href: string
  }>
  principles: PrincipleItem[]
  meta: CompanyMetaItem[]
  careersCta: {
    title: string
    description: string
    buttonLabel: string
    href: string
  }
}
