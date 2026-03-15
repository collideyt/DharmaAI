'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MessageSquareMore, Bot, Filter, Workflow, BarChart3 } from 'lucide-react'

export default function HeroSection() {
  const floating = [
    'top-16 left-[6%] h-14 w-14',
    'top-44 right-[12%] h-10 w-10',
    'bottom-24 left-[18%] h-12 w-12',
    'bottom-16 right-[20%] h-8 w-8',
  ]

  const steps = [
    { title: 'Customer Inquiry', description: 'Inbound touchpoint arrives from web, ads, or WhatsApp.', icon: MessageSquareMore },
    { title: 'AI Agent', description: 'Instant response qualifies intent and collects context.', icon: Bot },
    { title: 'Lead Qualification', description: 'Scoring based on fit, urgency, and readiness.', icon: Filter },
    { title: 'CRM Automation', description: 'Qualified leads routed with follow-up sequences.', icon: Workflow },
    { title: 'Revenue Dashboard', description: 'Pipeline, response time, and lift metrics tracked.', icon: BarChart3 },
  ] as const

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.3),transparent_40%),radial-gradient(circle_at_75%_18%,rgba(6,182,212,0.26),transparent_34%),linear-gradient(180deg,rgba(11,15,26,0.6),rgba(11,15,26,0))]" />
      <div className="absolute inset-x-0 top-12 mx-auto h-80 w-[min(78vw,820px)] rounded-full bg-purple-500/15 blur-[130px]" />
      {floating.map((cls, i) => (
        <motion.div
          key={cls}
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
          className={`absolute ${cls} rounded-full bg-white/10 blur-md`}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-shell relative z-10 grid items-center gap-12 md:grid-cols-[1.1fr_0.9fr]"
      >
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100 shadow-[0_0_30px_rgba(34,197,94,0.16)]">
            AI Systems for Growth Teams
          </div>
          <div className="relative mt-6 max-w-2xl">
            <div className="pointer-events-none absolute inset-0 -z-10 h-full w-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.45),rgba(6,182,212,0.18),transparent_70%)] blur-[90px]" />
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Turn your business into an{' '}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI powered
              </span>{' '}
              growth engine
            </h1>
          </div>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Dharma-AI helps teams automate operations, capture more leads, and scale client delivery with premium AI systems that feel built for modern startups.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/assessment" className="premium-button inline-flex">
              Get AI Audit
            </Link>
            <Link href="/services" className="outline-button inline-flex">
              Explore Services
            </Link>
          </div>
          <div className="mt-12 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              { label: 'Lead Response', value: '<60 sec' },
              { label: 'Automation Wins', value: '4 core flows' },
              { label: 'AI Deployment', value: 'Managed' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex min-h-[90px] flex-col justify-center rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-lg"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_top,rgba(124,58,237,0.22),transparent_60%)]" />
          <div className="relative grid gap-5">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={step.title} className="relative">
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                    className="glass-card rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 text-slate-950 shadow-[0_0_18px_rgba(124,58,237,0.4)]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{step.title}</p>
                        <p className="text-xs text-slate-300">{step.description}</p>
                      </div>
                    </div>
                  </motion.div>
                  {index < steps.length - 1 ? (
                    <div className="absolute left-1/2 top-full h-5 w-px -translate-x-1/2 bg-gradient-to-b from-transparent blur-[0.5px] to-cyan-400/70 via-cyan-300/40" />
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
