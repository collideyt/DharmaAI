'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export type DashboardCategory = {
  label: string
  value: number
}

type ScoreDashboardProps = {
  score: number
  categories: DashboardCategory[]
}

const recommendations = ['AI Readiness Audit', 'AI Lead Automation', 'AI Chatbot Setup']

export default function ScoreDashboard({ score, categories }: ScoreDashboardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card rounded-[30px] p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Readiness Report</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Overall Score</h2>
          <div className="mt-6 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div className="flex items-end gap-3">
              <span className="text-5xl font-extrabold text-white md:text-6xl">{score}%</span>
              <span className="pb-2 text-lg font-medium text-cyan-200">AI Ready</span>
            </div>
            <p className="mt-3 max-w-xl text-slate-300">
              You have a strong foundation to start deploying AI systems. The next opportunity is structured automation across leads, support, and operations.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {categories.map((category, index) => (
              <div key={category.label}>
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="text-slate-200">{category.label}</span>
                  <span className="font-semibold text-cyan-200">{category.value}%</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${category.value}%` }}
                    transition={{ duration: 0.75, delay: 0.1 * index }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#7c3aed,#06b6d4,#22c55e)] shadow-[0_0_18px_rgba(34,211,238,0.32)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-5">
          <div className="rounded-[28px] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(8,12,26,0.86),rgba(10,17,34,0.92))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Recommended DharmaAI Solutions</p>
            <div className="mt-5 space-y-3">
              {recommendations.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">
              DharmaAI can turn this report into a practical roadmap covering automation, lead systems, customer support, and AI operations.
            </p>
            <Link href="/contact" className="premium-button mt-6 inline-flex">
              Book AI Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
