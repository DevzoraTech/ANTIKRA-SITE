import { ArrowRight } from "lucide-react"
import { companyCards } from "../../../domain/antikra"
import { siteImages } from "../../../shared/assets/images"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"
import productImg from "../../../assets/home/product-img.png"

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

/** Temporary stand-ins — swap when company photography lands. */
const companyVisuals: Record<(typeof companyCards)[number]["id"], string> = {
  mechanism: rembehImg,
  cosmos: siteImages.infrastructure,
  orrery: siteImages.venture,
  astra: siteImages.studio,
  helios: productImg,
  olympia: carmieImg,
}

export function CompanyRosterSection() {
  return (
    <section id="the-companies" className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[540px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              02 / The companies
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.9rem]">
              Specialists with clear ownership.
            </h2>
          </div>
          <p className="max-w-[280px] text-[0.82rem] leading-[1.55] text-[#161616]/58">
            Enter any company for its discipline — or engage the group when the
            work needs more than one.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {companyCards.map((company) => (
            <a
              key={company.id}
              href={`/companies/${company.id}`}
              className="group relative min-h-[260px] overflow-hidden border border-black/10 bg-[#f3eee4]"
            >
              <img
                src={companyVisuals[company.id]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f5ed_0%,#f9f5ed_44%,rgba(249,245,237,0.94)_58%,rgba(249,245,237,0)_80%)]" />
              <div className="relative z-10 flex min-h-[260px] w-[58%] min-w-[230px] flex-col justify-between p-7 md:p-8">
                <div>
                  <p className={`font-display text-[1.55rem] font-semibold ${accentText[company.accent]}`}>
                    {company.number}
                  </p>
                  <h3
                    className={`mt-4 font-display text-[1.85rem] font-semibold uppercase tracking-[0.04em] ${accentText[company.accent]}`}
                  >
                    {company.name}
                  </h3>
                  <p className="mt-2 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#161616]/6">
                    {company.discipline}
                  </p>
                  <p className="mt-5 max-w-[240px] text-[0.84rem] leading-[1.55] text-[#2c2824]">
                    {company.description}
                  </p>
                </div>
                <span
                  className={`mt-7 inline-flex items-center gap-4 text-[0.74rem] font-semibold ${accentText[company.accent]}`}
                >
                  Explore {company.name}
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
