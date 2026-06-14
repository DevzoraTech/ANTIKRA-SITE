import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./SectionLabel"
import { brands } from "../data/content"

export function Brands() {
  return (
    <section id="brands" className="section-padding bg-white">
      <div className="container-wide">
        <SectionLabel>The group</SectionLabel>
        <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
          The first six
          <br />
          <span className="italic text-brand">foundation brands.</span>
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
          These are the first gears in the ANTIKRA group architecture. Each one
          can operate as a specialist company, but the greater value comes when
          they combine around products, platforms, ventures, and transformation.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, i) => (
            <motion.article
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-brand/10 bg-surface p-8 transition-all hover:border-brand/30 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand">
                    {brand.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                    {brand.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-aegean">
                    {brand.role}
                  </p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-brand/30 transition-colors group-hover:text-brand" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                {brand.description}
              </p>
              <div className="mt-6 border-t border-brand/10 pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                  System responsibility
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {brand.systems.map((system) => (
                    <span
                      key={system}
                      className="rounded-full bg-aegean-muted px-3 py-1 text-xs font-medium text-aegean"
                    >
                      {system}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {brand.focus.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-brand/15 px-3 py-1 text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
