import {
  SolutionAreasSection,
  SolutionAssembliesSection,
  SolutionAudiencesSection,
  SolutionNextSection,
  SolutionProcessSection,
  SolutionSpecialistsSection,
  SolutionsFinalCtaSection,
  SolutionsHeroSection,
  SolutionsSignalSection,
} from "./components"

export function SolutionsPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <SolutionsHeroSection />
      <SolutionsSignalSection />
      <SolutionAreasSection />
      <SolutionAssembliesSection />
      <SolutionProcessSection />
      <SolutionAudiencesSection />
      <SolutionSpecialistsSection />
      <SolutionNextSection />
      <SolutionsFinalCtaSection />
    </div>
  )
}
