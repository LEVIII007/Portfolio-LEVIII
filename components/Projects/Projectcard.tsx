'use client';
import type React from "react"
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import { Copy } from "lucide-react"
import { Button } from "@/components/ui/button"


interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  liveLink: string
  githubLink: string
  tags: string[]
  features?: string[]
}

const ProjectCardKing: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  liveLink,
  githubLink,
  tags,
  features = [],
}) => {

  const copyNpmCommand = () => {
    navigator.clipboard.writeText("npm install z-secure")
  }

  return (
    <div className="bg-black border-neutral-600 border-2 rounded-xl p-4 w-full max-w-[1020px] mx-auto">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Left side - Image */}
        <div className="flex-shrink-0 w-full sm:w-auto">
          <div className="overflow-hidden rounded-lg">
            <Link href={liveLink} target="_blank">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                width={300}
                height={150}
                className="rounded-lg hover:scale-105 transition-transform duration-500 w-full h-auto"
              />
            </Link>
          </div>
        </div>

        {/* Right side - Features list */}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold mb-3 text-neutral-200">Key Features:</h3>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-neutral-400 text-sm sm:text-base">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* NPM Install Command */}
      <div className="mt-4 bg-[#2e2e2e] rounded-lg p-3 flex flex-col sm:flex-row justify-between items-center gap-2">
        <code className="text-neutral-300 font-mono text-sm sm:text-base">npm install z-secure</code>
        <Button variant="ghost" size="icon" onClick={copyNpmCommand} className="hover:bg-neutral-700">
          <Copy className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 bg-[#2e2e2e] rounded-lg p-3 flex flex-col sm:flex-row justify-between items-center gap-2">
        <code className="text-neutral-300 font-mono text-sm sm:text-base">npm install z-secure-service</code>
        <Button variant="ghost" size="icon" onClick={copyNpmCommand} className="hover:bg-neutral-700">
          <Copy className="h-4 w-4" />
        </Button>
      </div>

      {/* Title and GitHub Link */}
      <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
        <div className="text-xl sm:text-2xl font-bold font-inter">{title}</div>
        <Link href={githubLink} target="_blank">
          <FaGithub className="hover:scale-110 size-6" />
        </Link>
      </div>

      {/* Description */}
      <div className="px-3 text-neutral-400 italic text-sm sm:text-base">{description}</div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
        {tags.map((tech, index) => (
          <div key={index} className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  liveLink: string
  githubLink: string
  tags: string[]
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, liveLink, githubLink, tags }) => {
  return (
    <div className="bg-black border-neutral-600 border-2 rounded-xl p-4 w-full max-w-[500px] mx-auto">
      <div className="overflow-hidden rounded-lg">
        <Link href={liveLink} target="_blank">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            width={500}
            height={300}
            className="rounded-lg hover:scale-105 transition-transform duration-500 w-full h-auto"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
        <div className="text-xl sm:text-2xl font-bold font-inter">{title}</div>
        <Link href={githubLink} target="_blank">
          <FaGithub className="hover:scale-110 size-6" />
        </Link>
      </div>
      <div className="px-3 text-neutral-400 italic text-sm sm:text-base">{description}</div>
      <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
        {tags.map((tech, index) => (
          <div key={index} className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full">
            {tech}
          </div>
        ))}
      </div>
    </div>
  )
}






export { ProjectCardKing, ProjectCard }

