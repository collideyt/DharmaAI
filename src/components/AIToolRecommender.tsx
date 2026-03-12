'use client'

import { useMemo, useState } from 'react'
import { Bot, Brush, Headset, Megaphone, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

type Goal = 'Marketing' | 'Sales' | 'Customer Support' | 'Content Creation'

type ToolItem = {
  name: string
  icon: typeof Bot
}

const goalTools: Record<Goal, ToolItem[]> = {
  Marketing: [
    { name: 'ChatGPT', icon: Bot },
    { name: 'Jasper', icon: Megaphone },
  ],
  Sales: [{ name: 'HubSpot AI', icon: TrendingUp }],
  'Customer Support': [{ name: 'Intercom AI', icon: Headset }],
  'Content Creation': [
    { name: 'Midjourney', icon: Brush },
    { name: 'Canva AI', icon: Brush },
  ],
}

const goals: Goal[] = ['Marketing', 'Sales', 'Customer Support', 'Content Creation']

export default function AIToolRecommender() {
  const [selectedGoal, setSelectedGoal] = useState<Goal>('Marketing')

  const recommendations = useMemo(() => goalTools[selectedGoal], [selectedGoal])

  return (
    <section className="py-16">
      <div className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Tool Recommender</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Pick your goal and get matched with AI tools.</h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-md">
          <div className="flex flex-wrap gap-3">
            {goals.map((goal) => (
              <button
                key={goal}
                type="button"
                onClick={() => setSelectedGoal(goal)}
                className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  selectedGoal === goal
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-400 text-slate-950'
                    : 'bg-white/10 text-slate-200 hover:bg-white/20'
                }`}
              >
                {goal}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {recommendations.map((tool, index) => {
              const Icon = tool.icon

              return (
                <motion.div
                  key={tool.name}
                  className="rounded-xl border border-white/10 bg-slate-900/45 p-4 shadow-lg shadow-cyan-900/10"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-3 inline-flex rounded-lg bg-cyan-400/15 p-2 text-cyan-200">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <p className="text-base font-semibold text-white">{tool.name}</p>
                  <p className="mt-1 text-sm text-slate-300">Recommended for {selectedGoal.toLowerCase()} workflows.</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
