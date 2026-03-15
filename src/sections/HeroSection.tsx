'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function HeroSection() {
  const floating = ['top-24 left-[8%] h-16 w-16', 'top-44 right-[14%] h-10 w-10', 'bottom-20 left-[16%] h-12 w-12']

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(34,211,238,0.23),transparent_34%),radial-gradient(circle_at_78%_12%,rgba(99,102,241,0.34),transparent_30%),linear-gradient(180deg,rgba(4,8,20,0.3),rgba(4,8,20,0))]" />
      <div className="absolute inset-x-0 top-16 mx-auto h-72 w-[min(80vw,780px)] rounded-full bg-cyan-300/10 blur-[110px]" />
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
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)]">
          AI Systems for Growth Teams
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Turn your business into an AI-powered growth engine
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          DharmaAI helps teams automate operations, capture more leads, and scale client delivery with premium AI systems that feel built for modern startups.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link href="/assessment" className="premium-button inline-flex">
            Get AI Audit
          </Link>
          <Link href="/services" className="outline-button inline-flex">
            Explore Services
          </Link>
        </div>
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {[
            { label: 'Lead Response', value: '<60 sec' },
            { label: 'Automation Wins', value: '4 core flows' },
            { label: 'Deployment Model', value: 'Done-for-you' },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl px-5 py-4 text-left">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
