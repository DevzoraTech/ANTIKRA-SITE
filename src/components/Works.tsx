import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { SectionLabel } from "./SectionLabel"
import { caseStudies } from "../data/content"

const featured = caseStudies.find((s) => s.featured) ?? caseStudies[0]
const rest = caseStudies.filter((s) => s.id !== featured.id)

function ProjectCard({
  study,
  large = false,
}: {
  study: (typeof caseStudies)[0]
  large?: boolean
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45 }}
      className={`group relative overflow-hidden rounded-2xl bg-night ${
        large ? "min-h-[420px] lg:min-h-[480px]" : "min-h-[320px]"
      }`}
    >
      <img
        src={study.image}
        alt={study.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        decoding="async"
      />
      <div className="image-overlay absolute inset-0" />
      <div className="absolute inset-0 bg-aegean/10 mix-blend-multiply opacity-40" />

      <div className="relative flex h-full flex-col justify-end p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {study.category}
          </span>
          <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-sm">
            {study.brand}
          </span>
        </div>

        <h3
          className={`mt-4 font-display font-semibold text-white ${
            large ? "text-2xl md:text-3xl" : "text-xl"
          }`}
        >
          {study.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-white/75 ${
            large ? "max-w-xl text-base" : "text-sm line-clamp-2"
          }`}
        >
          {study.description}
        </p>

        <a
          href="#"
          className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand-light transition-colors hover:text-white"
        >
          View case study
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  )
}

export function Works() {
  return (
    <section id="works" className="section-padding bg-parchment">
      <div className="container-wide">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="font-display text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] font-semibold text-ink">
              Projects across <span className="text-brand">the group</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              Example project directions for ANTIKRA brands, working alone or
              in concert across software, cloud, AI, security, design, and
              venture creation.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-wider text-aegean hover:text-aegean-light"
          >
            All projects
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 space-y-6">
          <ProjectCard study={featured} large />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {rest.map((study) => (
              <ProjectCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
