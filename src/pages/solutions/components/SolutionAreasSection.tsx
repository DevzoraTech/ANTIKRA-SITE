import { ArrowRight } from "lucide-react"
import { solutionAreas } from "../../../domain/solutions"
import { siteImages } from "../../../shared/assets/images"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"
import productImg from "../../../assets/home/product-img.png"

const accentText = {
  green: "text-[#0d6b47]",
  teal: "text-[#0f766e]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

const areaVisuals: Record<(typeof solutionAreas)[number]["id"], string> = {
  "product-engineering": rembehImg,
  "cloud-infrastructure": siteImages.infrastructure,
  "ai-data": siteImages.venture,
  cybersecurity: siteImages.studio,
  "experience-design": productImg,
  "venture-building": carmieImg,
}

export function SolutionAreasSection() {
  return (
    <section id="solution-areas" className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              02 / Solution areas
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.9rem]">
              What clients engage ANTIKRA to deliver.
            </h2>
          </div>
          <p className="max-w-[280px] text-[0.82rem] leading-[1.55] text-[#161616]/58">
            Each area can stand alone — or combine with others when the problem
            crosses disciplines.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {solutionAreas.map((area) => (
            <a
              key={area.id}
              href={area.href}
              className="group relative min-h-[250px] overflow-hidden border border-black/10 bg-[#f3eee4]"
            >
              <img
                src={areaVisuals[area.id]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f5ed_0%,#f9f5ed_44%,rgba(249,245,237,0.94)_58%,rgba(249,245,237,0)_80%)]" />
              <div className="relative z-10 flex min-h-[250px] w-[58%] min-w-[230px] flex-col justify-between p-7 md:p-8">
                <div>
                  <p className={`font-display text-[1.4rem] font-semibold ${accentText[area.accent]}`}>
                    {area.number}
                  </p>
                  <h3 className="mt-3 font-display text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
                    {area.title}
                  </h3>
                  <p className="mt-2 font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.12em] text-[#161616]/55">
                    {area.discipline}
                  </p>
                  <p className="mt-4 max-w-[250px] text-[0.84rem] leading-[1.55] text-[#2c2824]">
                    {area.description}
                  </p>
                </div>
                <span className={`mt-6 inline-flex items-center gap-4 text-[0.74rem] font-semibold ${accentText[area.accent]}`}>
                  Explore solution
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
