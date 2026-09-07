import type { SolutionDetailContent } from "../../../domain/solutions"
import { productEngineeringContent, specialistCards } from "../../../domain/solutions"
import { SolutionDetailPage } from "../solution-detail/SolutionDetailPage"

const page: SolutionDetailContent = {
  id: "product-engineering",
  solution: productEngineeringContent.solution,
  heading: "Product Engineering",
  breadcrumb: "ANTIKRA / Solutions / Product Engineering",
  themeAccent: "green",
  visual: "engineering",
  lead: productEngineeringContent.lead,
  summary: productEngineeringContent.summary,
  primaryActionLabel: "Discuss your project",
  capabilityLabel: productEngineeringContent.capabilityLabel,
  capabilities: productEngineeringContent.capabilities,
  processLabel: productEngineeringContent.processLabel,
  process: productEngineeringContent.process,
  architectureLabel: "Solution architecture",
  architectureVariant: "engineering",
  architectureLayers: [
    {
      id: "operation",
      title: "Operational Model",
      description: "We start from how the organization actually works.",
      icon: "search",
      accent: "green",
    },
    {
      id: "product",
      title: "Product Surface",
      description: "Interfaces and workflows people use every day.",
      icon: "monitor",
      accent: "coral",
    },
    {
      id: "platform",
      title: "Platform & Services",
      description: "APIs, domains and reusable application services.",
      icon: "settings",
      accent: "blue",
    },
    {
      id: "data",
      title: "Data & Intelligence",
      description: "Structures that support reporting and decisions.",
      icon: "database",
      accent: "violet",
    },
    {
      id: "security",
      title: "Security Layer",
      description: "Access, protection and trust across the stack.",
      icon: "shield",
      accent: "blue",
    },
    {
      id: "ops",
      title: "Runtime Operations",
      description: "Deployment, observability and continuous evolution.",
      icon: "cloud",
      accent: "green",
    },
  ],
  secondaryLabel: "Engagement models",
  secondaryItems: productEngineeringContent.engagementModels.map((model) => ({
    id: model.id,
    title: model.title,
    description: model.description,
    icon: model.icon,
    accent: "green" as const,
  })),
  workLabel: "Relevant work",
  work: productEngineeringContent.work,
  systemLabel: "Delivered by specialists",
  systemDescription:
    "We combine the right ANTIKRA companies and capabilities for each product engineering engagement.",
  systemSpecialists: productEngineeringContent.architecture.length
    ? productEngineeringContent.architecture
    : specialistCards.slice(0, 5),
  principlesLabel: "Built for production",
  principles: productEngineeringContent.productionPrinciples,
  cta: {
    title: "Have a system worth building?",
    description:
      "Let's build technology that solves real problems and drives measurable impact for your organization.",
    buttonLabel: "Discuss your project",
  },
  next: productEngineeringContent.next,
}

export function ProductEngineeringSolutionPage() {
  return <SolutionDetailPage page={page} />
}
