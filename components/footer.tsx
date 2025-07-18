import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { Mail, ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="container lg:py-20 flex md:items-center justify-between max-md:flex-col gap-y-6 md:col-start-1 md:col-span-8 md:row-start-2">
      {/* <form className="newsletter max-w-[300px] w-full">
        <label className="text-button block mb-4">Keep up to date</label>
        <div className="input-group flex gap-2 h-[2.75rem]">
          <div className="input-field flex-1 flex items-center gap-3 px-4 bg-[--color-background-alt] border border-[--color-background-alt] rounded-full text-[--color-mid]">
            <Mail className="h-4 w-4" />
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-transparent border-none outline-none w-full text-small" 
            />
          </div>
          <button 
            type="submit" 
            className="aspect-[1/1] h-full rounded-full bg-[--color-background-alt] text-[--color-mid] flex items-center justify-center hover:opacity-70 transition"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form> */}
      
      <div className="flex gap-6 items-center">
        <a 
          href="mailto:info@pairium.ai" 
          className="text-button text-[--color-mid] capitalize hover:opacity-50"
        >
          email
        </a>
        <a 
          href="https://www.linkedin.com/company/pairium-ai" 
          className="text-button text-[--color-mid] capitalize hover:opacity-50"
        >
          linkedin
        </a>
        <a 
          href="https://x.com/pairium_ai" 
          className="text-button text-[--color-mid] capitalize hover:opacity-50"
        >
          x
        </a>
      </div>
      
      <div className="flex gap-6 items-center">
        <Link 
          href="/privacy" 
          className="text-button text-[--color-mid] hover:opacity-50"
        >
          Privacy Policy
        </Link>
        <Link 
          href="/terms" 
          className="text-button text-[--color-mid] hover:opacity-50"
        >
          Terms of Service
        </Link>
      </div>
    </footer>
  )
} 