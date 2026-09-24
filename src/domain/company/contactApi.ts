const configuredBaseUrl = import.meta.env.VITE_ANTIKRA_CONTACT_API_URL?.trim()
const API_BASE_URL = (configuredBaseUrl || "/api/contact").replace(/\/$/, "")

export interface ContactEnquiryInput {
  intentId: string
  intent: string
  name: string
  email: string
  organization: string
  message: string
  website: string
}

export interface ContactEnquiryReceipt {
  id: string
  receivedAt: string
}

export class ContactApiError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "ContactApiError"
  }
}

export async function submitContactEnquiry(input: ContactEnquiryInput): Promise<ContactEnquiryReceipt> {
  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}/v1/enquiries`, {
      method: "POST",
      credentials: "omit",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
  } catch {
    throw new ContactApiError("The enquiry service is currently unavailable. Please try again shortly.")
  }

  if (!response.ok) {
    let message = "We could not submit your enquiry. Please review it and try again."
    try {
      const body = (await response.json()) as { message?: unknown }
      if (typeof body.message === "string" && body.message.trim()) message = body.message
    } catch {
      // Keep the safe fallback when the service returns no JSON error body.
    }
    throw new ContactApiError(message)
  }

  const receipt = (await response.json()) as Partial<ContactEnquiryReceipt>
  if (typeof receipt.id !== "string" || typeof receipt.receivedAt !== "string") {
    throw new ContactApiError("The enquiry service returned an invalid confirmation.")
  }
  return { id: receipt.id, receivedAt: receipt.receivedAt }
}
