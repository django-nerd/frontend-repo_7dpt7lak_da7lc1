import { Rocket, PanelTop, LayoutTemplate } from "lucide-react";

export default function Solution() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="solution">
      <div className="grid lg:grid-cols-3 gap-10 items-center">
        <div className="lg:col-span-2 order-2 lg:order-1">
          <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl">
            <img src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWJzaXRlJTIwQnVpbGRlcnxlbnwwfDB8fHwxNzYzNTYyNTI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Website Builder" className="w-full h-[420px] object-cover" />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
            <Rocket size={14} /> Instant website + owner dashboard
          </span>
          <h2 className="mt-4 text-3xl font-bold text-slate-900 tracking-tight">All-in-one growth engine for conciergeries</h2>
          <p className="mt-3 text-slate-600">Generate a premium site, sell services online, and give each owner a secure space to track tasks, revenue, and calendar — all automatically.</p>
          <ul className="mt-6 space-y-3 text-slate-700">
            <li className="flex items-start gap-3"><PanelTop className="text-blue-600" size={18} /><span>Owner dashboard with tasks, calendar, revenue, messaging</span></li>
            <li className="flex items-start gap-3"><LayoutTemplate className="text-blue-600" size={18} /><span>Website generator with premium templates and online booking</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
