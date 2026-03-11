'use client'

import { useState } from 'react'
import { MessageCircle, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

export default function Chatbot() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-24 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass-card mb-3 w-80 rounded-2xl p-4 shadow-2xl"
          >
            <p className="mb-3 text-sm font-semibold text-white">DharmaAI Assistant</p>
            <div className="space-y-2 text-sm">
              <p className="rounded-lg bg-white/10 p-2 text-slate-200">User: How can AI help my business?</p>
              <p className="rounded-lg bg-indigo-500/30 p-2 text-cyan-100">
                Bot: DharmaAI helps automate operations, generate leads, and improve customer experiences using AI.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg"
      >
        <Sparkles size={16} />
        Ask DharmaAI
        <MessageCircle size={16} />
      </button>
    </div>
  )
}
