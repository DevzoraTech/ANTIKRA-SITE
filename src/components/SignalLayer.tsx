import { ArrowUpRight } from "lucide-react"

const disciplines = [
  { label: "Build", sub: "Products & platforms", brand: "Mechanism" },
  { label: "Operate", sub: "Cloud & reliability", brand: "Cosmos" },
  { label: "Automate", sub: "AI & intelligence", brand: "Orrery" },
  { label: "Secure", sub: "Trust & compliance", brand: "Astra" },
  { label: "Launch", sub: "Ventures & spinouts", brand: "Olympia" },
]

export function SignalLayer() {
  return (
    <section className="relative overflow-hidden bg-ink px-5 py-14 md:px-10 md:py-16 lg:px-16">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.8fr] lg:items-center lg:gap-20">

          {/* Left — positioning statement */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-brand-light/55">
              ANTIKRA Group
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-[1.9rem]">
              One parent company.
              <br />
              <span className="text-brand-light">Six disciplines in lock-step.</span>
            </h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/38">
              Specialist brands that interlock around complex technology work — each with its own mandate, all sharing one operating standard.
            </p>
            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-light/70 transition-colors hover:text-brand-light"
            >
              View all capabilities
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Right — disciplines grid */}
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.05] sm:grid-cols-5">
            {disciplines.map((d, i) => (
              <div
                key={d.label}
                className={`bg-ink px-5 py-6 transition-colors hover:bg-white/[0.03] ${i === disciplines.length - 1 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <p className={`font-display text-xl font-semibold leading-none ${i === 0 ? "text-brand-light" : "text-white"}`}>
                  {d.label}
                </p>
                <p className="mt-2 text-[11px] leading-snug text-white/38">{d.sub}</p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/18">
                  {d.brand}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
