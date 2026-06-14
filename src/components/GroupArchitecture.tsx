import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { brands, operatingLayers, platformPillars } from "../data/content"

const positions = [
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-1/4 -translate-y-1/2",
  "right-6 bottom-10",
  "left-1/2 bottom-0 -translate-x-1/2",
  "left-6 bottom-10",
  "left-0 top-1/4 -translate-y-1/2",
]

export function GroupArchitecture() {
  return (
    <section id="architecture" className="section-padding overflow-hidden bg-night text-white">
      <div className="container-wide">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
          <div>
            <SectionLabel tone="dark">Group architecture</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.75rem)] leading-tight font-semibold">
              Built to become a
              <br />
              <span className="italic text-brand-light">house of technology brands</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70">
              ANTIKRA is designed as an expandable group. New companies can be
              created inside the ecosystem, but every brand still connects to
              the same governance, delivery discipline, research spine, and
              operating standard.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {platformPillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <h3 className="font-display text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto aspect-square w-full max-w-[560px]"
          >
            <div className="absolute inset-10 rounded-full border border-brand-light/20" />
            <div className="absolute inset-20 rounded-full border border-white/10" />
            <div className="absolute inset-32 rounded-full border border-aegean-light/30" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(196,165,116,0.18),transparent_62%)]" />

            <div className="absolute inset-1/2 z-20 flex h-36 w-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-brand-light/30 bg-white text-center text-ink shadow-2xl">
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                ANTIKRA
              </span>
              <span className="mt-1 font-display text-xl font-semibold leading-none">
                Group Core
              </span>
            </div>

            {brands.map((brand, index) => (
              <div
                key={brand.id}
                className={`absolute ${positions[index]} z-30 w-36 rounded-2xl border border-white/10 bg-white/[0.08] p-3 text-center shadow-xl backdrop-blur-md`}
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-brand-light">
                  {brand.role}
                </p>
                <p className="mt-1 font-display text-sm font-semibold leading-tight text-white">
                  {brand.name.replace("ANTIKRA ", "")}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {operatingLayers.map((layer) => (
            <article
              key={layer.id}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="font-display text-2xl font-semibold text-brand-light">
                {layer.label}
              </p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white">
                {layer.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {layer.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
