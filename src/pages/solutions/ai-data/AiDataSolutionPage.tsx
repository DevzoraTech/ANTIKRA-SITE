import { solutionDetailPages } from "../../../domain/solutions"
import { SolutionDetailPage } from "../solution-detail/SolutionDetailPage"

const page = solutionDetailPages["ai-data"]

export function AiDataSolutionPage() {
  return <SolutionDetailPage page={page} />
}
