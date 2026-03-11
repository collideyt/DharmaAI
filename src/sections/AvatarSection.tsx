'use client'

import { motion } from 'framer-motion'

export default function AvatarSection() {
  return (
    <section className="py-16">
      <div className="section-shell grid items-center gap-8 md:grid-cols-2">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Avatar</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Meet Arjun - Your AI Strategy Guide</h2>
        <p className="mt-3 max-w-xl text-slate-300">
          Arjun is your always-on AI advisor that explains opportunities, walks prospects through your offer, and supports your team during discovery calls.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass-card aspect-video rounded-2xl p-6"
      >
        <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-cyan-300/40 bg-slate-900/50 text-center text-sm text-slate-300">
          <div>
            <p>Video Placeholder</p>
            <p>AI Avatar Demo</p>
          </div>
        </div>
      </motion.div>
      </div>
    </section>
  )
}
