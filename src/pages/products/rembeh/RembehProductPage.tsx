import { carmieSummary, rembehProductPage } from "../../../domain/products"
import rembehImg from "../../../assets/home/rembeh.png"
import { ProductDetailPage } from "../components/ProductDetailPage"

export function RembehProductPage() {
  return (
    <ProductDetailPage
      content={rembehProductPage}
      image={rembehImg}
      nextProduct={carmieSummary}
    />
  )
}
