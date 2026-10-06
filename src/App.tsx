import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import FeaturedProperties from './components/FeaturedProperties'
import About from './components/About'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-ivory font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <FeaturedProperties />
        <About />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
