import useTheme from './useTheme'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RatingBar from './components/RatingBar'
import FeatureCards from './components/FeatureCards'
import BillsManagement from './components/BillsManagement'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Nav theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <RatingBar />
        <FeatureCards />
        <BillsManagement />
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
