import { brandEntity, createLeaderPersonNodes, leaderImageUrl } from "./entities"
import { BRAND_LOGO, OG_IMAGE, SITE_ORIGIN, absoluteUrl, type PageSeo } from "./pages"
import { leadershipProfiles } from "../company/content"

function pageImage(seo: PageSeo) {
  return seo.image ?? OG_IMAGE
}

export function createPageJsonLd(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const image = pageImage(seo)
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

  const webpage = {
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
      url: image,
      contentUrl: image,
      caption: seo.imageAlt ?? "ANTIKRA",
    },
    image: [image, BRAND_LOGO],
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

  if (seo.path !== "/company/leadership") {
    return {
      "@context": "https://schema.org",
      ...webpage,
    }
  }

  const people = createLeaderPersonNodes()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...webpage,
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "ItemList",
          "@id": `${url}#leaders`,
          name: "ANTIKRA Leadership",
          description:
            "Founders and directors of ANTIKRA Group: Mpango Hamza Rahman and Kapeere Bonny.",
          numberOfItems: leadershipProfiles.length,
          itemListElement: leadershipProfiles.map((person, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: { "@id": `${url}#${person.id}` },
          })),
        },
        mentions: [
          { "@id": `${SITE_ORIGIN}/#organization` },
          { "@id": `${SITE_ORIGIN}/#brand` },
          ...people.map((person) => ({ "@id": person["@id"] })),
        ],
      },
      brandEntity,
      ...people,
      {
        "@type": "ImageObject",
        "@id": `${SITE_ORIGIN}/#logo`,
        url: BRAND_LOGO,
        contentUrl: BRAND_LOGO,
        caption: "ANTIKRA logo",
        name: "ANTIKRA logo",
        representativeOfPage: false,
        creator: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#portrait-mpango-hamza`,
        url: leaderImageUrl("mpango-hamza"),
        contentUrl: leaderImageUrl("mpango-hamza"),
        caption: "Mpango Hamza Rahman, Founder, Chairman & Director of ANTIKRA",
        name: "Mpango Hamza Rahman portrait",
        representativeOfPage: true,
        creator: { "@id": `${SITE_ORIGIN}/#organization` },
      },
      {
        "@type": "ImageObject",
        "@id": `${url}#portrait-kapeere-bonny`,
        url: leaderImageUrl("kapeere-bonny"),
        contentUrl: leaderImageUrl("kapeere-bonny"),
        caption: "Kapeere Bonny, Co-Founder & Director of ANTIKRA",
        name: "Kapeere Bonny portrait",
        creator: { "@id": `${SITE_ORIGIN}/#organization` },
      },
    ],
  }
}
