export default function FAQ() {
  const faqs = [
    { q: "How fast can I launch?", a: "Most teams go live the same day. Pick a template, import your services, and share your link." },
    { q: "Do owners need accounts?", a: "Yes, each owner gets a secure login to view tasks, calendar, revenue, and reports." },
    { q: "Can I accept payments?", a: "Yes, enable online booking and payments to sell extras directly from your site." },
    { q: "Can I cancel anytime?", a: "Of course. Your data remains exportable." },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-20" id="faq">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Frequently asked questions</h2>
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        {faqs.map((f) => (
          <div key={f.q} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="font-semibold text-slate-900">{f.q}</div>
            <p className="mt-2 text-slate-600 text-sm">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
