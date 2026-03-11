import ServicesSection from '../../sections/ServicesSection'

export default function Page() {
  return (
    <section className="py-10">
      <div className="section-shell mb-8">
        <h1 className="text-4xl font-bold text-white">Services</h1>
        <p className="mt-3 text-slate-300">DharmaAI delivers end-to-end execution, not just AI strategy slides.</p>
      </div>
      <ServicesSection />
    </section>
  )
}
