import { useState, type FormEvent } from "react"
import { openInquiry } from "../../shared/inquiry"
import { consoleGate, demoSession, setSession } from "../../domain/console"

export function ConsoleGatePage() {
  const [mode, setMode] = useState<"home" | "signin">("home")
  const [error, setError] = useState("")

  const requestAccess = () => {
    openInquiry(
      "ANTIKRA Console — access request",
      "I would like access to ANTIKRA Console.\n\nName:\nOrganization:\nRole:\nWhat I'm working on with ANTIKRA:\n",
    )
  }

  const onSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const email = String(data.get("email") ?? "").trim()
    const password = String(data.get("password") ?? "")
    if (!email || !password) {
      setError("Enter email and password.")
      return
    }
    setSession({
      ...demoSession,
      user: {
        ...demoSession.user,
        email,
        name: email.split("@")[0] || demoSession.user.name,
      },
    })
    window.location.href = "/console"
  }

  const continueDemo = () => {
    setSession(demoSession)
    window.location.href = "/console"
  }

  if (mode === "signin") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#111414] px-6 text-white">
        <div className="w-full max-w-[420px]">
          <p className="font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.22em] text-[#e5d0aa]">
            ANTIKRA Console
          </p>
          <h1 className="mt-4 font-display text-[2.6rem] font-semibold tracking-[-0.02em]">Sign in</h1>
          <form onSubmit={onSignIn} className="mt-8 space-y-4">
            <label className="block">
              <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-white/45">
                Email
              </span>
              <input
                name="email"
                type="email"
                autoComplete="username"
                className="mt-2 h-11 w-full border border-white/15 bg-[#161a1a] px-3 text-[0.9rem] outline-none focus:border-[#a8711a]"
              />
            </label>
            <label className="block">
              <span className="font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.12em] text-white/45">
                Password
              </span>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                className="mt-2 h-11 w-full border border-white/15 bg-[#161a1a] px-3 text-[0.9rem] outline-none focus:border-[#a8711a]"
              />
            </label>
            {error && <p className="text-[0.82rem] text-[#e5a0a0]">{error}</p>}
            <button
              type="submit"
              className="inline-flex h-11 w-full items-center justify-center bg-[#a8711a] font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em]"
            >
              Sign in
            </button>
          </form>
          <button
            type="button"
            onClick={continueDemo}
            className="mt-4 w-full text-center font-display-sans text-[0.62rem] font-extrabold uppercase tracking-[0.12em] text-[#e5d0aa] underline-offset-4 hover:underline"
          >
            Continue with demo workspace
          </button>
          <button
            type="button"
            onClick={() => setMode("home")}
            className="mt-8 w-full text-center text-[0.84rem] text-white/45 hover:text-white"
          >
            Back
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <section className="relative isolate min-h-[100svh] overflow-hidden border-b border-black/10 bg-[#111414] pt-[88px] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_30%_35%,rgba(168,113,26,0.18),transparent_55%)]" />
        <div className="mx-auto flex min-h-[calc(100svh-88px)] max-w-[820px] flex-col items-center justify-center px-8 py-20 text-center">
          <p className="font-display-sans text-[0.6rem] font-extrabold uppercase tracking-[0.28em] text-[#e5d0aa]">
            ANTIKRA Console
          </p>
          <h1 className="mt-8 font-display text-[3.4rem] font-semibold leading-[0.95] tracking-[-0.035em] md:text-[4.6rem]">
            {consoleGate.lead}
          </h1>
          <p className="mt-8 max-w-[480px] text-[1rem] leading-[1.65] text-white/75">
            {consoleGate.summary}
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setMode("signin")}
              className="inline-flex h-11 items-center bg-[#a8711a] px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] transition-colors hover:bg-[#8f5f14]"
            >
              Sign in
            </button>
            <button
              type="button"
              onClick={requestAccess}
              className="inline-flex h-11 items-center border border-white/25 px-7 font-display-sans text-[0.66rem] font-extrabold uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10"
            >
              Request access
            </button>
          </div>
        </div>
      </section>

      <section className="border-b border-black/10">
        <div className="mx-auto max-w-[1500px] px-8 py-16 md:px-12 xl:px-[72px]">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {consoleGate.uses.map((item) => (
              <li key={item.title} className="border-t border-black/12 pt-5">
                <h2 className="font-display text-[1.4rem] font-semibold">{item.title}</h2>
                <p className="mt-2 text-[0.88rem] leading-[1.5] text-[#2c2824]">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
