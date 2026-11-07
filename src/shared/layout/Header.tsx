import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { navMenu } from "../../domain/navigation"
import { Logo } from "../ui"

function getCurrentPath() {
  if (typeof window === "undefined") {
    return "/"
  }

  return window.location.pathname
}

function isActivePath(pathname: string, href?: string) {
  if (!href) {
    return false
  }

  if (href === "/") {
    return pathname === "/"
  }

  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [pathname, setPathname] = useState(getCurrentPath)

  useEffect(() => {
    const handleLocationChange = () => setPathname(getCurrentPath())

    window.addEventListener("popstate", handleLocationChange)
    return () => window.removeEventListener("popstate", handleLocationChange)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
    setPathname(getCurrentPath())
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-[var(--site-header-h)] w-full max-w-[1500px] items-center justify-between gap-5 px-5 sm:px-6 md:px-8 lg:px-10">
          <a href="/" className="inline-flex shrink-0 text-brand" aria-label="ANTIKRA home">
            <Logo size="lg" className="!h-9 !w-9 md:!h-11 md:!w-11" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navMenu.map((section) => {
              const active = isActivePath(pathname, section.href)

              return (
                <div key={section.label} className="group relative flex h-[var(--site-header-h)] items-center">
                  <a
                    href={section.href ?? "#"}
                    className={`relative inline-flex h-[var(--site-header-h)] items-center gap-1 text-[0.8125rem] font-medium tracking-[-0.01em] transition-colors ${
                      active ? "text-ink" : "text-ink/75 hover:text-brand"
                    }`}
                    aria-haspopup={section.children ? "menu" : undefined}
                  >
                    {section.label}
                    {section.children && (
                      <ChevronDown
                        className="h-3 w-3 opacity-70 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                        strokeWidth={1.8}
                      />
                    )}
                    {active && <span className="absolute bottom-[18px] left-0 h-px w-full bg-brand" />}
                  </a>
                  {section.children && (
                    <div
                      className="invisible absolute left-1/2 top-[calc(var(--site-header-h)-6px)] z-20 w-[290px] -translate-x-1/2 border border-black/10 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                      role="menu"
                    >
                      <div className="border-b border-black/8 px-3 py-3">
                        <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-brand">
                          {section.label}
                        </p>
                        <p className="mt-1 text-[0.72rem] leading-5 text-ink/55">{section.description}</p>
                      </div>
                      <div className="py-1">
                        {section.children.map((item) => (
                          <a
                            key={item.href}
                            href={item.href}
                            role="menuitem"
                            className="block border-b border-black/6 px-3 py-3 last:border-0 hover:bg-[#f8f2e9] focus:bg-[#f8f2e9] focus:outline-none"
                          >
                            <span className="block text-[0.82rem] font-semibold text-ink">{item.label}</span>
                            <span className="mt-0.5 block text-[0.68rem] leading-4 text-ink/50">{item.description}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="/console"
              className="inline-flex h-9 items-center gap-2 border border-brand/70 px-3 text-[0.7rem] font-semibold tracking-[-0.01em] text-brand transition-colors hover:bg-brand hover:text-white"
            >
              Console
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </a>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center border border-black/12 text-ink transition-colors hover:border-brand/45 hover:text-brand lg:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white lg:hidden">
          <div className="flex h-[var(--site-header-h)] items-center justify-between border-b border-black/8 px-5 sm:px-6">
            <Logo size="md" className="!h-9 !w-9" />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center border border-black/12 text-ink"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-4 w-4" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="flex h-[calc(100svh-var(--site-header-h))] flex-col overflow-y-auto px-5 py-5 sm:px-6">
            {navMenu.map((section) => (
              <div key={section.label} className="border-b border-black/8">
                <a
                  href={section.href ?? "#"}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-3.5 font-display text-[1.55rem] leading-none text-ink"
                >
                  {section.label}
                  {section.children && <ChevronDown className="h-4 w-4 text-brand" />}
                </a>
                {section.children && (
                  <div className="grid grid-cols-2 gap-x-4 pb-3.5">
                    {section.children.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={closeMenu}
                        className="py-1.5 text-[0.78rem] font-medium text-ink/60 hover:text-brand"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
