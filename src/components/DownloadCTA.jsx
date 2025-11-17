import { Apple, Android } from "lucide-react";

export default function DownloadCTA() {
  return (
    <section id="download" className="relative bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Get the mobile app</h2>
            <p className="mt-3 text-white/70">
              Book on the go, access offline tickets, and receive live trip alerts.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition" href="#">
                <Apple className="h-5 w-5" /> App Store
              </a>
              <a className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 transition" href="#">
                <Android className="h-5 w-5" /> Play Store
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-0 rounded-3xl bg-gradient-to-tr from-orange-500/20 via-white/0 to-white/0 blur-3xl" />
            <div className="relative z-10 aspect-[10/9] w-full rounded-3xl border border-white/10 bg-white/5 p-6 text-white/80">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div className="rounded-xl bg-white/5 p-4">Boarding Pass</div>
                  <div className="rounded-xl bg-white/5 p-4">Live Deals</div>
                  <div className="rounded-xl bg-white/5 p-4">Trip Map</div>
                  <div className="rounded-xl bg-white/5 p-4">Wallet</div>
                  <div className="rounded-xl bg-white/5 p-4">Lounge</div>
                  <div className="rounded-xl bg-white/5 p-4">AI Guide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
