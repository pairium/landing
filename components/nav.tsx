'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BrainCircuit, Github, BookOpenText, ScrollText } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex-1 flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="MindMeld Home">
          <BrainCircuit className="h-6 w-6" aria-hidden="true" />
          <span className="text-xl font-bold">MindMeld</span>
        </Link>
        {isHomePage && (
          <nav className="hidden md:flex gap-6" aria-label="Main navigation">
            <a href="#features" className="text-sm font-medium hover:text-primary" onClick={(e) => handleScroll(e, 'features')}>
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-primary" onClick={(e) => handleScroll(e, 'how-it-works')}>
              How It Works
            </a>
            <a href="#research-development" className="text-sm font-medium hover:text-primary" onClick={(e) => handleScroll(e, 'research-development')}>
              R&D
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary" onClick={(e) => handleScroll(e, 'contact')}>
              Contact
            </a>
          </nav>
        )}
        <div className="flex-1 flex items-center gap-3 justify-end" aria-label="External links">
          <Button variant="outline" disabled className="relative" aria-label="GitHub Repository (Coming Soon)">
            <Github className="h-5 w-5" aria-hidden="true" />
            <span>GitHub</span>
            <span className="absolute -top-1 -right-1 text-[10px] font-medium bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
              Soon
            </span>
          </Button>
          <Button variant="outline" asChild>
            <Link href="https://arxiv.org/abs/2503.18238" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" aria-label="Read the paper">
              <ScrollText className="h-5 w-5" aria-hidden="true" />
              <span>Paper</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 