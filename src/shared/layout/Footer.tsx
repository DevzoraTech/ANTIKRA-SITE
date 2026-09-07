import { Linkedin, Mail, MapPin, Twitter } from "lucide-react"

const columns = [
  {
    title: "Companies",
    links: [
      ["Our Companies", "/companies"],
      ["Ventures", "/companies/olympia"],
      ["Governance", "/company"],
    ],
  },
  {
    title: "Products",
    links: [
      ["Rembeh", "/products/rembeh"],
      ["Carmie", "/products/carmie"],
      ["All Products", "/products"],
    ],
  },
  {
    title: "Capabilities",
    links: [
      ["Product Engineering", "/solutions/product-engineering"],
      ["Cloud & Infrastructure", "/solutions/cloud-infrastructure"],
      ["AI & Data", "/solutions/ai-data"],
      ["Cybersecurity", "/solutions/cybersecurity"],
      ["Experience & Design", "/solutions/experience-design"],
      ["Venture Building", "/solutions/venture-building"],
    ],
  },
  {
    title: "About",
    links: [
      ["Who We Are", "/company"],
      ["Leadership", "/company/leadership"],
      ["Careers", "/company/careers"],
      ["Contact", "/company/contact"],
    ],
  },
  {
    title: "Insights",
    links: [["Research", "/research"]],
  },
]

export function Footer() {
  return (
    <footer className="bg-[#111211] text-white">
      <div className="mx-auto w-full max-w-[1500px] px-8 py-12 md:px-12 xl:px-[72px]">
        <div className="grid gap-9 md:grid-cols-2 lg:grid-cols-[1.35fr_repeat(5,1fr)_1.1fr]">
          <div>
            <p className="font-display text-[1.75rem] font-semibold uppercase leading-none tracking-[0.22em] text-[#a97b32]">
              ANTIKRA
            </p>
            <p className="mt-1 font-display-sans text-[0.42rem] font-black uppercase tracking-[0.5em] text-white/52">
              Group
            </p>
            <p className="mt-5 max-w-[205px] text-[0.68rem] leading-[1.55] text-white/45">
              Technology group building products, infrastructure and companies
              for complex environments.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display-sans text-[0.54rem] font-extrabold uppercase tracking-[0.18em] text-[#a97b32]">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[0.66rem] text-white/48 transition-colors hover:text-white"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display-sans text-[0.54rem] font-extrabold uppercase tracking-[0.18em] text-[#a97b32]">
              Kampala, Uganda
            </h3>
            <p className="mt-4 flex items-center gap-2 text-[0.66rem] text-white/48">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
              Building from Africa
            </p>
            <div className="mt-5 flex gap-4 text-white/54">
              <a
                href="https://linkedin.com/company/antikragroup"
                aria-label="LinkedIn"
                className="transition-colors hover:text-white"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="https://twitter.com/antikragroup"
                aria-label="Twitter"
                className="transition-colors hover:text-white"
              >
                <Twitter className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a
                href="mailto:hello@antikra.com"
                aria-label="Email"
                className="transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-5 text-[0.62rem] text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 ANTIKRA Group. All rights reserved.</p>
          <div className="flex gap-7">
            <a href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="transition-colors hover:text-white">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
