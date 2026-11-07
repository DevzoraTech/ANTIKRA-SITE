import { ArrowRight, MapPin } from "lucide-react"
import heroImg from "../../../assets/home/hero.jpg"

export function HomeHeroSection() {
  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#f8f2e9]">
      {/* Mobile: dedicated image band. Desktop: full-bleed under the copy. */}
      <div className="relative mt-[var(--site-header-h)] h-[min(38vh,300px)] w-full md:absolute md:inset-0 md:mt-0 md:h-full">
        <img
          src={heroImg}
          alt="ANTIKRA engineers monitoring production systems on the plant floor"
          className="home-hero-image absolute inset-0 h-full w-full object-cover object-[50%_34%] md:object-[60%_48%]"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-[linear-gradient(90deg,#f8f2e9_0%,rgba(248,242,233,0.97)_18%,rgba(248,242,233,0.55)_30%,rgba(248,242,233,0.12)_42%,rgba(248,242,233,0)_54%)] md:block" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1500px] flex-col px-6 pb-9 pt-6 md:min-h-[740px] md:justify-center md:px-12 md:pb-14 md:pt-[var(--site-header-h)] xl:px-[72px]">
        <div className="home-hero-copy w-full max-w-[480px]">
          <p className="font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.2em] text-[#a1742e]">
            Global Technology Group&nbsp;&nbsp;•&nbsp;&nbsp;Kampala
          </p>
          <h1 className="mt-4 font-display text-[3.15rem] font-semibold leading-[0.92] tracking-[-0.035em] text-[#16110f] sm:text-[3.6rem] md:mt-5 md:text-[5.35rem] xl:text-[6.3rem]">
            Technology,
            <br />
            built as a
            <br />
            <span className="text-[#9f742f]">system.</span>
          </h1>
          <div className="mt-5 h-px w-9 origin-left bg-[#9f742f] md:mt-6" />
          <p className="mt-4 max-w-[390px] text-[0.92rem] leading-[1.55] text-[#1d1d1d]/78 md:mt-5 md:text-[0.95rem]">
            We design, engineer and operate digital products, technology
            infrastructure and companies built for complex environments.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-7">
            <a
              href="/products"
              className="home-hero-cta-primary inline-flex h-10 items-center justify-center gap-5 bg-[#9a6d23] px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_32px_rgba(61,42,15,0.18)] transition-colors hover:bg-[#7f5819]"
            >
              Explore what we build
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </a>
            <a
              href="/company/contact"
              className="home-hero-cta-secondary inline-flex h-10 items-center justify-center gap-5 border border-black/25 bg-[#fbf8f1] px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-[#151515] transition-colors hover:border-[#9a6d23] hover:text-[#9a6d23]"
            >
              Work with ANTIKRA
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.7} />
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-display-sans text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#1e1e1e]/55 md:mt-7 md:gap-4">
            <span className="flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-[#9a6d23]" strokeWidth={1.8} />
              Kampala, Uganda
            </span>
            <span className="hidden h-3 w-px bg-black/25 sm:block" />
            <span className="hidden normal-case tracking-[0.02em] sm:inline">
              Global reach. Operations including Kampala, Uganda.
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
