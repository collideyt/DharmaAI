import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="section-shell grid gap-8 md:grid-cols-5">
        <div>
          <h3 className="text-lg font-bold text-white">DharmaAI</h3>
          <p className="mt-2 text-sm text-slate-400">AI execution partner for ambitious small businesses.</p>
        </div>
        <div>
          <p className="font-semibold text-white">About DharmaAI</p>
        </div>
        <div>
          <Link href="/services" className="font-semibold text-white">
            Services
          </Link>
        </div>
        <div>
          <Link href="/resources" className="font-semibold text-white">
            Resources
          </Link>
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
