'use client'

import { motion } from 'framer-motion'

export type CategoryScore = {
  name: 'Lead Automation' | 'Customer Support' | 'Marketing AI' | 'Operations'
  score: number
}

type ScoreDashboardProps = {
  score: number
  categories: CategoryScore[]
}

export default function ScoreDashboard({ score, categories }: ScoreDashboardProps) {
  return (
    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-md">
      <h3 className="text-2xl font-bold text-white">AI Readiness Report</h3>

      <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-slate-950/50 p-5 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Overall Score</p>
        <p className="mt-2 text-4xl font-extrabold text-white md:text-5xl">{score}% AI Ready</p>
      </div>

      <div className="mt-6 space-y-4">
        {categories.map((category, index) => (
          <div key={category.name}>
            <div className="mb-2 flex items-center justify-between text-sm text-slate-200">
              <span>{category.name}</span>
              <span>{category.score}%</span>
            </div>
            <div className="h-2.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
                initial={{ width: 0 }}
                animate={{ width: `${category.score}%` }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-white/10 bg-slate-900/40 p-4">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">Recommended DharmaAI Solutions</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-200">
          <li>AI Readiness Audit</li>
          <li>AI Lead Automation</li>
          <li>AI Chatbot Setup</li>
        </ul>
      </div>

      <button
        type="button"
        className="mt-6 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.02]"
      >
        Book AI Strategy Call
      </button>
    </div>
  )
}
