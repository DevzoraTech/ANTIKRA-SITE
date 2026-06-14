import { ArrowUpRight } from "lucide-react"
import { insights } from "../data/content"
import antikraStudioBg from "../assets/antikra-studio-bg.webp"

export function Insights() {
  const [featured, ...readingList] = insights

  return (
    <section id="insights" className="section-padding bg-surface">
      <div className="container-wide">

        {/* — Masthead header — */}
        <div className="mb-12 border-b border-ink/8 pb-10">
          {/* Top bar: journal label + issue + open link */}
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 mb-8">
            <div className="flex items-center gap-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-ion">
                ANTIKRA Journal
              </p>
              <div className="h-px w-12 bg-ion/20" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted/50">
                Vol. I
              </p>
            </div>
            <a
              href="#"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/12 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Open journal
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <h2 className="max-w-3xl font-display text-[clamp(2rem,5vw,4rem)] font-semibold leading-[0.96] text-ink">
            Notes on building companies,
            <br className="hidden md:block" />
            {" "}systems, and intelligent products.
          </h2>
        </div>

        {/* — Main editorial grid — */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

          {/* Featured article */}
          <article className="group relative overflow-hidden rounded-[1.6rem] bg-night">
            <img
              src={antikraStudioBg}
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-night/92 via-night/30 to-transparent" />

            <div className="relative flex min-h-[340px] flex-col justify-end p-6 md:min-h-[460px] md:p-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 backdrop-blur-sm">
                  Featured
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-light/80">
                  {featured.date}
                </span>
              </div>
              <h3 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                {featured.title}
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/65 md:text-base">
                {featured.excerpt}
              </p>
              <a
                href="#"
                className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-light transition-colors hover:text-white"
              >
                Read article
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </article>

          {/* Right column */}
          <div className="flex flex-col gap-5">

            {/* Founder note */}
            <article className="overflow-hidden rounded-[1.6rem] border border-ion/12 bg-white p-6">
              <div className="grid gap-5 sm:grid-cols-[120px_1fr] sm:items-start">
                <img
                  src="/founder_ceo_suit_portrait.webp"
                  alt="Founder, ANTIKRA Group"
                  className="aspect-[4/5] w-full rounded-xl object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-ion">
                    Founder note
                  </p>
                  <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink">
                    We are building ANTIKRA as a company-maker, not a services catalog.
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    The journal documents how the group thinks about architecture,
                    brands, markets, product discipline, and the operating systems
                    behind new companies.
                  </p>
                </div>
              </div>
            </article>

            {/* Reading list */}
            <div className="flex-1 rounded-[1.6rem] border border-brand/10 bg-white p-6">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand">
                From the reading list
              </p>
              <div className="divide-y divide-black/5">
                {readingList.map((post, i) => (
                  <a
                    key={post.id}
                    href="#"
                    className="group flex items-start justify-between gap-4 py-5 first:pt-0 last:pb-0"
                  >
                    <div className="flex gap-3">
                      <span className="shrink-0 pt-1 font-display text-xs font-semibold text-muted/35">
                        {String(i + 2).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted/60">
                          {post.date}
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted/0 transition-colors group-hover:text-brand" />
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
