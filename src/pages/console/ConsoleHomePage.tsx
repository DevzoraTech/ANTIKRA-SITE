import { ArrowRight } from "lucide-react"
import type { ConsoleSession } from "../../domain/console"
import { getProjects } from "../../domain/console"

export function ConsoleHomePage({ session }: { session: ConsoleSession }) {
  const projects = getProjects()
  const attention = projects.flatMap((project) =>
    project.attention.map((item) => ({ projectId: project.id, projectName: project.name, item })),
  )
  const activity = projects
    .flatMap((project) => project.activity.map((item) => ({ ...item, projectName: project.name })))
    .slice(0, 6)
  const team = projects[0]?.team ?? []

  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 18 ? "Good afternoon" : "Good evening"

  return (
    <div className="mx-auto max-w-[1500px] px-5 py-10 md:px-8">
      <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.18em] text-[#9a6d23]">
        Your workspace
      </p>
      <h1 className="mt-3 font-display text-[2.6rem] font-semibold tracking-[-0.02em] md:text-[3.2rem]">
        {greeting}, {session.user.name}
      </h1>
      <p className="mt-2 text-[1.05rem] text-[#2c2824]">{session.org.name}</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="border border-black/10 bg-[#f8f2e9] p-6 md:p-8">
          <h2 className="font-display text-[1.5rem] font-semibold">Active work</h2>
          <ul className="mt-6 space-y-4">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={`/console/projects/${project.id}`}
                  className="group flex items-start justify-between gap-4 border-t border-black/10 pt-4"
                >
                  <div>
                    <p className="font-display text-[1.25rem] font-semibold group-hover:text-[#9a6d23]">
                      {project.name}
                    </p>
                    <p className="mt-1 text-[0.82rem] text-[#2c2824]">
                      {project.stage} · {project.status} · Next release {project.nextRelease}
                    </p>
                  </div>
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-[#9a6d23] transition-transform group-hover:translate-x-1" />
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-black/10 bg-[#111414] p-6 text-white md:p-8">
          <h2 className="font-display text-[1.5rem] font-semibold">Needs your attention</h2>
          <ul className="mt-6 space-y-4">
            {attention.map((item) => (
              <li key={`${item.projectId}-${item.item}`} className="border-t border-white/10 pt-4">
                <p className="text-[0.9rem]">{item.item}</p>
                <a
                  href={`/console/projects/${item.projectId}`}
                  className="mt-1 inline-block text-[0.75rem] text-[#e5d0aa] hover:underline"
                >
                  {item.projectName}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <section className="border border-black/10 bg-[#f8f2e9] p-6 md:p-8">
          <h2 className="font-display text-[1.5rem] font-semibold">Recent activity</h2>
          <ul className="mt-6 space-y-3">
            {activity.map((item) => (
              <li key={item.id} className="border-t border-black/10 pt-3">
                <p className="text-[0.9rem]">{item.text}</p>
                <p className="mt-1 text-[0.72rem] text-[#15110f]/45">
                  {item.projectName} · {item.at}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border border-black/10 bg-[#f8f2e9] p-6 md:p-8">
          <h2 className="font-display text-[1.5rem] font-semibold">Your ANTIKRA team</h2>
          <ul className="mt-6 space-y-3">
            {team.map((member) => (
              <li key={member.id} className="border-t border-black/10 pt-3">
                <p className="font-display text-[1.15rem] font-semibold">{member.name}</p>
                <p className="text-[0.8rem] text-[#2c2824]">
                  {member.role} · {member.company}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
