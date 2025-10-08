type Blog = {
  title: string
  description: string
  date: string
  link: string
}

export function BlogItem({ title, description, date, link }: Blog) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block cursor-pointer rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-4 shadow-sm transition-colors hover:bg-[var(--hover-background)] focus:outline-none focus:ring-2 focus:ring-ring/40"
    >
      {/* left gradient accent */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500/20 via-cyan-500/20 to-transparent" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <h3 className="font-medium text-[var(--text-primary)]">
            {title}
          </h3>
          <time className="mt-1 block text-xs text-[var(--text-muted)]">{date}</time>
        </div>
        
        {/* External link icon */}
        <svg
          className="h-5 w-5 text-[var(--text-muted)] flex-shrink-0"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{description}</p>
    </a>
  )
}
