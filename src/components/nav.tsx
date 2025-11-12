import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logoIcon from "@/assets/icon.svg";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/research", label: "Research" },
];

export function Nav() {
  const [isPinned, setIsPinned] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      className={`sticky top-0 z-50 w-full color-bg-base-veil backdrop-blur transition-shadow ${isPinned ? "shadow-sm" : ""}`}
    >
      <div className="relative mx-auto flex h-16 w-full max-w-6xl items-center px-4 sm:px-6">
        <div className="flex flex-1 items-center">
          <Link to="/" className="flex items-center gap-1" aria-label="Pairium AI home">
            <img src={logoIcon} alt="Pairium AI" className="h-6 w-6" />
            <span className="text-lg font-semibold tracking-tight color-text-base">
              Pairium
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm font-medium color-text-muted md:flex">
          {LINKS.map((link) => {
            const active = isActive(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-colors hover-color-text-base ${active ? "color-text-base" : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex flex-1 justify-end items-center gap-2">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden h-9 w-9 p-0"
                aria-label="Open navigation menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="color-bg-base px-4 pb-12 pt-20 sm:px-6"
              hideClose
            >
              <div className="mx-auto flex w-full max-w-6xl flex-col">
                <div className="flex items-center justify-between">
                  <Link
                    to="/"
                    className="flex items-center gap-2"
                    aria-label="Pairium AI home"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <img src={logoIcon} alt="Pairium AI" className="h-6 w-6" />
                    <span className="text-lg font-semibold tracking-tight color-text-base">
                      Pairium
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-9 w-9 p-0"
                      aria-label="Close navigation menu"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>
                <nav className="mt-8 flex flex-col gap-3 text-lg font-semibold">
                  {LINKS.map((link) => {
                    const active = isActive(link.to);
                    return (
                      <SheetClose asChild key={link.to}>
                        <Link
                          to={link.to}
                          className={`rounded-full px-4 py-3 transition-colors hover-color-text-base ${active ? "color-text-base color-bg-surface" : "color-text-muted"}`}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <SheetClose asChild>
                  <a
                    href="mailto:harang@pairium.ai"
                    className="mt-10 inline-flex items-center justify-center rounded-full color-bg-primary px-6 py-3 text-sm font-semibold color-text-on-primary shadow-sm transition-all hover-color-bg-primary-strong hover:scale-[1.02]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in touch
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>

          <a
            href="mailto:harang@pairium.ai"
            className="hidden md:inline-flex items-center rounded-full color-bg-primary px-4 py-2 text-sm font-semibold color-text-on-primary shadow-sm transition-all hover-color-bg-primary-strong hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
