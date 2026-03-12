'use client'

import { useMemo, useState } from 'react'
import { MessageCircle, Send, Sparkles } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

type ChatRole = 'user' | 'bot'

type ChatMessage = {
  role: ChatRole
  text: string
}

const scriptedReplies: Record<string, string> = {
  default:
    'DharmaAI helps automate lead capture, customer support, and marketing workflows using AI-powered systems.',
  marketing:
    'For marketing, DharmaAI can automate campaign content, ad optimization, and lead nurturing sequences.',
  sales:
    'For sales, we set up AI lead scoring, CRM automation, and follow-up workflows that improve conversion rates.',
  support:
    'For support, we deploy AI chatbots and helpdesk automations to resolve customer issues faster.',
}

function resolveReply(input: string) {
  const text = input.toLowerCase()
  if (text.includes('marketing')) return scriptedReplies.marketing
  if (text.includes('sales') || text.includes('crm')) return scriptedReplies.sales
  if (text.includes('support') || text.includes('customer')) return scriptedReplies.support
  return scriptedReplies.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('How can AI help my business?')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'user',
      text: 'How can AI help my business?',
    },
    {
      role: 'bot',
      text: scriptedReplies.default,
    },
  ])

  const canSend = useMemo(() => input.trim().length > 0, [input])

  const onSend = () => {
    const nextInput = input.trim()
    if (!nextInput) return

    const reply = resolveReply(nextInput)

    setMessages((prev) => [
      ...prev,
      { role: 'user', text: nextInput },
      { role: 'bot', text: reply },
    ])
    setInput('')
  }

  return (
    <div className="fixed bottom-24 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10 }}
            className="glass-card mb-3 w-[22rem] rounded-2xl p-4 shadow-2xl"
          >
            <p className="mb-3 text-sm font-semibold text-white">DharmaAI Assistant</p>
            <div className="max-h-64 space-y-2 overflow-y-auto pr-1 text-sm">
              {messages.map((message, index) => (
                <p
                  key={`${message.role}-${index}`}
                  className={`rounded-lg p-2 ${
                    message.role === 'user' ? 'bg-white/10 text-slate-200' : 'bg-indigo-500/30 text-cyan-100'
                  }`}
                >
                  {message.role === 'user' ? 'User: ' : 'Bot: '}
                  {message.text}
                </p>
              ))}
            </div>

            <div className="mt-3 flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') onSend()
                }}
                placeholder="Ask about AI for your business"
                className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
              />
              <button
                type="button"
                onClick={onSend}
                disabled={!canSend}
                className="rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-400 px-3 py-2 text-slate-950 disabled:opacity-60"
                aria-label="Send message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg"
      >
        <Sparkles size={16} />
        Ask DharmaAI
        <MessageCircle size={16} />
      </button>
    </div>
  )
}
