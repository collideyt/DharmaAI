import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="section-shell">
      <div className="glass-card rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white">Ready to Build Your AI Advantage?</h2>
        <p className="mt-3 text-slate-200">
          Start with an AI Readiness Audit and get a practical plan for implementation.
        </p>
        <Link href="/assessment" className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950">
          Get AI Audit
        </Link>
      </div>
      </div>
    </section>
  )
}
