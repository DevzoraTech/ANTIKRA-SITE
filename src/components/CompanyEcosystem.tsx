import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./SectionLabel"
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
    description:
      "Full-stack teams for products, platforms, APIs, mobile apps, and internal systems that can grow into standalone companies.",
    proof: "From MVP to operating product",
  },
  {
    title: "Infrastructure companies",
    label: "Cloud",
    image: ecosystemInfrastructure,
    accent: "bg-aegean",
    description:
      "Cloud, reliability, DevOps, data foundations, and managed operations for brands that need serious technical backbone.",
    proof: "Built for scale and uptime",
  },
  {
    title: "Intelligence companies",
    label: "AI",
    image: ecosystemIntelligence,
    accent: "bg-ion",
    description:
      "AI products, analytics engines, automation layers, and decision systems connected to real business workflows.",
    proof: "Automation with business context",
  },
  {
    title: "Venture companies",
    label: "Launch",
    image: ecosystemVenture,
    accent: "bg-copper",
    description:
      "New brands, spinouts, venture concepts, and market-ready product systems shaped with technical and commercial discipline.",
    proof: "Ideas turned into companies",
  },
]

export function CompanyEcosystem() {
  return (
    <section className="section-padding bg-parchment">
      <div className="container-wide">

        {/* Header */}
        <div className="mb-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <SectionLabel>Company ecosystem</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[0.98] text-ink">
              Built like a portfolio,
              <br />
              <span className="italic text-brand">operated like one system.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted lg:border-l lg:border-brand/15 lg:pl-6">
            ANTIKRA is not trying to look like one agency with many services. It
            is designed as a parent company that builds, owns, operates, and
            connects specialist technology companies — each with a practical job
            and one shared operating standard.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT — featured large card */}
          <article className="group relative min-h-[420px] overflow-hidden rounded-[1.65rem] bg-ink lg:min-h-[560px]">
            <img
              src={ecosystemCards[0].image}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-68 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
            <div className="absolute left-6 top-6 flex items-center gap-2.5">
              <span className={`rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ${ecosystemCards[0].accent}`}>
                {ecosystemCards[0].label}
              </span>
              <span className="rounded-full border border-white/18 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm">
                Lead engine
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
              <h3 className="font-display text-4xl font-semibold leading-none text-white md:text-5xl">
                {ecosystemCards[0].title}
              </h3>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/68">
                {ecosystemCards[0].description}
              </p>
              <div className="mt-7 flex items-center justify-between border-t border-white/12 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-light">
                  {ecosystemCards[0].proof}
                </p>
                <ArrowUpRight className="h-5 w-5 text-brand-light" />
              </div>
            </div>
          </article>

          {/* RIGHT — 3 stacked cards, all consistent dark image style */}
          <div className="grid gap-4">
            {ecosystemCards.slice(1).map((card) => (
              <article
                key={card.title}
                className="group relative overflow-hidden rounded-2xl bg-ink"
              >
                <img
                  src={card.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-52 transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/94 via-ink/40 to-transparent" />
                <div className="relative flex min-h-[174px] flex-col justify-end p-6">
                  <span className={`mb-3 w-fit rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white ${card.accent}`}>
                    {card.label}
                  </span>
                  <h3 className="font-display text-xl font-semibold leading-tight text-white md:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/52">{card.description}</p>
                  <p className="mt-4 border-t border-white/10 pt-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-light/72">
                    {card.proof}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
