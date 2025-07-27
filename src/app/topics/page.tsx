import { Badge } from "@/components/ui/badge"
import { MessageSquare, Brain } from "lucide-react"

const mainTopics = [
  {
    icon: "🔬",
    title: "Imaging Methods",
    description: "Compare EM, ExM, X-ray, and more. Talk about pipelines, discuss method shortcomings, or nerd out over voxel sizes",
    channels: ["#imaging-methods"],
    examples: [
      "FIB-SEM vs. sSEM: pros & cons?",
      "Automated sectioning protocols and throughput",
      "Voxel size optimization for different tissues",
      "Method shortcomings and workarounds",
    ],
    recentDiscussion:
      '"FIB-SEM vs. sSEM: pros & cons?"',
  },
  {
    icon: "💻",
    title: "Computational Neuroscience",
    description: "Simulations, neuronal dynamics, storage and processing requirements for a fly's connectome",
    channels: ["#computational"],
    examples: [
      "Hodgkin–Huxley vs. Integrate and Fire models",
      "Neural network simulations and dynamics",
      "Connectome data storage solutions",
      "Processing pipeline optimization",
    ],
    recentDiscussion:
      '"What model is better, Hodgkin–Huxley or Integrate and Fire?"',
  },
  {
    icon: "🧬",
    title: "Biology & Anatomy",
    description: "Species-specific neuro-anatomy: fly, mouse, human. Chemical composition of neurons, tissue preservation, etc.",
    channels: ["#biology"],
    examples: [
      "Cross-species neuroanatomical comparisons",
      "Neuronal cytoplasm composition",
      "Tissue preservation techniques",
      "Synaptic structure variations",
    ],
    recentDiscussion:
      '"What is a neuron\'s cytoplasm made out of?"',
  },
  {
    icon: "🤔",
    title: "Philosophy & Ethics",
    description: "Mind-uploading, consciousness, ethics. Thought experiments & 'what if…?' threads are fair game",
    channels: ["#philosophy"],
    examples: [
      "Personal identity and brain replacement",
      "Consciousness theories and debates",
      "Ethics of mind uploading",
      "Thought experiments on neural continuity",
    ],
    recentDiscussion:
      '"Can personal identity survive a destructive replacement of the brain?"',
  },
  {
    icon: "📚",
    title: "Paper Sharing & Journal Club",
    description: "Post papers, pre-prints, and recorded talks. Ask for explainers or give a mini-journal-club summary",
    channels: ["#paper-sharing"],
    examples: [
      "Latest MICrONS research discussions",
      "Neuronal plasticity paper presentations",
      "Pre-print reviews and summaries",
      "Recorded talk recommendations",
    ],
    recentDiscussion:
      '"Has anyone read the new MICrONS paper? I\'d like to present a paper on neuronal plasticity I really liked."',
  },
]

const specialChannels = [
  {
    icon: "🗣️",
    title: "Free-form Chat",
    description: "Off-topic banter, advice, memes, and questions that don't fit in any of the other categories",
    example: '"Favorite brain-mapping podcasts?"',
  },
  {
    icon: "📚",
    title: "Resources Hub",
    description: "Curated papers, videos, and educational materials with summaries",
    example: "Hand-picked articles with summaries so you can decide whether to dive deep.",
  },
  {
    icon: "�️",
    title: "Member Roles",
    description: "Claim your member badge and unlock discussion privileges",
    example: "Hit 🧪 to unlock the Member role and start participating in discussions.",
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
          <div className="space-y-16 max-w-5xl mx-auto">
            {mainTopics.map((topic, index) => (
              <div key={index} className="group">
                <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/20 transition-all duration-300">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="text-5xl flex-shrink-0">{topic.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {topic.title}
                      </h3>
                      <p className="text-lg text-muted-foreground mb-4">{topic.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {topic.channels.map((channel, channelIndex) => (
                          <Badge key={channelIndex} variant="outline" className="text-primary border-primary/30">
                            {channel}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-lg">What we discuss:</h4>
                      <ul className="space-y-2">
                        {topic.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-lg">Recent discussion:</h4>
                      <div className="bg-muted/50 rounded-lg p-4 border-l-4 border-primary/30">
                        <p className="text-sm italic text-muted-foreground">{topic.recentDiscussion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Special Channels */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Beyond the science</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not all work and no play. Here's where we connect as humans.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {specialChannels.map((channel, index) => (
              <div
                key={index}
                className="text-center space-y-4 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{channel.icon}</div>
                <h3 className="text-xl font-semibold">{channel.title}</h3>
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary/30">
                  <p className="text-sm italic text-muted-foreground">{channel.example}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 border border-primary/20 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to dive in?</h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're interested in the technical details or the big philosophical questions, there's a
            conversation waiting for you.
          </p>
        </section>
      </div>
    </div>
  )
}
