import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getServiceBySlug, services } from '../../../components/data'

type ServicePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <section className="py-12 md:py-16">
      <div className="section-shell max-w-[1040px]">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
          <ArrowLeft size={16} />
          Back to services
        </Link>

        <div className="premium-card mt-6 rounded-[30px] p-8 md:p-10">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
            <Icon />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Service</p>
          <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">{service.pageTitle ?? service.title}</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">{service.summary}</p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="glass-card rounded-[28px] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">What this service includes</h2>
            <p className="mt-3 text-slate-300">
              {service.pageTitle ?? service.title} is designed to stay practical, lightweight, and focused on useful
              implementation for SMEs.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200">
              {service.highlights.map((highlight) => (
                <li key={highlight} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card rounded-[28px] p-6 md:p-8">
            <h2 className="text-2xl font-semibold text-white">Need help choosing?</h2>
            <p className="mt-3 text-slate-300">
              Start with the free AI diagnostic test, or reach out directly if you want help selecting the right
              service for your business.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/assessment" className="premium-button inline-flex gap-2">
                Take Free AI Diagnostic Test
                <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="outline-button inline-flex gap-2">
                Contact DharmaAI
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
