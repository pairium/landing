'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { BrainCircuit, Users, BarChart, Network, Mail } from "lucide-react"

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700/20 bg-white dark:bg-slate-900">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex-1 flex items-center gap-2 hover:opacity-80 transition-opacity" aria-label="Pairium AI Home">
          <div className="flex items-center">
            <Image src="/icon.svg" alt="Pairium AI Logo" width={40} height={40} className="mr-2" />
          </div>
        </Link>
        
        {isHomePage && (
          <nav className="flex items-center gap-6" aria-label="Main navigation">
            <Link
              href="/mindmeld" 
              className="text-base hover:text-slate-900 dark:hover:text-white transition-colors font-medium text-slate-600 dark:text-slate-300"
            >
              MindMeld
            </Link>
            <Link 
              href="mailto:info@pairium.ai" 
              className="ml-2 inline-flex items-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-4 py-2.5 text-base font-medium text-white shadow-sm hover:from-[#0088CC] hover:to-[#00CCFF] transition-all"
            >
              Get in Touch
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
} 