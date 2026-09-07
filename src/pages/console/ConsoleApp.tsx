import { useEffect, useState } from "react"
import { Header, Footer } from "../../shared/layout"
import { getSession, type ConsoleSession } from "../../domain/console"
import { ConsoleGatePage } from "./ConsoleGatePage"
import { ConsoleLayout } from "./ConsoleLayout"
import { ConsoleHomePage } from "./ConsoleHomePage"
import {
  ConsoleBillingPage,
  ConsoleDocumentsPage,
  ConsoleProjectsPage,
  ConsoleSupportPage,
  ProjectWorkspace,
} from "./ProjectWorkspace"

export function ConsoleApp() {
  const [session, setSessionState] = useState<ConsoleSession | null>(null)
  const [ready, setReady] = useState(false)
  const pathname = window.location.pathname

  useEffect(() => {
    setSessionState(getSession())
    setReady(true)
  }, [])

  if (!ready) {
    return <div className="min-h-screen bg-[#111414]" />
  }

  if (!session) {
    return (
      <>
        <Header />
        <main>
          <ConsoleGatePage />
        </main>
        <Footer />
      </>
    )
  }

  const projectMatch = pathname.match(/^\/console\/projects\/([^/]+)/)
  let body = <ConsoleHomePage session={session} />

  if (pathname === "/console/projects" || pathname === "/console/projects/") {
    body = <ConsoleProjectsPage />
  } else if (projectMatch) {
    body = <ProjectWorkspace projectId={projectMatch[1]} />
  } else if (pathname.startsWith("/console/documents")) {
    body = <ConsoleDocumentsPage />
  } else if (pathname.startsWith("/console/billing")) {
    body = <ConsoleBillingPage />
  } else if (pathname.startsWith("/console/support")) {
    body = <ConsoleSupportPage />
  }

  return <ConsoleLayout session={session}>{body}</ConsoleLayout>
}
