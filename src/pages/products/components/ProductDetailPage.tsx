import { useState } from "react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import type { ProductDetailPageContent, ProductSummary } from "../../../domain/products"
import { productSystemNodes } from "../../../domain/products"

const accentText = {
  green: "text-[#0d6b47]",
  blue: "text-[#174783]",
} as const

const accentBg = {
  green: "bg-[#0d6b47] hover:bg-[#0a5639]",
  blue: "bg-[#174783] hover:bg-[#133a6a]",
} as const

const accentBorder = {
  green: "border-[#0d6b47] text-[#0d6b47]",
  blue: "border-[#174783] text-[#174783]",
} as const

const companyAccent = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

interface ProductDetailPageProps {
  content: ProductDetailPageContent
  image: string
  nextProduct: ProductSummary
}

export function ProductDetailPage({
  content,
  image,
  nextProduct,
}: ProductDetailPageProps) {
  const { product } = content
  const accent = product.accent
  const [flowActive, setFlowActive] = useState(0)
  const [systemActive, setSystemActive] = useState(0)

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      {/* Hero */}
      <section className="relative isolate min-h-[640px] overflow-hidden border-b border-black/10 bg-[#f8f2e9] pt-[88px] md:min-h-[680px]">
        <img
          src={image}
          alt={`${product.name} operating environment`}
          className="absolute inset-x-0 top-[88px] -z-20 h-[calc(100%-88px)] w-full object-cover object-[60%_48%]"
        />
        <div className="absolute inset-x-0 bottom-0 top-[88px] -z-10 hidden bg-[linear-gradient(90deg,#f8f2e9_0%,rgba(248,242,233,0.97)_24%,rgba(248,242,233,0.72)_40%,rgba(248,242,233,0.28)_56%,rgba(248,242,233,0)_74%)] md:block" />
        <div className="absolute inset-x-0 bottom-0 top-[88px] -z-10 bg-[linear-gradient(180deg,rgba(248,242,233,0.5)_0%,rgba(248,242,233,0.88)_50%,#f8f2e9_100%)] md:hidden" />

        <div className="mx-auto flex min-h-[552px] w-full max-w-[1500px] items-center px-8 py-14 md:min-h-[592px] md:px-12 xl:px-[72px]">
          <div className="w-full max-w-[560px]">
            <p className="font-display-sans text-[0.64rem] font-extrabold uppercase tracking-[0.2em] text-[#a1742e]">
              ANTIKRA&nbsp;&nbsp;•&nbsp;&nbsp;Products&nbsp;&nbsp;•&nbsp;&nbsp;{product.name}
            </p>
            <p className={`mt-5 font-display text-[1.35rem] font-semibold uppercase tracking-[0.04em] ${accentText[accent]}`}>
              {product.number} / {product.total}
            </p>
            <h1
              className={`mt-2 font-display text-[4.4rem] font-semibold uppercase leading-[0.9] tracking-[-0.03em] md:text-[5.6rem] xl:text-[6.4rem] ${accentText[accent]}`}
            >
              {product.name}
            </h1>
            <p className="mt-3 font-display text-[1.55rem] font-semibold leading-none text-[#16110f] md:text-[1.85rem]">
              {product.category}
            </p>
            <div className={`mt-6 h-px w-9 ${accent === "green" ? "bg-[#0d6b47]" : "bg-[#174783]"}`} />
            <p className="mt-5 max-w-[440px] font-display text-[1.55rem] font-semibold leading-[1.15] tracking-[-0.02em] text-[#16110f]">
              {content.lead}
            </p>
            <p className="mt-4 max-w-[430px] text-[0.9rem] leading-[1.58] text-[#1d1d1d]/70">
              {content.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {(content.externalHref || content.externalLabel) && (
                <a
                  href={content.externalHref ?? `#${product.id}-system`}
                  className={`group inline-flex h-10 items-center justify-center gap-5 px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white transition-colors ${accentBg[accent]}`}
                >
                  {content.externalLabel ?? `Explore ${product.name}`}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )}
              <a
                href={`#${product.id}-system`}
                className={`group inline-flex h-10 items-center justify-center gap-5 border bg-[#fbf8f1]/90 px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] transition-colors hover:bg-white ${accentBorder[accent]}`}
              >
                Explore the product
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Signals */}
      <section className="bg-[#111414] text-white">
        <div className="mx-auto grid w-full max-w-[1500px] px-8 py-11 md:grid-cols-4 md:px-12 xl:px-[72px]">
          {product.details.map((detail, index) => (
            <div
              key={detail.label}
              className={`min-h-[100px] py-4 md:px-8 ${
                index === 0 ? "md:pl-0" : "border-t border-white/12 md:border-l md:border-t-0"
              }`}
            >
              {index === 0 && (
                <p className="mb-5 font-display-sans text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#a1742e]">
                  01 / Product facts
                </p>
              )}
              <p className={`font-display text-[1.85rem] font-semibold leading-none ${accentText[accent]}`}>
                {detail.value}
              </p>
              <p className="mt-3 text-[0.86rem] text-white/88">{detail.label}</p>
            </div>
          ))}
          <div className="min-h-[100px] border-t border-white/12 py-4 md:border-l md:border-t-0 md:px-8">
            <p className={`font-display text-[1.85rem] font-semibold leading-none ${accentText[accent]}`}>
              {product.builtBy.length}
            </p>
            <p className="mt-3 text-[0.86rem] text-white/88">ANTIKRA companies</p>
            <p className="mt-1 text-[0.72rem] text-white/55">behind the build</p>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            02 / Operating flow
          </p>
          <h2 className="mt-4 max-w-[560px] font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f] md:text-[2.7rem]">
            {content.flowLabel}
          </h2>

          <div
            className="relative mt-10"
            onMouseLeave={() => setFlowActive(0)}
          >
            <div
              className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-black/12 md:block"
              aria-hidden
            >
              <div
                className={`h-full origin-left transition-[width] duration-500 ease-out ${
                  accent === "green" ? "bg-[#0d6b47]" : "bg-[#174783]"
                }`}
                style={{
                  width: `${(flowActive / Math.max(content.flow.length - 1, 1)) * 100}%`,
                }}
              />
            </div>

            <div className="grid md:grid-cols-5">
              {content.flow.map((step, index) => {
                const isActive = flowActive === index
                const isPassed = index <= flowActive
                return (
                  <button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setFlowActive(index)}
                    onFocus={() => setFlowActive(index)}
                    className={`relative min-h-[148px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-5 ${
                      index === 0 ? "md:border-l-0 md:pl-0" : ""
                    } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  >
                    <span
                      className={`block h-2.5 w-2.5 rounded-full border transition-colors ${
                        isPassed
                          ? accent === "green"
                            ? "border-[#0d6b47] bg-[#0d6b47]"
                            : "border-[#174783] bg-[#174783]"
                          : "border-black/25 bg-transparent"
                      }`}
                    />
                    <p className={`mt-5 font-display-sans text-[0.58rem] font-black ${accentText[accent]}`}>
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-1 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.08em] text-[#161616]">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 text-[0.66rem] leading-[1.45] ${
                        isActive ? "text-[#161616]/72" : "text-[#161616]/42"
                      }`}
                    >
                      {step.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Core system */}
      <section
        id={`${product.id}-system`}
        className="border-b border-black/10 bg-[#fbf8f1]"
      >
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
                03 / Core system
              </p>
              <h2 className="mt-4 font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f] md:text-[2.7rem]">
                What {product.name} runs.
              </h2>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3">
            {content.systemCards.map((card, index) => (
              <article
                key={card.id}
                className={[
                  "group border-b border-black/10 py-8 md:px-7",
                  index % 2 === 1 ? "md:border-l" : "",
                  index >= 2 ? "md:border-t" : "",
                  index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0",
                  index >= 3 ? "lg:border-t" : "lg:border-t-0",
                  index === 2 ? "lg:border-t-0" : "",
                ].join(" ")}
              >
                <p className={`font-display text-[1.35rem] font-semibold ${accentText[accent]}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                  {card.title}
                </h3>
                <div className={`mt-3 h-px w-6 origin-left transition-transform duration-300 group-hover:scale-x-150 ${
                  accent === "green" ? "bg-[#0d6b47]" : "bg-[#174783]"
                }`} />
                <p className="mt-3 max-w-[240px] text-[0.78rem] leading-[1.5] text-[#161616]/58">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Roles + reality */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-12 px-8 py-14 md:px-12 md:py-16 lg:grid-cols-[1.15fr_0.85fr] xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              04 / Roles
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
              One system. Different roles.
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {content.roles.map((role) => (
                <article key={role.id} className="border-t border-black/12 pt-5">
                  <h3 className={`font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] ${accentText[accent]}`}>
                    {role.title}
                  </h3>
                  <p className="mt-3 text-[0.78rem] leading-[1.5] text-[#161616]/6">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="border border-black/10 bg-[#fbf8f1] p-7 md:p-8">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              Built for field reality
            </p>
            <div className="mt-6 space-y-5">
              {content.reality.map((item) => (
                <article key={item.id} className="border-t border-black/10 pt-4 first:border-t-0 first:pt-0">
                  <h3 className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.1em] text-[#161616]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.76rem] leading-[1.5] text-[#161616]/58">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-[#111414] text-white">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
            05 / Operational intelligence
          </p>
          <h2 className="mt-4 max-w-[480px] font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.02em]">
            Signals from real operations.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {content.metrics.map((metric, index) => (
              <div
                key={metric.title}
                className={`border-t border-white/12 pt-5 ${
                  index > 0 ? "lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0" : ""
                }`}
              >
                <p className="text-[0.78rem] text-white/55">{metric.title}</p>
                <p className={`mt-3 font-display text-[1.55rem] font-semibold leading-none ${accentText[accent]}`}>
                  {metric.value}
                </p>
                <p className="mt-2 text-[0.7rem] text-white/45">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by */}
      <section className="border-b border-black/10 bg-[#fbf8f1]">
        <div className="mx-auto grid w-full max-w-[1500px] px-8 py-14 md:grid-cols-[280px_1fr] md:px-12 md:py-16 xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              06 / Built by ANTIKRA
            </p>
            <h2 className="mt-4 font-display text-[2.1rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
              A product of the system.
            </h2>
            <a
              href="/companies"
              className="group mt-6 inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#141414] hover:text-[#9a6d23]"
            >
              Explore companies
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="relative mt-10 md:mt-1" onMouseLeave={() => setSystemActive(0)}>
            <div
              className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-black/12 md:block"
              aria-hidden
            >
              <div
                className="h-full origin-left bg-[#9a6d23] transition-[width] duration-500 ease-out"
                style={{
                  width: `${(systemActive / Math.max(productSystemNodes.length - 1, 1)) * 100}%`,
                }}
              />
            </div>
            <div className="grid md:grid-cols-5">
              {productSystemNodes.map((node, index) => {
                const isActive = systemActive === index
                return (
                  <button
                    key={node.id}
                    type="button"
                    onMouseEnter={() => setSystemActive(index)}
                    onFocus={() => setSystemActive(index)}
                    className={`min-h-[120px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-5 ${
                      index === 0 ? "md:border-l-0 md:pl-0" : ""
                    } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  >
                    <p className={`font-display text-[1.25rem] font-semibold ${companyAccent[node.accent]}`}>
                      {node.name}
                    </p>
                    <p className="mt-2 text-[0.66rem] leading-[1.4] text-[#161616]/55">
                      {node.discipline}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA + next */}
      <section className="border-b border-black/10 bg-[#f8f2e9]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-8 py-12 md:grid-cols-[1.2fr_1fr] md:px-12 md:py-14 xl:px-[72px]">
          <div>
            <h2 className="font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[#15110f] md:text-[2.7rem]">
              {content.ctaTitle}
            </h2>
            <p className="mt-4 max-w-[420px] text-[0.86rem] leading-[1.58] text-[#151515]/62">
              {content.ctaBody}
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {content.externalHref && (
                <a
                  href={content.externalHref}
                  className={`group inline-flex h-10 items-center gap-5 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white ${accentBg[accent]}`}
                >
                  {content.externalLabel ?? `Visit ${product.name}`}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              <a
                href="/company/contact"
                className="group inline-flex h-10 items-center gap-5 border border-black/25 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-[#151515] hover:border-[#9a6d23] hover:text-[#9a6d23]"
              >
                Talk to ANTIKRA
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <a
            href={nextProduct.href}
            className="group flex flex-col justify-between border-t border-black/12 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          >
            <div>
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                Next product · {nextProduct.number} / {nextProduct.total}
              </p>
              <p className={`mt-3 font-display text-[2rem] font-semibold uppercase tracking-[0.04em] ${accentText[nextProduct.accent]}`}>
                {nextProduct.name}
              </p>
              <p className="mt-2 text-[0.82rem] leading-[1.5] text-[#161616]/58">
                {nextProduct.description}
              </p>
            </div>
            <span className={`mt-6 inline-flex items-center gap-4 text-[0.76rem] font-semibold ${accentText[nextProduct.accent]}`}>
              Explore {nextProduct.name}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
