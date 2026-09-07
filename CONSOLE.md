# ANTIKRA Console

Console is the transactional and operational layer of antikra.com—not a client
portal bolted onto the marketing site, and not one giant dashboard.

```text
ANTIKRA.COM
     │
     ├── Public web     → Understand ANTIKRA
     └── Console        → Work with ANTIKRA
```

The public website explains what ANTIKRA is. Console is where people have a
relationship with ANTIKRA.

## Product model (build in this order)

1. **Identity** — One ANTIKRA Account.
2. **Organizations & memberships** — Client orgs, ventures, research collabs, product tenants, partners, internal staff.
3. **Roles & permissions** — What a membership can see and change.
4. **Platform objects** — Project, Decision, Request, Release, Environment, Document, Billing, Support, Activity (plus Venture / Research / Contract where needed).
5. **Console navigation** — Per workspace type, not one mega-menu.
6. **Workflows** — Approvals, request lifecycle, release notes, support.
7. **Home experience** — “What is happening between you and ANTIKRA?”

Do not design vanity dashboards before this model is stable.

## Workspace types

| Workspace | Audience | Example surfaces |
|---|---|---|
| Client engagement | Organizations commissioning ANTIKRA | Overview, Projects, Documents, Requests, Billing, Support |
| Olympia venture | Ventures built with ANTIKRA | Venture, Validation, Product, Documents, Decisions, Financials |
| Research collaboration | Universities / researchers | Research, Studies, Data, Publications, Collaboration |
| Product relationship | Rembeh / Carmie customers | Organization, Access, Billing, Support (deep-link into product apps) |
| Partnership | Tech / strategic partners | Agreements, Opportunities, Documents, Actions |
| Internal ops | ANTIKRA staff | Orgs, engagements, delivery, research, ventures, contracts (clients never see internal-only data) |

## Architecture sketch

```text
ANTIKRA IDENTITY
      │
User / Organization
      │
 Memberships → Permissions
      │
 ┌────┼────┐
Client Partner Internal workspaces
      │
 PLATFORM OBJECTS
 Projects · Decisions · Requests · Releases · Documents · Billing · Support …
      │
 INTEGRATIONS (later)
 GitHub · Cloud · Email · Payments · Product systems
```

## Important boundaries

- Console does **not** replace Rembeh or Carmie applications; it manages
  relationship, administration and access, then deep-links.
- Console should **orchestrate** ANTIKRA’s operating model and integrate
  specialist tools—not rebuild Jira + Slack + Drive + accounting at once.
- Clients must never see internal-only information.
- Environments may show health/version—not secrets or credentials.
- AI in Console should operate over permitted structured objects, not as a
  floating marketing chatbot.

## Current site status

`/console` is a **public gate** only: explains the model and routes people to
request access. Authentication and live workspaces are explicitly out of scope
until identity and object model exist behind a real auth boundary.
