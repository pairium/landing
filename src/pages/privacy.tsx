import type { JSX } from "react";

import { LegalPage, type LegalSection } from "@/pages/legal-page";

const privacySections: LegalSection[] = [
  {
    title: "Introduction",
    body: "This Privacy Policy describes how Pairium AI handles your privacy when you visit this website.",
  },
  {
    title: "Information Collection",
    body: "We do not collect personal information. The site is informational only and requires no registration.",
  },
  {
    title: "Cookies and Tracking",
    body: "We do not use cookies or any tracking technologies.",
  },
  {
    title: "Third-Party Services",
    body: "No third-party analytics or marketing services run on this website.",
  },
  {
    title: "Changes",
    body: "We may update this policy and will post changes with an updated revision date.",
  },
  {
    title: "Contact",
    body: "Questions? Email info@pairium.ai.",
  },
];

export function PrivacyPage(): JSX.Element {
  return <LegalPage id="privacy" title="Privacy Policy" sections={privacySections} />;
}

