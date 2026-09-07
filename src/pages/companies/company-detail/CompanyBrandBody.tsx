import { useState } from "react"
import { ArrowRight } from "lucide-react"
import type {
  CompanyPageContent,
  CompanyWorkItem,
  CompanyVentureItem,
} from "../../../domain/antikra"
import {
  companyAccentBg,
  companyAccentText,
  companyHeroImage,
  workImage,
} from "./CompanyBrandHero"

const workHref: Record<string, string> = {
  rembeh: "/products/rembeh",
  carmie: "/products/carmie",
  "powering-rembeh": "/products/rembeh",
  "powering-carmie": "/products/carmie",
}

function CapabilitiesGrid({ page }: { page: CompanyPageContent }) {
  return (
    <section id="capabilities" className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <div className="max-w-[520px]">
          <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${companyAccentText[page.accent]}`}>
            Capabilities
          </p>
          <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#16110f]">
            {page.capabilityLabel}
          </h2>
        </div>
        <ul className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {page.capabilities.map((item, index) => (
            <li key={item.id} className="border-t border-black/10 pt-5">
              <p className={`font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] ${companyAccentText[page.accent]}`}>
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-[1.35rem] font-semibold text-[#15110f]">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.86rem] leading-[1.55] text-[#2c2824]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function CapabilityListStrip({ page }: { page: CompanyPageContent }) {
  if (!page.capabilityList.length) return null
  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto max-w-[1500px] px-8 py-12 md:px-12 xl:px-[72px]">
        <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${companyAccentText[page.accent]}`}>
          {page.capabilityListLabel ?? "Disciplines"}
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
          {page.capabilityList.map((item) => (
            <li key={item} className="font-display text-[1.15rem] font-semibold text-[#16110f]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function ProcessSpine({ page }: { page: CompanyPageContent }) {
  const [active, setActive] = useState(0)
  const step = page.process[active]

  return (
    <section className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em] text-[#16110f]">
          {page.processLabel}
        </h2>
        <div className="mt-10 flex gap-2 overflow-x-auto pb-2" onMouseLeave={() => setActive(0)}>
          {page.process.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={`min-w-[120px] flex-1 border-t-2 py-4 text-left transition-colors ${
                active === index
                  ? `border-current ${companyAccentText[page.accent]}`
                  : "border-black/15 text-[#15110f]/40 hover:text-[#15110f]/70"
              }`}
            >
              <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-display text-[1.15rem] font-semibold text-[#15110f]">
                {item.title.replace(/^\d+\.\s*/, "")}
              </p>
            </button>
          ))}
        </div>
        {step && (
          <p className="mt-6 max-w-[520px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
            {step.description}
          </p>
        )}
      </div>
    </section>
  )
}

function WorkBands({
  page,
  items,
}: {
  page: CompanyPageContent
  items: CompanyWorkItem[]
}) {
  if (!items.length) return null

  return (
    <section id="work" className="border-b border-black/10 bg-[#111414] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
            {page.workLabel}
          </h2>
          {page.workLinkLabel && page.workLinkHref && (
            <a
              href={page.workLinkHref}
              className="font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.12em] text-[#e5d0aa] underline-offset-4 hover:underline"
            >
              {page.workLinkLabel}
            </a>
          )}
        </div>
      </div>
      <div className="space-y-0">
        {items.map((item, index) => {
          const img = workImage[item.visual]
          const href = workHref[item.id] ?? page.workLinkHref ?? "#work"
          const reverse = index % 2 === 1
          return (
            <a
              key={item.id}
              href={href}
              className={`grid border-t border-white/10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative min-h-[240px] lg:min-h-[320px]">
                <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
              </div>
              <div className="flex flex-col justify-center bg-[#161a1a] px-8 py-12 md:px-12">
                <p className={`font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] ${companyAccentText[item.accent]}`}>
                  Selected work
                </p>
                <h3 className="mt-4 font-display text-[2rem] font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[420px] text-[0.9rem] leading-[1.55] text-white/70">
                  {item.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#e5d0aa]">
                  {item.linkLabel}
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}

function WorkStackLight({
  page,
  items,
}: {
  page: CompanyPageContent
  items: CompanyWorkItem[]
}) {
  if (!items.length) return null

  return (
    <section id="work" className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em] text-[#16110f]">
          {page.workLabel}
        </h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {items.map((item) => {
            const img = workImage[item.visual]
            const href = workHref[item.id] ?? page.workLinkHref ?? "#work"
            return (
              <a key={item.id} href={href} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="border-b border-black/10 bg-[#f8f2e9] pt-5 pb-6">
                  <h3 className="font-display text-[1.45rem] font-semibold text-[#15110f]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.86rem] leading-[1.5] text-[#2c2824]">
                    {item.description}
                  </p>
                  <span
                    className={`mt-4 inline-flex items-center gap-2 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.1em] ${companyAccentText[item.accent]}`}
                  >
                    {item.linkLabel}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function PartnersRow({ page }: { page: CompanyPageContent }) {
  if (!page.partners.length) return null
  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto max-w-[1500px] px-8 py-14 md:px-12 xl:px-[72px]">
        <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${companyAccentText[page.accent]}`}>
          Across the group
        </p>
        <h2 className="mt-3 font-display text-[2rem] font-semibold text-[#16110f]">
          Built with other ANTIKRA companies
        </h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {page.partners.map((partner) => (
            <li key={partner.id} className="border-t border-black/12 pt-4">
              <p className={`font-display text-[1.2rem] font-semibold ${companyAccentText[partner.accent]}`}>
                {partner.title}
              </p>
              <p className="mt-2 text-[0.84rem] leading-[1.5] text-[#2c2824]">
                {partner.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function TechStrip({ page }: { page: CompanyPageContent }) {
  if (!page.technologies.length) return null
  return (
    <section className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto max-w-[1500px] px-8 py-12 md:px-12 xl:px-[72px]">
        <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${companyAccentText[page.accent]}`}>
          {page.technologyLabel ?? "Technologies"}
        </p>
        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {page.technologies.map((tech) => (
            <li key={tech} className="font-display text-[1.1rem] font-semibold text-[#16110f]">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function MetricsRow({ page }: { page: CompanyPageContent }) {
  if (!page.metrics?.length) return null
  return (
    <section className="border-b border-black/10 bg-[#111414] text-white">
      <div className="mx-auto grid max-w-[1500px] gap-8 px-8 py-12 sm:grid-cols-2 md:px-12 lg:grid-cols-4 xl:px-[72px]">
        {page.metrics.map((metric) => (
          <div key={metric.label} className="border-t border-white/15 pt-4">
            <p className="font-display text-[2.2rem] font-semibold text-white">{metric.value}</p>
            <p className="mt-2 text-[0.8rem] leading-[1.4] text-white/55">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function BrandCta({ page }: { page: CompanyPageContent }) {
  return (
    <section className="border-b border-black/10 bg-[#f8f2e9]">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
        <div className="max-w-[520px]">
          <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${companyAccentText[page.accent]}`}>
            {page.cta.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#16110f]">
            {page.cta.title}
          </h2>
          <p className="mt-4 text-[0.92rem] leading-[1.55] text-[#2c2824]">{page.cta.description}</p>
        </div>
        <a
          href="/company/contact"
          className={`inline-flex h-11 w-fit items-center px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${companyAccentBg[page.accent]}`}
        >
          {page.cta.buttonLabel}
        </a>
      </div>
    </section>
  )
}

function NextCompany({ page }: { page: CompanyPageContent }) {
  if (!page.next) return null
  const next = page.next
  const thumb = companyHeroImage[next.visualKind]

  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <a
        href={next.href}
        className="group mx-auto grid max-w-[1500px] items-center gap-6 px-8 py-10 md:grid-cols-[1fr_220px] md:px-12 xl:px-[72px]"
      >
        <div>
          <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-[#15110f]/45">
            Next · {next.number} / {next.total}
          </p>
          <h2 className={`mt-3 font-display text-[2.4rem] font-semibold uppercase tracking-[-0.02em] ${companyAccentText[next.accent]}`}>
            {next.name}
          </h2>
          <p className="mt-2 text-[0.92rem] text-[#2c2824]">{next.discipline}</p>
          <span className="mt-5 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#16110f]">
            Explore {next.name}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
        <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
          <img src={thumb} alt="" className="absolute inset-0 h-full w-full object-cover" />
        </div>
      </a>
    </section>
  )
}

function VentureWorkBands({ page }: { page: CompanyPageContent }) {
  const items = page.ventureWork ?? []
  if (!items.length) return null

  return (
    <section id="ventures" className="bg-[#111414] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <h2 className="font-display text-[2.5rem] font-semibold tracking-[-0.02em]">
          {page.workLabel}
        </h2>
      </div>
      {items.map((item: CompanyVentureItem, index) => {
        const img = workImage[item.visual]
        const href =
          item.id === "rembeh"
            ? "/products/rembeh"
            : item.id === "carmie"
              ? "/products/carmie"
              : "/products"
        const reverse = index % 2 === 1
        return (
          <a
            key={item.id}
            href={href}
            className={`grid border-t border-white/10 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="relative min-h-[280px] lg:min-h-[380px]">
              <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center bg-[#161a1a] px-8 py-14 md:px-12">
              <p className={`font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] ${companyAccentText[item.accent]}`}>
                {item.category}
              </p>
              <h3 className="mt-4 font-display text-[2.4rem] font-semibold">{item.name}</h3>
              <p className="mt-3 max-w-[420px] text-[0.92rem] leading-[1.55] text-white/70">
                {item.description}
              </p>
              {item.details && (
                <dl className="mt-6 grid gap-4 sm:grid-cols-3">
                  {item.details.map((detail) => (
                    <div key={detail.label}>
                      <dt className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-white/40">
                        {detail.label}
                      </dt>
                      <dd className="mt-1 text-[0.84rem] text-white/85">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              )}
              {item.builtWith && (
                <p className="mt-5 text-[0.78rem] text-white/45">
                  Built with {item.builtWith.join(" · ")}
                </p>
              )}
              {item.bullets && (
                <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="text-[0.8rem] text-white/60">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-8 inline-flex items-center gap-2 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-[#e5d0aa]">
                {item.linkLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>
        )
      })}
    </section>
  )
}

function OlympiaBody({ page }: { page: CompanyPageContent }) {
  return (
    <>
      {page.principles && page.principles.length > 0 && (
        <section className="border-b border-black/10 bg-[#f8f2e9]">
          <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
            <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em] text-[#16110f]">
              How we decide what to build
            </h2>
            <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {page.principles.map((item, index) => (
                <li key={item.id} className="flex gap-4">
                  <span className="font-display text-[1.35rem] font-semibold text-[#a8711a]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-[1.25rem] font-semibold text-[#15110f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-[1.5] text-[#2c2824]">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
      <VentureWorkBands page={page} />
      <ProcessSpine page={page} />
      {page.partnerOptions && page.partnerOptions.length > 0 && (
        <section className="border-b border-black/10 bg-[#f4eee5]">
          <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
            <h2 className="font-display text-[2.2rem] font-semibold text-[#16110f]">
              Ways to engage
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              {page.partnerOptions.map((option) => (
                <li key={option.id} className="border-t border-black/12 pt-5">
                  <h3 className={`font-display text-[1.35rem] font-semibold ${companyAccentText[option.accent]}`}>
                    {option.title}
                  </h3>
                  <p className="mt-3 text-[0.86rem] leading-[1.55] text-[#2c2824]">
                    {option.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
      {page.finalCta ? (
        <section className="bg-[#111414] text-white">
          <div className="mx-auto max-w-[1500px] px-8 py-20 md:px-12 xl:px-[72px]">
            <h2 className="max-w-[640px] font-display text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.02em]">
              {page.finalCta.title}
            </h2>
            <p className="mt-5 max-w-[480px] text-[0.95rem] leading-[1.6] text-white/70">
              {page.finalCta.description}
            </p>
            <div className="mt-10 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-2">
              <div>
                <h3 className="font-display text-[1.4rem] font-semibold text-[#e5d0aa]">
                  {page.finalCta.secondaryTitle}
                </h3>
                <p className="mt-3 text-[0.88rem] leading-[1.55] text-white/60">
                  {page.finalCta.secondaryDescription}
                </p>
              </div>
              <div className="md:flex md:items-end md:justify-end">
                <a
                  href={page.finalCta.href}
                  className="inline-flex h-11 items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
                >
                  {page.finalCta.buttonLabel}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <BrandCta page={page} />
      )}
      <NextCompany page={page} />
    </>
  )
}

function AstraCapabilities({ page }: { page: CompanyPageContent }) {
  return (
    <section id="capabilities" className="border-b border-white/10 bg-[#0c1218] text-white">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <h2 className="font-display text-[2.4rem] font-semibold tracking-[-0.02em]">
          {page.capabilityLabel}
        </h2>
        <ul className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {page.capabilities.map((item) => (
            <li key={item.id} className="bg-[#0c1218] p-6 md:p-8">
              <h3 className="font-display text-[1.3rem] font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-[0.86rem] leading-[1.55] text-white/60">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function CompanyBrandBody({ page }: { page: CompanyPageContent }) {
  if (page.id === "olympia") {
    return <OlympiaBody page={page} />
  }

  if (page.id === "mechanism") {
    return (
      <>
        <CapabilitiesGrid page={page} />
        <CapabilityListStrip page={page} />
        <WorkBands page={page} items={page.selectedWork} />
        <ProcessSpine page={page} />
        <PartnersRow page={page} />
        <TechStrip page={page} />
        <BrandCta page={page} />
        <NextCompany page={page} />
      </>
    )
  }

  if (page.id === "cosmos") {
    return (
      <>
        <MetricsRow page={page} />
        <CapabilitiesGrid page={page} />
        <ProcessSpine page={page} />
        <WorkStackLight page={page} items={page.selectedWork} />
        <PartnersRow page={page} />
        <TechStrip page={page} />
        <BrandCta page={page} />
        <NextCompany page={page} />
      </>
    )
  }

  if (page.id === "orrery") {
    return (
      <>
        <CapabilitiesGrid page={page} />
        <MetricsRow page={page} />
        <WorkBands page={page} items={page.selectedWork} />
        <ProcessSpine page={page} />
        <PartnersRow page={page} />
        <BrandCta page={page} />
        <NextCompany page={page} />
      </>
    )
  }

  if (page.id === "astra") {
    return (
      <>
        <AstraCapabilities page={page} />
        <ProcessSpine page={page} />
        <WorkBands page={page} items={page.selectedWork} />
        <MetricsRow page={page} />
        <PartnersRow page={page} />
        <BrandCta page={page} />
        <NextCompany page={page} />
      </>
    )
  }

  // Helios
  return (
    <>
      <CapabilityListStrip page={page} />
      <CapabilitiesGrid page={page} />
      <WorkStackLight page={page} items={page.selectedWork} />
      <ProcessSpine page={page} />
      <MetricsRow page={page} />
      <PartnersRow page={page} />
      <BrandCta page={page} />
      <NextCompany page={page} />
    </>
  )
}
