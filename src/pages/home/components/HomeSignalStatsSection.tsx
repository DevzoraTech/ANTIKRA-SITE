const signals = [
  { value: "06", label: "Specialist companies", detail: "one integrated system" },
  { value: "02", label: "Products in operation", detail: "Rembeh · Carmie" },
  { value: "06", label: "Solution disciplines", detail: "clients can engage" },
  { value: "Global", label: "Operating footprint", detail: "including Kampala, Uganda" },
]

export function HomeSignalStatsSection() {
  return (
    <section className="bg-[#111414] text-white">
      <div className="mx-auto grid w-full max-w-[1500px] px-8 py-11 md:grid-cols-4 md:px-12 xl:px-[72px]">
        {signals.map((signal, index) => (
          <div
            key={`${signal.value}-${signal.label}`}
            className={`min-h-[108px] py-4 md:px-8 ${
              index === 0
                ? "md:pl-0"
                : "border-t border-white/12 md:border-l md:border-t-0"
            }`}
          >
            {index === 0 && (
              <p className="mb-5 font-display-sans text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#a1742e]">
                02 / By the numbers
              </p>
            )}
            <p className="font-display text-[2.2rem] font-semibold leading-none tracking-[0.03em] text-[#a97b32] md:text-[2.45rem]">
              {signal.value}
            </p>
            <p className="mt-3 text-[0.9rem] leading-[1.15] text-white/92">{signal.label}</p>
            <p className="mt-1 text-[0.78rem] leading-[1.35] text-white/58">{signal.detail}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
