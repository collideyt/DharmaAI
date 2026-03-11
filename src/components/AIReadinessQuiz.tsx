'use client'

import { motion } from 'framer-motion'
import { useMemo, useState } from 'react'

const questions = [
  'Do you automate lead capture?',
  'Do you use CRM software?',
  'Do you currently use AI tools?',
  'Do you automate customer support?',
]

export default function AIReadinessQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(false))
  const score = useMemo(() => Math.round((answers.filter(Boolean).length / questions.length) * 100), [answers])

  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="space-y-4">
        {questions.map((question, index) => (
          <div key={question} className="glass-card flex flex-wrap items-center justify-between gap-4 rounded-xl p-4">
            <span className="text-white">{question}</span>
            <label className="inline-flex items-center gap-3 text-sm text-slate-200">
              <input
                type="checkbox"
                checked={answers[index]}
                onChange={(e) => {
                  const next = [...answers]
                  next[index] = e.target.checked
                  setAnswers(next)
                }}
              />
              Yes
            </label>
          </div>
        ))}
      </div>
      <p className="mt-6 text-lg font-semibold text-white">Your AI Readiness Score: {score}%</p>
      <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400"
          initial={{ width: 0 }}
          animate={{ width: `${score}%` }}
          transition={{ duration: 0.6 }}
        />
      </div>
      <button className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950">
        Get a Full AI Strategy Audit
      </button>
    </div>
  )
}
