import { motion } from "framer-motion"
import { SectionLabel } from "./SectionLabel"

interface HeritageProps {
  embedded?: boolean
}

const storyActs = [
  {
    num: "01",
    label: "The discovery",
    text: "In 1900, Greek sponge divers sheltering from a storm off the island of Antikythera found a Roman-era shipwreck at 45 metres depth. Among the salvaged bronze statues and marble busts was a corroded lump of metal no larger than a shoebox — unrecognised for decades after it arrived in the Athens museum.",
  },
  {
    num: "02",
    label: "The device",
    text: "X-ray and CT analysis eventually exposed what lay inside: a hand-powered astronomical computer built in the 2nd century BC, with over 30 interlocking bronze gears of extraordinary precision. It predicted solar and lunar eclipses, tracked the movements of five known planets, synchronised three calendar systems, and counted down to the Olympic Games.",
  },
  {
    num: "03",
    label: "The lesson",
    text: "Nothing of comparable mechanical sophistication would appear again for over a thousand years. The Antikythera mechanism proved that complex systems, built with patience and interlocking precision, can model entire worlds. That remains the operating principle behind everything ANTIKRA constructs.",
  },
]

const specs = [
  { value: "~150 BC", label: "Estimated construction" },
  { value: "30+", label: "Interlocking bronze gears" },
  { value: "1901", label: "Formally identified" },
  { value: "1st", label: "Known analog computer" },
]

export function Heritage({ embedded = false }: HeritageProps) {
  const content = (
    <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-20">

      {/* LEFT — Story told in three acts */}
      <div>
        <SectionLabel>Our origin</SectionLabel>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-semibold leading-tight text-ink">
          Named for the world's first
          <br />
          <span className="italic text-brand">analog computer</span>
        </h2>

        <div className="mt-10">
          {storyActs.map((act, i) => (
            <motion.div
              key={act.num}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.42, delay: i * 0.1 }}
              className="grid grid-cols-[3rem_1fr] gap-4 border-b border-brand/10 py-7 last:border-0 last:pb-0"
            >
              <p className="pt-0.5 font-display text-xs font-semibold text-brand/40">{act.num}</p>
              <div>
                <p className="font-display text-lg font-semibold text-ink">{act.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{act.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* RIGHT — Specs panel + instrument visual */}
      <div className="lg:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-brand/15 bg-parchment p-7"
        >
          {/* Watermark numbers */}
          <p className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[7rem] font-semibold leading-none text-brand/[0.08]">
            150
          </p>
          <p className="pointer-events-none absolute -bottom-3 -left-2 select-none font-display text-[7rem] font-semibold leading-none text-brand/[0.08]">
            BC
          </p>

          <p className="relative text-[10px] font-semibold uppercase tracking-[0.28em] text-brand/65">
            Mechanism specifications
          </p>

          <div className="relative mt-5 grid grid-cols-2 gap-3">
            {specs.map((spec) => (
              <div key={spec.label} className="rounded-xl border border-brand/10 bg-white p-4">
                <p className="font-display text-2xl font-semibold text-brand">{spec.value}</p>
                <p className="mt-1 text-[11px] leading-snug text-muted">{spec.label}</p>
              </div>
            ))}
          </div>

          {/* Instrument dial SVG */}
          <div className="relative mt-7 flex justify-center">
            <svg viewBox="0 0 180 180" className="h-36 w-36 text-brand/25" aria-hidden="true">
              <circle cx="90" cy="90" r="78" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="90" cy="90" r="60" stroke="currentColor" strokeWidth="0.8" fill="none" strokeDasharray="3 6" />
              <circle cx="90" cy="90" r="42" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="90" cy="90" r="24" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <circle cx="90" cy="90" r="8" fill="currentColor" opacity="0.6" />
              {Array.from({ length: 24 }).map((_, j) => {
                const angle = (j / 24) * Math.PI * 2
                const inner = 26
                const outer = j % 6 === 0 ? 78 : j % 3 === 0 ? 60 : 42
                return (
                  <line
                    key={j}
                    x1={90 + Math.cos(angle) * inner}
                    y1={90 + Math.sin(angle) * inner}
                    x2={90 + Math.cos(angle) * outer}
                    y2={90 + Math.sin(angle) * outer}
                    stroke="currentColor"
                    strokeWidth={j % 6 === 0 ? 1.8 : 0.75}
                    strokeLinecap="round"
                  />
                )
              })}
              <circle cx="90" cy="22" r="10" stroke="currentColor" strokeWidth="1" fill="none" />
              <circle cx="148" cy="56" r="7" stroke="currentColor" strokeWidth="0.8" fill="none" />
              <circle cx="32" cy="56" r="7" stroke="currentColor" strokeWidth="0.8" fill="none" />
            </svg>
          </div>
        </motion.div>

        {/* Philosophy bridge */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 border-l-2 border-brand/30 pl-5"
        >
          <p className="text-sm italic leading-relaxed text-muted">
            "Many precise parts, working together as one system. The Antikythera mechanism was built on that principle two thousand years ago. ANTIKRA is built on it today."
          </p>
        </motion.blockquote>
      </div>
    </div>
  )

  if (embedded) {
    return (
      <div
        id="heritage"
        className="container-wide relative overflow-hidden rounded-2xl border border-brand/10 bg-white p-8 md:p-12"
      >
        {content}
      </div>
    )
  }

  return (
    <section id="heritage" className="relative overflow-hidden border-y border-brand/10 bg-white">
      <div className="container-wide section-padding !py-16">{content}</div>
    </section>
  )
}
