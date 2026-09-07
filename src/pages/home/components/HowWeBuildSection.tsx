import { useState } from "react"
import { Code2, Compass, PenTool, Rocket, Search } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understanding the problem and operating context.",
    icon: Search,
  },
  {
    number: "02",
    title: "Architect",
    description: "Define the system, architecture and plan.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Engineer",
    description: "Build with quality, security and scalability.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Deploy",
    description: "Release into real environments.",
    icon: Rocket,
  },
  {
    number: "05",
    title: "Operate",
    description: "Monitor, support and improve continuously.",
    icon: Compass,
  },
]

export function HowWeBuildSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-black/10 bg-[#f7f1e8]">
      <div className="mx-auto grid w-full max-w-[1500px] px-8 py-12 md:grid-cols-[270px_1fr] md:px-12 md:py-14 xl:px-[72px]">
        <div className="pr-8">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            05 / How we build
          </p>
          <h2 className="mt-4 font-display text-[2.45rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f]">
            A system for
            <br />
            building systems.
          </h2>
          <p className="mt-5 max-w-[220px] text-[0.78rem] leading-[1.5] text-[#161616]/55">
            One operating sequence — from discovery through continuous
            operation.
          </p>
        </div>

        <div
          className="relative mt-10 md:mt-1"
          onMouseLeave={() => setActive(0)}
        >
          {/* Continuous system spine */}
          <div
            className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-black/12 md:block"
            aria-hidden
          >
            <div
              className="h-full origin-left bg-[#9a6d23] transition-[width] duration-500 ease-out"
              style={{ width: `${(active / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="grid md:grid-cols-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = active === index
              const isPassed = index <= active

              return (
                <button
                  key={step.number}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`relative min-h-[148px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-6 ${
                    index === 0 ? "md:border-l-0 md:pl-0" : ""
                  } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  <span
                    className={`relative z-10 flex h-11 w-11 items-center justify-center border bg-[#f7f1e8] transition-colors duration-300 ${
                      isPassed
                        ? "border-[#9a6d23] text-[#9a6d23]"
                        : "border-black/18 text-[#1a1a1a]/40"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.35} />
                  </span>
                  <p
                    className={`mt-5 font-display-sans text-[0.58rem] font-black transition-colors ${
                      isActive ? "text-[#9a6d23]" : "text-[#9a6d23]/55"
                    }`}
                  >
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[#161616]">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 text-[0.66rem] leading-[1.45] transition-colors ${
                      isActive ? "text-[#161616]/72" : "text-[#161616]/42"
                    }`}
                  >
                    {step.description}
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
