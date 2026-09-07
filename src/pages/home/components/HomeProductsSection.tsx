import { ArrowRight } from "lucide-react"
import carmieImg from "../../../assets/home/carmie.png"
import rembehImg from "../../../assets/home/rembeh.png"

const products = [
  {
    name: "Rembeh",
    description: "Operating infrastructure for branch-based lending and financial operations.",
    href: "/products/rembeh",
    label: "Explore Rembeh",
    image: rembehImg,
    tone: "text-[#0d6b47]",
    objectPosition: "object-[62%_55%]",
  },
  {
    name: "Carmie",
    description: "A connected platform for vehicle ownership, maintenance and mobility services.",
    href: "/products/carmie",
    label: "Explore Carmie",
    image: carmieImg,
    tone: "text-[#174783]",
    objectPosition: "object-[64%_52%]",
  },
]

export function HomeProductsSection() {
  return (
    <section className="border-b border-black/10 bg-[#fbf8f1]">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-14 md:px-12 md:py-16 xl:px-[72px]">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="font-display-sans text-[0.56rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
              03 / What we build
            </p>
            <h2 className="mt-4 font-display text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.02em] text-[#17110f] md:text-[2.7rem]">
              Products that live inside real operations.
            </h2>
          </div>
          <a
            href="/products"
            className="group hidden items-center gap-5 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.14em] text-[#141414] hover:text-[#9a6d23] md:inline-flex"
          >
            View all products
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="group relative min-h-[290px] overflow-hidden border border-black/10 bg-[#f3eee4]"
            >
              <img
                src={product.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover ${product.objectPosition} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#f9f5ed_0%,#f9f5ed_44%,rgba(249,245,237,0.94)_58%,rgba(249,245,237,0)_80%)]" />
              <div className="relative z-10 flex min-h-[265px] w-[50%] min-w-[240px] flex-col justify-between p-7 md:p-9">
                <div>
                  <h3 className={`font-display text-[2rem] font-semibold uppercase tracking-[0.02em] ${product.tone}`}>
                    {product.name}
                  </h3>
                  <p className="mt-6 text-[0.9rem] leading-[1.58] text-[#2c2824]">
                    {product.description}
                  </p>
                </div>
                <a
                  href={product.href}
                  className={`inline-flex items-center gap-5 text-[0.78rem] font-semibold ${product.tone}`}
                >
                  {product.label}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-250 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
