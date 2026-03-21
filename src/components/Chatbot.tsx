'use client'

import { useEffect, useRef, useState } from 'react'
import { MessageCircle, Sparkles, Send, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type ChatRole = 'user' | 'bot'

type ChatMessage = {
  role: ChatRole
  text: string
}

const defaultMessages: ChatMessage[] = [
  { role: 'user', text: 'How can AI help my business?' },
  {
    role: 'bot',
    text: 'ArthaAI helps automate operations, generate leads, and improve customer experiences using AI.',
  },
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(defaultMessages)
  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  const handleSend = () => {
    const trimmed = input.trim()
    if (!trimmed) return
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setInput('')
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: 'ArthaAI helps automate operations, generate leads, and improve customer experiences using AI.',
        },
      ])
    }, 500)
  }

  useEffect(() => {
    if (!open) return
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, open])

  useEffect(() => {
    if (!open) {
      setMessages(defaultMessages)
      setInput('')
    }
  }, [open])

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass-card mb-3 w-80 rounded-2xl p-4 shadow-2xl"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-white">ArthaAI Assistant</p>
              <button onClick={() => setOpen(false)} className="text-slate-300 hover:text-white" aria-label="Close chat">
                <X size={16} />
              </button>
            </div>
            <div className="max-h-56 space-y-2 overflow-y-auto text-sm">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`rounded-lg p-2 ${
                    message.role === 'user'
                      ? 'bg-white/10 text-slate-200'
                      : 'bg-purple-500/30 text-cyan-100'
                  }`}
                >
                  {message.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') handleSend()
                }}
                className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                placeholder="Type a message..."
              />
              <button
                onClick={handleSend}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 text-slate-950"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        className="premium-button inline-flex w-[190px] justify-center gap-2 text-center whitespace-nowrap"
      >
        <Sparkles size={16} />
        {open ? 'Close Chat' : 'Ask ArthaAI'}
        <MessageCircle size={16} />
      </button>
    </div>
  )
}
