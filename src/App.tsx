import { useEffect, type JSX, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart,
  Bot,
  BrainCircuit,
  Code,
  Database,
  Dices,
  Layout,
  Linkedin,
  ListCheck,
  MessageCircle,
  Network,
  RefreshCcw,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Link, Outlet, RouterProvider, createRoute, createRootRoute, createRouter, useRouterState } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PrivacyPage } from "@/pages/privacy";
import { TermsPage } from "@/pages/terms";
import harangJuImage from "@/assets/harang-ju.jpg";
import jamesKupernikImage from "@/assets/james-kupernik.jpg";
import joshAttenbergImage from "@/assets/josh-attenberg.jpg";
import michaelZhaoImage from "@/assets/michael-zhao.jpg";
import sinanAralImage from "@/assets/sinan-aral.jpg";

const isDevEnvironment =
  typeof import.meta !== "undefined" &&
  Boolean((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV);

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type FounderBio = {
  id: string;
  name: string;
  role: string;
  image: string;
  links: { linkedin?: string; x?: string };
  paragraphs: ReactNode[];
};

type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string;
  blurb: string;
  linkedin?: string;
};

const primaryCtaClass = cn(
  "inline-flex items-center justify-center rounded-md bg-gradient-to-r from-[#007ACC] to-[#00AAFF] px-6 py-3 text-base font-semibold text-white shadow-sm transition-all hover:from-[#0088CC] hover:to-[#00CCFF]",
);

const pairitFeatures: Feature[] = [
  { icon: Code, title: "State Machine Design", description: "Configure complex experiments with clear, visual flows." },
  { icon: Layout, title: "Custom UI Builder", description: "Design participant interfaces with drag-and-drop precision." },
  { icon: Network, title: "Branching Logic", description: "Shape experiment paths with conditional states and triggers." },
  { icon: Users, title: "Participant Management", description: "Recruit, randomize, and coordinate cohorts with ease." },
  { icon: Dices, title: "Robust Randomization", description: "Randomize variables at individual or group levels." },
  { icon: ListCheck, title: "Survey Toolkit", description: "Collect structured responses with built-in survey types." },
  { icon: Database, title: "Detailed Data Capture", description: "Track every interaction with structured event logging." },
  { icon: BarChart, title: "Seamless Export", description: "Export results in common formats for downstream analysis." },
  { icon: Bot, title: "Configurable Agents", description: "Spin up AI teammates with distinct models and behaviors." },
  { icon: MessageCircle, title: "Real-time Chat", description: "Enable human-to-human and human-to-AI collaboration." },
  { icon: RefreshCcw, title: "Live Collaboration", description: "Coordinate cross-participant workflows as they unfold." },
  { icon: BrainCircuit, title: "AI Simulation", description: "Run agent-only dry-runs before inviting live participants." },
];

const pairitSteps = [
  {
    step: "01",
    title: "Design",
    description: "Model personalized experiments with reusable states, logic, and data schemas.",
  },
  {
    step: "02",
    title: "Launch",
    description: "Recruit participants and match AI teammates through integrated Prolific support.",
  },
  {
    step: "03",
    title: "Measure",
    description: "Export structured datasets that surface personalization insights for analysis.",
  },
];

const researchPartners = [
  { label: "MIT", description: "Massachusetts Institute of Technology", href: "https://ide.mit.edu" },
  { label: "JHU", description: "Johns Hopkins University", href: "https://carey.jhu.edu" },
  { label: "SZNS", description: "SZNS Solutions", href: "https://szns.solutions" },
];

const founderBios: FounderBio[] = [
  {
    id: "sinan-aral",
    name: "Sinan Aral",
    role: "Co-founder and CEO",
    image: sinanAralImage,
    links: {
      x: "https://www.x.com/sinanaral",
      linkedin: "https://www.linkedin.com/in/sinan-aral-3964a7/",
    },
    paragraphs: [
      (
        <p key="sinan-1">
          Sinan Aral is a scientist, entrepreneur, and investor ranked among the top 50 management scholars in the world and named the World&apos;s Top Digital
          Thinker in 2021. He is the David Austin Chaired Professor of Management, Marketing, IT, and Data Science at MIT, where he directs the
          <a className="mx-1 text-[#007ACC] dark:text-[#40A9FF] hover:underline" href="https://ide.mit.edu">
            MIT Initiative on the Digital Economy
          </a>
          and has been called “the Indiana Jones of Data Science.”
        </p>
      ),
      (
        <p key="sinan-2">
          A seasoned entrepreneur, Sinan helped build SocialAmp and Humin, both acquired by global leaders, and co-founded venture funds Manifest Capital and
          Milemark Capital. He advises Fortune 100 companies and governments on AI and digital strategy, bringing academic rigor to high-impact, real-world
          transformations.
        </p>
      ),
      (
        <p key="sinan-3">
          His research has earned the Microsoft Faculty Fellowship, NSF CAREER Award, and the Herbert Simon Award. His work on misinformation in
          <em className="mx-1">Science</em> became one of the most cited papers of the year, and his TED talk on protecting truth has reached millions. He holds a PhD from MIT and
          graduate degrees from the London School of Economics and Harvard University.
        </p>
      ),
    ],
  },
  {
    id: "harang-ju",
    name: "Harang Ju",
    role: "Co-founder and COO",
    image: harangJuImage,
    links: {
      x: "https://www.x.com/harangju/",
      linkedin: "https://www.linkedin.com/in/harangju/",
    },
    paragraphs: [
      (
        <p key="harang-1">
          Harang Ju is an assistant professor at the Johns Hopkins Carey Business School and a former MIT postdoctoral fellow. He studies how AI agents help
          people work better, running large-scale experiments and field deployments that explore human-AI teaming.
        </p>
      ),
      (
        <p key="harang-2">
          His research, published in journals such as <em className="mx-1">Nature Neuroscience</em>, blends causal inference with experimental design. Harang advises companies like
          <a className="mx-1 text-[#007ACC] dark:text-[#40A9FF] hover:underline" href="https://www.linkedin.com/company/mokuhq/">
            Moku
          </a>
          and holds a PhD in Neuroscience from the University of Pennsylvania along with dual degrees in computer and cognitive science from the University of Virginia.
        </p>
      ),
    ],
  },
];

const teamMembers: TeamMember[] = [
  {
    id: "james-kupernik",
    name: "James Kupernik",
    role: "Technical Staff",
    image: jamesKupernikImage,
    blurb:
      "Technology executive and former CTO at Airship and Vidmob, leading high-performing engineering teams with deep expertise in GenAI and serverless development.",
    linkedin: "https://www.linkedin.com/in/jameskupernik/",
  },
  {
    id: "josh-attenberg",
    name: "Josh Attenberg",
    role: "Technical Staff",
    image: joshAttenbergImage,
    blurb:
      "Machine learning leader with 15+ years of experience applying AI at Etsy, Compass, Integral Ad Science, and VSCO, backed by a PhD in ML.",
    linkedin: "https://www.linkedin.com/in/joshattenberg/",
  },
  {
    id: "michael-zhao",
    name: "Michael Zhao",
    role: "Technical Staff",
    image: michaelZhaoImage,
    blurb:
      "Applied scientist at the Columbia–Dream Sports AI Innovation Center, formerly advancing recommendation systems at Netflix and measurement at Amazon.",
    linkedin: "https://www.linkedin.com/in/mfzhao/",
  },
];

function scrollToHash(hash: string | null) {
  if (typeof window === "undefined" || !hash) {
    return;
  }

  const id = hash.replace(/^#/, "");
  if (!id) {
    return;
  }

  const run = () => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (document.readyState === "complete") {
    requestAnimationFrame(run);
  } else {
    window.addEventListener("load", () => requestAnimationFrame(run), { once: true });
  }
}

function RootLayout() {
  const { location } = useRouterState();

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (location.hash) {
      scrollToHash(`#${location.hash}`);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.hash, location.pathname, location.search]);

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
      <Nav />
      <main id="hero" className="flex flex-col">
        <Outlet />
      </main>
      <Footer />
      {isDevEnvironment ? <TanStackRouterDevtools position="bottom-right" /> : null}
    </div>
  );
}

function HomePage() {
  return (
    <>
      <HeroSection />
      <ComingSoonSection />
    </>
  );
}

function AboutPage() {
  return (
    <>
      <AboutSection />
      <FoundersSection />
      <TeamSection />
    </>
  );
}

function NotFoundPage() {
  return (
    <section className="flex flex-1 items-center justify-center bg-blue-50 py-32 dark:bg-slate-900">
      <div className="container mx-auto flex max-w-xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-800 dark:bg-blue-900 dark:text-blue-100">
          404
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="text-base text-slate-600 dark:text-slate-300">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Use the navigation above or return home.
        </p>
        <Link to="/" className={primaryCtaClass}>
          Go to homepage
        </Link>
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section
      className="relative flex items-center overflow-hidden bg-gradient-to-b from-blue-50 via-blue-100 to-white py-24 sm:py-32 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-grid-slate-100/60 dark:bg-grid-white/[0.04]" />
      <div className="container relative mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center sm:px-6">
        <div className="space-y-4">
          <h1 id="hero-heading" className="text-4xl font-bold tracking-tight sm:text-4xl">
            Pairium <span className="bg-gradient-to-r from-[#007ACC] to-[#40A9FF] bg-clip-text text-transparent">AI</span>
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-200">
            AI personalization that makes you better.
          </p>
        </div>
        <Link to="/" hash="coming-soon" className={primaryCtaClass}>
          Learn more
          <ArrowRight className="ml-2 size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

function ComingSoonSection() {
  return (
    <section id="coming-soon" className="flex items-center bg-white py-24 sm:py-32 dark:bg-slate-950" aria-labelledby="coming-soon-heading">
      <div className="container mx-auto flex max-w-4xl flex-col items-center gap-8 px-4 text-center sm:px-6">
        <span className="inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
          Coming Soon
        </span>
        <h2 id="coming-soon-heading" className="text-4xl font-bold tracking-tight sm:text-4xl">
          The Pairium personalization suite
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          We are building a personalized collaboration tool that personalizes AI teammates to you.
        </p>
        <ul className="grid w-full gap-4 text-left sm:grid-cols-2">
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[#007ACC]/10 text-[#007ACC] dark:bg-[#40A9FF]/20 dark:text-[#40A9FF]">✓</span>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Personality pairing engine</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Agent behaviors adapt across tools using persistent user profiles.</p>
            </div>
          </li>
          <li className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300">
            <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[#007ACC]/10 text-[#007ACC] dark:bg-[#40A9FF]/20 dark:text-[#40A9FF]">✓</span>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">Research-grade experimentation</h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Pairit delivers causal insights with state machines, branching logic, and audits.</p>
            </div>
          </li>
        </ul>
        <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/pairit" className={primaryCtaClass}>
            Pairit Experiment Platform
          </Link>
          <a
            href="mailto:info@pairium.ai"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 px-6 py-3 text-base font-semibold text-slate-700 transition hover:border-[#007ACC] hover:text-[#007ACC] dark:border-slate-700 dark:text-slate-300 dark:hover:border-[#40A9FF] dark:hover:text-[#40A9FF]"
          >
            Contact us
            <ArrowRight className="ml-2 size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="bg-blue-50 py-20 dark:bg-slate-900" aria-labelledby="about-heading">
      <div className="container mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            About Us
          </span>
          <h2 id="about-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            About <span className="text-[#007ACC] dark:text-[#40A9FF]">Pairium AI</span>
          </h2>
        </div>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              Built on proprietary MIT research around “personality pairing” between AI agents and human teammates, Pairium AI personalizes human-AI collaboration to
              maximize productivity across complex workflows. That research powered Pairit, a commercial grade platform validated in a large scale randomized controlled trial
              that delivered full marketing campaigns with AI teammates.
            </p>
            <p>
              Pairit anchors that mission as a fully configurable platform where humans collaborate with AI agents that mirror human workflows. The causal gains we observe are
              documented in
              <a className="mx-1 text-[#007ACC] dark:text-[#40A9FF] hover:underline" href="https://arxiv.org/abs/2503.18238" target="_blank" rel="noreferrer">
                our research paper
              </a>
              detailing how personality pairing unlocks sustained performance improvements. We now extend the same personalization into production through a managed MCP server
              so every teammate works with an aligned agent.
            </p>
            <p>
              Field experiments, randomized controlled trials, and enterprise deployments continue to uncover meaningful, sometimes counterintuitive, effects of pairing AI
              agents and human experts. Those insights shape both Pairit today and the Pairium MCP server that follows.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-[#007ACC] to-[#00AAFF] opacity-20 blur-3xl" />
            <div className="relative grid h-full grid-cols-2 gap-4 rounded-xl border border-slate-200 bg-white p-8 shadow-lg dark:border-blue-900/60 dark:bg-blue-950/50">
              {[BrainCircuit, Users, BarChart, Network].map((Icon, index) => (
                <div key={Icon.displayName ?? index} className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900">
                  <Icon className="size-10 text-[#007ACC] dark:text-[#40A9FF]" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PairitPage() {
  return (
    <section id="pairit" className="bg-white py-20 dark:bg-blue-950/80" aria-labelledby="pairit-heading">
      <div className="container mx-auto flex max-w-6xl flex-col gap-24 px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex rounded-full bg-[#007ACC] px-3 py-1 text-sm font-medium text-white">Personalized Platforms</span>
          <h2 id="pairit-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Personalize every collaboration with Pairium AI
          </h2>
          <p className="max-w-3xl text-lg text-slate-600 dark:text-slate-300">
            Pairium AI blends research-driven personalization with deployable tools. Pairit gives researchers and operators control today, while our MCP server extends the
            same personalization into production agent stacks.
          </p>
          <div className="mt-12 grid gap-8 rounded-2xl border border-slate-200 bg-white/80 p-8 shadow-sm dark:border-blue-900/50 dark:bg-blue-950/40 md:grid-cols-3">
            {pairitSteps.map((step) => (
              <div key={step.title} className="flex flex-col items-center gap-4 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-[#007ACC] text-lg font-semibold text-white">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {pairitFeatures.map((feature) => (
            <Card key={feature.title} className="border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/70">
              <CardHeader>
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-[#007ACC]/10 dark:bg-[#40A9FF]/20">
                  <feature.icon className="size-5 text-[#007ACC] dark:text-[#40A9FF]" aria-hidden="true" />
                </div>
                <CardTitle className="mt-4 text-lg">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 p-10 shadow-md dark:border-blue-900/50 dark:bg-blue-950/40">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <span className="inline-flex rounded-full bg-[#007ACC] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Research & Development
              </span>
              <h3 className="text-2xl font-semibold">Built with leading research partners</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Pairit powers experiments across academic institutions and enterprises exploring the future of human-AI collaboration.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-3">
              {researchPartners.map((partner) => (
                <a
                  key={partner.label}
                  href={partner.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 p-4 text-center transition hover:border-[#007ACC] hover:text-[#007ACC] dark:border-slate-800 dark:bg-slate-900/70 dark:hover:border-[#40A9FF] dark:hover:text-[#40A9FF]"
                >
                  <span className="text-xl font-bold">{partner.label}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">{partner.description}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-blue-50/80 p-10 dark:border-blue-900/60 dark:bg-slate-900" aria-labelledby="academic-access-heading">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex rounded-full bg-[#007ACC] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                Academic Access
              </span>
              <h3 id="academic-access-heading" className="mt-4 text-2xl font-semibold">Free for qualified researchers</h3>
              <p className="mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-300">
                Pairium AI offers complimentary access to Pairit for faculty, postdoctoral researchers, and PhD students conducting research on human-AI collaboration,
                personality pairing, or related topics.
              </p>
            </div>
            <a href="mailto:info@pairium.ai" className={primaryCtaClass}>
              Request access
            </a>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[#007ACC]/10 text-[#007ACC] dark:bg-[#40A9FF]/20 dark:text-[#40A9FF]">
                ✓
              </span>
              Faculty, postdoctoral researchers, or PhD students at accredited institutions
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[#007ACC]/10 text-[#007ACC] dark:bg-[#40A9FF]/20 dark:text-[#40A9FF]">
                ✓
              </span>
              Research focused on human-AI collaboration, personalization, or adjacent domains
            </li>
            <li className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
              <span className="mt-1 inline-flex size-6 items-center justify-center rounded-full bg-[#007ACC]/10 text-[#007ACC] dark:bg-[#40A9FF]/20 dark:text-[#40A9FF]">
                ✓
              </span>
              Willingness to share non-confidential findings with the broader research community
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function FoundersSection() {
  return (
    <section id="about-founders" className="bg-blue-50 py-20 dark:bg-slate-900" aria-labelledby="founders-heading">
      <div className="container mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            Our Founders
          </span>
          <h2 id="founders-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            The team behind the research
          </h2>
        </div>

        <div className="space-y-16">
          {founderBios.map((founder) => (
            <article key={founder.id} id={founder.id} className="flex flex-col gap-10 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
              <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                <div className="relative size-48 shrink-0 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-slate-800">
                  <img src={founder.image} alt={founder.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 space-y-4 text-center md:text-left">
                  <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{founder.name}</h3>
                      <p className="text-[#007ACC] dark:text-[#40A9FF]">{founder.role}</p>
                    </div>
                    <div className="flex gap-2">
                      {founder.links.x && (
                        <a
                          href={founder.links.x}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#007ACC] hover:text-[#007ACC] dark:border-slate-700 dark:text-slate-300 dark:hover:border-[#40A9FF] dark:hover:text-[#40A9FF]"
                          aria-label={`${founder.name} on X`}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4l11.733 16h4.267l-11.733-16z" />
                            <path d="M4 20l6.768-6.768m2.46-2.46 6.772-6.772" />
                          </svg>
                        </a>
                      )}
                      {founder.links.linkedin && (
                        <a
                          href={founder.links.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex size-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[#007ACC] hover:text-[#007ACC] dark:border-slate-700 dark:text-slate-300 dark:hover:border-[#40A9FF] dark:hover:text-[#40A9FF]"
                          aria-label={`${founder.name} on LinkedIn`}
                        >
                          <Linkedin className="size-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="space-y-4 text-base text-slate-700 dark:text-slate-300">
                    {founder.paragraphs.map((paragraph, index) => (
                      <div key={index}>{paragraph}</div>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="bg-white py-20 dark:bg-blue-950/80" aria-labelledby="team-heading">
      <div className="container mx-auto flex max-w-6xl flex-col gap-14 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <span className="mb-4 inline-flex rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-100">
            Our Team
          </span>
          <h2 id="team-heading" className="text-3xl font-bold tracking-tight sm:text-4xl">
            Leadership and collaborators
          </h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {teamMembers.map((member) => (
            <article key={member.id} className="group flex flex-col gap-6 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70">
              <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-white shadow-md dark:border-slate-800">
                <img src={member.image} alt={member.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-[#007ACC] dark:text-[#40A9FF]">{member.role}</p>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-300">{member.blurb}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition hover:border-[#007ACC] hover:text-[#007ACC] dark:border-slate-700 dark:text-slate-300 dark:hover:border-[#40A9FF] dark:hover:text-[#40A9FF]"
                >
                  <Linkedin className="size-4" />
                  Connect on LinkedIn
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const pairitRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/pairit",
  component: PairitPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const routeTree = rootRoute.addChildren([homeRoute, aboutRoute, pairitRoute, privacyRoute, termsRoute]);

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
