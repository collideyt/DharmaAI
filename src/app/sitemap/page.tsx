import Link from 'next/link'
import { industries, navLinks, services } from '../../components/data'

export default function SitemapPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell max-w-4xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">Sitemap</p>
        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">Sitemap</h1>
        <p className="mt-4 text-lg text-slate-300">Quick access to the main sections and services on ArthaAI.</p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="glass-card rounded-[24px] p-6">
            <h2 className="text-xl font-semibold text-white">Main Pages</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-[24px] p-6">
            <h2 className="text-xl font-semibold text-white">Services</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="transition hover:text-white">
                    {service.pageTitle ?? service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-[24px] p-6">
            <h2 className="text-xl font-semibold text-white">Industries</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {industries.map((industry) => (
                <li key={industry.slug}>
                  <Link href={`/industry/${industry.slug}`} className="transition hover:text-white">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
