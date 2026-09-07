import type { ConsoleProject, ConsoleSession, ConsoleUser } from "./models"

const SESSION_KEY = "antikra.console.session"
const DATA_KEY = "antikra.console.data"

export const demoUser: ConsoleUser = {
  id: "user-bonny",
  name: "Bonny",
  email: "bonny@kafeero.ug",
  role: "Client lead",
}

export const demoSession: ConsoleSession = {
  user: demoUser,
  org: {
    id: "org-kafeero",
    name: "Kafeero & Co Advocates",
  },
}

export const seedProjects: ConsoleProject[] = [
  {
    id: "legal-practice",
    name: "Legal Practice Management Platform",
    stage: "Build",
    status: "On track",
    milestone: "Matter Management V1",
    nextRelease: "18 September 2026",
    stages: [
      { id: "discovery", title: "Discovery", done: true, active: false },
      { id: "architecture", title: "Architecture", done: true, active: false },
      { id: "build", title: "Build", done: false, active: true },
      { id: "validation", title: "Validation", done: false, active: false },
      { id: "production", title: "Production", done: false, active: false },
    ],
    roadmap: [
      { id: "r1", title: "Matter intake & filing", timing: "Complete", status: "Done" },
      { id: "r2", title: "Hearing synchronization", timing: "In build", status: "Active" },
      { id: "r3", title: "Document search v2", timing: "September", status: "Planned" },
      { id: "r4", title: "Billing module", timing: "October", status: "Planned" },
    ],
    decisions: [
      {
        id: "dec-028",
        code: "DEC-028",
        title: "Should SPI hearing synchronization use polling or event-based ingestion?",
        status: "Decision required",
        recommended: "Event-based where supported",
        impact: "Architecture / Infrastructure",
        owner: "ANTIKRA Mechanism",
        clientApprovalRequired: true,
      },
      {
        id: "dec-021",
        code: "DEC-021",
        title: "Retain matter documents in Uganda-region storage only?",
        status: "Approved",
        recommended: "Yes — Uganda region primary",
        impact: "Infrastructure / Compliance",
        owner: "ANTIKRA Cosmos",
        clientApprovalRequired: true,
      },
    ],
    requests: [
      {
        id: "req-014",
        title: "Add matter activity timeline",
        type: "Feature",
        status: "Building",
        submittedAt: "2026-08-22",
        description: "Show chronological activity for each matter including filings and hearings.",
      },
      {
        id: "req-019",
        title: "Calendar timezone correction",
        type: "Problem",
        status: "Released",
        submittedAt: "2026-08-01",
        description: "Hearing times shifting incorrectly for upcountry chambers.",
      },
    ],
    releases: [
      {
        id: "rel-280",
        version: "2.8.0",
        environment: "Production",
        date: "4 September 2026",
        added: ["SPI hearing synchronization", "Matter activity timeline"],
        improved: ["Document search"],
        fixed: ["Calendar timezone issue"],
        deploymentHealthy: true,
      },
      {
        id: "rel-270",
        version: "2.7.0",
        environment: "Production",
        date: "12 August 2026",
        added: ["Matter intake wizard"],
        improved: ["Role permissions"],
        fixed: ["PDF preview crash"],
        deploymentHealthy: true,
      },
    ],
    environments: [
      {
        id: "prod",
        name: "Production",
        status: "Operational",
        version: "2.8.0",
        lastDeployment: "4 Sep 2026, 14:42",
        services: "Healthy",
      },
      {
        id: "staging",
        name: "Staging",
        status: "Operational",
        version: "2.9.0-rc.1",
        lastDeployment: "6 Sep 2026, 09:18",
        services: "Healthy",
      },
      {
        id: "dev",
        name: "Development",
        status: "Operational",
        version: "2.9.0-dev",
        lastDeployment: "7 Sep 2026, 11:05",
        services: "Healthy",
      },
    ],
    documents: [
      { id: "d1", name: "Architecture proposal v3", category: "Architecture", updatedAt: "2026-09-05", version: "3.0" },
      { id: "d2", name: "Requirements — Matter Management", category: "Requirements", updatedAt: "2026-08-18", version: "1.4" },
      { id: "d3", name: "Master services agreement", category: "Contracts", updatedAt: "2026-03-02", version: "1.0" },
      { id: "d4", name: "Security review summary", category: "Reports", updatedAt: "2026-07-30", version: "1.1" },
    ],
    activity: [
      { id: "a1", text: "Deployment completed — 2.8.0 to Production", at: "4 Sep 2026" },
      { id: "a2", text: "Document uploaded — Architecture proposal v3", at: "5 Sep 2026" },
      { id: "a3", text: "ANTIKRA responded to request REQ-014", at: "3 Sep 2026" },
      { id: "a4", text: "Decision DEC-028 awaiting approval", at: "2 Sep 2026" },
    ],
    team: [
      { id: "t1", name: "Amina N.", role: "Engagement lead", company: "ANTIKRA" },
      { id: "t2", name: "David K.", role: "Engineering lead", company: "Mechanism" },
      { id: "t3", name: "Cosmos", role: "Infrastructure", company: "Cosmos" },
    ],
    billing: {
      contractValue: "UGX 186,000,000",
      paid: "UGX 124,000,000",
      outstanding: "UGX 62,000,000",
      nextInvoice: "18 September 2026",
      invoices: [
        { id: "inv-1", label: "INV-2026-08", amount: "UGX 31,000,000", status: "Paid", dueDate: "18 Aug 2026" },
        { id: "inv-2", label: "INV-2026-09", amount: "UGX 31,000,000", status: "Due", dueDate: "18 Sep 2026" },
      ],
    },
    support: [
      {
        id: "sup-1",
        title: "Slow document search on large matters",
        type: "Bug",
        status: "In progress",
        priority: "Medium",
        openedAt: "2026-09-01",
      },
    ],
    attention: [
      "Architecture proposal awaiting approval",
      "2 documents requiring review",
      "Invoice due 18 September",
    ],
  },
  {
    id: "infra-modernization",
    name: "Infrastructure modernization",
    stage: "Architecture",
    status: "On track",
    milestone: "Cloud landing zone",
    nextRelease: "October 2026",
    stages: [
      { id: "discovery", title: "Discovery", done: true, active: false },
      { id: "architecture", title: "Architecture", done: false, active: true },
      { id: "build", title: "Build", done: false, active: false },
      { id: "validation", title: "Validation", done: false, active: false },
      { id: "production", title: "Production", done: false, active: false },
    ],
    roadmap: [
      { id: "i1", title: "Landing zone design", timing: "Active", status: "Active" },
      { id: "i2", title: "Identity & network baseline", timing: "October", status: "Planned" },
      { id: "i3", title: "Observability stack", timing: "November", status: "Planned" },
    ],
    decisions: [
      {
        id: "dec-031",
        code: "DEC-031",
        title: "Primary cloud region for advocate systems?",
        status: "Decision required",
        recommended: "af-south-1 with Uganda edge caching",
        impact: "Infrastructure",
        owner: "ANTIKRA Cosmos",
        clientApprovalRequired: true,
      },
    ],
    requests: [],
    releases: [],
    environments: [
      {
        id: "staging",
        name: "Staging",
        status: "Operational",
        version: "0.3.0",
        lastDeployment: "1 Sep 2026, 16:10",
        services: "Healthy",
      },
    ],
    documents: [
      { id: "id1", name: "Infrastructure assessment", category: "Reports", updatedAt: "2026-08-28", version: "1.0" },
      { id: "id2", name: "Landing zone proposal", category: "Architecture", updatedAt: "2026-09-03", version: "0.9" },
    ],
    activity: [
      { id: "ia1", text: "Landing zone proposal shared for review", at: "3 Sep 2026" },
      { id: "ia2", text: "Discovery workshop completed", at: "20 Aug 2026" },
    ],
    team: [
      { id: "it1", name: "Amina N.", role: "Engagement lead", company: "ANTIKRA" },
      { id: "it2", name: "Joseph M.", role: "Infrastructure lead", company: "Cosmos" },
    ],
    billing: {
      contractValue: "UGX 72,000,000",
      paid: "UGX 24,000,000",
      outstanding: "UGX 48,000,000",
      nextInvoice: "30 September 2026",
      invoices: [
        { id: "iinv-1", label: "INV-INF-01", amount: "UGX 24,000,000", status: "Paid", dueDate: "30 Jul 2026" },
      ],
    },
    support: [],
    attention: ["Landing zone proposal requiring review"],
  },
]

export function getSession(): ConsoleSession | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY)
    return raw ? (JSON.parse(raw) as ConsoleSession) : null
  } catch {
    return null
  }
}

export function setSession(session: ConsoleSession) {
  localStorage.setItem(SESSION_KEY, JSON.stringify(session))
}

export function clearSession() {
  localStorage.removeItem(SESSION_KEY)
}

export function getProjects(): ConsoleProject[] {
  try {
    const raw = localStorage.getItem(DATA_KEY)
    if (raw) return JSON.parse(raw) as ConsoleProject[]
  } catch {
    /* fall through */
  }
  localStorage.setItem(DATA_KEY, JSON.stringify(seedProjects))
  return structuredClone(seedProjects)
}

export function saveProjects(projects: ConsoleProject[]) {
  localStorage.setItem(DATA_KEY, JSON.stringify(projects))
}

export function getProject(id: string) {
  return getProjects().find((project) => project.id === id)
}

export function updateProject(id: string, updater: (project: ConsoleProject) => ConsoleProject) {
  const projects = getProjects().map((project) => (project.id === id ? updater(project) : project))
  saveProjects(projects)
  return projects.find((project) => project.id === id)
}
