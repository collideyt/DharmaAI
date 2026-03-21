import Link from 'next/link'
import {
  ArrowRight,
  BriefcaseBusiness,
  Mail,
  MapPin,
  MessageCircleMore,
  Phone,
  Sparkles,
  Target,
  UserRound,
} from 'lucide-react'

const aboutCards = [
  {
    title: 'Mission',
    description: 'Helping SMEs adopt AI with simple, practical solutions they can actually use.',
    icon: Target,
  },
  {
    title: 'Founder',
    description: 'Ashutosh Khadria, entrepreneur and AI adoption advocate.',
    icon: UserRound,
  },
  {
    title: 'Vision',
    description: 'Make AI accessible for small businesses.',
    icon: Sparkles,
  },
]

const contactItems = [
  {
    label: 'Phone',
    value: '+91 90000 00000',
    href: 'tel:+919000000000',
    icon: Phone,
  },
  {
    label: 'Email',
    value: 'hello@dharmaai.io',
    href: 'mailto:hello@dharmaai.io',
    icon: Mail,
  },
  {
    label: 'WhatsApp',
    value: 'Chat on WhatsApp',
    href: 'https://wa.me/919000000000',
    icon: MessageCircleMore,
  },
  {
    label: 'Office Location',
    value: 'Remote-first, serving SMEs across India',
    icon: MapPin,
  },
]

export default function AboutUsPage() {
  return (
    <section className="py-12 md:py-16">
      <div className="section-shell max-w-[1120px]">
        <div className="premium-card relative overflow-hidden rounded-[32px] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(6,182,212,0.14),transparent_32%),radial-gradient(circle_at_85%_16%,rgba(124,58,237,0.16),transparent_34%)]" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
              <Sparkles className="h-4 w-4" />
              About Us
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">About Artha AI</h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              We help SMEs adopt AI through practical systems, thoughtful guidance, and simple next steps that make AI
              feel useful instead of overwhelming.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {aboutCards.map((card) => {
            const Icon = card.icon

            return (
              <article key={card.title} className="glass-card rounded-[28px] p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-white">{card.title}</h2>
                <p className="mt-3 leading-7 text-slate-300">{card.description}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="premium-card rounded-[30px] p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
              <BriefcaseBusiness className="h-4 w-4 text-cyan-200" />
              Careers
            </div>
            <h2 className="mt-6 text-3xl font-bold text-white">Work with Artha AI</h2>
            <p className="mt-4 max-w-xl leading-8 text-slate-300">
              We are building practical AI experiences for small businesses. If you want to collaborate, contribute, or
              explore future roles, start a conversation with us.
            </p>
            <Link href="/contact" className="premium-button mt-8 inline-flex gap-2">
              Reach Out
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="glass-card rounded-[30px] p-8">
            <h2 className="text-3xl font-bold text-white">Contact</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Reach out if you want to talk through your business, AI adoption, or the right starting point.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition-colors hover:border-cyan-300/20">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-sm leading-7 text-white">{item.value}</p>
                  </div>
                )

                return item.href ? (
                  <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
