import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme-toggle";

const FOOTER_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { href: "https://arxiv.org/abs/2503.18238", label: "Research", external: true },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
  { to: "/", hash: "contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-12 text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <div>
          <h3 className="text-lg font-semibold">Pairium AI</h3>
          <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">
            AI personalization that makes you better.
          </p>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          {FOOTER_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-slate-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ) : (
              <Link key={`${link.to}${link.hash ? `#${link.hash}` : ""}`} to={link.to} hash={link.hash} className="transition-colors hover:text-slate-900 dark:hover:text-white">
                {link.label}
              </Link>
            ),
          )}
        </nav>
        <div className="flex w-full flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Pairium AI. All rights reserved.</p>
          <ThemeToggle />
        </div>
      </div>
    </footer>
  );
}
