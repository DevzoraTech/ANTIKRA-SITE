import { Box, Brain, Cloud, Landmark, Orbit, Shield, Sparkles, SunMedium, Target } from "lucide-react"
import type { CompanyCard, SystemStep } from "../../../domain/antikra"

type CompanyIconName = CompanyCard["icon"]
type StepIconName = SystemStep["icon"]
type Accent = CompanyCard["accent"] | SystemStep["accent"]

const accentClasses: Record<Accent, string> = {
  bronze: "text-brand border-brand/35",
  green: "text-[#08784c] border-[#08784c]/35",
  violet: "text-[#7653df] border-[#7653df]/35",
  blue: "text-[#1b67c9] border-[#1b67c9]/35",
  coral: "text-[#ff4e2d] border-[#ff4e2d]/35",
  gold: "text-[#b37217] border-[#b37217]/35",
}

const companyIcons = {
  box: Box,
  cloud: Cloud,
  orbit: Orbit,
  shield: Shield,
  sun: SunMedium,
  venture: Landmark,
} satisfies Record<CompanyIconName, typeof Box>

const stepIcons = {
  target: Target,
  pencil: Sparkles,
  code: Box,
  cloud: Cloud,
  brain: Brain,
} satisfies Record<StepIconName, typeof Box>

interface CompanyIconProps {
  icon: CompanyIconName | StepIconName
  accent: Accent
  framed?: boolean
  size?: "sm" | "md" | "lg"
}

export function CompanyIcon({ icon, accent, framed = false, size = "md" }: CompanyIconProps) {
  const Icon = { ...companyIcons, ...stepIcons }[icon]
  const iconSize = size === "lg" ? "h-8 w-8" : size === "sm" ? "h-5 w-5" : "h-7 w-7"

  if (!framed) {
    return <Icon className={`${iconSize} ${accentClasses[accent].split(" ")[0]}`} strokeWidth={1.35} />
  }

  return (
    <span className={`flex h-16 w-16 items-center justify-center rounded-full border ${accentClasses[accent]}`}>
      <Icon className={iconSize} strokeWidth={1.2} />
    </span>
  )
}

export function getAccentText(accent: Accent) {
  return accentClasses[accent].split(" ")[0]
}
