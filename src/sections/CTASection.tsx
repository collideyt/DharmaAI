 'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="premium-card relative overflow-hidden rounded-[30px] p-8 md:p-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.18),rgba(139,92,246,0.12),transparent_60%)]" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Ready to Build Your AI Advantage?</h2>
            <p className="mt-3 text-slate-200">
              Start with an AI Readiness Audit and get a practical plan for implementation.
            </p>
            <Link href="/assessment" className="premium-button mt-6 inline-flex">
              Get AI Audit
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
