export type SolutionAccent = "green" | "violet" | "blue" | "coral" | "gold" | "teal"
export type SolutionId =
  | "product-engineering"
  | "cloud-infrastructure"
  | "ai-data"
  | "cybersecurity"
  | "experience-design"
  | "venture-building"

export interface SolutionArea {
  id: SolutionId
  number: string
  total: string
  title: string
  discipline: string
  description: string
  href: string
  accent: SolutionAccent
  icon: string
}

export interface SolutionAssembly {
  id: string
  title: string
  description: string
  areas: SolutionId[]
  icon: string
}

export interface SolutionProcessStep {
  id: string
  number: string
  title: string
  description: string
  icon: string
}

export interface SolutionAudience {
  id: string
  title: string
  description: string
  icon: string
}

export interface SpecialistCard {
  id: string
  name: string
  discipline: string
  description: string
  icon: string
  accent: "bronze" | "green" | "violet" | "blue" | "coral" | "gold"
}

export interface EngineeringCapability {
  id: string
  title: string
  description: string
  icon: string
}

export interface EngineeringWorkItem {
  id: string
  title: string
  category: string
  description: string
  visual: "rembeh" | "carmie" | "enterprise" | "cloud" | "data" | "security" | "design" | "venture"
  accent: SolutionAccent
}

export interface ProductionPrinciple {
  id: string
  title: string
  description: string
  icon: string
}

export interface ProductEngineeringContent {
  solution: SolutionArea
  lead: string
  summary: string
  capabilityLabel: string
  capabilities: EngineeringCapability[]
  processLabel: string
  process: SolutionProcessStep[]
  architecture: SpecialistCard[]
  work: EngineeringWorkItem[]
  engagementModels: EngineeringCapability[]
  productionPrinciples: ProductionPrinciple[]
  next: SolutionArea
}

export type SolutionDetailId =
  | "product-engineering"
  | "cloud-infrastructure"
  | "ai-data"
  | "cybersecurity"
  | "experience-design"
  | "venture-building"
export type SolutionDetailVisual = "engineering" | "cloud" | "ai" | "security" | "experience" | "venture"
export type SolutionArchitectureVariant = "engineering" | "cloud" | "ai" | "security" | "experience" | "venture"

export interface SolutionArchitectureLayer {
  id: string
  title: string
  description?: string
  details?: string[]
  icon: string
  accent?: SolutionAccent
}

export interface SolutionUseCase {
  id: string
  title: string
  description: string
  icon: string
  accent?: SolutionAccent
}

export interface SolutionDetailCta {
  title: string
  description: string
  buttonLabel: string
}

export interface SolutionDetailContent {
  id: SolutionDetailId
  solution: SolutionArea
  heading: string
  breadcrumb: string
  heroIconAccent?: SolutionAccent
  themeAccent?: SolutionAccent
  visual: SolutionDetailVisual
  lead: string
  summary: string
  primaryActionLabel: string
  capabilityLabel: string
  capabilities: EngineeringCapability[]
  processLabel: string
  process: SolutionProcessStep[]
  architectureLabel: string
  architectureVariant: SolutionArchitectureVariant
  architectureLayers: SolutionArchitectureLayer[]
  architectureNotes?: string[]
  secondaryLabel: string
  secondaryItems: SolutionUseCase[]
  workLabel: string
  work: EngineeringWorkItem[]
  systemLabel: string
  systemDescription: string
  systemSpecialists: SpecialistCard[]
  principlesLabel: string
  principles: ProductionPrinciple[]
  cta: SolutionDetailCta
  next: SolutionArea
}
