interface LogoProps {
  className?: string
  variant?: "full" | "mark" | "wordmark"
  animated?: boolean
  size?: "sm" | "md" | "lg" | "xl"
}

const sizeMap = {
  sm: { mark: 32, word: "text-base" },
  md: { mark: 40, word: "text-lg" },
  lg: { mark: 56, word: "text-xl" },
  xl: { mark: 80, word: "text-2xl" },
}

const SPOKES = [0, 45, 90, 135, 180, 225, 270, 315]
const TICKS = 12

function AntikytheraMark({ animated }: { animated: boolean }) {
  const c = 20

  const spokes = SPOKES.map((angle) => {
    const rad = (angle * Math.PI) / 180
    return (
      <line
        key={angle}
        x1={c + Math.cos(rad) * 6.5}
        y1={c + Math.sin(rad) * 6.5}
        x2={c + Math.cos(rad) * 17}
        y2={c + Math.sin(rad) * 17}
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    )
  })

  const ticks = Array.from({ length: TICKS }).map((_, i) => {
    const rad = ((i * 360) / TICKS) * (Math.PI / 180)
    const inner = i % 3 === 0 ? 15.5 : 16.2
    return (
      <line
        key={i}
        x1={c + Math.cos(rad) * inner}
        y1={c + Math.sin(rad) * inner}
        x2={c + Math.cos(rad) * 17.8}
        y2={c + Math.sin(rad) * 17.8}
        stroke="currentColor"
        strokeWidth={i % 3 === 0 ? 1.1 : 0.7}
        strokeLinecap="round"
        opacity={0.75}
      />
    )
  })

  const dialFace = (
    <>
      <circle
        cx={c}
        cy={c}
        r={18}
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx={c}
        cy={c}
        r={13}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity={0.55}
      />
      <circle
        cx={c}
        cy={c}
        r={8.5}
        stroke="currentColor"
        strokeWidth="0.8"
        fill="none"
        opacity={0.35}
      />
      {spokes}
      <circle cx={c} cy={c} r={4.5} fill="currentColor" />
      <circle cx={c} cy={c} r={1.6} fill="white" opacity={0.92} />
    </>
  )

  const outerRing = (
    <g opacity={0.85}>
      <circle
        cx={c}
        cy={c}
        r={17.8}
        stroke="currentColor"
        strokeWidth="0.6"
        fill="none"
        opacity={0.4}
      />
      {ticks}
    </g>
  )

  const crosshairs = (
    <g opacity={0.18}>
      <line x1={c} y1={3} x2={c} y2={37} stroke="currentColor" strokeWidth="0.6" />
      <line x1={3} y1={c} x2={37} y2={c} stroke="currentColor" strokeWidth="0.6" />
      <line x1={6.5} y1={6.5} x2={33.5} y2={33.5} stroke="currentColor" strokeWidth="0.5" />
      <line x1={33.5} y1={6.5} x2={6.5} y2={33.5} stroke="currentColor" strokeWidth="0.5" />
    </g>
  )

  const subDials = (
    <g opacity={0.5}>
      <circle cx={c} cy={7.5} r={2.8} stroke="currentColor" strokeWidth="0.8" fill="none" />
      <circle cx={30.5} cy={12} r={2} stroke="currentColor" strokeWidth="0.7" fill="none" />
      <circle cx={9.5} cy={12} r={2} stroke="currentColor" strokeWidth="0.7" fill="none" />
    </g>
  )

  return (
    <>
      {crosshairs}
      {subDials}
      {dialFace}
      <g
        style={
          animated
            ? {
                transformOrigin: "20px 20px",
                animation: "logo-gear-cw 36s linear infinite",
              }
            : undefined
        }
      >
        {outerRing}
      </g>
      {animated && (
        <g
          style={{
            transformOrigin: "20px 20px",
            animation: "logo-gear-ccw 48s linear infinite",
          }}
        >
          <circle
            cx={c}
            cy={c}
            r={11}
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            opacity={0.25}
            strokeDasharray="2 4"
          />
        </g>
      )}
    </>
  )
}

function MarkSvg({ size, animated }: { size: number; animated: boolean }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="shrink-0"
    >
      <AntikytheraMark animated={animated} />
    </svg>
  )
}

function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={`font-display-sans font-bold tracking-[0.22em] text-current ${className ?? ""}`}
    >
      ANTI<span className="text-brand">KRA</span>
    </span>
  )
}

export function Logo({
  className = "",
  variant = "full",
  animated = false,
  size = "md",
}: LogoProps) {
  const dims = sizeMap[size]

  if (variant === "mark") {
    return (
      <span className={`inline-flex text-brand ${className}`}>
        <MarkSvg size={dims.mark} animated={animated} />
      </span>
    )
  }

  if (variant === "wordmark") {
    return (
      <span className={`inline-flex ${className}`} aria-label="ANTIKRA">
        <Wordmark className={dims.word} />
      </span>
    )
  }

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="ANTIKRA"
    >
      <MarkSvg size={dims.mark} animated={animated} />
      <Wordmark className={dims.word} />
    </span>
  )
}
