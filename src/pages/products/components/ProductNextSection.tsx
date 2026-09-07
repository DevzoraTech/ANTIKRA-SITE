import { ArrowRight } from "lucide-react"
import travelImg from "../../../assets/home/travel-img.png"

export function ProductNextSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#111414] text-white">
      <img
        src={travelImg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#111414_0%,rgba(17,20,20,0.94)_42%,rgba(17,20,20,0.72)_100%)]" />

      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-16 xl:px-[72px]">
        <div>
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
            05 / What's next
          </p>
          <h2 className="mt-5 max-w-[480px] font-display text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] md:text-[3rem]">
            More products will come from the same system.
          </h2>
          <p className="mt-5 max-w-[400px] text-[0.88rem] leading-[1.58] text-white/62">
            Olympia continuously evaluates opportunities for new ANTIKRA
            products — always measured against real operational need.
          </p>
        </div>

        <div className="flex flex-col justify-end gap-4 border-t border-white/14 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
          <a
            href="/products/rembeh"
            className="group flex items-center justify-between gap-6 border-b border-white/12 pb-4 transition-colors hover:border-[#a97b32]/50"
          >
            <div>
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#a97b32]">
                01 / Financial Technology
              </p>
              <p className="mt-2 font-display text-[1.7rem] font-semibold uppercase tracking-[0.04em] text-[#0d6b47]">
                Rembeh
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-white/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#a97b32]" />
          </a>
          <a
            href="/products/carmie"
            className="group flex items-center justify-between gap-6 border-b border-white/12 pb-4 transition-colors hover:border-[#a97b32]/50"
          >
            <div>
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#a97b32]">
                02 / Automotive Technology
              </p>
              <p className="mt-2 font-display text-[1.7rem] font-semibold uppercase tracking-[0.04em] text-[#6ea0d4]">
                Carmie
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-white/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#a97b32]" />
          </a>
          <a
            href="/company/contact"
            className="group mt-2 inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#a97b32]"
          >
            Talk about a product opportunity
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
