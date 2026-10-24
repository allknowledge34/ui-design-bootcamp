import useTheme from './useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductPreview from './components/ProductPreview'
import KeyFeatures from './components/KeyFeatures'
import HowItWorks from './components/HowItWorks'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <div className="neo-app">
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <ProductPreview />
        <KeyFeatures />
        <HowItWorks />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
