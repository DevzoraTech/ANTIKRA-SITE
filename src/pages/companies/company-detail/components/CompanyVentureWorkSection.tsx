import type { CompanyPageContent, CompanyVentureItem } from "../../../../domain/antikra"
import { InlineArrowLink, SectionKicker, WorkVisual, accentStyles } from "./CompanyDetailPrimitives"

function VentureCard({ item }: { item: CompanyVentureItem }) {
  const hasImageLead = item.id !== "pipeline"

  return (
    <article className={`min-h-[330px] overflow-hidden border border-black/12 bg-white ${hasImageLead ? "grid md:grid-cols-[0.9fr_1fr]" : ""}`}>
      {hasImageLead && <WorkVisual visual={item.visual} />}
      <div className="flex flex-col p-7">
        <p className={`font-display text-[2rem] uppercase leading-none ${accentStyles[item.accent].text}`}>
          {item.name}
        </p>
        <p className="mt-2 text-sm font-semibold text-ink">{item.category}</p>
        <p className="mt-5 text-sm leading-relaxed text-ink/72">{item.description}</p>

        {item.details && (
          <dl className="mt-5 grid gap-3">
            {item.details.map((detail) => (
              <div key={detail.label}>
                <dt className="font-display-sans text-[0.58rem] font-bold uppercase tracking-[0.22em] text-ink/48">
                  {detail.label}
                </dt>
                <dd className="mt-1 text-xs font-medium text-ink/78">{detail.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {item.builtWith && (
          <p className="mt-5 font-display-sans text-[0.62rem] font-bold uppercase tracking-[0.16em] text-ink/62">
            Built with{" "}
            <span className={accentStyles[item.accent].text}>{item.builtWith.join(" + ")}</span>
          </p>
        )}

        {item.bullets && (
          <ul className="mt-5 space-y-2">
            {item.bullets.map((bullet) => (
              <li key={bullet} className="text-sm text-ink/72">
                <span className={accentStyles[item.accent].text}>-&gt;</span> {bullet}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-7">
          <InlineArrowLink href={`/work/${item.id}`} accent={item.accent}>
            {item.linkLabel}
          </InlineArrowLink>
        </div>
      </div>
    </article>
  )
}

export function CompanyVentureWorkSection({ page }: { page: CompanyPageContent }) {
  if (!page.ventureWork) {
    return null
  }

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto w-full max-w-[1460px] px-7 py-8 md:px-10 lg:px-14">
        <div className="grid items-center gap-5 md:grid-cols-[auto_1fr]">
          <SectionKicker accent={page.accent}>{page.workLabel}</SectionKicker>
          <span className="hidden h-px bg-black/15 md:block" />
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-[1.08fr_1.08fr_0.82fr]">
          {page.ventureWork.map((item) => (
            <VentureCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
