import { ArrowUpRight } from "lucide-react"

const signals = [
  "Build",
  "Operate",
  "Secure",
  "Automate",
  "Launch",
]

export function SignalLayer() {
  return (
    <section className="relative overflow-hidden border-y border-ion/10 bg-ion-muted/45 px-5 py-7 md:px-10 lg:px-16">
      <div className="pointer-events-none absolute right-12 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-ion/15 blur-3xl" />
      <div className="container-wide relative z-10">
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1fr] lg:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ion">
              ANTIKRA signal layer
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold leading-tight text-ink md:text-3xl">
              One parent company.
              <span className="text-ion"> Many operating signals.</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            {signals.map((signal, index) => (
              <span
                key={signal}
                className={`rounded-full border px-4 py-2 text-sm font-semibold ${
                  index === 0
                    ? "border-ion bg-ion text-white shadow-[0_12px_30px_rgba(49,87,213,0.24)]"
                    : "border-ion/15 bg-white/75 text-ink"
                }`}
              >
                {signal}
              </span>
            ))}
            <a
              href="#services"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ion/20 bg-white text-ion transition-colors hover:bg-ion hover:text-white"
              aria-label="Explore ANTIKRA capabilities"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
