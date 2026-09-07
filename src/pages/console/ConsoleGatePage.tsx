import { consoleGate } from "../../domain/console"

export function ConsoleGatePage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-black/10 bg-[#111414] pt-[88px] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_35%,rgba(168,113,26,0.18),transparent_55%)]" />
        <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[820px] flex-col items-center justify-center px-8 py-20 text-center">
          <p className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-[#e5d0aa]">
            ANTIKRA Console
          </p>
          <h1 className="mt-8 font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.035em] md:text-[4.6rem]">
            {consoleGate.lead}
          </h1>
          <p className="mt-8 max-w-[480px] text-[1rem] leading-[1.65] text-white/75">
            {consoleGate.summary}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/company/contact"
              className="inline-flex h-11 items-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] transition-colors hover:bg-[#8f5f14]"
            >
              Request access
            </a>
            <button
              type="button"
              disabled
              className="inline-flex h-11 cursor-not-allowed items-center border border-white/25 px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white/35"
            >
              Sign in
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {consoleGate.uses.map((item) => (
              <li key={item.title} className="border-t border-black/12 pt-5">
                <h2 className="font-display text-[1.4rem] font-semibold">{item.title}</h2>
                <p className="mt-2 text-[0.88rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div className="max-w-[480px]">
            <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
              Need access?
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.55] text-white/70">
              Tell us who you are and what you’re working on with ANTIKRA.
            </p>
          </div>
          <a
            href="/company/contact"
            className="inline-flex h-11 w-fit items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] transition-colors hover:bg-[#8f5f14]"
          >
            Request access
          </a>
        </div>
      </section>
    </div>
  )
}
