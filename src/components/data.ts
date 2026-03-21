import {
  BadgeDollarSign,
  BrainCircuit,
  Building2,
  Car,
  Globe,
  GraduationCap,
  LineChart,
  MapPinned,
  Megaphone,
  MessageSquareText,
  MessagesSquare,
  Ruler,
  Scale,
  School,
  ShieldCheck,
  Stethoscope,
  User,
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
export type Industry = {
  title: string
  slug: string
  category: 'Professionals' | 'SMEs'
  summary: string
  help: string
  outcomes: string[]
  icon: LucideIcon
}

export const navLinks: NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Industry', href: '/industry' },
  { label: 'Assessment', href: '/assessment' },
  { label: 'About Us', href: '/about-us' },
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

export const industries: Industry[] = [
  {
    title: 'Chartered Accountant',
    slug: 'chartered-accountant',
    category: 'Professionals',
    summary: 'Automate client onboarding, document checks, and compliance reminders.',
    help: 'AI assistants can triage queries, collect documents, and surface filing deadlines for every client.',
    outcomes: ['Client intake forms auto-filled', 'Document checklist automation', 'Deadline reminder workflows'],
    icon: BadgeDollarSign,
  },
  {
    title: 'Lawyers',
    slug: 'lawyers',
    category: 'Professionals',
    summary: 'Capture leads, organize case intake, and respond faster to routine questions.',
    help: 'AI can summarize intake notes, route matters to the right practice area, and keep clients updated.',
    outcomes: ['Intake forms and conflict checks', 'Case summary drafts', 'Faster client update cycles'],
    icon: Scale,
  },
  {
    title: 'Architects',
    slug: 'architects',
    category: 'Professionals',
    summary: 'Streamline project inquiries, briefs, and design feedback loops.',
    help: 'AI can structure requirements, consolidate feedback, and keep stakeholders aligned.',
    outcomes: ['Brief capture templates', 'Design feedback summaries', 'Status update automation'],
    icon: Ruler,
  },
  {
    title: 'Real Estate Consultants',
    slug: 'real-estate-consultants',
    category: 'Professionals',
    summary: 'Qualify property leads and schedule site visits instantly.',
    help: 'AI can match leads to listings, answer availability questions, and trigger follow-ups.',
    outcomes: ['Lead qualification chat', 'Listing match suggestions', 'Visit scheduling workflows'],
    icon: Building2,
  },
  {
    title: 'Insurance Agents/Consultants',
    slug: 'insurance-agents-consultants',
    category: 'Professionals',
    summary: 'Speed up policy inquiries, renewals, and documentation.',
    help: 'AI can answer coverage questions, gather paperwork, and nudge renewals ahead of expiry.',
    outcomes: ['Quote request intake', 'Renewal reminder sequences', 'Document collection support'],
    icon: ShieldCheck,
  },
  {
    title: 'Portfolio Managers',
    slug: 'portfolio-managers',
    category: 'Professionals',
    summary: 'Keep investor updates timely and onboarding consistent.',
    help: 'AI can draft periodic updates, track client questions, and surface portfolio insights.',
    outcomes: ['Investor update drafts', 'Onboarding checklists', 'FAQ response automation'],
    icon: LineChart,
  },
  {
    title: 'Solopreneurs',
    slug: 'solopreneurs',
    category: 'Professionals',
    summary: 'Automate lead capture and follow-up while you stay focused.',
    help: 'AI can act as a front-desk assistant and keep your pipeline organized.',
    outcomes: ['Lead capture forms', 'Follow-up sequences', 'Scheduling assistance'],
    icon: User,
  },
  {
    title: 'Chartered Accountants & Financial Advisors',
    slug: 'chartered-accountants-financial-advisors',
    category: 'SMEs',
    summary: 'Standardize onboarding and recurring advisory touchpoints.',
    help: 'AI can collect client documents, prompt reviews, and keep compliance timelines visible.',
    outcomes: ['Client onboarding kits', 'Recurring review reminders', 'Document tracking dashboards'],
    icon: BadgeDollarSign,
  },
  {
    title: 'Legal Firms',
    slug: 'legal-firms',
    category: 'SMEs',
    summary: 'Route new matters quickly and reduce admin overhead.',
    help: 'AI can summarize cases, triage priorities, and keep matter timelines on track.',
    outcomes: ['Matter intake triage', 'Case summary briefs', 'Timeline tracking alerts'],
    icon: Scale,
  },
  {
    title: 'Architecture Firms',
    slug: 'architecture-firms',
    category: 'SMEs',
    summary: 'Coordinate multi-stakeholder design workflows efficiently.',
    help: 'AI can consolidate feedback, track deliverables, and streamline approvals.',
    outcomes: ['Requirement gathering forms', 'Feedback consolidation', 'Milestone reminders'],
    icon: Ruler,
  },
  {
    title: 'Real Estate Developers & Brokers',
    slug: 'real-estate-developers-brokers',
    category: 'SMEs',
    summary: 'Manage inquiries, broker coordination, and site visit logistics.',
    help: 'AI can handle pre-qualification, schedule visits, and keep stakeholders updated.',
    outcomes: ['Inquiry qualification', 'Broker update digests', 'Site visit scheduling'],
    icon: Building2,
  },
  {
    title: 'Education & Coaching Institutes',
    slug: 'education-coaching-institutes',
    category: 'SMEs',
    summary: 'Convert inquiries to enrollments with faster responses.',
    help: 'AI can answer course questions, nurture leads, and automate follow-up.',
    outcomes: ['Inquiry response automation', 'Enrollment reminders', 'Student support FAQs'],
    icon: GraduationCap,
  },
  {
    title: 'Healthcare Clinics',
    slug: 'healthcare-clinics',
    category: 'SMEs',
    summary: 'Reduce front-desk load with automated intake and reminders.',
    help: 'AI can handle appointment queries, intake forms, and pre-visit instructions.',
    outcomes: ['Appointment scheduling', 'Pre-visit instructions', 'Follow-up reminders'],
    icon: Stethoscope,
  },
  {
    title: 'Driving Schools',
    slug: 'driving-schools',
    category: 'SMEs',
    summary: 'Fill lesson slots faster and reduce no-shows.',
    help: 'AI can manage schedules, confirm lessons, and send payment reminders.',
    outcomes: ['Lesson scheduling', 'Slot availability updates', 'Payment follow-up nudges'],
    icon: Car,
  },
  {
    title: 'Playschools',
    slug: 'playschools',
    category: 'SMEs',
    summary: 'Handle parent inquiries and admissions smoothly.',
    help: 'AI can guide parents through admissions and document collection.',
    outcomes: ['Admissions inquiry responses', 'Document checklist automation', 'Tour scheduling'],
    icon: School,
  },
]

export function getIndustryBySlug(slug: string) {
  return industries.find((industry) => industry.slug === slug)
}
