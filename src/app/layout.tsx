import { Plus_Jakarta_Sans } from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Chatbot from '../components/Chatbot'
import WhatsAppButton from '../components/WhatsAppButton'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DharmaAI',
  description: 'DharmaAI helps small businesses adopt AI in the AI-first economy.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={jakarta.className} suppressHydrationWarning>
        <div className="min-h-screen text-slate-100">
          <Navbar />
          <main className="pt-[72px]">{children}</main>
          <Footer />
          <Chatbot />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
