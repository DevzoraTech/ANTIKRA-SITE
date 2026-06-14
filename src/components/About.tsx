import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { Heritage } from "./Heritage"
import { stats, location, groupSnapshot } from "../data/content"

export function About() {
  return (
    <section id="about" className="section-padding bg-surface">
      <Heritage embedded />

      <div className="container-wide mt-24 border-t border-brand/10 pt-20">
        <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-24">

          {/* LEFT — Philosophy */}
          <div>
            <SectionLabel>About the group</SectionLabel>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Ancient wisdom.
              <br />
              <span className="italic text-brand">Modern execution.</span>
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
              <p>
                ANTIKRA Group is a family of specialist technology companies and
                a venture platform — a constellation of brands that interlock like
                the bronze gears of the mechanism that gave us our name. Each brand
                has a clear mandate; together, they form a system that can handle
                work too complex for isolated teams.
              </p>
              <p>
                We believe the best technology, like the best engineering of
                antiquity, is built with patience, precision, and an understanding
                of how every component affects the whole. From software and cloud
                to AI, security, design, and ventures, ANTIKRA covers the full
                spectrum through brands calibrated to work in concert.
              </p>
            </div>

            {/* Group snapshot strip */}
            <div className="mt-10 divide-y divide-brand/8 border-t border-brand/10">
              {Object.entries(groupSnapshot).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between py-3.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/60">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-sm font-medium text-ink">{String(value)}</p>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {location}
            </p>
          </div>

          {/* RIGHT — Stats */}
          <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-brand/10 bg-brand/10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col justify-center bg-surface p-8 md:p-10"
              >
                <p className="font-display text-5xl font-semibold leading-none text-brand md:text-6xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-snug text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
