'use client'

import { motion } from 'framer-motion'
import { services } from '../components/data'
import ServiceCard from '../components/ServiceCard'

export default function ServicesSection() {
  return (
    <section className="py-12 md:py-16">
      <motion.div
        className="section-shell max-w-[1120px]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Services</p>
        <h1 className="text-3xl font-bold text-white md:text-4xl">Our Services</h1>
        <p className="mt-3 max-w-2xl text-slate-300">
          Artha AI helps SMEs adopt AI through simple, practical solutions.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
