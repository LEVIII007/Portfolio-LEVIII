import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { FaGithub } from "react-icons/fa"

type Project = {
  title: string
  description: string
  imageUrl: string
  liveLink: string
  githubLink: string
  tags: string[]
  features?: string[]
}

export function ProjectItem({ 
  title, 
  description, 
  imageUrl, 
  liveLink, 
  githubLink, 
  tags, 
  features = [] 
}: Project) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          role="button"
          tabIndex={0}
          className="group relative cursor-pointer rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-4 shadow-sm transition-colors hover:bg-[var(--hover-background)] focus:outline-none focus:ring-2 focus:ring-ring/40"
        >
          {/* left gradient accent */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />

          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-medium text-[var(--text-primary)]">{title}</h3>
              <div className="flex gap-2 mt-1">
                {liveLink && (
                  <Link 
                    href={liveLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Live Demo →
                  </Link>
                )}
                <Link 
                  href={githubLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaGithub className="h-3 w-3" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.slice(0, 4).map((tag, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-0.5 rounded-full bg-[var(--hover-background)] text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
            {tags.length > 4 && (
              <span className="text-xs px-2 py-0.5 text-[var(--text-muted)]">
                +{tags.length - 4} more
              </span>
            )}
          </div>
        </article>
      </DialogTrigger>

      <DialogContent className="bg-[var(--card-background)] border-[var(--card-border)] text-[var(--text-primary)] p-0 gap-0 max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-xl">{title}</DialogTitle>
          <DialogDescription className="flex gap-4 text-[var(--text-muted)]">
            {liveLink && (
              <Link 
                href={liveLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--text-primary)] transition-colors"
              >
                Live Demo →
              </Link>
            )}
            <Link 
              href={githubLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-primary)] transition-colors flex items-center gap-1"
            >
              <FaGithub className="h-4 w-4" />
              View Source
            </Link>
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 p-6 pt-0">
          {/* Image */}
          {imageUrl && (
            <div className="overflow-hidden rounded-lg">
              <Image
                src={imageUrl}
                alt={title}
                width={600}
                height={300}
                className="w-full h-auto max-h-[300px] object-cover rounded-lg"
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>

          {/* Features list */}
          {features.length > 0 && (
            <div>
              <h4 className="font-medium text-[var(--text-primary)] mb-2">Key Features:</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-primary)]">
                {features.map((feature, i) => (
                  <li key={i} className="leading-relaxed text-[var(--text-primary)]/90">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="font-medium text-[var(--text-primary)] mb-2">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="text-xs px-3 py-1 rounded-full border border-[var(--card-border)] bg-[var(--hover-background)] text-[var(--text-primary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
