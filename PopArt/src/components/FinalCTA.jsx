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
    <section id="vip" className="final-cta-section">
      <div className="pop-container">
        <div className="cta-promo-banner">
          <div>
            <div style={{ marginBottom: '10px' }}>
              <span className="pop-tag-pill" style={{ backgroundColor: '#FF1E27', color: '#FFF' }}>
                PRIORITY ACCESS // 24-HOUR ADVANCE
              </span>
            </div>
            <h2 className="cta-promo-title">
              DON&apos;T SLEEP ON THE DROP!
            </h2>
            <p className="cta-promo-sub">
              Sign up for the VIP Pop Club. Get private passwords to secret drop rooms 24 hours before public release.
            </p>
          </div>

          <div>
            {subscribed ? (
              <div style={{ padding: '24px', border: '3px solid #000', backgroundColor: '#FFE800', boxShadow: '4px 4px 0 #000' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: '#000', marginBottom: '6px' }}>
                  BOOM! VIP PASS UNLOCKED!
                </div>
                <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#000', marginBottom: '14px' }}>
                  Check your inbox at {email}. Use secret code <strong style={{ textDecoration: 'underline' }}>POP20</strong> for free global shipping on your first order.
                </p>
                <a href="#collection" className="pop-btn pop-btn-red" style={{ width: '100%' }}>
                  START SHOPPING NOW!
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="cta-subscribe-form">
                <label htmlFor="vip-email" style={{ fontWeight: '900', fontSize: '0.85rem', textTransform: 'uppercase' }}>
                  YOUR BEST EMAIL:
                </label>
                <div className="cta-input-row">
                  <input
                    id="vip-email"
                    type="email"
                    required
                    placeholder="you@domain.com"
                    className="pop-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="pop-btn pop-btn-red">
                    GET ACCESS
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
