import { OG_IMAGE, SITE_ORIGIN, absoluteUrl, type PageSeo } from "./pages"

export function createPageJsonLd(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const crumbs = seo.path
    .split("/")
    .filter(Boolean)
    .reduce<Array<{ name: string; item: string }>>(
      (acc, segment, index, parts) => {
        acc.push({
          name: segment.replace(/-/g, " ").replace(/\b\w/g, (character) => character.toUpperCase()),
          item: absoluteUrl(`/${parts.slice(0, index + 1).join("/")}`),
        })
        return acc
      },
      [],
    )

  return {
    "@context": "https://schema.org",
    "@type": seo.type === "article" ? "Article" : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: seo.title,
    description: seo.description,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    about: { "@id": `${SITE_ORIGIN}/#organization` },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: "en",
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: OG_IMAGE,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_ORIGIN}/`,
        },
        ...crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 2,
          name: crumb.name,
          item: crumb.item,
        })),
      ],
    },
  }
}
