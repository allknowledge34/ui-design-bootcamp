import { useState } from 'react'
import { useTheme } from './useTheme'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { ServicesGrid } from './components/ServicesGrid'
import { StatsStrip } from './components/StatsStrip'
import { PricingSection } from './components/PricingSection'
import { Footer } from './components/Footer'
import { ConsultationModal } from './components/ConsultationModal'

export function App() {
  const { theme, toggleTheme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalScope, setModalScope] = useState('Software Design')

  const handleOpenModal = (scope = 'General Consultation') => {
    setModalScope(scope)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="skeuo-app">
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenModal={handleOpenModal}
      />
      <main>
        <HeroBanner onOpenModal={handleOpenModal} />
        <ServicesGrid onSelectService={handleOpenModal} />
        <StatsStrip />
        <PricingSection onSelectPlan={handleOpenModal} />
      </main>
      <Footer />
      <ConsultationModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultScope={modalScope}
      />
    </div>
  )
}

export default App
