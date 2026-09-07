/** Inquiry mailbox — used for mailto only. Never render in UI. */
export const INQUIRY_MAILBOX = "antikra.ug@gmail.com"

export function openInquiry(subject: string, body = "") {
  const params = new URLSearchParams()
  params.set("subject", subject)
  if (body) params.set("body", body)
  window.location.href = `mailto:${INQUIRY_MAILBOX}?${params.toString()}`
}
