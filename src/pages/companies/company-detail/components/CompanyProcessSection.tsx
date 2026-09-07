import type { CompanyPageContent } from "../../../../domain/antikra"
import { DetailIcon, SectionKicker } from "./CompanyDetailPrimitives"

export function CompanyProcessSection({ page }: { page: CompanyPageContent }) {
  return (
    <section className="border-b border-black/10 bg-[#fffdfa]">
      <div className="mx-auto w-full max-w-[1460px] px-7 py-8 md:px-10 lg:px-14">
        <div className="grid items-center gap-5 md:grid-cols-[auto_1fr]">
          <SectionKicker accent={page.accent}>{page.processLabel}</SectionKicker>
          <span className="hidden h-px bg-black/15 md:block" />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-6">
          {page.process.map((step, index) => (
            <article key={step.id} className="relative text-center">
              {index < page.process.length - 1 && (
                <span className="absolute left-[65%] top-7 hidden h-px w-[70%] border-t border-dashed border-black/22 md:block" />
              )}
              <div className="relative z-10 flex justify-center">
                <DetailIcon icon={step.icon} accent={page.accent} framed />
              </div>
              <h2 className="mt-4 text-sm font-semibold text-ink">{step.title}</h2>
              <p className="mx-auto mt-2 max-w-[135px] text-xs leading-relaxed text-ink/64">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
