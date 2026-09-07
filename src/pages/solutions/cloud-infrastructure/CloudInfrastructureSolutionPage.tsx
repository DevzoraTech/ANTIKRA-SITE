import { solutionDetailPages } from "../../../domain/solutions"
import { SolutionDetailPage } from "../solution-detail/SolutionDetailPage"

const page = solutionDetailPages["cloud-infrastructure"]

export function CloudInfrastructureSolutionPage() {
  return <SolutionDetailPage page={page} />
}
