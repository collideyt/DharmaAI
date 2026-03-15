import AIQuiz from '../../components/AIQuiz'

export default function AIAssessmentPage() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_35%)]" />
      <div className="section-shell relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Assessment</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">AI Readiness Assessment Tool</h1>
          <p className="mt-4 text-lg text-slate-300">
            Benchmark your business across lead capture, support automation, AI adoption, and operational intelligence.
          </p>
        </div>
        <div className="mt-10">
          <AIQuiz />
        </div>
      </div>
    </section>
  )
}
