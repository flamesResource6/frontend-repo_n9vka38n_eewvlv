import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      {/* gradient accents behind everything */}
      <div className="pointer-events-none fixed inset-0 opacity-60">
        <div className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[140px]" />
      </div>

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <CTA />

      <footer className="border-t border-white/5 bg-black/80">
        <div className="mx-auto max-w-7xl px-6 py-10 text-zinc-400 text-sm flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-emerald-500 to-emerald-400" />
            <span>© {new Date().getFullYear()} FPN-Studios. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-emerald-300">Privacy</a>
            <a href="#" className="hover:text-emerald-300">Terms</a>
            <a href="#" className="hover:text-emerald-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
