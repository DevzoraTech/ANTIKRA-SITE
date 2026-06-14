import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { industries } from "../data/content"

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-surface">
      <div className="container-wide">

        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20 mb-16 pb-12 border-b border-brand/10">
          <div>
            <SectionLabel>Sectors</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Sectors we
              <br />
              <span className="italic text-brand">calibrate for</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted lg:border-l lg:border-brand/15 lg:pl-6">
            The ancient device tracked celestial bodies with interlocking
            precision. We apply the same discipline to industries where complex
            systems, data velocity, and timing must align at scale.
          </p>
        </div>

        {/* Industry rows */}
        <div className="divide-y divide-brand/8">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.38, delay: i * 0.06 }}
              className="group grid gap-y-4 rounded-xl py-9 transition-colors hover:bg-white lg:grid-cols-[2fr_3fr] lg:gap-x-16 lg:px-6 lg:py-11"
            >
              {/* LEFT — number + title */}
              <div className="flex items-start gap-5">
                <span className="shrink-0 pt-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand/45">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
                  {industry.title}
                </h3>
              </div>

              {/* RIGHT — description */}
              <div className="lg:border-l lg:border-brand/8 lg:pl-10">
                <p className="text-base leading-relaxed text-muted">
                  {industry.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  )
}
