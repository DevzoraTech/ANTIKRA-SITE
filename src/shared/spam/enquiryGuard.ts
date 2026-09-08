const RATE_KEY = "antikra.enquiry.rate"
const MIN_DWELL_MS = 4000
const RATE_WINDOW_MS = 60_000
const RATE_MAX = 3

export interface SpamCheckInput {
  honeypot: string
  startedAt: number
  challengeAnswer: string
  challengeExpected: number
}

export function createSpamChallenge() {
  const a = 2 + Math.floor(Math.random() * 7)
  const b = 1 + Math.floor(Math.random() * 6)
  return { a, b, expected: a + b, prompt: `What is ${a} + ${b}?` }
}

export function validateEnquirySpam(input: SpamCheckInput): string | null {
  if (input.honeypot.trim().length > 0) {
    return "Unable to send enquiry."
  }

  if (Date.now() - input.startedAt < MIN_DWELL_MS) {
    return "Please take a moment to complete the form, then try again."
  }

  const answer = Number(input.challengeAnswer.trim())
  if (!Number.isFinite(answer) || answer !== input.challengeExpected) {
    return "Please answer the security question correctly."
  }

  try {
    const raw = localStorage.getItem(RATE_KEY)
    const stamps: number[] = raw ? (JSON.parse(raw) as number[]) : []
    const recent = stamps.filter((stamp) => Date.now() - stamp < RATE_WINDOW_MS)
    if (recent.length >= RATE_MAX) {
      return "Too many enquiries in a short time. Please wait a minute and try again."
    }
    recent.push(Date.now())
    localStorage.setItem(RATE_KEY, JSON.stringify(recent))
  } catch {
    /* ignore storage failures */
  }

  return null
}
