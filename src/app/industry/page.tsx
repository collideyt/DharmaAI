import IndustrySection from '../../sections/IndustrySection'

export default function Page() {
  return (
    <section className="py-10">
      <div className="section-shell mb-8">
        <h1 className="text-4xl font-bold text-white">Industry</h1>
        <p className="mt-3 text-slate-300">
          Explore practical AI use cases tailored to professional services and growing SMEs.
        </p>
      </div>
      <IndustrySection />
    </section>
  )
}
