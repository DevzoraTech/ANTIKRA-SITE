import type { CompanyPageContent } from "../../../../domain/antikra"
import { SectionKicker, WorkVisual, InlineArrowLink, accentStyles } from "./CompanyDetailPrimitives"

export function CompanySelectedWorkSection({ page }: { page: CompanyPageContent }) {
  const showWorkLink = page.workLinkLabel !== null

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto w-full max-w-[1460px] px-7 py-8 md:px-10 lg:px-14">
        <div className="grid items-center gap-5 md:grid-cols-[auto_1fr_auto]">
          <SectionKicker accent={page.accent}>{page.workLabel}</SectionKicker>
          <span className="hidden h-px bg-black/15 md:block" />
          {showWorkLink && (
            <InlineArrowLink href={page.workLinkHref ?? "/work"} accent={page.accent}>
              {page.workLinkLabel ?? "View all work"}
            </InlineArrowLink>
          )}
        </div>

        <div className="mt-7 grid gap-6 lg:grid-cols-3">
          {page.selectedWork.map((work) => (
            <article key={work.id} className="grid min-h-[205px] overflow-hidden border border-black/12 bg-white md:grid-cols-[0.82fr_1fr]">
              <div className="flex flex-col p-7">
                <p className={`font-display-sans text-[0.95rem] font-bold uppercase tracking-[0.26em] ${accentStyles[work.accent].text}`}>
                  {work.title}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-ink/74">{work.description}</p>
                <InlineArrowLink href={`/work/${work.id}`} accent={work.accent === "bronze" ? page.accent : work.accent}>
                  {work.linkLabel}
                </InlineArrowLink>
              </div>
              <WorkVisual visual={work.visual} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
