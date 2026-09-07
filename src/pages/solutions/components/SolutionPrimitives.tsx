import {
  ArrowRight,
  Accessibility,
  AlertTriangle,
  Bell,
  Blocks,
  BookOpen,
  Box,
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  Car,
  Check,
  CircleCheck,
  ClipboardCheck,
  Cloud,
  CloudCog,
  CloudUpload,
  Code2,
  Compass,
  Cpu,
  Database,
  Download,
  Eye,
  Feather,
  FileText,
  FileCheck2,
  Fingerprint,
  Globe2,
  Landmark,
  Layers,
  LayoutGrid,
  Lightbulb,
  Link,
  ListChecks,
  LockKeyhole,
  Megaphone,
  MessageCircle,
  Monitor,
  MousePointer2,
  Network,
  Orbit,
  PenTool,
  PieChart,
  PlayCircle,
  PlugZap,
  Puzzle,
  RefreshCw,
  Rocket,
  Search,
  Server,
  ServerCog,
  Settings,
  Shield,
  Smartphone,
  SunMedium,
  Target,
  TrendingUp,
  UserRound,
  Users,
  Workflow,
  Wrench,
} from "lucide-react"
import type { SolutionAccent, SolutionArea } from "../../../domain/solutions"
import { Logo } from "../../../shared/ui"
import { CompanyIcon } from "../../companies/components/CompanyIcon"

export const solutionAccentStyles: Record<
  SolutionAccent,
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
  green: {
    text: "text-[#075c3b]",
    border: "border-[#075c3b]",
    bg: "bg-[#075c3b]",
    button: "bg-[#075c3b] text-white hover:bg-[#064d32]",
    pale: "bg-[#f2faf5]",
    stroke: "#075c3b",
    fill: "#075c3b",
  },
  violet: {
    text: "text-[#7653df]",
    border: "border-[#7653df]",
    bg: "bg-[#7653df]",
    button: "bg-[#7653df] text-white hover:bg-[#6240c5]",
    pale: "bg-[#f6f3ff]",
    stroke: "#7653df",
    fill: "#7653df",
  },
  blue: {
    text: "text-[#1b55ad]",
    border: "border-[#1b55ad]",
    bg: "bg-[#1b55ad]",
    button: "bg-[#1b55ad] text-white hover:bg-[#164992]",
    pale: "bg-[#f2f6ff]",
    stroke: "#1b55ad",
    fill: "#1b55ad",
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
  teal: {
    text: "text-[#075a68]",
    border: "border-[#075a68]",
    bg: "bg-[#075a68]",
    button: "bg-[#075a68] text-white hover:bg-[#064b57]",
    pale: "bg-[#eff9fa]",
    stroke: "#075a68",
    fill: "#075a68",
  },
}

const iconMap = {
  box: Box,
  cloud: Cloud,
  cloudCog: CloudCog,
  compass: Compass,
  cpu: Cpu,
  orbit: Orbit,
  shield: Shield,
  sun: SunMedium,
  landmark: Landmark,
  search: Search,
  layout: LayoutGrid,
  pencil: PenTool,
  code: Code2,
  cloudUpload: CloudUpload,
  download: Download,
  growth: TrendingUp,
  chart: BarChart3,
  accessibility: Accessibility,
  clipboard: ClipboardCheck,
  feather: Feather,
  megaphone: Megaphone,
  cursor: MousePointer2,
  users: Users,
  user: UserRound,
  building: BriefcaseBusiness,
  car: Car,
  briefcase: BriefcaseBusiness,
  globe: Globe2,
  phone: Smartphone,
  settings: Settings,
  link: Link,
  refresh: RefreshCw,
  rocket: Rocket,
  lightbulb: Lightbulb,
  layers: Layers,
  check: CircleCheck,
  list: ListChecks,
  play: PlayCircle,
  target: Target,
  pie: PieChart,
  alert: AlertTriangle,
  message: MessageCircle,
  plug: PlugZap,
  fingerprint: Fingerprint,
  network: Network,
  lock: LockKeyhole,
  bell: Bell,
  serverCog: ServerCog,
  fileCheck: FileCheck2,
  book: BookOpen,
  wrench: Wrench,
  workflow: Workflow,
  database: Database,
  monitor: Monitor,
  server: Server,
  blocks: Blocks,
  brain: BrainCircuit,
  puzzle: Puzzle,
  file: FileText,
  eye: Eye,
}

export function SolutionSectionKicker({ children, accent = "green" }: { children: string; accent?: SolutionAccent }) {
  return (
    <p className={`font-display-sans text-[0.68rem] font-bold uppercase tracking-[0.42em] ${solutionAccentStyles[accent].text}`}>
      {children}
    </p>
  )
}

export function SolutionIcon({
  icon,
  accent,
  framed = false,
  inverted = false,
}: {
  icon: string
  accent: SolutionAccent
  framed?: boolean
  inverted?: boolean
}) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Box
  const styles = solutionAccentStyles[accent]
  const textClass = inverted ? "text-white" : styles.text

  if (!framed) {
    return <Icon className={`h-7 w-7 ${textClass}`} strokeWidth={1.25} />
  }

  return (
    <span className={`flex h-14 w-14 items-center justify-center rounded-full border ${styles.border} ${textClass}`}>
      <Icon className="h-7 w-7" strokeWidth={1.2} />
    </span>
  )
}

export function SolutionAreaIcon({ area, framed = true }: { area: SolutionArea; framed?: boolean }) {
  return <SolutionIcon icon={area.icon} accent={area.accent} framed={framed} />
}

export function InlineSolutionLink({ href, children, accent = "green" }: { href: string; children: string; accent?: SolutionAccent }) {
  return (
    <a href={href} className={`inline-flex items-center gap-7 text-sm ${solutionAccentStyles[accent].text}`}>
      {children}
      <ArrowRight className="h-4 w-4" strokeWidth={1.6} />
    </a>
  )
}

export function SolutionOverviewVisual({ areas }: { areas: SolutionArea[] }) {
  const challengeItems = [
    "Disconnected systems",
    "Manual processes",
    "Data silos",
    "Security and risk",
    "Growth constraints",
  ]
  const outcomes = [
    "Built for your operations",
    "Secure by design",
    "Scalable and reliable",
    "Data-driven decisions",
    "Long-term value",
  ]
  const ringAreas = [
    areas[0],
    areas[1],
    areas[3],
    areas[4],
    areas[5],
  ]

  return (
    <div className="relative mx-auto h-[310px] w-full max-w-[860px]">
      <div className="absolute left-0 top-8 hidden w-[205px] border border-black/12 bg-white p-7 lg:block">
        <p className="font-display-sans text-[0.58rem] font-bold uppercase tracking-[0.22em] text-ink">Your challenge</p>
        <div className="mt-6 space-y-4">
          {challengeItems.map((item, index) => (
            <p key={item} className="flex items-center gap-3 text-xs text-ink/75">
              <SolutionIcon icon={["puzzle", "workflow", "database", "shield", "growth"][index]} accent="green" />
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute left-[248px] top-[142px] hidden items-center gap-4 lg:flex">
        <span className="h-px w-52 border-t border-dashed border-black/35" />
        <ArrowRight className="h-4 w-4 text-ink/60" />
      </div>

      <div className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2">
        <div className="absolute inset-0 rounded-full border border-dashed border-black/16" />
        <div className="absolute inset-8 rounded-full border border-dashed border-black/14" />
        <div className="absolute inset-16 flex flex-col items-center justify-center rounded-full border border-black/12 bg-[#fffdfa]">
          <Logo variant="mark" size="lg" className="text-brand" />
          <p className="mt-2 font-display-sans text-sm font-semibold uppercase tracking-[0.24em] text-brand">
            ANTIKRA
          </p>
        </div>
        {ringAreas.map((area, index) => {
          const positions = [
            "left-1/2 top-[-24px] -translate-x-1/2",
            "right-[-22px] top-[82px]",
            "left-[24px] bottom-[-22px]",
            "left-[-22px] top-[82px]",
            "right-[20px] bottom-[-22px]",
          ]
          return (
            <div key={area.id} className={`absolute ${positions[index]}`}>
              <SolutionAreaIcon area={area} />
            </div>
          )
        })}
      </div>

      <div className="absolute right-[212px] top-[142px] hidden items-center gap-4 lg:flex">
        <ArrowRight className="h-4 w-4 text-ink/60" />
        <span className="h-px w-52 border-t border-dashed border-black/35" />
      </div>

      <div className="absolute right-0 top-8 hidden w-[225px] border border-black/12 bg-white p-7 lg:block">
        <p className="font-display-sans text-[0.58rem] font-bold uppercase tracking-[0.22em] text-ink">Integrated solution</p>
        <div className="mt-6 space-y-4">
          {outcomes.map((item) => (
            <p key={item} className="flex items-center gap-3 text-xs text-ink/75">
              <Check className="h-4 w-4 text-[#075c3b]" strokeWidth={1.6} />
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}

export function EngineeringHeroVisual() {
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[820px] overflow-hidden">
      <div className="absolute inset-x-0 top-7 flex justify-between px-6">
        {[
          ["landmark", "Business Operation"],
          ["workflow", "System Architecture"],
          ["monitor", "User Interfaces"],
          ["layout", "APIs & Data"],
          ["box", "Deployed Product"],
        ].map(([icon, label], index) => (
          <div key={label} className="relative flex flex-col items-center gap-2">
            {index < 4 && <span className="absolute left-[72%] top-5 hidden w-[84px] border-t border-dashed border-black/28 lg:block" />}
            <SolutionIcon icon={icon} accent="green" framed />
            <p className="max-w-[82px] text-center text-[0.58rem] font-semibold text-ink">{label}</p>
          </div>
        ))}
      </div>

      <svg viewBox="0 0 820 360" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <pattern id="engineering-hero-grid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M30 0 0 0 0 30" stroke="#075c3b" strokeOpacity="0.09" />
          </pattern>
        </defs>
        <rect x="84" y="112" width="650" height="224" fill="url(#engineering-hero-grid)" />
      </svg>

      <div className="absolute left-4 top-[155px] hidden h-[150px] w-[160px] border border-black/10 bg-white p-4 shadow-sm md:block">
        <p className="rounded border border-black/10 px-3 py-2 text-center text-[0.55rem] text-ink/70">
          Loan application received
        </p>
        <div className="mx-auto my-3 h-8 w-px border-l border-dashed border-black/25" />
        <p className="rounded border border-[#075c3b]/20 px-3 py-2 text-center text-[0.55rem] text-[#075c3b]">
          Verification
        </p>
      </div>

      <div className="absolute left-[19%] top-[135px] hidden h-[190px] w-[220px] border border-black/10 bg-white p-5 shadow-sm lg:block">
        <svg viewBox="0 0 210 170" className="h-full w-full">
          <path d="M24 24h74v36H24zM116 24h70v36h-70zM24 96h74v36H24zM116 96h70v36h-70z" fill="#f5faf7" stroke="#075c3b" strokeOpacity="0.26" />
          <path d="M98 42h18M61 60v36M151 60v36M98 114h18" stroke="#075c3b" strokeOpacity="0.35" strokeDasharray="4 6" />
          <circle cx="61" cy="42" r="8" fill="#075c3b" fillOpacity="0.18" />
          <circle cx="151" cy="114" r="8" fill="#1b55ad" fillOpacity="0.18" />
        </svg>
      </div>

      <div className="absolute bottom-0 left-[36%] h-[238px] w-[350px] rounded-t-xl border-[8px] border-ink bg-ink p-1 shadow-2xl">
        <div className="relative h-full overflow-hidden bg-white">
          <div className="absolute inset-y-0 left-0 w-[72px] bg-[#063a24]" />
          <div className="absolute left-[92px] right-4 top-5">
            <p className="text-xs font-semibold text-ink">Dashboard</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {["2,341", "1,082", "UGX 43,410,000"].map((metric) => (
                <div key={metric} className="rounded border border-black/8 bg-[#fffdfa] p-3">
                  <p className="text-[0.5rem] text-ink/45">Active</p>
                  <p className="mt-2 text-[0.68rem] font-bold text-ink">{metric}</p>
                </div>
              ))}
            </div>
            <svg viewBox="0 0 210 80" className="mt-4 h-20 w-full">
              <path d="M2 58c24-28 38-16 62-28 24-13 34 22 58-2 26-26 40-8 82-22" stroke="#075c3b" strokeWidth="3" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute right-[8%] bottom-0 hidden h-[260px] w-[120px] rounded-t-[1.5rem] border-[6px] border-ink bg-white p-3 shadow-xl md:block">
        <div className="rounded-t-[1rem] bg-[#075c3b] px-3 py-3 text-white">
          <p className="text-[0.52rem] opacity-80">Good morning</p>
          <p className="mt-1 text-[0.62rem] font-semibold">Agent James</p>
        </div>
        <div className="mt-4 space-y-2">
          {["UGX 2,060,000", "32 active loans", "5 new applications"].map((item) => (
            <p key={item} className="rounded border border-black/8 p-2 text-[0.48rem] text-ink/70">
              {item}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute right-[210px] top-[155px] hidden h-[190px] w-[120px] bg-[#111] p-4 text-[#79e8aa] lg:block">
        <p className="text-[0.55rem] text-white/70">GET /api/cards</p>
        <pre className="mt-4 whitespace-pre-wrap text-[0.48rem] leading-relaxed">{`{
  "loan": {
    "status": "active",
    "health": "good"
  }
}`}</pre>
      </div>
    </div>
  )
}

export function SolutionWorkVisual({
  visual,
  accent,
}: {
  visual: "rembeh" | "carmie" | "enterprise" | "cloud" | "data" | "security" | "design" | "venture"
  accent: SolutionAccent
}) {
  const styles = solutionAccentStyles[accent]

  if (visual === "carmie") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f4f8ff]">
        <svg viewBox="0 0 280 136" className="h-full w-full">
          <path d="M0 38h280M0 92h280M42 0v136M110 0v136M190 0v136" stroke="#c8d8ee" />
          <path d="M28 110c52-64 92-32 172-90" stroke="#1b55ad" strokeWidth="3" fill="none" />
          {[72, 142, 204].map((x, index) => (
            <circle key={x} cx={x} cy={index === 0 ? 88 : index === 1 ? 62 : 34} r="6" fill="#1b55ad" />
          ))}
        </svg>
      </div>
    )
  }

  if (visual === "enterprise") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#fffdfa]">
        <svg viewBox="0 0 280 136" className="h-full w-full">
          <path d="M0 104 140 24l140 80-140 64z" fill={styles.fill} fillOpacity="0.05" stroke={styles.stroke} strokeOpacity="0.18" />
          <path d="M82 82h70M82 82l28-20M152 82l28-20" stroke={styles.stroke} strokeOpacity="0.36" strokeDasharray="4 6" />
          <rect x="62" y="72" width="40" height="28" fill="#fffdfa" stroke={styles.stroke} strokeOpacity="0.36" />
          <rect x="132" y="72" width="40" height="28" fill="#fffdfa" stroke={styles.stroke} strokeOpacity="0.36" />
          <rect x="104" y="44" width="52" height="36" fill="#fffdfa" stroke={styles.stroke} strokeOpacity="0.36" />
        </svg>
      </div>
    )
  }

  if (visual === "cloud") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f5f9ff]">
        <svg viewBox="0 0 280 136" className="h-full w-full">
          <path d="M0 96 140 24l140 72-140 60z" fill="#1b55ad" fillOpacity="0.04" stroke="#1b55ad" strokeOpacity="0.18" />
          {[58, 128, 198].map((x, index) => (
            <g key={x}>
              <path d={`M${x} ${72 - index * 8}l32-18 32 18-32 18z`} fill="#fffdfa" stroke="#1b55ad" strokeOpacity="0.32" />
              <path d={`M${x} ${72 - index * 8}v24l32 18v-24M${x + 64} ${72 - index * 8}v24l-32 18`} stroke="#1b55ad" strokeOpacity="0.2" />
            </g>
          ))}
          <Cloud x="108" y="30" width="34" height="34" color="#1b55ad" strokeWidth={1.2} />
        </svg>
      </div>
    )
  }

  if (visual === "data") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f7f4ff] p-4">
        <svg viewBox="0 0 250 105" className="h-full w-full">
          {[34, 58, 45, 74, 88, 62, 98].map((height, index) => (
            <rect
              key={index}
              x={index * 28 + 18}
              y={100 - height}
              width="14"
              height={height}
              fill="#7653df"
              fillOpacity="0.28"
              stroke="#7653df"
              strokeOpacity="0.34"
            />
          ))}
          <path d="M10 82c34-42 58-12 88-38 28-24 44 10 74-10 20-13 34-9 58-24" stroke="#075c3b" strokeWidth="2.5" fill="none" />
        </svg>
      </div>
    )
  }

  if (visual === "security") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f2f6ff]">
        <svg viewBox="0 0 280 136" className="h-full w-full">
          <path d="M0 98 140 24l140 74-140 58z" fill="#1b55ad" fillOpacity="0.05" stroke="#1b55ad" strokeOpacity="0.18" />
          <path d="M96 70l44-26 44 26-44 26z" fill="#fffdfa" stroke="#1b55ad" strokeOpacity="0.42" />
          <path d="M96 70v34l44 26V96M184 70v34l-44 26" stroke="#1b55ad" strokeOpacity="0.24" />
          <Shield x="124" y="54" width="32" height="32" color="#1b55ad" strokeWidth={1.3} />
          {[70, 210, 48, 232].map((x, index) => (
            <circle key={index} cx={x} cy={index < 2 ? 84 : 46} r="8" fill="#075c3b" fillOpacity="0.18" stroke="#075c3b" strokeOpacity="0.32" />
          ))}
        </svg>
      </div>
    )
  }

  if (visual === "design") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f7f4ff] p-4">
        <div className="grid h-full grid-cols-[0.65fr_1fr] gap-3">
          <div className="space-y-2">
            {["Research", "Flow", "Prototype"].map((label) => (
              <p key={label} className="border border-[#7653df]/18 bg-white px-3 py-2 text-[0.55rem] font-semibold text-[#7653df]">
                {label}
              </p>
            ))}
          </div>
          <div className="border border-black/10 bg-white p-3">
            <div className="h-5 w-20 bg-[#7653df]/18" />
            <div className="mt-3 grid grid-cols-3 gap-2">
              <span className="h-7 bg-[#7653df]/12" />
              <span className="h-7 bg-[#7653df]/20" />
              <span className="h-7 bg-[#7653df]/12" />
            </div>
            <svg viewBox="0 0 130 42" className="mt-2 h-12 w-full">
              <path d="M2 34c18-22 28-10 44-24 18-15 25 12 42-5 12-12 24-7 38-2" stroke="#7653df" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
        </div>
      </div>
    )
  }

  if (visual === "venture") {
    return (
      <div className="h-[136px] overflow-hidden border border-black/10 bg-[#eff9fa] p-4">
        <svg viewBox="0 0 250 105" className="h-full w-full">
          <path d="M20 84h28V56H20zM68 84h28V38H68zM116 84h28V64h-28zM164 84h28V24h-28zM212 84h22V10h-22z" fill="#075a68" fillOpacity="0.18" stroke="#075a68" strokeOpacity="0.34" />
          <path d="M20 84c52-46 86-28 120-55 34-27 54-10 92-26" stroke="#075a68" strokeWidth="2.5" fill="none" />
          <Rocket x="92" y="18" width="34" height="34" color="#b37217" strokeWidth={1.2} />
        </svg>
      </div>
    )
  }

  return (
    <div className="h-[136px] overflow-hidden border border-black/10 bg-[#f6fbf8] p-4">
      <div className="h-full rounded border border-black/10 bg-white p-4">
        <p className="text-[0.55rem] text-ink/45">Overview</p>
        <svg viewBox="0 0 180 70" className="mt-3 h-16 w-full">
          <path d="M2 52c18-20 30-12 48-24 18-13 28 16 48-6 24-26 36-5 78-16" stroke="#075c3b" strokeWidth="3" fill="none" />
        </svg>
      </div>
    </div>
  )
}

export function SolutionNextSketch({ accent = "green" }: { accent?: SolutionAccent }) {
  const styles = solutionAccentStyles[accent]

  return (
    <svg viewBox="0 0 420 155" className="h-full w-full" fill="none">
      <defs>
        <pattern id="solution-next-grid" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M28 0 0 0 0 28" stroke={styles.stroke} strokeOpacity="0.09" />
        </pattern>
      </defs>
      <rect width="420" height="155" fill="url(#solution-next-grid)" />
      {[0, 1, 2, 3].map((index) => {
        const x = 72 + index * 70
        const y = 86 - (index % 2) * 24
        return (
          <g key={index}>
            <path d={`M${x} ${y}l40-22 40 22-40 22z`} fill="#fffdfa" stroke={styles.stroke} strokeOpacity="0.32" />
            <path d={`M${x} ${y}v34l40 22v-34M${x + 80} ${y}v34l-40 22`} stroke={styles.stroke} strokeOpacity="0.22" />
          </g>
        )
      })}
    </svg>
  )
}

export function SpecialistMiniCard({ card }: { card: { name: string; discipline: string; description?: string; icon: string; accent: "bronze" | "green" | "violet" | "blue" | "coral" | "gold" } }) {
  return (
    <article className="min-h-[165px] border border-black/12 bg-white p-5">
      <CompanyIcon icon={card.icon as "box"} accent={card.accent} />
      <p className="mt-6 text-sm font-bold uppercase tracking-[0.12em] text-ink">{card.name}</p>
      <p className="mt-1 text-sm text-ink/72">{card.discipline}</p>
      {card.description && <p className="mt-3 text-xs leading-relaxed text-ink/62">{card.description}</p>}
    </article>
  )
}
