import AIQuiz from '../../components/AIQuiz'
import AIToolRecommender from '../../components/AIToolRecommender'

export default function AIAssessmentPage() {
  return (
    <>
      <section className="section-shell py-16">
        <h1 className="text-4xl font-bold text-white">AI Readiness Assessment Tool</h1>
        <p className="mt-3 text-slate-300">Quickly assess where your business stands in adopting AI.</p>
      </section>

      <AIQuiz />
      <AIToolRecommender />
    </>
  )
}
