import { useState } from "react"
import { ArrowRight } from "lucide-react"
import { solutionDetailPages } from "../../../domain/solutions"
import productImg from "../../../assets/home/product-img.png"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"

const page = solutionDetailPages["experience-design"]

export function ExperienceDesignSolutionPage() {
  const [activeStep, setActiveStep] = useState(0)
  const next = page.next

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      {/*
        Magazine split — solid type plane LEFT, unobstructed photo RIGHT.
        Not the home left-veil-over-image hero.
      */}
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[620px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center bg-[#f8f2e9] px-8 py-16 md:px-12 xl:px-[72px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#c24f32]">
              Experience & Design
            </p>
            <h1 className="mt-8 max-w-[460px] font-display text-[3.4rem] font-semibold leading-[0.96] tracking-[-0.03em] text-[#16110f] md:text-[4.2rem]">
              {page.lead}
            </h1>
            <p className="mt-8 max-w-[400px] text-[0.95rem] leading-[1.65] text-[#2c2824]">
              {page.summary}
            </p>
            <a
              href="/company/contact"
              className="group mt-10 inline-flex w-fit items-center gap-4 border-b border-[#c24f32] pb-2 font-display-sans text-[0.68rem] font-extrabold uppercase tracking-[0.12em] text-[#c24f32]"
            >
              {page.primaryActionLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src={productImg}
              alt="Design craft in a working environment"
              className="absolute inset-0 h-full w-full object-cover object-[45%_40%]"
            />
          </div>
        </div>
      </section>

      {/* Opening line — thin, not a second dark manifesto clone */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-10 md:px-12 xl:px-[72px]">
          <p className="max-w-[720px] font-display text-[1.85rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[#15110f] md:text-[2.15rem]">
            Design is not decoration — it is how complex technology becomes
            something people can actually use.
          </p>
        </div>
      </section>

      {/* Design path — list + detail */}
      <section id="design-path" className="border-b border-black/10 bg-[#fbf8f1]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <h2 className="max-w-[420px] font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
            {page.processLabel}
          </h2>

          <div
            className="mt-12 grid gap-0 border-t border-black/10 lg:grid-cols-[0.75fr_1.25fr]"
            onMouseLeave={() => setActiveStep(0)}
          >
            <div className="border-b border-black/10 lg:border-b-0 lg:border-r lg:pr-10">
              {page.process.map((step, index) => (
                <button
                  key={step.id}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className={`flex w-full items-baseline gap-5 border-b border-black/10 py-5 text-left transition-opacity ${
                    activeStep === index ? "opacity-100" : "opacity-35 hover:opacity-70"
                  }`}
                >
                  <span className="font-display text-[1.15rem] font-semibold text-[#c24f32]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[1.15rem] font-semibold text-[#161616]">
                    {step.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="py-10 lg:pl-14 lg:pt-8">
              <h3 className="font-display text-[2.6rem] font-semibold leading-[1.05] text-[#15110f]">
                {page.process[activeStep]?.title}
              </h3>
              <p className="mt-5 max-w-[400px] text-[1.05rem] leading-[1.6] text-[#2c2824]">
                {page.process[activeStep]?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What design owns */}
      <section className="border-b border-black/10 bg-[#f8f2e9]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <h2 className="font-display text-[2.2rem] font-semibold text-[#15110f]">
            What design owns
          </h2>
          <div className="mt-8 border-t border-black/10">
            {page.capabilities.map((capability) => (
              <div
                key={capability.id}
                className="grid gap-2 border-b border-black/10 py-6 sm:grid-cols-[200px_1fr] sm:gap-10"
              >
                <p className="font-display text-[1.15rem] font-semibold text-[#c24f32]">
                  {capability.title}
                </p>
                <p className="text-[0.9rem] leading-[1.55] text-[#2c2824]">
                  {capability.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <h2 className="max-w-[480px] font-display text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.02em]">
            Designed for where work actually happens.
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {page.secondaryItems.map((item) => (
              <div key={item.id}>
                <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa]">
                  {item.title}
                </p>
                <p className="mt-3 text-[0.82rem] leading-[1.5] text-white/80">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work — image top, solid text */}
      <section className="border-b border-black/10 bg-[#fbf8f1]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <h2 className="font-display text-[2.2rem] font-semibold text-[#15110f]">
            {page.workLabel}
          </h2>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {page.work.map((item) => {
              const image =
                item.visual === "carmie"
                  ? carmieImg
                  : item.id.includes("rembeh")
                    ? rembehImg
                    : productImg
              return (
                <a
                  key={item.id}
                  href={`/work/${item.id}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-5">
                    <p className="font-display text-[1.6rem] font-semibold text-[#15110f]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.72rem] uppercase tracking-[0.12em] text-[#c24f32]">
                      {item.category}
                    </p>
                    <p className="mt-3 max-w-[420px] text-[0.88rem] leading-[1.55] text-[#2c2824]">
                      {item.description}
                    </p>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Helios */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-8 py-14 md:grid-cols-[1fr_1fr] md:px-12 xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#c24f32]">
              Led by Helios
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.1] text-[#15110f]">
              Connected to the system that ships it.
            </h2>
            <p className="mt-4 max-w-[380px] text-[0.88rem] leading-[1.55] text-[#2c2824]">
              {page.systemDescription}
            </p>
            <a
              href="/companies/helios"
              className="mt-6 inline-flex items-center gap-3 text-[0.78rem] font-semibold text-[#c24f32]"
            >
              Explore Helios
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="flex flex-wrap content-start gap-x-8 gap-y-4 self-center">
            {page.systemSpecialists.map((card) => (
              <a
                key={card.id}
                href={`/companies/${card.id}`}
                className="font-display text-[1.35rem] font-semibold text-[#15110f] transition-colors hover:text-[#c24f32]"
              >
                {card.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-black/10 bg-[#f8f2e9]">
        <div className="mx-auto max-w-[1500px] px-8 py-14 md:px-12 xl:px-[72px]">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {page.principles.map((principle) => (
              <div key={principle.id}>
                <h3 className="font-display text-[1.3rem] font-semibold text-[#15110f]">
                  {principle.title}
                </h3>
                <p className="mt-2 text-[0.84rem] leading-[1.5] text-[#2c2824]">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Close */}
      <section className="border-b border-black/10 bg-[#c24f32] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-14 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div>
            <h2 className="max-w-[480px] font-display text-[2.5rem] font-semibold leading-[1.05]">
              {page.cta.title}
            </h2>
            <p className="mt-4 max-w-[380px] text-[0.9rem] leading-[1.55] text-white/85">
              {page.cta.description}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/company/contact"
              className="inline-flex h-11 items-center justify-center bg-white px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-[#c24f32]"
            >
              {page.cta.buttonLabel}
            </a>
            <a
              href={next.href}
              className="inline-flex items-center gap-3 text-[0.78rem] font-semibold text-white/90"
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
