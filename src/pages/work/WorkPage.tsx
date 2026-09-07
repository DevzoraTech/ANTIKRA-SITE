import { ArrowRight } from "lucide-react"
import type { WorkCaseStudy } from "../../domain/work"
import { workCaseStudies } from "../../domain/work"
import rembehImg from "../../assets/home/rembeh.png"
import carmieImg from "../../assets/home/carmie.png"
import productImg from "../../assets/home/product-img.png"
import { siteImages } from "../../shared/assets/images"

const accentText = {
  green: "text-[#0d6b47]",
  blue: "text-[#174783]",
  violet: "text-[#6b4fcf]",
  bronze: "text-[#9a6d23]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

const visualMap = {
  rembeh: rembehImg,
  carmie: carmieImg,
  venture: siteImages.venture,
  infrastructure: siteImages.infrastructure,
  product: productImg,
  studio: siteImages.studio,
} as const

export function WorkPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            ANTIKRA · Work
          </p>
          <h1 className="mt-6 max-w-[640px] font-display text-[3.3rem] font-semibold leading-[0.98] tracking-[-0.03em] md:text-[4.2rem]">
            Selected work.
          </h1>
          <p className="mt-6 max-w-[460px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
            Products, platforms and systems delivered across the ANTIKRA group.
          </p>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        {workCaseStudies.map((item, index) => {
          const reverse = index % 2 === 1
          return (
            <a
              key={item.id}
              href={`/work/${item.slug}`}
              className={`grid border-t border-white/10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[280px] lg:min-h-[380px]">
                <img
                  src={visualMap[item.visual]}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#161a1a] px-8 py-14 md:px-12">
                <p className={`font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] ${accentText[item.accent]}`}>
                  {item.category}
                </p>
                <h2 className="mt-4 font-display text-[2.4rem] font-semibold">{item.title}</h2>
                <p className="mt-3 max-w-[420px] text-[0.92rem] leading-[1.55] text-white/70">
                  {item.summary}
                </p>
                <p className="mt-5 text-[0.78rem] text-white/45">
                  {item.contributors.join(" · ")}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#e5d0aa]">
                  View case study
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          )
        })}
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-8 py-14 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <p className="max-w-[480px] font-display text-[1.8rem] font-semibold leading-[1.15]">
            Need ANTIKRA to build something similar?
          </p>
          <a
            href="/company/contact"
            className="inline-flex h-11 w-fit items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </div>
  )
}

export function WorkDetailPage({ study }: { study: WorkCaseStudy }) {
  const others = workCaseStudies.filter((item) => item.id !== study.id)

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate min-h-[520px] overflow-hidden border-b border-black/10 pt-[88px]">
        <img
          src={visualMap[study.visual]}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f8f2e9_0%,rgba(248,242,233,0.95)_34%,rgba(248,242,233,0.55)_58%,rgba(248,242,233,0.15)_100%)]" />
        <div className="mx-auto flex min-h-[432px] max-w-[1500px] items-center px-8 py-16 md:px-12 xl:px-[72px]">
          <div className="max-w-[560px]">
            <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${accentText[study.accent]}`}>
              Work · {study.category}
            </p>
            <h1 className="mt-5 font-display text-[3.4rem] font-semibold uppercase leading-[0.95] tracking-[-0.03em] md:text-[4.4rem]">
              {study.title}
            </h1>
            <p className="mt-5 text-[0.95rem] leading-[1.6] text-[#2c2824]">{study.summary}</p>
            {study.productHref && (
              <a
                href={study.productHref}
                className={`mt-8 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] ${accentText[study.accent]}`}
              >
                Explore product
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:px-12 lg:grid-cols-3 xl:px-[72px]">
          <div>
            <h2 className="font-display text-[1.5rem] font-semibold">Problem</h2>
            <p className="mt-4 text-[0.9rem] leading-[1.6] text-[#2c2824]">{study.problem}</p>
          </div>
          <div>
            <h2 className="font-display text-[1.5rem] font-semibold">Approach</h2>
            <p className="mt-4 text-[0.9rem] leading-[1.6] text-[#2c2824]">{study.approach}</p>
          </div>
          <div>
            <h2 className="font-display text-[1.5rem] font-semibold">Outcome</h2>
            <p className="mt-4 text-[0.9rem] leading-[1.6] text-[#2c2824]">{study.outcome}</p>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2rem] font-semibold tracking-[-0.02em]">Highlights</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {study.highlights.map((item, index) => (
              <li key={item} className="border-t border-black/12 pt-5">
                <p className={`font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] ${accentText[study.accent]}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[1.25rem] font-semibold">{item}</p>
              </li>
            ))}
          </ul>
          <p className="mt-10 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
            Built with
          </p>
          <p className="mt-3 font-display text-[1.3rem] font-semibold">
            {study.contributors.join(" · ")}
          </p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-14 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[1.8rem] font-semibold">More work</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.id}>
                <a href={`/work/${item.slug}`} className="group grid gap-4 sm:grid-cols-[160px_1fr]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={visualMap[item.visual]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className={`font-display text-[1.4rem] font-semibold ${accentText[item.accent]}`}>
                      {item.title}
                    </p>
                    <p className="mt-2 text-[0.86rem] text-[#2c2824]">{item.summary}</p>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
