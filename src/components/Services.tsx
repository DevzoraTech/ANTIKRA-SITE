import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { services } from "../data/content"

const rowAccents = [
  { num: "text-brand", dot: "bg-brand", bar: "border-l-brand/30" },
  { num: "text-aegean", dot: "bg-aegean", bar: "border-l-aegean/30" },
  { num: "text-patina", dot: "bg-patina", bar: "border-l-patina/30" },
  { num: "text-copper", dot: "bg-copper", bar: "border-l-copper/35" },
  { num: "text-ion", dot: "bg-ion", bar: "border-l-ion/30" },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container-wide">

        {/* — Header: left title / right intro — */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20 mb-16 pb-12 border-b border-brand/10">
          <div>
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Capabilities for
              <br />
              <span className="italic text-brand">serious technology work</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted lg:border-l lg:border-brand/15 lg:pl-6">
            The group can deliver one focused capability or assemble a cross-brand
            team around complex work. Each capability has a lead brand owner, but no
            discipline operates in isolation — engineering, cloud, AI, security, and
            design are built to connect.
          </p>
        </div>

        {/* — Service rows — */}
        <div className="divide-y divide-brand/8">
          {services.map((service, i) => {
            const accent = rowAccents[i]
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group grid gap-y-6 rounded-xl py-10 transition-colors hover:bg-white lg:grid-cols-[6rem_1fr_1fr] lg:gap-x-12 lg:px-8 lg:py-12"
              >
                {/* Number column */}
                <div className="flex items-center gap-4 lg:block">
                  <span className={`font-display text-3xl font-semibold leading-none ${accent.num}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* LEFT content: title + brands + items */}
                <div>
                  <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-[1.65rem]">
                    {service.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.ownedBy.map((brand) => (
                      <span
                        key={brand}
                        className="rounded-full border border-black/8 bg-white px-2.5 py-1 text-[10px] font-medium text-muted"
                      >
                        {brand}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className={`mt-[0.4rem] h-1 w-3 shrink-0 rounded-full ${accent.dot} opacity-60`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT content: description + outcome */}
                <div>
                  <p className="text-base leading-relaxed text-muted">
                    {service.description}
                  </p>

                  <div className={`mt-6 border-l-2 pl-4 ${accent.bar}`}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
                      Outcome
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink">
                      {service.outcome}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

      </div>
    </section>
  )
}
