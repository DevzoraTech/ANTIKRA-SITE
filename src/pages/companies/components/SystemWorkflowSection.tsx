import { useState } from "react"
import { ArrowRight, Box, Brain, Cloud, Sparkles, Target } from "lucide-react"
import { systemSteps } from "../../../domain/antikra"

const stepIcons = {
  target: Target,
  pencil: Sparkles,
  code: Box,
  cloud: Cloud,
  brain: Brain,
} as const

const ownerAccent = {
  coral: "text-[#c24f32]",
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  gold: "text-[#a8711a]",
} as const

export function SystemWorkflowSection() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="how-the-system-works"
      className="border-b border-black/10 bg-[#f4eee5]"
    >
      <div className="mx-auto grid w-full max-w-[1500px] px-8 py-14 md:grid-cols-[300px_1fr] md:px-12 md:py-16 xl:px-[72px]">
        <div className="pr-6">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            03 / How the system works
          </p>
          <h2 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.7rem]">
            One engagement
            <br />
            can activate
            <br />
            multiple companies.
          </h2>
          <p className="mt-5 max-w-[250px] text-[0.8rem] leading-[1.55] text-[#161616]/58">
            Work moves through a shared sequence. Different ANTIKRA companies
            own different stages — independently or as a coordinated system.
          </p>
          <a
            href="/company"
            className="group mt-7 inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:text-[#9a6d23]"
          >
            Learn the operating model
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mt-10 md:mt-1" onMouseLeave={() => setActive(0)}>
          <div
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-black/12 md:block"
            aria-hidden
          >
            <div
              className="h-full origin-left bg-[#9a6d23] transition-[width] duration-500 ease-out"
              style={{ width: `${(active / (systemSteps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid md:grid-cols-5">
            {systemSteps.map((step, index) => {
              const Icon = stepIcons[step.icon]
              const isActive = active === index
              const isPassed = index <= active

              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`relative min-h-[168px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-5 ${
                    index === 0 ? "md:border-l-0 md:pl-0" : ""
                  } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center border bg-[#f4eee5] transition-colors duration-300 ${
                      isPassed
                        ? "border-[#9a6d23] text-[#9a6d23]"
                        : "border-black/18 text-[#1a1a1a]/40"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.35} />
                  </span>
                  <h3 className="mt-5 max-w-[140px] font-display-sans text-[0.62rem] font-extrabold uppercase leading-[1.3] tracking-[0.08em] text-[#161616]">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 max-w-[150px] text-[0.66rem] leading-[1.45] transition-colors ${
                      isActive ? "text-[#161616]/72" : "text-[#161616]/42"
                    }`}
                  >
                    {step.description}
                  </p>
                  <p
                    className={`mt-4 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] ${ownerAccent[step.accent]}`}
                  >
                    {step.owner}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
