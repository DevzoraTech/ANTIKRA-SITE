import { motion } from "framer-motion"
import { Button } from "./Button"
import { MechanismCanvas } from "./MechanismCanvas"
import { heroStats } from "../data/navigation"
import antikraStudioBg from "../assets/antikra-studio-bg.webp"

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

const statColors = ["bg-brand", "bg-aegean", "bg-copper", "bg-patina"]

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-8">
      <div className="absolute inset-0 bg-[linear-gradient(118deg,#ffffff_0%,rgba(255,253,248,0.88)_38%,rgba(237,244,242,0.55)_70%,rgba(243,239,232,0.42)_100%)]" />
      <img
        src={antikraStudioBg}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="pointer-events-none absolute right-0 top-0 hidden h-full w-[64%] object-cover object-right opacity-[0.52] [mask-image:linear-gradient(90deg,transparent_0%,rgba(0,0,0,0.55)_18%,black_34%,black_100%)] lg:block"
      />
      <div className="pointer-events-none absolute inset-y-0 right-[42%] hidden w-[22%] bg-gradient-to-r from-white via-white/45 to-transparent lg:block" />
      <div className="absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(255,255,255,0))]" />
      <div className="hero-watermark pointer-events-none absolute inset-0 opacity-28" />
      <div className="pointer-events-none absolute right-[-140px] top-20 h-[560px] w-[560px] rounded-full bg-aegean-muted/35 blur-3xl" />
      <div className="pointer-events-none absolute left-[-160px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-brand-light/18 blur-3xl" />
      <div className="pointer-events-none absolute left-[48%] top-1/3 h-48 w-48 rounded-full bg-copper/6 blur-3xl" />
      <div className="pointer-events-none absolute inset-y-28 right-[10%] w-px bg-gradient-to-b from-transparent via-brand/20 to-transparent" />

      <div className="container-wide relative z-10 px-5 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:min-h-[calc(100svh-15rem)] lg:grid-cols-[minmax(0,1fr)_520px] lg:items-center lg:gap-20">
          <div className="max-w-2xl">
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[11px] font-semibold uppercase tracking-[0.28em] text-aegean"
            >
              ANTIKRA Group / Company builder
            </motion.p>

            <motion.h1
              custom={0.12}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-[760px] font-display text-[clamp(2.25rem,4.4vw,4.45rem)] leading-[0.96] font-semibold text-ink"
            >
              <span className="block whitespace-nowrap">Building companies</span>
              <span className="block whitespace-nowrap">
                for the <span className="text-brand">intelligent age.</span>
              </span>
            </motion.h1>

            <motion.p
              custom={0.2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-6 max-w-xl text-base leading-[1.7] text-muted md:text-lg"
            >
              ANTIKRA is a family of specialist companies building software,
              AI systems, cloud infrastructure, cybersecurity, digital
              experience, and new ventures.
            </motion.p>

            <motion.div
              custom={0.28}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-8 flex items-center gap-3"
            >
              <Button
                size="lg"
                as="a"
                href="#contact"
                className="shrink-0 px-6 shadow-[0_14px_30px_rgba(154,123,79,0.25)] md:px-10"
              >
                Start a project
              </Button>
              <Button
                size="lg"
                variant="aegean"
                as="a"
                href="#brands"
                className="shrink-0 bg-white/55 px-6 backdrop-blur md:px-10"
              >
                Explore our companies
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12 }}
            className="relative lg:justify-self-end"
          >
            <div className="absolute -inset-8 rounded-full bg-[conic-gradient(from_210deg,rgba(154,123,79,0.08),rgba(30,77,92,0.05),rgba(90,122,106,0.06),rgba(184,115,51,0.06),rgba(154,123,79,0.08))] blur-2xl" />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.18),rgba(196,165,116,0.06)_45%,transparent_72%)]" />
            <div className="relative h-[320px] overflow-hidden sm:h-[390px] lg:h-[430px] lg:w-[480px]">
            <MechanismCanvas />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.52, delay: 0.38 }}
          className="mt-8 border-y border-brand/10 bg-white/45 py-3 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <span className="mr-1 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
              Group calibration
            </span>
            {heroStats.map((stat, index) => (
              <span
                key={stat.label}
                className="flex items-center gap-2 rounded-full border border-brand/10 bg-white/65 px-3 py-1.5 text-muted shadow-sm"
              >
                <span
                  className={`h-2 w-2 rounded-full ${statColors[index]}`}
                  aria-hidden="true"
                />
                <strong className="font-sans text-base font-semibold text-ink">
                  {stat.value}
                </strong>
                <span>{stat.label.toLowerCase()}</span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
