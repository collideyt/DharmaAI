'use client'

import { caseStudies } from '../components/data'
import CaseStudyCard from '../components/CaseStudyCard'

export default function CaseStudiesSection() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Proof</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Case studies from AI-first implementation</h2>
        <p className="mt-3 max-w-2xl text-slate-300">
          These examples show how AI systems can create measurable lift across support, onboarding, and conversion.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
