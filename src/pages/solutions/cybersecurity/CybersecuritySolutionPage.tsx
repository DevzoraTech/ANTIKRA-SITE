import { solutionDetailPages } from "../../../domain/solutions"
import { SolutionDetailPage } from "../solution-detail/SolutionDetailPage"

const page = solutionDetailPages.cybersecurity

export function CybersecuritySolutionPage() {
  return <SolutionDetailPage page={page} />
}
