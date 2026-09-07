import type { ReactNode } from "react"
import { clearSession, type ConsoleSession } from "../../domain/console"

const nav = [
  { label: "Home", href: "/console" },
  { label: "Projects", href: "/console/projects" },
  { label: "Documents", href: "/console/documents" },
  { label: "Billing", href: "/console/billing" },
  { label: "Support", href: "/console/support" },
]

export function ConsoleLayout({
  session,
  children,
}: {
  session: ConsoleSession
  children: ReactNode
}) {
  const pathname = window.location.pathname

  const signOut = () => {
    clearSession()
    window.location.href = "/console"
  }

  return (
    <div className="min-h-screen bg-[#f4eee5] text-[#141414]">
      <header className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto flex h-14 max-w-[1500px] items-center justify-between px-5 md:px-8">
          <div className="flex items-center gap-8">
            <a href="/console" className="font-display text-[1.15rem] font-semibold tracking-[0.12em]">
              ANTIKRA <span className="text-[#e5d0aa]">Console</span>
            </a>
            <nav className="hidden items-center gap-5 md:flex">
              {nav.map((item) => {
                const active =
                  item.href === "/console"
                    ? pathname === "/console" || pathname === "/console/"
                    : pathname.startsWith(item.href)
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] ${
                      active ? "text-[#e5d0aa]" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden text-right sm:block">
              <p className="text-[0.78rem] font-semibold">{session.user.name}</p>
              <p className="text-[0.68rem] text-white/45">{session.org.name}</p>
            </div>
            <button
              type="button"
              onClick={signOut}
              className="h-9 border border-white/20 px-3 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] text-white/80 hover:bg-white/10"
            >
              Sign out
            </button>
          </div>
        </div>
        <nav className="flex gap-4 overflow-x-auto border-t border-white/10 px-5 py-3 md:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] text-white/70"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
