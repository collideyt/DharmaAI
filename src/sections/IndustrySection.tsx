'use client'

import { motion } from 'framer-motion'
import { industries } from '../components/data'
import IndustryCard from '../components/IndustryCard'

const professionals = industries.filter((industry) => industry.category === 'Professionals')
const smes = industries.filter((industry) => industry.category === 'SMEs')

export default function IndustrySection() {
  return (
    <section className="py-16">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Industry</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Industries ready for practical AI adoption</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          We focus on workflows that drive measurable outcomes for professionals and growing SMEs.
        </p>

        <div className="mt-10 space-y-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">Professionals</p>
            <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {professionals.map((industry) => (
                <IndustryCard key={industry.slug} industry={industry} />
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">SMEs</p>
            <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {smes.map((industry) => (
                <IndustryCard key={industry.slug} industry={industry} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
