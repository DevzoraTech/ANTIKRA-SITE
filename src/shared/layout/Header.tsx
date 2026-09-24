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
                <div key={section.label} className="group relative flex h-[88px] items-center">
                  <a
                    href={section.href ?? "#"}
                    className={`relative inline-flex h-[88px] items-center gap-1.5 text-[15px] font-medium transition-colors ${
                      active ? "text-ink" : "text-ink/86 hover:text-brand"
                    }`}
                    aria-haspopup={section.children ? "menu" : undefined}
                  >
                    {section.label}
                    {section.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" strokeWidth={1.8} />}
                    {active && <span className="absolute bottom-[26px] left-0 h-px w-full bg-brand" />}
                  </a>
                  {section.children && (
                    <div className="invisible absolute left-1/2 top-[76px] z-20 w-[290px] -translate-x-1/2 border border-black/10 bg-white p-2 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.12)] transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100" role="menu">
                      <div className="border-b border-black/8 px-3 py-3">
                        <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-brand">{section.label}</p>
                        <p className="mt-1 text-[0.72rem] leading-5 text-ink/55">{section.description}</p>
                      </div>
                      <div className="py-1">
                        {section.children.map((item) => (
                          <a key={item.href} href={item.href} role="menuitem" className="block border-b border-black/6 px-3 py-3 last:border-0 hover:bg-[#f8f2e9] focus:bg-[#f8f2e9] focus:outline-none">
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
              <div key={section.label} className="border-b border-black/10">
                <a href={section.href ?? "#"} onClick={closeMenu} className="flex items-center justify-between py-4 font-display text-2xl text-ink">
                  {section.label}
                  {section.children && <ChevronDown className="h-4 w-4 text-brand" />}
                </a>
                {section.children && (
                  <div className="grid grid-cols-2 gap-x-5 pb-4">
                    {section.children.map((item) => (
                      <a key={item.href} href={item.href} onClick={closeMenu} className="py-2 text-[0.78rem] font-medium text-ink/60 hover:text-brand">{item.label}</a>
                    ))}
                  </div>
                )}
              </div>
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
