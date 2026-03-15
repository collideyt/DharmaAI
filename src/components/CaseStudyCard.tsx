'use client'

import { motion } from 'framer-motion'
import type { CaseStudy } from './data'

export default function CaseStudyCard({ study }: { study: CaseStudy }) {
  const Icon = study.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="premium-card rounded-[26px] p-6 transition-shadow hover:shadow-[0_24px_60px_rgba(2,6,23,0.34)]"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
        <Icon />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-white">{study.title}</h3>
      <p className="mt-2 text-slate-300">{study.result}</p>
    </motion.article>
  )
}
