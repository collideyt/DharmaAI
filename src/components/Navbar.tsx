'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from './data'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkStyle = (href: string) =>
    `text-sm transition ${pathname === href ? 'text-cyan-300' : 'text-slate-200 hover:text-white'}`

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <nav className="section-shell flex h-[72px] items-center justify-between py-4">
        <Link href="/" className="text-xl font-extrabold text-white">
          Dharma<span className="text-gradient">AI</span>
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/assessment"
            className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:brightness-110"
          >
            Get AI Audit
          </Link>
        </div>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>
      <Dialog open={open} onClose={setOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/60">
          <DialogPanel className="ml-auto h-full w-72 border-l border-white/10 bg-slate-950 p-6">
            <div className="mb-8 flex items-center justify-between">
              <p className="font-semibold text-white">DharmaAI</p>
              <button onClick={() => setOpen(false)} className="text-white" aria-label="Close menu">
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={linkStyle(link.href)} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/assessment"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950"
              >
                Get AI Audit
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}
