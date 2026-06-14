import { motion } from "framer-motion"
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

// ISO 3166-1 numeric IDs for all 54 African countries
const AFRICA_IDS = new Set([
  12, 24, 204, 72, 854, 108, 132, 120, 140, 148, 174, 180, 178, 262, 818,
  226, 232, 748, 231, 266, 270, 288, 324, 624, 384, 404, 426, 430, 434, 450,
  454, 466, 478, 480, 504, 508, 516, 562, 566, 646, 678, 686, 690, 694, 706,
  710, 728, 729, 834, 768, 788, 800, 894, 716,
])

const CHINA_ID = 156

const officeMarkers = [
  {
    name: "Beijing",
    label: "China",
    coords: [116.4, 39.9] as [number, number],
    badge: "Registered Entity",
    fill: "#c4a574",
    pulse: "rgba(196,165,116,0.5)",
  },
  {
    name: "Nairobi",
    label: "Nairobi",
    coords: [36.8, -1.3] as [number, number],
    badge: "East Africa HQ",
    fill: "#3157d5",
    pulse: "rgba(49,87,213,0.5)",
  },
  {
    name: "Kampala",
    label: "Kampala",
    coords: [32.6, 0.3] as [number, number],
    badge: "Operations",
    fill: "#b87333",
    pulse: "rgba(184,115,51,0.5)",
  },
]

const offices = [
  {
    badge: "Registered Entity",
    city: "China",
    country: "People's Republic of China",
    coords: "39°54'N  116°23'E",
    description:
      "Global legal entity providing international trademark protection, trade rights, and multi-jurisdictional corporate reach.",
    badgeColor: "bg-brand",
  },
  {
    badge: "East Africa HQ",
    city: "Nairobi",
    country: "Kenya",
    coords: "1°17'S  36°49'E",
    description:
      "Primary operational hub. All six brands operate from Nairobi — product engineering, cloud, AI, security, experience, and ventures.",
    badgeColor: "bg-ion",
  },
  {
    badge: "Operations",
    city: "Kampala",
    country: "Uganda",
    coords: "0°20'N  32°34'E",
    description:
      "Active operational office serving the Ugandan market and supporting East African Community expansion.",
    badgeColor: "bg-copper",
  },
]

const stats = [
  { value: "54", label: "Countries", sub: "All of Africa" },
  { value: "3", label: "Offices", sub: "Active entities" },
  { value: "2", label: "Continents", sub: "Africa & Asia" },
  { value: "↗", label: "Expanding", sub: "Globally" },
]

const africanRegions = [
  {
    region: "East Africa",
    countries: ["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", "Burundi", "Somalia", "Djibouti", "Eritrea", "South Sudan"],
  },
  {
    region: "West Africa",
    countries: ["Nigeria", "Ghana", "Senegal", "Ivory Coast", "Cameroon", "Benin", "Togo", "Guinea", "Sierra Leone", "Liberia", "Gambia", "Burkina Faso", "Mali", "Niger", "Mauritania", "Guinea-Bissau"],
  },
  {
    region: "North Africa",
    countries: ["Egypt", "Morocco", "Libya", "Tunisia", "Algeria", "Sudan"],
  },
  {
    region: "Central Africa",
    countries: ["DRC", "Rep. Congo", "C.A.R", "Gabon", "Equatorial Guinea", "Chad", "São Tomé"],
  },
  {
    region: "Southern Africa",
    countries: ["South Africa", "Zambia", "Zimbabwe", "Mozambique", "Botswana", "Namibia", "Angola", "Malawi", "Lesotho", "Eswatini"],
  },
  {
    region: "Island Nations",
    countries: ["Mauritius", "Madagascar", "Seychelles", "Comoros", "Cabo Verde"],
  },
]

const allCountries = africanRegions.flatMap((r) => r.countries)

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
}

export function GlobalPresence() {
  return (
    <section id="presence" className="relative overflow-hidden bg-night px-5 py-20 md:px-10 md:py-28 lg:px-16">
      <div className="container-wide">

        {/* ── Header ─────────────────────────────────────── */}
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/32">
              Geographic presence
            </p>
            <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[0.98] text-white">
              One group.
              <br />
              <span className="text-brand-light">Three offices.</span>
              <br />
              Fifty-four countries.
            </h2>
          </div>
          <p className="border-l border-white/10 pl-6 text-base leading-relaxed text-white/42">
            Registered globally in China for international trademark protection
            and trade rights. Operational in Nairobi and Kampala, with active
            market coverage across all 54 African nations — and expanding to
            markets beyond.
          </p>
        </div>

        {/* ── Main grid ──────────────────────────────────── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">

          {/* LEFT — Real SVG world map */}
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl border border-white/8 bg-[#0b1118] sm:min-h-[380px] lg:min-h-0">
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ center: [62, 8], scale: 195 }}
              width={800}
              height={520}
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const id = Number(geo.id)
                    const isAfrica = AFRICA_IDS.has(id)
                    const isChina = id === CHINA_ID
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={
                          isAfrica
                            ? "#1a3545"
                            : isChina
                              ? "#2a1f18"
                              : "#0f1620"
                        }
                        stroke="#0b1118"
                        strokeWidth={0.6}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            outline: "none",
                            fill: isAfrica
                              ? "#204460"
                              : isChina
                                ? "#3d2d1e"
                                : "#0f1620",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    )
                  })
                }
              </Geographies>

              {officeMarkers.map((marker, i) => (
                <Marker key={marker.name} coordinates={marker.coords}>
                  {/* Outer pulse ring 1 */}
                  <motion.circle
                    r={0}
                    fill="none"
                    stroke={marker.pulse}
                    strokeWidth={1.2}
                    initial={{ r: 4, opacity: 0.8 }}
                    animate={{ r: 22, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      delay: i * 0.7,
                      ease: "easeOut" as const,
                    }}
                  />
                  {/* Outer pulse ring 2 (staggered) */}
                  <motion.circle
                    r={0}
                    fill="none"
                    stroke={marker.pulse}
                    strokeWidth={0.8}
                    initial={{ r: 4, opacity: 0.5 }}
                    animate={{ r: 14, opacity: 0 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2.4,
                      delay: i * 0.7 + 0.8,
                      ease: "easeOut" as const,
                    }}
                  />
                  {/* Core dot */}
                  <circle r={4} fill={marker.fill} />
                  <circle r={2} fill="#ffffff" opacity={0.9} />
                  {/* City label */}
                  <text
                    textAnchor={marker.name === "Beijing" ? "end" : "start"}
                    x={marker.name === "Beijing" ? -8 : 8}
                    y={-6}
                    style={{
                      fill: "rgba(255,255,255,0.75)",
                      fontSize: 9,
                      fontWeight: 700,
                      fontFamily: "Inter, sans-serif",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {marker.label.toUpperCase()}
                  </text>
                </Marker>
              ))}
            </ComposableMap>

            {/* Office legend strip */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0b1118] via-[#0b1118]/85 to-transparent px-5 pb-4 pt-8">
              <div className="flex flex-wrap gap-4">
                {offices.map((o) => (
                  <div key={o.city} className="flex items-center gap-2">
                    <span className={`h-2 w-2 shrink-0 rounded-full ${o.badgeColor}`} />
                    <div>
                      <p className="text-[10px] font-bold leading-none text-white/75">{o.city}</p>
                      <p className="mt-0.5 text-[9px] leading-none text-white/30">{o.badge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Stats + coverage */}
          <div className="flex flex-col gap-5">

            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/8 bg-white/[0.04]">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-night px-4 py-4 sm:px-6 sm:py-5"
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.6 }}
                  variants={fadeUp}
                >
                  <p className="font-display text-[2.6rem] font-semibold leading-none text-white">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-white/58">{stat.label}</p>
                  <p className="text-xs text-white/28">{stat.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* Pan-African coverage */}
            <div className="flex-1 rounded-xl border border-white/8 px-5 py-5">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/28">
                Pan-African coverage
              </p>
              <div className="space-y-3">
                {africanRegions.map((region) => (
                  <div
                    key={region.region}
                    className="flex items-start justify-between gap-3 border-b border-white/[0.06] pb-3 last:border-0 last:pb-0"
                  >
                    <p className="w-28 shrink-0 text-xs font-semibold text-white/55">
                      {region.region}
                    </p>
                    <div className="flex flex-wrap justify-end gap-1">
                      {region.countries.slice(0, 5).map((c) => (
                        <span
                          key={c}
                          className="rounded-full bg-white/[0.06] px-2 py-0.5 text-[9px] text-white/38"
                        >
                          {c}
                        </span>
                      ))}
                      {region.countries.length > 5 && (
                        <span className="rounded-full bg-white/[0.04] px-2 py-0.5 text-[9px] text-white/22">
                          +{region.countries.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Global expansion note */}
            <div className="rounded-xl border border-brand/20 bg-brand/[0.08] px-5 py-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-light/70">
                And beyond
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-white/50">
                Active expansion into the Middle East, South Asia, Southeast
                Asia, and European markets through ANTIKRA Olympia ventures.
              </p>
            </div>

          </div>
        </div>

        {/* ── Country marquee strip ───────────────────────── */}
        <div className="mt-10 overflow-hidden rounded-xl border border-white/6 py-3">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-6 whitespace-nowrap">
            {[...allCountries, ...allCountries].map((country, i) => (
              <span
                key={`${country}-${i}`}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/22"
              >
                {country}
                <span className="mx-3 text-white/10">·</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
