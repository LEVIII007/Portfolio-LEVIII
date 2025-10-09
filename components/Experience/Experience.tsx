import { ExperienceItem } from "../ui/experience-item"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="max-w-6xl mx-auto py-8 sm:py-12 md:py-16 px-2 sm:px-0">
      <h2 id="experience-title" className="text-lg sm:text-xl font-medium mb-3 sm:mb-4">
        Experience
      </h2>
      <p className="text-[var(--text-secondary)] mb-4 sm:mb-6 text-sm sm:text-base">
        Here's a timeline of my professional journey, showcasing my roles and contributions in solana and backend development.
      </p>
      <div className="grid gap-3 sm:gap-4">
        {experience.map((e) => (
          <ExperienceItem key={`${e.company}-${e.role}-${e.period}`} {...e} />
        ))}
      </div>
    </section>
  )
}
