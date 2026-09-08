import { ArrowRight } from "lucide-react"

export function SitePrimaryCta({
  title = "Have something difficult to build?",
  description = "Tell ANTIKRA what you need. We’ll connect you with the right part of the group.",
  buttonLabel = "Start a conversation",
  href = "/company/contact",
}: {
  title?: string
  description?: string
  buttonLabel?: string
  href?: string
}) {
  return (
    <section className="border-b border-black/10 bg-[#111414] text-white">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-8 py-16 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
        <div className="max-w-[520px]">
          <h2 className="font-display text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.02em]">
            {title}
          </h2>
          <p className="mt-4 text-[0.92rem] leading-[1.55] text-white/70">{description}</p>
        </div>
        <a
          href={href}
          className="group inline-flex h-11 w-fit items-center gap-3 bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] transition-colors hover:bg-[#8f5f14]"
        >
          {buttonLabel}
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  )
}
