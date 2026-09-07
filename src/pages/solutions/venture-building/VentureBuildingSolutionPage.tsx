import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { solutionDetailPages } from "../../../domain/solutions"
import { siteImages } from "../../../shared/assets/images"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"

const page = solutionDetailPages["venture-building"]

const companyHref: Record<string, string> = {
  olympia: "/companies/olympia",
  helios: "/companies/helios",
  mechanism: "/companies/mechanism",
  cosmos: "/companies/cosmos",
  orrery: "/companies/orrery",
  astra: "/companies/astra",
}

export function VentureBuildingSolutionPage() {
  const [stage, setStage] = useState(0)
  const next = page.next
  const activeProcess = page.process[stage]

  return (
    <div className="bg-[#111414] text-white">
      {/*
        Dark cinematic hero — opposite of cream veil pages.
        Type sits in the dark; photo is atmosphere, not a left-fade clone.
      */}
      <section className="relative isolate min-h-[100svh] overflow-hidden pt-[88px]">
        <img
          src={siteImages.venture}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_40%,rgba(17,20,20,0.35),rgba(17,20,20,0.92)_70%)]" />

        <div className="mx-auto flex min-h-[calc(100svh-88px)] w-full max-w-[1100px] flex-col justify-center px-8 py-20 text-center md:px-12">
          <p className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-[#e5d0aa]">
            Venture Building
          </p>
          <h1 className="mx-auto mt-8 max-w-[820px] font-display text-[3.6rem] font-semibold leading-[0.95] tracking-[-0.035em] md:text-[5rem] xl:text-[5.8rem]">
            {page.lead}
          </h1>
          <p className="mx-auto mt-8 max-w-[480px] text-[1rem] leading-[1.65] text-white/75">
            {page.summary}
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            <a
              href="/company/contact"
              className="inline-flex h-11 items-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#8f5f14]"
            >
              {page.primaryActionLabel}
            </a>
            <a
              href="#venture-journey"
              className="font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa] underline-offset-4 hover:underline"
            >
              The journey
            </a>
          </div>
        </div>
      </section>

      {/* Gate first — unique to venture */}
      <section className="border-t border-white/10 bg-[#f8f2e9] text-[#141414]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <div className="max-w-[560px]">
            <h2 className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em]">
              {page.principlesLabel}
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.55] text-[#2c2824]">
              Not every opportunity becomes a venture. We pressure-test before we
              build.
            </p>
          </div>
          <ol className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.principles.map((item, index) => (
              <li key={item.id} className="flex gap-4">
                <span className="font-display text-[1.4rem] font-semibold text-[#a8711a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-[1.25rem] font-semibold text-[#15110f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] leading-[1.5] text-[#2c2824]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Journey — horizontal stages on cream */}
      <section id="venture-journey" className="bg-[#f4eee5] text-[#141414]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
            {page.processLabel}
          </h2>

          <div className="mt-10 flex gap-2 overflow-x-auto pb-2" onMouseLeave={() => setStage(0)}>
            {page.process.map((step, index) => (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setStage(index)}
                onFocus={() => setStage(index)}
                className={`min-w-[140px] flex-1 border-t-2 py-4 text-left transition-colors ${
                  stage === index
                    ? "border-[#a8711a] text-[#15110f]"
                    : "border-black/15 text-[#15110f]/40 hover:text-[#15110f]/70"
                }`}
              >
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em]">
                  {step.number}
                </p>
                <p className="mt-2 font-display text-[1.2rem] font-semibold">{step.title}</p>
              </button>
            ))}
          </div>

          <p className="mt-8 max-w-[520px] text-[1.05rem] leading-[1.6] text-[#2c2824]">
            {activeProcess?.description}
          </p>
        </div>
      </section>

      {/* Venture shapes — 2x2 large */}
      <section className="bg-[#f8f2e9] text-[#141414]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="max-w-[480px] font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            {page.capabilityLabel}
          </h2>
          <div className="mt-10 grid md:grid-cols-2">
            {page.capabilities.map((capability, index) => (
              <article
                key={capability.id}
                className={`border-black/10 py-10 ${
                  index % 2 === 0 ? "md:border-r md:pr-10" : "md:pl-10"
                } ${index < 2 ? "border-b" : ""} ${index >= 2 ? "border-t md:border-t-0" : ""}`}
              >
                <h3 className="font-display text-[1.75rem] font-semibold text-[#15110f]">
                  {capability.title}
                </h3>
                <p className="mt-4 max-w-[360px] text-[0.9rem] leading-[1.55] text-[#2c2824]">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What we bring — dense list */}
      <section className="border-y border-black/10 bg-[#111414] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:grid-cols-[0.7fr_1.3fr] md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.2rem] font-semibold leading-[1.1]">
            {page.secondaryLabel}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {page.secondaryItems.map((item) => (
              <div key={item.id}>
                <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa]">
                  {item.title}
                </p>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-white/75">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof — stacked full-bleed bands, not twin cards */}
      <section className="bg-[#f8f2e9] text-[#141414]">
        <div className="mx-auto max-w-[1500px] px-8 py-6 md:px-12 xl:px-[72px]">
          <h2 className="py-8 font-display text-[2.2rem] font-semibold">
            {page.workLabel}
          </h2>
        </div>
        {page.work.map((item, index) => {
          const image = item.visual === "carmie" ? carmieImg : rembehImg
          const href =
            item.visual === "carmie" ? "/products/carmie" : "/products/rembeh"
          const reverse = index % 2 === 1
          return (
            <a
              key={item.id}
              href={href}
              className={`group grid border-t border-black/10 lg:grid-cols-2 ${
                reverse ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-[360px]">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-col justify-center bg-[#f8f2e9] px-8 py-12 md:px-12 xl:px-16">
                <p className="font-display text-[2.2rem] font-semibold uppercase tracking-[0.04em] text-[#15110f]">
                  {item.title}
                </p>
                <p className="mt-2 text-[0.7rem] uppercase tracking-[0.14em] text-[#a8711a]">
                  {item.category}
                </p>
                <p className="mt-5 max-w-[400px] text-[0.92rem] leading-[1.55] text-[#2c2824]">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-[0.78rem] font-semibold text-[#a8711a]">
                  Explore product
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          )
        })}
      </section>

      {/* System */}
      <section className="bg-[#f4eee5] text-[#141414]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="max-w-[520px] font-display text-[2.3rem] font-semibold leading-[1.1]">
            {page.architectureLabel}
          </h2>
          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
            {page.architectureLayers.map((layer) => (
              <a
                key={layer.id}
                href={companyHref[layer.id] ?? "/companies"}
                className="group"
              >
                <p className="font-display text-[1.5rem] font-semibold transition-colors group-hover:text-[#a8711a]">
                  {layer.title}
                </p>
                <p className="mt-1 text-[0.75rem] text-[#5a534c]">{layer.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Close — dark again */}
      <section className="border-t border-white/10 bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div>
            <h2 className="max-w-[480px] font-display text-[2.6rem] font-semibold leading-[1.05]">
              Ready to build the company, not just the pitch?
            </h2>
            <p className="mt-4 max-w-[400px] text-[0.9rem] leading-[1.55] text-white/65">
              {page.systemDescription}
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="/company/contact"
              className="inline-flex h-11 items-center justify-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em]"
            >
              Discuss an opportunity
            </a>
            <a
              href={next.href}
              className="inline-flex items-center justify-center gap-3 text-[0.78rem] text-white/70 hover:text-white"
            >
              Next: {next.title}
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
