import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedCollection } from './components/FeaturedCollection'
import { BrandStatement } from './components/BrandStatement'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { CartDrawer } from './components/CartDrawer'

export function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 'hoodie-01',
      title: 'Comic Blast Heavyweight Hoodie',
      price: 120,
      qty: 1,
    },
  ])
  const [cartOpen, setCartOpen] = useState(false)

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: (item.qty || 1) + 1 } : item
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemoveFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const totalCartCount = cartItems.reduce((acc, item) => acc + (item.qty || 1), 0)

  return (
    <div className="pop-app">
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setCartOpen(true)}
      />
      <main>
        <Hero onOpenCart={() => setCartOpen(true)} />
        <FeaturedCollection onAddToCart={handleAddToCart} />
        <BrandStatement />
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
