"use client"

import { motion } from "framer-motion"
import type { PipelineStage } from "@/lib/case-studies"

type Props = {
  title: string
  caption?: string
  stages: PipelineStage[]
  accent: { from: string; to: string }
}

export function PipelineDiagram({ title, caption, stages, accent }: Props) {
  return (
    <div className="relative">
      <h3 className="text-base sm:text-lg font-medium text-[var(--text-primary)] mb-1">{title}</h3>
      {caption && (
        <p className="text-xs sm:text-sm text-[var(--text-muted)] mb-6 max-w-2xl">{caption}</p>
      )}

      <div className="relative">
        {stages.map((stage, i) => {
          const isLast = i === stages.length - 1
          return (
            <div key={stage.label} className="relative flex gap-3 sm:gap-4 pb-6 last:pb-0">
              {/* spine: dot + animated connector */}
              <div className="relative flex flex-col items-center">
                <motion.span
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ delay: i * 0.12, type: "spring", stiffness: 200 }}
                  className="relative z-10 mt-1 h-3.5 w-3.5 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${accent.from}, ${accent.to})`,
                    boxShadow: `0 0 12px ${accent.from}66`,
                  }}
                />
                {!isLast && (
                  <div className="relative mt-1 w-px flex-1 overflow-hidden bg-[var(--card-border)]">
                    {/* traveling pulse */}
                    <motion.span
                      className="absolute left-0 top-0 h-6 w-px"
                      style={{
                        background: `linear-gradient(to bottom, transparent, ${accent.to}, transparent)`,
                      }}
                      animate={{ y: ["-24px", "120%"] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.25,
                      }}
                    />
                  </div>
                )}
              </div>

              {/* stage card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.12 + 0.05, duration: 0.4 }}
                className="flex-1 rounded-xl border border-[var(--card-border)] bg-[var(--card-background)] p-3 sm:p-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-[var(--text-primary)]">
                    {stage.label}
                  </p>
                </div>
                {stage.sublabel && (
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[var(--text-muted)]">
                    {stage.sublabel}
                  </p>
                )}

                {/* fan-out / filter node chips */}
                {stage.nodes && stage.nodes.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {stage.nodes.map((node, n) => {
                      const isDropped = stage.drop && node.toLowerCase() === "drop"
                      return (
                        <motion.span
                          key={`${node}-${n}`}
                          initial={{ opacity: 0, y: 6 }}
                          whileInView={{ opacity: isDropped ? 0.4 : 1, y: 0 }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ delay: i * 0.12 + 0.2 + n * 0.06 }}
                          className={`rounded-md border px-2 py-0.5 text-xs ${
                            isDropped
                              ? "border-dashed border-[var(--card-border)] text-[var(--text-muted)] line-through"
                              : "text-[var(--text-primary)]"
                          }`}
                          style={
                            isDropped
                              ? undefined
                              : { borderColor: `${accent.from}55`, background: `${accent.from}11` }
                          }
                        >
                          {node}
                        </motion.span>
                      )
                    })}
                  </div>
                )}
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
