'use client'

import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Circle } from 'lucide-react'
import ScoreDashboard, { type CategoryScore } from './ScoreDashboard'

type QuizQuestion = {
  id: string
  label: string
  category: CategoryScore['name']
}

const questions: QuizQuestion[] = [
  {
    id: 'lead_capture',
    label: 'Do you capture leads automatically?',
    category: 'Lead Automation',
  },
  {
    id: 'crm',
    label: 'Do you use a CRM system?',
    category: 'Operations',
  },
  {
    id: 'ai_tools',
    label: 'Do you currently use AI tools?',
    category: 'Marketing AI',
  },
  {
    id: 'support',
    label: 'Do you automate customer support?',
    category: 'Customer Support',
  },
  {
    id: 'data_analysis',
    label: 'Do you analyze business data?',
    category: 'Operations',
  },
]

type Answers = Record<string, boolean | null>

const initialAnswers = questions.reduce<Answers>((acc, question) => {
  acc[question.id] = null
  return acc
}, {})

export default function AIQuiz() {
  const [answers, setAnswers] = useState<Answers>(initialAnswers)
  const [submitted, setSubmitted] = useState(false)

  const answeredCount = useMemo(
    () => Object.values(answers).filter((value) => value !== null).length,
    [answers],
  )

  const score = useMemo(() => {
    const yesCount = Object.values(answers).filter(Boolean).length
    return Math.round((yesCount / questions.length) * 100)
  }, [answers])

  const categoryScores = useMemo<CategoryScore[]>(() => {
    const categories: CategoryScore['name'][] = [
      'Lead Automation',
      'Customer Support',
      'Marketing AI',
      'Operations',
    ]

    return categories.map((category) => {
      const categoryQuestions = questions.filter((question) => question.category === category)
      const total = categoryQuestions.length
      const yesAnswers = categoryQuestions.filter((question) => answers[question.id] === true).length
      return {
        name: category,
        score: total ? Math.round((yesAnswers / total) * 100) : 0,
      }
    })
  }, [answers])

  return (
    <section className="py-16">
      <div className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Readiness Quiz</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Measure how ready your business is for AI automation.</h2>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-cyan-900/10 backdrop-blur-md">
          <div className="space-y-4">
            {questions.map((question, index) => (
              <motion.div
                key={question.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-xl border border-white/10 bg-slate-900/40 p-4"
              >
                <p className="text-sm text-slate-100 md:text-base">{question.label}</p>
                <div className="mt-3 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: true }))}
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      answers[question.id] === true
                        ? 'bg-cyan-400 text-slate-950'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {answers[question.id] === true ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setAnswers((prev) => ({ ...prev, [question.id]: false }))}
                    className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
                      answers[question.id] === false
                        ? 'bg-indigo-300 text-slate-950'
                        : 'bg-white/10 text-slate-200 hover:bg-white/20'
                    }`}
                  >
                    {answers[question.id] === false ? <CheckCircle2 size={16} /> : <Circle size={16} />}
                    No
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setSubmitted(true)}
              disabled={answeredCount !== questions.length}
              className="rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Generate AI Readiness Report
            </button>
            <p className="text-sm text-slate-300">{answeredCount}/{questions.length} answered</p>
          </div>

          {submitted ? (
            <div className="mt-8">
              <p className="text-lg font-semibold text-white">Your AI Readiness Score: {score}%</p>
              <ScoreDashboard score={score} categories={categoryScores} />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  )
}
