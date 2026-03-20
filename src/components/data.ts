import {
  BrainCircuit,
  Building2,
  Globe,
  GraduationCap,
  MapPinned,
  Megaphone,
  MessageSquareText,
  MessagesSquare,
  ShoppingCart,
  Workflow,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavLink = { label: string; href: string }
export type Service = {
  title: string
  pageTitle?: string
  slug: string
  description: string
  summary: string
  highlights: string[]
  icon: LucideIcon
}
export type CaseStudy = { title: string; result: string; icon: LucideIcon }

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    title: 'AI Ready Websites',
    slug: 'ai-ready-websites',
    description: 'AI-optimized websites for existing sites and new builds, with lead capture and WhatsApp integration.',
    summary: 'Build or upgrade your website so it works as a practical AI-ready front door for your business.',
    highlights: ['AI optimized websites - Current and New', 'lead generation setup', 'WhatsApp integration'],
    icon: Globe,
  },
  {
    title: 'Digital Marketing Automation',
    pageTitle: 'Lead Generation Automation',
    slug: 'digital-marketing-automation',
    description: 'Automate lead capture, qualification, and follow-up across your digital channels.',
    summary: 'Set up reliable lead-generation workflows so prospects do not get lost between interest and follow-up.',
    highlights: ['Lead capture workflows', 'Follow-up automation', 'Handoffs into your sales process'],
    icon: MessagesSquare,
  },
  {
    title: 'Digital Directories Listing',
    slug: 'digital-directories-listing',
    description: 'Improve discoverability with accurate business listings across key digital directories.',
    summary: 'Keep your business presence clean, consistent, and easier to find across the web.',
    highlights: ['Directory profile setup', 'Listing consistency', 'Better local visibility'],
    icon: MapPinned,
  },
  {
    title: 'Automate Digital Marketing',
    slug: 'automate-digital-marketing',
    description: 'Streamline repetitive campaign and content tasks with practical marketing automation.',
    summary: 'Reduce manual marketing work by automating repetitive tasks without making your brand feel robotic.',
    highlights: ['Campaign workflows', 'Content scheduling', 'Simple performance loops'],
    icon: Megaphone,
  },
  {
    title: 'Digital Communication Automation',
    slug: 'digital-communication-automation',
    description: 'Automate messaging workflows across email, chat, and WhatsApp to keep responses moving.',
    summary: 'Use automation to respond faster, keep conversations warm, and guide people toward action.',
    highlights: ['WhatsApp and email flows', 'Instant response journeys', 'Lead nurturing sequences'],
    icon: MessageSquareText,
  },
  {
    title: 'AI Consulting',
    slug: 'ai-consulting',
    description: 'Get clear, practical guidance on where AI fits and what to implement first.',
    summary: 'Cut through noise and focus on the AI use cases that actually make sense for your business.',
    highlights: ['Opportunity mapping', 'Tool recommendations', 'Implementation roadmap'],
    icon: BrainCircuit,
  },
  {
    title: 'Business Process Automation',
    slug: 'business-process-automation',
    description: 'Reduce manual work by automating repetitive internal business processes.',
    summary: 'Save time and reduce operational friction by automating the repeatable parts of your workflow.',
    highlights: ['Workflow mapping', 'Task automation', 'Operational efficiency gains'],
    icon: Workflow,
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const caseStudies: CaseStudy[] = [
  {
    title: 'Real Estate Agency',
    result: 'AI chatbot increased leads by 3x.',
    icon: Building2,
  },
  {
    title: 'Online Coaching Business',
    result: 'AI onboarding assistant reduced support time by 60%.',
    icon: GraduationCap,
  },
  {
    title: 'Ecommerce Brand',
    result: 'AI product recommendation system increased sales.',
    icon: ShoppingCart,
  },
]
