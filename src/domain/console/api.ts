import type { ConsoleSession } from "./models"

const configuredBaseUrl = import.meta.env.VITE_ANTIKRA_CONSOLE_API_URL?.trim()
const API_BASE_URL = (configuredBaseUrl || "/api/console").replace(/\/$/, "")

export class ConsoleApiError extends Error {
  status: number

  constructor(message: string, status = 0) {
    super(message)
    this.name = "ConsoleApiError"
    this.status = status
  }
}

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...init,
      credentials: "include",
      headers: {
        Accept: "application/json",
        ...(init.body ? { "Content-Type": "application/json" } : {}),
        ...init.headers,
      },
    })
  } catch {
    throw new ConsoleApiError("The ANTIKRA Console service is currently unavailable.")
  }

  if (!response.ok) {
    let message = response.status === 401
      ? "The email or password is incorrect."
      : "The ANTIKRA Console could not complete this request."
    try {
      const body = (await response.json()) as { message?: unknown }
      if (typeof body.message === "string" && body.message.trim()) message = body.message
    } catch {
      // Keep the safe fallback message when the service does not return JSON.
    }
    throw new ConsoleApiError(message, response.status)
  }

  if (response.status === 204) return undefined as T
  return response.json() as Promise<T>
}

function requireSession(value: ConsoleSession): ConsoleSession {
  if (
    !value ||
    typeof value.user?.id !== "string" ||
    typeof value.user?.name !== "string" ||
    typeof value.user?.email !== "string" ||
    typeof value.user?.role !== "string" ||
    typeof value.org?.id !== "string" ||
    typeof value.org?.name !== "string"
  ) {
    throw new ConsoleApiError("The Console service returned an invalid session.", 502)
  }
  return value
}

export async function getConsoleSession(signal?: AbortSignal) {
  return requireSession(await request<ConsoleSession>("/v1/auth/session", { signal }))
}

export async function signInToConsole(email: string, password: string) {
  return requireSession(await request<ConsoleSession>("/v1/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  }))
}

export function signOutOfConsole() {
  return request<void>("/v1/auth/logout", { method: "POST" })
}

export function requestConsoleAccess(input: {
  name: string
  email: string
  organization: string
  role: string
  engagement: string
}) {
  return request<void>("/v1/access-requests", {
    method: "POST",
    body: JSON.stringify(input),
  })
}
