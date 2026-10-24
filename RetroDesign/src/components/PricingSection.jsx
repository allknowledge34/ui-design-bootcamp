import { useState } from 'react'

export function PricingSection({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('sprint')

  const plans = [
    {
      id: 'foundation',
      name: 'Architecture Sprint',
      desc: 'Focused 4-week engagement to audit, design, and deliver a production-ready system architecture blueprint or core MVP.',
      price: billingCycle === 'sprint' ? '12,500' : '11,200',
      period: billingCycle === 'sprint' ? '/ sprint' : '/ month',
      cadence: billingCycle === 'sprint' ? 'Fixed Scope • 4-Week Delivery' : 'Billed Annually • Save 10%',
      featured: false,
      features: [
        'Complete architectural audit & documentation',
        'Database modeling & relational schema design',
        'Principal engineer direct contact channel',
        'Production CI/CD deployment pipeline setup',
        '30-day post-handover warranty & bug resolution',
      ],
      cta: 'Reserve Architecture Sprint',
    },
    {
      id: 'retainer',
      name: 'Dedicated Studio Retainer',
      desc: 'Ongoing fractional engineering team embedded in your organization. Continuous product iteration, releases, and priority SLAs.',
      price: billingCycle === 'sprint' ? '24,000' : '21,600',
      period: billingCycle === 'sprint' ? '/ month' : '/ month',
      cadence: billingCycle === 'sprint' ? 'Rolling Monthly • Cancel Anytime' : 'Quarterly Commitment • 10% Off',
      featured: true,
      badge: 'Most Popular',
      features: [
        'Dedicated team of senior full-stack engineers',
        'Priority 15-minute SLA on mission-critical bugs',
        'Bi-weekly production sprint releases & demos',
        'Full IP ownership transferred each milestone',
        'Direct Slack/Discord access to senior engineers',
        'Comprehensive security review & pen-testing',
      ],
      cta: 'Initiate Studio Retainer',
    },
  ]

  return (
    <section id="pricing" className="pricing-section">
      <div className="retro-container">
        <div className="pricing-container">
          <div className="pricing-info-col">
            <span className="section-eyebrow">Predictable Investment</span>
            <h2 className="pricing-headline">
              Transparent retainers with zero hidden fees or lock-ins.
            </h2>
            <p className="pricing-subtext">
              We operate with total pricing clarity. Every engagement includes complete source code ownership, zero license royalties, and direct access to senior practitioners who do the actual building.
            </p>

            <div className="pricing-guarantees">
              <div className="guarantee-item">
                <div className="guarantee-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="guarantee-text">
                  <h4>100% Client Code Ownership</h4>
                  <p>All repositories, diagrams, and deployment artifacts belong exclusively to your business.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <div className="guarantee-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="guarantee-text">
                  <h4>30-Day Post-Delivery Warranty</h4>
                  <p>Any defects discovered after delivery are corrected at zero charge without delay.</p>
                </div>
              </div>

              <div className="guarantee-item">
                <div className="guarantee-bullet">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="guarantee-text">
                  <h4>Senior Engineer Direct Line</h4>
                  <p>Zero account managers or middlemen between you and the builders responsible for your codebase.</p>
                </div>
              </div>
            </div>

            <div className="billing-switch-wrap">
              <button
                type="button"
                className={`billing-btn ${billingCycle === 'sprint' ? 'active' : ''}`}
                onClick={() => setBillingCycle('sprint')}
              >
                Fixed Sprint
              </button>
              <button
                type="button"
                className={`billing-btn ${billingCycle === 'annual' ? 'active' : ''}`}
                onClick={() => setBillingCycle('annual')}
              >
                Annual Retainer (10% Off)
              </button>
            </div>
          </div>

          <div className="pricing-cards-col">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`price-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.badge && (
                  <span className="featured-badge">{plan.badge}</span>
                )}

                <h3 className="price-tier-name">{plan.name}</h3>
                <p className="price-tier-desc">{plan.desc}</p>

                <div className="price-value-wrap">
                  <span className="price-currency">$</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>

                <div className="price-cadence">{plan.cadence}</div>

                <ul className="price-features-list">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="price-feature-item">
                      <svg className="feature-check-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`retro-btn ${plan.featured ? 'retro-btn-primary' : 'retro-btn-secondary'} price-btn`}
                  onClick={() => onSelectPlan(`${plan.name} (${billingCycle})`)}
                >
                  <span>{plan.cta}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
