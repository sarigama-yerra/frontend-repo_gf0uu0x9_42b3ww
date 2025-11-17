import { Compass, TicketPercent, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Smart Discovery",
    desc: "AI-curated places and hidden gems tailored to your vibe.",
  },
  {
    icon: TicketPercent,
    title: "Best Deals",
    desc: "Real-time price drops on flights, stays, and experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & Secure",
    desc: "Protected bookings, encrypted payments, 24/7 support.",
  },
  {
    icon: Sparkles,
    title: "Seamless UX",
    desc: "Modern, fast, and gorgeous — everything just works.",
  },
];

export default function Features() {
  return (
    <section id="experiences" className="relative bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-white text-3xl sm:text-4xl font-bold">Why you'll love it</h2>
          <p className="mt-3 text-white/70">Built for explorers, optimized for joy.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white/90 backdrop-blur hover:bg-white/10 transition">
              <Icon className="h-6 w-6" />
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
