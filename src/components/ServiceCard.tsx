'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Service } from './data'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return (
    <Link href={`/services/${service.slug}`} className="block h-full">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ duration: 0.35 }}
        viewport={{ once: true }}
        className="premium-card h-full rounded-[26px] p-6 shadow-xl transition-shadow hover:shadow-[0_24px_60px_rgba(2,6,23,0.34)]"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
          <Icon />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white">{service.title}</h3>
        <p className="mt-2 text-slate-300">{service.description}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          Open service page <ArrowRight size={16} />
        </span>
      </motion.article>
    </Link>
  )
}
