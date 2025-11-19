export default function Benefits() {
  const items = [
    {
      title: "Close more deals",
      desc: "A professional site with clear services and instant booking turns visitors into clients.",
      stat: "+32% conversion",
    },
    {
      title: "Reduce back-and-forth",
      desc: "Owners self-serve with dashboards and reports. Less support, fewer emails.",
      stat: "-41% support tickets",
    },
    {
      title: "Prove your value",
      desc: "Automated performance reports make your ROI obvious and defensible.",
      stat: "+18% retention",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-3 gap-8">
        {items.map((it) => (
          <div key={it.title} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {it.stat}
            </div>
            <h3 className="mt-3 font-semibold text-slate-900">{it.title}</h3>
            <p className="mt-2 text-slate-600 text-sm">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
