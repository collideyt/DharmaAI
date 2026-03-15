'use client'

import { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import AIAnalyzing from './AIAnalyzing'
import AIToolRecommender from './AIToolRecommender'
import ScoreDashboard, { type DashboardCategory } from './ScoreDashboard'

type Question = {
  id: string
  label: string
  category: DashboardCategory['label']
}

const questions: Question[] = [
  { id: 'leads', label: 'Do you capture leads automatically?', category: 'Lead Automation' },
  { id: 'crm', label: 'Do you use CRM software?', category: 'Operations' },
  { id: 'ai-tools', label: 'Do you currently use AI tools?', category: 'Marketing AI' },
  { id: 'support', label: 'Do you automate customer support?', category: 'Customer Support' },
  { id: 'data', label: 'Do you analyze business data?', category: 'Operations' },
]

type Answers = Record<string, boolean>

const initialAnswers = questions.reduce<Answers>((accumulator, question) => {
  accumulator[question.id] = false
  return accumulator
}, {})

type QuizState = 'quiz' | 'analyzing' | 'report'

export default function AIQuiz() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers)
  const [quizState, setQuizState] = useState<QuizState>('quiz')
  const timerRef = useRef<number | null>(null)

  const score = useMemo(() => {
    const positiveAnswers = Object.values(answers).filter(Boolean).length
    return Math.round((positiveAnswers / questions.length) * 100)
  }, [answers])

  const categories = useMemo<DashboardCategory[]>(() => {
    const categoryMap = new Map<DashboardCategory['label'], boolean[]>()

    questions.forEach((question) => {
      const values = categoryMap.get(question.category) ?? []
      values.push(answers[question.id])
      categoryMap.set(question.category, values)
    })

    return ['Lead Automation', 'Customer Support', 'Marketing AI', 'Operations'].map((label) => {
      const values = categoryMap.get(label) ?? []
      const value = values.length === 0 ? 0 : Math.round((values.filter(Boolean).length / values.length) * 100)

      return { label, value }
    })
  }, [answers])

  const answeredCount = Object.values(answers).filter(Boolean).length

  const handleSubmit = () => {
    setQuizState('analyzing')
    timerRef.current = window.setTimeout(() => {
      setQuizState('report')
    }, 2000)
  }

  if (quizState === 'analyzing') {
    return <AIAnalyzing />
  }

  if (quizState === 'report') {
    return (
      <div className="space-y-8">
        <ScoreDashboard score={score} categories={categories} />
        <AIToolRecommender />
      </div>
    )
  }

  return (
    <div className="premium-card rounded-[30px] p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Readiness Quiz</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Discover how prepared your business is for AI</h2>
          <p className="mt-3 max-w-2xl text-slate-300">
            Answer a few quick questions and DharmaAI will generate a practical readiness report with the next systems to implement.
          </p>
          <div className="mt-8 space-y-4">
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: index * 0.05 }}
                className="rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-[0_18px_36px_rgba(2,6,23,0.2)]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-base font-medium text-white">{question.label}</p>
                    <p className="mt-1 text-sm text-slate-400">{question.category}</p>
                  </div>
                  <div className="inline-flex rounded-full border border-white/10 bg-slate-950/50 p-1">
                    {[
                      { label: 'No', value: false },
                      { label: 'Yes', value: true },
                    ].map((option) => (
                      <button
                        key={option.label}
                        type="button"
                        onClick={() => setAnswers((current) => ({ ...current, [question.id]: option.value }))}
                        className={`rounded-full px-4 py-2 text-sm transition ${
                          answers[question.id] === option.value
                            ? 'bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 text-slate-950 shadow-[0_8px_18px_rgba(124,58,237,0.25)]'
                            : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="rounded-[28px] border border-cyan-300/15 bg-[linear-gradient(180deg,rgba(12,18,35,0.95),rgba(8,12,24,0.92))] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Live Estimate</p>
            <div className="mt-4 flex items-end gap-3">
              <span className="text-5xl font-extrabold text-white">{score}%</span>
              <span className="pb-2 text-slate-300">AI readiness</span>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                animate={{ width: `${score}%` }}
                transition={{ duration: 0.4 }}
                className="h-full rounded-full bg-[linear-gradient(90deg,#7c3aed,#06b6d4,#22c55e)]"
              />
            </div>
            <p className="mt-4 text-sm text-slate-300">
              {answeredCount} of {questions.length} capabilities currently in place based on your answers.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-slate-300">
              Submit your answers to generate a detailed readiness report and recommended DharmaAI solutions.
            </p>
            <button type="button" onClick={handleSubmit} className="premium-button mt-6 inline-flex">
              Analyze My Business
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
