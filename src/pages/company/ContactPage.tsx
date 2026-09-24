import { useState, type FormEvent } from "react"
import { ArrowRight, Check } from "lucide-react"
import {
  contactIntents,
  contactProcess,
  directContacts,
  submitContactEnquiry,
} from "../../domain/company"

const accentBorder = {
  bronze: "border-[#9a6d23]",
  green: "border-[#0d6b47]",
  violet: "border-[#6b4fcf]",
  blue: "border-[#174783]",
  coral: "border-[#c24f32]",
  gold: "border-[#a8711a]",
} as const

const accentText = {
  bronze: "text-[#9a6d23]",
  green: "text-[#0d6b47]",
  violet: "text-[#6b4fcf]",
  blue: "text-[#174783]",
  coral: "text-[#c24f32]",
  gold: "text-[#a8711a]",
} as const

export function ContactPage() {
  const [intentId, setIntentId] = useState(contactIntents[0].id)
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")
  const intent = contactIntents.find((item) => item.id === intentId) ?? contactIntents[0]

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    setStatus("submitting")
    setStatusMessage("")
    try {
      const receipt = await submitContactEnquiry({
        intentId: intent.id,
        intent: intent.title,
        name: String(data.get("name") ?? "").trim(),
        email: String(data.get("email") ?? "").trim(),
        organization: String(data.get("organization") ?? "").trim(),
        message: String(data.get("message") ?? "").trim(),
        website: String(data.get("company_website") ?? "").trim(),
      })
      form.reset()
      setStatus("success")
      setStatusMessage(`Enquiry received. Reference ${receipt.id}.`)
    } catch (error) {
      setStatus("error")
      setStatusMessage(error instanceof Error ? error.message : "The enquiry could not be submitted.")
    }
  }

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="border-b border-black/10 pt-[88px]">
        <div className="mx-auto grid max-w-[1500px] gap-10 px-8 py-16 md:px-12 lg:grid-cols-[1.1fr_0.9fr] xl:px-[72px]">
          <div>
            <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#9a6d23]">
              ANTIKRA / Company / Contact
            </p>
            <h1 className="mt-6 max-w-[560px] font-display text-[3.1rem] font-semibold leading-[0.98] tracking-[-0.03em] md:text-[3.8rem]">
              Start with what you’re trying to accomplish.
            </h1>
            <p className="mt-6 max-w-[440px] text-[0.95rem] leading-[1.6] text-[#2c2824]">
              Tell us what you need—a product, infrastructure, a venture, research
              collaboration, or a partnership—and we’ll connect you with the right
              team.
            </p>
            <a
              href="#enquiry"
              className="mt-10 inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819]"
            >
              Start an enquiry
            </a>
          </div>
          <div className="border border-black/10 bg-[#111414] p-8 text-white">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-[#e5d0aa]">
              Your enquiry → ANTIKRA
            </p>
            <ul className="mt-6 space-y-3">
              {contactIntents.slice(0, 6).map((item) => (
                <li
                  key={item.id}
                  className={`border-l-2 pl-4 font-display text-[1.1rem] font-semibold ${accentBorder[item.accent]}`}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="enquiry" className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <h2 className="font-display text-[2.3rem] font-semibold tracking-[-0.02em]">
            What brings you to ANTIKRA?
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactIntents.map((item) => {
              const active = item.id === intentId
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setIntentId(item.id)}
                    className={`h-full w-full border p-5 text-left transition-colors ${
                      active
                        ? `${accentBorder[item.accent]} bg-white`
                        : "border-black/10 bg-[#fbf8f1] hover:border-black/25"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className={`font-display text-[1.25rem] font-semibold ${accentText[item.accent]}`}>
                        {item.title}
                      </span>
                      {active && <Check className={`h-4 w-4 shrink-0 ${accentText[item.accent]}`} />}
                    </span>
                    <span className="mt-2 block text-[0.84rem] leading-[1.45] text-[#2c2824]">
                      {item.description}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <form onSubmit={onSubmit} className="relative space-y-5">
              <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.2em] text-[#9a6d23]">
                Tell us more · {intent.title}
              </p>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/50">
                    Name
                  </span>
                  <input
                    required
                    name="name"
                    className="mt-2 h-11 w-full border border-black/15 bg-white px-3 text-[0.9rem] outline-none focus:border-[#9a6d23]"
                  />
                </label>
                <label className="block">
                  <span className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/50">
                    Work email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="mt-2 h-11 w-full border border-black/15 bg-white px-3 text-[0.9rem] outline-none focus:border-[#9a6d23]"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/50">
                  Organization
                </span>
                <input
                  name="organization"
                  className="mt-2 h-11 w-full border border-black/15 bg-white px-3 text-[0.9rem] outline-none focus:border-[#9a6d23]"
                />
              </label>
              <label className="block">
                <span className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/50">
                  What are you trying to accomplish?
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-2 w-full border border-black/15 bg-white px-3 py-3 text-[0.9rem] outline-none focus:border-[#9a6d23]"
                />
              </label>
              <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
                <label>
                  Company website
                  <input name="company_website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              {statusMessage && <p role={status === "error" ? "alert" : "status"} className={`border px-4 py-3 text-[0.84rem] ${status === "success" ? "border-[#0d6b47]/30 bg-[#0d6b47]/8 text-[#0d6b47]" : "border-[#a53f26]/30 bg-[#a53f26]/8 text-[#a53f26]"}`}>{statusMessage}</p>}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex h-11 items-center bg-[#9a6d23] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em] text-white hover:bg-[#7f5819] disabled:cursor-wait disabled:opacity-60"
              >
                {status === "submitting" ? "Sending securely…" : "Send enquiry"}
              </button>
            </form>

            <div className="space-y-10">
              <div>
                <h3 className="font-display text-[1.5rem] font-semibold">What happens next?</h3>
                <ol className="mt-6 space-y-4">
                  {contactProcess.map((step, index) => (
                    <li key={step.id} className="flex gap-4 border-t border-black/10 pt-4">
                      <span className="font-display text-[1.1rem] font-semibold text-[#9a6d23]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-[1.15rem] font-semibold">{step.title}</span>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h3 className="font-display text-[1.5rem] font-semibold">Direct contacts</h3>
                <ul className="mt-5 space-y-3">
                  {directContacts.map((item) => (
                    <li key={item.label} className="border-t border-black/10 pt-3">
                      <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.12em] text-[#15110f]/45">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 inline-block text-[0.9rem] text-[#16110f] underline-offset-4 hover:underline"
                        >
                          Explore careers
                        </a>
                      ) : <a href={`mailto:${item.email}`} className="mt-1 inline-block text-[0.9rem] text-[#16110f] underline-offset-4 hover:underline">{item.email}</a>}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 bg-[#f4eee5]">
        <div className="mx-auto grid max-w-[1500px] gap-8 px-8 py-14 md:grid-cols-3 md:px-12 xl:px-[72px]">
          <div className="border-t border-black/12 pt-5">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
              Location
            </p>
            <h3 className="mt-3 font-display text-[1.5rem] font-semibold">Kampala, Uganda</h3>
            <p className="mt-2 text-[0.86rem] text-[#2c2824]">Headquarters of the ANTIKRA group.</p>
          </div>
          <div className="border-t border-black/12 pt-5">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
              Products
            </p>
            <h3 className="mt-3 font-display text-[1.5rem] font-semibold">Looking for a product?</h3>
            <div className="mt-3 flex flex-wrap gap-4">
              <a href="/products/rembeh" className="text-[0.86rem] font-semibold text-[#0d6b47]">
                Rembeh →
              </a>
              <a href="/products/carmie" className="text-[0.86rem] font-semibold text-[#174783]">
                Carmie →
              </a>
            </div>
          </div>
          <div className="border-t border-black/12 pt-5">
            <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6d23]">
              Security
            </p>
            <h3 className="mt-3 font-display text-[1.5rem] font-semibold">Found a security issue?</h3>
            <a
              href="mailto:security@antikra.com?subject=ANTIKRA%20security%20report"
              className="mt-3 inline-flex items-center gap-2 text-[0.86rem] font-semibold text-[#174783]"
            >
              Report a security issue
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#111414] text-white">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-6 px-8 py-14 md:flex-row md:items-end md:justify-between md:px-12 xl:px-[72px]">
          <p className="max-w-[560px] font-display text-[1.8rem] font-semibold leading-[1.15]">
            Not sure where your enquiry belongs? Tell us what you’re trying to accomplish—we’ll route it.
          </p>
          <a
            href="#enquiry"
            className="inline-flex h-11 w-fit items-center bg-[#a8711a] px-6 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.08em]"
          >
            Start an enquiry
          </a>
        </div>
      </section>
    </div>
  )
}
