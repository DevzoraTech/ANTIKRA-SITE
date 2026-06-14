import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"
import { Heritage } from "./Heritage"
import { stats, location } from "../data/content"

export function About() {
  return (
    <section id="about" className="section-padding">
      <Heritage embedded />

      <div className="container-wide mt-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionLabel>About the group</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Ancient wisdom.
              <br />
              <span className="italic text-brand">Modern execution.</span>
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              <p>
                ANTIKRA Group is a family of specialist technology companies and
                a venture platform: a constellation of brands that interlock like the bronze
                gears of the mechanism that gave us our name. Each brand has a
                clear mandate; together, they form a system that can handle work
                too complex for isolated teams.
              </p>
              <p>
                We believe the best technology, like the best engineering of
                antiquity, is built with patience, precision, and an understanding
                of how every component affects the whole. From software and cloud
                to AI, security, design, and ventures, ANTIKRA covers the full
                spectrum through brands calibrated to work in concert.
              </p>
            </div>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-brand">
              {location}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col justify-center rounded-2xl border border-brand/10 bg-surface p-8"
              >
                <p className="font-display text-4xl font-semibold text-brand md:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-snug text-muted">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
