"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Heart } from "lucide-react"
import { trackDiscordClick } from "@/lib/analytics"

const joinSteps = [
  {
    number: "1",
    title: "Click to join",
    description: "Hit the big purple button above to get your Discord invite",
    tip: "Make sure you have Discord installed or use the web version",
  },
  {
    number: "2",
    title: "Read the guide",
    description: "Check out our community guidelines and getting started resources",
    tip: "Don't forget to claim your member badge!",
  },
  {
    number: "3",
    title: "Jump into conversations",
    description: "Ask questions, share insights, or just lurk and learn - all are welcome",
    tip: "Seriously, ask anything! We're all here because brains are fascinating",
  },
]

export default function JoinPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            <Heart className="w-4 h-4 mr-2" />
            Join the Community
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome to <span className="text-primary">Connectomics</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Ready to explore the brain with fellow researchers and curious minds?
          </p>

          {/* Primary CTA */}
          <div className="space-y-4">
            <Button asChild size="lg" className="text-xl px-12 py-6 group bg-purple-600 hover:bg-purple-700 text-white border-0">
              <Link 
                href="https://discord.gg/bPmQt63b5Y" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackDiscordClick('join_page_hero')}
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                Join Connectomics Discord
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <p className="text-sm text-muted-foreground">
              No hype. Just science.
            </p>
          </div>
        </div>

        {/* How to Join */}
        <section className="mb-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Getting started is easy</h2>
            <p className="text-lg text-muted-foreground">Three simple steps to become part of our community</p>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            {joinSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 bg-card border border-border/50 rounded-2xl hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.number}
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary/30">
                    <p className="text-sm text-muted-foreground">
                      <strong>Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
