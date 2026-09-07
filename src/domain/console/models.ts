export type ConsoleMembershipKind =
  | "client"
  | "venture"
  | "research"
  | "product"
  | "partner"
  | "internal"

export type ConsoleWorkspaceType =
  | "client-engagement"
  | "olympia-venture"
  | "research-collaboration"
  | "product-relationship"
  | "partnership"
  | "internal-ops"

export type ConsolePlatformObject =
  | "project"
  | "decision"
  | "request"
  | "release"
  | "environment"
  | "document"
  | "billing"
  | "support"
  | "activity"
  | "venture"
  | "research"
  | "contract"

export interface ConsoleGateContent {
  lead: string
  summary: string
  uses: Array<{ title: string; description: string }>
}
