import CaseStudiesSection from '../../sections/CaseStudiesSection'

export default function Page() {
  return (
    <section className="py-10">
      <div className="section-shell mb-8">
      <h1 className="text-4xl font-bold text-white">Case Studies</h1>
      <p className="mt-3 text-slate-300">Examples of tangible outcomes delivered through focused AI execution.</p>
      </div>
      <CaseStudiesSection />
    </section>
  )
}
