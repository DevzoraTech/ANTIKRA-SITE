import type { SiteImageKey } from "../../domain/antikra/models"
import type { LeadershipPortraitKey } from "../../domain/company/models"
import antikraStudioBg from "../../assets/antikra-studio-bg.webp"
import ecosystemInfrastructure from "../../assets/ecosystem-infrastructure.webp"
import ecosystemProduct from "../../assets/ecosystem-product.webp"
import ecosystemVenture from "../../assets/ecosystem-venture.webp"
import kapeereBonnyPortrait from "../../assets/leadership/kapeere-bonny.jpg"
import mpangoHamzaPortrait from "../../assets/leadership/mpango-hamza.jpg"

export const siteImages = {
  studio: antikraStudioBg,
  infrastructure: ecosystemInfrastructure,
  product: ecosystemProduct,
  venture: ecosystemVenture,
} satisfies Record<SiteImageKey, string>

export const leadershipPortraits = {
  "mpango-hamza": mpangoHamzaPortrait,
  "kapeere-bonny": kapeereBonnyPortrait,
} satisfies Record<LeadershipPortraitKey, string>
