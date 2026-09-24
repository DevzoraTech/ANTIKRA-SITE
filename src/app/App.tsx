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
import { PrivacyPage } from "../pages/legal/PrivacyPage"
import { TermsPage } from "../pages/legal/TermsPage"
import { NotFoundPage } from "../pages/system/NotFoundPage"
import { useDocumentSeo } from "../shared/seo"
import { CookieConsentBanner } from "../shared/ui/CookieConsentBanner"
import type { ReactNode } from "react"

function normalizePathname(pathname: string) {
  if (pathname === "/") return pathname
  return pathname.replace(/\/+$/, "") || "/"
}

function renderRoute(pathname: string): ReactNode {
  if (pathname === "/") {
    return <HomePage />
  }

  if (pathname === "/console" || pathname.startsWith("/console/")) {
    return <ConsoleApp />
  }

  if (pathname === "/privacy" || pathname === "/privacy/") {
    return (
      <SiteLayout>
        <PrivacyPage />
      </SiteLayout>
    )
  }

  if (pathname === "/terms" || pathname === "/terms/") {
    return (
      <SiteLayout>
        <TermsPage />
      </SiteLayout>
    )
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

  if (pathname.startsWith("/company/")) {
    return (
      <SiteLayout>
        <NotFoundPage />
      </SiteLayout>
    )
  }

  const researchSlug = pathname.match(/^\/research\/([^/]+)/)?.[1]
  if (researchSlug) {
    const publication = getResearchBySlug(researchSlug)
    return (
      <SiteLayout>
        {publication ? <ResearchDetailPage publication={publication} /> : <NotFoundPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/research" || pathname === "/research/") {
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
        {study ? <WorkDetailPage study={study} /> : <NotFoundPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/work" || pathname === "/work/") {
    return (
      <SiteLayout>
        <WorkPage />
      </SiteLayout>
    )
  }

  const companySlug = pathname.match(/^\/companies\/([^/]+)/)?.[1]
  if (companySlug) {
    const companyPage =
      companySlug in companyPages
        ? companyPages[companySlug as keyof typeof companyPages]
        : undefined
    return (
      <SiteLayout>
        {companyPage ? <CompanyDetailPage page={companyPage} /> : <NotFoundPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/companies" || pathname.startsWith("/companies")) {
    return (
      <SiteLayout>
        <CompaniesPage />
      </SiteLayout>
    )
  }

  const productSlug = pathname.match(/^\/products\/([^/]+)/)?.[1]
  if (productSlug) {
    if (productSlug === "rembeh") {
      return (
        <SiteLayout>
          <RembehProductPage />
        </SiteLayout>
      )
    }
    if (productSlug === "carmie") {
      return (
        <SiteLayout>
          <CarmieProductPage />
        </SiteLayout>
      )
    }
    return (
      <SiteLayout>
        <NotFoundPage />
      </SiteLayout>
    )
  }

  if (pathname === "/products" || pathname.startsWith("/products")) {
    return (
      <SiteLayout>
        <ProductsPage />
      </SiteLayout>
    )
  }

  const solutionSlug = pathname.match(/^\/solutions\/([^/]+)/)?.[1]
  if (solutionSlug) {
    if (solutionSlug === "product-engineering") {
      return (
        <SiteLayout>
          <ProductEngineeringSolutionPage />
        </SiteLayout>
      )
    }
    if (solutionSlug === "cloud-infrastructure") {
      return (
        <SiteLayout>
          <CloudInfrastructureSolutionPage />
        </SiteLayout>
      )
    }
    if (solutionSlug === "ai-data") {
      return (
        <SiteLayout>
          <AiDataSolutionPage />
        </SiteLayout>
      )
    }
    if (solutionSlug === "cybersecurity") {
      return (
        <SiteLayout>
          <CybersecuritySolutionPage />
        </SiteLayout>
      )
    }
    if (solutionSlug === "experience-design") {
      return (
        <SiteLayout>
          <ExperienceDesignSolutionPage />
        </SiteLayout>
      )
    }
    if (solutionSlug === "venture-building") {
      return (
        <SiteLayout>
          <VentureBuildingSolutionPage />
        </SiteLayout>
      )
    }
    const solutionPage =
      solutionSlug in solutionDetailPages
        ? solutionDetailPages[solutionSlug as keyof typeof solutionDetailPages]
        : undefined
    return (
      <SiteLayout>
        {solutionPage ? <SolutionDetailPage page={solutionPage} /> : <NotFoundPage />}
      </SiteLayout>
    )
  }

  if (pathname === "/solutions" || pathname.startsWith("/solutions")) {
    return (
      <SiteLayout>
        <SolutionsPage />
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <NotFoundPage />
    </SiteLayout>
  )
}

export default function App() {
  const pathname = normalizePathname(window.location.pathname)
  useDocumentSeo(pathname)

  return (
    <>
      {renderRoute(pathname)}
      <CookieConsentBanner />
    </>
  )
}
