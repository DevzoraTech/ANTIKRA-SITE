import { ArrowRight } from "lucide-react"
import productImg from "../../../assets/home/product-img.png"

export function CompaniesResearchSection() {
  return (
    <section className="grid border-b border-black/10 lg:grid-cols-2">
      <article className="group relative isolate min-h-[300px] overflow-hidden bg-[#111] md:min-h-[380px]">
        <img
          src={productImg}
          alt="ANTIKRA company environment"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[45%_50%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(12,12,12,0.86)_0%,rgba(12,12,12,0.58)_48%,rgba(12,12,12,0.12)_100%)]" />
        <div className="flex min-h-[300px] max-w-[430px] flex-col justify-between p-8 text-white md:min-h-[380px] md:p-12 xl:p-[72px] xl:py-14">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
              06 / Companies
            </p>
            <h2 className="mt-5 font-display text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.025em] md:text-[2.7rem]">
              Technology can become a product. Sometimes, it becomes an entire
              company.
            </h2>
          </div>
          <a
            href="/companies"
            className="mt-8 inline-flex items-center gap-5 text-[0.74rem] font-semibold text-white/90 transition-colors hover:text-[#a97b32]"
          >
            Explore ANTIKRA companies
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
          </a>
        </div>
      </article>

      <article className="relative isolate flex min-h-[300px] overflow-hidden bg-[#f7f1e8] p-8 md:min-h-[380px] md:p-12 xl:p-[72px] xl:py-14">
        <div className="relative z-10 flex max-w-[410px] flex-col justify-between">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              07 / Research & insights
            </p>
            <h2 className="mt-5 font-display text-[2.45rem] font-semibold leading-[1.03] tracking-[-0.025em] text-[#15110f] md:text-[3rem]">
              Research before assumption.
            </h2>
            <p className="mt-5 max-w-[375px] text-[0.86rem] leading-[1.6] text-[#161616]/66">
              We study the systems, markets and technologies behind the products
              and infrastructure we build.
            </p>

            <a
              href="/research/systems-under-constraint"
              className="mt-8 block border-t border-black/12 pt-5 transition-colors hover:border-[#9a6d23]/50"
            >
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                Latest · Research 001
              </p>
              <p className="mt-2 font-display text-[1.35rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[#15110f]">
                Systems under constraint
              </p>
              <p className="mt-2 max-w-[320px] text-[0.78rem] leading-[1.5] text-[#161616]/58">
                Notes on building technology for markets where complexity,
                intermittence and real operations are the default.
              </p>
              <span className="mt-4 inline-flex items-center gap-4 text-[0.74rem] font-semibold text-[#151515]">
                Read the note
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 hidden h-[220px] w-[150px] rotate-[7deg] bg-[#111716] p-5 shadow-[0_30px_65px_rgba(0,0,0,0.22)] transition-transform duration-500 hover:rotate-[3deg] md:block">
          <div className="border-t border-[#a97b32] pt-5">
            <p className="font-display text-[1rem] uppercase tracking-[0.16em] text-[#e5d0aa]">
              ANTIKRA
            </p>
            <p className="mt-2 font-display text-[1.45rem] leading-[1.04] text-[#e5d0aa]">
              Research
              <br />
              001
            </p>
          </div>
          <p className="absolute bottom-5 left-5 text-[0.56rem] leading-[1.45] text-white/50">
            Systems.
            <br />
            Markets.
            <br />
            Infrastructure.
            <br />
            Technology.
          </p>
        </div>
      </article>
    </section>
  )
}
