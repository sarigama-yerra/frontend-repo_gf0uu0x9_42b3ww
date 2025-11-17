import { Menu, Search, MapPin, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <MapPin className="h-6 w-6 text-white/90" />
              <span className="text-white font-semibold tracking-wide">
                Roamly
              </span>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#destinations" className="hover:text-white transition">Destinations</a>
            <a href="#experiences" className="hover:text-white transition">Experiences</a>
            <a href="#deals" className="hover:text-white transition">Deals</a>
          </div>
          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-white/90 backdrop-blur hover:bg-white/15 transition">
              <Search className="h-4 w-4" />
              <span className="text-sm">Search</span>
            </button>
            <button className="flex md:hidden rounded-full p-2 text-white/90 hover:bg-white/10">
              <Menu className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-white/90 hover:bg-white/10">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
