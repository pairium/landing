import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import logoIcon from "@/assets/icon.svg";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/research", label: "Research" },
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

  const isActive = (to: string) => {
    return location.pathname === to;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-[#f7f7f4]/90 backdrop-blur transition-shadow ${isPinned ? "shadow-sm" : ""}`}
    >
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <div className="flex flex-1 items-center">
          <Link to="/" className="flex items-center gap-1" aria-label="Pairium AI home">
            <img src={logoIcon} alt="Pairium AI" className="h-6 w-6" />
            <span className="text-lg font-semibold tracking-tight text-[#26251e]">
              Pairium
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[#26251e]/80 md:flex">
          {LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover:text-[#26251e] ${active ? "text-[#26251e]" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 justify-end">
          <a
            href="mailto:harang@pairium.ai"
            className="inline-flex items-center rounded-full bg-[#26251e] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1a1916] hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
