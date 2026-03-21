'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="flex min-h-[calc(100dvh-var(--navbar-height))] items-center py-16">
      <motion.div
        className="section-shell w-full"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="premium-card mx-auto max-w-5xl overflow-hidden rounded-[30px] px-6 py-10 sm:px-10 sm:py-14">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              <Sparkles className="h-4 w-4" />
              Next Step
            </div>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
              Take the free AI diagnostic test and see where your fastest wins are hiding.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-200">
              In a few minutes, visitors can understand how ready their business is for AI, where automation can help
              first, and what the smartest next move looks like.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/assessment" className="premium-button inline-flex gap-2">
                Take Free AI Diagnostic Test
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="outline-button inline-flex gap-2">
                Book a Strategy Call
                <CalendarDays className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Fast</p>
                <p className="mt-2 text-sm leading-6 text-white">Short diagnostic flow designed for quick completion.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Useful</p>
                <p className="mt-2 text-sm leading-6 text-white">Turns curiosity into a concrete AI readiness conversation.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Actionable</p>
                <p className="mt-2 text-sm leading-6 text-white">Creates a clear path toward implementation, not just inspiration.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
