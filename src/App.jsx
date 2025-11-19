import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import SocialProof from './components/SocialProof';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <div className="bg-gradient-to-br from-white to-slate-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <Screenshots />
        <SocialProof />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <footer className="border-t border-slate-200 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Hostly Concierge — Built for Airbnb property-management and concierge teams.
      </footer>
    </div>
  )
}

export default App
