import { ArrowRight, BrainCircuit, Users, BarChart, Network } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col gap-y-40">
      {/* Hero Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h1 className="text-[--color-foreground] text-h1">Personalizing AI agents to adapt to your unique work style</h1>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>Personalized AI agents will adapt to you, what you are doing, and how you are doing it.</p>
              </div>
            </div>
          </div>
          <div className="cta flex items-center gap-x-2">
            <Link href="/pairit" className="inline-flex items-center gap-x-2 button-primary flex">
              Explore Pairit
            </Link>
            <Link href="/research" className="inline-flex items-center gap-x-2 button-secondary flex">
              Explore Research
            </Link>
          </div>
        </div>
        {/* <div className="w-full h-auto component">
          <Image 
            width={800} 
            height={600} 
            alt="Image" 
            loading="lazy" 
            className="w-full h-auto rounded-md" 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f1f5f9'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EHero Image%3C/text%3E%3C/svg%3E" 
          />
        </div> */}
      </section>

      {/* Features Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h2 className="text-[--color-foreground] text-h2">Why Choose Pairium AI</h2>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>Our AI personality pairing technology enhances productivity and performance in human-AI collaboration.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 component">
          <div className="h-full bg-[--color-background-alt] rounded-md p-6">
            <div className="p-2 w-fit rounded-lg bg-[--color-brand]/10 mb-4">
              <BrainCircuit className="h-5 w-5 text-[--color-brand]" />
            </div>
            <h3 className="text-h3 mb-4">Personality Pairing</h3>
            <p className="text-p text-[--color-mid]">
              Proprietary technology that matches AI agents with human users for optimal collaboration.
            </p>
          </div>
          
          <div className="h-full bg-[--color-background-alt] rounded-md p-6">
            <div className="p-2 w-fit rounded-lg bg-[--color-brand]/10 mb-4">
              <BarChart className="h-5 w-5 text-[--color-brand]" />
            </div>
            <h3 className="text-h3 mb-4">Performance Optimization</h3>
            <p className="text-p text-[--color-mid]">
              Proven productivity and performance gains based on MIT research and large-scale studies.
            </p>
          </div>
          
          <div className="h-full bg-[--color-background-alt] rounded-md p-6">
            <div className="p-2 w-fit rounded-lg bg-[--color-brand]/10 mb-4">
              <Network className="h-5 w-5 text-[--color-brand]" />
            </div>
            <h3 className="text-h3 mb-4">Adaptive Learning</h3>
            <p className="text-p text-[--color-mid]">
              AI that continuously adapts to your working style and preferences.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h2 className="text-[--color-foreground] text-h2">Pairit</h2>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>A first-of-its-kind human-AI collaboration platform for optimal productivity. Pairit allows humans to collaborate with fully configured AI agents that can do anything the humans can do on any configurable task.</p>
              </div>
            </div>
          </div>
          <div className="cta flex items-center gap-x-2">
            <a href="mailto:info@pairium.ai" className="inline-flex items-center gap-x-2 button-primary flex">
              Join waitlist
            </a>
            <Link href="/pairit" className="inline-flex items-center gap-x-2 button-secondary flex">
              Learn more
            </Link>
          </div>
        </div>
        {/* <div className="w-full h-auto component inset">
          <Image 
            width={800} 
            height={600} 
            alt="Product Image" 
            loading="lazy" 
            className="w-full h-auto rounded-md" 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23e7e3db'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' fill='%234d4d4d' text-anchor='middle' dominant-baseline='middle'%3EProduct Demo%3C/text%3E%3C/svg%3E" 
          />
        </div> */}
      </section>

      {/* Research Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h2 className="text-[--color-foreground] text-h2">Research</h2>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>Born of proprietary MIT research on the productivity and performance benefits of "personality pairing" AI agents with human users. Our research team discovered non-obvious and surprisingly strong productivity and performance effects of pairing AI agents with their human collaborators.</p>
              </div>
            </div>
          </div>
          <div className="cta flex items-center gap-x-2">
            <a href="https://arxiv.org/abs/2503.18238" className="inline-flex items-center gap-x-2 button-primary flex">
              Learn more
            </a>
          </div>
        </div>
        {/* <div className="w-full h-auto component inset">
          <Image 
            width={800} 
            height={600} 
            alt="Research Image" 
            loading="lazy" 
            className="w-full h-auto rounded-md" 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23f8f6f2'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='24' fill='%234d4d4d' text-anchor='middle' dominant-baseline='middle'%3EResearch Visualization%3C/text%3E%3C/svg%3E" 
          />
        </div> */}
      </section>

      {/* About/Team Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h2 className="text-[--color-foreground] text-h2">About Pairium AI</h2>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>Born of proprietary MIT research on the productivity and performance benefits of "personality pairing" AI agents with human users, Pairium AI is developing personalization technology that optimizes human-AI collaboration to maximize performance and productivity returns in any collaborative task.</p>
                <p>MIT collaborators and Pairium AI co-founders Sinan Aral and Harang Ju developed a first of its kind, commercial grade human-AI collaboration platform called Pairit. Pairit allows humans to collaborate with fully configured AI agents that "can do anything the humans can do" on any configurable task.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Co-founders */}
        <div className="component">
          <h3 className="text-h3 text-[--color-foreground] mb-8 text-center">Co-founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group">
              <Link href="/about#sinan-aral" className="block">
                <div className="relative overflow-hidden rounded-xl bg-[--color-background-alt] p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-[--color-line] bg-[--color-background-alt] shadow-md">
                      <Image 
                        src="/sinan-aral.jpg" 
                        alt="Sinan Aral" 
                        width={224} 
                        height={224}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-h3 text-[--color-foreground]">Sinan Aral</h4>
                    <p className="mb-3 text-p text-[--color-brand]">Co-founder and CEO</p>
                    <p className="mb-6 text-p text-[--color-mid]">
                      David Austin Professor of IT, Marketing, and Data Science at MIT. Author of "The Hype Machine." Award-winning scientist and entrepreneur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/about#harang-ju" className="block">
                <div className="relative overflow-hidden rounded-xl bg-[--color-background-alt] p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-[--color-line] bg-[--color-background-alt] shadow-md">
                      <Image 
                        src="/harang-ju.jpg" 
                        alt="Harang Ju" 
                        width={224} 
                        height={224}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-h3 text-[--color-foreground]">Harang Ju</h4>
                    <p className="mb-3 text-p text-[--color-brand]">Co-founder and COO</p>
                    <p className="mb-6 text-p text-[--color-mid]">
                      Incoming Assistant Professor at Johns Hopkins University. PhD in Neuroscience. Expert in human-AI collaboration systems.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Staff */}
        <div className="component">
          <h3 className="text-h3 text-[--color-foreground] mb-8 text-center">Technical Staff</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <Link href="/about#james-kupernik" className="block">
                <div className="relative overflow-hidden rounded-xl bg-[--color-background-alt] p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[--color-line] bg-[--color-background-alt] shadow-md">
                      <Image 
                        src="/james-kupernik.jpg" 
                        alt="James Kupernik" 
                        width={192} 
                        height={192}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-h3 text-[--color-foreground]">James Kupernik</h4>
                    <p className="mb-3 text-p text-[--color-brand]">Staff</p>
                    <p className="mb-6 text-p text-[--color-mid] text-sm">
                      Technology executive and former CTO at Airship and Vidmob. Expert in GenAI and serverless development.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/about#josh-attenberg" className="block">
                <div className="relative overflow-hidden rounded-xl bg-[--color-background-alt] p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[--color-line] bg-[--color-background-alt] shadow-md">
                      <Image 
                        src="/josh-attenberg.jpg" 
                        alt="Josh Attenberg" 
                        width={192} 
                        height={192}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-h3 text-[--color-foreground]">Josh Attenberg</h4>
                    <p className="mb-3 text-p text-[--color-brand]">Staff</p>
                    <p className="mb-6 text-p text-[--color-mid] text-sm">
                      Data scientist with Ph.D. in machine learning and 15+ years experience. Former AI leader at Etsy, Compass, and VSCO.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/about#michael-zhao" className="block">
                <div className="relative overflow-hidden rounded-xl bg-[--color-background-alt] p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-48 w-48 overflow-hidden rounded-full border-4 border-[--color-line] bg-[--color-background-alt] shadow-md">
                      <Image 
                        src="/michael-zhao.jpg" 
                        alt="Michael Zhao" 
                        width={192} 
                        height={192}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-h3 text-[--color-foreground]">Michael Zhao</h4>
                    <p className="mb-3 text-p text-[--color-brand]">Staff</p>
                    <p className="mb-6 text-p text-[--color-mid] text-sm">
                      Applied Scientist at Columbia–Dream Sports AI Center. Ph.D. from MIT. Former researcher at Netflix and Amazon.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container flex flex-col gap-y-16" data-theme="light">
        <div className="textstack flex flex-col gap-10 lg:px-8 lg:col-width-6">
          <div className="flex flex-col">
            <h2 className="text-[--color-foreground] text-h2">Get in Touch</h2>
            <div className="prose prose-p:text-p prose-p:text-mid prose-a:text-p prose-a:text-mid prose-p:last:mb-0 prose-p:mt-4">
              <div>
                <p>Interested in learning more about Pairium AI? Contact us today.</p>
              </div>
            </div>
          </div>
          <div className="cta flex items-center gap-x-2">
            <a href="mailto:info@pairium.ai" className="inline-flex items-center gap-x-2 button-primary flex">
              info@pairium.ai
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
