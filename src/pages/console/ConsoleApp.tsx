import { useEffect, useState } from "react"
import { Footer, Header } from "../../shared/layout"
import { ConsoleApiError, getConsoleSession, type ConsoleSession } from "../../domain/console"
import { ConsoleGatePage } from "./ConsoleGatePage"
import { ConsoleLayout } from "./ConsoleLayout"

export function ConsoleApp() {
  const [session, setSession] = useState<ConsoleSession | null>(null)
  const [checkingSession, setCheckingSession] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    getConsoleSession(controller.signal)
      .then(setSession)
      .catch((error: unknown) => {
        if (!(error instanceof ConsoleApiError && error.status === 401)) {
          console.warn("Console session verification failed.")
        }
        setSession(null)
      })
      .finally(() => setCheckingSession(false))
    return () => controller.abort()
  }, [])

  if (checkingSession) {
    return <div className="flex min-h-screen items-center justify-center bg-[#111414] text-white"><p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-white/55">Verifying secure session</p></div>
  }

  if (!session) {
    return <><Header /><main><ConsoleGatePage onAuthenticated={setSession} /></main><Footer /></>
  }

  return (
    <ConsoleLayout session={session} onSignedOut={() => setSession(null)}>
      <section className="mx-auto max-w-[980px] px-5 py-16 md:px-8 md:py-24">
        <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#9a6d23]">Secure workspace</p>
        <h1 className="mt-4 font-display text-[2.8rem] font-semibold leading-none tracking-[-0.02em] md:text-[4rem]">Welcome, {session.user.name}.</h1>
        <p className="mt-5 max-w-[620px] text-[1rem] leading-7 text-[#2c2824]">Your identity has been verified by the ANTIKRA Console service. Project data will appear here when your organization workspace is provisioned.</p>
      </section>
    </ConsoleLayout>
  )
}
