import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import DownloadCTA from './components/DownloadCTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <DownloadCTA />
      <footer className="border-t border-white/10 bg-black py-10 text-center text-white/60">
        © {new Date().getFullYear()} Roamly — Made for modern explorers.
      </footer>
    </div>
  )
}

export default App
