export default function SocialProof() {
  const logos = [
    "https://companieslogo.com/img/orig/ABNB-4a6b5f7c.png",
    "https://companieslogo.com/img/orig/booking.com-5813e25b.png",
    "https://companieslogo.com/img/orig/airbnb-2.png",
    "https://companieslogo.com/img/orig/expedia.png",
    "https://companieslogo.com/img/orig/stripe-2.png",
  ];
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-slate-200 bg-white/70 backdrop-blur p-6">
        <p className="text-center text-slate-500 text-sm">Trusted by hospitality operators and powered by leading platforms</p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
          {logos.map((src, i) => (
            <div key={i} className="h-10 opacity-70 hover:opacity-100 transition-opacity">
              <img src={src} alt="Logo" className="h-full object-contain mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
