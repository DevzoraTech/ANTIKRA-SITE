import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { brands, operatingLayers, platformPillars } from "../data/content"

const brandDots = ["bg-brand", "bg-aegean-light", "bg-patina", "bg-copper", "bg-brand-light", "bg-aegean"]
const brandTagColors = ["text-brand-light", "text-aegean-light", "text-white/55", "text-copper", "text-brand-light", "text-aegean-light"]

export function GroupArchitecture() {
  return (
    <section id="architecture" className="section-padding overflow-hidden bg-night text-white">
      <div className="container-wide">

        {/* — Section label + headline — */}
        <div className="mb-16 max-w-2xl">
          <SectionLabel tone="dark">Group architecture</SectionLabel>
          <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.75rem)] leading-tight font-semibold">
            Built to become a
            <br />
            <span className="italic text-brand-light">house of technology brands</span>
          </h2>
        </div>

        {/* — Left / Right two-column — */}
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24 lg:items-start">

          {/* LEFT — Group hierarchy tree */}
          <div>
            <p className="mb-10 max-w-lg text-base leading-relaxed text-white/60">
              ANTIKRA is designed as an expandable group. New companies can be
              created inside the ecosystem, but every brand still connects to
              the same governance, delivery discipline, research spine, and
              operating standard.
            </p>

            {/* Core node */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.48 }}
            >
              <div className="inline-flex items-center gap-4 rounded-xl border border-brand-light/20 bg-white/[0.06] px-5 py-4">
                <span className="h-3 w-3 shrink-0 rounded-full bg-brand-light" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-light/65">
                    Parent company
                  </p>
                  <p className="mt-0.5 font-display text-xl font-semibold text-white">
                    ANTIKRA Group Core
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stem + brand rows */}
            <div className="relative ml-[1.6rem] mt-0 border-l border-white/10 pt-0">
              {brands.map((brand, i) => (
                <motion.div
                  key={brand.id}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: i * 0.07 }}
                  className="group relative flex items-start"
                >
                  {/* Horizontal branch line */}
                  <div className="mt-[1.55rem] h-px w-5 shrink-0 bg-white/10" />

                  <div className="flex-1 border-b border-white/[0.06] py-4 pl-4 transition-colors hover:bg-white/[0.03]">
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex items-start gap-3">
                        <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${brandDots[i]}`} />
                        <div>
                          <p className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${brandTagColors[i]}`}>
                            {brand.tagline}
                          </p>
                          <h3 className="mt-0.5 font-display text-lg font-semibold text-white">
                            {brand.name.replace("ANTIKRA ", "")}
                          </h3>
                        </div>
                      </div>
                      <p className="shrink-0 pt-0.5 text-xs text-white/30">{brand.role}</p>
                    </div>
                    <p className="mt-2 pl-5 text-sm leading-relaxed text-white/45">
                      {brand.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — Platform pillars: vertical stack */}
          <div className="lg:pt-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30 mb-8">
              What every brand connects to
            </p>

            <div className="divide-y divide-white/8">
              {platformPillars.map((pillar, i) => (
                <motion.div
                  key={pillar.id}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.38, delay: i * 0.09 }}
                  className="py-7 first:pt-0"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* — Operating layers: clean 4-step timeline — */}
        <div className="mt-20 border-t border-white/8 pt-20">
          <p className="mb-14 text-center text-[10px] font-semibold uppercase tracking-[0.3em] text-white/28">
            How the group operates around a client engagement
          </p>

          <div className="relative grid gap-0 md:grid-cols-4">
            {/* Full-width connector rule behind numbers */}
            <div className="absolute left-0 right-0 top-[1.35rem] hidden h-px bg-white/8 md:block" />

            {operatingLayers.map((layer, i) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: i * 0.1 }}
                className="relative px-6 first:pl-0 last:pr-0"
              >
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-brand/25 bg-night font-display text-sm font-semibold text-brand-light">
                  {layer.label}
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-white">
                  {layer.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {layer.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
