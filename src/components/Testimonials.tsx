import { motion } from "framer-motion"
import { proofPoints, groupSnapshot } from "../data/content"

export function Testimonials() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-brand">
              Why the group exists
            </p>
            <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Technology work is too connected for isolated teams.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
              A serious product now touches software, cloud, data, AI, security,
              brand, operations, and capital. ANTIKRA is being built so those
              disciplines can move together without becoming a slow monolith.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {proofPoints.map((point, index) => (
                <motion.article
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl border border-brand/10 bg-surface p-6"
                >
                  <p className="font-display text-2xl font-semibold text-brand">
                    {point.metric}
                  </p>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {point.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          <aside className="flex flex-col justify-center rounded-2xl border border-brand/10 bg-ink p-8 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">
              {groupSnapshot.title}
            </p>
            <div className="mt-7 space-y-7">
              {groupSnapshot.items.map((item) => (
                <div key={item.label}>
                  <p className="font-display text-4xl font-semibold text-brand-light">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-white/65">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
