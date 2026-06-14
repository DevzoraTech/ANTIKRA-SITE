import { ArrowUpRight } from "lucide-react"
import { insights } from "../data/content"
import antikraStudioBg from "../assets/antikra-studio-bg.webp"
import ecosystemIntelligence from "../assets/ecosystem-intelligence.webp"

export function Insights() {
  const [featured, ...readingList] = insights

  return (
    <section
      id="insights"
      className="relative overflow-hidden bg-white px-5 py-20 md:px-10 md:py-28 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(90deg,transparent,rgba(237,241,255,0.58))]" />
      <div className="container-wide relative z-10">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ion">
              ANTIKRA Journal
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[clamp(2.25rem,5vw,4.15rem)] font-semibold leading-[0.98] text-ink">
              Notes on building companies, systems, and intelligent products.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-ion/20 bg-ion px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-ink"
          >
            Open journal
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <article className="group overflow-hidden rounded-[1.6rem] border border-brand/15 bg-surface shadow-sm">
            <div className="relative h-72 overflow-hidden md:h-[420px]">
              <img
                src={antikraStudioBg}
                alt=""
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-light">
                  Featured / {featured.date}
                </p>
                <h3 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/76 md:text-base">
                  {featured.excerpt}
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-6">
            <article className="overflow-hidden rounded-[1.6rem] border border-ion/15 bg-ion-muted/55 p-6">
              <div className="grid gap-5 sm:grid-cols-[150px_1fr] sm:items-center">
                <img
                  src="/founder_ceo_suit_portrait.webp"
                  alt="Founder portrait"
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ion">
                    Founder note
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink">
                    We are building ANTIKRA as a company-maker, not a services catalog.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    The journal will document how the group thinks about
                    architecture, brands, markets, product discipline, and the
                    operating systems behind new companies.
                  </p>
                </div>
              </div>
            </article>

            <div className="rounded-[1.6rem] border border-brand/10 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                  Reading list
                </p>
                <img
                  src={ecosystemIntelligence}
                  alt=""
                  className="h-14 w-20 rounded-xl object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="mt-5 divide-y divide-black/5">
                {readingList.map((post) => (
                  <a
                    key={post.id}
                    href="#"
                    className="group flex items-start justify-between gap-4 py-4 first:pt-0 last:pb-0"
                  >
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                        {post.date}
                      </p>
                      <h3 className="mt-2 font-display text-xl font-semibold leading-tight text-ink group-hover:text-brand">
                        {post.title}
                      </h3>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-brand" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
