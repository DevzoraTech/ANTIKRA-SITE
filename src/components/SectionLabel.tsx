interface SectionLabelProps {
  children: string
  tone?: "light" | "dark"
}

export function SectionLabel({ children, tone = "light" }: SectionLabelProps) {
  return (
    <div className="mb-4 flex items-center gap-2.5">
      <svg
        className="h-3 w-3 text-brand"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
        <circle cx="6" cy="6" r="1.5" fill="currentColor" />
      </svg>
      <span
        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
          tone === "dark" ? "text-white/60" : "text-muted"
        }`}
      >
        {children}
      </span>
    </div>
  )
}
