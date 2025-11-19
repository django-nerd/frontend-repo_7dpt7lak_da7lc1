import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 dark:bg-slate-900/70 border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-sky-500 to-cyan-400 text-white grid place-items-center shadow-lg shadow-blue-600/20">
            <Sparkles size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            Hostly Concierge
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-slate-600 dark:text-slate-300">
          <a href="#features" className="hover:text-slate-900 dark:hover:text-white transition-colors">Features</a>
          <a href="#screens" className="hover:text-slate-900 dark:hover:text-white transition-colors">Screenshots</a>
          <a href="#pricing" className="hover:text-slate-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-slate-900 dark:hover:text-white transition-colors">FAQ</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 text-slate-700 dark:text-slate-200">Watch Demo</a>
          <a href="#cta" className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30 hover:opacity-95">Start Free Trial</a>
        </div>
        <button className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
}
