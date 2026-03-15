'use client'

import { useEffect, useState } from 'react'
import { LoaderCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const messages = [
  'Scanning workflows...',
  'Evaluating automation opportunities...',
  'Calculating AI readiness score...',
]

export default function AIAnalyzing() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length)
    }, 650)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      className="premium-card relative overflow-hidden rounded-[28px] p-8 text-center"
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10">
        <LoaderCircle className="h-10 w-10 animate-spin text-cyan-300" />
      </div>
      <h2 className="mt-6 text-3xl font-bold text-white">Analyzing Your Business...</h2>
      <p className="mt-3 text-slate-300">
        Our AI engine is reviewing your current systems and uncovering the fastest path to automation.
      </p>
      <div className="mt-8 space-y-3 text-left">
        {messages.map((message, index) => (
          <div
            key={message}
            className={`rounded-2xl border px-4 py-3 text-sm transition-all ${
              index === messageIndex
                ? 'border-cyan-300/40 bg-cyan-300/10 text-cyan-100 shadow-[0_0_40px_rgba(34,211,238,0.12)]'
                : 'border-white/10 bg-white/5 text-slate-400'
            }`}
          >
            <span className={index === messageIndex ? 'animate-pulse' : ''}>{message}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
