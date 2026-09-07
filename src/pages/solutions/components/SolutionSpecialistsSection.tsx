import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { specialistCards } from "../../../domain/solutions"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"
import productImg from "../../../assets/home/product-img.png"
import { siteImages } from "../../../shared/assets/images"

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

const specialistVisuals: Record<(typeof specialistCards)[number]["id"], string> = {
  mechanism: rembehImg,
  cosmos: siteImages.infrastructure,
  orrery: siteImages.venture,
  astra: siteImages.studio,
  helios: productImg,
  olympia: carmieImg,
}

export function SolutionSpecialistsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="border-b border-black/10 bg-[#111414] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
              06 / Delivered by specialists
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.025em] md:text-[2.9rem]">
              Integrated by ANTIKRA.
            </h2>
            <p className="mt-5 max-w-[420px] text-[0.88rem] leading-[1.58] text-white/58">
              Each solution is delivered through the specialist companies that
              own the discipline — coordinated as one system when the problem
              requires more than one.
            </p>
          </div>
          <a
            href="/companies"
            className="group inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#a97b32]"
          >
            Explore companies
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div
          className="mt-12 grid gap-5 lg:grid-cols-3"
          onMouseLeave={() => setActive(0)}
        >
          {specialistCards.map((card, index) => {
            const isActive = active === index
            return (
              <a
                key={card.id}
                href={`/companies/${card.id}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group relative min-h-[240px] overflow-hidden border border-white/12 transition-opacity duration-300 ${
                  isActive ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={specialistVisuals[card.id]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,20,0.2)_0%,rgba(17,20,20,0.75)_48%,#111414_100%)]" />
                <div className="relative z-10 flex min-h-[240px] flex-col justify-end p-7">
                  <p className={`font-display text-[1.7rem] font-semibold ${accentText[card.accent]}`}>
                    {card.name}
                  </p>
                  <p className="mt-2 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-white/55">
                    {card.discipline}
                  </p>
                  <p className="mt-3 max-w-[260px] text-[0.82rem] leading-[1.5] text-white/88">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold text-[#a97b32]">
                    Open company
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
