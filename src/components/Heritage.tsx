import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"

interface HeritageProps {
  embedded?: boolean
}

export function Heritage({ embedded = false }: HeritageProps) {
  const content = (
    <>
      <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionLabel>Our origin</SectionLabel>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] leading-tight font-semibold text-ink">
              Named for the world&apos;s first
              <br />
              <span className="italic text-brand">analog computer</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              <p>
                In 1901, sponge divers off the Greek island of Antikythera recovered
                a corroded bronze device from a 2,000-year-old shipwreck. It would
                become the{" "}
                <strong className="font-medium text-ink">Antikythera mechanism</strong>{" "}
                - a hand-powered astronomical computer built in the 2nd century BC,
                with over 30 interlocking bronze gears that predicted eclipses,
                tracked celestial cycles, and even counted down to the Olympic Games.
              </p>
              <p>
                ANTIKRA takes its name and philosophy from this masterpiece of ancient
                engineering: the belief that complex systems, built with precision and
                purpose, can model entire worlds. Our group of companies works the same
                way: interlocking brands, each a gear in a greater machine.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-square w-full max-w-sm">
              <svg
                viewBox="0 0 300 300"
                className="h-full w-full text-brand/30"
                aria-hidden="true"
              >
                <circle cx="150" cy="150" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="150" cy="150" r="70" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="150" cy="150" r="40" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="150" cy="150" r="12" fill="currentColor" className="text-brand" />
                {Array.from({ length: 30 }).map((_, i) => {
                  const angle = (i * 12 * Math.PI) / 180
                  const inner = 42
                  const outer = i % 3 === 0 ? 130 : i % 3 === 1 ? 100 : 70
                  return (
                    <line
                      key={i}
                      x1={150 + Math.cos(angle) * inner}
                      y1={150 + Math.sin(angle) * inner}
                      x2={150 + Math.cos(angle) * outer}
                      y2={150 + Math.sin(angle) * outer}
                      stroke="currentColor"
                      strokeWidth={i % 3 === 0 ? 2 : 1}
                      strokeLinecap="round"
                    />
                  )
                })}
                <circle cx="150" cy="40" r="25" stroke="currentColor" strokeWidth="1.2" fill="none" />
                <circle cx="240" cy="110" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="60" cy="110" r="18" stroke="currentColor" strokeWidth="1" fill="none" />
                <circle cx="210" cy="230" r="15" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <circle cx="90" cy="230" r="15" stroke="currentColor" strokeWidth="0.8" fill="none" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center font-display text-sm italic text-brand">
                  ~150 BC
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "30+", label: "Interlocking gears in the original device" },
            { value: "~150 BC", label: "When the mechanism was built" },
            { value: "1901", label: "Year of discovery off Antikythera" },
            { value: "1st", label: "Known analog computer in history" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-brand/10 bg-white px-5 py-4 text-center"
            >
              <p className="font-display text-2xl font-semibold text-brand md:text-3xl">
                {item.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-muted">{item.label}</p>
            </div>
          ))}
        </div>
    </>
  )

  if (embedded) {
    return (
      <div
        id="heritage"
        className="container-wide relative overflow-hidden rounded-2xl border border-brand/10 bg-surface p-8 md:p-12"
      >
        {content}
      </div>
    )
  }

  return (
    <section id="heritage" className="relative overflow-hidden border-y border-brand/10 bg-surface">
      <div className="container-wide section-padding !py-16">{content}</div>
    </section>
  )
}
