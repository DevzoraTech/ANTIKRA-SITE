import { ArrowRight } from "lucide-react"
import productAtmosphere from "../../../assets/home/product-img.png"

export function ProductsHeroSection() {
  return (
    <section className="relative isolate min-h-[608px] overflow-hidden border-b border-black/10 bg-[#f8f2e9] pt-[88px] md:min-h-[640px]">
      <img
        src={productAtmosphere}
        alt="ANTIKRA products in real operating environments"
        className="absolute inset-x-0 top-[88px] -z-20 h-[calc(100%-88px)] w-full object-cover object-[55%_42%]"
      />
      <div className="absolute inset-x-0 bottom-0 top-[88px] -z-10 hidden bg-[linear-gradient(90deg,#f8f2e9_0%,rgba(248,242,233,0.97)_22%,rgba(248,242,233,0.7)_36%,rgba(248,242,233,0.28)_52%,rgba(248,242,233,0)_72%)] md:block" />
      <div className="absolute inset-x-0 bottom-0 top-[88px] -z-10 bg-[linear-gradient(180deg,rgba(248,242,233,0.55)_0%,rgba(248,242,233,0.88)_48%,#f8f2e9_100%)] md:hidden" />

      <div className="mx-auto flex min-h-[520px] w-full max-w-[1500px] items-center px-8 py-14 md:min-h-[552px] md:px-12 xl:px-[72px]">
        <div className="w-full max-w-[560px]">
          <p className="font-display-sans text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-[#a1742e]">
            ANTIKRA&nbsp;&nbsp;•&nbsp;&nbsp;Products
          </p>
          <h1 className="mt-5 font-display text-[3.5rem] font-semibold leading-[0.94] tracking-[-0.035em] text-[#16110f] md:text-[4.5rem] xl:text-[5.2rem]">
            Technology we
            <br />
            build, own and
            <br />
            <span className="text-[#9f742f]">operate.</span>
          </h1>
          <div className="mt-6 h-px w-9 bg-[#9f742f]" />
          <p className="mt-5 max-w-[420px] text-[0.9rem] leading-[1.58] text-[#1d1d1d]/70 md:text-[0.95rem]">
            ANTIKRA products turn engineering, infrastructure, intelligence,
            security and design into systems used inside real operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#portfolio"
              className="group inline-flex h-10 items-center justify-center gap-5 bg-[#9a6d23] px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white transition-colors hover:bg-[#7f5819]"
            >
              Explore the portfolio
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.7} />
            </a>
            <a
              href="/products/rembeh"
              className="group inline-flex h-10 items-center justify-center gap-5 border border-black/25 bg-[#fbf8f1]/90 px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-[#151515] transition-colors hover:border-[#9a6d23] hover:text-[#9a6d23]"
            >
              Start with Rembeh
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" strokeWidth={1.7} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
