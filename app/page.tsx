import { ArrowRight, BrainCircuit, Users, BarChart, Network, Mail, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="w-full py-16 md:py-32 lg:py-40 bg-gradient-to-b from-blue-50 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/95" aria-labelledby="hero-heading">
        <div className="absolute inset-0 bg-grid-slate-100/[0.5] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="flex flex-col justify-center space-y-8 w-full">
              <div className="space-y-5">
                <h1 id="hero-heading" className="w-full text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
                  Pairium <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007ACC] to-[#40A9FF] dark:from-[#40A9FF] dark:to-[#69C0FF]">AI</span>
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto text-slate-700 dark:text-white/90">
                  Personalizing the Agentic Age with AI technology that adapts to your unique work style.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <a
                  href="#about"
                  className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-4 py-2.5 text-base font-medium text-white shadow-sm hover:from-[#0088CC] hover:to-[#00CCFF] transition-all"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-blue-950/80" aria-labelledby="features-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-4">Features</span>
            <h2 id="features-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Why Choose <span className="text-[#007ACC] dark:text-[#40A9FF]">Pairium AI</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Our AI personality pairing technology enhances productivity and performance in human-AI collaboration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="h-full border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10 dark:bg-[#40A9FF]/20">
                  <BrainCircuit className="h-5 w-5 text-[#007ACC] dark:text-[#40A9FF]" />
                </div>
                <CardTitle className="mt-4 dark:text-white">Personality Pairing</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Proprietary technology that matches AI agents with human users for optimal collaboration.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="h-full border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10 dark:bg-[#40A9FF]/20">
                  <BarChart className="h-5 w-5 text-[#007ACC] dark:text-[#40A9FF]" />
                </div>
                <CardTitle className="mt-4 dark:text-white">Performance Optimization</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  Proven productivity gains based on MIT research and large-scale studies.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="h-full border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900">
              <CardHeader>
                <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10 dark:bg-[#40A9FF]/20">
                  <Network className="h-5 w-5 text-[#007ACC] dark:text-[#40A9FF]" />
                </div>
                <CardTitle className="mt-4 dark:text-white">Adaptive Learning</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  AI that continuously adapts to your working style and preferences.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-4">About Us</span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              About <span className="text-[#007ACC] dark:text-[#40A9FF]">Pairium AI</span>
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1 order-2 md:order-1">
              <div className="space-y-6 text-slate-700 dark:text-slate-300">
                <p className="text-lg leading-relaxed">
                  Born of proprietary MIT research on the productivity and performance benefits of "personality pairing" AI agents with human users, Pairium AI is developing personalization technology that optimizes Human-AI collaboration to maximize performance and productivity returns in any collaborative task.
                </p>
                <p className="text-lg leading-relaxed">
                  MIT collaborators and Pairium AI co-founders Sinan Aral and Harang Ju developed a first of its kind, commercial grade human-AI collaboration platform called Pairit. <Link href="/pairit" className="text-[#007ACC] dark:text-[#40A9FF]">Pairit</Link> allows humans to collaborate with fully configured AI agents that "can do anything the humans can do" on any configurable task.
                </p>
                <p className="text-lg leading-relaxed">
                  But, unlike other platforms, it is configured to discover causal drivers of improved productivity and performance. Aral and Ju test drove their platform in a large scale randomized controlled trial (RCT) of Human-AI collaboration to create end to end marketing campaigns. They discovered non-obvious and surprisingly strong productivity and performance effects of "pairing" AI agents with their human collaborators. Through this discovery, Pairium was born...
                </p>
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-md aspect-square">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00AAFF] opacity-20 blur-3xl" />
                <div className="relative h-full w-full rounded-xl border border-slate-200 dark:border-blue-900/50 bg-white dark:bg-blue-950/40 shadow-lg flex items-center justify-center overflow-hidden p-8">
                  <div className="grid grid-cols-2 gap-4 w-full h-full">
                    <div className="border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                      <BrainCircuit className="h-12 w-12 text-[#007ACC] dark:text-[#40A9FF]" />
                    </div>
                    <div className="border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                      <Users className="h-12 w-12 text-[#007ACC] dark:text-[#40A9FF]" />
                    </div>
                    <div className="border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                      <BarChart className="h-12 w-12 text-[#007ACC] dark:text-[#40A9FF]" />
                    </div>
                    <div className="border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 rounded-lg flex items-center justify-center">
                      <Network className="h-12 w-12 text-[#007ACC] dark:text-[#40A9FF]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-blue-950/80" aria-labelledby="team-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-4">Our Team</span>
            <h2 id="team-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Meet Our <span className="text-[#007ACC] dark:text-[#40A9FF]">Leadership</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="group">
              <Link href="/about#sinan-aral" className="block">
                <div className="relative overflow-hidden rounded-xl border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md">
                      <Image 
                        src="/sinan-aral.jpg" 
                        alt="Sinan Aral" 
                        width={224} 
                        height={224}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23f1f5f9'/%3E%3Ctext x='112' y='112' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3ESinan Aral%3C/text%3E%3C/svg%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Sinan Aral</h3>
                    <p className="mb-3 text-[#007ACC] dark:text-[#40A9FF]">Co-founder and CEO</p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      David Austin Professor of IT, Marketing, and Data Science at MIT. Author of "The Hype Machine." Award-winning scientist and entrepreneur.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/about#harang-ju" className="block">
                <div className="relative overflow-hidden rounded-xl border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md">
                      <Image 
                        src="/harang-ju.jpg" 
                        alt="Harang Ju" 
                        width={224} 
                        height={224}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23f1f5f9'/%3E%3Ctext x='112' y='112' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EHarang Ju%3C/text%3E%3C/svg%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Harang Ju</h3>
                    <p className="mb-3 text-[#007ACC] dark:text-[#40A9FF]">Co-founder and COO</p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Assistant Professor at Johns Hopkins Carey Business School. PhD in Neuroscience. Expert in human-AI collaboration systems.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto mt-12">
            <div className="group">
              <Link href="/about#james-kupernik" className="block">
                <div className="relative overflow-hidden rounded-xl border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md">
                      <Image 
                        src="/james-kupernik.jpg" 
                        alt="James Kupernik" 
                        width={224} 
                        height={224}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23f1f5f9'/%3E%3Ctext x='112' y='112' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EJames Kupernik%3C/text%3E%3C/svg%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">James Kupernik</h3>
                    <p className="mb-3 text-[#007ACC] dark:text-[#40A9FF]">Technical staff</p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Technology executive and CTO at Airship and Vidmob. Expert in GenAI and serverless development.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            
            <div className="group">
              <Link href="/about#josh-attenberg" className="block">
                <div className="relative overflow-hidden rounded-xl border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md">
                      <Image 
                        src="/josh-attenberg.jpg" 
                        alt="Josh Attenberg" 
                        width={224} 
                        height={224}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23f1f5f9'/%3E%3Ctext x='112' y='112' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EJosh Attenberg%3C/text%3E%3C/svg%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Josh Attenberg</h3>
                    <p className="mb-3 text-[#007ACC] dark:text-[#40A9FF]">Technical staff</p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Data scientist with PhD in machine learning and 15+ years experience. Former AI leader at Etsy, Compass, and VSCO.
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="group">
              <Link href="/about#michael-zhao" className="block">
                <div className="relative overflow-hidden rounded-xl border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md">
                      <Image 
                        src="/michael-zhao.jpg" 
                        alt="Michael Zhao" 
                        width={224} 
                        height={224}
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='224' height='224' viewBox='0 0 224 224'%3E%3Crect width='224' height='224' fill='%23f1f5f9'/%3E%3Ctext x='112' y='112' font-family='Arial' font-size='24' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EMichael Zhao%3C/text%3E%3C/svg%3E"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Michael Zhao</h3>
                    <p className="mb-3 text-[#007ACC] dark:text-[#40A9FF]">Technical staff</p>
                    <p className="mb-6 text-slate-600 dark:text-slate-300">
                      Applied Scientist at Columbia-Dream Sports AI Center. PhD from MIT. Former researcher at Netflix and Amazon.
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-blue-50 dark:bg-slate-900" aria-labelledby="contact-heading">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-4">Contact</span>
            <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Get in <span className="text-[#007ACC] dark:text-[#40A9FF]">Touch</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              Interested in learning more about Pairium AI? Contact us today.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto text-center">
            <div className="rounded-xl border border-slate-200 dark:border-blue-900/50 bg-white dark:bg-blue-950/40 p-8 shadow-sm">
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-full p-5">
                  <Mail className="h-10 w-10 text-[#007ACC] dark:text-[#40A9FF]" />
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Email Us</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300 mb-4">
                    We'd love to hear from you.
                  </p>
                  <a 
                    href="mailto:info@pairium.ai" 
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-6 py-3 text-base font-medium text-white shadow-sm hover:from-[#0088CC] hover:to-[#00CCFF] transition-all"
                  >
                    info@pairium.ai
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
