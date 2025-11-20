export default function CTA() {
  return (
    <section id="contact" className="relative bg-black py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-zinc-900 to-zinc-950 p-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">Have a vision? Let's build it.</h3>
              <p className="mt-3 text-zinc-400">Tell us about your product and timeline. We’ll get back within 24 hours.</p>
              <ul className="mt-6 space-y-2 text-zinc-300 text-sm list-disc list-inside">
                <li>Product strategy and roadmapping</li>
                <li>Design systems and brand identity</li>
                <li>Full‑stack development and AI integration</li>
              </ul>
            </div>
            <form className="grid gap-4">
              <input placeholder="Your name" className="rounded-lg bg-black/60 px-4 py-3 text-white placeholder-zinc-500 border border-white/10 focus:outline-none focus:border-emerald-400/50" />
              <input placeholder="Work email" className="rounded-lg bg-black/60 px-4 py-3 text-white placeholder-zinc-500 border border-white/10 focus:outline-none focus:border-emerald-400/50" />
              <textarea rows={4} placeholder="Project details" className="rounded-lg bg-black/60 px-4 py-3 text-white placeholder-zinc-500 border border-white/10 focus:outline-none focus:border-emerald-400/50" />
              <button className="rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black hover:bg-emerald-400 transition-colors">Request proposal</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
