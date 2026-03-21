import { MessageCircleMore } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 p-0 text-slate-950 shadow-xl transition-transform duration-200 hover:scale-105 hover:shadow-2xl sm:bottom-5 sm:right-5"
      aria-label="Chat with Artha AI on WhatsApp"
    >
      <span className="pointer-events-none absolute right-16 top-1/2 w-max -translate-y-1/2 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        Chat with Artha AI.
      </span>
      <MessageCircleMore size={20} />
    </a>
  )
}
