import { ArrowRight } from "lucide-react"
import type { CompanyPageContent } from "../../../../domain/antikra"
import { CompanyTechnicalVisual, SectionKicker, accentStyles } from "./CompanyDetailPrimitives"

const techMarkStyles = [
  "font-black",
  "font-semibold",
  "font-display text-2xl",
  "font-black",
  "font-semibold",
  "font-display text-2xl",
  "font-bold",
]

export function CompanyTechnologyCtaSection({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const techColumns = page.technologies.length > 7 ? "lg:grid-cols-10" : "lg:grid-cols-7"

  return (
    <section className="border-b border-black/10 bg-white">
      <div className="mx-auto grid w-full max-w-[1460px] divide-y divide-black/10 px-7 md:px-10 lg:grid-cols-[0.85fr_1.25fr] lg:divide-x lg:divide-y-0 lg:px-14">
        <div className="py-8 lg:pr-10">
          <SectionKicker accent={page.accent}>
            {page.technologyLabel ?? (page.id === "cosmos" ? "Technology we work with" : "Selected technologies")}
          </SectionKicker>
          <div className={`mt-7 grid grid-cols-3 gap-6 sm:grid-cols-4 ${techColumns}`}>
            {page.technologies.map((technology, index) => (
              <div key={technology} className="text-center">
                <p className={`mx-auto flex h-10 items-center justify-center text-ink ${techMarkStyles[index % techMarkStyles.length]}`}>
                  {technology === "Google Cloud" ? "Google" : technology}
                </p>
                <p className="mt-2 text-xs text-ink/68">{technology}</p>
              </div>
            ))}
          </div>
          <a href="/company/contact" className={`mt-8 inline-flex items-center gap-7 text-sm ${styles.text}`}>
            {page.technologyLinkLabel ?? "See full tech stack"}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className={`${styles.pale} relative overflow-hidden py-8 lg:pl-10`}>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_300px]">
            <div>
              <SectionKicker accent={page.accent}>{page.cta.eyebrow}</SectionKicker>
              <h2 className="mt-5 font-display text-[2rem] font-semibold leading-tight text-[#24130f]">
                {page.cta.title}
              </h2>
              <p className="mt-2 text-base text-ink/65">{page.cta.description}</p>
              <a
                href="/company/contact"
                className={`mt-7 inline-flex h-11 items-center gap-6 px-5 text-sm font-medium ${styles.button}`}
              >
                {page.cta.buttonLabel}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="hidden opacity-65 md:block">
              <CompanyTechnicalVisual page={page} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
