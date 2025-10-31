import type { JSX } from "react";

import { LegalPage, type LegalSection } from "@/pages/legal-page";

const termsSections: LegalSection[] = [
  {
    title: "Acceptance of Terms",
    body: "By using this website you agree to these terms. If you disagree, please discontinue use immediately.",
  },
  {
    title: "Website Content",
    body: "All content is provided for informational purposes by Pairium AI and is protected by copyright laws.",
  },
  {
    title: "No Data Collection",
    body: "We do not collect personal data or require user accounts.",
  },
  {
    title: "Intellectual Property",
    body: "Original content, features, and functionality belong to Pairium AI.",
  },
  {
    title: "Limitation of Liability",
    body: "Pairium AI is not liable for indirect or consequential damages arising from site use.",
  },
  {
    title: "Changes to Terms",
    body: "We may modify these terms and will update the revision date when changes occur.",
  },
  {
    title: "Contact",
    body: "Questions? Email digital@mit.edu.",
  },
];

export function TermsPage(): JSX.Element {
  return <LegalPage id="terms" title="Terms of Service" sections={termsSections} tone="muted" />;
}

