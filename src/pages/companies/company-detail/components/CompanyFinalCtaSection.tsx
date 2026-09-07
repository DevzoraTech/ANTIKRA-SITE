import { ArrowRight } from "lucide-react"
import type { CompanyPageContent } from "../../../../domain/antikra"
import { CompanyTechnicalVisual, accentStyles } from "./CompanyDetailPrimitives"

export function CompanyFinalCtaSection({ page }: { page: CompanyPageContent }) {
  if (!page.finalCta) {
    return null
  }

  const styles = accentStyles[page.accent]

  return (
    <section className="border-b border-black/10 bg-[#fffdfa]">
      <div className="mx-auto w-full max-w-[1460px] px-7 py-8 md:px-10 lg:px-14">
        <div className="grid min-h-[190px] items-center overflow-hidden border border-black/12 bg-white lg:grid-cols-[0.9fr_1fr_0.92fr]">
          <div className="p-8">
            <h2 className="font-display text-[2.2rem] font-semibold leading-tight text-[#24130f]">
              {page.finalCta.title}
            </h2>
            <p className="mt-4 max-w-[400px] text-base leading-relaxed text-ink/68">
              {page.finalCta.description}
            </p>
          </div>

          <div className="hidden h-[180px] overflow-hidden opacity-75 lg:block">
            <CompanyTechnicalVisual page={page} />
          </div>

          <div className="p-8">
            <h3 className="font-display text-[1.8rem] leading-tight text-[#24130f]">
              {page.finalCta.secondaryTitle}
            </h3>
            <p className="mt-3 text-base text-ink/66">{page.finalCta.secondaryDescription}</p>
            <a
              href={page.finalCta.href}
              className={`mt-7 inline-flex h-12 items-center gap-7 px-6 text-sm font-medium ${styles.button}`}
            >
              {page.finalCta.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
