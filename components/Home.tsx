"use client"
import Image from "next/image"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/button"
import { FaCircle, FaDownload, FaReact, FaNodeJs } from "react-icons/fa6"
import { SiTypescript, SiTailwindcss } from "react-icons/si"
import { GrContactInfo } from "react-icons/gr"
import { HoverBorderGradient } from "./ui/border-hover"
import Link from "next/link"
import { motion } from "framer-motion"

const floatingAnimation = {
  y: ["0%", "3%", "0%"],
  transition: {
    duration: 5,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background/[0.96] py-16 md:py-24 lg:py-32">
      <Spotlight className="z-10 -top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-6">
            <HoverBorderGradient className="inline-flex items-center gap-2 text-sm px-4 py-2">
              <FaCircle className="size-2 animate-pulse fill-green-600 text-green-600" />
              Available for work
            </HoverBorderGradient>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">Shashank Tyagi</h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-300">Full-Stack Developer</h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl">
              I am passionate about crafting innovative fullstack web applications, merging creativity and functionality
              to deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/Shashank_tyagi_res_01.pdf" target="_blank" rel="noopener noreferrer">
                  <FaDownload className="mr-2" />
                  Download My Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/#contact">
                  <GrContactInfo className="mr-2 text-xl" />
                  Contact Me
                </Link>
              </Button>
            </div>
            {/* Creative Button to navigate to Conversly Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mt-4 inline-block"
            >
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-2xl transition transform"
              >
                <Link href="#conversly">
                  Explore Conversly
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div animate={floatingAnimation} className="relative z-20 mx-auto lg:mr-0 w-64 h-64 sm:w-80 sm:h-80">
              <Image
                src="/profile1.jpeg"
                alt="Shashank Tyagi"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-purple-500 shadow-lg"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            </motion.div>
            <div className="absolute inset-0 z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10"
              >
                <FaReact className="text-4xl text-blue-400" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute bottom-10 right-10"
              >
                <FaNodeJs className="text-4xl text-green-500" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 right-0"
              >
                <SiTypescript className="text-4xl text-blue-600" />
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 9,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 left-1/4"
              >
                <SiTailwindcss className="text-4xl text-teal-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
