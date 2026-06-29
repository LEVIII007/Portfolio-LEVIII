"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import type { Metric } from "@/lib/case-studies"

function CountUp({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    let raf = 0
    let start: number | null = null
    const tick = (t: number) => {
      if (start === null) start = t
      const progress = Math.min((t - start) / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  const formatted =
    value >= 1000 ? Math.round(display).toLocaleString() : display % 1 === 0 && value % 1 === 0 ? Math.round(display).toString() : display.toFixed(0)

  return (
    <span ref={ref}>
      {prefix}
      {inView ? formatted : "0"}
      {suffix}
    </span>
  )
}

export function MetricStrip({ metrics, accent }: { metrics: Metric[]; accent: { from: string; to: string } }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: i * 0.08 }}
          className="rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-3 sm:p-4"
        >
          <div
            className="text-xl sm:text-3xl font-semibold tracking-tight"
            style={{
              backgroundImage: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            {m.display ? (
              m.display
            ) : (
              <CountUp value={m.value ?? 0} prefix={m.prefix} suffix={m.suffix} />
            )}
          </div>
          <p className="mt-1 text-xs sm:text-sm text-[var(--text-muted)]">{m.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
