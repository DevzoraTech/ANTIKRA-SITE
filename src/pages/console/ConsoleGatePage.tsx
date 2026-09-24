import { useState, type FormEvent } from "react"
import { consoleGate, requestConsoleAccess, signInToConsole, type ConsoleSession } from "../../domain/console"

type Mode = "home" | "signin" | "request"

export function ConsoleGatePage({ onAuthenticated }: { onAuthenticated: (session: ConsoleSession) => void }) {
  const [mode, setMode] = useState<Mode>("home")
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [submitting, setSubmitting] = useState(false)

  const changeMode = (nextMode: Mode) => {
    setError("")
    setMessage("")
    setMode(nextMode)
  }

  const onSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const password = String(data.get("password") ?? "")
    if (!email || !password) return setError("Enter your email and password.")
    setSubmitting(true)
    setError("")
    try {
      onAuthenticated(await signInToConsole(email, password))
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "Sign in failed.")
    } finally {
      setSubmitting(false)
    }
  }

  const onRequestAccess = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const input = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      organization: String(data.get("organization") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      engagement: String(data.get("engagement") ?? "").trim(),
    }
    if (!input.name || !input.email || !input.organization || !input.engagement) return setError("Complete all required fields.")
    setSubmitting(true)
    setError("")
    try {
      await requestConsoleAccess(input)
      event.currentTarget.reset()
      setMessage("Your access request has been submitted. ANTIKRA will contact you after verification.")
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "The request could not be submitted.")
    } finally {
      setSubmitting(false)
    }
  }

  if (mode !== "home") {
    const isSignIn = mode === "signin"
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#111414] px-6 py-24 text-white">
        <div className="w-full max-w-[460px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#e5d0aa]">ANTIKRA Console</p>
          <h1 className="mt-4 font-display text-[2.6rem] font-semibold tracking-[-0.02em]">{isSignIn ? "Sign in" : "Request access"}</h1>
          <form onSubmit={isSignIn ? onSignIn : onRequestAccess} className="mt-8 space-y-4">
            {!isSignIn && <Field name="name" label="Name" autoComplete="name" required />}
            <Field name="email" label="Email" type="email" autoComplete={isSignIn ? "username" : "email"} required />
            {isSignIn ? <Field name="password" label="Password" type="password" autoComplete="current-password" required /> : <><Field name="organization" label="Organization" autoComplete="organization" required /><Field name="role" label="Role" autoComplete="organization-title" /><label className="block"><span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-white/45">Engagement with ANTIKRA *</span><textarea name="engagement" rows={4} required className="mt-2 w-full border border-white/15 bg-[#161a1a] px-3 py-3 text-[0.9rem] outline-none focus:border-[#a8711a]" /></label></>}
            {error && <p role="alert" className="text-[0.82rem] text-[#efb0b0]">{error}</p>}
            {message && <p role="status" className="text-[0.82rem] text-[#b8e0ca]">{message}</p>}
            <button type="submit" disabled={submitting} className="inline-flex h-11 w-full items-center justify-center bg-[#a8711a] font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] disabled:cursor-wait disabled:opacity-60">{submitting ? "Please wait" : isSignIn ? "Sign in securely" : "Submit request"}</button>
          </form>
          <button type="button" onClick={() => changeMode("home")} className="mt-8 w-full text-center text-[0.84rem] text-white/45 hover:text-white">Back</button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-black/10 bg-[#111414] pt-[88px] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_35%,rgba(168,113,26,0.18),transparent_55%)]" />
        <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[820px] flex-col items-center justify-center px-8 py-20 text-center">
          <p className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-[#e5d0aa]">ANTIKRA Console</p>
          <h1 className="mt-8 font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.035em] md:text-[4.6rem]">{consoleGate.lead}</h1>
          <p className="mt-8 max-w-[480px] text-[1rem] leading-[1.65] text-white/75">{consoleGate.summary}</p>
          <div className="mt-12 flex flex-wrap justify-center gap-4"><button type="button" onClick={() => changeMode("signin")} className="inline-flex h-11 items-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em]">Sign in</button><button type="button" onClick={() => changeMode("request")} className="inline-flex h-11 items-center border border-white/25 px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white hover:bg-white/10">Request access</button></div>
        </div>
      </section>
      <section className="border-b border-black/10"><div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]"><ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">{consoleGate.uses.map((item) => <li key={item.title} className="border-t border-black/12 pt-5"><h2 className="font-display text-[1.4rem] font-semibold">{item.title}</h2><p className="mt-2 text-[0.88rem] leading-[1.5] text-[#2c2824]">{item.description}</p></li>)}</ul></div></section>
    </div>
  )
}

function Field({ name, label, type = "text", autoComplete, required = false }: { name: string; label: string; type?: string; autoComplete?: string; required?: boolean }) {
  return <label className="block"><span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-white/45">{label}{required ? " *" : ""}</span><input name={name} type={type} autoComplete={autoComplete} required={required} className="mt-2 h-11 w-full border border-white/15 bg-[#161a1a] px-3 text-[0.9rem] outline-none focus:border-[#a8711a]" /></label>
}
