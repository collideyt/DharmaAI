import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="section-shell">
        <div className="premium-card relative overflow-hidden rounded-[30px] p-8 md:p-10">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_56%)]" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold text-white">Ready to Build Your AI Advantage?</h2>
            <p className="mt-3 text-slate-200">
              Start with an AI Readiness Audit and get a practical plan for implementation.
            </p>
            <Link href="/assessment" className="premium-button mt-6 inline-flex">
              Get AI Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
