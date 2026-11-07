import { ArrowRight } from "lucide-react"
import {
  leadershipFlow,
  leadershipPage,
  leadershipPrinciples,
  leadershipProfiles,
} from "../../domain/company"
import { leadershipPortraits } from "../../shared/assets/images"

export function LeadershipPage() {
  const [chairman, coFounder] = leadershipProfiles

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#111414] text-white">
        <div className="relative mt-[var(--site-header-h)] h-[min(52vh,420px)] w-full md:absolute md:inset-0 md:mt-0 md:h-full">
          <img
            src={leadershipPortraits[chairman.portrait]}
            alt={`${chairman.name}, ${chairman.title}`}
            className="absolute inset-0 h-full w-full object-cover object-[50%_12%] md:object-[72%_14%]"
          />
          <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(17,20,20,0.96)_0%,rgba(17,20,20,0.88)_26%,rgba(17,20,20,0.42)_48%,rgba(17,20,20,0.12)_66%,rgba(17,20,20,0.06)_100%)] md:block" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(17,20,20,0.2)_0%,rgba(17,20,20,0)_40%,rgba(17,20,20,0.55)_100%)] md:bg-[linear-gradient(180deg,rgba(17,20,20,0.18)_0%,rgba(17,20,20,0)_32%,rgba(17,20,20,0.55)_82%,rgba(17,20,20,0.9)_100%)]" />
        </div>

        <div className="relative mx-auto flex w-full max-w-[1500px] flex-col px-6 pb-12 pt-8 md:min-h-[88svh] md:justify-center md:px-12 md:pb-20 md:pt-[var(--site-header-h)] xl:px-[72px]">
          <div className="max-w-[520px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#e5d0aa]">
              {leadershipPage.eyebrow}
            </p>
            <p className="mt-5 font-display text-[1.15rem] font-semibold tracking-[-0.02em] text-white/70 md:text-[1.35rem]">
              {leadershipPage.brand}
            </p>
            <h1 className="mt-3 font-display text-[3rem] font-semibold leading-[0.94] tracking-[-0.035em] md:text-[4.6rem] xl:text-[5.4rem]">
              {leadershipPage.headline}
            </h1>
            <p className="mt-6 max-w-[420px] text-[0.95rem] leading-[1.6] text-white/72">
              {leadershipPage.summary}
            </p>
            <div className="mt-10 flex flex-wrap items-end gap-x-8 gap-y-3 border-t border-white/15 pt-6">
              <a href={`#${chairman.id}`} className="group">
                <p className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] transition-colors group-hover:text-[#e5d0aa] md:text-[1.35rem]">
                  {chairman.name}
                </p>
                <p className="mt-1 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.16em] text-[#e5d0aa]">
                  {chairman.shortTitle}
                </p>
              </a>
              <div className="hidden h-10 w-px bg-white/20 sm:block" />
              <a href={`#${coFounder.id}`} className="group">
                <p className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] transition-colors group-hover:text-[#e5d0aa] md:text-[1.35rem]">
                  {coFounder.name}
                </p>
                <p className="mt-1 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.16em] text-[#e5d0aa]">
                  {coFounder.shortTitle}
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[640px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              {leadershipPage.foundersLabel}
            </p>
            <h2 className="mt-4 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.4rem]">
              {leadershipPage.foundersLead}
            </h2>
            <p className="mt-5 max-w-[480px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              {leadershipPage.foundersSummary}
            </p>
          </div>

          <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
            {leadershipProfiles.map((person, index) => {
              const portrait = leadershipPortraits[person.portrait]
              const reverse = index % 2 === 1

              return (
                <article
                  key={person.id}
                  id={person.id}
                  className={`grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden bg-[#111414] lg:col-span-5">
                    <img
                      src={portrait}
                      alt={`${person.name}, ${person.title}`}
                      className={`h-full min-h-[420px] w-full object-cover md:min-h-[520px] ${
                        person.portrait === "kapeere-bonny"
                          ? "object-[center_12%] lg:object-[center_8%]"
                          : "object-[center_18%]"
                      }`}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(17,20,20,0.72))] p-6 md:p-8">
                      <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.18em] text-[#e5d0aa]">
                        {person.systemRole}
                      </p>
                      <p className="mt-2 max-w-[280px] text-[0.88rem] leading-[1.45] text-white/85">
                        {person.systemRoleLabel}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center lg:col-span-7 lg:px-4 xl:px-10">
                    <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#9a6d23]">
                      {String(index + 1).padStart(2, "0")} / {person.shortTitle}
                    </p>
                    <h3 className="mt-4 font-display text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.03em] md:text-[3.2rem]">
                      {person.name}
                    </h3>
                    <p className="mt-3 text-[0.95rem] font-medium text-[#2c2824]/70">{person.title}</p>
                    <p className="mt-6 max-w-[520px] text-[1.02rem] leading-[1.65] text-[#2c2824]">
                      {person.bio}
                    </p>
                    <p className="mt-5 max-w-[500px] text-[0.92rem] leading-[1.6] text-[#2c2824]/78">
                      {person.focus}
                    </p>

                    <div className="mt-10 border-t border-black/10 pt-6">
                      <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#15110f]/45">
                        Holds responsibility for
                      </p>
                      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                        {person.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="border-l-2 border-[#9a6d23]/55 pl-3 text-[0.88rem] leading-[1.45] text-[#2c2824]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <div className="max-w-[620px]">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#e5d0aa]">
              Operating model
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.1rem]">
              {leadershipPage.systemTitle}
            </h2>
            <p className="mt-5 text-[0.95rem] leading-[1.6] text-white/68">
              {leadershipPage.systemSummary}
            </p>
          </div>

          <ol className="mt-12 grid gap-0 border-t border-white/12 sm:grid-cols-2 lg:grid-cols-6">
            {leadershipFlow.map((step, index) => (
              <li
                key={step.id}
                className="border-b border-white/12 px-0 py-6 sm:border-r sm:px-5 lg:border-b-0 [&:nth-child(2n)]:sm:border-r-0 [&:nth-child(2n)]:lg:border-r [&:nth-child(6n)]:lg:border-r-0"
              >
                <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.16em] text-[#e5d0aa]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 font-display text-[1.35rem] font-semibold tracking-[-0.02em]">
                  {step.title}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-6 py-16 md:px-12 md:py-24 xl:px-[72px]">
          <h2 className="max-w-[540px] font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.1rem]">
            {leadershipPage.principlesTitle}
          </h2>
          <ul className="mt-12 divide-y divide-black/10 border-y border-black/10">
            {leadershipPrinciples.map((item, index) => (
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
                <p className="text-[0.92rem] leading-[1.55] text-[#2c2824]/80">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 py-16 md:flex-row md:items-end md:justify-between md:px-12 md:py-20 xl:px-[72px]">
          <h2 className="max-w-[520px] font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[3.2rem]">
            {leadershipPage.ctaTitle}
          </h2>
          <a
            href={leadershipPage.ctaHref}
            className="group inline-flex items-center gap-3 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#e5d0aa]"
          >
            {leadershipPage.ctaLabel}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  )
}
