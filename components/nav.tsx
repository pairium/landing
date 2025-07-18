'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className="md:col-start-1 md:col-span-2 sticky top-0 md:top-24 flex flex-col gap-y-14 h-fit z-11 py-6">
      <div className="flex items-center justify-between z-11">
        <Link href="/" className="inline-flex items-center gap-x-2" aria-label="Go to Home">
          <div className="flex items-center">
            <Image src="/icon.svg" alt="Pairium AI Logo" width={20} height={20} className="mr-2" />
            <span className="text-lg font-medium text-[--color-foreground]">Pairium</span>
          </div>
        </Link>
      </div>
      
      {isHomePage && (
        <nav className="flex flex-col" aria-label="Main navigation">
          <ul role="list" className="flex flex-col">
            <li className="contents">
              <Link 
                href="/pairit" 
                className="inline-flex items-center gap-x-2 text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Product
              </Link>
            </li>
            <li className="contents">
              <Link 
                href="/research" 
                className="inline-flex items-center gap-x-2 text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Research
              </Link>
            </li>
            <li className="contents">
              <Link 
                href="/about" 
                className="text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
} 