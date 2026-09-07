import { ArrowRight } from "lucide-react"
import {
  leadershipFlow,
  leadershipPrinciples,
  leadershipProfiles,
} from "../../domain/company"

export function LeadershipPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            ANTIKRA / Company / Leadership
          </p>
          <h1 className="mt-6 max-w-[720px] font-display text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.03em] md:text-[4rem]">
            Built by people who think in systems.
          </h1>
          <p className="mt-6 max-w-[480px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
            Leadership at ANTIKRA connects technology, business and operational
            perspectives so the group compounds as one system.
          </p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Our leadership
          </h2>
          <ul className="mt-12 space-y-12">
            {leadershipProfiles.map((person) => (
              <li
                key={person.id}
                className="grid gap-8 border-t border-black/10 pt-10 lg:grid-cols-[1.2fr_1fr_0.7fr]"
              >
                <div>
                  <h3 className="font-display text-[2rem] font-semibold">{person.name}</h3>
                  <p className="mt-2 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                    {person.title}
                  </p>
                  <p className="mt-4 max-w-[460px] text-[0.9rem] leading-[1.55] text-[#2c2824]">
                    {person.bio}
                  </p>
                </div>
                <div>
                  <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                    Primary responsibilities
                  </p>
                  <ul className="mt-4 space-y-2">
                    {person.responsibilities.map((item) => (
                      <li key={item} className="text-[0.88rem] text-[#2c2824]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border border-black/10 bg-[#f4eee5] p-6">
                  <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                    Across ANTIKRA
                  </p>
                  <p className="mt-4 font-display text-[1.5rem] font-semibold">
                    {person.systemRole}
                  </p>
                  <p className="mt-2 text-[0.84rem] text-[#2c2824]">{person.systemRoleLabel}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.2rem] font-semibold tracking-[-0.02em]">
            How leadership connects to the system
          </h2>
          <ol className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {leadershipFlow.map((step, index) => (
              <li key={step.id} className="min-w-[120px] flex-1 border-t-2 border-[#a8711a] pt-4">
                <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-[1.1rem] font-semibold">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Leadership principles
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leadershipPrinciples.map((item) => (
              <li key={item.id} className="border-t border-black/12 pt-5">
                <h3 className="font-display text-[1.3rem] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.5rem] font-semibold tracking-[-0.02em]">
            Build with ANTIKRA.
          </h2>
          <a
            href="/company/careers"
            className="group inline-flex items-center gap-3 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#e5d0aa]"
          >
            Explore careers
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  )
}
