import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Glow backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Copy */}
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Futuristic Development Studio
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              We design, build and scale modern products.
            </h1>
            <p className="mt-5 text-lg text-zinc-300 max-w-xl">
              FPN-Studios partners with teams to craft elegant software—fast, secure, and built for growth. From concept to launch, we deliver.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-black hover:bg-emerald-400 transition-colors">
                Start a project <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-white hover:border-emerald-400/40 hover:text-emerald-300 transition-colors">
                See our work
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center text-zinc-400">
              <div>
                <div className="text-3xl font-semibold text-white">60+</div>
                Projects
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">12</div>
                Domains
              </div>
              <div>
                <div className="text-3xl font-semibold text-white">5x</div>
                Faster delivery
              </div>
            </div>
          </div>

          {/* 3D Spline */}
          <div className="relative h-[520px] md:h-[640px]">
            <div className="absolute inset-0 rounded-3xl border border-emerald-400/10 bg-gradient-to-b from-emerald-500/5 to-transparent" />
            <Spline scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  )
}
