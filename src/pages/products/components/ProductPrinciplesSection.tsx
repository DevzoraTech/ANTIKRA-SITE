import { productPrinciples } from "../../../domain/products"

export function ProductPrinciplesSection() {
  return (
    <section className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="grid gap-8 md:grid-cols-[1.05fr_1fr] md:items-end">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              04 / Product principles
            </p>
            <h2 className="mt-4 max-w-[480px] font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.85rem]">
              How we decide what becomes a product.
            </h2>
          </div>
          <p className="max-w-[380px] text-[0.86rem] leading-[1.58] text-[#161616]/62 md:justify-self-end">
            ANTIKRA products exist to carry operational load — not to showcase
            technology for its own sake.
          </p>
        </div>

        <div className="mt-12 grid border-t border-black/10 md:grid-cols-4">
          {productPrinciples.map((principle, index) => (
            <div
              key={principle.id}
              className={`group py-7 md:px-6 ${
                index === 0
                  ? "md:pl-0"
                  : "border-t border-black/10 md:border-l md:border-t-0"
              }`}
            >
              <p className="font-display text-[1.35rem] font-semibold text-[#9a6d23]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#161616] transition-colors group-hover:text-[#9a6d23]">
                {principle.title}
              </h3>
              <div className="mt-3 h-px w-6 origin-left bg-[#9a6d23]/70 transition-transform duration-300 group-hover:scale-x-150" />
              <p className="mt-3 max-w-[200px] text-[0.74rem] leading-[1.5] text-[#161616]/55">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
