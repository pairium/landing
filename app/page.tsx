import { ArrowRight, BrainCircuit, Users, BarChart, Network, Mail, Linkedin } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Nav } from "@/components/nav"

export default function LandingPage() {

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900/95" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
          
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div>
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-white/20 text-white mb-6">
                    MIT Research-Backed Technology
                  </span>
                  <h1 id="hero-heading" className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#40A9FF] to-[#69C0FF]">Pairium AI</span>
                  </h1>
                  <p className="mt-4 text-xl md:text-2xl max-w-xl text-white/90">
                    Personalizing the Agentic Age with AI technology that adapts to your unique work style.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#about"
                    className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-6 py-3 text-base font-medium text-white shadow-sm hover:from-[#0088CC] hover:to-[#00CCFF] transition-all"
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00AAFF] opacity-20 blur-3xl" />
                  <div className="relative h-full w-full rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007ACC] to-transparent" />
                    <Image 
                      src="/dashboard-preview.png" 
                      alt="Pairium AI Platform" 
                      width={500} 
                      height={500}
                      className="object-contain p-4"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='500' viewBox='0 0 500 500'%3E%3Crect width='500' height='500' fill='%23172554'/%3E%3Ctext x='250' y='250' font-family='Arial' font-size='30' fill='%2394a3b8' text-anchor='middle' dominant-baseline='middle'%3EPairium AI Platform%3C/text%3E%3C/svg%3E"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-gradient-to-br from-[#007ACC] to-[#00AAFF] p-1 animate-pulse">
                        <div className="bg-slate-900 rounded-full p-6">
                          <Image src="/icon.svg" alt="Pairium AI" width={100} height={100} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 lg:py-32 bg-white" aria-labelledby="features-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">Features</span>
              <h2 id="features-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                Why Choose <span className="text-[#007ACC]">Pairium AI</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Our AI personality pairing technology enhances productivity and performance in human-AI collaboration.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <BrainCircuit className="h-6 w-6 text-[#007ACC]" />
                  </div>
                  <CardTitle>Personality Pairing</CardTitle>
                  <CardDescription>
                    Proprietary technology that matches AI agents with human users for optimal collaboration.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <BarChart className="h-6 w-6 text-[#007ACC]" />
                  </div>
                  <CardTitle>Performance Optimization</CardTitle>
                  <CardDescription>
                    Proven productivity gains based on MIT research and large-scale studies.
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <Network className="h-6 w-6 text-[#007ACC]" />
                  </div>
                  <CardTitle>Adaptive Learning</CardTitle>
                  <CardDescription>
                    AI that continuously adapts to your working style and preferences.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-slate-50" aria-labelledby="about-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">About Us</span>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                About <span className="text-[#007ACC]">Pairium AI</span>
              </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 order-2 md:order-1">
                <div className="space-y-6 text-slate-700">
                  <p className="text-lg leading-relaxed">
                    Born of proprietary MIT research on the productivity and performance benefits of "personality pairing" AI agents with human users, Pairium AI is developing personalization technology that optimizes human-AI collaboration to maximize performance and productivity returns in any collaborative task.
                  </p>
                  <p className="text-lg leading-relaxed">
                    MIT collaborators and Pairium AI co-founders Sinan Aral and Harang Ju developed a first of its kind, commercial grade human-AI collaboration platform called MindMeld. MindMeld allows humans to collaborate with fully configured AI agents that "can do anything the humans can do" on any configurable task.
                  </p>
                  <p className="text-lg leading-relaxed">
                    But, unlike other platforms, it is configured to discover causal drivers of improved productivity and performance. Aral and Ju test drove their platform in a large scale randomized controlled trial (RCT) of Human-AI collaboration to create end to end marketing campaigns. They discovered non-obvious and surprisingly strong productivity and performance effects of "pairing" AI agents with their human collaborators. Through this discovery, Pairium was born...
                  </p>
                </div>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="relative mx-auto w-full max-w-md aspect-square">
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00AAFF] opacity-20 blur-3xl" />
                  <div className="relative h-full w-full rounded-xl border border-blue-100 bg-white shadow-lg flex items-center justify-center overflow-hidden p-8">
                    <div className="grid grid-cols-2 gap-4 w-full h-full">
                      <div className="bg-blue-50 rounded-lg flex items-center justify-center">
                        <BrainCircuit className="h-12 w-12 text-[#007ACC]" />
                      </div>
                      <div className="bg-blue-50 rounded-lg flex items-center justify-center">
                        <Users className="h-12 w-12 text-[#007ACC]" />
                      </div>
                      <div className="bg-blue-50 rounded-lg flex items-center justify-center">
                        <BarChart className="h-12 w-12 text-[#007ACC]" />
                      </div>
                      <div className="bg-blue-50 rounded-lg flex items-center justify-center">
                        <Network className="h-12 w-12 text-[#007ACC]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section (New) */}
        {/*
        <section id="testimonials" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white" aria-labelledby="testimonials-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-900 text-blue-100 mb-4">Testimonials</span>
              <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-bold tracking-tighter">
                What Our Partners Say
              </h2>
              <p className="mt-4 text-lg text-slate-300 max-w-2xl">
                Discover how Pairium AI is transforming human-AI collaboration across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">
                    "Pairium's personality pairing technology has significantly improved our team's productivity. The AI adapts to each team member's working style."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Jane Smith</h4>
                      <p className="text-sm text-slate-400">CTO, TechCorp</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">
                    "The research-backed approach to AI personalization makes Pairium stand out in the crowded AI landscape. Results speak for themselves."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Michael Johnson</h4>
                      <p className="text-sm text-slate-400">Director, InnovateCo</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="h-5 w-5 fill-current text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-300 mb-6 italic">
                    "Implementing Pairium AI has transformed how our teams collaborate with AI systems. A true game-changer for our workflow."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-slate-700 flex items-center justify-center">
                      <Users className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium">Sarah Williams</h4>
                      <p className="text-sm text-slate-400">VP Product, FutureTech</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Team Section */}
        <section id="team" className="w-full py-16 md:py-24 lg:py-32 bg-white" aria-labelledby="team-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">Our Team</span>
              <h2 id="team-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                Meet Our <span className="text-[#007ACC]">Leadership</span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-slate-50 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md">
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
                    <h3 className="text-xl font-bold text-slate-900">Sinan Aral</h3>
                    <p className="mb-3 text-[#007ACC]">Co-founder and CEO</p>
                    <p className="mb-6 text-slate-600">
                      David Austin Professor of IT, Marketing, and Data Science at MIT. Author of "The Hype Machine." Award-winning scientist and entrepreneur.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <a href="https://www.x.com/sinanaral" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-[#007ACC] hover:text-white">
                        <div className="h-5 w-5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/sinan-aral-3964a7/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-[#007ACC] hover:text-white">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="relative overflow-hidden rounded-xl bg-slate-50 p-6 shadow-md transition-all hover:shadow-lg">
                  <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-gradient-to-bl from-[#007ACC]/20 to-[#00AAFF]/20"></div>
                  
                  <div className="mb-6 flex justify-center">
                    <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-md">
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
                    <h3 className="text-xl font-bold text-slate-900">Harang Ju</h3>
                    <p className="mb-3 text-[#007ACC]">Co-founder and COO</p>
                    <p className="mb-6 text-slate-600">
                      Incoming Assistant Professor at Johns Hopkins University. PhD in Neuroscience. Expert in human-AI collaboration systems.
                    </p>
                    
                    <div className="flex justify-center space-x-4">
                      <a href="https://www.x.com/harangju/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-[#007ACC] hover:text-white">
                        <div className="h-5 w-5">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                          </svg>
                        </div>
                      </a>
                      <a href="https://www.linkedin.com/in/harangju/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 p-2 text-slate-600 transition-colors hover:bg-[#007ACC] hover:text-white">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-slate-50" aria-labelledby="contact-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center text-center mb-16">
              <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-800 mb-4">Contact</span>
              <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
                Get in <span className="text-[#007ACC]">Touch</span>
              </h2>
              <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                Interested in learning more about Pairium AI? Contact us today.
              </p>
            </div>
            
            <div className="max-w-xl mx-auto text-center">
              <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="bg-blue-50 rounded-full p-5">
                    <Mail className="h-10 w-10 text-[#007ACC]" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Email Us</h3>
                    <p className="mt-2 text-slate-600 mb-4">
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
    </div>
  )
}
