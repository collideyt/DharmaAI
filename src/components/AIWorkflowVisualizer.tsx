'use client'

import { motion } from 'framer-motion'
import type { LucideIcon } from 'lucide-react'
import { Bot, ChartSpline, CircleCheckBig, MessageSquare, Workflow } from 'lucide-react'

type WorkflowStep = {
  title: string
  description: string
  icon: LucideIcon
}

const workflowSteps: WorkflowStep[] = [
  {
    title: 'Customer Inquiry',
    description: 'Website visitor or incoming lead',
    icon: MessageSquare,
  },
  {
    title: 'AI Chatbot Response',
    description: 'Responds instantly using AI',
    icon: Bot,
  },
  {
    title: 'Lead Qualification',
    description: 'AI filters high quality leads',
    icon: CircleCheckBig,
  },
  {
    title: 'CRM Automation',
    description: 'Lead pushed to CRM',
    icon: Workflow,
  },
  {
    title: 'Sales Dashboard',
    description: 'Insights and analytics',
    icon: ChartSpline,
  },
]

export default function AIWorkflowVisualizer() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-3">
      {workflowSteps.map((step, index) => {
        const Icon = step.icon

        return (
          <div key={step.title} className="flex flex-col items-center lg:flex-row lg:flex-1">
            <motion.div
              className="w-full rounded-2xl bg-gradient-to-br from-cyan-400/60 via-sky-500/40 to-indigo-500/60 p-[1px]"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-full rounded-2xl border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-cyan-900/20 backdrop-blur-sm">
                <div className="mb-3 inline-flex rounded-xl bg-cyan-400/15 p-2 text-cyan-200">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{step.description}</p>
              </div>
            </motion.div>

            {index < workflowSteps.length - 1 ? (
              <div className="my-2 h-6 w-px bg-gradient-to-b from-cyan-400/80 to-indigo-500/80 lg:mx-2 lg:my-0 lg:h-px lg:w-8 lg:bg-gradient-to-r" />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
