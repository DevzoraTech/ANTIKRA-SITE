import { useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  careersTeams,
  careersValues,
  careersWhy,
  careersWorkFlow,
  hiringProcess,
  openRoles,
} from "../../domain/company"
import { siteImages } from "../../shared/assets/images"

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

export function CareersPage() {
  const [teamFilter, setTeamFilter] = useState("All")
  const teams = ["All", ...Array.from(new Set(openRoles.map((r) => r.team)))]
  const roles =
    teamFilter === "All" ? openRoles : openRoles.filter((r) => r.team === teamFilter)

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate overflow-hidden border-b border-black/10 pt-[88px]">
        <img
          src={siteImages.studio}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f8f2e9_0%,rgba(248,242,233,0.94)_42%,rgba(248,242,233,0.55)_70%,rgba(248,242,233,0.2)_100%)]" />
        <div className="mx-auto max-w-[1500px] px-8 py-20 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            ANTIKRA / Company / Careers
          </p>
          <h1 className="mt-6 max-w-[640px] font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[4.4rem]">
            Build things that matter.
          </h1>
          <p className="mt-6 max-w-[460px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
            Join a team building products, infrastructure and technology companies
            around real problems—where work moves from ideas into systems people use.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#roles"
              className="inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819]"
            >
              View open roles
            </a>
            <a
              href="#why"
              className="inline-flex h-11 items-center border border-black/20 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
            >
              Life at ANTIKRA
            </a>
          </div>
        </div>
      </section>

      <section id="why" className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Why ANTIKRA
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {careersWhy.map((item) => (
              <li key={item.id} className="border-t border-black/12 pt-5">
                <h3 className="font-display text-[1.25rem] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Where you can work
          </h2>
          <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careersTeams.map((team) => (
              <li key={team.id} className="border-t border-black/10 pt-5">
                <p className={`font-display text-[1.4rem] font-semibold ${accentText[team.accent]}`}>
                  {team.name}
                </p>
                <p className="mt-1 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#15110f]/45">
                  {team.discipline}
                </p>
                <p className="mt-3 text-[0.86rem] leading-[1.5] text-[#2c2824]">{team.description}</p>
                <a
                  href={team.href}
                  className="mt-4 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]"
                >
                  Explore team
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            How we work
          </h2>
          <ol className="mt-10 flex gap-2 overflow-x-auto pb-2">
            {careersWorkFlow.map((step, index) => (
              <li key={step.id} className="min-w-[120px] flex-1 border-t-2 border-[#a8711a] pt-4">
                <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#e5d0aa]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 font-display text-[1.05rem] font-semibold">{step.title}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {careersValues.map((value) => (
              <li key={value.id} className="border-t border-white/15 pt-4">
                <h3 className="font-display text-[1.2rem] font-semibold">{value.title}</h3>
                <p className="mt-2 text-[0.84rem] text-white/60">{value.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="roles" className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
              Open roles
            </h2>
            <div className="flex flex-wrap gap-2">
              {teams.map((team) => (
                <button
                  key={team}
                  type="button"
                  onClick={() => setTeamFilter(team)}
                  className={`h-9 px-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] transition-colors ${
                    teamFilter === team
                      ? "bg-[#9a6d23] text-white"
                      : "border border-black/15 text-[#16110f] hover:border-[#9a6d23]/50"
                  }`}
                >
                  {team}
                </button>
              ))}
            </div>
          </div>

          {roles.length > 0 ? (
            <ul className="mt-10 divide-y divide-black/10 border-t border-black/10">
              {roles.map((role) => (
                <li key={role.id}>
                  <a
                    href={role.href}
                    className="group flex flex-wrap items-center justify-between gap-4 py-6"
                  >
                    <div>
                      <p className="font-display text-[1.45rem] font-semibold">{role.title}</p>
                      <p className="mt-1 text-[0.84rem] text-[#2c2824]">
                        {role.team} · {role.location} · {role.type}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
                      Apply
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-10 border border-black/10 bg-[#f4eee5] p-8">
              <p className="font-display text-[1.4rem] font-semibold">No open roles right now</p>
              <p className="mt-2 text-[0.9rem] text-[#2c2824]">
                Introduce yourself—we keep strong people in mind.
              </p>
              <a
                href="/company/contact"
                className="mt-6 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]"
              >
                Introduce yourself
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          )}

          <div className="mt-12 grid gap-8 border-t border-black/10 pt-10 md:grid-cols-2">
            <div>
              <h3 className="font-display text-[1.5rem] font-semibold">Early careers</h3>
              <ul className="mt-4 space-y-2 text-[0.9rem] text-[#2c2824]">
                <li>Internships</li>
                <li>Graduate opportunities</li>
                <li>Research placements</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[1.5rem] font-semibold">Beyond employment</h3>
              <ul className="mt-4 space-y-2 text-[0.9rem] text-[#2c2824]">
                <li>Researchers</li>
                <li>Independent specialists</li>
                <li>Students & graduates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Our hiring process
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {hiringProcess.map((step) => (
              <li key={step.id} className="border-t border-black/12 pt-5">
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                  {step.number}
                </p>
                <p className="mt-3 font-display text-[1.15rem] font-semibold">{step.title}</p>
                <p className="mt-2 text-[0.82rem] leading-[1.45] text-[#2c2824]">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div className="max-w-[520px]">
            <h2 className="font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em]">
              Your best work should solve something real.
            </h2>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#roles"
              className="inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
            >
              Explore open roles
            </a>
            <a
              href="/company/contact"
              className="inline-flex h-11 items-center font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#e5d0aa] underline-offset-4 hover:underline"
            >
              Contact ANTIKRA
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
