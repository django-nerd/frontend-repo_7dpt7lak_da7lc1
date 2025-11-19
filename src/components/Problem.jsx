export default function Problem() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="problem">
      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">The hidden cost of manual operations</h2>
          <p className="mt-4 text-slate-600">Concierge teams juggle bookings, cleanings, check-ins, and disgruntled owners — all with spreadsheets and WhatsApp. It’s slow, chaotic, and hard to scale.</p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Scattered tools</h3>
            <p className="mt-2 text-slate-600 text-sm">Calendar, tasks, invoicing, and messaging live in different apps. Nothing syncs — and owners feel it.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">No public-facing presence</h3>
            <p className="mt-2 text-slate-600 text-sm">DIY websites look unprofessional and don’t convert. You lose leads before they even meet you.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Owners left in the dark</h3>
            <p className="mt-2 text-slate-600 text-sm">Without clear dashboards and reports, trust erodes and support tickets pile up.</p>
          </div>
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Hard to prove ROI</h3>
            <p className="mt-2 text-slate-600 text-sm">Manual spreadsheets make it difficult to demonstrate performance and justify fees.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
