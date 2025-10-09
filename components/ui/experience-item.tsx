"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

type Experience = {
  company: string
  role: string
  period: string
  summary: string
  details?: string[]
  links?: { label: string; href: string }[]
  logo?: string
  companyWebsite?: string
  companyTwitter?: string
  tags?: string[]
}

export function ExperienceItem({ company, role, period, summary, details = [], links = [], logo, companyWebsite, companyTwitter, tags = [] }: Experience) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <article
          role="button"
          tabIndex={0}
          className="group relative cursor-pointer rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-3 sm:p-4 shadow-sm transition-colors hover:bg-[var(--hover-background)] focus:outline-none focus:ring-2 focus:ring-ring/40"
        >
          {/* left gradient accent */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />

          <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4">
            <div className="flex items-start gap-2 sm:gap-3 flex-1 w-full">
              {/* Company Logo */}
              {logo && (
                <div className="flex-shrink-0 mt-1">
                  <Image
                    src={logo}
                    alt={`${company} logo`}
                    width={32}
                    height={32}
                    className="rounded-md object-contain"
                  />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-[var(--text-primary)] text-sm sm:text-base">{role}</h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)]">{company}</p>
              </div>
            </div>
            <time className="text-xs text-[var(--text-muted)] sm:whitespace-nowrap">{period}</time>
          </div>

          <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">{summary}</p>

          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-2 sm:mt-3">
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
          )}
        </article>
      </DialogTrigger>

      <DialogContent className="bg-[var(--card-background)] border-[var(--card-border)] text-[var(--text-primary)] p-0 gap-0 max-w-[95vw] sm:max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4">
          <div className="flex items-start gap-2 sm:gap-3">
            {/* Company Logo in Dialog */}
            {logo && (
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`${company} logo`}
                  width={48}
                  height={48}
                  className="rounded-lg object-contain"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-lg sm:text-xl">{role}</DialogTitle>
              <DialogDescription className="text-[var(--text-muted)]">
                {company} • {period}
              </DialogDescription>
              {/* Company Social Links */}
              {(companyWebsite || companyTwitter) && (
                <div className="flex gap-2 mt-2">
                  {companyWebsite && (
                    <a
                      href={companyWebsite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      Website
                    </a>
                  )}
                  {companyTwitter && (
                    <a
                      href={companyTwitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                      </svg>
                      Twitter
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
          {/* summary */}
          {summary ? <p className="text-sm leading-relaxed text-[var(--text-muted)]">{summary}</p> : null}

          {/* details list */}
          {details.length > 0 ? (
            <ul className="list-disc pl-5 space-y-2 text-sm text-[var(--text-primary)]">
              {details.map((item, i) => (
                <li key={i} className="leading-relaxed text-[var(--text-primary)]/90">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {/* links */}
          {links.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {links.map((l) => (
                <a
                  key={`${l.label}-${l.href}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center rounded-md border border-[var(--card-border)] px-2 py-1 text-xs font-medium text-[var(--text-primary)] hover:bg-[var(--hover-background)]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          ) : null}

          {/* Tech Stack */}
          {tags.length > 0 && (
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
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
