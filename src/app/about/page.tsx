import { Badge } from "@/components/ui/badge"
import { Brain, Target, Users, Zap, BookOpen } from "lucide-react"

const principles = [
  {
    icon: Brain,
    title: "Evidence-Based Everything",
    description: "Every claim backed by research. This creates trust, accelerates learning, and keeps discussions grounded in science rather than speculation.",
    example:
      "Instead of 'we'll crack the brain code soon,' we ask 'Which imaging techniques work best?' This leads to actual progress.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description: "Share code, discuss papers, learn together. This breaks down silos, speeds up research, and creates unexpected connections.",
    example: "Journal clubs, shared repos, mentorship—knowledge flows across disciplines and career stages.",
  },
  {
    icon: Zap,
    title: "Zero Hype Policy",
    description: "We focus on what's actually happening in research. This saves time, prevents false starts, and identifies genuinely promising directions.",
    example: "No 'mind uploading next year' claims. Honest assessments help set realistic expectations.",
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
            About <span className="text-primary text-purple-500">Connectomics</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We're building the most rigorous and welcoming community for anyone interested in understanding the brain at
            the synapse level.
          </p>
        </div>

        {/* Origin Story */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/50 shadow-xl">
              <h2 className="text-2xl font-bold mb-6 text-center">How it all began</h2>
              
              {/* TL;DR */}
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-6 mb-6 border border-purple-400/30 shadow-lg">
                <h3 className="font-bold text-lg text-purple-300 mb-3 flex items-center">
                  <span className="bg-purple-500/20 rounded-full px-3 py-1 text-sm mr-3">TL;DR</span>
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  Brain mapping researchers were scattered across platforms. We're building <span className="text-yellow-300 font-semibold">one place</span> to collaborate on the technical challenges of brain <span className="text-yellow-300 font-semibold">connectomics</span>—working toward a practical roadmap for comprehensive brain scanning and understanding consciousness.
                </p>
              </div>

              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="leading-relaxed mb-4 text-justify">
                  Like many good ideas, this one started with frustration. Researchers working on brain mapping were having important conversations everywhere except with each other—neuroscientists publishing on synaptic connectivity, engineers building better imaging tools, computer scientists developing reconstruction algorithms—all working in parallel but not together.
                </p>
                <p className="leading-relaxed mb-4 text-justify">
                  A handful of people from different labs and companies found themselves asking the same questions: What resolution do we actually need for a useful connectome? Which reconstruction methods work best with noisy data? How do we validate our results? Instead of hunting through dozens of papers and conference proceedings for answers, we decided to create a space where these conversations could happen directly.
                </p>
                <p className="leading-relaxed text-justify">
                  What started as a small Discord server for sharing papers and code is growing into a platform where graduate students, postdocs, industry researchers, and professors can collaborate on both fundamental questions and practical implementation details. Our mission is ambitious: to tackle the most challenging goal in science—mapping and understanding the complete neural circuitry of the brain. We discuss cutting-edge research, debate breakthrough ideas, and connect with like-minded individuals who share our vision. We're actively working toward a practical roadmap for comprehensive brain scanning, determining what data we need to capture, which algorithms will decode neural networks most effectively, how this will impact our understanding of consciousness, and establishing rigorous success criteria and validation metrics for connectome projects. We're not trying to solve consciousness tomorrow—we're building the infrastructure for the conversations that will get us there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Us Different */}
        <section className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why you'll love it here</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another science community. Here's what makes our corner of the internet special.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/40 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <principle.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                      {principle.description}
                    </p>
                    <div className="bg-gray-700/50 rounded-xl p-6 border border-gray-600/50 w-full h-32 flex items-center">
                      <p className="text-sm text-gray-300 italic leading-relaxed">{principle.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
              We are real people doing real science, together
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
