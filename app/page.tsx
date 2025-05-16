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
        <section className="w-full py-16 md:py-32 lg:py-40 xl:py-56" aria-labelledby="hero-heading">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="flex flex-col justify-center space-y-6 w-full">
                <div className="space-y-8">
                  <h1 id="hero-heading" className="w-full text-4xl font-bold tracking-tighter text-5xl">
                    Create Online Human-AI Experiments in Minutes
                  </h1>
                  <p className="text-muted-foreground md:text-xl max-w-2xl mx-auto">
                    MindMeld is a powerful platform for designing and running interactive experiments between humans and AI agents.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                  <Button size="lg" disabled className="relative" aria-label="Get Started (Coming Soon)">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                    <span className="absolute -top-1 -right-1 text-[10px] font-medium bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full">
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
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Features
                </div>
                <h2 id="features-heading" className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Run Your Human-AI Experiments
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Code className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Easy Configuration</CardTitle>
                  <CardDescription>
                    Create complex experiments in minutes with state machine design.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Layout className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Custom UI Builder</CardTitle>
                  <CardDescription>
                    Customize experiment interfaces with built-in UI components.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Network className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Experiment Flows</CardTitle>
                  <CardDescription>
                    Create complex flows with state-based conditional logic.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Prolific Integration</CardTitle>
                  <CardDescription>
                    Seamless integration with Prolific for participant recruitment.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Dices className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Experimental Randomization</CardTitle>
                  <CardDescription>
                    Randomize experimental variables on the individual and group level.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <ListCheck className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Built-in Surveys</CardTitle>
                  <CardDescription>
                    Create custom surveys with multiple choice, numerical, and text questions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Database className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Data Collection</CardTitle>
                  <CardDescription>
                    Configure detailed data collection with custom variables and state tracking.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <BarChart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Data Export</CardTitle>
                  <CardDescription>
                    Export data in multiple formats and analyze results with your preferred tools.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <Bot className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">AI Agents</CardTitle>
                  <CardDescription>
                    Create and randomize AI agents with different models, resources, and actions.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Real-Time Chats</CardTitle>
                  <CardDescription>
                    Configure real-time chats across human participants and AI agents.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10">
                    <RefreshCcw className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Real-Time Collaboration</CardTitle>
                  <CardDescription>
                    Participants can collaborate in real-time with each other and AI agents.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="h-full opacity-50">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/5">
                    <BrainCircuit className="h-5 w-5 text-primary/70" />
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
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  From Design to Results
                </h2>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
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
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Research & Development
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Built and Used by Leading Researchers
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  MindMeld is a platform developed and used by researchers at top academic institutions.
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

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Get in Touch
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Have questions or want to collaborate? Feel free to reach out.
                </p>
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="icon">
                  <a href="https://x.com/harangju" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href="https://www.linkedin.com/in/harangju" target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
