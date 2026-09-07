import type { ConsoleGateContent } from "./models"

export const consoleGate: ConsoleGateContent = {
  lead: "Work with ANTIKRA.",
  summary:
    "Continue projects, review documents, approve decisions, raise requests, and manage your product relationship—in one place.",
  uses: [
    {
      title: "Projects",
      description: "Follow progress, milestones and releases on active engagements.",
    },
    {
      title: "Decisions & requests",
      description: "Approve architecture choices and submit structured change requests.",
    },
    {
      title: "Documents & billing",
      description: "Access proposals, contracts, reports and invoices.",
    },
    {
      title: "Support",
      description: "Report incidents and track resolution once systems are live.",
    },
  ],
}

export * from "./session"
