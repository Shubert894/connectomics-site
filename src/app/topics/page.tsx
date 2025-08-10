import { Badge } from "@/components/ui/badge"
import { MessageSquare, Brain } from "lucide-react"

const mainTopics = [
  {
    icon: "🔬",
    title: "imaging-methods",
    description: "Compare EM, ExM, X-ray, and more. Talk about pipelines, discuss method shortcomings, or nerd out over voxel sizes.",
    example: "FIB-SEM vs. sSEM: pros & cons?",
  },
  {
    icon: "💻",
    title: "computational",
    description: "Simulations, neuronal dynamics, storage and processing requirements for a fly's connectome",
    example: "What model is better, Hodgkin–Huxley or Integrate and Fire?",
  },
  {
    icon: "🧬",
    title: "biology",
    description: "Species-specific neuro-anatomy: fly, mouse, human. Chemical composition of neurons, tissue preservation, etc.",
    example: "What is a neuron's cytoplasm made out of?",
  },
  {
    icon: "🤔",
    title: "philosophy",
    description: "Mind-uploading, consciousness, ethics. Thought experiments & \"what if…?\" threads are fair game.",
    example: "Can personal identity survive a destructive replacement of the brain?",
  },
  {
    icon: "📚",
    title: "paper-sharing",
    description: "Post papers, pre-prints, and recorded talks. Ask for explainers or give a mini-journal-club summary.",
    example: "Has anyone read the new MICrONS paper? I'd like to present a paper on neuronal plasticity I really liked.",
  },
  {
    icon: "🗣️",
    title: "free-form",
    description: "Off-topic banter, advice, memes, questions that don't fit in any of the other categories",
    example: "Favorite brain-mapping podcasts?",
  },
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="w-4 h-4 mr-2" />
            Discussion Areas
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            What we <span className="text-primary">talk about</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From technical deep-dives to philosophical debates, here's where the magic happens.
          </p>
        </div>

        {/* Main Topics */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mainTopics.map((topic, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-300/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-3xl">{topic.icon}</div>
                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                      {topic.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{topic.description}</p>
                  
                  <div className="bg-gray-800/50 rounded-lg p-3 border-l-3 border-primary/40">
                    <p className="text-xs text-gray-400">
                      <span className="font-medium text-primary">Quick example:</span> "{topic.example}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Question Tree Image - Full Width */}
      <section className="mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Research Roadmap</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A visual guide to the key questions and research paths in brain emulation and connectomics. 
              Explore the interconnected challenges from data capture to computational modeling.
            </p>
          </div>
        </div>
        <img 
          src="/diagram6.svg" 
          alt="Question Tree" 
          className="w-full h-auto"
        />
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Core Resources */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore the Core Resources</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hand-picked articles, pre-prints and videos. Each post comes with a short summary so you can decide fast whether to dive in. Reference one of them if you'd like a plain-language rundown.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-300/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">📄</div>
                <h3 className="text-xl font-semibold text-white">papers</h3>
              </div>
              <p className="text-gray-300 mb-4">Curated research papers with plain-language summaries to help you decide what to dive into.</p>
              <div className="bg-gray-800/50 rounded-lg p-3 border-l-3 border-primary/40">
                <p className="text-xs text-gray-400">
                  Latest papers on connectomics, neural circuits, and computational neuroscience
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-300/20 rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-3xl">🎥</div>
                <h3 className="text-xl font-semibold text-white">videos</h3>
              </div>
              <p className="text-gray-300 mb-4">Hand-picked talks, lectures, and tutorials with summaries to help you choose what to watch.</p>
              <div className="bg-gray-800/50 rounded-lg p-3 border-l-3 border-primary/40">
                <p className="text-xs text-gray-400">
                  Conference talks, educational content, and expert interviews
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
