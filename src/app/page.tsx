import HeroSection from '../sections/HeroSection'
import AvatarSection from '../sections/AvatarSection'
import ServicesSection from '../sections/ServicesSection'
import CaseStudiesSection from '../sections/CaseStudiesSection'
import CTASection from '../sections/CTASection'
import MascotSection from '../sections/MascotSection'
import AIWorkflowVisualizer from '../components/AIWorkflowVisualizer'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AvatarSection />
      <ServicesSection />

      <section className="py-16">
        <div className="section-shell">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">How DharmaAI Works</p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">Your AI Transformation Journey</h2>
          <p className="mt-3 text-slate-300">See how DharmaAI turns customer interactions into automated growth.</p>
          <div className="mt-8">
            <AIWorkflowVisualizer />
          </div>
        </div>
      </section>

      <CaseStudiesSection />
      <MascotSection />
      <CTASection />
    </>
  )
}
