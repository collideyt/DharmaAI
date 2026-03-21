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
  { id: 'crm', label: 'Do you use CRM software consistently?', category: 'Operations' },
  { id: 'ai-tools', label: 'Do you currently use AI tools in daily work?', category: 'Marketing AI' },
  { id: 'support', label: 'Do you automate customer support queries?', category: 'Customer Support' },
  { id: 'data', label: 'Do you review business data monthly?', category: 'Operations' },
  { id: 'lead-routing', label: 'Do leads get routed to the right person instantly?', category: 'Lead Automation' },
  { id: 'follow-ups', label: 'Do you run automated follow-up sequences?', category: 'Lead Automation' },
  { id: 'faq-bot', label: 'Do you have a FAQ or chatbot for instant answers?', category: 'Customer Support' },
  { id: 'sla', label: 'Do you track response time SLAs?', category: 'Customer Support' },
  { id: 'campaigns', label: 'Do you automate marketing campaign scheduling?', category: 'Marketing AI' },
  { id: 'content', label: 'Do you repurpose content with AI assistance?', category: 'Marketing AI' },
  { id: 'ads', label: 'Do you track ad performance weekly?', category: 'Marketing AI' },
  { id: 'process-docs', label: 'Do you document key operational processes?', category: 'Operations' },
  { id: 'handoffs', label: 'Are internal handoffs standardized?', category: 'Operations' },
  { id: 'pipeline', label: 'Is your sales pipeline updated in real time?', category: 'Lead Automation' },
  { id: 'nps', label: 'Do you collect customer feedback after delivery?', category: 'Customer Support' },
  { id: 'personalization', label: 'Do you personalize messaging at scale?', category: 'Marketing AI' },
  { id: 'insights', label: 'Do you track KPIs in a single dashboard?', category: 'Operations' },
  { id: 'automation', label: 'Do you automate repetitive back-office tasks?', category: 'Operations' },
  { id: 'training', label: 'Is your team trained on AI usage guidelines?', category: 'Operations' },
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
  const [step, setStep] = useState(0)
  const timerRef = useRef<number | null>(null)
  const questionsPerStep = 4
  const totalSteps = Math.ceil(questions.length / questionsPerStep)
  const startIndex = step * questionsPerStep
  const currentQuestions = questions.slice(startIndex, startIndex + questionsPerStep)
  const isLastStep = step === totalSteps - 1

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
    <div className="grid gap-6 md:gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Questionnaire · 20 questions</p>
          <p className="text-sm text-slate-400">
            Step {step + 1} of {totalSteps}
          </p>
        </div>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <motion.div
            animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            transition={{ duration: 0.35 }}
            className="h-full rounded-full bg-[linear-gradient(90deg,#7c3aed,#06b6d4,#22c55e)]"
          />
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {currentQuestions.map((question, index) => (
            <motion.div
              key={question.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.04 }}
              className="rounded-[22px] border border-white/10 bg-white/5 p-4 shadow-[0_18px_36px_rgba(2,6,23,0.2)] sm:p-5"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-white sm:text-base">{question.label}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-slate-400">{question.category}</p>
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
                      className={`rounded-full px-3 py-2 text-xs transition sm:px-4 sm:text-sm ${
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

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setStep((current) => Math.max(current - 1, 0))}
            className="outline-button inline-flex"
            disabled={step === 0}
          >
            Back
          </button>
          {isLastStep ? (
            <button type="button" onClick={handleSubmit} className="premium-button inline-flex">
              Generate My Report
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setStep((current) => current + 1)}
              className="premium-button inline-flex"
            >
              Next Section
            </button>
          )}
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
            Submit your answers to generate a detailed readiness report and recommended ArthaAI solutions.
          </p>
          <button type="button" onClick={handleSubmit} className="premium-button mt-6 inline-flex">
            Analyze My Business
          </button>
        </div>
      </div>
    </div>
  )
}
