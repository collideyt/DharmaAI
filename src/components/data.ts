import { Bot, BrainCircuit, MessagesSquare, PenSquare, Building2, GraduationCap, ShoppingCart } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type NavLink = { label: string; href: string }
export type Service = { title: string; description: string; icon: LucideIcon }
export type CaseStudy = { title: string; result: string; icon: LucideIcon }

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'AI Resources', href: '/resources' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'Contact', href: '/contact' },
]

export const services: Service[] = [
  {
    title: 'AI Readiness Audit',
    description: 'Evaluate whether businesses have the data, systems, and processes needed to adopt AI successfully.',
    icon: BrainCircuit,
  },
  {
    title: 'AI Lead Automation',
    description: 'Automate lead generation using chatbots, CRM integrations, and AI workflows.',
    icon: MessagesSquare,
  },
  {
    title: 'Digital AI Avatars',
    description: 'Human-like AI avatars that greet visitors and explain services.',
    icon: Bot,
  },
  {
    title: 'AI Content Engine',
    description: 'AI-powered content creation for blogs, ads, and social media.',
    icon: PenSquare,
  },
]

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
