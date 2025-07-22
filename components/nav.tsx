'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="md:col-start-1 md:col-span-1 md:sticky md:top-24 flex flex-col md:gap-y-14 h-fit z-11">
      <div className="flex items-center justify-between z-11 p-4 md:p-0 bg-[--color-background] md:bg-transparent sticky top-0 md:static">
        <Link href="/" className="inline-flex items-center gap-x-2" aria-label="Go to Home">
          <div className="flex items-center">
            <Image src="/icon.svg" alt="Pairium AI Logo" width={20} height={20} className="mr-2" />
            <span className="text-lg font-medium text-[--color-foreground]">Pairium</span>
          </div>
        </Link>
        {isHomePage && (
          <button onClick={toggleMenu} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        )}
      </div>
      
      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        {isHomePage && (
          <nav className="flex flex-col px-4 pb-4" aria-label="Main navigation">
            <ul role="list" className="flex flex-col">
              <li className="contents">
                <a 
                  href="#features" 
                  onClick={toggleMenu}
                  className="inline-flex items-center gap-x-2 text-nav text-[--color-mid] pointer-events-auto w-fit py-2"
                >
                  Features
                </a>
              </li>
              <li className="contents">
                <a 
                  href="#pairit" 
                  onClick={toggleMenu}
                  className="inline-flex items-center gap-x-2 text-nav text-[--color-mid] pointer-events-auto w-fit py-2"
                >
                  Pairit
                </a>
              </li>
              <li className="contents">
                <a 
                  href="#research" 
                  onClick={toggleMenu}
                  className="inline-flex items-center gap-x-2 text-nav text-[--color-mid] pointer-events-auto w-fit py-2"
                >
                  Research
                </a>
              </li>
              <li className="contents">
                <a 
                  href="#team" 
                  onClick={toggleMenu}
                  className="text-nav text-[--color-mid] pointer-events-auto w-fit py-2"
                >
                  Team
                </a>
              </li>
              <li className="contents">
                <a 
                  href="#contact" 
                  onClick={toggleMenu}
                  className="text-nav text-[--color-mid] pointer-events-auto w-fit py-2"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Desktop Sidebar */}
      {isHomePage && (
        <nav className="hidden md:flex flex-col" aria-label="Main navigation">
          <ul role="list" className="flex flex-col">
            <li className="contents">
              <a 
                href="#features" 
                className="inline-flex items-center gap-x-2 text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Features
              </a>
            </li>
            <li className="contents">
              <a 
                href="#pairit" 
                className="inline-flex items-center gap-x-2 text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Pairit
              </a>
            </li>
            <li className="contents">
              <a 
                href="#research" 
                className="inline-flex items-center gap-x-2 text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Research
              </a>
            </li>
            <li className="contents">
              <a 
                href="#team" 
                className="text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Team
              </a>
            </li>
            <li className="contents">
              <a 
                href="#contact" 
                className="text-nav md:text-button text-[--color-mid] pointer-events-auto w-fit py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
} 