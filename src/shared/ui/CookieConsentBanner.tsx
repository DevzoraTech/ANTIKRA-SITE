import { useEffect, useState } from "react"

const STORAGE_KEY = "antikra.cookie.consent"

export type CookieConsentValue = "essential" | "all"

function readConsent(): CookieConsentValue | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === "essential" || value === "all") return value
  } catch {
    /* ignore */
  }
  return null
}

export function getCookieConsent() {
  return readConsent()
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(!readConsent())
  }, [])

  const save = (value: CookieConsentValue) => {
    localStorage.setItem(STORAGE_KEY, value)
    setVisible(false)
    window.dispatchEvent(new CustomEvent("antikra:cookie-consent", { detail: value }))
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-black/10 bg-[#111414] text-white shadow-[0_-20px_50px_rgba(0,0,0,0.35)]"
    >
      <div className="mx-auto flex max-w-[1500px] flex-col gap-5 px-6 py-5 md:flex-row md:items-end md:justify-between md:px-10">
        <div className="max-w-[720px]">
          <p className="font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.18em] text-[#e5d0aa]">
            Cookies
          </p>
          <p className="mt-2 text-[0.88rem] leading-[1.55] text-white/75">
            We use essential cookies to run this site. With your consent, we may also
            use analytics cookies to improve performance. See our{" "}
            <a href="/privacy#cookies" className="text-[#e5d0aa] underline-offset-2 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => save("essential")}
            className="h-10 border border-white/25 px-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] text-white/85 hover:bg-white/10"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="h-10 bg-[#a8711a] px-4 font-display-sans text-[0.58rem] font-extrabold uppercase tracking-[0.1em] hover:bg-[#8f5f14]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  )
}

export function reopenCookiePreferences() {
  localStorage.removeItem(STORAGE_KEY)
  window.location.reload()
}
