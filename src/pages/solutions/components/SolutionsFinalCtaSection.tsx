import { ArrowRight } from "lucide-react"

export function SolutionsFinalCtaSection() {
  return (
    <section className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-7 px-8 py-12 md:grid-cols-[1.15fr_0.7fr_1.25fr] md:px-12 md:py-14 xl:px-[72px]">
        <h2 className="font-display text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.025em] text-[#15110f] md:text-[3rem]">
          Have a problem
          <br />
          that crosses teams?
        </h2>
        <p className="border-t border-black/14 pt-5 text-[0.74rem] leading-[1.6] text-[#151515]/62 md:border-l md:border-t-0 md:py-4 md:pl-10">
          That is usually where ANTIKRA is strongest — assembling the right
          specialists into one delivery system.
        </p>
        <div className="flex flex-wrap items-center gap-7 border-t border-black/14 pt-5 md:border-l md:border-t-0 md:py-4 md:pl-10">
          <a
            href="/company/contact"
            className="group inline-flex h-10 items-center justify-center gap-6 bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#7f5819]"
          >
            Start a conversation
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <span className="text-[0.7rem] text-[#151515]/50">or</span>
          <a
            href="#solution-areas"
            className="group inline-flex h-10 items-center justify-center gap-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-[#151515] transition-colors hover:text-[#9a6d23]"
          >
            Browse solutions
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
