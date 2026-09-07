import { useMemo, useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  openResearchItems,
  researchDomains,
  researchImpactMaps,
  researchPublications,
} from "../../domain/research"
import { siteImages } from "../../shared/assets/images"

const typeLabels: Record<string, string> = {
  All: "All",
  report: "Reports",
  paper: "Technical papers",
  insight: "Insights",
  "field-note": "Field notes",
  dataset: "Datasets",
}

export function ResearchPage() {
  const featured = researchPublications.find((p) => p.featured) ?? researchPublications[0]
  const [typeFilter, setTypeFilter] = useState("All")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    return researchPublications.filter((item) => {
      const typeOk = typeFilter === "All" || item.type === typeFilter
      const q = query.trim().toLowerCase()
      const queryOk =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q)
      return typeOk && queryOk
    })
  }, [typeFilter, query])

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[580px] lg:grid-cols-[0.95fr_1.05fr]">
          <div className="flex flex-col justify-center bg-[#f8f2e9] px-8 py-16 md:px-12 xl:px-16">
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
              ANTIKRA · Research
            </p>
            <h1 className="mt-6 max-w-[520px] font-display text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#16110f] md:text-[3.9rem]">
              Understanding what comes next.
            </h1>
            <p className="mt-6 max-w-[420px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              ANTIKRA Research investigates the technologies, systems and operating
              environments shaping the products and companies of tomorrow.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#domains"
                className="inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819]"
              >
                Explore research
              </a>
              <a
                href={`/research/${featured.slug}`}
                className="group inline-flex h-11 items-center gap-3 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em]"
              >
                View latest publication
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-full">
            <img
              src={siteImages.venture}
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-[48%_40%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-[#111414]/92 px-8 py-7 md:px-10">
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.18em] text-[#e5d0aa]">
                Domains
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
                {[
                  "AI & Data",
                  "Infrastructure",
                  "Financial Systems",
                  "Mobility",
                  "Security & Trust",
                  "Human–Technology",
                ].map((label) => (
                  <li key={label} className="font-display text-[1.05rem] font-semibold text-white">
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="domains" className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Research domains
          </h2>
          <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {researchDomains.map((domain) => (
              <li key={domain.id} className="border-t border-black/12 pt-5">
                <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                  {domain.number}
                </p>
                <h3 className="mt-3 font-display text-[1.35rem] font-semibold">{domain.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">{domain.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:px-12 lg:grid-cols-2 xl:px-[72px]">
          <article className="border border-black/10 bg-[#111414] p-8 text-white md:p-10">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-[#e5d0aa]">
              Featured research
            </p>
            <h2 className="mt-6 font-display text-[2rem] font-semibold leading-[1.1]">
              {featured.title}
            </h2>
            <p className="mt-4 text-[0.9rem] leading-[1.55] text-white/70">{featured.summary}</p>
            <p className="mt-6 text-[0.8rem] text-white/45">
              {[featured.pages, featured.readTime].filter(Boolean).join(" · ")}
            </p>
            <a
              href={`/research/${featured.slug}`}
              className="mt-8 inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
            >
              Read research
            </a>
          </article>

          <div>
            <h2 className="font-display text-[2rem] font-semibold tracking-[-0.02em]">
              Latest publications
            </h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {Object.entries(typeLabels).map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setTypeFilter(key)}
                  className={`h-9 px-3 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] ${
                    typeFilter === key
                      ? "bg-[#9a6d23] text-white"
                      : "border border-black/15 hover:border-[#9a6d23]/40"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {researchPublications.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <a href={`/research/${item.slug}`} className="group block py-5">
                    <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                      {typeLabels[item.type]} · {item.date}
                    </p>
                    <p className="mt-2 font-display text-[1.25rem] font-semibold group-hover:text-[#9a6d23]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[0.8rem] text-[#2c2824]">{item.readTime}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-8 py-16 md:px-12 lg:grid-cols-2 xl:px-[72px]">
          <div>
            <h2 className="font-display text-[2.2rem] font-semibold tracking-[-0.02em]">
              Research informing ANTIKRA
            </h2>
            <ul className="mt-8 space-y-5">
              {researchImpactMaps.map((item) => (
                <li key={item.target} className="border-t border-black/12 pt-4">
                  <p className="text-[0.84rem] text-[#2c2824]">{item.domainTitle}</p>
                  <a
                    href={item.targetHref}
                    className="mt-1 inline-flex items-center gap-2 font-display text-[1.35rem] font-semibold text-[#9a6d23]"
                  >
                    {item.target}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                  <p className="mt-1 text-[0.8rem] text-[#2c2824]">{item.note}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-[2.2rem] font-semibold tracking-[-0.02em]">
              Research library
            </h2>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search publications"
              className="mt-6 h-11 w-full border border-black/15 bg-white px-4 text-[0.9rem] outline-none focus:border-[#9a6d23]"
            />
            <ul className="mt-6 divide-y divide-black/10 border-t border-black/10">
              {filtered.map((item) => (
                <li key={item.id}>
                  <a href={`/research/${item.slug}`} className="block py-4">
                    <p className="font-display text-[1.15rem] font-semibold">{item.title}</p>
                    <p className="mt-1 text-[0.8rem] text-[#2c2824]">
                      {typeLabels[item.type]} · {item.readTime}
                    </p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            Open research
          </h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {openResearchItems.map((item) => (
              <li key={item.id} className="border-t border-black/12 pt-5">
                <h3 className="font-display text-[1.25rem] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <div className="max-w-[520px]">
            <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
              Research collaboration
            </h2>
            <p className="mt-4 text-[0.92rem] leading-[1.55] text-white/70">
              Universities, institutions and researchers can collaborate with ANTIKRA
              on studies, datasets and applied investigations.
            </p>
          </div>
          <a
            href="/company/contact"
            className="inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
          >
            Discuss collaboration
          </a>
        </div>
      </section>
    </div>
  )
}
