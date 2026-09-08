import { termsOfUse } from "../../domain/legal"
import { LegalDocumentPage } from "./LegalDocumentPage"

export function TermsPage() {
  return <LegalDocumentPage content={termsOfUse} />
}
