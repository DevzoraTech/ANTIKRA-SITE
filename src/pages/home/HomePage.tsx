import {
  BuiltFromAfricaSection,
  CompaniesResearchSection,
  FinalCtaSection,
  HomeCapabilitiesSection,
  HomeHeroSection,
  HomeProductsSection,
  HomeSignalStatsSection,
  HowWeBuildSection,
  WhoWeAreSection,
} from "./components"
import { Footer, Header } from "../../shared/layout"

export function HomePage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f8f2e9] text-[#141414]">
      <Header />
      <main>
        <HomeHeroSection />
        <WhoWeAreSection />
        <HomeSignalStatsSection />
        <HomeProductsSection />
        <HomeCapabilitiesSection />
        <HowWeBuildSection />
        <CompaniesResearchSection />
        <BuiltFromAfricaSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
