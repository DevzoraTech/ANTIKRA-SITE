import { ArrowRight } from "lucide-react"
import type { CompanyAccent, CompanyPageContent } from "../../../../domain/antikra"
import { CompanyIcon } from "../../components/CompanyIcon"
import { DetailIcon, SectionKicker, accentStyles } from "./CompanyDetailPrimitives"

const systemNodes: Array<{
  name: string
  discipline: string
  icon: "box" | "cloud" | "orbit" | "shield" | "sun"
  accent: CompanyAccent
  className: string
}> = [
  {
    name: "MECHANISM",
    discipline: "Product Engineering",
    icon: "box",
    accent: "bronze",
    className: "left-0 top-[38%]",
  },
  {
    name: "HELIOS",
    discipline: "Brand & Experience",
    icon: "sun",
    accent: "coral",
    className: "left-[36%] top-0",
  },
  {
    name: "ORRERY",
    discipline: "Intelligence",
    icon: "orbit",
    accent: "violet",
    className: "right-0 top-[33%]",
  },
  {
    name: "COSMOS",
    discipline: "Infrastructure",
    icon: "cloud",
    accent: "green",
    className: "left-[10%] bottom-[6%]",
  },
  {
    name: "ASTRA",
    discipline: "Security",
    icon: "shield",
    accent: "blue",
    className: "right-[9%] bottom-[6%]",
  },
]

function OlympiaSystemMap({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]

  return (
    <div className="relative min-h-[360px]">
      <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/12" />
      <div className="absolute left-1/2 top-1/2 h-[190px] w-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/12" />
      <div className="absolute left-1/2 top-1/2 h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/12 bg-[#fffdfa] p-5 text-center shadow-sm">
        <CompanyIcon icon={page.icon} accent={page.accent} />
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-ink">Olympia</p>
        <p className={`text-[0.65rem] ${styles.text}`}>Ventures</p>
      </div>

      {systemNodes.map((node) => (
        <div key={node.name} className={`absolute flex items-center gap-3 ${node.className}`}>
          <CompanyIcon icon={node.icon} accent={node.accent} framed size="sm" />
          <div>
            <p className="text-xs font-bold text-ink">{node.name}</p>
            <p className="text-xs text-ink/62">{node.discipline}</p>
          </div>
        </div>
      ))}

      <svg viewBox="0 0 420 350" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M210 176 94 150M210 176 202 70M210 176l124-34M210 176 112 276M210 176l106 98" stroke={styles.stroke} strokeOpacity="0.34" strokeDasharray="5 8" />
        <circle cx="210" cy="176" r="4" fill={styles.fill} fillOpacity="0.6" />
      </svg>
    </div>
  )
}

export function CompanyVentureSystemSection({ page }: { page: CompanyPageContent }) {
  if (!page.partnerOptions || !page.principles) {
    return null
  }

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid w-full max-w-[1460px] divide-y divide-black/10 px-7 md:px-10 lg:grid-cols-[0.95fr_1fr_0.92fr] lg:divide-x lg:divide-y-0 lg:px-14">
        <div className="py-8 lg:pr-10">
          <SectionKicker accent={page.accent}>Built by the ANTIKRA system</SectionKicker>
          <OlympiaSystemMap page={page} />
          <p className="mt-3 max-w-[360px] text-base leading-relaxed text-ink/76">
            Six companies. One integrated system built to create, secure and scale ventures.
          </p>
        </div>

        <div className="py-8 lg:px-10">
          <SectionKicker accent={page.accent}>Partner with Olympia</SectionKicker>
          <div className="mt-7 space-y-4">
            {page.partnerOptions.map((option) => (
              <article key={option.id} className="grid min-h-[112px] grid-cols-[64px_1fr_auto] items-center gap-5 border border-black/12 bg-[#fffdfa] p-5">
                <DetailIcon icon={option.icon} accent={option.accent} framed />
                <div>
                  <h3 className="text-base font-semibold text-ink">{option.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/66">{option.description}</p>
                </div>
                <ArrowRight className={`h-5 w-5 ${accentStyles[option.accent].text}`} strokeWidth={1.4} />
              </article>
            ))}
          </div>
        </div>

        <div className="py-8 lg:pl-10">
          <SectionKicker accent={page.accent}>Our venture principles</SectionKicker>
          <div className="mt-6 space-y-5">
            {page.principles.map((principle) => (
              <article key={principle.id} className="grid grid-cols-[58px_1fr] gap-4">
                <DetailIcon icon={principle.icon} accent={page.accent} framed />
                <div>
                  <h3 className="text-sm font-semibold text-ink">{principle.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/64">{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
