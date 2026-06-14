import { Logo } from "./Logo"
import { navMenu } from "../data/navigation"

const footerBrands = [
  "ANTIKRA Mechanism",
  "ANTIKRA Cosmos",
  "ANTIKRA Orrery",
  "ANTIKRA Astra",
  "ANTIKRA Helios",
  "ANTIKRA Olympia",
]

export function Footer() {
  return (
    <footer className="border-t border-brand/10 bg-white">
      <div className="container-wide section-padding !py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo className="text-ink" animated size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              A family of specialist technology companies inspired by the
              Antikythera mechanism. Many brands, one shared operating standard.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Explore
            </h4>
            <ul className="mt-4 space-y-2">
              {navMenu.map((section) => (
                <li key={section.label}>
                  <a
                    href={section.href ?? section.children?.[0]?.href ?? "#"}
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Brands
            </h4>
            <ul className="mt-4 space-y-2">
              {footerBrands.map((item) => (
                <li key={item}>
                  <a
                    href="#brands"
                    className="text-sm text-muted transition-colors hover:text-brand"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
              Heritage
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Named after the Antikythera mechanism - a 2nd-century BC bronze
              astronomical computer discovered in 1901 off the coast of Greece.
            </p>
            <a
              href="#heritage"
              className="mt-3 inline-block text-sm font-medium text-brand hover:text-brand-dark"
            >
              Learn the story -&gt;
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brand/10 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo variant="mark" size="sm" animated className="text-brand/70" />
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} ANTIKRA Group. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted hover:text-brand">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted hover:text-brand">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted hover:text-brand">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
