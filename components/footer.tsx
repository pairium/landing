import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto max-w-7xl flex flex-col gap-4 py-4 px-4 sm:px-6">
        <p className="text-sm text-muted-foreground text-center sm:text-left">
          &copy; {new Date().getFullYear()} Harang Ju
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-start">
            <Link href="https://accessibility.mit.edu" className="text-sm text-muted-foreground hover:text-foreground">
              Accessibility
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
          <div className="sm:ml-auto sm:pl-4 sm:border-l border-border">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
} 