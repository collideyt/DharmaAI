import { MessageCircleMore } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919000000000"
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-5 right-5 z-50 rounded-full bg-emerald-500 p-4 text-white shadow-xl"
      aria-label="Chat with DharmaAI on WhatsApp"
    >
      <span className="pointer-events-none absolute right-16 top-1/2 w-max -translate-y-1/2 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition group-hover:opacity-100">
        Chat with DharmaAI.
      </span>
      <MessageCircleMore size={22} />
    </a>
  )
}
