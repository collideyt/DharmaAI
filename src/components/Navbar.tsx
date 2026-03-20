'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navLinks } from './data'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)

  const linkStyle = (href: string) =>
    `text-sm transition ${pathname === href ? 'text-cyan-300' : 'text-slate-200 hover:text-white'}`

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < 80) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setIsVisible(true)
  }, [pathname])

  return (
    <header
      className={`sticky inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/50 backdrop-blur-md transition-transform duration-300 ${
        isVisible || open ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="section-shell flex h-[var(--navbar-height)] items-center justify-between py-4">
        <Link href="/" className="text-xl font-extrabold text-white">
          Dharma<span className="text-gradient">AI</span>
        </Link>
        <div className="hidden items-center gap-9 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkStyle(link.href)}>
              {link.label}
            </Link>
          ))}
          <Link href="/assessment" className="premium-button inline-flex">
            Get AI Audit
          </Link>
        </div>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={20} />
        </button>
      </nav>
      <Dialog open={open} onClose={setOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/60">
          <DialogPanel className="ml-auto h-full w-72 border-l border-white/10 bg-slate-950/70 p-6 backdrop-blur-xl">
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
              <Link href="/assessment" onClick={() => setOpen(false)} className="premium-button mt-2 inline-flex">
                Get AI Audit
              </Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  )
}
