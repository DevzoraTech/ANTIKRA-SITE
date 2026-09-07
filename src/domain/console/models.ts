export type DecisionStatus = "Decision required" | "Approved" | "Changes requested" | "Discussing"
export type RequestStatus =
  | "Submitted"
  | "Reviewing"
  | "Scoped"
  | "Approved"
  | "Building"
  | "Released"
export type RequestType =
  | "Feature"
  | "Change"
  | "Problem"
  | "Infrastructure"
  | "Security"
  | "Data"
  | "Other"
export type SupportStatus = "Open" | "In progress" | "Resolved"
export type SupportType = "Incident" | "Bug" | "Service request" | "Question"
export type EnvironmentStatus = "Operational" | "Degraded" | "Maintenance"
export type ProjectStage = "Discovery" | "Architecture" | "Build" | "Validation" | "Production"

export interface ConsoleUser {
  id: string
  name: string
  email: string
  role: string
}

export interface ConsoleOrg {
  id: string
  name: string
}

export interface ConsoleTeamMember {
  id: string
  name: string
  role: string
  company: string
}

export interface ConsoleDecision {
  id: string
  code: string
  title: string
  status: DecisionStatus
  recommended: string
  impact: string
  owner: string
  clientApprovalRequired: boolean
}

export interface ConsoleRequest {
  id: string
  title: string
  type: RequestType
  status: RequestStatus
  submittedAt: string
  description: string
}

export interface ConsoleRelease {
  id: string
  version: string
  environment: string
  date: string
  added: string[]
  improved: string[]
  fixed: string[]
  deploymentHealthy: boolean
}

export interface ConsoleEnvironment {
  id: string
  name: string
  status: EnvironmentStatus
  version: string
  lastDeployment: string
  services: string
}

export interface ConsoleDocument {
  id: string
  name: string
  category: string
  updatedAt: string
  version: string
}

export interface ConsoleActivity {
  id: string
  text: string
  at: string
}

export interface ConsoleInvoice {
  id: string
  label: string
  amount: string
  status: "Paid" | "Due" | "Outstanding"
  dueDate: string
}

export interface ConsoleSupportTicket {
  id: string
  title: string
  type: SupportType
  status: SupportStatus
  priority: "Low" | "Medium" | "High"
  openedAt: string
}

export interface ConsoleProject {
  id: string
  name: string
  stage: ProjectStage
  status: "On track" | "At risk" | "Blocked"
  milestone: string
  nextRelease: string
  stages: Array<{ id: string; title: string; done: boolean; active: boolean }>
  roadmap: Array<{ id: string; title: string; timing: string; status: string }>
  decisions: ConsoleDecision[]
  requests: ConsoleRequest[]
  releases: ConsoleRelease[]
  environments: ConsoleEnvironment[]
  documents: ConsoleDocument[]
  activity: ConsoleActivity[]
  team: ConsoleTeamMember[]
  billing: {
    contractValue: string
    paid: string
    outstanding: string
    nextInvoice: string
    invoices: ConsoleInvoice[]
  }
  support: ConsoleSupportTicket[]
  attention: string[]
}

export interface ConsoleSession {
  user: ConsoleUser
  org: ConsoleOrg
}

export interface ConsoleGateContent {
  lead: string
  summary: string
  uses: Array<{ title: string; description: string }>
}
