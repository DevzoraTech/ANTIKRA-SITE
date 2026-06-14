import { useState, type FormEvent } from "react"
import { Button } from "./Button"
import { Logo } from "./Logo"
import { contactProof, contactSteps } from "../data/content"
import antikraStudioBg from "../assets/antikra-studio-bg.webp"

const inputClass =
  "w-full rounded-xl border border-black/10 bg-surface px-5 py-4 text-sm text-ink placeholder:text-muted/45 outline-none transition-colors focus:border-brand"

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-wide">

        {/* Section header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end lg:gap-20">
          <div>
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-tight text-ink">
              Set the gears
              <br />
              <span className="italic text-brand">in motion</span>
            </h2>
          </div>
          <p className="text-base leading-relaxed text-muted border-l border-brand/15 pl-6">
            Tell us what you are building, fixing, launching, or trying to
            understand. The group will identify the right brand mix and turn the
            ambition into a practical path forward.
          </p>
        </div>

        {/* Left / Right split */}
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">

          {/* LEFT — dark visual panel */}
          <div className="relative overflow-hidden rounded-2xl bg-night">
            <img
              src={antikraStudioBg}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-night/30 via-night/65 to-night/96" />

            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
              <Logo variant="mark" size="sm" animated className="text-brand-light/60" />

              <div className="mt-12 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-light/65">
                  {contactProof.title}
                </p>
                <p className="mt-5 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
                  {contactProof.description}
                </p>
              </div>

              <div className="mt-12">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/30">
                  What happens next
                </p>
                <div className="space-y-0 divide-y divide-white/8">
                  {contactSteps.map((step, i) => (
                    <div key={step} className="flex gap-4 py-5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-brand/30 font-display text-xs font-semibold text-brand-light">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="text-sm leading-relaxed text-white/55">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — form */}
          <div className="flex flex-col justify-center">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-2xl border border-brand/15 bg-surface py-20 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand font-display text-xl font-semibold text-white">
                  ✓
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink">
                  Message received
                </h3>
                <p className="mt-2 text-sm text-muted">
                  We'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                    Your name
                  </label>
                  <input type="text" name="name" required placeholder="Full name" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                    Email
                  </label>
                  <input type="email" name="email" required placeholder="you@company.com" className={inputClass} />
                </div>
                <div>
                  <label className="mb-1.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
                    What are you building?
                  </label>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Describe the system, product, or transformation you have in mind — the more context, the faster we can respond meaningfully."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <label className="flex items-start gap-3 text-xs text-muted">
                  <input type="checkbox" defaultChecked className="mt-0.5 accent-brand" />
                  <span>
                    I have read the{" "}
                    <a href="#" className="text-brand underline">Privacy Policy</a>
                  </span>
                </label>
                <Button type="submit" size="lg" className="w-full mt-2">
                  Send message
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
