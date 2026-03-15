export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#040814] px-6">
      <div className="text-center">
        <p className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Dharma<span className="text-gradient">AI</span>
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.32em] text-slate-300">
          Initializing Intelligence...
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-300 [animation-delay:-0.2s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-indigo-400 [animation-delay:-0.1s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-cyan-300" />
        </div>
      </div>
    </div>
  )
}
