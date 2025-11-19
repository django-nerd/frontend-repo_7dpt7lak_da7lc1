export default function Testimonials() {
  const items = [
    {
      quote: "We launched our site the same day and gave owners a real-time view. Churn dropped immediately.",
      author: "Maya L.",
      role: "Founder, UrbanStay Concierge",
    },
    {
      quote: "The dashboard finally ends ‘where’s my report?’ emails. It paid for itself in a week.",
      author: "Thomas B.",
      role: "GM, Riviera Hosts",
    },
    {
      quote: "Clean, modern, and conversion-focused. We book more extras directly from our site.",
      author: "Anaïs D.",
      role: "Ops Lead, MontBlanc Services",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="testimonials">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Loved by concierge teams</h2>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {items.map((t) => (
          <div key={t.author} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <p className="text-slate-700">“{t.quote}”</p>
            <div className="mt-4 text-sm font-semibold text-slate-900">{t.author}</div>
            <div className="text-xs text-slate-500">{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
