import { ArrowRight } from "lucide-react"
import type { CompanyPageContent } from "../../../../domain/antikra"
import { CompanyIcon } from "../../components/CompanyIcon"
import { CompanyTechnicalVisual, accentStyles } from "./CompanyDetailPrimitives"

export function NextCompanySection({ page }: { page: CompanyPageContent }) {
  if (!page.next) {
    return null
  }

  const styles = accentStyles[page.next.accent]
  const nextIcon = {
    mechanism: "box",
    cosmos: "cloud",
    orrery: "orbit",
    astra: "shield",
    helios: "sun",
    olympia: "venture",
  } as const
  const nextIconName = nextIcon[page.next.visualKind]
  const visualPage = {
    ...page,
    id: page.next.visualKind,
    accent: page.next.accent,
    visualKind: page.next.visualKind,
    visualNotes: [],
  } as CompanyPageContent

  return (
    <section className="border-b border-black/10 bg-[#fffdfa]">
      <a
        href={page.next.href}
        className="mx-auto grid min-h-[110px] w-full max-w-[1460px] items-center gap-6 px-7 py-5 md:px-10 lg:grid-cols-[170px_1fr_240px_300px] lg:px-14"
      >
        <p className={`font-display text-[2.3rem] leading-none ${styles.text}`}>
          {page.next.number}
          <span className="ml-2 align-middle font-sans text-sm text-ink/35">/ {page.next.total}</span>
        </p>
        <div className="flex items-center gap-5 border-l border-black/12 pl-8">
          <span className={`flex h-16 w-16 items-center justify-center rounded-full border ${styles.border} ${styles.text}`}>
            <CompanyIcon icon={nextIconName} accent={page.next.accent} />
          </span>
          <div>
            <h2 className="font-display text-[1.9rem] uppercase leading-none text-[#24130f]">
              {page.next.name}
            </h2>
            <p className="mt-1 text-base text-ink/70">{page.next.discipline}</p>
          </div>
        </div>
        <span className={`inline-flex items-center gap-7 justify-self-start text-sm ${styles.text}`}>
          Explore {page.next.name}
          <ArrowRight className="h-4 w-4" />
        </span>
        <div className="hidden h-[96px] overflow-hidden opacity-55 lg:block">
          <CompanyTechnicalVisual page={visualPage} />
        </div>
      </a>
    </section>
  )
}
