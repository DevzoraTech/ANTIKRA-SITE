import { ArrowRight } from "lucide-react"

export function NotFoundPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto flex min-h-[70vh] max-w-[900px] flex-col justify-center px-8 py-20 md:px-12">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            Error 404
          </p>
          <h1 className="mt-6 font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.03em] md:text-[4.6rem]">
            This page isn’t in the system.
          </h1>
          <p className="mt-6 max-w-[460px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
            The address may have moved, or it never existed. Continue from one of
            the primary surfaces below.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/"
              className="inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819]"
            >
              Back to home
            </a>
            <a
              href="/company/contact"
              className="group inline-flex h-11 items-center gap-3 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em]"
            >
              Start a conversation
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <ul className="mt-14 grid gap-4 border-t border-black/10 pt-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Companies", "/companies"],
              ["Products", "/products"],
              ["Solutions", "/solutions"],
              ["Work", "/work"],
              ["Research", "/research"],
              ["Company", "/company"],
            ].map(([label, href]) => (
              <li key={href}>
                <a href={href} className="font-display text-[1.25rem] font-semibold text-[#16110f] hover:text-[#9a6d23]">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
