import { Badge } from "@/components/ui/badge"
import { Brain, Target, Users, Zap, BookOpen } from "lucide-react"

const principles = [
  {
    icon: Brain,
    title: "Evidence-Based Everything",
    description: "Every claim backed by peer-reviewed research. We cite our sources and expect you to do the same.",
    example:
      "Instead of 'AI will solve consciousness,' we ask 'What does the latest IIT research tell us about phi complexity?'",
  },
  {
    icon: Target,
    title: "Synapse-Level Focus",
    description: "We go deep into the technical details that matter for understanding neural computation.",
    example: "From EM reconstruction algorithms to synaptic weight distributions in connectome data.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Share code, discuss papers, and learn from experts across neuroscience and engineering.",
    example: "Weekly journal clubs, shared GitHub repos, and mentorship from industry professionals.",
  },
  {
    icon: Zap,
    title: "Zero Hype Policy",
    description: "We cut through the noise to focus on what's actually happening in brain mapping research.",
    example: "No 'mind uploading next year' claims. Just honest discussion about current capabilities and limitations.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="text-primary">Connectomics</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building the most rigorous and welcoming community for anyone interested in understanding the brain at
            the synapse level.
          </p>
        </div>

        {/* Mission */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <strong>Connectomics</strong> exists to bridge the gap between cutting-edge neuroscience research and
                the curious minds who want to understand it. We're a space where PhD researchers share insights with
                undergraduate students, where industry engineers collaborate with academic labs, and where anyone with
                genuine curiosity can learn about the most complex object in the known universe: the brain.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What makes us different</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another science Discord. Here's what sets us apart.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="flex flex-col lg:flex-row items-start gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <principle.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                    <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary/30">
                      <p className="text-sm italic text-muted-foreground">{principle.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-20 bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Our growing community</h2>
            <p className="text-lg text-muted-foreground">Real people doing real science, together.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Papers/Month</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Discussions</div>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section className="text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Looking ahead</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We believe that understanding the brain is one of humanity's greatest challenges. By bringing together
              diverse perspectives and maintaining the highest standards of scientific rigor, we're contributing to a
              future where the mysteries of consciousness and neural computation are finally within reach.
            </p>
            <p className="text-lg font-semibold text-primary">
              The brain is complex. The community doesn't have to be.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
