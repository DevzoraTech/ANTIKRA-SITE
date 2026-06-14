import { useState, type FormEvent } from "react"
import { Button } from "./Button"
import { contactProof, contactSteps } from "../data/content"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding border-t border-brand/10 bg-white">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight font-semibold text-ink">
            Set the gears
            <br />
            <span className="italic text-brand">in motion</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            Tell us what you are building, fixing, launching, or trying to
            understand. The group will identify the right brand mix and turn the
            ambition into a practical path forward.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/15 bg-surface py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-2xl text-white">
                ✓
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                Message received
              </h3>
              <p className="mt-2 text-sm text-muted">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                required
                placeholder="Your name *"
                className="w-full rounded-xl border border-brand/15 bg-surface px-5 py-4 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-brand"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email *"
                className="w-full rounded-xl border border-brand/15 bg-surface px-5 py-4 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-brand"
              />
              <textarea
                name="message"
                rows={4}
                placeholder="Describe the system you want to build"
                className="w-full resize-none rounded-xl border border-brand/15 bg-surface px-5 py-4 text-sm text-ink placeholder:text-muted/60 outline-none transition-colors focus:border-brand"
              />
              <label className="flex items-start gap-3 text-xs text-muted">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-0.5 accent-brand"
                />
                <span>
                  I have read the{" "}
                  <a href="#" className="text-brand underline">
                    Privacy Policy
                  </a>
                </span>
              </label>
              <Button type="submit" size="lg" className="w-full">
                Send message
              </Button>
            </form>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-2xl rounded-2xl border border-brand/10 bg-surface p-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
            {contactProof.title}
          </p>
          <p className="mt-4 font-display text-lg leading-relaxed text-ink md:text-xl">
            {contactProof.description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <h3 className="text-center font-display text-lg font-semibold text-ink">
            What happens next
          </h3>
          <ol className="mt-8 space-y-6">
            {contactSteps.map((step, i) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-brand/30 font-display text-sm font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-muted">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
