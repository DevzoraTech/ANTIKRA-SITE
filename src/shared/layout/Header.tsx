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
      <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white/92 backdrop-blur-md">
        <div className="mx-auto flex h-[88px] w-full max-w-[1500px] items-center justify-between px-7 md:px-10 lg:px-12">
          <a href="/" className="shrink-0 text-brand" aria-label="ANTIKRA home">
            <Logo size="lg" />
          </a>

          <nav className="hidden items-center gap-10 xl:flex">
            {navMenu.map((section) => {
              const active = isActivePath(pathname, section.href)

              return (
                <a
                  key={section.label}
                  href={section.href ?? "#"}
                  className={`relative inline-flex h-[88px] items-center gap-1.5 text-[15px] font-medium transition-colors ${
                    active ? "text-ink" : "text-ink/86 hover:text-brand"
                  }`}
                >
                  {section.label}
                  {section.children && (
                    <ChevronDown className="h-3.5 w-3.5" strokeWidth={1.8} />
                  )}
                  {active && (
                    <span className="absolute bottom-[26px] left-0 h-px w-full bg-brand" />
                  )}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/console"
              className="hidden h-11 items-center gap-4 border border-brand px-5 text-sm font-medium text-brand transition-colors hover:bg-brand hover:text-white md:inline-flex"
            >
              Console
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.7} />
            </a>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-brand/35 text-brand xl:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white xl:hidden">
          <div className="flex h-[88px] items-center justify-between border-b border-black/10 px-7">
            <Logo size="md" />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center border border-brand/35 text-brand"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="px-7 py-8">
            {navMenu.map((section) => (
              <a
                key={section.label}
                href={section.href ?? "#"}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-black/10 py-5 font-display text-2xl text-ink"
              >
                {section.label}
                {section.children && (
                  <ChevronDown className="h-4 w-4 text-brand" />
                )}
              </a>
            ))}
            <a
              href="/console"
              onClick={closeMenu}
              className="mt-8 inline-flex h-12 items-center gap-4 border border-brand px-5 text-sm font-medium text-brand"
            >
              Console
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
