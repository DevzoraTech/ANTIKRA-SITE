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
      className="fixed inset-x-0 bottom-0 z-[80] border-t border-black/10 bg-[#111414] text-white shadow-[0_-12px_32px_rgba(0,0,0,0.28)]"
    >
      <div className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 md:px-8">
        <p className="max-w-[640px] text-[0.78rem] leading-[1.45] text-white/72">
          <span className="mr-2 font-display-sans text-[0.52rem] font-extrabold uppercase tracking-[0.16em] text-[#e5d0aa]">
            Cookies
          </span>
          Essential cookies keep the site running. Analytics are optional.{" "}
          <a href="/privacy#cookies" className="text-[#e5d0aa] underline-offset-2 hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => save("essential")}
            className="h-9 border border-white/25 px-3.5 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] text-white/85 hover:bg-white/10"
          >
            Essential only
          </button>
          <button
            type="button"
            onClick={() => save("all")}
            className="h-9 bg-[#a8711a] px-3.5 font-display-sans text-[0.55rem] font-extrabold uppercase tracking-[0.1em] hover:bg-[#8f5f14]"
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
