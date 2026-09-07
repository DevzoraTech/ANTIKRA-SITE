import {
  ArrowRight,
  BarChart3,
  Bolt,
  Bot,
  Box,
  BrainCircuit,
  Briefcase,
  Building2,
  CheckSquare,
  CircleCheck,
  Cloud,
  CloudUpload,
  Code2,
  Compass,
  Cpu,
  Database,
  DatabaseZap,
  Eye,
  FileText,
  GitBranch,
  Handshake,
  Heart,
  Infinity,
  KeyRound,
  Layers,
  LayoutGrid,
  LockKeyhole,
  Monitor,
  Network,
  Palette,
  PenTool,
  Puzzle,
  Radar,
  RefreshCw,
  Rocket,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrendingUp,
  User,
  Users,
} from "lucide-react"
import type { CompanyAccent, CompanyPageContent, CompanyWorkVisual } from "../../../../domain/antikra"
import { Logo } from "../../../../shared/ui"
import { siteImages } from "../../../../shared/assets/images"

export const accentStyles: Record<
  CompanyAccent,
  {
    text: string
    border: string
    bg: string
    button: string
    pale: string
    stroke: string
    fill: string
  }
> = {
  bronze: {
    text: "text-brand",
    border: "border-brand",
    bg: "bg-brand",
    button: "bg-brand text-white hover:bg-brand-dark",
    pale: "bg-[#fbf4ea]",
    stroke: "#b37217",
    fill: "#c58a32",
  },
  green: {
    text: "text-[#08784c]",
    border: "border-[#08784c]",
    bg: "bg-[#08784c]",
    button: "bg-[#08784c] text-white hover:bg-[#06643f]",
    pale: "bg-[#f0faf4]",
    stroke: "#08784c",
    fill: "#0b7f51",
  },
  violet: {
    text: "text-[#7653df]",
    border: "border-[#7653df]",
    bg: "bg-[#7653df]",
    button: "bg-[#7653df] text-white hover:bg-[#6240c5]",
    pale: "bg-[#f5f2ff]",
    stroke: "#7653df",
    fill: "#7653df",
  },
  blue: {
    text: "text-[#1b67c9]",
    border: "border-[#1b67c9]",
    bg: "bg-[#1b67c9]",
    button: "bg-[#1b67c9] text-white hover:bg-[#1455a8]",
    pale: "bg-[#f1f6ff]",
    stroke: "#1b67c9",
    fill: "#1b67c9",
  },
  coral: {
    text: "text-[#ff4e2d]",
    border: "border-[#ff4e2d]",
    bg: "bg-[#ff4e2d]",
    button: "bg-[#ff4e2d] text-white hover:bg-[#df3a1e]",
    pale: "bg-[#fff3ef]",
    stroke: "#ff4e2d",
    fill: "#ff4e2d",
  },
  gold: {
    text: "text-[#b37217]",
    border: "border-[#b37217]",
    bg: "bg-[#b37217]",
    button: "bg-[#b37217] text-white hover:bg-[#91590d]",
    pale: "bg-[#fbf4ea]",
    stroke: "#b37217",
    fill: "#b37217",
  },
}

const iconMap = {
  radar: Radar,
  network: GitBranch,
  screen: Monitor,
  phone: Smartphone,
  briefcase: Briefcase,
  database: Database,
  databaseZap: DatabaseZap,
  nodes: GitBranch,
  networkNodes: Network,
  cloud: Cloud,
  cloudUpload: CloudUpload,
  infinity: Infinity,
  rocket: Rocket,
  chart: BarChart3,
  user: User,
  box: Box,
  pencil: PenTool,
  growth: TrendingUp,
  search: Search,
  shield: Shield,
  shieldCheck: ShieldCheck,
  code: Code2,
  lock: LockKeyhole,
  key: KeyRound,
  eye: Eye,
  grid: LayoutGrid,
  layers: Layers,
  palette: Palette,
  users: Users,
  heart: Heart,
  building: Building2,
  compass: Compass,
  check: CheckSquare,
  circleCheck: CircleCheck,
  file: FileText,
  bolt: Bolt,
  bot: Bot,
  brainCircuit: BrainCircuit,
  sparkles: Sparkles,
  puzzle: Puzzle,
  refresh: RefreshCw,
  server: Server,
  cpu: Cpu,
  handshake: Handshake,
}

export function DetailIcon({
  icon,
  accent,
  framed = false,
}: {
  icon: string
  accent: CompanyAccent
  framed?: boolean
}) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Box
  const styles = accentStyles[accent]

  if (!framed) {
    return <Icon className={`h-7 w-7 ${styles.text}`} strokeWidth={1.25} />
  }

  return (
    <span className={`flex h-14 w-14 items-center justify-center rounded-full border ${styles.border} ${styles.text}`}>
      <Icon className="h-7 w-7" strokeWidth={1.15} />
    </span>
  )
}

export function SectionKicker({ children, accent }: { children: string; accent: CompanyAccent }) {
  return (
    <p className={`font-display-sans text-[0.68rem] font-bold uppercase tracking-[0.4em] ${accentStyles[accent].text}`}>
      {children}
    </p>
  )
}

function IsometricPlatform({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const isCosmos = page.visualKind === "cosmos"
  const stroke = styles.stroke
  const fill = styles.fill

  return (
    <div className="relative mx-auto aspect-[1.7/1] w-full max-w-[720px]">
      <svg viewBox="0 0 760 450" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <linearGradient id={`${page.id}-block`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={fill} stopOpacity={isCosmos ? 0.1 : 0.86} />
            <stop offset="1" stopColor={fill} stopOpacity={isCosmos ? 0.34 : 0.48} />
          </linearGradient>
          <pattern id={`${page.id}-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 0 0 0 34" stroke={stroke} strokeOpacity="0.11" />
          </pattern>
        </defs>
        <rect x="40" y="20" width="680" height="390" fill={`url(#${page.id}-grid)`} opacity="0.72" />
        <g stroke={stroke} strokeOpacity="0.28">
          <path d="M80 290 380 110 680 290 380 420z" />
          <path d="M130 265 380 116 630 265 380 374z" />
          <path d="M180 240 380 124 580 240 380 330z" />
          <path d="M380 70v350" strokeDasharray="5 8" />
          <path d="M80 290h600" strokeDasharray="5 8" />
        </g>
        {[0, 1, 2, 3].map((index) => {
          const x = [154, 282, 476, 594][index]
          const y = [266, 332, 330, 265][index]
          return (
            <g key={index}>
              <path d={`M${x} ${y}l54-28 54 28-54 28z`} fill="#fffdfa" stroke={stroke} strokeOpacity="0.48" />
              <path d={`M${x + 54} ${y + 28}v34l-54-28v-34`} stroke={stroke} strokeOpacity="0.34" />
              <path d={`M${x + 54} ${y + 28}v34l54-28v-34`} stroke={stroke} strokeOpacity="0.34" />
              <circle cx={x + 54} cy={y + 20} r="13" fill={fill} fillOpacity={isCosmos ? 0.22 : 0.28} />
              {isCosmos ? (
                <Cloud x={x + 44} y={y + 10} width="20" height="20" color={stroke} strokeWidth={1.4} />
              ) : (
                <Box x={x + 44} y={y + 10} width="20" height="20" color={stroke} strokeWidth={1.4} />
              )}
            </g>
          )
        })}
        <g>
          <path d="M308 165 380 126l72 39-72 39z" fill={`url(#${page.id}-block)`} stroke={stroke} strokeOpacity="0.72" />
          <path d="M308 165v58l72 40v-59z" fill={fill} fillOpacity={isCosmos ? 0.1 : 0.28} stroke={stroke} strokeOpacity="0.5" />
          <path d="M452 165v58l-72 40v-59z" fill={fill} fillOpacity={isCosmos ? 0.18 : 0.4} stroke={stroke} strokeOpacity="0.5" />
          <path d="M328 165 380 137l52 28-52 28z" fill="#fffdfa" fillOpacity={isCosmos ? 0.55 : 0.18} stroke={stroke} strokeOpacity="0.52" />
          <foreignObject x="352" y="145" width="56" height="56">
            <Logo variant="mark" size="lg" className={styles.text} />
          </foreignObject>
        </g>
        {Array.from({ length: 48 }).map((_, index) => {
          const x = 78 + ((index * 67) % 612)
          const y = 78 + ((index * 43) % 285)
          return <circle key={index} cx={x} cy={y} r="1.7" fill={stroke} fillOpacity={index % 3 === 0 ? 0.55 : 0.22} />
        })}
        {[150, 610, 190, 580].map((x, index) => (
          <g key={index} transform={`translate(${x} ${index < 2 ? 82 : 132})`}>
            <path d="M0 0h74l18 18v82H0z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.28" />
            <path d="M12 24h44M12 42h58M12 60h38" stroke={stroke} strokeOpacity="0.23" />
          </g>
        ))}
      </svg>

      {page.visualNotes.map((note, index) => (
        <p
          key={note}
          className={`absolute hidden whitespace-pre-line font-display-sans text-[0.56rem] font-medium leading-relaxed ${styles.text} opacity-70 lg:block ${
            index === 0 ? "left-[4%] top-[20%]" : index === 1 ? "right-[1%] top-[23%]" : "right-[1%] bottom-[16%]"
          }`}
        >
          {note}
        </p>
      ))}
    </div>
  )
}

function DataIntelligenceVisual({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const stroke = styles.stroke
  const sources = ["Applications", "Databases", "APIs", "Devices", "Files", "Streams"]
  const actions = ["Dashboards", "Predictions", "Automations", "Recommendations", "APIs & Apps"]

  return (
    <div className="relative mx-auto aspect-[1.72/1] w-full max-w-[780px]">
      <svg viewBox="0 0 800 455" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <pattern id={`${page.id}-data-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 0 0 0 34" stroke={stroke} strokeOpacity="0.1" />
          </pattern>
          <linearGradient id={`${page.id}-data-block`} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor={styles.fill} stopOpacity="0.34" />
            <stop offset="1" stopColor={styles.fill} stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="40" y="88" width="720" height="260" fill={`url(#${page.id}-data-grid)`} opacity="0.64" />

        <g className="font-display-sans" fill={stroke}>
          <text x="50" y="62" fontSize="11" fontWeight="700" letterSpacing="2">
            DATA SOURCES
          </text>
          <text x="246" y="42" fontSize="11" fontWeight="700" letterSpacing="2">
            DATA ENGINEERING
          </text>
          <text x="498" y="44" fontSize="11" fontWeight="700" letterSpacing="2">
            MODELING & INTELLIGENCE
          </text>
          <text x="700" y="62" fontSize="11" fontWeight="700" letterSpacing="2">
            INSIGHTS & ACTIONS
          </text>
        </g>

        <g stroke={stroke} strokeOpacity="0.28">
          {sources.map((_, index) => (
            <path
              key={index}
              d={`M118 ${116 + index * 34}C178 ${116 + index * 24} 202 ${140 + index * 15} 262 ${180 + index * 7}`}
            />
          ))}
          {actions.map((_, index) => (
            <path
              key={index}
              d={`M536 ${182 + index * 10}C614 ${122 + index * 28} 640 ${116 + index * 34} 700 ${116 + index * 34}`}
            />
          ))}
          <path d="M374 210C414 160 452 158 500 184" />
          <path d="M374 250C420 306 462 296 512 244" />
        </g>

        <g transform="translate(42 88)">
          {sources.map((source, index) => (
            <g key={source} transform={`translate(0 ${index * 34})`}>
              <rect x="0" y="0" width="24" height="24" rx="4" fill="#fffdfa" stroke={stroke} strokeOpacity="0.36" />
              {index === 0 && <Monitor x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              {index === 1 && <Database x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              {index === 2 && <GitBranch x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              {index === 3 && <Smartphone x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              {index === 4 && <FileText x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              {index === 5 && <Network x="6" y="6" width="12" height="12" color={stroke} strokeWidth={1.2} />}
              <text x="40" y="16" fill="#24130f" fontSize="10">
                {source}
              </text>
            </g>
          ))}
        </g>

        <g transform="translate(242 104)">
          <path d="M0 0h80l24 22v150H0z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.38" />
          <path d="M18 34h54M18 56h68M18 78h48M18 116h66" stroke={stroke} strokeOpacity="0.3" />
          <path d="M116 128 198 84l82 44-82 44z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.5" />
          {[0, 1, 2, 3].map((layer) => (
            <g key={layer}>
              <path
                d={`M124 ${126 - layer * 24} 198 ${86 - layer * 24} 272 ${126 - layer * 24} 198 ${166 - layer * 24}z`}
                fill={layer === 3 ? styles.fill : "#fffdfa"}
                fillOpacity={layer === 3 ? 0.44 : 0.9}
                stroke={stroke}
                strokeOpacity="0.48"
              />
              {layer < 3 && (
                <path
                  d={`M124 ${126 - layer * 24}v20l74 40v-20M272 ${126 - layer * 24}v20l-74 40v-20`}
                  stroke={stroke}
                  strokeOpacity="0.26"
                />
              )}
            </g>
          ))}
          <DatabaseZap x="184" y="32" width="30" height="30" color={stroke} strokeWidth={1.35} />
        </g>

        <g transform="translate(514 112)">
          <path d="M0 72 94 18l94 54-94 54z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.52" />
          <path d="M0 72v88l94 54v-88M188 72v88l-94 54" fill={`url(#${page.id}-data-block)`} stroke={stroke} strokeOpacity="0.38" />
          <circle cx="94" cy="88" r="45" fill={styles.fill} fillOpacity="0.06" stroke={stroke} strokeOpacity="0.32" />
          {[
            [94, 48],
            [60, 68],
            [128, 68],
            [72, 104],
            [116, 104],
            [94, 128],
          ].map(([x, y], index) => (
            <g key={index}>
              <circle cx={x} cy={y} r="5" fill={styles.fill} fillOpacity="0.72" />
              <path d={`M${x} ${y}l${94 - x} ${88 - y}`} stroke={stroke} strokeOpacity="0.34" />
            </g>
          ))}
          <BrainCircuit x="76" y="70" width="36" height="36" color={stroke} strokeWidth={1.2} />
        </g>

        <g transform="translate(698 92)">
          {actions.map((action, index) => (
            <g key={action} transform={`translate(0 ${index * 38})`}>
              <rect x="0" y="0" width="25" height="25" rx="4" fill="#fffdfa" stroke={stroke} strokeOpacity="0.36" />
              {index === 0 && <BarChart3 x="6" y="6" width="13" height="13" color={stroke} strokeWidth={1.2} />}
              {index === 1 && <TrendingUp x="6" y="6" width="13" height="13" color={stroke} strokeWidth={1.2} />}
              {index === 2 && <Bot x="6" y="6" width="13" height="13" color={stroke} strokeWidth={1.2} />}
              {index === 3 && <Sparkles x="6" y="6" width="13" height="13" color={stroke} strokeWidth={1.2} />}
              {index === 4 && <Puzzle x="6" y="6" width="13" height="13" color={stroke} strokeWidth={1.2} />}
              <text x="38" y="16" fill="#24130f" fontSize="10">
                {action}
              </text>
            </g>
          ))}
        </g>

        <g className="font-display-sans" fill={stroke} fontSize="10">
          <text x="250" y="368">Collect</text>
          <text x="303" y="368">Clean</text>
          <text x="350" y="368">Transform</text>
          <text x="250" y="390">Govern</text>
          <text x="312" y="390">Store</text>
          <text x="506" y="368">Machine Learning</text>
          <text x="628" y="368">Analytics</text>
          <text x="506" y="390">AI Models</text>
          <text x="576" y="390">Validation</text>
        </g>
      </svg>
    </div>
  )
}

function SecurityOrbitVisual({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const stroke = styles.stroke
  const labels = [
    { title: "Identity & Access", text: "People & Access\nManagement", x: "45%", y: "2%", align: "center" },
    { title: "Applications & APIs", text: "Secure code, services\nand integrations", x: "7%", y: "22%", align: "left" },
    { title: "Data", text: "Classify, protect\nand control", x: "82%", y: "20%", align: "left" },
    { title: "Infrastructure", text: "Cloud, servers and\nnetworks secured", x: "8%", y: "57%", align: "left" },
    { title: "Monitor & Respond", text: "Detect threats and\nrespond in real time", x: "82%", y: "56%", align: "left" },
    { title: "Governance & Compliance", text: "Policies, standards\nand continuous assurance", x: "39%", y: "84%", align: "center" },
  ]

  return (
    <div className="relative mx-auto aspect-[1.72/1] w-full max-w-[720px]">
      <svg viewBox="0 0 760 440" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <pattern id={`${page.id}-security-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 0 0 0 34" stroke={stroke} strokeOpacity="0.11" />
          </pattern>
        </defs>
        <rect x="64" y="34" width="632" height="346" fill={`url(#${page.id}-security-grid)`} opacity="0.68" />
        <g stroke={stroke}>
          <ellipse cx="380" cy="214" rx="206" ry="84" strokeOpacity="0.22" />
          <ellipse cx="380" cy="214" rx="142" ry="56" strokeOpacity="0.4" />
          <circle cx="380" cy="214" r="94" strokeOpacity="0.42" />
          <circle cx="380" cy="214" r="58" strokeOpacity="0.28" />
          <path d="M194 214h372M380 92v244M236 128l288 172M236 300l288-172" strokeOpacity="0.2" strokeDasharray="5 8" />
        </g>
        {[
          [380, 92],
          [536, 144],
          [536, 284],
          [380, 336],
          [224, 284],
          [224, 144],
        ].map(([x, y], index) => (
          <g key={`${x}-${y}`}>
            <path d={`M${x - 42} ${y + 12}l42-24 42 24-42 24z`} fill="#fffdfa" stroke={stroke} strokeOpacity="0.56" />
            <path d={`M${x - 42} ${y + 12}v32l42 24v-32`} fill={styles.fill} fillOpacity="0.05" stroke={stroke} strokeOpacity="0.3" />
            <path d={`M${x + 42} ${y + 12}v32l-42 24v-32`} fill={styles.fill} fillOpacity="0.08" stroke={stroke} strokeOpacity="0.3" />
            <circle cx={x} cy={y + 8} r="18" fill="#fffdfa" stroke={stroke} strokeOpacity="0.72" />
            {index === 0 && <KeyRound x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
            {index === 1 && <Database x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
            {index === 2 && <Monitor x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
            {index === 3 && <CheckSquare x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
            {index === 4 && <Server x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
            {index === 5 && <Code2 x={x - 9} y={y - 1} width="18" height="18" color={stroke} strokeWidth={1.45} />}
          </g>
        ))}
        <g>
          <circle cx="380" cy="214" r="78" fill="#fffdfa" stroke={stroke} strokeOpacity="0.75" />
          <circle cx="380" cy="214" r="46" fill={styles.fill} fillOpacity="0.08" stroke={stroke} strokeOpacity="0.4" />
          <Shield x="357" y="184" width="46" height="46" color={stroke} strokeWidth={1.45} />
          <text x="380" y="252" textAnchor="middle" fill={stroke} fontSize="17" letterSpacing="4" fontWeight="700">
            ASTRA
          </text>
        </g>
        {Array.from({ length: 42 }).map((_, index) => {
          const x = 86 + ((index * 71) % 584)
          const y = 48 + ((index * 47) % 326)
          return <circle key={index} cx={x} cy={y} r="1.6" fill={stroke} fillOpacity={index % 4 === 0 ? 0.62 : 0.22} />
        })}
      </svg>

      {labels.map((label) => (
        <div
          key={label.title}
          className={`absolute hidden max-w-[150px] font-display-sans text-[0.58rem] leading-relaxed ${styles.text} lg:block ${
            label.align === "center" ? "text-center" : ""
          }`}
          style={{ left: label.x, top: label.y }}
        >
          <p className="font-bold uppercase tracking-[0.22em]">{label.title}</p>
          <p className="mt-1 whitespace-pre-line text-ink/66">{label.text}</p>
        </div>
      ))}
    </div>
  )
}

function ExperienceDesignVisual({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const stroke = styles.stroke
  const stages = [
    { title: "Research", text: "Understand users\nand context", left: "3%" },
    { title: "Structure", text: "Information\narchitecture\n& flow", left: "24%" },
    { title: "Design", text: "Interfaces\n& components", left: "43%" },
    { title: "Build", text: "Design systems\n& handoff", left: "63%" },
    { title: "Deliver", text: "Beautiful experiences\nthat perform", left: "83%" },
  ]

  return (
    <div className="relative mx-auto aspect-[1.72/1] w-full max-w-[760px]">
      <svg viewBox="0 0 780 450" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <pattern id={`${page.id}-design-grid`} width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0 0 0 0 32" stroke={stroke} strokeOpacity="0.14" />
          </pattern>
        </defs>
        <rect x="30" y="84" width="710" height="300" fill={`url(#${page.id}-design-grid)`} opacity="0.72" />
        <path d="M52 326c115-58 166 6 270-58 99-61 182-26 386-128" stroke={stroke} strokeOpacity="0.18" strokeDasharray="5 8" />
        {[116, 226, 336].map((x, index) => (
          <g key={x} transform={`translate(${x} ${index === 0 ? 188 : index === 1 ? 152 : 128})`}>
            <path d="M0 0h104l22 20v142H0z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.38" />
            <path d="M18 32h52M18 54h74M18 76h58M18 116h82" stroke={stroke} strokeOpacity="0.3" />
            <rect x="18" y="92" width="22" height="14" fill={styles.fill} fillOpacity="0.12" stroke={stroke} strokeOpacity="0.28" />
            <rect x="48" y="92" width="22" height="14" fill={styles.fill} fillOpacity="0.08" stroke={stroke} strokeOpacity="0.28" />
          </g>
        ))}
        <g transform="translate(460 152)">
          <path d="M0 0h188c13 0 24 11 24 24v110H0z" fill="#fffdfa" stroke="#26201e" strokeOpacity="0.32" />
          <path d="M0 134h212l28 42H-26z" fill="#f8f5ef" stroke="#26201e" strokeOpacity="0.24" />
          <rect x="20" y="22" width="72" height="46" fill={styles.fill} fillOpacity="0.12" stroke={stroke} strokeOpacity="0.28" />
          <path d="M112 28h62M112 48h50M20 90h154" stroke={stroke} strokeOpacity="0.28" />
          <rect x="20" y="108" width="38" height="12" fill={styles.fill} fillOpacity="0.55" />
        </g>
        <g transform="translate(684 172)">
          <rect x="0" y="0" width="72" height="150" rx="16" fill="#fffdfa" stroke="#26201e" strokeOpacity="0.38" />
          <rect x="10" y="24" width="52" height="92" fill="#fff8f5" stroke={stroke} strokeOpacity="0.22" />
          <path d="M20 42h32M20 58h24M20 88h32" stroke={stroke} strokeOpacity="0.38" />
          <circle cx="36" cy="130" r="4" fill={stroke} fillOpacity="0.36" />
        </g>
        {Array.from({ length: 44 }).map((_, index) => {
          const x = 50 + ((index * 67) % 656)
          const y = 104 + ((index * 41) % 256)
          return <circle key={index} cx={x} cy={y} r="1.6" fill={stroke} fillOpacity={index % 4 === 0 ? 0.5 : 0.18} />
        })}
      </svg>
      {stages.map((stage) => (
        <div key={stage.title} className={`absolute top-[4%] hidden max-w-[120px] text-[0.56rem] leading-relaxed ${styles.text} lg:block`} style={{ left: stage.left }}>
          <p className="font-display-sans font-bold uppercase tracking-[0.22em]">{stage.title}</p>
          <p className="mt-1 whitespace-pre-line text-ink/66">{stage.text}</p>
        </div>
      ))}
    </div>
  )
}

function VentureJourneyVisual({ page }: { page: CompanyPageContent }) {
  const styles = accentStyles[page.accent]
  const stroke = styles.stroke
  const stages = [
    { title: "Opportunity", text: "Spot a problem\nworth solving", x: 86, icon: Compass },
    { title: "Validate", text: "Test demand,\nmarket & model", x: 210, icon: CheckSquare },
    { title: "Design", text: "Shape the venture\n& business model", x: 334, icon: FileText },
    { title: "Build", text: "Engineer product\n& infrastructure", x: 458, icon: Box },
    { title: "Launch", text: "Go to market &\nonboard users", x: 582, icon: Rocket },
    { title: "Scale", text: "Grow impact\n& value", x: 706, icon: TrendingUp },
  ]

  return (
    <div className="relative mx-auto aspect-[1.72/1] w-full max-w-[790px]">
      <svg viewBox="0 0 800 455" className="h-full w-full overflow-visible" fill="none">
        <defs>
          <pattern id={`${page.id}-venture-grid`} width="34" height="34" patternUnits="userSpaceOnUse">
            <path d="M34 0 0 0 0 34" stroke={stroke} strokeOpacity="0.11" />
          </pattern>
        </defs>
        <rect x="34" y="108" width="720" height="250" fill={`url(#${page.id}-venture-grid)`} opacity="0.66" />
        <path d="M72 292c74-50 100 42 166-4 62-42 86-48 152-2 82 57 104-70 186-14 60 40 88-12 152-60" stroke={stroke} strokeOpacity="0.36" strokeDasharray="6 10" />
        {stages.map((stage, index) => {
          const Icon = stage.icon
          const y = index % 2 === 0 ? 246 : 208
          return (
            <g key={stage.title}>
              <line x1={stage.x} y1="116" x2={stage.x} y2={y - 34} stroke={stroke} strokeOpacity="0.28" strokeDasharray="4 7" />
              <text x={stage.x - 46} y="58" fill="#24130f" fontSize="12" fontWeight="700" letterSpacing="1.6">
                {stage.title.toUpperCase()}
              </text>
              <text x={stage.x - 46} y="78" fill="#24130f" fontSize="10" opacity="0.72">
                {stage.text.split("\n")[0]}
              </text>
              <text x={stage.x - 46} y="94" fill="#24130f" fontSize="10" opacity="0.72">
                {stage.text.split("\n")[1]}
              </text>
              <path d={`M${stage.x - 38} ${y + 12}l38-22 38 22-38 22z`} fill="#fffdfa" stroke={stroke} strokeOpacity="0.52" />
              <path d={`M${stage.x - 38} ${y + 12}v34l38 22v-34`} fill={styles.fill} fillOpacity="0.08" stroke={stroke} strokeOpacity="0.32" />
              <path d={`M${stage.x + 38} ${y + 12}v34l-38 22v-34`} fill={styles.fill} fillOpacity="0.14" stroke={stroke} strokeOpacity="0.32" />
              <Icon x={stage.x - 12} y={y - 2} width="24" height="24" color={stroke} strokeWidth={1.35} />
            </g>
          )
        })}
        <g transform="translate(430 190)">
          <path d="M0 74h90l44-25-90-52L-46 49z" fill={styles.fill} fillOpacity="0.18" stroke={stroke} strokeOpacity="0.4" />
          <path d="M0 42h90l44-25-90-52L-46 17z" fill="#fffdfa" stroke={stroke} strokeOpacity="0.45" />
          <path d="M-46 17v32L0 74V42zM134 17v32L90 74V42z" fill={styles.fill} fillOpacity="0.12" stroke={stroke} strokeOpacity="0.32" />
          <rect x="24" y="-4" width="36" height="36" fill={styles.fill} fillOpacity="0.42" stroke={stroke} strokeOpacity="0.55" />
          <rect x="64" y="18" width="32" height="32" fill={styles.fill} fillOpacity="0.28" stroke={stroke} strokeOpacity="0.48" />
        </g>
        <g transform="translate(662 208)" stroke={stroke}>
          {[0, 1, 2, 3, 4].map((bar) => (
            <rect key={bar} x={bar * 18} y={70 - bar * 12} width="10" height={bar * 12 + 20} fill={styles.fill} fillOpacity="0.2" strokeOpacity="0.55" />
          ))}
          <path d="M0 94c36-44 58-38 90-86" strokeOpacity="0.52" />
          <path d="M82 8h10v10" strokeOpacity="0.52" />
        </g>
        <text x="400" y="385" textAnchor="middle" fill={stroke} fontSize="18" fontWeight="700">
          We build what matters.
        </text>
      </svg>
    </div>
  )
}

export function CompanyTechnicalVisual({ page }: { page: CompanyPageContent }) {
  if (page.visualKind === "orrery") {
    return <DataIntelligenceVisual page={page} />
  }

  if (page.visualKind === "astra") {
    return <SecurityOrbitVisual page={page} />
  }

  if (page.visualKind === "helios") {
    return <ExperienceDesignVisual page={page} />
  }

  if (page.visualKind === "olympia") {
    return <VentureJourneyVisual page={page} />
  }

  return <IsometricPlatform page={page} />
}

export function WorkVisual({ visual }: { visual: CompanyWorkVisual }) {
  if (visual === "carmie") {
    return (
      <div className="relative h-full min-h-[180px] overflow-hidden bg-[#f4f8ff]">
        <svg viewBox="0 0 260 180" className="absolute inset-0 h-full w-full">
          <path d="M0 42h260M20 0v180M74 0v180M142 0v180M214 0v180M0 104h260" stroke="#c8d8ee" />
          <path d="M30 142c50-50 85-21 162-111" stroke="#1b67c9" strokeWidth="3" fill="none" opacity="0.65" />
          <circle cx="174" cy="48" r="7" fill="#1b67c9" />
          <circle cx="74" cy="118" r="5" fill="#1b67c9" />
        </svg>
        <div className="absolute bottom-0 right-7 h-[170px] w-[100px] rounded-t-[1.5rem] border-[6px] border-ink bg-white p-3 shadow-xl">
          <p className="mt-16 text-[0.45rem] font-semibold text-ink/55">Nearby Services</p>
          {["Auto Diagnostic", "Towing Service", "Quick Fix Garage"].map((item) => (
            <p key={item} className="mt-2 truncate text-[0.42rem] text-ink/75">
              {item}
            </p>
          ))}
        </div>
      </div>
    )
  }

  if (visual === "client") {
    return <img src={siteImages.studio} alt="" className="h-full min-h-[180px] w-full object-cover" loading="lazy" />
  }

  if (visual === "datacenter") {
    return <img src={siteImages.infrastructure} alt="" className="h-full min-h-[180px] w-full object-cover" loading="lazy" />
  }

  if (visual === "security") {
    return (
      <div className="relative h-full min-h-[180px] overflow-hidden bg-[#f2f6ff]">
        <div className="absolute right-6 top-6 h-[128px] w-[142px] rounded border border-black/10 bg-white p-4 shadow-sm">
          <p className="text-[0.5rem] font-semibold text-ink/45">Security Overview</p>
          <p className="mt-5 font-display text-[1.8rem] leading-none text-[#1b67c9]">93%</p>
          <p className="mt-1 text-[0.52rem] text-ink/55">Protected</p>
          {["Authentication", "Access Rules", "Threat Signals"].map((item) => (
            <p key={item} className="mt-2 flex items-center gap-2 text-[0.44rem] text-ink/62">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1b67c9]" />
              {item}
            </p>
          ))}
        </div>
        <ShieldCheck className="absolute bottom-8 left-8 h-16 w-16 text-[#1b67c9]/55" strokeWidth={1.15} />
      </div>
    )
  }

  if (visual === "design") {
    return (
      <div className="relative h-full min-h-[180px] overflow-hidden bg-[#fff5f1]">
        <div className="absolute right-5 top-5 grid h-[142px] w-[172px] grid-cols-2 gap-2">
          {["#1f2937", "#ff4e2d", "#f7c5b8", "#fffdfa"].map((color) => (
            <div key={color} className="rounded border border-black/10" style={{ backgroundColor: color }} />
          ))}
        </div>
        <div className="absolute bottom-8 left-8 h-[88px] w-[116px] rounded border border-black/10 bg-white p-3 shadow-sm">
          <p className="font-display text-lg leading-none text-[#24130f]">Aa</p>
          <p className="mt-4 h-2 w-16 bg-[#ff4e2d]/55" />
          <p className="mt-2 h-2 w-11 bg-black/12" />
        </div>
      </div>
    )
  }

  if (visual === "venture") {
    return <img src={siteImages.venture} alt="" className="h-full min-h-[180px] w-full object-cover" loading="lazy" />
  }

  if (visual === "analytics") {
    return (
      <div className="relative h-full min-h-[180px] overflow-hidden bg-[#f7f4ff]">
        <div className="absolute right-6 top-6 h-[142px] w-[154px] rounded border border-black/10 bg-white p-4 shadow-sm">
          <p className="text-[0.5rem] font-semibold text-ink/45">Insights Overview</p>
          <p className="mt-3 font-display text-[1.55rem] leading-none text-[#7653df]">128K</p>
          <svg viewBox="0 0 130 54" className="mt-3 h-12 w-full">
            <path d="M2 42c12-18 24 2 38-16 16-22 26 10 42-8 15-16 25-8 46-2" stroke="#7653df" strokeWidth="3" fill="none" />
            <path d="M2 50h126" stroke="#1a1a1a" strokeOpacity="0.1" />
          </svg>
          <p className="mt-1 text-[0.5rem] text-ink/50">Model Accuracy 93.6%</p>
        </div>
        <div className="absolute bottom-8 left-8 h-[98px] w-[104px] rounded border border-black/10 bg-white p-3 shadow-sm">
          <svg viewBox="0 0 80 80" className="h-full w-full">
            <circle cx="40" cy="40" r="25" fill="none" stroke="#e8ddff" strokeWidth="13" />
            <path d="M40 15a25 25 0 1 1-22 37" fill="none" stroke="#7653df" strokeWidth="13" />
            <text x="40" y="44" textAnchor="middle" fill="#24130f" fontSize="13" fontWeight="700">
              82%
            </text>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full min-h-[180px] overflow-hidden bg-[#f6fbf8]">
      <div className="absolute bottom-8 right-6 h-[112px] w-[168px] rounded border border-black/10 bg-white p-4 shadow-sm">
        <p className="text-[0.55rem] text-ink/45">System Overview</p>
        <svg viewBox="0 0 150 56" className="mt-3 h-12 w-full">
          <path d="M0 42c13-10 23-18 37-8 16 11 24-16 40-5 16 12 27-20 42-8 10 9 19-5 31-14" stroke="#08784c" strokeWidth="3" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-7 left-7 h-[82px] w-[64px] rounded border border-black/10 bg-white p-2 shadow">
        <p className="text-[0.45rem] text-ink/45">Field</p>
        <svg viewBox="0 0 52 32" className="mt-3">
          <path d="M0 28c8-10 16-2 24-14s16 6 28-12" stroke="#08784c" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  )
}

export function InlineArrowLink({ children, href, accent }: { children: string; href: string; accent: CompanyAccent }) {
  return (
    <a href={href} className={`inline-flex items-center gap-7 text-sm ${accentStyles[accent].text}`}>
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
    </a>
  )
}
