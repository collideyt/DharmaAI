'use client'

import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'

const resources = [
  { category: 'AI Tools Directory', title: 'ChatGPT' },
  { category: 'AI Tools Directory', title: 'Midjourney' },
  { category: 'AI Tools Directory', title: 'Zapier' },
  { category: 'AI Tools Directory', title: 'Make' },
  { category: 'AI Tools Directory', title: 'Notion AI' },
  { category: 'Prompt Library', title: 'Marketing prompt framework' },
  { category: 'Prompt Library', title: 'Sales objection handling prompt' },
  { category: 'Prompt Library', title: 'Customer support triage prompt' },
  { category: 'Automation Guides', title: 'How to automate lead capture' },
  { category: 'Automation Guides', title: 'How to build AI chatbots' },
  { category: 'Automation Guides', title: 'How to generate content with AI' },
]

export default function Page() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(
    () => resources.filter((item) => `${item.category} ${item.title}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  )

  return (
    <section className="section-shell py-16">
      <h1 className="text-4xl font-bold text-white">AI Resources</h1>
      <p className="mt-3 text-slate-300">Tools, prompts, and automation guides for teams entering the AI-first economy.</p>
      <div className="glass-card mt-8 flex items-center gap-3 rounded-xl px-4 py-3">
        <Search size={18} className="text-slate-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search resources..."
          className="w-full bg-transparent text-white outline-none placeholder:text-slate-400"
        />
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {filtered.map((item) => (
          <article key={`${item.category}-${item.title}`} className="glass-card rounded-xl p-5">
            <p className="text-xs uppercase tracking-[0.16em] text-cyan-300">{item.category}</p>
            <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}
