import { Logo } from "../ui"

interface AntikraSystemVisualProps {
  className?: string
  compact?: boolean
}

const labels = [
  {
    id: "mechanism",
    name: "Mechanism",
    detail: "Product\nEngineering",
    className: "left-[12%] top-[14%] text-left",
  },
  {
    id: "cosmos",
    name: "Cosmos",
    detail: "Cloud &\nInfrastructure",
    className: "right-[7%] top-[15%] text-left",
  },
  {
    id: "orrery",
    name: "Orrery",
    detail: "AI & Data",
    className: "left-[5%] top-[46%] text-left",
  },
  {
    id: "astra",
    name: "Astra",
    detail: "Cybersecurity",
    className: "right-[5%] top-[46%] text-left",
  },
  {
    id: "helios",
    name: "Helios",
    detail: "Experience\n& Design",
    className: "left-[12%] bottom-[12%] text-left",
  },
  {
    id: "olympia",
    name: "Olympia",
    detail: "Ventures",
    className: "right-[7%] bottom-[15%] text-left",
  },
]

function SmallMark() {
  return (
    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand/45 text-brand">
      <Logo variant="mark" size="sm" className="scale-[0.58]" />
    </span>
  )
}

export function AntikraSystemVisual({ className = "", compact = false }: AntikraSystemVisualProps) {
  return (
    <div
      className={`relative mx-auto aspect-[1.62/1] w-full max-w-[860px] overflow-visible text-brand ${className}`}
      aria-label="ANTIKRA system diagram"
    >
      <svg
        viewBox="0 0 860 530"
        className="absolute inset-0 h-full w-full overflow-visible"
        fill="none"
        role="img"
      >
        <defs>
          <radialGradient id="systemGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#c58a32" stopOpacity="0.18" />
            <stop offset="55%" stopColor="#c58a32" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#c58a32" stopOpacity="0" />
          </radialGradient>
          <pattern id="fineGrid" width="38" height="38" patternUnits="userSpaceOnUse">
            <path d="M 38 0 L 0 0 0 38" stroke="#c58a32" strokeOpacity="0.08" strokeWidth="1" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="860" height="530" fill="url(#systemGlow)" />
        <rect x="80" y="20" width="700" height="480" fill="url(#fineGrid)" opacity="0.45" />

        <g opacity="0.16" stroke="#c58a32">
          <path d="M75 265h710" strokeDasharray="3 8" />
          <path d="M430 22v486" strokeDasharray="3 8" />
          <path d="M82 95c120 80 168 249 60 344" />
          <path d="M778 95c-120 80-168 249-60 344" />
          <path d="M214 56c126-45 300-47 432 2" />
          <path d="M206 476c136 45 311 42 452-4" />
        </g>

        <g transform="translate(430 265)" stroke="#b37217" strokeLinecap="round">
          {[218, 198, 174, 146, 116, 88, 62].map((radius, index) => (
            <circle
              key={radius}
              r={radius}
              strokeWidth={index < 2 ? 1.25 : 0.9}
              strokeOpacity={index < 2 ? 0.42 : 0.25}
              strokeDasharray={index % 2 === 0 ? "none" : "7 8"}
            />
          ))}

          {Array.from({ length: 36 }).map((_, index) => {
            const angle = (index * Math.PI * 2) / 36
            const outer = index % 3 === 0 ? 230 : 218
            const inner = index % 3 === 0 ? 205 : 211
            return (
              <line
                key={index}
                x1={Math.cos(angle) * inner}
                y1={Math.sin(angle) * inner}
                x2={Math.cos(angle) * outer}
                y2={Math.sin(angle) * outer}
                strokeOpacity={index % 3 === 0 ? 0.38 : 0.2}
                strokeWidth={index % 3 === 0 ? 1.2 : 0.7}
              />
            )
          })}

          {Array.from({ length: 12 }).map((_, index) => {
            const angle = (index * Math.PI * 2) / 12 - Math.PI / 2
            const x1 = Math.cos(angle) * 70
            const y1 = Math.sin(angle) * 70
            const x2 = Math.cos(angle) * 190
            const y2 = Math.sin(angle) * 190
            const nx = Math.cos(angle) * 126
            const ny = Math.sin(angle) * 126
            return (
              <g key={index}>
                <line x1={x1} y1={y1} x2={x2} y2={y2} strokeWidth="2" strokeOpacity="0.44" />
                <circle cx={nx} cy={ny} r="12" fill="#fffdfa" strokeWidth="2" strokeOpacity="0.72" />
                <circle cx={nx} cy={ny} r="6" strokeWidth="1.4" strokeOpacity="0.55" />
              </g>
            )
          })}

          {[
            [-180, -112],
            [178, -111],
            [-180, 0],
            [180, 0],
            [-128, 142],
            [126, 142],
          ].map(([x, y], index) => (
            <g key={index}>
              <circle cx={x} cy={y} r="20" fill="#fffdfa" strokeWidth="2" strokeOpacity="0.68" />
              <circle cx={x} cy={y} r="12" strokeWidth="1.3" strokeOpacity="0.52" />
              <circle cx={x} cy={y} r="4" fill="#b37217" fillOpacity="0.65" />
            </g>
          ))}

          <path
            d="M78 60c25 13 52 21 80 21h44v16h-42c-39 0-70-8-102-27z"
            fill="#c58a32"
            fillOpacity="0.12"
            strokeWidth="2"
            strokeOpacity="0.56"
          />
          <circle r="68" fill="#fffdfa" strokeWidth="1.8" strokeOpacity="0.65" />
          <circle r="47" strokeWidth="1.1" strokeOpacity="0.38" />
          <circle r="30" strokeWidth="0.9" strokeOpacity="0.36" strokeDasharray="4 5" />
        </g>

        <g stroke="#b37217" strokeWidth="1.4" strokeOpacity="0.62">
          <path d="M256 123h48l24 24" />
          <path d="M601 123h-46l-24 24" />
          <path d="M230 265h72" />
          <path d="M630 265h-72" />
          <path d="M263 405h54l24-24" />
          <path d="M596 405h-53l-24-24" />
        </g>
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-brand">
        <Logo variant="mark" size={compact ? "md" : "lg"} className="text-brand" />
        <span className="mt-2 font-display-sans text-[0.78rem] uppercase tracking-[0.34em]">
          ANTIKRA
        </span>
      </div>

      <div className="hidden md:block">
        {labels.map((label) => (
          <div key={label.id} className={`absolute flex items-start gap-3 ${label.className}`}>
            <SmallMark />
            <div className="pt-1">
              <p className="font-display-sans text-[0.72rem] font-bold uppercase tracking-[0.28em] text-brand">
                {label.name}
              </p>
              <p className="mt-2 whitespace-pre-line text-sm leading-snug text-ink/82">
                {label.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
