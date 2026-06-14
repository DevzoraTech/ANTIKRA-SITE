export function GearPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="200" cy="200" r="160" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="0.5" opacity="0.25" />
      <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="200" cy="200" r="40" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180
        return (
          <line
            key={i}
            x1={200 + Math.cos(angle) * 40}
            y1={200 + Math.sin(angle) * 40}
            x2={200 + Math.cos(angle) * 160}
            y2={200 + Math.sin(angle) * 160}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.15"
          />
        )
      })}
      <circle cx="200" cy="60" r="30" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
      <circle cx="320" cy="140" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="80" cy="140" r="22" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="280" cy="300" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
      <circle cx="120" cy="300" r="18" stroke="currentColor" strokeWidth="0.5" opacity="0.12" />
    </svg>
  )
}
