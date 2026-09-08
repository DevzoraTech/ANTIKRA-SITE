export interface LegalSection {
  id: string
  title: string
  paragraphs: string[]
  bullets?: string[]
}

export interface LegalPageContent {
  title: string
  effectiveDate: string
  summary: string
  sections: LegalSection[]
}

export const privacyPolicy: LegalPageContent = {
  title: "Privacy Policy",
  effectiveDate: "7 September 2026",
  summary:
    "This policy explains how ANTIKRA Group (“ANTIKRA”, “we”, “us”) collects, uses and protects information when you use antikra.com and related services.",
  sections: [
    {
      id: "who",
      title: "Who we are",
      paragraphs: [
        "ANTIKRA is a global technology group. This website and related public services are operated by ANTIKRA Group. For privacy enquiries, use the contact page on this site.",
      ],
    },
    {
      id: "collect",
      title: "Information we collect",
      paragraphs: [
        "We collect information you choose to provide and limited technical data needed to operate the site securely.",
      ],
      bullets: [
        "Enquiry details you submit (name, work email, organisation, message and intent)",
        "Career or collaboration information you voluntarily share",
        "Technical logs such as IP address, browser type, device, pages visited and approximate location derived from IP",
        "Cookie and similar preference data when you interact with the consent banner",
      ],
    },
    {
      id: "use",
      title: "How we use information",
      paragraphs: [
        "We use information to respond to enquiries, operate and improve the website, protect against abuse, and meet legal obligations.",
      ],
      bullets: [
        "Route and respond to business, product, research or partnership enquiries",
        "Operate Console access requests and related commercial conversations",
        "Analyse aggregate traffic to improve content, performance and security",
        "Detect spam, fraud and misuse of forms or services",
        "Comply with applicable law and enforce our terms",
      ],
    },
    {
      id: "cookies",
      title: "Cookies and similar technologies",
      paragraphs: [
        "We use essential cookies required for the site to function (for example, remembering cookie preferences and Console session state on your device).",
        "If you accept analytics cookies, we may use them to understand how the site is used in aggregate. You can change your choice at any time via the cookie controls linked in the footer.",
      ],
    },
    {
      id: "sharing",
      title: "Sharing",
      paragraphs: [
        "We do not sell personal information. We may share information with service providers who help us operate email, hosting, security or analytics—under confidentiality obligations—or when required by law.",
      ],
    },
    {
      id: "retention",
      title: "Retention",
      paragraphs: [
        "We retain enquiry and related records for as long as needed to handle your request, maintain business records, resolve disputes and meet legal requirements. Technical logs are retained for shorter operational periods unless needed for security investigations.",
      ],
    },
    {
      id: "security",
      title: "Security",
      paragraphs: [
        "We apply administrative and technical measures appropriate to the nature of the information we process. No method of transmission or storage is perfectly secure; please use the contact page to report suspected security issues.",
      ],
    },
    {
      id: "international",
      title: "International processing",
      paragraphs: [
        "ANTIKRA operates globally. Information may be processed in countries where we or our providers operate. Where required, we take steps to protect information transferred across borders.",
      ],
    },
    {
      id: "rights",
      title: "Your rights",
      paragraphs: [
        "Depending on your location, you may have rights to access, correct, delete, restrict or object to certain processing, or to withdraw consent where processing is consent-based. Contact us through the website to exercise these rights.",
      ],
    },
    {
      id: "children",
      title: "Children",
      paragraphs: [
        "This site is intended for business and professional audiences. We do not knowingly collect personal information from children.",
      ],
    },
    {
      id: "changes",
      title: "Changes",
      paragraphs: [
        "We may update this policy from time to time. The effective date above will change when we do. Continued use of the site after updates constitutes acceptance of the revised policy where permitted by law.",
      ],
    },
    {
      id: "contact",
      title: "Contact",
      paragraphs: [
        "For privacy questions, use the Contact page and select the appropriate enquiry type. Do not include sensitive credentials or secrets in enquiry forms.",
      ],
    },
  ],
}

export const termsOfUse: LegalPageContent = {
  title: "Terms of Use",
  effectiveDate: "7 September 2026",
  summary:
    "These terms govern your use of antikra.com and related public ANTIKRA websites and materials. By using the site, you agree to these terms.",
  sections: [
    {
      id: "acceptance",
      title: "Acceptance",
      paragraphs: [
        "If you do not agree to these terms, do not use the site. Additional terms may apply to products, Console, contracts or specific services.",
      ],
    },
    {
      id: "site",
      title: "The site",
      paragraphs: [
        "The site provides information about ANTIKRA’s companies, products, solutions, work, research and institutional pages. Content is for general information and may change without notice.",
      ],
    },
    {
      id: "accounts",
      title: "Accounts and Console",
      paragraphs: [
        "Access to ANTIKRA Console or other authenticated surfaces may require approval. You are responsible for safeguarding credentials associated with your access and for activity under your account. We may suspend access for misuse, security risk or breach of these terms.",
      ],
    },
    {
      id: "acceptable",
      title: "Acceptable use",
      paragraphs: [
        "You agree not to misuse the site or related services.",
      ],
      bullets: [
        "Do not attempt unauthorised access, scrape aggressively, or disrupt availability",
        "Do not submit spam, malware, or deceptive enquiry content",
        "Do not use the site to infringe intellectual property or privacy rights",
        "Do not reverse engineer non-public systems beyond what law permits",
      ],
    },
    {
      id: "ip",
      title: "Intellectual property",
      paragraphs: [
        "ANTIKRA names, logos, product marks (including Rembeh and Carmie), site design, text and media are owned by ANTIKRA or its licensors. You may not use them without prior written permission, except for limited fair use or as otherwise allowed by law.",
      ],
    },
    {
      id: "third-party",
      title: "Third-party links",
      paragraphs: [
        "The site may link to third-party websites or products. We are not responsible for their content, policies or practices.",
      ],
    },
    {
      id: "disclaimer",
      title: "Disclaimer",
      paragraphs: [
        "The site and materials are provided “as is” and “as available” without warranties of any kind, express or implied, to the fullest extent permitted by law—including merchantability, fitness for a particular purpose and non-infringement.",
      ],
    },
    {
      id: "liability",
      title: "Limitation of liability",
      paragraphs: [
        "To the fullest extent permitted by law, ANTIKRA and its companies are not liable for indirect, incidental, special, consequential or punitive damages, or loss of profits, data or goodwill, arising from use of the site. Our aggregate liability for claims relating to the public site is limited to the greater of USD 100 or the amount you paid us specifically for site access (if any) in the twelve months before the claim.",
      ],
    },
    {
      id: "indemnity",
      title: "Indemnity",
      paragraphs: [
        "You agree to indemnify ANTIKRA against claims arising from your misuse of the site or violation of these terms, except to the extent caused by our wilful misconduct.",
      ],
    },
    {
      id: "law",
      title: "Governing law",
      paragraphs: [
        "These terms are governed by the laws of Uganda, without regard to conflict-of-law rules, unless a separate written agreement specifies otherwise for a particular engagement. Courts in Kampala have non-exclusive jurisdiction, without limiting rights to seek relief elsewhere where required by law.",
      ],
    },
    {
      id: "changes-terms",
      title: "Changes",
      paragraphs: [
        "We may update these terms. The effective date will change when we do. Continued use after updates constitutes acceptance where permitted by law.",
      ],
    },
    {
      id: "contact-terms",
      title: "Contact",
      paragraphs: [
        "Questions about these terms can be sent through the Contact page on this website.",
      ],
    },
  ],
}
