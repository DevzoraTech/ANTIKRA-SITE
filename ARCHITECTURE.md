# ANTIKRA Site Architecture

This project is intentionally structured for ANTIKRA to grow from a company
website into a larger public platform and console.

## Folder Roles

```text
src/
  app/                 Application composition and top-level layout
  pages/               Public pages and page-local components
  domain/              ANTIKRA business models, navigation models, and content
  shared/              Reusable layout, UI primitives, visuals, and asset maps
  assets/              Raw bundled media files
  types/               Global ambient type declarations
```

## Current Layers

`src/app`

Owns application wiring only. It should compose layouts, providers, routing, and
top-level pages. It should not contain homepage section logic or ANTIKRA content.

`src/pages`

Owns route-level UI. Each route folder keeps its page component plus a local
`components/` folder for UI that belongs only to that route. Named detail pages
get their own folders so they are easy to find.

```text
pages/
  home/
    HomePage.tsx
    components/
  companies/
    CompaniesPage.tsx
    components/
    company-detail/
      CompanyDetailPage.tsx
      components/
  products/
    ProductsPage.tsx
    components/
    rembeh/
      RembehProductPage.tsx
  solutions/
    SolutionsPage.tsx
    components/
    product-engineering/
    cloud-infrastructure/
    ai-data/
    cybersecurity/
    experience-design/
    venture-building/
    solution-detail/
  work/
  research/
  company/
  console/
```

`src/domain`

Owns business language and stable data structures. Domain files should stay free
of React components. Prefer plain models and content records.

```text
domain/
  antikra/
  navigation/
  products/
  solutions/
  company/
  research/
  work/
  console/
```

`src/shared`

Owns reusable pieces used by many pages: layout, UI primitives, visual systems,
and asset dictionaries. Shared modules should not import from `pages`.

```text
shared/
  assets/
  layout/
  ui/
  visuals/
```

## Import Direction

Use this dependency direction:

```text
app -> pages -> domain
app -> pages -> shared
shared -> domain types only when needed
domain -> no React, no pages, no shared UI
```

Avoid importing page-local components from `shared` or `domain`. If a component is only
used by one page, keep it with that page.

## ANTIKRA Public Map

The intended public architecture from the ChatGPT ANTIKRA project is:

```text
Home
Companies
  Mechanism
  Cosmos
  Orrery
  Astra
  Helios
  Olympia
Products
  Rembeh
  Carmie
Solutions
  Product Engineering
  Cloud & Infrastructure
  AI & Data
  Cybersecurity
  Experience & Design
  Venture Building
Work
Research
Company
  Leadership
  Careers
  Contact
Console
```

Keep the taxonomy clear:

- Companies are who ANTIKRA operates.
- Products are what ANTIKRA owns and builds.
- Solutions are what clients can engage ANTIKRA to deliver.
- Work is evidence and case studies.
- Research is what ANTIKRA studies and publishes.
- Company is institutional information.
- Console is the authenticated operating surface (identity + workspaces).

See [`CONSOLE.md`](CONSOLE.md) for the Console product model: identity,
memberships, workspace types, platform objects, permission boundaries, and
build order. The public `/console` route is a gate only until auth exists.

## Asset Rule

Domain content should use stable asset keys instead of importing files directly.
Actual image imports live in `shared/assets/images.ts`.

That keeps content portable if it later moves to a CMS, API, or publication
pipeline.
