import { ArrowRight } from "lucide-react"
import { groupWork } from "../../../domain/antikra"
import { siteImages } from "../../../shared/assets/images"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"

const accentClass = {
  green: "text-[#0d6b47]",
  blue: "text-[#174783]",
  violet: "text-[#6b4fcf]",
} as const

const workVisuals: Record<(typeof groupWork)[number]["id"], string> = {
  rembeh: rembehImg,
  carmie: carmieImg,
  "grid-insights": siteImages.venture,
}

export function GroupWorkSection() {
  return (
    <section className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[520px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              04 / Work across the group
            </p>
            <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#17110f] md:text-[2.7rem]">
              Where the companies show up together.
            </h2>
          </div>
          <a
            href="/work"
            className="group inline-flex items-center gap-5 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#141414] transition-colors hover:text-[#9a6d23]"
          >
            Explore all work
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {groupWork.map((work) => (
            <article
              key={work.id}
              className="group flex min-h-[360px] flex-col overflow-hidden border border-black/10 bg-[#f9f5ed]"
            >
              <div className="relative h-[170px] shrink-0 overflow-hidden">
                <img
                  src={workVisuals[work.id] ?? siteImages[work.imageKey]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                <div>
                  <h3
                    className={`font-display text-[1.7rem] font-semibold uppercase tracking-[0.04em] ${accentClass[work.accent]}`}
                  >
                    {work.title}
                  </h3>
                  <p className="mt-3 max-w-[280px] text-[0.86rem] leading-[1.55] text-[#2c2824]">
                    {work.description}
                  </p>
                  <p className="mt-4 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                    {work.contributors.join(" · ")}
                  </p>
                </div>
                <a
                  href={`/work/${work.id}`}
                  className={`mt-6 inline-flex items-center gap-4 text-[0.76rem] font-semibold ${accentClass[work.accent]}`}
                >
                  View case study
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
