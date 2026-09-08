import { privacyPolicy } from "../../domain/legal"
import { LegalDocumentPage } from "./LegalDocumentPage"

export function PrivacyPage() {
  return <LegalDocumentPage content={privacyPolicy} />
}
