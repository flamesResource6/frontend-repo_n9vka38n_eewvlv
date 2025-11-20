export default function Showcase() {
  const logos = ['Acme', 'Nimbus', 'Vertex', 'Helix', 'Quanta', 'Nova']
  return (
    <section id="work" className="relative bg-black py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Work that speaks</h2>
            <p className="mt-3 text-zinc-400 max-w-xl">We partner with startups and enterprises to deliver measurable outcomes across fintech, health, and developer tools.</p>
          </div>
          <a href="#" className="hidden md:inline rounded-lg border border-white/10 px-4 py-2 text-sm text-zinc-200 hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">View case studies</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="group overflow-hidden rounded-2xl border border-emerald-400/15 bg-gradient-to-b from-zinc-900 to-zinc-950">
              <div className="aspect-[16/10] bg-[linear-gradient(120deg,rgba(16,185,129,0.2),transparent),radial-gradient(60%_80%_at_30%_20%,rgba(16,185,129,0.15),transparent)]" />
              <div className="p-5">
                <div className="text-sm text-emerald-300">Case Study</div>
                <div className="mt-1 text-white">Performance platform revamp</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((l) => (
            <div key={l} className="flex items-center justify-center rounded-xl border border-white/5 bg-white/5 py-4 text-zinc-300">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
