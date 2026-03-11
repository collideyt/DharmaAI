'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { Service } from './data'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="glass-card rounded-2xl p-6 shadow-xl"
    >
      <Icon className="text-cyan-300" />
      <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
      <p className="mt-2 text-slate-300">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
        Learn more <ArrowRight size={16} />
      </span>
    </motion.article>
  )
}
