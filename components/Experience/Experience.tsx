import { ExperienceItem } from "../ui/experience-item"
import { experience } from "@/lib/data"

export function Experience() {
  return (
    <section aria-labelledby="experience-title" className="max-w-6xl mx-auto py-16">
      <h2 id="experience-title" className="text-xl font-medium mb-4">
        Experience
      </h2>
      <p className="text-[var(--text-secondary)] mb-6">
        Here's a timeline of my professional journey, showcasing my roles and contributions in solana and backend development.
      </p>
      <div className="grid gap-4">
        {experience.map((e) => (
          <ExperienceItem key={`${e.company}-${e.role}-${e.period}`} {...e} />
        ))}
      </div>
    </section>
  )
}
