import { useMemo, useState, type FormEvent } from "react"
import type { ConsoleProject, RequestType } from "../../domain/console"
import { getProject, getProjects, updateProject } from "../../domain/console"

const tabs = [
  "Overview",
  "Roadmap",
  "Releases",
  "Decisions",
  "Documents",
  "Environments",
  "Requests",
  "Billing",
  "Team",
  "Support",
  "Activity",
] as const

type Tab = (typeof tabs)[number]

export function ProjectWorkspace({ projectId }: { projectId: string }) {
  const [project, setProject] = useState<ConsoleProject | undefined>(() => getProject(projectId))
  const [tab, setTab] = useState<Tab>("Overview")
  const [message, setMessage] = useState("")

  const refresh = () => setProject(getProject(projectId))

  if (!project) {
    return (
      <div className="mx-auto max-w-[900px] px-5 py-16">
        <h1 className="font-display text-[2rem] font-semibold">Project not found</h1>
        <a href="/console/projects" className="mt-4 inline-block text-[#9a6d23]">
          Back to projects
        </a>
      </div>
    )
  }

  const approveDecision = (decisionId: string) => {
    updateProject(projectId, (current) => ({
      ...current,
      decisions: current.decisions.map((decision) =>
        decision.id === decisionId ? { ...decision, status: "Approved" } : decision,
      ),
      activity: [
        {
          id: `act-${Date.now()}`,
          text: `Decision approved`,
          at: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
        },
        ...current.activity,
      ],
    }))
    setMessage("Decision approved.")
    refresh()
  }

  const requestChanges = (decisionId: string) => {
    updateProject(projectId, (current) => ({
      ...current,
      decisions: current.decisions.map((decision) =>
        decision.id === decisionId ? { ...decision, status: "Changes requested" } : decision,
      ),
    }))
    setMessage("Changes requested.")
    refresh()
  }

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const title = String(data.get("title") ?? "").trim()
    const type = String(data.get("type") ?? "Feature") as RequestType
    const description = String(data.get("description") ?? "").trim()
    if (!title || !description) return
    updateProject(projectId, (current) => ({
      ...current,
      requests: [
        {
          id: `req-${Date.now()}`,
          title,
          type,
          status: "Submitted",
          submittedAt: new Date().toISOString().slice(0, 10),
          description,
        },
        ...current.requests,
      ],
      activity: [
        {
          id: `act-${Date.now()}`,
          text: `Request submitted — ${title}`,
          at: new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
        },
        ...current.activity,
      ],
    }))
    event.currentTarget.reset()
    setMessage("Request submitted.")
    setTab("Requests")
    refresh()
  }

  const openSupport = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const title = String(data.get("title") ?? "").trim()
    const type = String(data.get("type") ?? "Question") as ConsoleProject["support"][number]["type"]
    if (!title) return
    updateProject(projectId, (current) => ({
      ...current,
      support: [
        {
          id: `sup-${Date.now()}`,
          title,
          type,
          status: "Open",
          priority: "Medium",
          openedAt: new Date().toISOString().slice(0, 10),
        },
        ...current.support,
      ],
    }))
    event.currentTarget.reset()
    setMessage("Support ticket opened.")
    refresh()
  }

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-8 md:px-8">
      <a href="/console/projects" className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
        Projects
      </a>
      <div className="mt-3 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em] md:text-[3rem]">
            {project.name}
          </h1>
          <p className="mt-2 text-[0.9rem] text-[#2c2824]">
            {project.stage} · {project.status} · Milestone: {project.milestone}
          </p>
        </div>
        <p className="text-[0.84rem] text-[#2c2824]">Next release · {project.nextRelease}</p>
      </div>

      {message && (
        <p className="mt-4 border border-[#0d6b47]/30 bg-[#0d6b47]/10 px-4 py-2 text-[0.84rem] text-[#0d6b47]">
          {message}
        </p>
      )}

      <div className="mt-8 flex gap-2 overflow-x-auto border-b border-black/10 pb-px">
        {tabs.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setTab(item)}
            className={`whitespace-nowrap border-b-2 px-3 py-3 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] ${
              tab === item
                ? "border-[#9a6d23] text-[#9a6d23]"
                : "border-transparent text-[#15110f]/45 hover:text-[#15110f]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {tab === "Overview" && (
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="border border-black/10 bg-[#f8f2e9] p-6">
              <h2 className="font-display text-[1.4rem] font-semibold">Progression</h2>
              <ol className="mt-6 flex flex-wrap gap-3">
                {project.stages.map((stage) => (
                  <li
                    key={stage.id}
                    className={`border px-3 py-2 text-[0.82rem] ${
                      stage.active
                        ? "border-[#9a6d23] bg-[#9a6d23] text-white"
                        : stage.done
                          ? "border-black/15 text-[#0d6b47]"
                          : "border-black/10 text-[#15110f]/40"
                    }`}
                  >
                    {stage.title}
                    {stage.done ? " ✓" : stage.active ? " ●" : ""}
                  </li>
                ))}
              </ol>
            </div>
            <div className="border border-black/10 bg-[#f8f2e9] p-6">
              <h2 className="font-display text-[1.4rem] font-semibold">Needs attention</h2>
              <ul className="mt-4 space-y-2">
                {project.attention.map((item) => (
                  <li key={item} className="border-t border-black/10 pt-3 text-[0.9rem]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === "Roadmap" && (
          <ul className="divide-y divide-black/10 border border-black/10 bg-[#f8f2e9]">
            {project.roadmap.map((item) => (
              <li key={item.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
                <p className="font-display text-[1.15rem] font-semibold">{item.title}</p>
                <p className="text-[0.82rem] text-[#2c2824]">
                  {item.timing} · {item.status}
                </p>
              </li>
            ))}
          </ul>
        )}

        {tab === "Releases" && (
          <div className="space-y-6">
            {project.releases.length === 0 && <p className="text-[#2c2824]">No releases yet.</p>}
            {project.releases.map((release) => (
              <article key={release.id} className="border border-black/10 bg-[#f8f2e9] p-6">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <h2 className="font-display text-[1.6rem] font-semibold">Release {release.version}</h2>
                  <p className="text-[0.82rem] text-[#2c2824]">
                    {release.environment} · {release.date}
                  </p>
                </div>
                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
                      Added
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.88rem]">
                      {release.added.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
                      Improved
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.88rem]">
                      {release.improved.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
                      Fixed
                    </p>
                    <ul className="mt-2 space-y-1 text-[0.88rem]">
                      {release.fixed.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-6 text-[0.84rem] text-[#0d6b47]">
                  Deployment · {release.deploymentHealthy ? "Production healthy ✓" : "Attention required"}
                </p>
              </article>
            ))}
          </div>
        )}

        {tab === "Decisions" && (
          <div className="space-y-5">
            {project.decisions.map((decision) => (
              <article key={decision.id} className="border border-black/10 bg-[#f8f2e9] p-6">
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                  {decision.code} · {decision.status}
                </p>
                <h2 className="mt-3 font-display text-[1.35rem] font-semibold">{decision.title}</h2>
                <dl className="mt-4 grid gap-3 text-[0.86rem] md:grid-cols-3">
                  <div>
                    <dt className="text-[#15110f]/45">Recommended</dt>
                    <dd className="mt-1">{decision.recommended}</dd>
                  </div>
                  <div>
                    <dt className="text-[#15110f]/45">Impact</dt>
                    <dd className="mt-1">{decision.impact}</dd>
                  </div>
                  <div>
                    <dt className="text-[#15110f]/45">Owner</dt>
                    <dd className="mt-1">{decision.owner}</dd>
                  </div>
                </dl>
                {decision.status === "Decision required" && decision.clientApprovalRequired && (
                  <div className="mt-5 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => approveDecision(decision.id)}
                      className="h-10 bg-[#0d6b47] px-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white"
                    >
                      Approve
                    </button>
                    <button
                      type="button"
                      onClick={() => requestChanges(decision.id)}
                      className="h-10 border border-black/20 px-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em]"
                    >
                      Request changes
                    </button>
                  </div>
                )}
              </article>
            ))}
          </div>
        )}

        {tab === "Documents" && <DocumentsList documents={project.documents} />}

        {tab === "Environments" && (
          <div className="grid gap-4 md:grid-cols-3">
            {project.environments.map((env) => (
              <article key={env.id} className="border border-black/10 bg-[#f8f2e9] p-5">
                <h2 className="font-display text-[1.3rem] font-semibold">{env.name}</h2>
                <p className="mt-2 text-[0.84rem] text-[#0d6b47]">{env.status}</p>
                <dl className="mt-4 space-y-2 text-[0.84rem]">
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#15110f]/45">Version</dt>
                    <dd>{env.version}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#15110f]/45">Last deployment</dt>
                    <dd className="text-right">{env.lastDeployment}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="text-[#15110f]/45">Services</dt>
                    <dd>{env.services}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        )}

        {tab === "Requests" && (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <form onSubmit={submitRequest} className="border border-black/10 bg-[#f8f2e9] p-6">
              <h2 className="font-display text-[1.4rem] font-semibold">New request</h2>
              <label className="mt-5 block">
                <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                  Title
                </span>
                <input name="title" required className="mt-2 h-10 w-full border border-black/15 bg-white px-3" />
              </label>
              <label className="mt-4 block">
                <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                  Type
                </span>
                <select name="type" className="mt-2 h-10 w-full border border-black/15 bg-white px-3">
                  {["Feature", "Change", "Problem", "Infrastructure", "Security", "Data", "Other"].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <label className="mt-4 block">
                <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                  Description
                </span>
                <textarea name="description" required rows={4} className="mt-2 w-full border border-black/15 bg-white px-3 py-2" />
              </label>
              <button
                type="submit"
                className="mt-5 h-10 bg-[#9a6d23] px-5 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white"
              >
                Submit request
              </button>
            </form>
            <ul className="space-y-3">
              {project.requests.map((request) => (
                <li key={request.id} className="border border-black/10 bg-[#f8f2e9] p-5">
                  <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
                    {request.type} · {request.status}
                  </p>
                  <p className="mt-2 font-display text-[1.2rem] font-semibold">{request.title}</p>
                  <p className="mt-2 text-[0.84rem] text-[#2c2824]">{request.description}</p>
                  <p className="mt-3 text-[0.72rem] text-[#15110f]/45">Submitted {request.submittedAt}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "Billing" && <BillingPanel billing={project.billing} />}

        {tab === "Team" && (
          <ul className="grid gap-4 md:grid-cols-3">
            {project.team.map((member) => (
              <li key={member.id} className="border border-black/10 bg-[#f8f2e9] p-5">
                <p className="font-display text-[1.25rem] font-semibold">{member.name}</p>
                <p className="mt-1 text-[0.84rem] text-[#2c2824]">
                  {member.role} · {member.company}
                </p>
              </li>
            ))}
          </ul>
        )}

        {tab === "Support" && (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <form onSubmit={openSupport} className="border border-black/10 bg-[#f8f2e9] p-6">
              <h2 className="font-display text-[1.4rem] font-semibold">New ticket</h2>
              <label className="mt-5 block">
                <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                  Title
                </span>
                <input name="title" required className="mt-2 h-10 w-full border border-black/15 bg-white px-3" />
              </label>
              <label className="mt-4 block">
                <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                  Type
                </span>
                <select name="type" className="mt-2 h-10 w-full border border-black/15 bg-white px-3">
                  {["Incident", "Bug", "Service request", "Question"].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </label>
              <button
                type="submit"
                className="mt-5 h-10 bg-[#9a6d23] px-5 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white"
              >
                Open ticket
              </button>
            </form>
            <ul className="space-y-3">
              {project.support.length === 0 && <p className="text-[#2c2824]">No support tickets.</p>}
              {project.support.map((ticket) => (
                <li key={ticket.id} className="border border-black/10 bg-[#f8f2e9] p-5">
                  <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
                    {ticket.type} · {ticket.status} · {ticket.priority}
                  </p>
                  <p className="mt-2 font-display text-[1.15rem] font-semibold">{ticket.title}</p>
                  <p className="mt-2 text-[0.72rem] text-[#15110f]/45">Opened {ticket.openedAt}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tab === "Activity" && (
          <ul className="divide-y divide-black/10 border border-black/10 bg-[#f8f2e9]">
            {project.activity.map((item) => (
              <li key={item.id} className="px-5 py-4">
                <p className="text-[0.92rem]">{item.text}</p>
                <p className="mt-1 text-[0.72rem] text-[#15110f]/45">{item.at}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

function DocumentsList({ documents }: { documents: ConsoleProject["documents"] }) {
  return (
    <ul className="divide-y divide-black/10 border border-black/10 bg-[#f8f2e9]">
      {documents.map((doc) => (
        <li key={doc.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <p className="font-display text-[1.15rem] font-semibold">{doc.name}</p>
            <p className="text-[0.78rem] text-[#2c2824]">
              {doc.category} · v{doc.version}
            </p>
          </div>
          <p className="text-[0.78rem] text-[#15110f]/45">Updated {doc.updatedAt}</p>
        </li>
      ))}
    </ul>
  )
}

function BillingPanel({ billing }: { billing: ConsoleProject["billing"] }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Contract value", billing.contractValue],
          ["Paid", billing.paid],
          ["Outstanding", billing.outstanding],
          ["Next invoice", billing.nextInvoice],
        ].map(([label, value]) => (
          <div key={label} className="border border-black/10 bg-[#f8f2e9] p-5">
            <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
              {label}
            </p>
            <p className="mt-2 font-display text-[1.25rem] font-semibold">{value}</p>
          </div>
        ))}
      </div>
      <ul className="divide-y divide-black/10 border border-black/10 bg-[#f8f2e9]">
        {billing.invoices.map((invoice) => (
          <li key={invoice.id} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div>
              <p className="font-display text-[1.1rem] font-semibold">{invoice.label}</p>
              <p className="text-[0.78rem] text-[#2c2824]">Due {invoice.dueDate}</p>
            </div>
            <p className="text-[0.9rem]">
              {invoice.amount} · {invoice.status}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConsoleProjectsPage() {
  const projects = useMemo(() => getProjects(), [])
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <h1 className="font-display text-[2.4rem] font-semibold">Projects</h1>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <a href={`/console/projects/${project.id}`} className="block border border-black/10 bg-[#f8f2e9] p-6 hover:border-[#9a6d23]/40">
              <p className="font-display text-[1.45rem] font-semibold">{project.name}</p>
              <p className="mt-2 text-[0.86rem] text-[#2c2824]">
                {project.stage} · {project.status}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConsoleDocumentsPage() {
  const docs = getProjects().flatMap((project) =>
    project.documents.map((doc) => ({ ...doc, projectName: project.name, projectId: project.id })),
  )
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <h1 className="font-display text-[2.4rem] font-semibold">Documents</h1>
      <ul className="mt-8 divide-y divide-black/10 border border-black/10 bg-[#f8f2e9]">
        {docs.map((doc) => (
          <li key={`${doc.projectId}-${doc.id}`} className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div>
              <p className="font-display text-[1.15rem] font-semibold">{doc.name}</p>
              <p className="text-[0.78rem] text-[#2c2824]">
                {doc.projectName} · {doc.category}
              </p>
            </div>
            <a href={`/console/projects/${doc.projectId}`} className="text-[0.78rem] text-[#9a6d23]">
              Open project
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ConsoleBillingPage() {
  const projects = getProjects()
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <h1 className="font-display text-[2.4rem] font-semibold">Billing</h1>
      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <section key={project.id} className="border border-black/10 bg-[#f8f2e9] p-6">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <h2 className="font-display text-[1.4rem] font-semibold">{project.name}</h2>
              <a href={`/console/projects/${project.id}`} className="text-[0.78rem] text-[#9a6d23]">
                Open project
              </a>
            </div>
            <p className="mt-3 text-[0.88rem] text-[#2c2824]">
              Outstanding {project.billing.outstanding} · Next invoice {project.billing.nextInvoice}
            </p>
          </section>
        ))}
      </div>
    </div>
  )
}

export function ConsoleSupportPage() {
  const tickets = getProjects().flatMap((project) =>
    project.support.map((ticket) => ({ ...ticket, projectName: project.name, projectId: project.id })),
  )
  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <h1 className="font-display text-[2.4rem] font-semibold">Support</h1>
      <ul className="mt-8 space-y-3">
        {tickets.length === 0 && <p className="text-[#2c2824]">No open support tickets.</p>}
        {tickets.map((ticket) => (
          <li key={`${ticket.projectId}-${ticket.id}`} className="border border-black/10 bg-[#f8f2e9] p-5">
            <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]">
              {ticket.type} · {ticket.status}
            </p>
            <p className="mt-2 font-display text-[1.2rem] font-semibold">{ticket.title}</p>
            <a href={`/console/projects/${ticket.projectId}`} className="mt-2 inline-block text-[0.78rem] text-[#9a6d23]">
              {ticket.projectName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
