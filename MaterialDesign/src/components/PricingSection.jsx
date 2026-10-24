export function PricingSection() {
  const coinIllustration = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="14" fill="#facc15" stroke="#eab308" strokeWidth="2" />
      <text x="20" y="24" fontSize="13" fontWeight="900" fill="#713f12" textAnchor="middle">$</text>
    </svg>
  )

  const plans = [
    {
      name: 'Basic',
      price: '$34',
      period: '/Month',
      features: [
        '50 Gb Bandwidth',
        'Unlimited Site licenses',
        '10 Free Optimization',
        '24/7 Hours Support'
      ]
    },
    {
      name: 'Standard',
      price: '$49',
      period: '/Month',
      features: [
        '50 Gb Bandwidth',
        'Unlimited Site licenses',
        '10 Free Optimization',
        '24/7 Hours Support'
      ]
    }
  ]

  return (
    <section id="pricing" className="pricing-section">
      <div className="md-container">
        <div className="pricing-layout-grid">
          <div className="pricing-left-col">
            <span className="section-eyebrow">PRICING PLAN</span>
            <h2 className="section-title">
              Choose Affordable Prices
            </h2>
            <p style={{ fontSize: '0.9375rem', color: 'var(--md-text-secondary)', lineHeight: 1.6, maxWidth: '420px' }}>
              Predictable software service agreements engineered for high reliability, dedicated sprint velocity, and transparent milestones.
            </p>
          </div>

          <div className="pricing-cards-col">
            {plans.map((p, idx) => (
              <div key={idx} className="pricing-card">
                <div className="pricing-card-header">
                  <h3 className="pricing-tier-name">{p.name}</h3>
                  {coinIllustration}
                </div>

                <div className="pricing-price-row">
                  <span className="pricing-amount num-tabular">{p.price}</span>
                  <span className="pricing-period">{p.period}</span>
                </div>

                <p style={{ fontSize: '0.75rem', color: 'var(--md-text-muted)', lineHeight: 1.5 }}>
                  Our plans come with a 100% free 14 day trial. No credit card needed.
                </p>

                <ul className="pricing-checklist">
                  {p.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>

                <button type="button" className="md-btn-purple" style={{ width: '100%' }}>
                  <span>Purchase Now</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
