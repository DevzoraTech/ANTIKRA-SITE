import { ArrowRight } from "lucide-react"
import { products } from "../../../domain/products"
import type { ProductSummary } from "../../../domain/products"
import rembehImg from "../../../assets/home/rembeh.png"
import carmieImg from "../../../assets/home/carmie.png"

const productVisuals: Record<ProductSummary["id"], string> = {
  rembeh: rembehImg,
  carmie: carmieImg,
}

const accentText = {
  green: "text-[#0d6b47]",
  blue: "text-[#174783]",
} as const

export function ProductPortfolioSection() {
  return (
    <section id="portfolio" className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
              02 / What we own
            </p>
            <h2 className="mt-4 font-display text-[2.4rem] font-semibold leading-[1.02] tracking-[-0.025em] text-[#15110f] md:text-[2.9rem]">
              Products that live inside real operations.
            </h2>
          </div>
          <p className="max-w-[280px] text-[0.82rem] leading-[1.55] text-[#161616]/58">
            Not demos. Operating technology for markets where complexity is the
            default.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.href}
              className="group relative min-h-[340px] overflow-hidden border border-black/10 bg-[#f3eee4]"
            >
              <img
                src={productVisuals[product.id]}
                alt=""
                className="absolute inset-0 h-full w-full object-cover object-[62%_50%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f5ed_0%,#f9f5ed_44%,rgba(249,245,237,0.94)_58%,rgba(249,245,237,0)_80%)]" />
              <div className="relative z-10 flex min-h-[340px] w-[56%] min-w-[240px] flex-col justify-between p-7 md:p-9">
                <div>
                  <div className="flex items-baseline gap-3">
                    <p className={`font-display text-[1.4rem] font-semibold ${accentText[product.accent]}`}>
                      {product.number}
                    </p>
                    <p className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#161616]/45">
                      / {product.total}
                    </p>
                  </div>
                  <h3
                    className={`mt-4 font-display text-[2.15rem] font-semibold uppercase tracking-[0.04em] ${accentText[product.accent]}`}
                  >
                    {product.name}
                  </h3>
                  <p className="mt-2 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#161616]/6">
                    {product.category}
                  </p>
                  <p className="mt-5 max-w-[250px] text-[0.88rem] leading-[1.55] text-[#2c2824]">
                    {product.description}
                  </p>

                  <dl className="mt-7 space-y-2.5 border-t border-black/10 pt-5">
                    {product.details.map((detail) => (
                      <div key={detail.label} className="flex gap-4 text-[0.74rem]">
                        <dt className="w-16 shrink-0 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-[#161616]/5">
                          {detail.label}
                        </dt>
                        <dd className="text-[#2c2824]">{detail.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                <div className="mt-8">
                  <p className="font-display-sans text-[0.5rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
                    Built by
                  </p>
                  <p className="mt-1.5 text-[0.66rem] leading-[1.45] text-[#3a3530]">
                    {product.builtBy.join(" · ")}
                  </p>
                  <span
                    className={`mt-5 inline-flex items-center gap-4 text-[0.76rem] font-semibold ${accentText[product.accent]}`}
                  >
                    Explore {product.name}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
