import { solutionAreaById, solutionAssemblies } from "../../../domain/solutions"

export function SolutionAssembliesSection() {
  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="max-w-[560px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            03 / Assembled solutions
          </p>
          <h2 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.7rem]">
            Built around the problem — not a single service line.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {solutionAssemblies.map((assembly, index) => (
            <article
              key={assembly.id}
              className="border border-black/10 bg-[#fbf8f1] p-7 md:p-8"
            >
              <p className="font-display text-[1.35rem] font-semibold text-[#9a6d23]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-[1.45rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[#15110f]">
                {assembly.title}
              </h3>
              <p className="mt-4 text-[0.82rem] leading-[1.55] text-[#161616]/62">
                {assembly.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 border-t border-black/10 pt-5">
                {assembly.areas.map((areaId) => {
                  const area = solutionAreaById[areaId]
                  return (
                    <span
                      key={areaId}
                      className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#9a6d23]"
                    >
                      {area.title}
                    </span>
                  )
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
