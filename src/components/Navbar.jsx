import { Menu, ArrowRight } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-400/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#" className="group inline-flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.35)]" />
            <span className="text-lg font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
              FPN-Studios
            </span>
          </a>

          {/* Nav Actions */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-zinc-300 hover:text-white transition-colors">Features</a>
            <a href="#work" className="text-zinc-300 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-zinc-300 hover:text-white transition-colors">Contact</a>
            <a href="#" className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-emerald-300 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-colors">
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-200">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
