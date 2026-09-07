import { ArrowRight } from "lucide-react"
import { solutionAreas } from "../../../domain/solutions"
import travelImg from "../../../assets/home/travel-img.png"

export function SolutionNextSection() {
  const next = solutionAreas[0]

  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#111414] text-white">
      <img
        src={travelImg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#111414_0%,rgba(17,20,20,0.94)_45%,rgba(17,20,20,0.75)_100%)]" />

      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-8 py-14 md:grid-cols-[1.15fr_0.85fr] md:px-12 md:py-16 xl:px-[72px]">
        <div>
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
            07 / What's next
          </p>
          <h2 className="mt-5 max-w-[480px] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] md:text-[3rem]">
            Build what's next.
          </h2>
          <p className="mt-5 max-w-[400px] text-[0.88rem] leading-[1.58] text-white/62">
            Bring a difficult operational problem. We will assemble the right
            ANTIKRA combination to solve it.
          </p>
          <a
            href="/company/contact"
            className="group mt-8 inline-flex h-10 items-center gap-5 bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#7f5819]"
          >
            Discuss a challenge
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        <a
          href={next.href}
          className="group flex flex-col justify-end border-t border-white/14 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0"
        >
          <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#a97b32]">
            Start with · {next.number} / {next.total}
          </p>
          <p className="mt-3 font-display text-[2rem] font-semibold leading-[1.05] tracking-[-0.02em]">
            {next.title}
          </p>
          <p className="mt-3 max-w-[320px] text-[0.82rem] leading-[1.5] text-white/55">
            {next.discipline}
          </p>
          <span className="mt-6 inline-flex items-center gap-4 text-[0.76rem] font-semibold text-[#a97b32]">
            Explore solution
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </a>
      </div>
    </section>
  )
}
