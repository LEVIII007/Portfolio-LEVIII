import Image from "next/image"
import Link from "next/link"
import { IconArrowLeft, IconArrowRight, IconCheck } from "@tabler/icons-react"
import type { CaseStudy } from "@/lib/case-studies"
import { caseStudies } from "@/lib/case-studies"
import { MetricStrip } from "./MetricStrip"
import { PipelineDiagram } from "./PipelineDiagram"

function SectionLabel({ children, accent }: { children: React.ReactNode; accent: CaseStudy["accent"] }) {
  return (
    <div className="mb-4 flex items-center gap-2">
      <span className="h-px w-6" style={{ background: accent.from }} />
      <span className="text-xs font-medium uppercase tracking-widest text-[var(--text-muted)]">{children}</span>
    </div>
  )
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  const other = caseStudies.find((c) => c.slug !== study.slug)
  const { accent } = study

  return (
    <div className="bg-black text-white min-h-screen">
      {/* top bar */}
      <div className="sticky top-0 z-30 border-b border-[var(--card-border)] bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <IconArrowLeft size={16} />
            Back to portfolio
          </Link>
          <span className="text-xs uppercase tracking-widest text-[var(--text-muted)]">Best Work</span>
        </div>
      </div>

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
        {/* hero */}
        <header className="relative">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[80%] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: `linear-gradient(120deg, ${accent.from}, ${accent.to})` }}
          />
          <div className="relative flex items-center gap-3">
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-[var(--card-border)] bg-white/5 p-1.5">
              <Image src={study.logo} alt={`${study.company} logo`} width={40} height={40} className="object-contain" />
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)]">
                {study.company} · {study.role}
              </p>
              <p className="text-xs text-[var(--text-muted)]">{study.period}</p>
            </div>
          </div>

          <h1 className="relative mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span
              style={{
                backgroundImage: `linear-gradient(120deg, ${accent.from}, ${accent.to})`,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {study.title}
            </span>
          </h1>
          <p className="relative mt-4 max-w-2xl text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            {study.tagline}
          </p>
        </header>

        {/* metrics */}
        <section className="mt-10 sm:mt-14">
          <MetricStrip metrics={study.metrics} accent={accent} />
        </section>

        {/* the problem */}
        <section className="mt-12 sm:mt-16">
          <SectionLabel accent={accent}>The Problem</SectionLabel>
          <div className="space-y-4">
            {study.problem.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">
                {p}
              </p>
            ))}
          </div>
        </section>

        {/* reframe callout */}
        <section className="mt-10">
          <div
            className="rounded-2xl border p-5 sm:p-7"
            style={{ borderColor: `${accent.from}44`, background: `${accent.from}0d` }}
          >
            <h2 className="text-lg font-medium text-[var(--text-primary)] sm:text-xl">{study.reframe.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)] sm:text-base">{study.reframe.body}</p>
          </div>
        </section>

        {/* tradeoffs */}
        {study.tradeoffs && study.tradeoffs.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <SectionLabel accent={accent}>What We Evaluated</SectionLabel>
            <div className="overflow-x-auto">
              <div className="grid min-w-[640px] grid-cols-3 gap-3">
                {study.tradeoffs.map((t) => (
                  <div
                    key={t.approach}
                    className="flex flex-col rounded-xl border p-4"
                    style={
                      t.chosen
                        ? { borderColor: `${accent.from}88`, background: `${accent.from}12` }
                        : { borderColor: "var(--card-border)", background: "var(--card-background)" }
                    }
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-medium text-[var(--text-primary)]">{t.approach}</p>
                      {t.chosen && (
                        <span
                          className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium"
                          style={{ background: accent.from, color: "#000" }}
                        >
                          <IconCheck size={11} /> Chosen
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">Why it was tempting</p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{t.tempting}</p>
                    <p className="mt-3 text-xs font-medium uppercase tracking-wide text-[var(--text-muted)]">
                      {t.chosen ? "Why we chose it" : "Why we rejected it"}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-[var(--text-muted)]">{t.rejected}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* design decisions */}
        {study.decisions && study.decisions.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <SectionLabel accent={accent}>Key Design Decisions</SectionLabel>
            <div className="grid gap-3 sm:grid-cols-3">
              {study.decisions.map((d) => (
                <div key={d.title} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-4">
                  <p className="text-sm font-medium text-[var(--text-primary)]">{d.title}</p>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">{d.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* pipeline diagram */}
        <section className="mt-12 sm:mt-16">
          <SectionLabel accent={accent}>How It Works</SectionLabel>
          <PipelineDiagram title={study.pipeline.title} caption={study.pipeline.caption} stages={study.pipeline.stages} accent={accent} />
        </section>

        {/* what I owned */}
        <section className="mt-12 sm:mt-16">
          <SectionLabel accent={accent}>What I Owned</SectionLabel>
          <div className="grid gap-3 sm:grid-cols-2">
            {study.ownership.map((o) => (
              <div key={o.title} className="rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-4">
                <p className="text-sm font-medium text-[var(--text-primary)]">{o.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)] sm:text-sm">{o.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* stack */}
        <section className="mt-12 sm:mt-16">
          <SectionLabel accent={accent}>Stack</SectionLabel>
          <div className="flex flex-wrap gap-2">
            {study.stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[var(--card-border)] bg-[var(--hover-background)] px-3 py-1 text-xs text-[var(--text-primary)]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* reflection */}
        <section className="mt-12 sm:mt-16">
          <SectionLabel accent={accent}>Reflection</SectionLabel>
          <p className="max-w-2xl text-sm italic leading-relaxed text-[var(--text-muted)] sm:text-base">
            “{study.reflection}”
          </p>
        </section>

        {/* footer nav */}
        <nav className="mt-16 flex flex-col gap-3 border-t border-[var(--card-border)] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            <IconArrowLeft size={16} />
            Back to portfolio
          </Link>
          {other && (
            <Link
              href={`/best-work/${other.slug}`}
              className="group inline-flex items-center gap-2 rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] px-4 py-2.5 text-sm transition-colors hover:bg-[var(--hover-background)]"
            >
              <span className="text-[var(--text-muted)]">Next:</span>
              <span className="text-[var(--text-primary)]">{other.title}</span>
              <IconArrowRight size={16} className="text-[var(--text-muted)] transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </nav>
      </article>
    </div>
  )
}
