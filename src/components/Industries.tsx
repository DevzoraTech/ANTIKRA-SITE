import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { SectionLabel } from "./SectionLabel"
import { industries } from "../data/content"

export function Industries() {
  const [index, setIndex] = useState(0)
  const perPage = 2
  const maxIndex = Math.ceil(industries.length / perPage) - 1

  const visible = industries.slice(index * perPage, index * perPage + perPage)

  return (
    <section id="industries" className="section-padding bg-white">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Sectors</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
              Sectors we
              <br />
              <span className="italic text-brand">calibrate for</span>
            </h2>
            <p className="mt-4 max-w-lg text-base text-muted">
              The ancient device tracked celestial bodies across the sky. We
              apply the same precision to industries where complex systems,
              data, and timing must align.
            </p>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              disabled={index === 0}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 disabled:opacity-30"
              aria-label="Previous industries"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
              disabled={index === maxIndex}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 disabled:opacity-30"
              aria-label="Next industries"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="wait">
            {visible.map((industry) => (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-brand/10 bg-surface p-8 transition-shadow hover:shadow-md"
              >
                <h3 className="font-display text-xl font-bold text-ink">
                  {industry.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {industry.description}
                </p>
                <button
                  type="button"
                  className="mt-6 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  View industry -&gt;
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
