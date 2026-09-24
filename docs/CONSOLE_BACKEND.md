# ANTIKRA Console backend contract

The Console frontend never creates users, sessions, organizations, or project data in the browser. It uses cookie-backed server sessions and remains locked when the service is unavailable.

Set `VITE_ANTIKRA_CONSOLE_API_URL` at build time, or proxy `/api/console` to the service on the same origin.

## Required endpoints

### `GET /v1/auth/session`

Return `200` with the authenticated session, or `401` when no valid server session exists.

```json
{
  "user": {
    "id": "usr_123",
    "name": "Client name",
    "email": "client@example.com",
    "role": "Client lead"
  },
  "org": {
    "id": "org_123",
    "name": "Client organization"
  }
}
```

### `POST /v1/auth/login`

Accept `{ "email": string, "password": string }`. Verify credentials server-side, set a `Secure`, `HttpOnly`, `SameSite` session cookie, and return the same session shape. Return `401` for invalid credentials. Apply rate limiting and account lockout controls.

### `POST /v1/auth/logout`

Invalidate the server session, clear the cookie, and return `204`.

### `POST /v1/access-requests`

Accept `{ "name", "email", "organization", "role", "engagement" }`, validate and persist the request, then return `204`. This endpoint creates an access request only; it must never create or authenticate a user automatically.

## Security requirements

- Allow credentialed requests only from the production ANTIKRA origin.
- Use CSRF protection for state-changing requests when the API is cross-origin or cookies require it.
- Hash passwords with a current memory-hard password hasher.
- Require email verification and administrative approval before activating accounts.
- Never return secrets, password hashes, or authorization decisions from client-controlled data.
- Authorize every future project and document endpoint against both the user and organization on the server.
