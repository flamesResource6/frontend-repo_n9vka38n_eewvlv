import { ShieldCheck, Rocket, Cpu, Sparkles } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: 'Product Acceleration',
    desc: 'From idea to MVP in weeks, not months, with a battle‑tested delivery pipeline.'
  },
  {
    icon: ShieldCheck,
    title: 'Security by Design',
    desc: 'Compliance-minded architecture with auth, audit trails, and observability.'
  },
  {
    icon: Cpu,
    title: 'AI-Native',
    desc: 'Embed AI into products responsibly: agents, RAG, copilots and automation.'
  },
  {
    icon: Sparkles,
    title: 'Design Systems',
    desc: 'Polished UI kits, tokens and motion guidelines for consistent brand feel.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative bg-black py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(16,185,129,0.08),transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for ambitious teams</h2>
          <p className="mt-3 text-zinc-400">Everything you need to design, ship, and scale robust software products.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-emerald-400/15 bg-zinc-900/50 p-6 hover:border-emerald-400/30 transition-colors">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
