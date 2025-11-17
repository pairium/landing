import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

type FooterLink = { to: string; label: string; hash?: string } | { href: string; label: string; external: true };

const FOOTER_LINKS: FooterLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { href: "https://arxiv.org/abs/2503.18238", label: "Research", external: true },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { href: "mailto:info@pairium.ai", label: "Contact", external: true },
];

export function Footer() {
  return (
    <footer className="w-full color-bg-base py-6 color-text-base">
      <div className="container mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center sm:px-6">
        <nav className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium color-text-muted">
          {FOOTER_LINKS.map((link) =>
            "external" in link ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover-color-text-base"
              >
                {link.label}
              </a>
            ) : (
              <Link key={`${link.to}${link.hash ? `#${link.hash}` : ""}`} to={link.to} hash={link.hash} className="transition-colors hover-color-text-base">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex w-full items-center justify-between mt-2">
          <p className="max-w-md text-sm color-text-muted">
            © {new Date().getFullYear()} Pairium AI, Inc.
          </p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
