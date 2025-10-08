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
    <section className="relative overflow-hidden pt-10 md:pt-16 lg:pt-20 pb-4 md:pb-8 lg:pb-10">
      <div className="mx-auto w-full max-w-[900px]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 space-y-4">
            <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold leading-tight">Hi, I'm Shashank</h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300">Full-Stack Engineer</h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md">
              I'm a Full Stack Engineer specializing in crafting cutting edge backend solutions, From building distributed systems, API to designing robust databases. Currently exploring AI and blockchain.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="sm" className="w-full sm:w-auto text-sm px-4 py-2">
                <Link href="/Shashank_tyagi_res_01.pdf" target="_blank" rel="noopener noreferrer">
                  <FaDownload className="mr-2" />
                  Download My Resume
                </Link>
              </Button> 
              <Button asChild size="sm" variant="outline" className="w-full sm:w-auto text-sm px-4 py-2">
                <Link href="/#contact">
                  <GrContactInfo className="mr-2 text-lg" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div animate={floatingAnimation} className="relative z-20 mx-auto lg:mr-0 w-48 h-48 sm:w-64 sm:h-64">
              <Image
                src="/shashank.png"
                alt="Shashank Tyagi"
                fill
                className="rounded-full border-4 border-purple-500 shadow-md object-cover"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 animate-pulse"></div>
            </motion.div>

            <div className="absolute inset-0 z-10">
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 left-10"
              >
                <FaReact className="text-3xl text-blue-400" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute bottom-8 right-8"
              >
                <FaNodeJs className="text-3xl text-green-500" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-1/2 right-0"
              >
                <SiTypescript className="text-3xl text-blue-600" />
              </motion.div>
              <motion.div
                animate={{ scale: [1, 1.05, 1], rotate: [0, -5, 0] }}
                transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute bottom-0 left-1/4"
              >
                <SiTailwindcss className="text-3xl text-teal-400" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}