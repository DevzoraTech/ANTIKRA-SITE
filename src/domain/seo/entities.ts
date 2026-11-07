import { leadershipProfiles } from "../company/content"
import type { LeadershipPortraitKey } from "../company/models"
import { BRAND_LOGO, SITE_ORIGIN, absoluteUrl } from "./pages"

/** Stable public asset URLs for brand and leadership recognition. */
export const BRAND_ASSETS = {
  logo: BRAND_LOGO,
  logoPath: "/antikra-logo.png",
  markAlt: "ANTIKRA logo",
  wordmarkAlt: "ANTIKRA: Global technology group",
} as const

export const LEADER_ASSET_PATHS: Record<LeadershipPortraitKey, string> = {
  "mpango-hamza": "/leadership/mpango-hamza.jpg",
  "kapeere-bonny": "/leadership/kapeere-bonny.jpg",
}

export function leaderImageUrl(portrait: LeadershipPortraitKey) {
  return absoluteUrl(LEADER_ASSET_PATHS[portrait])
}

export function leaderEntityId(id: string) {
  return `${SITE_ORIGIN}/company/leadership#${id}`
}

export const brandEntity = {
  "@type": "Brand",
  "@id": `${SITE_ORIGIN}/#brand`,
  name: "ANTIKRA",
  alternateName: ["ANTIKRA Group", "Antikra"],
  url: SITE_ORIGIN,
  logo: BRAND_ASSETS.logo,
  slogan: "Technology, built as a system.",
  description:
    "ANTIKRA is the brand of ANTIKRA Group, a global technology organization of six specialist companies.",
}

export function createLeaderPersonNodes() {
  return leadershipProfiles.map((person) => ({
    "@type": "Person",
    "@id": leaderEntityId(person.id),
    name: person.name,
    jobTitle: person.title,
    description: person.bio,
    image: {
      "@type": "ImageObject",
      url: leaderImageUrl(person.portrait),
      contentUrl: leaderImageUrl(person.portrait),
      caption: `${person.name}, ${person.title} at ANTIKRA`,
    },
    url: leaderEntityId(person.id),
    worksFor: { "@id": `${SITE_ORIGIN}/#organization` },
    knowsAbout: [
      "ANTIKRA",
      "Technology systems",
      person.systemRole,
      "Product engineering",
      "Venture building",
    ],
    nationality: {
      "@type": "Country",
      name: "Uganda",
    },
    homeLocation: {
      "@type": "Place",
      name: "Kampala, Uganda",
    },
  }))
}
