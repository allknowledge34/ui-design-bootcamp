import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedCollection } from './components/FeaturedCollection'
import { BrandStory } from './components/BrandStory'
import { LifestyleShowcase } from './components/LifestyleShowcase'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'

export function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'ceramics-01',
      title: 'Artisan Terracotta Amphora',
      price: 85,
      qty: 1,
    },
  ])
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = (item) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: (p.qty || 1) + 1 } : p
        )
      }
      return [...prev, { ...item, qty: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemoveFromCart = (itemId) => {
    setCartItems((prev) => prev.filter((p) => p.id !== itemId))
  }

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0)

  return (
    <div className="boho-app">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />
      <main>
        <Hero />
        <FeaturedCollection onAddToCart={handleAddToCart} />
        <BrandStory />
        <LifestyleShowcase />
        <FinalCTA />
      </main>
      <Footer />
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
      />
    </div>
  )
}

export default App
