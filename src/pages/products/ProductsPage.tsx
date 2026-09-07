import {
  ProductNextSection,
  ProductPortfolioSection,
  ProductPrinciplesSection,
  ProductSystemsSection,
  ProductsFinalCtaSection,
  ProductsHeroSection,
  ProductsSignalSection,
} from "./components"

export function ProductsPage() {
  return (
    <div className="bg-[#f8f2e9] text-[#141414]">
      <ProductsHeroSection />
      <ProductsSignalSection />
      <ProductPortfolioSection />
      <ProductSystemsSection />
      <ProductPrinciplesSection />
      <ProductNextSection />
      <ProductsFinalCtaSection />
    </div>
  )
}
