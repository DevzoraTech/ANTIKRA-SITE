import { ArrowDown, ArrowRight } from "lucide-react"
import type { CompanyPageContent } from "../../../../domain/antikra"
import { CompanyIcon } from "../../components/CompanyIcon"
import { accentStyles, CompanyTechnicalVisual } from "./CompanyDetailPrimitives"

export function CompanyDetailHeroSection({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]

  return (
    <section className="border-b border-black/10 bg-[#fffdfa] pt-[88px]">
      <div className="mx-auto grid min-h-[430px] w-full max-w-[1460px] items-center gap-8 px-7 py-12 md:px-10 lg:grid-cols-[0.72fr_1fr] lg:px-14 lg:py-10">
        <div>
          <p className={`font-display-sans text-[0.68rem] font-bold uppercase tracking-[0.42em] ${styles.text}`}>
            {page.breadcrumb}
          </p>
          <div className="mt-9 flex items-center gap-7">
            <span className={`flex h-[92px] w-[92px] items-center justify-center rounded-full border ${styles.border} ${styles.text}`}>
              <CompanyIcon icon={page.icon} accent={page.accent} />
            </span>
            <div>
              <h1 className="font-display text-[4.1rem] font-semibold uppercase leading-none text-[#24130f] md:text-[4.8rem]">
                {page.name}
              </h1>
              <p className={`mt-3 font-display text-[2rem] leading-none md:text-[2.35rem] ${styles.text}`}>
                {page.discipline}
              </p>
            </div>
          </div>
          {page.lead && (
            <p className="mt-9 max-w-[520px] font-display text-[1.7rem] font-semibold leading-tight text-[#24130f]">
              {page.lead}
            </p>
          )}
          <p className={`${page.lead ? "mt-4" : "mt-9"} max-w-[485px] text-[1.12rem] leading-[1.65] text-ink/68`}>
            {page.summary}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#capabilities"
              className={`inline-flex h-12 items-center justify-center gap-6 px-6 text-sm font-medium ${styles.button}`}
            >
              {page.primaryActionLabel ?? "Explore capabilities"}
              <ArrowDown className="h-4 w-4" strokeWidth={1.6} />
            </a>
            <a
              href="/company/contact"
              className={`inline-flex h-12 items-center justify-center gap-8 border bg-white px-6 text-sm font-medium transition-colors ${styles.border} ${styles.text} hover:bg-[#fff8ef]`}
            >
              {page.secondaryActionLabel ?? "Start a project"}
              <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <CompanyTechnicalVisual page={page} />
        </div>
      </div>
    </section>
  )
}
