const layers = [
  {
    title: "Products",
    description: "Digital solutions that create impact",
  },
  {
    title: "Infrastructure",
    description: "Scalable, secure and high-availability systems",
  },
  {
    title: "Data",
    description: "Turning data into actionable insight",
  },
  {
    title: "Security",
    description: "Built-in protection for systems and data",
  },
  {
    title: "Operations",
    description: "Reliable processes. Measured performance.",
  },
]

export function WhoWeAreSection() {
  return (
    <section className="border-b border-black/10 bg-[#f4eee5]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
          01 / Who we are
        </p>
        <div className="mt-5 grid gap-10 md:grid-cols-[1.06fr_1fr] md:items-end">
          <h2 className="max-w-[480px] font-display text-[3.05rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[#15110f] md:text-[3.75rem]">
            One organization.
            <br />
            Multiple layers
            <br />
            of technology.
          </h2>
          <p className="max-w-[420px] justify-self-start text-[0.92rem] leading-[1.58] text-[#161616]/72 md:justify-self-end md:pb-1">
            ANTIKRA combines product engineering, cloud infrastructure, data,
            security, research and operating capability to build technology that
            works beyond the prototype.
          </p>
        </div>

        <div className="mt-12 grid border-t border-black/10 md:grid-cols-5">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className={`group py-7 md:px-6 ${
                index === 0
                  ? "md:pl-0"
                  : "border-t border-black/10 md:border-l md:border-t-0"
              }`}
            >
              <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                {layer.title}
              </p>
              <div className="mt-3 h-px w-6 origin-left bg-[#9a6d23]/70 transition-transform duration-300 group-hover:scale-x-150" />
              <p className="mt-3 max-w-[170px] text-[0.7rem] leading-[1.45] text-[#161616]/55">
                {layer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
