import { ArrowRight } from "lucide-react"
import type { CompanyAccent, CompanyPageContent } from "../../../domain/antikra"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"
import productImg from "../../../assets/home/product-img.png"
import { siteImages } from "../../../shared/assets/images"

export const companyAccentText: Record<CompanyAccent, string> = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
}

export const companyAccentBg: Record<CompanyAccent, string> = {
  bronze: "bg-[#9a6d23] hover:bg-[#7f5819]",
  green: "bg-[#0d6b47] hover:bg-[#0a5639]",
  violet: "bg-[#6b4fcf] hover:bg-[#5a3fb8]",
  blue: "bg-[#174783] hover:bg-[#133a6a]",
  coral: "bg-[#c24f32] hover:bg-[#a53f26]",
  gold: "bg-[#a8711a] hover:bg-[#8f5f14]",
}

export const companyHeroImage: Record<CompanyPageContent["id"], string> = {
  mechanism: rembehImg,
  cosmos: siteImages.infrastructure,
  orrery: siteImages.venture,
  astra: siteImages.studio,
  helios: productImg,
  olympia: carmieImg,
}

export const workImage = {
  rembeh: rembehImg,
  carmie: carmieImg,
  client: productImg,
  datacenter: siteImages.infrastructure,
  security: siteImages.studio,
  design: productImg,
  venture: siteImages.venture,
  analytics: siteImages.venture,
} as const

export function CompanyBrandHero({ page }: { page: CompanyPageContent }) {
  const accent = page.accent
  const image = companyHeroImage[page.id]
  const title = page.lead ?? page.summary

  if (page.id === "mechanism") {
    return (
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[600px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center bg-[#f8f2e9] px-8 py-16 md:px-12 xl:px-16">
            <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] ${companyAccentText[accent]}`}>
              {page.name} · {page.discipline}
            </p>
            <h1 className="mt-6 font-display text-[4.2rem] font-semibold uppercase leading-[0.9] tracking-[-0.03em] text-[#16110f] md:text-[5.2rem]">
              {page.name}
            </h1>
            <p className={`mt-4 font-display text-[1.6rem] font-semibold ${companyAccentText[accent]}`}>
              {page.discipline}
            </p>
            <p className="mt-6 max-w-[420px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              {page.summary}
            </p>
            <a
              href="#capabilities"
              className={`mt-8 inline-flex h-10 w-fit items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${companyAccentBg[accent]}`}
            >
              {page.primaryActionLabel ?? "See what we build"}
            </a>
          </div>
          <div className="relative min-h-[300px] lg:min-h-full">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-[60%_45%]" />
          </div>
        </div>
      </section>
    )
  }

  if (page.id === "cosmos") {
    return (
      <section className="border-b border-black/10 pt-[88px]">
        <div className="relative h-[260px] md:h-[320px]">
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_35%]" />
        </div>
        <div className="bg-[#f8f2e9] px-8 py-12 md:px-12 xl:px-[72px]">
          <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] ${companyAccentText[accent]}`}>
                {page.name} · {page.discipline}
              </p>
              <h1 className="mt-5 font-display text-[3.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#16110f] md:text-[4.2rem]">
                Infrastructure that stays up.
              </h1>
            </div>
            <div>
              <p className="max-w-[400px] text-[0.92rem] leading-[1.6] text-[#2c2824]">{page.summary}</p>
              <a
                href="#capabilities"
                className={`mt-6 inline-flex h-10 items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${companyAccentBg[accent]}`}
              >
                {page.primaryActionLabel ?? "Explore capabilities"}
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (page.id === "orrery") {
    return (
      <section className="relative isolate min-h-[620px] overflow-hidden border-b border-black/10 pt-[88px]">
        <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#1a1028]/80" />
        <div className="mx-auto flex min-h-[532px] max-w-[740px] flex-col items-center justify-center px-8 py-20 text-center text-white">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.28em] text-[#c4b5fd]">
            {page.name} · {page.discipline}
          </p>
          <h1 className="mt-8 font-display text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[4.1rem]">
            {page.lead ?? title}
          </h1>
          <p className="mt-6 max-w-[460px] text-[0.95rem] leading-[1.65] text-white/75">{page.summary}</p>
          <a
            href="#capabilities"
            className="mt-10 inline-flex h-10 items-center border border-white/35 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#1a1028]"
          >
            {page.primaryActionLabel ?? "Explore intelligence"}
          </a>
        </div>
      </section>
    )
  }

  if (page.id === "astra") {
    return (
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0c1218] pt-[88px] text-white">
        <img
          src={image}
          alt=""
          className="absolute inset-y-0 right-0 -z-10 hidden w-[46%] object-cover opacity-40 lg:block"
        />
        <div className="mx-auto max-w-[1500px] px-8 py-20 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.24em] text-[#6ea0d4]">
            {page.name} · {page.discipline}
          </p>
          <h1 className="mt-8 max-w-[620px] font-display text-[3.3rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[4.2rem]">
            {page.lead ?? "Security engineered into the system."}
          </h1>
          <p className="mt-6 max-w-[440px] text-[0.92rem] leading-[1.65] text-white/70">{page.summary}</p>
          <div className="mt-10 flex flex-wrap gap-6 text-[0.7rem] uppercase tracking-[0.14em] text-white/45">
            {page.visualNotes.slice(0, 3).map((note) => (
              <span key={note}>{note.split("\n")[0]}</span>
            ))}
          </div>
          <a
            href="#capabilities"
            className={`mt-10 inline-flex h-10 items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${companyAccentBg.blue}`}
          >
            {page.primaryActionLabel ?? "See how we protect"}
          </a>
        </div>
      </section>
    )
  }

  if (page.id === "helios") {
    return (
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[600px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[300px] order-2 lg:order-1 lg:min-h-full">
            <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-[42%_40%]" />
          </div>
          <div className="order-1 flex flex-col justify-center bg-[#f8f2e9] px-8 py-16 md:px-12 xl:px-16 lg:order-2">
            <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] ${companyAccentText[accent]}`}>
              {page.name} · {page.discipline}
            </p>
            <h1 className="mt-6 max-w-[420px] font-display text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#16110f] md:text-[3.9rem]">
              {page.lead ?? "Complex technology, made intuitive."}
            </h1>
            <p className="mt-6 max-w-[380px] text-[0.92rem] leading-[1.6] text-[#2c2824]">{page.summary}</p>
            <a
              href="#capabilities"
              className="group mt-8 inline-flex w-fit items-center gap-3 border-b border-[#c24f32] pb-2 font-display-sans text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#c24f32]"
            >
              {page.primaryActionLabel ?? "See the craft"}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    )
  }

  // Olympia — dark cinematic
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#111414] pt-[88px] text-white">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_35%_40%,rgba(17,20,20,0.3),rgba(17,20,20,0.92)_72%)]" />
      <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[1000px] flex-col items-center justify-center px-8 py-20 text-center">
        <p className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-[#e5d0aa]">
          {page.name} · {page.discipline}
        </p>
        <h1 className="mt-8 max-w-[820px] font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.035em] md:text-[4.8rem]">
          {page.lead ?? "We build companies around consequential problems."}
        </h1>
        <p className="mt-8 max-w-[480px] text-[1rem] leading-[1.65] text-white/75">{page.summary}</p>
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="#ventures"
            className="inline-flex h-11 items-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em]"
          >
            {page.primaryActionLabel ?? "Explore ventures"}
          </a>
          <a
            href="/company/contact"
            className="inline-flex h-11 items-center font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa] underline-offset-4 hover:underline"
          >
            {page.secondaryActionLabel ?? "Build with Olympia"}
          </a>
        </div>
      </div>
    </section>
  )
}
