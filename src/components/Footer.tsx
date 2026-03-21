import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="section-shell grid gap-8 md:grid-cols-5">
        <div>
          <h3 className="text-lg font-bold text-white">ArthaAI</h3>
          <p className="mt-2 text-sm text-slate-400">AI execution partner for ambitious small businesses.</p>
          <p className="mt-3 text-xs text-slate-500">Automations, insights, and scalable systems for growth.</p>
        </div>
        <div>
          <p className="font-semibold text-white">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/industry" className="transition hover:text-white">
                Industry
              </Link>
            </li>
            <li>
              <Link href="/assessment" className="transition hover:text-white">
                Assessment
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">All Programs</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/services/ai-ready-websites" className="transition hover:text-white">
                AI Ready Websites
              </Link>
            </li>
            <li>
              <Link href="/services/digital-marketing-automation" className="transition hover:text-white">
                Lead Generation Automation
              </Link>
            </li>
            <li>
              <Link href="/services/ai-consulting" className="transition hover:text-white">
                AI Consulting
              </Link>
            </li>
            <li>
              <Link href="/services/business-process-automation" className="transition hover:text-white">
                Business Process Automation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-semibold text-white">Social Media</p>
          <div className="mt-3 space-y-2 text-sm text-slate-400">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="block text-cyan-300">
              LinkedIn
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="block text-cyan-300">
              Instagram
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="block text-cyan-300">
              YouTube
            </a>
            <p className="text-sm text-slate-400">hello@dharmaai.io</p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-white">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/privacy-policy" className="transition hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link href="/sitemap" className="transition hover:text-white">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="transition hover:text-white">
                About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="section-shell mt-8 border-t border-white/10 pt-6 text-sm text-slate-400">
        Copyright {new Date().getFullYear()} ArthaAI. All rights reserved.
      </div>
    </footer>
  )
}
