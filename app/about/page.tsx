import { Linkedin } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "About the Founders | Pairium AI",
  description: "Learn about Pairium AI's founders Sinan Aral and Harang Ju."
}

export default function AboutPage() {
  return (
    <main className="flex-1">
      
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-gradient-to-b from-blue-50 via-blue-100 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900/95" aria-labelledby="about-heading">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <h1 id="about-heading" className="text-4xl md:text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007ACC] to-[#40A9FF] dark:from-[#40A9FF] dark:to-[#69C0FF]">Founders</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Founder Bios Section */}
      <section className="w-full py-16 md:py-24 bg-white dark:bg-blue-950/80">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10 text-center">Founder Bios</h2>
            
            {/* Sinan Aral Bio */}
            <div id="sinan-aral" className="flex flex-col lg:flex-row gap-12 mb-16 items-start scroll-mt-24">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md mb-8">
                  <Image 
                    src="/sinan-aral.jpg" 
                    alt="Sinan Aral" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Sinan Aral</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.x.com/sinanaral" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <div className="h-4 w-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/sinan-aral-3964a7/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    Sinan Aral is a scientist, entrepreneur and investor, who has been ranked among the top 50 management scholars in the world and was rated the <a href="https://www.thinkers50.com/biographies/sinan-aral/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">World's "Top Digital Thinker" in 2021</a>. One of the youngest tenured faculty members in the history of the MIT Sloan School, Sinan is the <em>David Austin Chaired Professor of Management, Marketing, IT and Data Science</em> at MIT, and Director of the <a href="https://ide.mit.edu/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">MIT Initiative on the Digital Economy (IDE)</a>. He has been called "the Indiana Jones of Data Science" by Stern Strategy Group and "one of the first and most prescient scholars of social media" by former U.S. Undersecretary of State Richard Stengle.
                  </p>
                  
                  <p>
                    Sinan is a seasoned entrepreneur, having built and sold two startups while getting tenure at MIT. He was the Chief Scientist at <em>SocialAmp</em>, one of the first social commerce analytics companies (until its sale to Merkle in 2012) and at <em>Humin</em>, a social platform that the Wall Street Journal called the first "Social Operating System" (until its sale to Tinder in 2016). He is also a co-founder and general partner of two venture capital firms: <a href="https://www.manifestgrowth.com/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Manifest Capital</a> (a Series A firm investing in applied machine learning for marketing automation and enterprise performance) and <a href="https://milemark.capital/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Milemark Capital</a> (a Seed and Pre-Seed fund investing in applied AI). He has served on the Advisory Boards of the <a href="https://www.turing.ac.uk/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Alan Turing Institute (the British National Institute for Data Science in London)</a>, the <a href="https://www.uib.no/en/infomedia/130829/mediafutures-research-centre-responsible-media-technology-innovation" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Center for Responsible Media Technology and Innovation in Norway</a>, and <a href="https://www.c6bank.com.br/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">C6 Bank</a>, the first all-digital bank of Brazil. He advises Fortune 100 companies, international organizations and heads of state on AI and digital strategy.
                  </p>
                  
                  <p>
                    Sinan's research and teaching has earned several awards including the Microsoft Faculty Fellowship, the PopTech Science Fellowship, an NSF CAREER Award, a Fulbright Scholarship, the Jamieson Award for Teaching Excellence (MIT Sloan's highest teaching honor), and the Thinkers50 Digital Thinking Award. In 2018, he became the youngest ever recipient of the <a href="https://en.wikipedia.org/wiki/Herbert_Simon_Award_(Rajk_College)" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Herbert Simon Award</a> of Rajk László College in Budapest, Hungary. In the same year, his article on <a href="https://science.sciencemag.org/content/359/6380/1146" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">the spread of false news online</a> was published on the cover of <em>Science</em> and became the second most influential scientific publication of the year in any discipline, and his <a href="https://www.ted.com/talks/sinan_aral_how_we_can_protect_truth_in_the_age_of_misinformation" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">TED talk on "Protecting Truth in the Age of Misinformation,"</a> which received over two million views in nine months, set the stage for today's modern approaches to the misinformation crisis. His first book, <a href="https://www.penguinrandomhouse.com/books/570128/the-hype-machine-by-sinan-aral/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">The Hype Machine</a>, which <em>New York Magazine</em> called "prophetic," was named a 2020 Best Book on Artificial Intelligence by WIRED.
                  </p>
                  
                  <p>
                    Sinan earned his PhD at MIT and his Master's degrees at the LSE and Harvard. You can find him on X <a href="https://www.x.com/sinanaral" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">@sinanaral</a> and Instagram <a href="https://www.instagram.com/professorsinan" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">@professorsinan</a>.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Harang Ju Bio */}
            <div id="harang-ju" className="flex flex-col lg:flex-row gap-12 items-start scroll-mt-24">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md mb-8">
                  <Image 
                    src="/harang-ju.jpg" 
                    alt="Harang Ju" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Harang Ju</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.x.com/harangju/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <div className="h-4 w-4">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
                          <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
                        </svg>
                      </div>
                    </a>
                    <a href="https://www.linkedin.com/in/harangju/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    Harang Ju is an assistant professor in the <a href="https://carey.jhu.edu/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Johns Hopkins Carey Business School</a> and former post-doctoral fellow at MIT. He studies AI agents and how they help people work. Harang's <a href="https://arxiv.org/abs/2503.18238" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">current work</a> uses large field and lab experiments and observational studies. His research appears in Nature Neuroscience and other peer-reviewed journals. He is also an advisor at <a href="https://www.linkedin.com/company/mokuhq/" className="text-[#007ACC] dark:text-[#40A9FF] hover:underline">Moku</a>, an AI and web3 gaming company. Harang holds degrees from the University of Pennsylvania in neuroscience (PhD) and from the University of Virginia in computer science (BS) and cognitive science (BA).
                  </p>
                </div>
              </div>
            </div>

            {/* James Kupernik Bio */}
            <div id="james-kupernik" className="flex flex-col lg:flex-row gap-12 mb-16 items-start scroll-mt-24">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md mb-8">
                  <Image 
                    src="/james-kupernik.jpg" 
                    alt="James Kupernik" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">James Kupernik</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.linkedin.com/in/jameskupernik/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    James is an experienced technology executive with a track record of leading high-performing engineering teams in fast-growing MarTech companies. Prior to his role as CTO at Airship, he was CTO at Vidmob, where he helped scale the platform and built critical infrastructure supporting creative data and media workflows for global brands. James brings deep expertise in GenAI, composable architectures, and serverless-first development, with a focus on aligning technical strategy to business outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Josh Attenberg Bio */}
            <div id="josh-attenberg" className="flex flex-col lg:flex-row gap-12 mb-16 items-start scroll-mt-24">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md mb-8">
                  <Image 
                    src="/josh-attenberg.jpg" 
                    alt="Josh Attenberg" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Josh Attenberg</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.linkedin.com/in/joshattenberg/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    Josh is a seasoned technology leader and data scientist with a passion for applying machine learning and AI to solve real-world problems. With a Ph.D. in machine learning and over 15 years of experience spanning a variety of startups and enterprise tech, Josh has led data and AI initiatives at companies like Etsy, Compass, Integral Ad Science and VSCO, and has a proven track record of delivering business value using AI.
                  </p>
                </div>
              </div>
            </div>

            {/* Michael Zhao Bio */}
            <div id="michael-zhao" className="flex flex-col lg:flex-row gap-12 items-start scroll-mt-24">
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-white dark:border-slate-700 bg-slate-100 dark:bg-slate-900 shadow-md mb-8">
                  <Image 
                    src="/michael-zhao.jpg" 
                    alt="Michael Zhao" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-2/3">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mr-4">Michael Zhao</h3>
                  <div className="flex space-x-2">
                    <a href="https://www.linkedin.com/in/mfzhao/" target="_blank" rel="noopener noreferrer" className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-600 dark:text-slate-300 transition-colors hover:bg-[#007ACC] hover:text-white">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <div className="text-slate-700 dark:text-slate-300 space-y-4">
                  <p>
                    Michael is an Applied Scientist at the Columbia–Dream Sports AI Innovation Center, where he turns state-of-the-art research in machine learning and causal inference into practical advances for sports technology. Earlier in his career he refined Netflix's core recommendation engine and built next-generation upper-funnel measurement tools for Amazon Advertising. Michael holds a Ph.D. from MIT, and his research has been published in Science Advances and the Proceedings of the National Academy of Sciences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 