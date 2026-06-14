import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react"
import { Logo } from "./Logo"
import { Button } from "./Button"
import { navMenu } from "../data/navigation"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileSection, setMobileSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [menuOpen])

  const closeMenus = () => {
    setActiveMenu(null)
    setMenuOpen(false)
    setMobileSection(null)
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          scrolled || activeMenu
            ? "border-b border-brand/10 bg-white/95 shadow-sm backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-md"
        }`}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="container-wide flex items-center justify-between gap-6 px-5 py-3.5 md:px-10 lg:px-16">
          <a
            href="#"
            className="relative z-10 shrink-0 text-ink"
            aria-label="ANTIKRA home"
            onClick={closeMenus}
          >
            <Logo className="h-9 w-auto md:h-10" animated size="md" />
          </a>

          <nav className="hidden items-center gap-1 xl:flex">
            {navMenu.map((section) => (
              <div
                key={section.label}
                className="relative"
                onMouseEnter={() =>
                  section.children ? setActiveMenu(section.label) : setActiveMenu(null)
                }
              >
                <a
                  href={section.href ?? section.children?.[0]?.href ?? "#"}
                  className={`inline-flex items-center gap-1 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                    activeMenu === section.label
                      ? "bg-brand/8 text-brand"
                      : "text-ink/75 hover:bg-black/[0.03] hover:text-brand"
                  }`}
                >
                  {section.label}
                  {section.children && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        activeMenu === section.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </a>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button
                size="sm"
                onClick={() => {
                  closeMenus()
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in touch
              </Button>
            </div>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 text-ink xl:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="absolute right-0 left-0 hidden border-t border-brand/8 bg-white/98 shadow-[0_20px_60px_rgba(0,0,0,0.09)] backdrop-blur-xl xl:block"
            >
              {navMenu
                .filter((section) => section.label === activeMenu && section.children)
                .map((section) => (
                  <div key={section.label} className="container-wide flex gap-0 px-5 py-8 md:px-10 lg:px-16">

                    {/* LEFT — section overview sidebar */}
                    <div className="w-[240px] shrink-0 border-r border-brand/8 pr-8">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand">
                        {section.label}
                      </p>
                      {section.description && (
                        <p className="mt-3 max-w-[200px] text-sm leading-relaxed text-muted">
                          {section.description}
                        </p>
                      )}
                      {section.href && (
                        <a
                          href={section.href}
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-ink"
                          onClick={() => setActiveMenu(null)}
                        >
                          View all
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>

                    {/* RIGHT — nav items grid */}
                    <div
                      className={`flex-1 grid gap-1 pl-8 content-start ${
                        (section.children?.length ?? 0) >= 5
                          ? "sm:grid-cols-3"
                          : "sm:grid-cols-2"
                      }`}
                    >
                      {section.children?.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="group flex items-start gap-3 rounded-xl px-4 py-3.5 transition-all hover:bg-surface"
                          onClick={() => setActiveMenu(null)}
                        >
                          <span className="mt-[0.32rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/22 transition-colors group-hover:bg-brand" />
                          <div>
                            <p className="font-display text-[15px] font-semibold leading-tight text-ink transition-colors group-hover:text-brand">
                              {item.label}
                            </p>
                            {item.description && (
                              <p className="mt-1 text-xs leading-relaxed text-muted">
                                {item.description}
                              </p>
                            )}
                          </div>
                        </a>
                      ))}
                    </div>

                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-white xl:hidden"
          >
            <div className="flex items-center justify-between border-b border-brand/10 px-5 py-4">
              <Logo className="h-9 w-auto text-ink" animated size="md" />
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10"
                onClick={closeMenus}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="h-[calc(100vh-72px)] overflow-y-auto px-5 py-2">
              {navMenu.map((section) => (
                <div key={section.label} className="border-b border-black/[0.06]">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between py-4 text-left"
                    onClick={() =>
                      setMobileSection((current) =>
                        current === section.label ? null : section.label,
                      )
                    }
                  >
                    <span className={`font-display text-lg font-semibold transition-colors ${
                      mobileSection === section.label ? "text-brand" : "text-ink"
                    }`}>
                      {section.label}
                    </span>
                    {section.children && (
                      <ChevronDown
                        className={`h-4.5 w-4.5 text-muted/60 transition-transform ${
                          mobileSection === section.label ? "rotate-180 text-brand" : ""
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {mobileSection === section.label && section.children && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pb-3"
                      >
                        <div className="ml-1 space-y-0.5 border-l-2 border-brand/15 pl-4">
                          {section.children.map((item) => (
                            <a
                              key={item.label}
                              href={item.href}
                              className="group flex items-start gap-2.5 rounded-lg px-3 py-3 transition-colors hover:bg-surface"
                              onClick={closeMenus}
                            >
                              <span className="mt-[0.3rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/25 group-hover:bg-brand transition-colors" />
                              <div>
                                <p className="text-sm font-semibold text-ink group-hover:text-brand transition-colors">
                                  {item.label}
                                </p>
                                {item.description && (
                                  <p className="mt-0.5 text-xs text-muted">
                                    {item.description}
                                  </p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!section.children && section.href && (
                    <a
                      href={section.href}
                      className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand"
                      onClick={closeMenus}
                    >
                      View section
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}

              <Button
                className="mt-6 w-full"
                onClick={() => {
                  closeMenus()
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
