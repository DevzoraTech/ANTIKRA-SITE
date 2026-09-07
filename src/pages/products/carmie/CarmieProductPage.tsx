import { carmieProductPage, rembehSummary } from "../../../domain/products"
import carmieImg from "../../../assets/home/carmie.png"
import { ProductDetailPage } from "../components/ProductDetailPage"

export function CarmieProductPage() {
  return (
    <ProductDetailPage
      content={carmieProductPage}
      image={carmieImg}
      nextProduct={rembehSummary}
    />
  )
}
