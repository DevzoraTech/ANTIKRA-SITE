import { useState, type ReactNode } from "react"
import { signOutOfConsole, type ConsoleSession } from "../../domain/console"

export function ConsoleLayout({
  session,
  onSignedOut,
  children,
}: {
  session: ConsoleSession
  onSignedOut: () => void
  children: ReactNode
}) {
  const [signingOut, setSigningOut] = useState(false)

  const signOut = async () => {
    setSigningOut(true)
    try {
      await signOutOfConsole()
    } finally {
      onSignedOut()
      setSigningOut(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f4eee5] text-[#141414]">
      <header className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-8">
            <a href="/console" className="font-display text-[1.15rem] font-semibold tracking-[0.12em]">
              ANTIKRA <span className="text-[#e5d0aa]">Console</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-[0.78rem] font-semibold">{session.user.name}</p>
              <p className="text-[0.68rem] text-white/45">{session.org.name}</p>
            </div>
            <button
              type="button"
              onClick={signOut}
              disabled={signingOut}
              className="h-9 border border-white/20 px-3 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] text-white/80 hover:bg-white/10"
            >
              {signingOut ? "Signing out" : "Sign out"}
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}
