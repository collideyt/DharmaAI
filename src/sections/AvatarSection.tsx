'use client'

import { motion } from 'framer-motion'
import { Bot, MessageSquareText, Sparkles, Video } from 'lucide-react'

export default function AvatarSection() {
  // Add a direct video URL or YouTube/Vimeo link here when the avatar welcome video is ready.
  const videoSrc: string = ''
  const isDirectVideo = /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoSrc)
  const isEmbeddable = /youtube\.com|youtu\.be|vimeo\.com/i.test(videoSrc)

  const embedUrl = (() => {
    if (!videoSrc || !isEmbeddable) return ''

    if (videoSrc.includes('youtu.be/')) {
      const id = videoSrc.split('youtu.be/')[1]?.split(/[?&]/)[0]
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }

    if (videoSrc.includes('youtube.com/watch')) {
      const url = new URL(videoSrc)
      const id = url.searchParams.get('v')
      return id ? `https://www.youtube.com/embed/${id}` : ''
    }

    if (videoSrc.includes('vimeo.com/')) {
      const id = videoSrc.split('vimeo.com/')[1]?.split(/[?&/]/)[0]
      return id ? `https://player.vimeo.com/video/${id}` : ''
    }

    return videoSrc
  })()

  return (
    <section className="flex min-h-[calc(100dvh-var(--navbar-height))] items-center py-16">
      <motion.div
        className="section-shell grid w-full max-w-[1080px] items-center gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,0.98fr)]"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
            <Sparkles className="h-4 w-4" />
            Welcome Experience
          </div>
          <div className="space-y-4">
            <h2 className="max-w-md text-3xl font-bold leading-tight text-white md:text-[2.8rem]">
              Ashutosh welcomes visitors with an AI intro.
            </h2>
            <p className="max-w-lg text-base leading-7 text-slate-300">
              A short, human-first welcome that introduces ArthaAI and points people to the next step.
            </p>
          </div>
          <div className="grid max-w-[520px] gap-4 sm:grid-cols-2">
            <div className="glass-card rounded-2xl p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-200">
                <Bot className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Founder-led introduction</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Builds trust fast with a real face and voice.
              </p>
            </div>
            <div className="glass-card rounded-2xl p-5">
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-400/15 text-purple-200">
                <MessageSquareText className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">Clear next step</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Guides visitors to the assessment or contact page.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="glass-card w-full max-w-[600px] justify-self-center overflow-hidden rounded-[28px] p-3 lg:justify-self-end"
        >
          <div className="relative min-h-[390px] overflow-hidden rounded-[22px] border border-cyan-300/20 bg-slate-950/60">
            {videoSrc && isDirectVideo ? (
              <video
                className="h-full w-full object-cover"
                src={videoSrc}
                controls
                preload="metadata"
              />
            ) : videoSrc && embedUrl ? (
              <iframe
                className="h-full w-full"
                src={embedUrl}
                title="AI Avatar Demo"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            ) : (
              <div className="relative flex h-full min-h-[390px] flex-col justify-between p-5 sm:p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.14),transparent_30%),radial-gradient(circle_at_80%_30%,rgba(168,85,247,0.14),transparent_34%)]" />
                <div className="relative flex flex-wrap items-center justify-between gap-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                    <Video className="h-4 w-4 text-cyan-200" />
                    Avatar Preview
                  </div>
                  <div className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-medium text-emerald-100">
                    Ready for video embed
                  </div>
                </div>

                <div className="relative flex flex-1 items-center justify-center py-6">
                  <div className="absolute h-52 w-52 rounded-full border border-cyan-300/15" />
                  <div className="absolute h-40 w-40 rounded-full border border-purple-300/20" />
                  <motion.div
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative flex h-32 w-32 items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),rgba(34,211,238,0.18),rgba(15,23,42,0.92))] shadow-[0_24px_80px_rgba(34,211,238,0.18)]"
                  >
                    <div className="absolute inset-3 rounded-full border border-white/10" />
                    <span className="text-3xl font-black tracking-[0.2em] text-white">A</span>
                  </motion.div>
                </div>

                <div className="relative space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Welcome script</p>
                    <p className="mt-3 text-[15px] leading-7 text-slate-100">
                      Hi, I&apos;m Ashutosh. Welcome to ArthaAI. Let&apos;s find the simplest next AI step for your
                      business.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Role</p>
                      <p className="mt-2 text-sm text-white">Founder and AI guide</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Purpose</p>
                      <p className="mt-2 text-sm text-white">Warm welcome, clear next step</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
