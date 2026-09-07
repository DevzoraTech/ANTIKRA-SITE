import { ArrowRight } from "lucide-react"
import { companyCards } from "../../domain/antikra"
import {
  companyAbout,
  leadershipProfiles,
} from "../../domain/company"
import rembehImg from "../../assets/home/rembeh.png"
import carmieImg from "../../assets/home/carmie.png"
import { siteImages } from "../../shared/assets/images"

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
      {/* Magazine system hero */}
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[580px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center px-8 py-16 md:px-12 xl:px-16">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
              ANTIKRA · Company
            </p>
            <h1 className="mt-6 max-w-[520px] font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#16110f] md:text-[3.8rem]">
              {about.lead}
            </h1>
            <p className="mt-6 max-w-[420px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              {about.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#model"
                className="inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819]"
              >
                Understand ANTIKRA
              </a>
              <a
                href="/companies"
                className="group inline-flex h-11 items-center gap-3 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#16110f]"
              >
                Explore our companies
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] border-t border-black/10 bg-[#111414] lg:border-t-0 lg:border-l">
            <img
              src={siteImages.product}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-40"
            />
            <div className="relative z-10 flex h-full flex-col justify-center gap-4 p-8 md:p-12">
              <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.2em] text-[#e5d0aa]">
                The system
              </p>
              <ul className="space-y-3">
                {["Companies", "Products", "Research", "Olympia"].map((item) => (
                  <li
                    key={item}
                    className="border-l-2 border-[#a8711a] pl-4 font-display text-[1.35rem] font-semibold text-white"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
            {about.whyTitle}
          </h2>
          <p className="mt-4 max-w-[520px] text-[0.92rem] leading-[1.55] text-[#2c2824]">
            {about.whyDescription}
          </p>
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {about.whySteps.map((step, index) => (
              <li key={step.id} className="border-t border-black/12 pt-5">
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[1.5rem] font-semibold">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Model */}
      <section id="model" className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:px-12 lg:grid-cols-[1.2fr_0.8fr] xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              The ANTIKRA model
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
              Six companies. Shared capability. Clear outputs.
            </h2>
            <div className="mt-10 space-y-8">
              <div>
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                  Specialist companies
                </p>
                <ul className="mt-4 flex flex-wrap gap-3">
                  {companyCards.map((c) => (
                    <li key={c.id}>
                      <a
                        href={`/companies/${c.id}`}
                        className={`font-display text-[1.15rem] font-semibold underline-offset-4 hover:underline ${accentText[c.accent]}`}
                      >
                        {c.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                  Shared capabilities
                </p>
                <p className="mt-3 font-display text-[1.2rem] font-semibold text-[#16110f]">
                  {about.sharedCapabilities.join(" · ")}
                </p>
              </div>
              <div>
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                  Outputs
                </p>
                <p className="mt-3 font-display text-[1.2rem] font-semibold text-[#16110f]">
                  {about.modelOutputs.join(" · ")}
                </p>
              </div>
            </div>
          </div>
          <aside className="border border-black/10 bg-[#fbf8f1] p-8">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
              Roster
            </p>
            <ul className="mt-6 space-y-4">
              {companyCards.map((c) => (
                <li key={c.id} className="border-t border-black/10 pt-4">
                  <a href={`/companies/${c.id}`} className="block">
                    <p className={`font-display text-[1.2rem] font-semibold ${accentText[c.accent]}`}>
                      {c.name}
                    </p>
                    <p className="mt-1 text-[0.8rem] text-[#2c2824]">{c.discipline}</p>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* System flow */}
      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            How the system works
          </h2>
          <ol className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {about.systemFlow.map((step, index) => (
              <li
                key={step.id}
                className="min-w-[130px] flex-1 border-t-2 border-[#a8711a] pt-4"
              >
                <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-[1.05rem] font-semibold">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we build */}
      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
            What ANTIKRA builds
          </h2>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {about.buildPillars.map((pillar, index) => {
              const img = index === 0 ? rembehImg : index === 1 ? siteImages.infrastructure : carmieImg
              return (
                <a key={pillar.id} href={pillar.href} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="border-b border-black/10 pt-5 pb-6">
                    <h3 className="font-display text-[1.6rem] font-semibold">{pillar.title}</h3>
                    <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">
                      {pillar.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
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

      {/* Principles */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
            Principles that guide us
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {about.principles.map((item, index) => (
              <li key={item.id} className="border-t border-black/12 pt-5">
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-[1.3rem] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Presence + leadership preview */}
      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:px-12 lg:grid-cols-2 xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              Where we operate
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold tracking-[-0.02em]">
              Built from Kampala, Uganda.
            </h2>
            <p className="mt-4 max-w-[420px] text-[0.92rem] leading-[1.55] text-[#2c2824]">
              We design and operate technology from Africa for complex markets—with ambition that extends beyond a single geography.
            </p>
            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              {about.meta.map((item) => (
                <div key={item.label} className="border-t border-black/10 pt-4">
                  <dt className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                    {item.label}
                  </dt>
                  <dd className="mt-2 font-display text-[1.15rem] font-semibold">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display text-[2.2rem] font-semibold tracking-[-0.02em]">
                Leadership
              </h2>
              <a
                href="/company/leadership"
                className="font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]"
              >
                View all →
              </a>
            </div>
            <ul className="mt-8 space-y-6">
              {leadershipProfiles.map((person) => (
                <li key={person.id} className="border-t border-black/10 pt-5">
                  <p className="font-display text-[1.4rem] font-semibold">{person.name}</p>
                  <p className="mt-1 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                    {person.title}
                  </p>
                  <p className="mt-3 text-[0.86rem] leading-[1.5] text-[#2c2824]">{person.bio}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div className="max-w-[520px]">
            <h2 className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em]">
              {about.careersCta.title}
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.55] text-white/70">
              {about.careersCta.description}
            </p>
          </div>
          <a
            href={about.careersCta.href}
            className="inline-flex h-11 w-fit items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
          >
            {about.careersCta.buttonLabel}
          </a>
        </div>
      </section>

      {/* Dual CTA */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid max-w-[1500px] gap-6 px-8 py-12 md:grid-cols-2 md:px-12 xl:px-[72px]">
          <a href="/work" className="group border border-black/10 bg-[#f8f2e9] p-8 transition-colors hover:border-[#9a6d23]/40">
            <h3 className="font-display text-[1.6rem] font-semibold">Explore our work</h3>
            <p className="mt-3 text-[0.86rem] text-[#2c2824]">Selected products and systems we’ve delivered.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
              View work
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
          <a href="/company/contact" className="group border border-black/10 bg-[#f8f2e9] p-8 transition-colors hover:border-[#9a6d23]/40">
            <h3 className="font-display text-[1.6rem] font-semibold">Start a conversation</h3>
            <p className="mt-3 text-[0.86rem] text-[#2c2824]">Tell us what you need.</p>
            <span className="mt-6 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
              Contact
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
