import { Check } from "lucide-react";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/mo",
      highlight: "Everything to get started",
      features: ["Website generator", "Up to 50 properties", "Basic dashboard", "Email support"],
      cta: "Start Free Trial",
    },
    {
      name: "Growth",
      price: "$149",
      period: "/mo",
      highlight: "Most popular",
      features: ["All Starter features", "Unlimited properties", "Reports & messaging", "Online payments"],
      cta: "Start Free Trial",
      featured: true,
    },
    {
      name: "Scale",
      price: "$299",
      period: "/mo",
      highlight: "For large teams",
      features: ["Advanced permissions", "SSO", "Priority support", "API access"],
      cta: "Talk to Sales",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="pricing">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Simple, transparent pricing</h2>
      <p className="mt-3 text-slate-600 text-center">Choose a plan that matches your portfolio size. Cancel anytime.</p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {tiers.map((t) => (
          <div key={t.name} className={`p-8 rounded-2xl border ${t.featured ? 'border-blue-500 ring-2 ring-blue-200' : 'border-slate-200'} bg-white shadow-sm flex flex-col`}>
            <div className="flex-1">
              <div className="text-sm text-slate-500">{t.highlight}</div>
              <h3 className="mt-1 text-xl font-semibold text-slate-900">{t.name}</h3>
              <div className="mt-4 flex items-end gap-1">
                <div className="text-4xl font-extrabold text-slate-900">{t.price}</div>
                <div className="text-slate-500 mb-1">{t.period}</div>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-700"><Check size={16} className="text-blue-600" />{f}</li>
                ))}
              </ul>
            </div>
            <a href="#cta" className={`mt-8 inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold ${t.featured ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-600/30' : 'border border-slate-200 text-slate-800 hover:bg-slate-50'}`}>{t.cta}</a>
          </div>
        ))}
      </div>
    </section>
  );
}
