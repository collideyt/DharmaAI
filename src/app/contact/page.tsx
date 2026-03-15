export default function Page() {
  return (
    <section className="section-shell py-16">
      <h1 className="text-4xl font-bold text-white">Contact</h1>
      <p className="mt-3 text-slate-300">Tell us your growth goals and current operations stack.</p>

      <form className="glass-card mt-8 grid gap-4 rounded-2xl p-6 md:grid-cols-2">
        <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Name" />
        <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Email" type="email" />
        <input className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none md:col-span-2" placeholder="Company" />
        <textarea className="min-h-36 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none md:col-span-2" placeholder="Message" />
        <div className="md:col-span-2">
          <button type="button" className="premium-button inline-flex">
            Send Inquiry
          </button>
        </div>
      </form>

      <div className="mt-6 text-slate-300">
        Scheduling link placeholder:{' '}
        <a href="#" className="text-cyan-300">
          Book a strategy call
        </a>
      </div>
    </section>
  )
}
