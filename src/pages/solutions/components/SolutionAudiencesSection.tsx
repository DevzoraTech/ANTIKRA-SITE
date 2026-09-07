import { solutionAudiences } from "../../../domain/solutions"

export function SolutionAudiencesSection() {
  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="max-w-[520px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            05 / Who we build for
          </p>
          <h2 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.7rem]">
            Organizations operating in complex environments.
          </h2>
        </div>

        <div className="mt-10 grid border-t border-black/10 md:grid-cols-5">
          {solutionAudiences.map((audience, index) => (
            <div
              key={audience.id}
              className={`group py-7 md:px-5 ${
                index === 0
                  ? "md:pl-0"
                  : "border-t border-black/10 md:border-l md:border-t-0"
              }`}
            >
              <h3 className="font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                {audience.title.replace(/&$/, "").trim()}
              </h3>
              <div className="mt-3 h-px w-6 origin-left bg-[#9a6d23]/70 transition-transform duration-300 group-hover:scale-x-150" />
              <p className="mt-3 max-w-[180px] text-[0.72rem] leading-[1.45] text-[#161616]/55">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
