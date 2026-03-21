'use client'

import { motion } from 'framer-motion'

export default function HeroSection() {
  const floating = [
    'top-16 left-[6%] h-14 w-14',
    'top-44 right-[12%] h-10 w-10',
    'bottom-24 left-[18%] h-12 w-12',
    'bottom-16 right-[20%] h-8 w-8',
  ]

  return (
    <section className="relative flex min-h-[calc(100dvh-var(--navbar-height))] w-full items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(124,58,237,0.3),transparent_40%),radial-gradient(circle_at_75%_18%,rgba(6,182,212,0.26),transparent_34%),linear-gradient(180deg,rgba(11,15,26,0.6),rgba(11,15,26,0))]" />
      <div className="absolute inset-x-0 top-12 mx-auto h-80 w-[min(78vw,820px)] rounded-full bg-purple-500/15 blur-[130px]" />
      {floating.map((cls, i) => (
        <motion.div
          key={cls}
          animate={{ y: [0, -12, 0], x: [0, 8, 0] }}
          transition={{ duration: 5 + i, repeat: Infinity }}
          className={`absolute ${cls} rounded-full bg-white/10 blur-md`}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="section-shell relative z-10"
      >
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-100 shadow-[0_0_30px_rgba(34,197,94,0.16)]">
            AI Systems for Growth Teams
          </div>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 h-full w-[120%] rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.45),rgba(6,182,212,0.18),transparent_70%)] blur-[90px]" />
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Helping Professionals & Small Businesses Enter the {' '}
              <span className="bg-gradient-to-r from-purple-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                AI Age
              </span>{' '}
            </h1>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            AI Websites  •  Automation  •  Chatbots  •  Digital Growth
          </p>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-b from-transparent to-black/40" />
    </section>
  )
}
