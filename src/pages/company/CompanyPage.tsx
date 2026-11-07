import { ArrowRight } from "lucide-react"
import { companyCards } from "../../domain/antikra"
import {
  companyAbout,
  leadershipProfiles,
} from "../../domain/company"
import rembehImg from "../../assets/home/rembeh.png"
import carmieImg from "../../assets/home/carmie.png"
import { leadershipPortraits, siteImages } from "../../shared/assets/images"

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

export function CompanyPage() {
  const about = companyAbout

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate min-h-[88svh] overflow-hidden border-b border-black/10 bg-[#111414] text-white">
        <img
          src={siteImages.studio}
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[62%_40%] opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,20,20,0.94)_0%,rgba(17,20,20,0.78)_42%,rgba(17,20,20,0.35)_70%,rgba(17,20,20,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,20,0.35)_0%,rgba(17,20,20,0.1)_35%,rgba(17,20,20,0.72)_100%)]" />

        <div className="relative mx-auto flex min-h-[88svh] w-full max-w-[1500px] flex-col justify-end px-6 pb-14 pt-[calc(var(--site-header-h)+2rem)] md:justify-center md:px-12 md:pb-20 xl:px-[72px]">
          <div className="max-w-[620px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#e5d0aa]">
              ANTIKRA / Company
            </p>
            <p className="mt-5 font-display text-[1.2rem] font-semibold tracking-[-0.02em] text-white/70 md:text-[1.4rem]">
              ANTIKRA
            </p>
            <h1 className="mt-3 font-display text-[3.1rem] font-semibold leading-[0.94] tracking-[-0.035em] md:text-[4.5rem] xl:text-[5.2rem]">
              {about.lead}
            </h1>
            <p className="mt-6 max-w-[440px] text-[0.95rem] leading-[1.6] text-white/72">
              {about.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#model"
                className="inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#8f5f14]"
              >
                Understand the model
              </a>
              <a
                href="/companies"
                className="group inline-flex h-11 items-center gap-3 border border-white/25 px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white/90 hover:border-[#e5d0aa] hover:text-[#e5d0aa]"
              >
                Explore companies
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[640px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              Purpose
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.3rem]">
              {about.whyTitle}
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.6] text-[#2c2824]">
              {about.whyDescription}
            </p>
          </div>
          <ol className="mt-14 grid gap-0 border-y border-black/10 md:grid-cols-3">
            {about.whySteps.map((step, index) => (
              <li
                key={step.id}
                className="border-b border-black/10 px-0 py-8 last:border-b-0 md:border-b-0 md:border-r md:px-8 md:py-10 md:last:border-r-0 md:first:pl-0"
              >
                <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-4 font-display text-[1.7rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="model" className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[680px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              The ANTIKRA model
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.3rem]">
              Six companies. Shared capability. Clear outputs.
            </h2>
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#15110f]/45">
                Specialist companies
              </p>
              <ul className="mt-6 divide-y divide-black/10 border-y border-black/10">
                {companyCards.map((company, index) => (
                  <li key={company.id}>
                    <a
                      href={`/companies/${company.id}`}
                      className="group flex items-baseline justify-between gap-6 py-5"
                    >
                      <div className="flex min-w-0 items-baseline gap-4 md:gap-6">
                        <span className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <p
                            className={`font-display text-[1.55rem] font-semibold tracking-[-0.02em] transition-colors group-hover:text-[#9a6d23] ${accentText[company.accent]}`}
                          >
                            {company.name}
                          </p>
                          <p className="mt-1 text-[0.84rem] text-[#2c2824]/75">{company.discipline}</p>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#9a6d23] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10 lg:col-span-5 lg:pl-6">
              <div className="border-t border-black/10 pt-6">
                <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#15110f]/45">
                  Shared capabilities
                </p>
                <ul className="mt-5 space-y-3">
                  {about.sharedCapabilities.map((item) => (
                    <li key={item} className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-black/10 pt-6">
                <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#15110f]/45">
                  Outputs
                </p>
                <ul className="mt-5 space-y-3">
                  {about.modelOutputs.map((item) => (
                    <li key={item} className="font-display text-[1.35rem] font-semibold tracking-[-0.02em]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#e5d0aa]">
              Operating sequence
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.1rem]">
              How the system works
            </h2>
          </div>
          <ol className="mt-12 grid gap-0 border-t border-white/12 sm:grid-cols-2 lg:grid-cols-4">
            {about.systemFlow.map((step, index) => (
              <li
                key={step.id}
                className="border-b border-white/12 px-0 py-6 sm:border-r sm:px-5 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(2n)]:lg:border-r [&:nth-child(4n)]:lg:border-r-0"
              >
                <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.16em] text-[#e5d0aa]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[1.3rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              Outputs
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.3rem]">
              What ANTIKRA builds
            </h2>
          </div>
          <div className="mt-14 space-y-16 md:space-y-20">
            {about.buildPillars.map((pillar, index) => {
              const img =
                index === 0 ? rembehImg : index === 1 ? siteImages.infrastructure : carmieImg
              const reverse = index % 2 === 1

              return (
                <a
                  key={pillar.id}
                  href={pillar.href}
                  className={`group grid items-center gap-8 lg:grid-cols-12 lg:gap-12 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#111414] lg:col-span-7">
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="lg:col-span-5">
                    <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 font-display text-[2.2rem] font-semibold tracking-[-0.02em] md:text-[2.6rem]">
                      {pillar.title}
                    </h3>
                    <p className="mt-4 max-w-[380px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
                      {pillar.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <h2 className="max-w-[540px] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.2rem]">
            Principles that guide us
          </h2>
          <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {about.principles.map((item, index) => (
              <li
                key={item.id}
                className="grid gap-3 py-7 md:grid-cols-[4.5rem_minmax(0,1fr)_minmax(0,1.45fr)] md:items-baseline md:gap-10"
              >
                <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display text-[1.55rem] font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>
                <p className="text-[0.92rem] leading-[1.55] text-[#2c2824]/80">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-14 px-6 py-16 md:px-12 md:py-24 lg:grid-cols-2 xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              Where we operate
            </p>
            <h2 className="mt-4 font-display text-[2.3rem] font-semibold tracking-[-0.03em] md:text-[2.8rem]">
              Built from Kampala, Uganda.
            </h2>
            <p className="mt-5 max-w-[420px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              We design and operate technology from Africa for complex markets, with ambition that extends beyond a single geography.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {about.meta.map((item) => (
                <div key={item.label} className="border-t border-black/10 pt-4">
                  <dt className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.2rem] font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
                  Leadership
                </p>
                <h2 className="mt-3 font-display text-[2.3rem] font-semibold tracking-[-0.03em] md:text-[2.8rem]">
                  Who holds the system.
                </h2>
              </div>
              <a
                href="/company/leadership"
                className="shrink-0 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]"
              >
                View all
              </a>
            </div>
            <ul className="mt-10 space-y-8">
              {leadershipProfiles.map((person) => (
                <li key={person.id}>
                  <a
                    href={`/company/leadership#${person.id}`}
                    className="group grid grid-cols-[88px_minmax(0,1fr)] gap-5 border-t border-black/10 pt-6"
                  >
                    <img
                      src={leadershipPortraits[person.portrait]}
                      alt=""
                      className={`h-[88px] w-[88px] object-cover ${
                        person.portrait === "kapeere-bonny"
                          ? "object-[center_10%]"
                          : "object-[center_18%]"
                      }`}
                    />
                    <div>
                      <p className="font-display text-[1.4rem] font-semibold leading-tight transition-colors group-hover:text-[#9a6d23]">
                        {person.name}
                      </p>
                      <p className="mt-1 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                        {person.shortTitle}
                      </p>
                      <p className="mt-3 text-[0.86rem] leading-[1.5] text-[#2c2824]">
                        {person.focus}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-10 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#e5d0aa]">
              Next
            </p>
            <h2 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[3.3rem]">
              {about.careersCta.title}
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.6] text-white/68">
              {about.careersCta.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={about.careersCta.href}
              className="inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] hover:bg-[#8f5f14]"
            >
              {about.careersCta.buttonLabel}
            </a>
            <a
              href="/company/contact"
              className="group inline-flex h-11 items-center gap-3 border border-white/25 px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white/90 hover:border-[#e5d0aa] hover:text-[#e5d0aa]"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
