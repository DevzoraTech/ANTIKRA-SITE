import type { LegalPageContent } from "../../domain/legal"
import { SitePrimaryCta } from "../../shared/ui/SitePrimaryCta"

export function LegalDocumentPage({ content }: { content: LegalPageContent }) {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto max-w-[820px] px-8 py-16 md:px-12">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
            ANTIKRA · Legal
          </p>
          <h1 className="mt-6 font-display text-[3rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[3.6rem]">
            {content.title}
          </h1>
          <p className="mt-3 text-[0.84rem] text-[#15110f]/50">
            Effective {content.effectiveDate}
          </p>
          <p className="mt-8 text-[1rem] leading-[1.65] text-[#2c2824]">{content.summary}</p>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[820px] space-y-12 px-8 py-14 md:px-12">
          {content.sections.map((section) => (
            <article key={section.id} id={section.id}>
              <h2 className="font-display text-[1.7rem] font-semibold tracking-[-0.02em]">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mt-4 text-[0.95rem] leading-[1.7] text-[#2c2824]">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.92rem] leading-[1.6] text-[#2c2824]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </section>

      <SitePrimaryCta />
    </div>
  )
}
