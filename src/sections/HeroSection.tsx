'use client'

'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const floating = ['top-24 left-[8%] h-16 w-16', 'top-44 right-[14%] h-10 w-10', 'bottom-20 left-[16%] h-12 w-12']

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.2),transparent_38%),radial-gradient(circle_at_80%_10%,rgba(99,102,241,0.38),transparent_34%)]" />
      {floating.map((cls, i) => (
        <motion.div
          key={cls}
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
          className={`absolute ${cls} rounded-full bg-white/10 blur-sm`}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-shell relative z-10 text-center"
      >
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Transform Your Business with AI
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          DharmaAI helps businesses automate operations, generate leads, and scale faster using artificial intelligence.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/assessment" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110">
            Get AI Audit
          </Link>
          <Link href="/services" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10">
            Explore Services
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
