'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageSquareMore, Bot, Filter, Workflow, BarChart3 } from 'lucide-react'

const steps = [
  { title: 'Customer Inquiry', description: 'A visitor reaches out through your website, ads, or WhatsApp.', icon: MessageSquareMore },
  { title: 'AI Chatbot Response', description: 'An AI assistant responds instantly and captures the right context.', icon: Bot },
  { title: 'Lead Qualification', description: 'The conversation is scored based on intent, fit, and urgency.', icon: Filter },
  { title: 'CRM Automation', description: 'Qualified leads are routed into your CRM and follow-up sequences.', icon: Workflow },
  { title: 'Sales Dashboard', description: 'Leadership sees performance, response times, and pipeline lift.', icon: BarChart3 },
] as const

export default function AIWorkflowVisualizer() {
  return (
    <section className="relative py-20">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="mb-10 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Workflow Visualizer</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">How ArthaAI turns conversations into qualified pipeline</h2>
          <p className="mt-4 text-slate-300">
            We connect customer touchpoints, automation layers, and reporting so the business runs faster without adding manual overhead.
          </p>
        </div>
        <div className="flex items-stretch justify-between gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.title} className="flex flex-col xl:flex-row xl:items-center">
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex-1 min-w-[180px] max-w-[220px] min-h-[220px] flex flex-col justify-between bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 transition hover:-translate-y-1"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex items-center justify-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                        <Icon size={20} />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{step.description}</p>
                  </div>
                </motion.article>
                {index < steps.length - 1 ? (
                  <div className="flex justify-center py-3 xl:px-3 xl:py-0">
                    <ArrowRight className="hidden text-cyan-300/70 xl:block" size={20} />
                    <ArrowRight className="rotate-90 text-cyan-300/70 xl:hidden" size={20} />
                  </div>
                ) : null}
              </div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
