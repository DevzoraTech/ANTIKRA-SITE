import { useState } from "react"
import { solutionProcess } from "../../../domain/solutions"

export function SolutionProcessSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto grid w-full max-w-[1500px] px-8 py-14 md:grid-cols-[280px_1fr] md:px-12 md:py-16 xl:px-[72px]">
        <div className="pr-6">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            04 / How engagements work
          </p>
          <h2 className="mt-4 font-display text-[2.25rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f]">
            From problem
            <br />
            to operating
            <br />
            system.
          </h2>
          <p className="mt-5 max-w-[230px] text-[0.78rem] leading-[1.5] text-[#161616]/55">
            A shared sequence — with the right ANTIKRA companies activated at
            each stage.
          </p>
        </div>

        <div className="relative mt-10 md:mt-1" onMouseLeave={() => setActive(0)}>
          <div
            className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-black/12 md:block"
            aria-hidden
          >
            <div
              className="h-full origin-left bg-[#9a6d23] transition-[width] duration-500 ease-out"
              style={{
                width: `${(active / Math.max(solutionProcess.length - 1, 1)) * 100}%`,
              }}
            />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6">
            {solutionProcess.map((step, index) => {
              const isActive = active === index
              const isPassed = index <= active

              return (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`relative min-h-[160px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-4 ${
                    index === 0 ? "md:border-l-0 md:pl-0" : ""
                  } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full border transition-colors ${
                      isPassed
                        ? "border-[#9a6d23] bg-[#9a6d23]"
                        : "border-black/25 bg-transparent"
                    }`}
                  />
                  <p className="mt-5 font-display-sans text-[0.58rem] font-black text-[#9a6d23]">
                    {step.number}
                  </p>
                  <h3 className="mt-1 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[#161616]">
                    {step.title}
                  </h3>
                  <p
                    className={`mt-2 text-[0.64rem] leading-[1.45] ${
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
