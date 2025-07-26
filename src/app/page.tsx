import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Users, Zap, Brain } from "lucide-react"
const highlights = [
  {
    icon: "🧠",
    title: "Deep-tech EM/ExM discussions",
    description: "Dive into electron microscopy pipelines and expansion microscopy techniques",
    example: '"Has anyone tried the new automated sectioning protocol from the latest Nature Methods paper?"',
  },
  {
    icon: "🔬",
    title: "Open dataset exploration",
    description: "Explore MICrONS, FlyWire, and other cutting-edge connectome datasets",
    example: '"I found some interesting patterns in the FlyWire hemibrain data - anyone want to collaborate?"',
  },
  {
    icon: "💻",
    title: "Code-sharing & journal clubs",
    description: "Share implementations, review papers, and learn together",
    example: '"Just pushed my connectome analysis pipeline to GitHub - feedback welcome!"',
  },
  {
    icon: "🎯",
    title: "Citation-backed debates",
    description: "Rigorous discussions about consciousness, mind uploading, and neural computation",
    example: '"Is high-fidelity structural preservation sufficient for personal identity transfer?"',
  },
]

const stats = [
  { number: "500+", label: "Active Members" },
  { number: "50+", label: "Papers Discussed Monthly" },
  { number: "24/7", label: "Active Discussions" },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <div className="max-w-4xl mx-auto w-full">
            <div className="flex items-center justify-center mb-6  w-full ">
              <Badge variant="secondary" className="text-sm px-4 py-2 border border-primary/20 rounded-full p-2 bg-primary/5">
                <Sparkles className="w-4 h-4 mr-2" />
                Zero hype, 100% citations
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-transparent text-purple-500">
                Connectomics
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Where neuroscientists, engineers, and curious minds explore
              <span className="text-primary font-semibold"> synapse-level brain mapping</span> and the
              <span className="text-primary font-semibold"> future of consciousness</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button asChild size="lg" className="text-lg px-8 py-4 group purpurentiu" variant= {"purpurentiu"}>
                <Link href="/join" className="text-purple-500">
                  Join Our Discord  
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-md mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We're About */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Welcome to the future of <span className="text-primary">brain science</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a community of researchers, engineers, and enthusiasts pushing the boundaries of neuroscience. From
              electron microscopy to mind uploading debates, we dive deep into the science that matters.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {highlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="flex flex-col lg:flex-row items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <div className="text-4xl lg:text-5xl flex-shrink-0">{highlight.icon}</div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h3>
                    <p className="text-muted-foreground">{highlight.description}</p>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary/30">
                      <p className="text-sm italic text-muted-foreground">{highlight.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Vibe */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why our community is <span className="text-primary">different</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We're not just another science Discord. We're building something special.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Rigorous Science</h3>
                <p className="text-muted-foreground">
                  Every discussion is grounded in peer-reviewed research. No speculation, just facts.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Expert Community</h3>
                <p className="text-muted-foreground">
                  Connect with PhD researchers, industry engineers, and passionate learners.
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Active & Welcoming</h3>
                <p className="text-muted-foreground">
                  Daily discussions, weekly journal clubs, and a community that actually helps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to join the conversation?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're a seasoned researcher or just curious about the brain, there's a place for you in our
              community.
            </p>
            <Button asChild size="lg" className="text-lg px-8 py-4 group" variant={"purpurentiu"}>
              <Link href="/join">
                Join Connectomics
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Free forever • No spam • Real science</p>
          </div>
        </div>
      </section>
    </div>
  )
}
