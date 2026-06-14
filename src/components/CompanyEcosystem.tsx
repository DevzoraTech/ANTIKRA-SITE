import { ArrowUpRight } from "lucide-react"
import ecosystemProduct from "../assets/ecosystem-product.webp"
import ecosystemInfrastructure from "../assets/ecosystem-infrastructure.webp"
import ecosystemIntelligence from "../assets/ecosystem-intelligence.webp"
import ecosystemVenture from "../assets/ecosystem-venture.webp"

const ecosystemCards = [
  {
    title: "Product companies",
    label: "Software",
    image: ecosystemProduct,
    accent: "bg-brand",
    border: "border-brand/20",
    description:
      "Full-stack teams for products, platforms, APIs, mobile apps, and internal systems that can grow into standalone companies.",
    proof: "From MVP to operating product",
  },
  {
    title: "Infrastructure companies",
    label: "Cloud",
    image: ecosystemInfrastructure,
    accent: "bg-aegean",
    border: "border-aegean/20",
    description:
      "Cloud, reliability, DevOps, data foundations, and managed operations for brands that need serious technical backbone.",
    proof: "Built for scale and uptime",
  },
  {
    title: "Intelligence companies",
    label: "AI",
    image: ecosystemIntelligence,
    accent: "bg-ion",
    border: "border-ion/20",
    description:
      "AI products, analytics engines, automation layers, and decision systems connected to real business workflows.",
    proof: "Automation with business context",
  },
  {
    title: "Venture companies",
    label: "Launch",
    image: ecosystemVenture,
    accent: "bg-copper",
    border: "border-copper/20",
    description:
      "New brands, spinouts, venture concepts, and market-ready product systems shaped with technical and commercial discipline.",
    proof: "Ideas turned into companies",
  },
]

export function CompanyEcosystem() {
  return (
    <section className="relative overflow-hidden bg-[#fbfaf7] px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,rgba(196,165,116,0.16),transparent)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-24 h-96 w-96 rounded-full bg-ion/10 blur-3xl" />

      <div className="container-wide relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-brand">
              Company ecosystem
            </p>
            <h2 className="mt-4 max-w-xl font-display text-[clamp(2.25rem,5vw,4.2rem)] font-semibold leading-[0.98] text-ink">
              Built like a portfolio, operated like one system.
            </h2>
          </div>

          <div className="grid gap-4 border-l border-brand/15 pl-6 md:grid-cols-2">
            <p className="text-base leading-relaxed text-muted">
              ANTIKRA is not trying to look like one agency with many services.
              It is designed as a parent company that can build, own, operate,
              and connect specialist technology companies.
            </p>
            <p className="text-base leading-relaxed text-muted">
              Each company has a practical job: build products, run
              infrastructure, create intelligence, protect trust, shape
              experience, or launch new ventures.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="group relative min-h-[560px] overflow-hidden rounded-[1.65rem] border border-brand/20 bg-ink text-white shadow-[0_28px_90px_rgba(30,77,92,0.14)]">
            <img
              src={ecosystemCards[0].image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,25,35,0.04)_0%,rgba(15,25,35,0.42)_48%,rgba(15,25,35,0.9)_100%)]" />
            <div className="absolute left-6 top-6 flex items-center gap-3">
              <span className="rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                {ecosystemCards[0].label}
              </span>
              <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur">
                Lead engine
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="flex items-end justify-between gap-8">
                <div>
                  <h3 className="font-display text-4xl font-semibold leading-none md:text-5xl">
                    {ecosystemCards[0].title}
                  </h3>
                  <p className="mt-5 max-w-xl text-base leading-relaxed text-white/78">
                    {ecosystemCards[0].description}
                  </p>
                </div>
                <ArrowUpRight className="hidden h-8 w-8 shrink-0 text-brand-light md:block" />
              </div>
              <p className="mt-8 border-t border-white/15 pt-5 text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
                {ecosystemCards[0].proof}
              </p>
            </div>
          </article>

          <div className="grid gap-5">
            {ecosystemCards.slice(1, 3).map((card) => (
              <article
                key={card.title}
                className={`group grid overflow-hidden rounded-[1.35rem] border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(30,77,92,0.12)] sm:grid-cols-[0.9fr_1.1fr] ${card.border}`}
              >
                <div className="relative min-h-[220px] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ${card.accent}`}
                  >
                    {card.label}
                  </span>
                </div>
                <div className="flex flex-col justify-between p-6">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-2xl font-semibold leading-tight text-ink">
                        {card.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand" />
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted">
                      {card.description}
                    </p>
                  </div>
                  <p className="mt-6 border-t border-black/5 pt-4 text-xs font-semibold uppercase tracking-[0.18em] text-ink/70">
                    {card.proof}
                  </p>
                </div>
              </article>
            ))}

            <article className="group grid overflow-hidden rounded-[1.35rem] border border-copper/20 bg-[#fffaf2] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(184,115,51,0.13)] sm:grid-cols-[1fr_0.8fr]">
              <div className="flex flex-col justify-between p-6">
                <div>
                  <span className="rounded-full bg-copper px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                    {ecosystemCards[3].label}
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight text-ink">
                    {ecosystemCards[3].title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted">
                    {ecosystemCards[3].description}
                  </p>
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-copper">
                  {ecosystemCards[3].proof}
                </p>
              </div>
              <div className="relative min-h-[220px] overflow-hidden">
                <img
                  src={ecosystemCards[3].image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#fffaf2]/15" />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
