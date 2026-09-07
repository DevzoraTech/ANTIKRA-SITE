import type { CompanyPageContent } from "../../../../domain/antikra"
import { CompanyIcon } from "../../components/CompanyIcon"
import { DetailIcon, SectionKicker, InlineArrowLink, accentStyles } from "./CompanyDetailPrimitives"

const capabilityIcons = ["screen", "database", "phone", "nodes", "database", "screen", "network", "shield", "briefcase"]

export function CompanyCapabilitySystemSection({ page }: { page: CompanyPageContent }) {
  return (
    <section className="border-b border-black/10 bg-white">
      <div className={`mx-auto grid w-full max-w-[1460px] divide-y divide-black/10 px-7 md:px-10 lg:px-14 ${
        page.metrics ? "lg:grid-cols-[1fr_1.2fr_0.58fr] lg:divide-x lg:divide-y-0" : "lg:grid-cols-[1fr_1.45fr] lg:divide-x lg:divide-y-0"
      }`}>
        <div className="py-8 lg:pr-10">
          <SectionKicker accent={page.accent}>{page.capabilityListLabel ?? "Our capabilities"}</SectionKicker>
          <div className="mt-7 grid gap-x-8 gap-y-0 sm:grid-cols-2">
            {page.capabilityList.map((capability, index) => (
              <div key={capability} className="flex items-center gap-3 border-b border-black/10 py-3">
                <DetailIcon icon={capabilityIcons[index] ?? "box"} accent={page.accent} />
                <p className="text-sm text-ink/74">{capability}</p>
              </div>
            ))}
          </div>
          <div className="mt-7">
            <InlineArrowLink href="/solutions" accent={page.accent}>
              Explore all capabilities
            </InlineArrowLink>
          </div>
        </div>

        <div className="py-8 lg:px-10">
          <SectionKicker accent={page.accent}>Working with the ANTIKRA system</SectionKicker>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {page.partners.map((partner) => (
              <article key={partner.id} className="min-h-[176px] border border-black/12 bg-white p-5">
                <CompanyIcon icon={partner.icon} accent={partner.accent} />
                <h3 className="mt-7 text-sm font-semibold leading-snug text-ink">{partner.title}</h3>
                <p className="mt-4 text-xs leading-relaxed text-ink/62">{partner.description}</p>
              </article>
            ))}
          </div>
        </div>

        {page.metrics && (
          <div className="py-8 lg:pl-10">
            <SectionKicker accent={page.accent}>By the numbers</SectionKicker>
            <div className="mt-6 space-y-7">
              {page.metrics.map((metric) => (
                <div key={metric.value}>
                  {metric.title && (
                    <p className={`mb-2 text-xs font-semibold ${accentStyles[page.accent].text}`}>
                      {metric.title}
                    </p>
                  )}
                  <p className={`font-display text-[2rem] leading-none ${accentStyles[page.accent].text}`}>
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm leading-snug text-ink/70">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
