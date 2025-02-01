"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react"
import { Button } from "@/components/ui/button"
import { Inter } from 'next/font/google'

const lobster = Inter({ subsets: ['latin'], weight: '700', variable: '--font-lobster' })


type Feature = {
  title: string
  description: string
  image: string
}

const features: Feature[] = [
  {
    title: "AI Chatbot Deployment",
    description: "Deploy chatbots with tailored responses using custom knowledge bases for specific business needs.",
    image: "/conversly.png",
  },
  {
    title: "Multi-Platform Integration",
    description: "Easily embed agentic RAG chatbots on websites, Discord, and Slack channels with minimal code.",
    image: "/widget.png",
  },
  {
    title: "Accuracy & Speed",
    description: "Grounded Answers with Citations, synthesizes information from multiple sources to provide comprehensive answers.",
    image: "/features1.png",
  },
  {
    title: "+10 LLM-optimized knowledge source integrations available",
    description: "Automatically refreshing and secure data connectors that support all common data sources.",
    image: "/features2.png",
  },
]

const ConverslyAIShowcase: React.FC = () => {
  const [active, setActive] = useState(0)

  const handleNext = () => {
    setActive((prev) => (prev + 1) % features.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <div className="relative max-w-6xl mx-auto px-4 py-16 overflow-hidden bg-black rounded-lg"
    id = 'conversly'>
      {/* Background Grid with fading edges */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white">
      <h2 className="text-xl font-bold mb-8 text-center">A product I've been passionately building...</h2>
      <h2 className={`text-4xl font-bold mb-8 text-center ${lobster.variable} font-[Lobster]`}>
  ConverslyAI
</h2>

        <p className={`text-2xl font-bold mb-8 text-center ${lobster.variable} font-[Lobster]`}>
          A SaaS chatbot provider for highly tailored business interactions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Showcase */}
          <div className="relative h-[400px] w-full">
            <AnimatePresence>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: index === active ? 1 : 0,
                    scale: index === active ? 1 : 0.8,
                    zIndex: index === active ? 10 : 1,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-lg"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Feature Description & Navigation */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold mb-4">{features[active].title}</h3>
                <p className="text-gray-300 mb-8">{features[active].description}</p>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center">
              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {features.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-2 rounded-full ${index === active ? "bg-blue-500" : "bg-gray-500"}`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex space-x-4">
                <Button onClick={handlePrev} variant="outline" size="icon">
                  <IconArrowLeft className="h-4 w-4" />
                </Button>
                <Button onClick={handleNext} variant="outline" size="icon">
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <a href="https://conversly.shashankkk.site" target="_blank" rel="noopener noreferrer">
              Visit Conversly.ai
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}


export default ConverslyAIShowcase