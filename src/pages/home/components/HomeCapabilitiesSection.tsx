import { ArrowRight } from "lucide-react"
import infrastructureImg from "../../../assets/ecosystem-infrastructure.webp"

const capabilities = [
  {
    number: "01",
    title: "Product Engineering",
    description: "From architecture to deployment, we build digital products that scale.",
    href: "/solutions/product-engineering",
  },
  {
    number: "02",
    title: "Cloud & Infrastructure",
    description: "Reliable, secure and scalable infrastructure for modern applications.",
    href: "/solutions/cloud-infrastructure",
  },
  {
    number: "03",
    title: "AI & Data",
    description: "Turning complex data into intelligence that drives decisions.",
    href: "/solutions/ai-data",
  },
  {
    number: "04",
    title: "Cybersecurity",
    description: "Protecting systems, data and users with security built in.",
    href: "/solutions/cybersecurity",
  },
  {
    number: "05",
    title: "Experience & Design",
    description: "Product strategy, interfaces and systems people can actually use.",
    href: "/solutions/experience-design",
  },
  {
    number: "06",
    title: "Venture Building",
    description: "From opportunity validation through launch and operating scale.",
    href: "/solutions/venture-building",
  },
]

export function HomeCapabilitiesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#101414] text-white">
      <img
        src={infrastructureImg}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30 mix-blend-screen"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#0f1212_0%,rgba(15,18,18,0.92)_42%,rgba(15,18,18,0.88)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-[58%] bg-[radial-gradient(ellipse_at_70%_88%,rgba(37,77,104,0.42),transparent_58%)]" />

      <div className="mx-auto w-full max-w-[1500px] px-8 py-12 md:px-12 md:py-14 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-white/14 pb-8">
          <div className="max-w-[520px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#a97b32]">
              04 / Capabilities
            </p>
            <h2 className="mt-5 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.025em] text-white md:text-[3.05rem]">
              End-to-end capability.
              <br />
              Real-world impact.
            </h2>
          </div>
          <a
            href="/solutions"
            className="group inline-flex items-center gap-4 pb-1 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-white/70 transition-colors hover:text-[#a97b32]"
          >
            View all solutions
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <a
              key={capability.number}
              href={capability.href}
              className={[
                "group relative border-b border-white/12 py-8 md:px-8 lg:px-9",
                index === capabilities.length - 1 ? "border-b-0" : "",
                index % 2 === 1 ? "md:border-l md:border-white/12" : "",
                index >= 2 ? "md:border-t md:border-white/12" : "",
                index % 3 !== 0 ? "lg:border-l lg:border-white/12" : "",
                index >= 3 ? "lg:border-t lg:border-white/12" : "",
                // Reset 2-col top/left rules that fight the 3-col grid
                index % 3 === 0 ? "lg:border-l-0" : "",
                index === 2 ? "lg:border-t-0" : "",
              ].join(" ")}
            >
              <span className="absolute inset-y-8 left-0 w-px origin-top scale-y-0 bg-[#a97b32] transition-transform duration-300 group-hover:scale-y-100" />
              <p className="font-display text-[1.45rem] font-semibold text-[#a97b32] transition-transform duration-300 group-hover:translate-x-1">
                {capability.number}
              </p>
              <h3 className="mt-4 font-display-sans text-[0.62rem] font-extrabold uppercase leading-[1.35] tracking-[0.13em] text-white">
                {capability.title}
              </h3>
              <p className="mt-4 max-w-[240px] text-[0.74rem] leading-[1.55] text-white/55 transition-colors group-hover:text-white/72">
                {capability.description}
              </p>
              <span className="mt-7 inline-flex items-center gap-3 text-[0.68rem] font-semibold text-white/45 transition-colors group-hover:text-[#a97b32]">
                Explore
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
