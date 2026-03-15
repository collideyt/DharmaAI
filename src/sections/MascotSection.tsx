'use client'

import { motion } from 'framer-motion'

export default function MascotSection() {
  return (
    <section className="py-16">
      <motion.div
        className="section-shell grid items-center gap-8 md:grid-cols-2"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass-card rounded-2xl p-2"
        >
          <div className="flex aspect-square items-center justify-center rounded-xl border-indigo-300/40 bg-slate-900/50 text-slate-300">
            AI Monk Placeholder
          </div>
        </motion.div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Mascot</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Meet the AI Monk</h2>
          <p className="mt-3 text-slate-300">
            The AI Monk symbolizes intelligence, calm thinking, and growth. It represents DharmaAI&apos;s approach:
            disciplined strategy and practical execution for small businesses.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
