import { useState } from "react"
import { ArrowRight } from "lucide-react"
import type {
  EngineeringWorkItem,
  SolutionAccent,
  SolutionDetailContent,
  SolutionId,
} from "../../../domain/solutions"
import { siteImages } from "../../../shared/assets/images"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"
import productImg from "../../../assets/home/product-img.png"
import travelImg from "../../../assets/home/travel-img.png"

const accentText: Record<SolutionAccent, string> = {
  green: "text-[#0d6b47]",
  teal: "text-[#0f766e]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
}

const accentBg: Record<SolutionAccent, string> = {
  green: "bg-[#0d6b47] hover:bg-[#0a5639]",
  teal: "bg-[#0f766e] hover:bg-[#0d5f59]",
  violet: "bg-[#6b4fcf] hover:bg-[#5a3fb8]",
  blue: "bg-[#174783] hover:bg-[#133a6a]",
  coral: "bg-[#c24f32] hover:bg-[#a53f26]",
  gold: "bg-[#a8711a] hover:bg-[#8f5f14]",
}

const accentRule: Record<SolutionAccent, string> = {
  green: "bg-[#0d6b47]",
  teal: "bg-[#0f766e]",
  violet: "bg-[#6b4fcf]",
  blue: "bg-[#174783]",
  coral: "bg-[#c24f32]",
  gold: "bg-[#a8711a]",
}

const companyAccent = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

export const solutionHeroVisuals: Record<SolutionId, string> = {
  "product-engineering": rembehImg,
  "cloud-infrastructure": siteImages.infrastructure,
  "ai-data": siteImages.venture,
  cybersecurity: siteImages.studio,
  "experience-design": productImg,
  "venture-building": carmieImg,
}

const workVisuals: Record<EngineeringWorkItem["visual"], string> = {
  rembeh: rembehImg,
  carmie: carmieImg,
  enterprise: productImg,
  cloud: siteImages.infrastructure,
  data: siteImages.venture,
  security: siteImages.studio,
  design: productImg,
  venture: carmieImg,
}

interface SolutionDetailPageProps {
  page: SolutionDetailContent
}

function SolutionHero({
  page,
  accent,
  heroImage,
}: {
  page: SolutionDetailContent
  accent: SolutionAccent
  heroImage: string
}) {
  const visual = page.visual

  // Engineering — solid type plane + photo half (magazine)
  if (visual === "engineering") {
    return (
      <section className="border-b border-black/10 pt-[88px]">
        <div className="grid min-h-[580px] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#f8f2e9] px-8 py-14 md:px-12 xl:px-16">
            <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${accentText[accent]}`}>
              {page.solution.title}
            </p>
            <h1 className="mt-6 max-w-[460px] font-display text-[3.2rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#16110f] md:text-[3.9rem]">
              {page.lead}
            </h1>
            <p className="mt-6 max-w-[400px] text-[0.92rem] leading-[1.6] text-[#2c2824]">
              {page.summary}
            </p>
            <a
              href="/company/contact"
              className={`mt-8 inline-flex h-10 w-fit items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${accentBg[accent]}`}
            >
              {page.primaryActionLabel}
            </a>
          </div>
          <div className="relative min-h-[280px] lg:min-h-full">
            <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>
    )
  }

  // Cloud — photo banner on top, then solid content block (stacked, no overlay)
  if (visual === "cloud") {
    return (
      <section className="border-b border-black/10 pt-[88px]">
        <div className="relative h-[240px] md:h-[300px]">
          <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover object-[50%_40%]" />
        </div>
        <div className="bg-[#f8f2e9] px-8 py-12 md:px-12 xl:px-[72px]">
          <div className="mx-auto max-w-[1500px]">
            <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${accentText[accent]}`}>
              {page.solution.title}
            </p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
              <h1 className="max-w-[520px] font-display text-[3rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#16110f] md:text-[3.6rem]">
                {page.lead}
              </h1>
              <div>
                <p className="max-w-[400px] text-[0.9rem] leading-[1.6] text-[#2c2824]">
                  {page.summary}
                </p>
                <a
                  href="/company/contact"
                  className={`mt-6 inline-flex h-10 items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${accentBg[accent]}`}
                >
                  {page.primaryActionLabel}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  // AI — centered editorial over darkened image
  if (visual === "ai") {
    return (
      <section className="relative isolate min-h-[620px] overflow-hidden border-b border-black/10 pt-[88px]">
        <img src={heroImage} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#111414]/78" />
        <div className="mx-auto flex min-h-[532px] max-w-[720px] flex-col items-center justify-center px-8 py-20 text-center text-white">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.28em] text-[#c4b5fd]">
            {page.solution.title}
          </p>
          <h1 className="mt-8 font-display text-[3.2rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[4rem]">
            {page.lead}
          </h1>
          <p className="mt-6 max-w-[460px] text-[0.95rem] leading-[1.65] text-white/75">
            {page.summary}
          </p>
          <a
            href="/company/contact"
            className="mt-10 inline-flex h-10 items-center border border-white/40 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white hover:text-[#111414]"
          >
            {page.primaryActionLabel}
          </a>
        </div>
      </section>
    )
  }

  // Security — dark, left-aligned, technical
  if (visual === "security") {
    return (
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#0c1218] pt-[88px] text-white">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-y-0 right-0 -z-10 hidden w-[48%] object-cover opacity-35 lg:block"
        />
        <div className="mx-auto max-w-[1500px] px-8 py-20 md:px-12 xl:px-[72px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.24em] text-[#6ea0d4]">
            {page.solution.title}
          </p>
          <h1 className="mt-8 max-w-[640px] font-display text-[3.3rem] font-semibold leading-[1.02] tracking-[-0.03em] md:text-[4.2rem]">
            {page.lead}
          </h1>
          <p className="mt-6 max-w-[440px] text-[0.92rem] leading-[1.65] text-white/70">
            {page.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-8 text-[0.72rem] uppercase tracking-[0.14em] text-white/45">
            <span>Secure architecture</span>
            <span>Identity</span>
            <span>Monitoring</span>
            <span>Resilience</span>
          </div>
          <a
            href="/company/contact"
            className={`mt-10 inline-flex h-10 items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${accentBg.blue}`}
          >
            {page.primaryActionLabel}
          </a>
        </div>
      </section>
    )
  }

  // Fallback — still avoid the old left-veil formula
  return (
    <section className="border-b border-black/10 bg-[#f8f2e9] pt-[88px]">
      <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
        <p className={`font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] ${accentText[accent]}`}>
          {page.solution.title}
        </p>
        <h1 className="mt-6 max-w-[640px] font-display text-[3.4rem] font-semibold leading-[1.02] tracking-[-0.03em] text-[#16110f] md:text-[4.2rem]">
          {page.lead}
        </h1>
        <p className="mt-6 max-w-[460px] text-[0.92rem] leading-[1.6] text-[#2c2824]">
          {page.summary}
        </p>
        <a
          href="/company/contact"
          className={`mt-8 inline-flex h-10 items-center px-5 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white ${accentBg[accent]}`}
        >
          {page.primaryActionLabel}
        </a>
      </div>
    </section>
  )
}

export function SolutionDetailPage({ page }: SolutionDetailPageProps) {
  const accent = page.themeAccent ?? page.solution.accent
  const [processActive, setProcessActive] = useState(0)
  const [specialistActive, setSpecialistActive] = useState(0)
  const heroImage = solutionHeroVisuals[page.solution.id] ?? travelImg
  const skipDarkSignal = page.visual === "ai" || page.visual === "security"

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <SolutionHero page={page} accent={accent} heroImage={heroImage} />

      {/* Signal — skip when hero already set a dark/atmospheric tone */}
      {!skipDarkSignal && (
      <section className="bg-[#111414] text-white">
        <div className="mx-auto grid w-full max-w-[1500px] px-8 py-11 md:grid-cols-4 md:px-12 xl:px-[72px]">
          {[
            { value: page.solution.number, label: "Solution area", detail: `of ${page.solution.total}` },
            { value: String(page.capabilities.length).padStart(2, "0"), label: "Capability lanes", detail: "in this discipline" },
            { value: String(page.systemSpecialists.length).padStart(2, "0"), label: "Specialist companies", detail: "can deliver this" },
            { value: "Engage", label: page.solution.discipline.split(".")[0], detail: "or assemble with others" },
          ].map((signal, index) => (
            <div
              key={signal.label}
              className={`min-h-[100px] py-4 md:px-8 ${
                index === 0 ? "md:pl-0" : "border-t border-white/12 md:border-l md:border-t-0"
              }`}
            >
              {index === 0 && (
                <p className="mb-5 font-display-sans text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#a1742e]">
                  01 / This solution
                </p>
              )}
              <p className={`font-display text-[1.85rem] font-semibold leading-none ${accentText[accent]}`}>
                {signal.value}
              </p>
              <p className="mt-3 text-[0.86rem] text-white/88">{signal.label}</p>
              <p className="mt-1 text-[0.72rem] text-white/55">{signal.detail}</p>
            </div>
          ))}
        </div>
      </section>
      )}

      {/* Capabilities */}
      <section id="capabilities" className="border-b border-black/10 bg-[#fbf8f1]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            02 / {page.capabilityLabel}
          </p>
          <h2 className="mt-4 max-w-[520px] font-display text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f] md:text-[2.7rem]">
            Capabilities clients engage in this area.
          </h2>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.map((capability, index) => (
              <article
                key={capability.id}
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
                  {capability.title}
                </h3>
                <div className={`mt-3 h-px w-6 origin-left transition-transform duration-300 group-hover:scale-x-150 ${accentRule[accent]}`} />
                <p className="mt-3 max-w-[250px] text-[0.78rem] leading-[1.5] text-[#161616]/58">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid w-full max-w-[1500px] px-8 py-14 md:grid-cols-[280px_1fr] md:px-12 md:py-16 xl:px-[72px]">
          <div className="pr-6">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              03 / Process
            </p>
            <h2 className="mt-4 font-display text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
              {page.processLabel}
            </h2>
          </div>

          <div className="relative mt-10 md:mt-1" onMouseLeave={() => setProcessActive(0)}>
            <div className="pointer-events-none absolute left-0 right-0 top-[18px] hidden h-px bg-black/12 md:block" aria-hidden>
              <div
                className={`h-full origin-left transition-[width] duration-500 ease-out ${accentRule[accent]}`}
                style={{
                  width: `${(processActive / Math.max(page.process.length - 1, 1)) * 100}%`,
                }}
              />
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6">
              {page.process.map((step, index) => {
                const isActive = processActive === index
                const isPassed = index <= processActive
                return (
                  <button
                    key={step.id}
                    type="button"
                    onMouseEnter={() => setProcessActive(index)}
                    onFocus={() => setProcessActive(index)}
                    className={`relative min-h-[150px] border-t border-black/12 py-4 text-left transition-opacity duration-300 md:border-l md:border-t-0 md:px-4 ${
                      index === 0 ? "md:border-l-0 md:pl-0" : ""
                    } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  >
                    <span
                      className={`block h-2.5 w-2.5 rounded-full border transition-colors ${
                        isPassed ? `${accentRule[accent]} border-transparent` : "border-black/25 bg-transparent"
                      }`}
                    />
                    <p className={`mt-5 font-display-sans text-[0.58rem] font-black ${accentText[accent]}`}>
                      {step.number}
                    </p>
                    <h3 className="mt-1 font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.08em] text-[#161616]">
                      {step.title}
                    </h3>
                    <p className={`mt-2 text-[0.64rem] leading-[1.45] ${isActive ? "text-[#161616]/72" : "text-[#161616]/42"}`}>
                      {step.description}
                    </p>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture layers */}
      {page.architectureLayers.length > 0 && (
        <section className="border-b border-black/10 bg-[#fbf8f1]">
          <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              04 / {page.architectureLabel}
            </p>
            <h2 className="mt-4 max-w-[520px] font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
              How the solution is structured.
            </h2>

            <div className="mt-10 grid gap-0 border-t border-black/10 md:grid-cols-2 lg:grid-cols-3">
              {page.architectureLayers.map((layer, index) => (
                <article
                  key={layer.id}
                  className={`border-b border-black/10 py-7 md:px-6 ${
                    index % 2 === 1 ? "md:border-l" : ""
                  } ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"}`}
                >
                  <p className={`font-display text-[1.25rem] font-semibold ${accentText[layer.accent ?? accent]}`}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#161616]">
                    {layer.title}
                  </h3>
                  {layer.description && (
                    <p className="mt-3 max-w-[260px] text-[0.76rem] leading-[1.5] text-[#161616]/58">
                      {layer.description}
                    </p>
                  )}
                  {layer.details && (
                    <p className="mt-3 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.1em] text-[#9a6d23]">
                      {layer.details.join(" · ")}
                    </p>
                  )}
                </article>
              ))}
            </div>

            {page.architectureNotes && page.architectureNotes.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6">
                {page.architectureNotes.map((note) => (
                  <p key={note} className="text-[0.78rem] text-[#161616]/62">
                    <span className="mr-2 text-[#9a6d23]">—</span>
                    {note}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Secondary / use cases */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            05 / {page.secondaryLabel}
          </p>
          <div className="mt-8 grid border-t border-black/10 md:grid-cols-2 lg:grid-cols-4">
            {page.secondaryItems.map((item, index) => (
              <article
                key={item.id}
                className={`group py-7 md:px-6 ${
                  index === 0 ? "md:pl-0" : "border-t border-black/10 md:border-l md:border-t-0"
                }`}
              >
                <h3 className="font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                  {item.title}
                </h3>
                <div className={`mt-3 h-px w-6 origin-left transition-transform duration-300 group-hover:scale-x-150 ${accentRule[item.accent ?? accent]}`} />
                <p className="mt-3 max-w-[200px] text-[0.74rem] leading-[1.5] text-[#161616]/55">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      {page.work.length > 0 && (
        <section className="border-b border-black/10 bg-[#fbf8f1]">
          <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              06 / {page.workLabel}
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
              Evidence from real delivery.
            </h2>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.work.map((item) => (
                <a
                  key={item.id}
                  href={`/work/${item.id}`}
                  className="group flex min-h-[340px] flex-col overflow-hidden border border-black/10 bg-[#f9f5ed]"
                >
                  <div className="relative h-[170px] shrink-0 overflow-hidden">
                    <img
                      src={workVisuals[item.visual]}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col justify-between p-7">
                    <div>
                      <p className={`font-display text-[1.55rem] font-semibold uppercase tracking-[0.04em] ${accentText[item.accent]}`}>
                        {item.title}
                      </p>
                      <p className="mt-1 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-[#161616]/55">
                        {item.category}
                      </p>
                      <p className="mt-3 max-w-[280px] text-[0.82rem] leading-[1.55] text-[#2c2824]">
                        {item.description}
                      </p>
                    </div>
                    <span className={`mt-6 inline-flex items-center gap-4 text-[0.74rem] font-semibold ${accentText[item.accent]}`}>
                      View work
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Delivered by specialists — elevated */}
      <section id="specialists" className="border-b border-black/10 bg-[#111414] text-white">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-[560px]">
              <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
                07 / {page.systemLabel}
              </p>
              <h2 className="mt-4 font-display text-[2.35rem] font-semibold leading-[1.05] tracking-[-0.02em] md:text-[2.8rem]">
                Delivered by specialists.
                <br />
                Integrated by ANTIKRA.
              </h2>
              <p className="mt-5 max-w-[420px] text-[0.88rem] leading-[1.58] text-white/58">
                {page.systemDescription}
              </p>
            </div>
            <a
              href="/companies"
              className="group inline-flex items-center gap-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#a97b32]"
            >
              Explore all companies
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <div
            className="relative mt-12"
            onMouseLeave={() => setSpecialistActive(0)}
          >
            <div className="pointer-events-none absolute left-0 right-0 top-[22px] hidden h-px bg-white/12 md:block" aria-hidden>
              <div
                className="h-full origin-left bg-[#a97b32] transition-[width] duration-500 ease-out"
                style={{
                  width: `${(specialistActive / Math.max(page.systemSpecialists.length - 1, 1)) * 100}%`,
                }}
              />
            </div>

            <div className="grid gap-0 md:grid-cols-3 lg:grid-cols-6">
              {page.systemSpecialists.map((card, index) => {
                const isActive = specialistActive === index
                const isPassed = index <= specialistActive
                return (
                  <a
                    key={card.id}
                    href={`/companies/${card.id}`}
                    onMouseEnter={() => setSpecialistActive(index)}
                    onFocus={() => setSpecialistActive(index)}
                    className={`relative min-h-[180px] border-t border-white/12 py-6 transition-opacity duration-300 md:border-l md:border-t-0 md:px-5 ${
                      index === 0 ? "md:border-l-0 md:pl-0" : ""
                    } ${isActive ? "opacity-100" : "opacity-45 hover:opacity-80"}`}
                  >
                    <span
                      className={`block h-2.5 w-2.5 rounded-full border transition-colors ${
                        isPassed ? "border-[#a97b32] bg-[#a97b32]" : "border-white/30 bg-transparent"
                      }`}
                    />
                    <p className={`mt-6 font-display text-[1.45rem] font-semibold ${companyAccent[card.accent]}`}>
                      {card.name}
                    </p>
                    <p className="mt-2 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.14em] text-white/45">
                      {card.discipline}
                    </p>
                    <p className={`mt-3 max-w-[150px] text-[0.76rem] leading-[1.45] ${isActive ? "text-white/88" : "text-white/60"}`}>
                      {card.description}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-3 text-[0.68rem] font-semibold text-[#a97b32]">
                      Open company
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
          <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
            08 / {page.principlesLabel}
          </p>
          <div className="mt-8 grid border-t border-black/10 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {page.principles.map((principle, index) => (
              <article
                key={principle.id}
                className={`group py-7 md:px-4 ${
                  index === 0 ? "md:pl-0" : "border-t border-black/10 md:border-l md:border-t-0"
                }`}
              >
                <p className={`font-display text-[1.15rem] font-semibold ${accentText[accent]}`}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                  {principle.title}
                </h3>
                <p className="mt-2 max-w-[150px] text-[0.68rem] leading-[1.45] text-[#161616]/55">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + next */}
      <section className="border-b border-black/10 bg-[#f8f2e9]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-8 py-12 md:grid-cols-[1.2fr_1fr] md:px-12 md:py-14 xl:px-[72px]">
          <div>
            <h2 className="font-display text-[2.3rem] font-semibold leading-[1.02] tracking-[-0.02em] text-[#15110f] md:text-[2.7rem]">
              {page.cta.title}
            </h2>
            <p className="mt-4 max-w-[420px] text-[0.86rem] leading-[1.58] text-[#151515]/62">
              {page.cta.description}
            </p>
            <a
              href="/company/contact"
              className={`group mt-7 inline-flex h-10 items-center gap-5 px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.04em] text-white ${accentBg[accent]}`}
            >
              {page.cta.buttonLabel}
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>

          <a
            href={page.next.href}
            className="group flex flex-col justify-between border-t border-black/12 pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          >
            <div>
              <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#9a6d23]">
                Next solution · {page.next.number} / {page.next.total}
              </p>
              <p className="mt-3 font-display text-[1.9rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#15110f]">
                {page.next.title}
              </p>
              <p className="mt-2 text-[0.82rem] leading-[1.5] text-[#161616]/58">
                {page.next.discipline}
              </p>
            </div>
            <span className={`mt-6 inline-flex items-center gap-4 text-[0.76rem] font-semibold ${accentText[page.next.accent]}`}>
              Explore solution
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}
