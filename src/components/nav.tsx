import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logoIcon from "@/assets/icon.svg";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/pairit", label: "Pairit" },
];

export function Nav() {
  const [isPinned, setIsPinned] = useState(false);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setIsPinned(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string, hash?: string) => {
    if (to === "/" && !hash) {
      return location.pathname === "/" && !location.hash;
    }

    if (to === "/" && hash === "contact") {
      return location.pathname === "/" && location.hash === "contact";
    }

    return location.pathname === to;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/90 backdrop-blur transition-shadow dark:border-slate-800/60 dark:bg-slate-950/80 ${isPinned ? "shadow-sm" : ""}`}
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2" aria-label="Pairium AI home">
          <img src={logoIcon} alt="Pairium AI" className="h-10 w-10" />
          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Pairium AI
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
          {LINKS.map((link) => {
            const active = isActive(link.to, link.hash);
            return (
              <Link
                key={`${link.to}${link.hash ? `#${link.hash}` : ""}`}
                to={link.to}
                hash={link.hash}
                className={`transition-colors hover:text-slate-900 dark:hover:text-white ${active ? "text-slate-900 dark:text-white" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="mailto:info@pairium.ai"
            className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:from-[#0088CC] hover:to-[#00CCFF]"
          >
            Get in touch
          </a>
        </nav>
        <a
          href="mailto:info@pairium.ai"
          className="inline-flex items-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:from-[#0088CC] hover:to-[#00CCFF] md:hidden"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
