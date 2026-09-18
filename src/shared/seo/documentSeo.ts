import { useEffect } from "react"
import {
  BRAND_LOGO,
  defaultKeywords,
  OG_IMAGE,
  absoluteUrl,
  createPageJsonLd,
  resolveSeo,
} from "../../domain/seo"

function upsertMeta(
  selector: string,
  attributes: Record<string, string>,
  content?: string,
) {
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    Object.entries(attributes).forEach(([key, value]) => el!.setAttribute(key, value))
    document.head.appendChild(el)
  }
  if (content !== undefined) {
    el.setAttribute("content", content)
  }
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement("script")
    el.type = "application/ld+json"
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function applyDocumentSeo(pathname: string) {
  const seo = resolveSeo(pathname)
  const url = absoluteUrl(seo.path === "/" ? "/" : seo.path)

  document.title = seo.title

  upsertMeta('meta[name="description"]', { name: "description" }, seo.description)
  upsertMeta(
    'meta[name="keywords"]',
    { name: "keywords" },
    seo.keywords ?? defaultKeywords,
  )
  upsertMeta(
    'meta[name="robots"]',
    { name: "robots" },
    seo.noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  )

  upsertLink("canonical", url)

  upsertMeta('meta[property="og:type"]', { property: "og:type" }, seo.type === "article" ? "article" : "website")
  upsertMeta('meta[property="og:site_name"]', { property: "og:site_name" }, "ANTIKRA")
  upsertMeta('meta[property="og:title"]', { property: "og:title" }, seo.title)
  upsertMeta('meta[property="og:description"]', { property: "og:description" }, seo.description)
  upsertMeta('meta[property="og:url"]', { property: "og:url" }, url)
  upsertMeta('meta[property="og:image"]', { property: "og:image" }, OG_IMAGE)
  upsertMeta('meta[property="og:image:secure_url"]', { property: "og:image:secure_url" }, OG_IMAGE)
  upsertMeta('meta[property="og:image:type"]', { property: "og:image:type" }, "image/png")
  upsertMeta('meta[property="og:image:width"]', { property: "og:image:width" }, "1254")
  upsertMeta('meta[property="og:image:height"]', { property: "og:image:height" }, "1254")
  upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt" }, "ANTIKRA — Global technology group")
  upsertMeta('meta[property="og:locale"]', { property: "og:locale" }, "en_US")

  upsertMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary_large_image")
  upsertMeta('meta[name="twitter:title"]', { name: "twitter:title" }, seo.title)
  upsertMeta('meta[name="twitter:description"]', { name: "twitter:description" }, seo.description)
  upsertMeta('meta[name="twitter:image"]', { name: "twitter:image" }, OG_IMAGE)
  upsertMeta('meta[name="twitter:image:alt"]', { name: "twitter:image:alt" }, "ANTIKRA — Global technology group")
  upsertMeta('meta[name="twitter:site"]', { name: "twitter:site" }, "@antikragroup")

  upsertJsonLd("antikra-page-jsonld", createPageJsonLd(seo))

  upsertLink("apple-touch-icon", BRAND_LOGO)
}

export function useDocumentSeo(pathname: string) {
  useEffect(() => {
    applyDocumentSeo(pathname)
  }, [pathname])
}
