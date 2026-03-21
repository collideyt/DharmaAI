import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getIndustryBySlug, industries } from '../../../components/data'

type IndustryPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }))
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  const Icon = industry.icon

  return (
    <section className="py-12 md:py-16">
      <div className="section-shell max-w-[1040px]">
        <Link href="/industry" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          <ArrowLeft size={16} />
          Back to industry
        </Link>

        <div className="premium-card mt-6 rounded-[30px] p-8 md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
            <Icon />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Industry</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{industry.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{industry.summary}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-[28px] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">How AI can help</h2>
            <p className="mt-3 text-slate-300">{industry.help}</p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {industry.outcomes.map((outcome) => (
                <li key={outcome} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {outcome}
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card rounded-[28px] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Ready for an AI roadmap?</h2>
            <p className="mt-3 text-slate-300">
              Start with the free AI diagnostic test, or reach out if you want a tailored industry walkthrough.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/assessment" className="premium-button inline-flex gap-2">
                Take Free AI Diagnostic Test
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="outline-button inline-flex gap-2">
                Contact ArthaAI
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
