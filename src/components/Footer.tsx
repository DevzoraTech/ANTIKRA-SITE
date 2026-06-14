import { ArrowUpRight } from "lucide-react"
import { Logo } from "./Logo"
import { navMenu } from "../data/navigation"

const footerBrands = [
  { short: "Mechanism", sub: "Product Engineering" },
  { short: "Cosmos", sub: "Cloud & Infrastructure" },
  { short: "Orrery", sub: "AI & Predictive Systems" },
  { short: "Astra", sub: "Cybersecurity" },
  { short: "Helios", sub: "Experience & Brand" },
  { short: "Olympia", sub: "Ventures & Innovation" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white">

      {/* Pre-footer CTA */}
      <div className="border-b border-white/8">
        <div className="container-wide px-5 py-14 md:px-10 lg:px-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Ready to set the gears in motion?
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/48">
                Tell us what you are building and we will identify the right
                brand mix to take it forward.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-wide relative px-5 py-16 md:px-10 lg:px-16">

        {/* Background watermark */}
        <p className="pointer-events-none absolute -bottom-2 right-0 select-none font-display text-[8rem] font-bold leading-none text-white/[0.025] md:text-[13rem]">
          ANTIKRA
        </p>

        <div className="relative z-10 grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* Brand */}
          <div>
            <Logo className="text-white" animated size="md" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/42">
              A family of specialist technology companies inspired by the
              Antikythera mechanism. Many brands, one operating standard.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/32 transition-colors hover:text-white/65"
            >
              LinkedIn
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>

          {/* Navigate */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
              Navigate
            </h4>
            <ul className="space-y-3">
              {navMenu.map((section) => (
                <li key={section.label}>
                  <a
                    href={section.href ?? section.children?.[0]?.href ?? "#"}
                    className="text-sm text-white/48 transition-colors hover:text-white"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Group brands */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
              Group brands
            </h4>
            <ul className="space-y-3.5">
              {footerBrands.map((brand) => (
                <li key={brand.short}>
                  <a href="#brands" className="group flex flex-col">
                    <span className="text-sm text-white/48 transition-colors group-hover:text-white">
                      {brand.short}
                    </span>
                    <span className="text-[10px] text-white/20 transition-colors group-hover:text-white/38">
                      {brand.sub}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Origin */}
          <div>
            <h4 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
              Our origin
            </h4>
            <p className="text-sm leading-relaxed text-white/42">
              Named after the Antikythera mechanism — a 2nd-century BC bronze
              astronomical computer discovered in 1901.
            </p>
            <a
              href="#heritage"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light/65 transition-colors hover:text-brand-light"
            >
              Read the story
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="relative z-10 mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Logo variant="mark" size="sm" animated className="text-brand/45" />
            <p className="text-xs text-white/22">
              © {new Date().getFullYear()} ANTIKRA Group Limited. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/22 transition-colors hover:text-white/55">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/22 transition-colors hover:text-white/55">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
