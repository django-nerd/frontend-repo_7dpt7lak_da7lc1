import { CalendarCheck2, ClipboardList, CreditCard, FileChartColumn, Gauge, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

export default function Features() {
  const items = [
    { icon: ClipboardList, title: "Task automation", desc: "Cleaning, check-in/out, and maintenance with due dates, assignees, and proofs." },
    { icon: CalendarCheck2, title: "Unified calendar", desc: "Sync rentals and ops in one place. No overlap, no double-bookings." },
    { icon: FileChartColumn, title: "Performance reports", desc: "Automated weekly/monthly owner reports with KPIs and insights." },
    { icon: Gauge, title: "Revenue tracking", desc: "Monitor gross rent, fees, payouts, and margins in real time." },
    { icon: MessageSquare, title: "Owner messaging", desc: "Keep conversations organized and on-record inside the dashboard." },
    { icon: CreditCard, title: "Online booking & payments", desc: "Sell extras and accept payments directly from your site." },
    { icon: ShieldCheck, title: "Secure & compliant", desc: "Role-based access, GDPR-ready, SSO available." },
    { icon: Sparkles, title: "Premium templates", desc: "Pick a design and go live in minutes — optimized for conversions." },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20" id="features">
      <h2 className="text-3xl font-bold text-slate-900 tracking-tight text-center">Everything you need to scale your concierge business</h2>
      <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Replace 5+ tools, unify your workflow, and give owners the transparency they expect.</p>

      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="w-10 h-10 rounded-lg grid place-items-center bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-blue-600/30 shadow-lg">
              <Icon size={18} />
            </div>
            <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
            <p className="mt-2 text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
