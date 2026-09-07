import {
  BadgeDollarSign,
  Banknote,
  Boxes,
  BriefcaseBusiness,
  Building2,
  ChartNoAxesCombined,
  Cloud,
  Landmark,
  MapPin,
  RefreshCw,
  Scale,
  ScrollText,
  Shield,
  Smartphone,
  Sparkles,
  Store,
  UserRound,
  Users,
} from "lucide-react"
import type {
  ProductAccent,
  ProductId,
  ProductSummary,
  ProductSystemNode,
  RembehMetric,
  RembehSystemCard,
} from "../../../domain/products"
import { CompanyIcon } from "../../companies/components/CompanyIcon"

export const productAccentStyles: Record<
  ProductAccent,
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
  blue: {
    text: "text-[#1b55ad]",
    border: "border-[#1b55ad]",
    bg: "bg-[#1b55ad]",
    button: "bg-[#1b55ad] text-white hover:bg-[#164992]",
    pale: "bg-[#f2f6ff]",
    stroke: "#1b55ad",
    fill: "#1b55ad",
  },
}

const productIcons = {
  briefcase: BriefcaseBusiness,
  sparkles: Sparkles,
  shield: Shield,
  refresh: RefreshCw,
  landmark: Landmark,
  store: Store,
  user: UserRound,
  badge: BadgeDollarSign,
  users: Users,
  cloud: Cloud,
  phone: Smartphone,
  scale: Scale,
  building: Building2,
  map: MapPin,
  cash: Banknote,
  chart: ChartNoAxesCombined,
  boxes: Boxes,
  report: ScrollText,
}

export function ProductSectionKicker({ children, accent = "green" }: { children: string; accent?: ProductAccent }) {
  return (
    <p className={`font-display-sans text-[0.68rem] font-bold uppercase tracking-[0.42em] ${productAccentStyles[accent].text}`}>
      {children}
    </p>
  )
}

export function ProductIcon({
  icon,
  accent,
  framed = false,
}: {
  icon: string
  accent: ProductAccent
  framed?: boolean
}) {
  const Icon = productIcons[icon as keyof typeof productIcons] ?? BriefcaseBusiness
  const styles = productAccentStyles[accent]

  if (!framed) {
    return <Icon className={`h-6 w-6 ${styles.text}`} strokeWidth={1.35} />
  }

  return (
    <span className={`flex h-14 w-14 items-center justify-center rounded-full border ${styles.border} ${styles.text}`}>
      <Icon className="h-7 w-7" strokeWidth={1.25} />
    </span>
  )
}

export function ProductBadge({
  product,
  size = "md",
}: {
  product: Pick<ProductSummary, "name" | "initial" | "accent">
  size?: "sm" | "md" | "lg" | "xl"
}) {
  const styles = productAccentStyles[product.accent]
  const sizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-14 w-14 text-2xl",
    lg: "h-20 w-20 text-4xl",
    xl: "h-24 w-24 text-5xl",
  }

  return (
    <span
      className={`${sizes[size]} ${styles.bg} flex shrink-0 items-center justify-center font-display-sans font-black text-white shadow-sm`}
      style={{ clipPath: "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0 50%)" }}
      aria-label={`${product.name} product mark`}
    >
      {product.initial}
    </span>
  )
}

function MiniLineChart({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 180 72" className="h-16 w-full">
      <path d="M2 54c18-18 28-22 42-12 17 12 24-20 44-9 21 13 28-26 48-15 14 8 25-10 42-14" stroke={color} strokeWidth="3" fill="none" />
      <path d="M2 66h176" stroke="#1a1a1a" strokeOpacity="0.08" />
    </svg>
  )
}

export function ProductPhoneMock({ product, tall = false }: { product: ProductSummary; tall?: boolean }) {
  const styles = productAccentStyles[product.accent]

  return (
    <div className={`${tall ? "h-[250px] w-[118px]" : "h-[220px] w-[104px]"} rounded-t-[1.5rem] border-[6px] border-ink bg-white p-3 shadow-xl`}>
      <div className={`${styles.bg} -mx-3 -mt-3 rounded-t-[1.05rem] px-3 py-3 text-white`}>
        <p className="text-[0.52rem] opacity-80">{product.id === "rembeh" ? "Good morning" : "Find a service"}</p>
        <p className="mt-1 text-[0.62rem] font-semibold">{product.id === "rembeh" ? "Agent James" : "Nearby Services"}</p>
      </div>
      <div className="mt-3 space-y-2">
        {product.id === "rembeh" ? (
          <>
            <p className="text-[0.48rem] font-semibold text-ink/45">Today's Summary</p>
            {["UGX 620,000", "17 repayments", "3 new applications"].map((item) => (
              <div key={item} className="rounded border border-black/8 p-2 text-[0.45rem] text-ink/72">
                {item}
              </div>
            ))}
            <div className={`${styles.bg} mt-3 rounded px-3 py-2 text-center text-[0.45rem] font-semibold text-white`}>
              Record Payment
            </div>
          </>
        ) : (
          <>
            {["Auto Diagnostic", "Towing", "Quick Fix Garage"].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded border border-black/8 p-2 text-[0.45rem] text-ink/72">
                <span className={`h-3 w-3 ${styles.bg}`} />
                {item}
              </div>
            ))}
            <MiniLineChart color={styles.stroke} />
          </>
        )}
      </div>
    </div>
  )
}

export function ProductDashboardMock({
  product,
  compact = false,
}: {
  product: ProductSummary
  compact?: boolean
}) {
  const styles = productAccentStyles[product.accent]

  return (
    <div className={`relative overflow-hidden border border-black/10 bg-white shadow-sm ${compact ? "min-h-[185px]" : "min-h-[310px]"}`}>
      <div className="absolute inset-y-0 left-0 w-[92px] bg-[#073620]" style={{ backgroundColor: product.accent === "blue" ? "#0f3471" : "#063a24" }} />
      <div className="absolute left-5 top-5 flex items-center gap-2 text-white">
        <ProductBadge product={product} size="sm" />
        <span className="text-[0.62rem] font-semibold">{product.name}</span>
      </div>
      <div className={`${compact ? "left-[110px] top-5 right-5" : "left-[126px] top-7 right-7"} absolute`}>
        <p className="text-xs font-semibold text-ink">Dashboard</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            product.id === "rembeh" ? "UGX 1,234,560,000" : "1,842",
            product.id === "rembeh" ? "UGX 842,450,000" : "312",
            product.id === "rembeh" ? "2,341" : "1,530",
          ].map((metric, index) => (
            <div key={metric} className="rounded-md border border-black/8 bg-[#fffdfa] p-3">
              <p className="text-[0.5rem] text-ink/42">{["Total Portfolio", "Total Collected", "Active"][index]}</p>
              <p className="mt-2 text-[0.72rem] font-bold text-ink">{metric}</p>
              <p className={`mt-1 text-[0.48rem] ${styles.text}`}>+{index + 4}.1%</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-md border border-black/8 bg-white p-4">
            <p className="text-[0.55rem] font-semibold text-ink/46">
              {product.id === "rembeh" ? "Collections Overview" : "Bookings Overview"}
            </p>
            <MiniLineChart color={styles.stroke} />
          </div>
          <div className="rounded-md border border-black/8 bg-white p-4">
            <p className="text-[0.55rem] font-semibold text-ink/46">
              {product.id === "rembeh" ? "Overdue Exposure" : "Recent Activity"}
            </p>
            {product.id === "rembeh" ? (
              <svg viewBox="0 0 90 90" className="mx-auto mt-1 h-20 w-20">
                <circle cx="45" cy="45" r="28" stroke="#dbe8df" strokeWidth="16" fill="none" />
                <path d="M45 17a28 28 0 1 1-24 42" stroke={styles.stroke} strokeWidth="16" fill="none" />
              </svg>
            ) : (
              <div className="mt-3 space-y-2">
                {["New Booking", "Service Completed", "Towing Request"].map((item) => (
                  <p key={item} className="rounded border border-black/8 px-2 py-1.5 text-[0.5rem] text-ink/60">
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductDeviceCluster({ product, hero = false }: { product: ProductSummary; hero?: boolean }) {
  const styles = productAccentStyles[product.accent]

  return (
    <div className={`relative ${hero ? "h-[260px] md:h-[340px]" : "h-[360px]"} w-full overflow-hidden`}>
      <div className="absolute inset-0 opacity-70">
        <svg viewBox="0 0 620 360" className="h-full w-full">
          <path d="M30 250c105-96 190-62 296-137 76-54 164-38 260-88" stroke={styles.stroke} strokeOpacity="0.18" strokeDasharray="5 9" fill="none" />
          {Array.from({ length: 18 }).map((_, index) => (
            <circle
              key={index}
              cx={42 + ((index * 91) % 520)}
              cy={46 + ((index * 53) % 250)}
              r="3"
              fill={styles.fill}
              fillOpacity={index % 3 === 0 ? 0.5 : 0.22}
            />
          ))}
        </svg>
      </div>
      <div className={`absolute ${hero ? "left-[6%] top-[18%] w-[62%]" : "right-3 top-8 w-[70%]"} rounded-xl border-[8px] border-ink bg-ink p-1 shadow-2xl`}>
        <ProductDashboardMock product={product} compact={hero} />
      </div>
      <div className={`absolute ${hero ? "right-[7%] top-[28%]" : "left-[8%] bottom-2"}`}>
        <ProductPhoneMock product={product} tall={!hero} />
      </div>
    </div>
  )
}

export function ProductHeroNetworkVisual({ rembeh, carmie }: { rembeh: ProductSummary; carmie: ProductSummary }) {
  return (
    <div className="relative h-[320px] w-full overflow-hidden">
      <div className="absolute left-[5%] top-7 w-[34%]">
        <p className="mb-3 text-sm font-bold uppercase text-[#075c3b]">Rembeh</p>
        <ProductDeviceCluster product={rembeh} hero />
      </div>
      <div className="absolute right-[2%] top-8 w-[37%]">
        <p className="mb-3 text-right text-sm font-bold uppercase text-[#1b55ad]">Carmie</p>
        <ProductDeviceCluster product={carmie} hero />
      </div>
      <div className="absolute left-1/2 top-[44%] h-[138px] w-[138px] -translate-x-1/2 -translate-y-1/2">
        <svg viewBox="0 0 180 180" className="h-full w-full overflow-visible" fill="none">
          <path d="M90 10 160 50v80L90 170 20 130V50z" fill="#fffdfa" stroke="#b37217" strokeOpacity="0.45" />
          <path d="M42 64 90 36l48 28-48 28z" fill="#fbf4ea" stroke="#b37217" strokeOpacity="0.42" />
          <path d="M42 64v54l48 28V92M138 64v54l-48 28" stroke="#b37217" strokeOpacity="0.3" />
          <circle cx="90" cy="72" r="22" stroke="#b37217" strokeOpacity="0.45" />
          <circle cx="90" cy="72" r="10" fill="#b37217" fillOpacity="0.22" />
        </svg>
      </div>
    </div>
  )
}

export function ProductSystemMap({ product, nodes }: { product: ProductSummary; nodes: ProductSystemNode[] }) {
  const styles = productAccentStyles[product.accent]
  const positions = [
    "left-1/2 top-0 -translate-x-1/2",
    "right-0 top-[35%]",
    "right-[14%] bottom-0",
    "left-[14%] bottom-0",
    "left-0 top-[35%]",
  ]

  return (
    <div className="relative mx-auto min-h-[330px] max-w-[520px]">
      <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/12" />
      <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-black/12" />
      <div className="absolute left-1/2 top-1/2 flex h-[122px] w-[122px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
        <ProductBadge product={product} size="lg" />
        <p className={`mt-2 text-sm font-bold uppercase ${styles.text}`}>{product.name}</p>
      </div>
      <svg viewBox="0 0 520 330" className="absolute inset-0 h-full w-full" fill="none">
        <path d="M260 166 260 42M260 166 418 152M260 166 354 276M260 166 166 276M260 166 102 152" stroke={styles.stroke} strokeOpacity="0.32" strokeDasharray="5 8" />
        <circle cx="260" cy="166" r="4" fill={styles.fill} fillOpacity="0.5" />
      </svg>
      {nodes.map((node, index) => (
        <div key={node.id} className={`absolute flex items-center gap-3 ${positions[index]}`}>
          <CompanyIcon icon={node.icon} accent={node.accent} framed size="sm" />
          <div className={index === 0 ? "text-center" : ""}>
            <p className="text-[0.68rem] font-bold uppercase text-ink">{node.name}</p>
            <p className="text-[0.62rem] text-ink/62">{node.discipline}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export function SystemCardVisual({ card }: { card: RembehSystemCard }) {
  if (card.visual === "map") {
    return (
      <div className="mt-5 h-[128px] overflow-hidden rounded border border-black/10 bg-[#f5faf7]">
        <svg viewBox="0 0 240 128" className="h-full w-full">
          <path d="M0 38h240M0 84h240M34 0v128M98 0v128M172 0v128" stroke="#c9ded2" />
          <path d="M38 104c40-56 80-24 134-84" stroke="#1b67c9" strokeWidth="2.4" fill="none" />
          {[70, 130, 174].map((x, index) => (
            <MapPin key={x} x={x} y={index === 1 ? 30 : 60} width="18" height="18" color="#1b67c9" strokeWidth={1.8} />
          ))}
        </svg>
      </div>
    )
  }

  if (card.visual === "collections") {
    return (
      <div className="mt-5 rounded border border-black/10 bg-white p-4">
        <p className="text-[0.58rem] text-ink/45">Overdue Exposure</p>
        <p className="mt-2 text-xs font-bold text-ink">UGX 196,230,000</p>
        <svg viewBox="0 0 90 72" className="mx-auto mt-3 h-20">
          <circle cx="36" cy="36" r="22" fill="none" stroke="#dcece3" strokeWidth="14" />
          <path d="M36 14a22 22 0 1 1-19 33" fill="none" stroke="#075c3b" strokeWidth="14" />
        </svg>
      </div>
    )
  }

  if (card.visual === "borrowers") {
    return (
      <div className="mt-5 rounded border border-black/10 bg-white p-4">
        <Users className="h-10 w-10 text-[#075c3b]" strokeWidth={1.25} />
        <p className="mt-4 text-xs font-bold text-ink">Amina Nassool</p>
        <p className="mt-1 text-[0.58rem] text-ink/48">+256 78 123 4567</p>
        <p className="mt-5 text-[0.58rem] text-ink/48">Total Outstanding</p>
        <p className="mt-1 text-sm font-bold text-ink">UGX 650,000</p>
      </div>
    )
  }

  if (card.visual === "reporting") {
    return (
      <div className="mt-5 rounded border border-black/10 bg-white p-4">
        <p className="text-[0.58rem] text-ink/45">Portfolio Summary</p>
        <p className="mt-5 text-[0.58rem] text-ink/48">Total Portfolio</p>
        <p className="mt-1 text-sm font-bold text-ink">UGX 1,234,560,000</p>
        <p className="mt-5 text-[0.58rem] text-ink/48">Branches</p>
        <p className="mt-1 text-sm font-bold text-ink">24</p>
      </div>
    )
  }

  return (
    <div className="mt-5 rounded border border-black/10 bg-white p-4">
      <p className="text-[0.58rem] text-ink/45">{card.visual === "cash" ? "Today's Cash Summary" : "Total Loans"}</p>
      <p className="mt-2 text-sm font-bold text-ink">{card.visual === "cash" ? "UGX 700,000" : "2,341"}</p>
      <div className="mt-4 space-y-3">
        {["LN-2006-00123", "LN-2006-00124", "LN-2006-00125"].map((row) => (
          <div key={row} className="flex justify-between border-b border-black/8 pb-2 text-[0.55rem] text-ink/55">
            <span>{row}</span>
            <span>{card.visual === "cash" ? "UGX 120,000" : "Due"}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function MetricVisual({ metric }: { metric: RembehMetric }) {
  if (metric.visual === "donut") {
    return (
      <svg viewBox="0 0 90 70" className="mt-3 h-14 w-full">
        <circle cx="45" cy="35" r="22" fill="none" stroke="#dcece3" strokeWidth="13" />
        <path d="M45 13a22 22 0 1 1-19 33" fill="none" stroke="#075c3b" strokeWidth="13" />
      </svg>
    )
  }

  if (metric.visual === "bars") {
    return (
      <svg viewBox="0 0 100 62" className="mt-3 h-14 w-full">
        {[20, 30, 24, 42, 50, 38, 58].map((height, index) => (
          <rect key={index} x={index * 13 + 4} y={60 - height} width="8" height={height} fill="#075c3b" fillOpacity="0.22" stroke="#075c3b" strokeOpacity="0.35" />
        ))}
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 110 62" className="mt-3 h-14 w-full">
      <path d="M2 48c12-20 24-10 36-20 16-13 24 18 40-3 11-14 20-2 30-18" stroke="#075c3b" strokeWidth="2.5" fill="none" />
      <path d="M2 60h106" stroke="#1a1a1a" strokeOpacity="0.08" />
    </svg>
  )
}

export function ProductLandscapeSketch({ accent = "green" }: { accent?: ProductAccent }) {
  const styles = productAccentStyles[accent]

  return (
    <svg viewBox="0 0 420 150" className="h-full w-full" fill="none">
      <path d="M0 122c72-42 126-48 190-28 72 22 130-34 230-50v106H0z" fill={styles.fill} fillOpacity="0.08" />
      <path d="M0 128c76-46 124-52 192-31 72 23 132-36 228-54" stroke={styles.stroke} strokeOpacity="0.34" />
      <path d="M202 150c8-42 38-63 82-77 32-10 56-20 70-46" stroke="#b37217" strokeOpacity="0.42" />
      <path d="M342 38c0 20-22 40-22 40s-22-20-22-40a22 22 0 1 1 44 0z" fill="#c58a32" fillOpacity="0.82" stroke="#8b5e19" />
      <circle cx="320" cy="38" r="8" fill="#fffdfa" />
    </svg>
  )
}

export function getProductById(products: ProductSummary[], id: ProductId) {
  return products.find((product) => product.id === id)
}
