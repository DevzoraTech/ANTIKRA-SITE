import type { SiteImageKey } from "../../domain/antikra/models"
import antikraStudioBg from "../../assets/antikra-studio-bg.webp"
import ecosystemInfrastructure from "../../assets/ecosystem-infrastructure.webp"
import ecosystemProduct from "../../assets/ecosystem-product.webp"
import ecosystemVenture from "../../assets/ecosystem-venture.webp"

export const siteImages = {
  studio: antikraStudioBg,
  infrastructure: ecosystemInfrastructure,
  product: ecosystemProduct,
  venture: ecosystemVenture,
} satisfies Record<SiteImageKey, string>
