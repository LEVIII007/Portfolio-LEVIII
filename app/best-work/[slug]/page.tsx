import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { caseStudyBySlug, caseStudySlugs } from "@/lib/case-studies"
import { CaseStudyView } from "@/components/case-study/CaseStudyView"

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const study = caseStudyBySlug(params.slug)
  if (!study) return {}
  return {
    title: `${study.title} — ${study.company} · Shashank Tyagi`,
    description: study.tagline,
  }
}

export default function BestWorkPage({ params }: { params: { slug: string } }) {
  const study = caseStudyBySlug(params.slug)
  if (!study) notFound()
  return <CaseStudyView study={study} />
}
