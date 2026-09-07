import {
  CompaniesFinalCtaSection,
  CompaniesHeroSection,
  CompaniesSignalSection,
  CompanyRosterSection,
  GroupWorkSection,
  SystemWorkflowSection,
} from "./components"

export function CompaniesPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <CompaniesHeroSection />
      <CompaniesSignalSection />
      <CompanyRosterSection />
      <SystemWorkflowSection />
      <GroupWorkSection />
      <CompaniesFinalCtaSection />
    </div>
  )
}
