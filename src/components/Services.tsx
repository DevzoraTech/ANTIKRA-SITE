import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { SectionLabel } from "./SectionLabel"
import { services } from "../data/content"

export function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-wide">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Capabilities for
              <br />
              <span className="italic text-brand">serious technology work</span>
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
              The group can deliver one focused capability or assemble a
              cross-brand team around complex work. Each service has a lead
              owner, but no discipline operates in isolation.
            </p>
          </div>

          <div className="space-y-2">
            {services.map((service, i) => (
              <button
                key={service.id}
                type="button"
                onClick={() => setActive(i)}
                className={`flex w-full items-center justify-between rounded-xl px-5 py-4 text-left transition-all ${
                  active === i
                    ? "bg-ink text-white"
                    : "bg-white text-ink hover:bg-brand/5"
                }`}
              >
                <span className="font-display text-base font-semibold md:text-lg">
                  {service.title}
                </span>
                <ChevronRight
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    active === i ? "rotate-90" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={current.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 rounded-2xl border border-brand/10 bg-white p-8 md:p-12"
        >
          <h3 className="font-display text-xl font-semibold text-ink md:text-2xl">
            {current.title}
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted">
            {current.description}
          </p>
          <div className="mt-8 grid gap-5 border-y border-brand/10 py-6 md:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Expected outcome
              </p>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                {current.outcome}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                Brand mix
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {current.ownedBy.map((brand) => (
                  <span
                    key={brand}
                    className="rounded-full border border-brand/15 bg-surface px-3 py-1 text-xs font-medium text-muted"
                  >
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {current.items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-ink"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
