# ANTIKRA contact backend contract

The public contact form submits directly to the ANTIKRA enquiry service. It never reports success until the service confirms that the enquiry was accepted.

Set `VITE_ANTIKRA_CONTACT_API_URL` at build time, or proxy `/api/contact` to the service on the same origin.

## `POST /v1/enquiries`

Accept this JSON body:

```json
{
  "intentId": "build",
  "intent": "Build something",
  "name": "Person name",
  "email": "person@example.com",
  "organization": "Organization",
  "message": "Enquiry details",
  "website": ""
}
```

Validate every field on the server. `website` is a honeypot and must be empty. Persist the enquiry, route or notify the appropriate ANTIKRA team, and return `201` with a durable receipt:

```json
{
  "id": "enq_123",
  "receivedAt": "2026-09-24T12:00:00.000Z"
}
```

Return a JSON `{ "message": "..." }` with an appropriate `4xx` or `5xx` status when submission fails.

## Operational requirements

- Rate-limit by IP and normalized email address.
- Add server-side bot protection and reject a populated honeypot.
- Normalize and validate email addresses; cap all input lengths.
- Escape content in notifications and administrative views.
- Store consent-compatible audit timestamps and retention metadata.
- Do not expose recipient addresses, infrastructure details, or internal routing rules.
- Log delivery failures and retry notifications without duplicating the persisted enquiry.
