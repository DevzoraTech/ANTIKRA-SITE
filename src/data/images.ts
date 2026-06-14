import antikraStudioBg from "../assets/antikra-studio-bg.webp"
import ecosystemInfrastructure from "../assets/ecosystem-infrastructure.webp"
import ecosystemIntelligence from "../assets/ecosystem-intelligence.webp"
import ecosystemProduct from "../assets/ecosystem-product.webp"
import ecosystemVenture from "../assets/ecosystem-venture.webp"

export const images = {
  hero: {
    mechanism: ecosystemProduct,
    engineering: ecosystemInfrastructure,
    aegean: antikraStudioBg,
  },
  projects: {
    fintech: ecosystemProduct,
    healthcare: antikraStudioBg,
    logistics: ecosystemInfrastructure,
    ai: ecosystemIntelligence,
    education: ecosystemVenture,
  },
} as const
