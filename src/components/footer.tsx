import { Link } from "@tanstack/react-router";

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
    <footer className="w-full border-t border-slate-200 bg-[#f7f7f4] py-6 text-[#26251e]">
      <div className="container mx-auto flex max-w-8xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <div>
          <p className="mt-2 max-w-md text-sm text-[#26251e]/80">
            © {new Date().getFullYear()} Pairium AI. AI personalization that makes you better.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-[#26251e]/80">
          {FOOTER_LINKS.map((link) =>
            "external" in link ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-[#26251e]"
              >
                {link.label}
              </a>
            ) : (
              <Link key={`${link.to}${link.hash ? `#${link.hash}` : ""}`} to={link.to} hash={link.hash} className="transition-colors hover:text-[#26251e]">
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
    </footer>
  );
}
