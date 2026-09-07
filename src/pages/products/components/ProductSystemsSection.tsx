import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { productSystemNodes } from "../../../domain/products"

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

export function ProductSystemsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto grid w-full max-w-[1500px] px-8 py-14 md:grid-cols-[300px_1fr] md:px-12 md:py-16 xl:px-[72px]">
        <div className="pr-6">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            03 / Built by the system
          </p>
          <h2 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.7rem]">
            Every product
            <br />
            draws from
            <br />
            the group.
          </h2>
          <p className="mt-5 max-w-[250px] text-[0.8rem] leading-[1.55] text-[#161616]/58">
            Rembeh and Carmie are not standalone experiments. They are the
            operating output of ANTIKRA's specialist companies working as one
            system.
          </p>
          <a
            href="/companies"
            className="group mt-7 inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:text-[#9a6d23]"
          >
            See the companies
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="relative mt-10 md:mt-1" onMouseLeave={() => setActive(0)}>
          <div
            className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-black/12 md:block"
            aria-hidden
          >
            <div
              className="h-full origin-left bg-[#9a6d23] transition-[width] duration-500 ease-out"
              style={{
                width: `${(active / Math.max(productSystemNodes.length - 1, 1)) * 100}%`,
              }}
            />
          </div>

          <div className="grid md:grid-cols-5">
            {productSystemNodes.map((node, index) => {
              const isActive = active === index
              const isPassed = index <= active

              return (
                <button
                  key={node.id}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`relative min-h-[150px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-5 ${
                    index === 0 ? "md:border-l-0 md:pl-0" : ""
                  } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full border transition-colors duration-300 ${
                      isPassed
                        ? "border-[#9a6d23] bg-[#9a6d23]"
                        : "border-black/25 bg-transparent"
                    }`}
                  />
                  <p className={`mt-5 font-display text-[1.35rem] font-semibold ${accentText[node.accent]}`}>
                    {node.name}
                  </p>
                  <p
                    className={`mt-2 text-[0.68rem] leading-[1.45] transition-colors ${
                      isActive ? "text-[#161616]/72" : "text-[#161616]/42"
                    }`}
                  >
                    {node.discipline}
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
