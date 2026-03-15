'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const toolMap = {
  Marketing: ['ChatGPT', 'Jasper'],
  Sales: ['HubSpot AI'],
  'Customer Support': ['Intercom AI'],
  'Content Creation': ['Midjourney', 'Canva AI'],
} as const

type Goal = keyof typeof toolMap

const goals = Object.keys(toolMap) as Goal[]

export default function AIToolRecommender() {
  const [selectedGoal, setSelectedGoal] = useState<Goal>('Marketing')

  return (
    <section className="premium-card rounded-[30px] p-8">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Tool Recommender</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Choose your growth goal</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Select the outcome you want to accelerate and get a shortlist of AI tools commonly used in that workflow.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {goals.map((goal) => (
            <button
              key={goal}
              type="button"
              onClick={() => setSelectedGoal(goal)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedGoal === goal
                  ? 'border-cyan-300/50 bg-cyan-300/10 text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                  : 'border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:text-white'
              }`}
            >
              {goal}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {toolMap[selectedGoal].map((tool, index) => (
          <motion.article
            key={tool}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, delay: index * 0.08 }}
            className="group rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5 shadow-[0_18px_40px_rgba(2,6,23,0.25)] transition-transform hover:-translate-y-1"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
              <Sparkles size={20} />
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{tool}</h3>
            <p className="mt-2 text-sm text-slate-300">
              Recommended for {selectedGoal.toLowerCase()} workflows where speed, personalization, and automation matter.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
