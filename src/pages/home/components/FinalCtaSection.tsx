import { ArrowRight } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto grid w-full max-w-[1500px] items-center gap-7 px-8 py-12 md:grid-cols-[1fr_0.65fr_1.4fr] md:px-12 md:py-14 xl:px-[72px]">
        <h2 className="font-display text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.025em] text-[#15110f] md:text-[3.1rem]">
          Have something
          <br />
          difficult to build?
        </h2>
        <p className="border-t border-black/14 pt-5 text-[0.74rem] leading-[1.6] text-[#151515]/62 md:border-l md:border-t-0 md:py-4 md:pl-10">
          Let's build technology that solves real problems and creates lasting
          impact.
        </p>
        <div className="flex flex-wrap items-center gap-7 border-t border-black/14 pt-5 md:border-l md:border-t-0 md:py-4 md:pl-10">
          <a
            href="/company/contact"
            className="group inline-flex h-10 items-center justify-center gap-6 bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#7f5819]"
          >
            Start a project
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
          </a>
          <span className="text-[0.7rem] text-[#151515]/50">or</span>
          <a
            href="/companies"
            className="group inline-flex h-10 items-center justify-center gap-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-[#151515] transition-colors hover:text-[#9a6d23]"
          >
            Explore ANTIKRA
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
