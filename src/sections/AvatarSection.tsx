'use client'

import { motion } from 'framer-motion'

export default function AvatarSection() {
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
    <section className="py-16">
      <div className="section-shell grid items-center gap-8 md:grid-cols-2">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">AI Avatar</p>
        <h2 className="text-3xl font-bold text-white md:text-4xl">Meet Arjun - Your AI Strategy Guide</h2>
        <p className="mt-3 max-w-xl text-slate-300">
          Arjun is your always-on AI advisor that explains opportunities, walks prospects through your offer, and supports your team during discovery calls.
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="glass-card aspect-video rounded-2xl p-2"
      >
        <div className="relative h-full overflow-hidden rounded-xl border border-cyan-300/40 bg-slate-900/50">
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
            <div className="flex h-full items-center justify-center text-center text-sm text-slate-300">
              <div>
                <p>Video Placeholder</p>
                <p>AI Avatar Demo</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
      </div>
    </section>
  )
}
