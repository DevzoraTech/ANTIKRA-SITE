import { ArrowRight } from "lucide-react"
import type { ResearchPublication } from "../../domain/research"
import { researchPublications } from "../../domain/research"

export function ResearchDetailPage({ publication }: { publication: ResearchPublication }) {
  const related = researchPublications.filter((item) => item.id !== publication.id).slice(0, 3)
  const paragraphs =
    publication.body ??
    [
      publication.summary,
      "ANTIKRA Research studies the technologies, systems and operating environments behind the products and companies we build.",
      "For collaboration or related materials, contact research@antikra.com.",
    ]

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <article className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto max-w-[820px] px-8 py-16 md:px-12">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            ANTIKRA / Research
          </p>
          <h1 className="mt-6 font-display text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[3.4rem]">
            {publication.title}
          </h1>
          <p className="mt-4 text-[0.84rem] text-[#2c2824]">
            {publication.date} · {publication.readTime}
            {publication.pages ? ` · ${publication.pages}` : ""}
          </p>
          <p className="mt-8 text-[1.05rem] leading-[1.65] text-[#2c2824]">{publication.summary}</p>
          <div className="mt-10 space-y-6 border-t border-black/10 pt-10">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 24)} className="text-[0.95rem] leading-[1.7] text-[#2c2824]">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href="/research"
            className="mt-12 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]"
          >
            Back to research
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </article>

      <section className="bg-[#f4eee5]">
        <div className="mx-auto max-w-[1500px] px-8 py-14 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[1.8rem] font-semibold">More publications</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.id} className="border-t border-black/12 pt-4">
                <a href={`/research/${item.slug}`} className="group block">
                  <h3 className="font-display text-[1.25rem] font-semibold group-hover:text-[#9a6d23]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.84rem] text-[#2c2824]">{item.readTime}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
