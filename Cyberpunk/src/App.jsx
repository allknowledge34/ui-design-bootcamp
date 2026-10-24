import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { SelectedWork } from './components/SelectedWork'
import { AboutStats } from './components/AboutStats'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'
import { UplinkModal } from './components/UplinkModal'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalScope, setModalScope] = useState('Cybernetic Systems & Architecture')

  const handleOpenModal = (scope = 'General Inquiry') => {
    setModalScope(scope)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  return (
    <div className="cyber-app">
      <Navbar onOpenModal={handleOpenModal} />
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <Services onSelectService={handleOpenModal} />
        <SelectedWork onOpenModal={handleOpenModal} />
        <AboutStats />
        <ContactCTA onOpenModal={handleOpenModal} />
      </main>
      <Footer />
      <UplinkModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultScope={modalScope}
      />
    </div>
  )
}

export default App
