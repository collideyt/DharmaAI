import AIQuiz from '../../components/AIQuiz'

export default function AIAssessmentPage() {
  return (
    <>
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.18),transparent_35%)]" />
        <div className="section-shell relative z-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">AI Audit · Report · Free</p>
            <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">AI Readiness Assessment</h1>
            <p className="mt-4 text-lg text-slate-300">
              A structured diagnostic that turns your answers into an AI maturity score and a clear action plan.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-8">
            <div className="premium-card rounded-[30px] p-6 sm:p-8 md:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                    AI Readiness Diagnostic Test
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    Questionnaire designed for 20 focused questions
                  </h2>
                </div>
                <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                  First impression · Trust · Clear positioning
                </span>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                Answer each step to receive a tailored AI readiness report for your business systems.
              </p>
              <div className="mt-8">
                <AIQuiz />
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5 sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                AI Maturity Score Template
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Result levels: Low · Medium · High</h3>
              <p className="mt-3 text-sm text-slate-300">
                This section is a template preview of the report layout. Actual scores and insights appear after
                submission.
              </p>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Detailed PDF</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Generated after email ID and mobile number submission.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-300">Category Scores</p>
                  <p className="mt-2 text-sm text-slate-300">
                    Lead automation, support, marketing AI, and operations.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button type="button" className="outline-button inline-flex">
                  View Sample Report
                </button>
              </div>
            </div>

            <div className="glass-card rounded-[28px] p-5 sm:p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Consultation Booking
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">Book a strategy call</h3>
              <p className="mt-3 text-sm text-slate-300">
                Use the calendar booking option to discuss next steps and get a custom implementation roadmap.
              </p>
              <div className="mt-6">
                <button type="button" className="premium-button inline-flex">
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
