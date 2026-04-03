import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import FeaturedProducts from './components/FeaturedProducts'
import MaterialsSection from './components/MaterialsSection'
import BrandStatement from './components/BrandStatement'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
      <MaterialsSection />
      <BrandStatement />
      <About />
      <Footer />
    </div>
  )
}

export default App
