import { ArrowRight, CheckCircle2, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[35rem] h-[35rem] bg-gradient-to-tr from-indigo-600 via-fuchsia-500 to-rose-400 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            <CheckCircle2 size={14} /> Built for Airbnb conciergeries
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Launch your concierge website and client dashboard in minutes
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Hostly Concierge helps property-management teams sell services, automate operations, and give owners full transparency — all in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a href="#cta" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg shadow-blue-600/30 hover:opacity-95">
              Create My Site <ArrowRight size={18} />
            </a>
            <a href="#demo" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold border border-slate-200 text-slate-800 hover:bg-slate-50">
              <PlayCircle size={18} /> Watch Demo
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-500">
            No credit card required · Free 14-day trial
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-2xl border border-slate-200 overflow-hidden shadow-2xl bg-white">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmR8ZW58MHwwfHx8MTc2MzU2MjUyNHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dashboard" className="w-full h-[420px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0" />
            <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3">
              <div className="bg-white/90 backdrop-blur rounded-xl p-3 border border-slate-200">
                <div className="text-xs text-slate-500">Completed tasks</div>
                <div className="text-lg font-bold">128</div>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-3 border border-slate-200">
                <div className="text-xs text-slate-500">Revenue (30d)</div>
                <div className="text-lg font-bold">$42,780</div>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-3 border border-slate-200">
                <div className="text-xs text-slate-500">Avg. rating</div>
                <div className="text-lg font-bold">4.9</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
