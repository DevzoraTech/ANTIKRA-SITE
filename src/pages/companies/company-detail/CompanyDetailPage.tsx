import type { CompanyPageContent } from "../../../domain/antikra"
import { CompanyBrandHero } from "./CompanyBrandHero"
import { CompanyBrandBody } from "./CompanyBrandBody"

export function CompanyDetailPage({ page }: { page: CompanyPageContent }) {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <CompanyBrandHero page={page} />
      <CompanyBrandBody page={page} />
    </div>
  )
}
