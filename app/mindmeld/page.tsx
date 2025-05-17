import { ArrowRight, Bot, BrainCircuit, Code, Database, Dices, ListCheck, MessageCircle, RefreshCcw, Users, Layout, BarChart, Network } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Nav } from "@/components/nav"

export default function LandingPage() {

  return (
    <div className="flex min-h-screen flex-col scroll-smooth">
      <Nav />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-32 lg:py-40 bg-gradient-to-b from-blue-50 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/95" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-grid-slate-100/[0.5] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col justify-center space-y-8 w-full">
                <div className="space-y-5">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-white/20 dark:text-white mb-2">
                    Powered by Pairium AI
                  </span>
                  <h1 id="hero-heading" className="w-full text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
                    MindMeld <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007ACC] to-[#40A9FF] dark:from-[#40A9FF] dark:to-[#69C0FF]">Platform</span>
                  </h1>
                  <p className="text-xl md:text-2xl max-w-2xl mx-auto text-slate-700 dark:text-white/90">
                    A powerful platform for designing and running interactive experiments between humans and AI agents, built on Pairium's personality pairing technology.
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  <div className="rounded-lg border border-[#007ACC]/30 bg-blue-50 dark:bg-slate-800/60 px-5 py-3 text-slate-700 dark:text-white">
                    <span className="font-medium text-[#007ACC] dark:text-[#40A9FF]">Academic Version Available:</span> Free for qualified researchers
                  </div>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button 
                    disabled 
                    className="relative bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-4 py-2.5 text-white opacity-80 font-medium rounded-md h-auto" 
                    aria-label="Get Started (Coming Soon)"
                  >
                    Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    <span className="absolute -top-1 -right-1 text-[10px] font-medium bg-white text-[#007ACC] px-1.5 py-0.5 rounded-full">
                      Soon
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50" aria-labelledby="features-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#007ACC] px-3 py-1 text-sm text-white">
                  Platform Features
                </div>
                <h2 id="features-heading" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  MindMeld: The Ultimate Human-AI Experiment Platform
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg mx-auto">
                  Born from MIT research and developed by Pairium AI, MindMeld offers everything researchers and organizations need to run sophisticated human-AI experiments.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Code className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Easy Configuration</CardTitle>
                  <CardDescription>
                    Create complex experiments in minutes with state machine design.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Layout className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Custom UI Builder</CardTitle>
                  <CardDescription>
                    Customize experiment interfaces with built-in UI components.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Network className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Experiment Flows</CardTitle>
                  <CardDescription>
                    Create complex flows with state-based conditional logic.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Users className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Prolific Integration</CardTitle>
                  <CardDescription>
                    Seamless integration with Prolific for participant recruitment.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Dices className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Experimental Randomization</CardTitle>
                  <CardDescription>
                    Randomize experimental variables on the individual and group level.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <ListCheck className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Built-in Surveys</CardTitle>
                  <CardDescription>
                    Create custom surveys with multiple choice, numerical, and text questions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Database className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Data Collection</CardTitle>
                  <CardDescription>
                    Configure detailed data collection with custom variables and state tracking.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <BarChart className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Data Export</CardTitle>
                  <CardDescription>
                    Export data in multiple formats and analyze results with your preferred tools.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <Bot className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">AI Agents</CardTitle>
                  <CardDescription>
                    Create and randomize AI agents with different models, resources, and actions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <MessageCircle className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Real-Time Chats</CardTitle>
                  <CardDescription>
                    Configure real-time chats across human participants and AI agents.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/10">
                    <RefreshCcw className="h-5 w-5 text-[#007ACC]" />
                  </div>
                  <CardTitle className="mt-4">Real-Time Collaboration</CardTitle>
                  <CardDescription>
                    Participants can collaborate in real-time with each other and AI agents.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full opacity-50">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-[#007ACC]/20">
                    <BrainCircuit className="h-5 w-5 text-[#007ACC]/70" />
                  </div>
                  <CardTitle className="mt-4">AI Simulation (Coming Soon)</CardTitle>
                  <CardDescription>
                    Simulate experiments with AI agents before deploying with human participants.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#007ACC] px-3 py-1 text-sm text-white">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  From Design to Results
                </h2>
                <p className="max-w-[800px] text-muted-foreground md:text-lg mx-auto">
                  Leverage Pairium AI's technology to run sophisticated experiments that uncover the power of personality pairing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007ACC] text-lg font-bold text-white">
                    1
                  </div>
                  <CardTitle className="mt-4">Design Your Experiment</CardTitle>
                  <CardDescription>
                    Easily configure your experiment with custom data, UI, and logic.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007ACC] text-lg font-bold text-white">
                    2
                  </div>
                  <CardTitle className="mt-4">Launch on Prolific</CardTitle>
                  <CardDescription>
                    Connect with Prolific to run your experiment with human participants.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#007ACC] text-lg font-bold text-white">
                    3
                  </div>
                  <CardTitle className="mt-4">Analyze Results</CardTitle>
                  <CardDescription>
                    Export your data and analyze it with your preferred tools.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Research & Development Section */}
        <section id="research-development" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#007ACC] px-3 py-1 text-sm text-white">
                  Research & Development
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built and Used by Leading Researchers
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  MindMeld is the research platform behind Pairium AI's foundational discoveries, developed and used by researchers at top academic institutions.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-center py-8 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-2 h-full">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-bold">MIT</span>
                  </div>
                  <a href="https://ide.mit.edu" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary text-center">
                    Massachusetts Institute of Technology
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 h-full">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-bold">JHU</span>
                  </div>
                  <a href="https://carey.jhu.edu" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary text-center">
                    Johns Hopkins University
                  </a>
                </div>
                <div className="flex flex-col items-center gap-2 h-full">
                  <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-xl font-bold">SZNS</span>
                  </div>
                  <a href="https://szns.solutions" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary text-center">
                    SZNS Solutions*
                  </a>
                </div>
              </div>
              <p className="text-xs text-muted-foreground/70 mt-2">* Special thanks to SZNS Solutions for their development support</p>
            </div>
          </div>
        </section>

        {/* Academic Access Section (New) */}
        <section id="academic-access" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#007ACC] px-3 py-1 text-sm text-white">
                  Academic Access
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Free for Academic Research
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  As part of Pairium AI's commitment to advancing AI research, we provide free access to the MindMeld platform for qualified academic researchers.
                </p>
              </div>
              <div className="mt-8 max-w-3xl mx-auto bg-muted rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Eligibility Requirements</h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 shrink-0 rounded-full bg-[#007ACC]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#007ACC]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Faculty, postdoctoral researchers, or PhD students at accredited academic institutions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 shrink-0 rounded-full bg-[#007ACC]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#007ACC]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Research project related to human-AI collaboration, personality pairing, or relevant fields</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 h-5 w-5 shrink-0 rounded-full bg-[#007ACC]/10 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#007ACC]"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span>Commitment to share research findings with the academic community</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#007ACC] px-3 py-1 text-sm text-white">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  For enterprise solutions or research collaborations with Pairium AI and the MindMeld platform, reach out to our team.
                </p>
              </div>
              <div className="flex gap-4 mt-4">
                <Button asChild className="bg-gradient-to-r from-[#007ACC] to-[#00AAFF] hover:from-[#0088CC] hover:to-[#00CCFF] text-white px-4 py-2.5 h-auto rounded-md font-medium">
                  <a href="mailto:info@pairium.ai">info@pairium.ai</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
