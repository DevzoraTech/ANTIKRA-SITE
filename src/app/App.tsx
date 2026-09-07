import { SiteLayout } from "./layout/SiteLayout"
import { companyPages } from "../domain/antikra"
import { solutionDetailPages } from "../domain/solutions"
import { getResearchBySlug } from "../domain/research"
import { resolveWorkSlug } from "../domain/work"
import { CompaniesPage } from "../pages/companies/CompaniesPage"
import { CompanyDetailPage } from "../pages/companies/company-detail/CompanyDetailPage"
import { HomePage } from "../pages/home/HomePage"
import { ProductsPage } from "../pages/products/ProductsPage"
import { RembehProductPage } from "../pages/products/rembeh/RembehProductPage"
import { CarmieProductPage } from "../pages/products/carmie/CarmieProductPage"
import { SolutionsPage } from "../pages/solutions/SolutionsPage"
import { AiDataSolutionPage } from "../pages/solutions/ai-data/AiDataSolutionPage"
import { CloudInfrastructureSolutionPage } from "../pages/solutions/cloud-infrastructure/CloudInfrastructureSolutionPage"
import { CybersecuritySolutionPage } from "../pages/solutions/cybersecurity/CybersecuritySolutionPage"
import { ExperienceDesignSolutionPage } from "../pages/solutions/experience-design/ExperienceDesignSolutionPage"
import { ProductEngineeringSolutionPage } from "../pages/solutions/product-engineering/ProductEngineeringSolutionPage"
import { SolutionDetailPage } from "../pages/solutions/solution-detail/SolutionDetailPage"
import { VentureBuildingSolutionPage } from "../pages/solutions/venture-building/VentureBuildingSolutionPage"
import { CompanyPage } from "../pages/company/CompanyPage"
import { LeadershipPage } from "../pages/company/LeadershipPage"
import { CareersPage } from "../pages/company/CareersPage"
import { ContactPage } from "../pages/company/ContactPage"
import { ResearchPage } from "../pages/research/ResearchPage"
import { ResearchDetailPage } from "../pages/research/ResearchDetailPage"
import { WorkPage, WorkDetailPage } from "../pages/work/WorkPage"
import { ConsoleApp } from "../pages/console/ConsoleApp"
import { useDocumentSeo } from "../shared/seo"

export default function App() {
  const pathname = window.location.pathname
  useDocumentSeo(pathname)

  if (pathname === "/") {
    return <HomePage />
  }

  if (pathname === "/console" || pathname.startsWith("/console/")) {
    return <ConsoleApp />
  }

  if (pathname === "/company" || pathname === "/company/") {
    return (
      <SiteLayout>
        <CompanyPage />
      </SiteLayout>
    )
  }

  if (pathname === "/company/leadership") {
    return (
      <SiteLayout>
        <LeadershipPage />
      </SiteLayout>
    )
  }

  if (pathname === "/company/careers") {
    return (
      <SiteLayout>
        <CareersPage />
      </SiteLayout>
    )
  }

  if (pathname === "/company/contact") {
    return (
      <SiteLayout>
        <ContactPage />
      </SiteLayout>
    )
  }

  const researchSlug = pathname.match(/^\/research\/([^/]+)/)?.[1]
  if (researchSlug) {
    const publication = getResearchBySlug(researchSlug)
    return (
      <SiteLayout>
        {publication ? <ResearchDetailPage publication={publication} /> : <ResearchPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/research" || pathname.startsWith("/research/")) {
    return (
      <SiteLayout>
        <ResearchPage />
      </SiteLayout>
    )
  }

  const workSlug = pathname.match(/^\/work\/([^/]+)/)?.[1]
  if (workSlug) {
    const study = resolveWorkSlug(workSlug)
    return (
      <SiteLayout>
        {study ? <WorkDetailPage study={study} /> : <WorkPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/work" || pathname.startsWith("/work/")) {
    return (
      <SiteLayout>
        <WorkPage />
      </SiteLayout>
    )
  }

  const companySlug = pathname.match(/^\/companies\/([^/]+)/)?.[1]
  const companyPage =
    companySlug && companySlug in companyPages
      ? companyPages[companySlug as keyof typeof companyPages]
      : undefined
  const productSlug = pathname.match(/^\/products\/([^/]+)/)?.[1]
  const solutionSlug = pathname.match(/^\/solutions\/([^/]+)/)?.[1]
  const solutionPage =
    solutionSlug && solutionSlug in solutionDetailPages
      ? solutionDetailPages[solutionSlug as keyof typeof solutionDetailPages]
      : undefined

  return (
    <SiteLayout>
      {companyPage ? (
        <CompanyDetailPage page={companyPage} />
      ) : pathname.startsWith("/companies") ? (
        <CompaniesPage />
      ) : productSlug === "rembeh" ? (
        <RembehProductPage />
      ) : productSlug === "carmie" ? (
        <CarmieProductPage />
      ) : pathname.startsWith("/products") ? (
        <ProductsPage />
      ) : solutionSlug === "product-engineering" ? (
        <ProductEngineeringSolutionPage />
      ) : solutionSlug === "cloud-infrastructure" ? (
        <CloudInfrastructureSolutionPage />
      ) : solutionSlug === "ai-data" ? (
        <AiDataSolutionPage />
      ) : solutionSlug === "cybersecurity" ? (
        <CybersecuritySolutionPage />
      ) : solutionSlug === "experience-design" ? (
        <ExperienceDesignSolutionPage />
      ) : solutionSlug === "venture-building" ? (
        <VentureBuildingSolutionPage />
      ) : solutionPage ? (
        <SolutionDetailPage page={solutionPage} />
      ) : pathname.startsWith("/solutions") ? (
        <SolutionsPage />
      ) : (
        <HomePage />
      )}
    </SiteLayout>
  )
}
