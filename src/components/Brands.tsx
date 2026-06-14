import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { brands } from "../data/content"

const brandAccents = [
  { num: "text-brand", dot: "bg-brand", stem: "bg-brand/20" },
  { num: "text-aegean", dot: "bg-aegean", stem: "bg-aegean/20" },
  { num: "text-patina", dot: "bg-patina", stem: "bg-patina/20" },
  { num: "text-copper", dot: "bg-copper", stem: "bg-copper/20" },
  { num: "text-brand", dot: "bg-brand-light", stem: "bg-brand/15" },
  { num: "text-ion", dot: "bg-ion", stem: "bg-ion/15" },
]

export function Brands() {
  return (
    <section id="brands" className="section-padding bg-white">
      <div className="container-wide">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20 mb-16 pb-12 border-b border-brand/10">
          <div>
            <SectionLabel>The group</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              The first six
              <br />
              <span className="italic text-brand">foundation brands.</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted border-l border-brand/15 pl-6">
            These are the first gears in the ANTIKRA group architecture. Each
            operates as a specialist company, but the greater value comes when
            they combine around products, platforms, ventures, and transformation
            work that isolated teams cannot contain.
          </p>
        </div>

        {/* Brand rows */}
        <div className="divide-y divide-brand/8">
          {brands.map((brand, i) => {
            const accent = brandAccents[i]
            return (
              <motion.article
                key={brand.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.42, delay: i * 0.06 }}
                className="group grid gap-y-6 rounded-xl py-10 transition-colors hover:bg-surface lg:grid-cols-[1fr_1.15fr] lg:gap-x-16 lg:px-6 lg:py-12"
              >
                {/* LEFT — identity */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center gap-2 pt-0.5">
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${accent.num}`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className={`w-px flex-1 min-h-10 ${accent.stem}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${accent.dot}`} />
                      <p className={`text-[10px] font-semibold uppercase tracking-[0.22em] ${accent.num}`}>
                        {brand.tagline}
                      </p>
                    </div>
                    <h3 className="mt-2.5 font-display text-[2rem] font-semibold leading-none text-ink md:text-[2.5rem]">
                      {brand.name.replace("ANTIKRA ", "")}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{brand.role}</p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {brand.systems.map((sys) => (
                        <span
                          key={sys}
                          className="rounded-full border border-brand/10 bg-surface px-2.5 py-1 text-[10px] font-medium text-muted"
                        >
                          {sys}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT — substance */}
                <div className="lg:border-l lg:border-brand/8 lg:pl-10">
                  <p className="text-base leading-relaxed text-muted">{brand.description}</p>

                  <div className="mt-6">
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand/55">
                      Focus areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {brand.focus.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs text-ink"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
