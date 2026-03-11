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
      className="glass-card rounded-2xl p-6"
    >
      <Icon className="text-cyan-300" />
      <h3 className="mt-4 text-xl font-semibold text-white">{study.title}</h3>
      <p className="mt-2 text-slate-300">{study.result}</p>
    </motion.article>
  )
}
