export default function Screenshots() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="screens">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">See the dashboard and site builder in action</h2>
      <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Elegant owner dashboards and a no-code website generator designed for hospitality standards.</p>

      <div className="mt-10 grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop" alt="Owner Dashboard" className="w-full h-[360px] object-cover" />
        </div>
        <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-xl">
          <img src="https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxXZWJzaXRlJTIwQnVpbGRlcnxlbnwwfDB8fHwxNzYzNTYyNTI1fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Website Builder" className="w-full h-[360px] object-cover" />
        </div>
      </div>
    </section>
  );
}
