import type { CompanyPageContent } from "../../../../domain/antikra"
import { DetailIcon, SectionKicker } from "./CompanyDetailPrimitives"

export function CompanyCapabilityStripSection({ page }: { page: CompanyPageContent }) {
  const desktopColumns = page.capabilities.length >= 7 ? "lg:grid-cols-7" : "lg:grid-cols-6"

  return (
    <section id="capabilities" className="border-b border-black/10 bg-white">
      <div className="mx-auto w-full max-w-[1460px] px-7 py-7 md:px-10 lg:px-14">
        <SectionKicker accent={page.accent}>{page.capabilityLabel}</SectionKicker>
        <div className={`mt-7 grid gap-y-8 divide-black/10 md:grid-cols-2 ${desktopColumns} lg:divide-x`}>
          {page.capabilities.map((capability) => (
            <article key={capability.id} className="pr-7 lg:min-h-[118px] lg:px-7 lg:first:pl-0 lg:last:pr-0">
              <DetailIcon icon={capability.icon} accent={page.accent} />
              <h2 className="mt-5 text-sm font-semibold text-ink">{capability.title}</h2>
              <p className="mt-2 max-w-[150px] text-xs leading-relaxed text-ink/64">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
