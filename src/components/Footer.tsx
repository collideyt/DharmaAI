import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="section-shell grid gap-8 md:grid-cols-5">
        <div>
          <h3 className="text-lg font-bold text-white">DharmaAI</h3>
          <p className="mt-2 text-sm text-slate-400">AI execution partner for ambitious small businesses.</p>
          <p className="mt-3 text-xs text-slate-500">Automations, insights, and scalable systems for growth.</p>
        </div>
        <div>
          <p className="font-semibold text-white">About DharmaAI</p>
          <p className="mt-3 text-xs text-slate-500">Strategy, delivery, and AI enablement for modern teams.</p>
        </div>
        <div>
          <Link href="/services" className="font-semibold text-white">
            Services
          </Link>
          <p className="mt-3 text-xs text-slate-500">Audits, workflows, and AI integrations tailored to you.</p>
        </div>
        <div>
          <Link href="/resources" className="font-semibold text-white">
            Resources
          </Link>
          <p className="mt-3 text-xs text-slate-500">Guides, playbooks, and best practices for AI adoption.</p>
        </div>
        <div className="space-y-2">
          <p className="font-semibold text-white">Contact</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block text-sm text-cyan-300">
            LinkedIn
          </a>
          <p className="text-sm text-slate-400">hello@dharmaai.io</p>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright {new Date().getFullYear()} DharmaAI. All rights reserved.
      </div>
    </footer>
  )
}
