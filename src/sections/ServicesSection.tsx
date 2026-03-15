'use client'

import { motion } from 'framer-motion'
import { services } from '../components/data'
import ServiceCard from '../components/ServiceCard'

export default function ServicesSection() {
  return (
    <section className="py-16">
      <motion.div
        className="section-shell"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Execution-focused AI services for growth</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          From audit to deployment, DharmaAI builds the systems that help small teams operate like AI-native companies.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
