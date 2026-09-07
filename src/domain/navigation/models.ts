export interface NavChild {
  label: string
  href: string
  description?: string
}

export interface NavSection {
  label: string
  href?: string
  description?: string
  children?: NavChild[]
}
