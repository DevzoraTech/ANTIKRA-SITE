import type { NavSection } from "./models"

export const navMenu: NavSection[] = [
  {
    label: "Companies",
    href: "/companies",
    description: "Six specialist companies in one integrated system.",
    children: [
      {
        label: "Mechanism",
        href: "/companies/mechanism",
        description: "Product engineering.",
      },
      {
        label: "Cosmos",
        href: "/companies/cosmos",
        description: "Cloud and infrastructure.",
      },
      {
        label: "Orrery",
        href: "/companies/orrery",
        description: "AI and data.",
      },
      {
        label: "Astra",
        href: "/companies/astra",
        description: "Cybersecurity.",
      },
      {
        label: "Helios",
        href: "/companies/helios",
        description: "Experience and design.",
      },
      {
        label: "Olympia",
        href: "/companies/olympia",
        description: "Ventures.",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description: "Technology built, owned and operated by ANTIKRA.",
    children: [
      {
        label: "Rembeh",
        href: "/products/rembeh",
        description: "Financial operations infrastructure.",
      },
      {
        label: "Carmie",
        href: "/products/carmie",
        description: "Automotive service infrastructure.",
      },
    ],
  },
  {
    label: "Solutions",
    href: "/solutions",
    description: "Capabilities clients can engage ANTIKRA to deliver.",
    children: [
      {
        label: "Product Engineering",
        href: "/solutions/product-engineering",
        description: "Digital products and operational systems.",
      },
      {
        label: "Cloud & Infrastructure",
        href: "/solutions/cloud-infrastructure",
        description: "Reliable operating foundations.",
      },
      {
        label: "AI & Data",
        href: "/solutions/ai-data",
        description: "Intelligence and automation.",
      },
      {
        label: "Cybersecurity",
        href: "/solutions/cybersecurity",
        description: "Security across the system.",
      },
      {
        label: "Experience & Design",
        href: "/solutions/experience-design",
        description: "Clear product experiences.",
      },
      {
        label: "Venture Building",
        href: "/solutions/venture-building",
        description: "From opportunity to operating company.",
      },
    ],
  },
  {
    label: "Work",
    href: "/work",
    description: "Case studies and delivery evidence.",
  },
  {
    label: "Research",
    href: "/research",
    description: "Research, publications and technical thinking.",
  },
  {
    label: "Company",
    href: "/company",
    description: "Institutional information about ANTIKRA.",
    children: [
      { label: "About", href: "/company", description: "The ANTIKRA model." },
      { label: "Leadership", href: "/company/leadership", description: "People shaping the group." },
      { label: "Careers", href: "/company/careers", description: "Build serious technology with us." },
      { label: "Contact", href: "/company/contact", description: "Route an enquiry." },
    ],
  },
]

export const navLinks = navMenu.map((section) => ({
  label: section.label,
  href: section.href ?? section.children?.[0]?.href ?? "#",
}))
