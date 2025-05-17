import { Linkedin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white py-12">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Pairium AI</h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-md">
              Personalizing the Agentic Age with MIT research-backed AI technology.
            </p>
          </div>
          
          <div className="flex gap-8 mb-8">
            <Link
              href="/mindmeld" 
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              MindMeld
            </Link>
            <a 
              href="https://arxiv.org/abs/2503.18238" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Research
            </a>
            <Link
              href="/privacy" 
              className="text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 w-full pt-8 text-center">
            <p className="text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Pairium AI. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
} 