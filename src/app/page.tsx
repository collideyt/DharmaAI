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
      <AIWorkflowVisualizer />
      <CaseStudiesSection />
      <MascotSection />
      <CTASection />
    </>
  )
}
