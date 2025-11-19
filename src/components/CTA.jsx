import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative">
      <div className="max-w-5xl mx-auto px-6 py-20" id="cta">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-10">
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 blur-3xl opacity-30" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-100 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              <Sparkles size={14} /> Premium templates included
            </span>
            <h3 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">Ready to grow your concierge business?</h3>
            <p className="mt-3 text-slate-300">Create your site, invite your owners, and centralize operations today.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-slate-900 font-semibold bg-white hover:opacity-95 shadow-lg shadow-blue-600/20">
                Start Free Trial <ArrowRight size={18} />
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-white/20 text-white/90 hover:bg-white/10">
                Watch Demo
              </a>
            </div>
            <div className="mt-3 text-xs text-slate-400">No credit card required</div>
          </div>
        </div>
      </div>
    </section>
  );
}
