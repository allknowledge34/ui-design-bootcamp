import { useState } from 'react'

export function FinalCTA() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubscribed(true)
  }

  return (
    <section id="atelier" className="final-cta-section">
      <div className="boho-container">
        <div className="final-cta-card">
          <span className="section-botanical-tag">
            <span>✦</span>
            <span>THE SLOW LIVING DISPATCH</span>
            <span>✦</span>
          </span>

          <h2 className="section-boho-title" style={{ marginBottom: '14px' }}>
            BRING CALM &amp; CRAFTSMANSHIP HOME
          </h2>

          <p className="section-boho-desc" style={{ maxWidth: '580px', margin: '0 auto 32px' }}>
            Receive quiet monthly essays on artisanal techniques, seasonal home rituals, and early notification of small batch ceramic firings.
          </p>

          {subscribed ? (
            <div style={{ padding: '20px 24px', backgroundColor: 'var(--boho-sand)', borderRadius: 'var(--radius-pill)', border: '1px solid var(--border-soft)', maxWidth: '520px', margin: '0 auto' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--boho-walnut)', fontWeight: '600' }}>
                WELCOME TO OUR SLOW LIVING CIRCLE
              </div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', marginTop: '4px' }}>
                We have sent an artisan welcoming note to {email}. Zero spam, ever.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="cta-form-row">
              <input
                type="email"
                required
                placeholder="your.email@domain.com"
                className="boho-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Email address for slow living dispatch"
              />
              <button type="submit" className="boho-btn boho-btn-terracotta">
                JOIN DISPATCH
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
