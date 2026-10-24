import { useState } from 'react'

export function PricingSection({ onSelectPlan }) {
  const [billingMode, setBillingMode] = useState('sprint')

  const tiers = [
    {
      id: 'foundation-sprint',
      name: 'Architecture Sprint',
      brief: 'Intensive 4-week engagement to blueprint, model, and construct a production-ready software core or MVP.',
      price: billingMode === 'sprint' ? '12,500' : '11,250',
      frequency: billingMode === 'sprint' ? '/ sprint' : '/ month',
      schedule: billingMode === 'sprint' ? 'Fixed Scope • 4-Week Delivery' : 'Annual Agreement • 10% Savings',
      featured: false,
      deliverables: [
        'Comprehensive architectural audit & documentation',
        'Database modeling & relational schema design',
        'Principal engineer direct contact channel',
        'Automated CI/CD build & deployment pipeline',
        '30-day post-handover warranty & defect resolution',
      ],
      buttonLabel: 'Select Architecture Sprint',
    },
    {
      id: 'studio-retainer',
      name: 'Dedicated Studio Retainer',
      brief: 'Embedded senior engineering squad delivering continuous product releases, code hardening, and priority SLAs.',
      price: billingMode === 'sprint' ? '24,000' : '21,600',
      frequency: billingMode === 'sprint' ? '/ month' : '/ month',
      schedule: billingMode === 'sprint' ? 'Rolling Monthly • Cancel Anytime' : 'Quarterly Commitment • 10% Savings',
      featured: true,
      badge: 'Most Popular',
      deliverables: [
        'Dedicated senior full-stack engineering squad',
        'Priority 15-minute SLA on mission-critical incidents',
        'Bi-weekly production sprint releases & demos',
        'Full IP ownership transferred at each milestone',
        'Direct Slack & Discord channel with lead builders',
        'Routine security review & automated pen-testing',
      ],
      buttonLabel: 'Select Studio Retainer',
    },
  ]

  return (
    <section id="pricing" className="pricing-area">
      <div className="skeuo-container">
        <div className="pricing-columns-layout">
          <div className="pricing-side-narrative">
            <span className="section-label">Predictable Terms</span>
            <h2 className="pricing-side-headline">
              Transparent retainers with complete source ownership.
            </h2>
            <p className="pricing-side-desc">
              We operate without hidden licensing fees or vendor lock-in. Every engagement guarantees complete code ownership and direct collaboration with senior engineers.
            </p>

            <div className="pricing-commitments-list">
              <div className="commitment-row">
                <div className="commitment-icon-wax">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="commitment-text">
                  <h4>100% Client Code Ownership</h4>
                  <p>All repositories, documentation, and infrastructure scripts belong exclusively to you.</p>
                </div>
              </div>

              <div className="commitment-row">
                <div className="commitment-icon-wax">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="commitment-text">
                  <h4>30-Day Post-Delivery Warranty</h4>
                  <p>Defects discovered within 30 days of release are resolved immediately at zero charge.</p>
                </div>
              </div>

              <div className="commitment-row">
                <div className="commitment-icon-wax">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div className="commitment-text">
                  <h4>Direct Senior Engineer Contact</h4>
                  <p>Work directly with the experienced builders who write and maintain your systems.</p>
                </div>
              </div>
            </div>

            <div className="tactile-billing-selector">
              <button
                type="button"
                className={`tactile-toggle-option ${billingMode === 'sprint' ? 'active' : ''}`}
                onClick={() => setBillingMode('sprint')}
              >
                Fixed Sprint
              </button>
              <button
                type="button"
                className={`tactile-toggle-option ${billingMode === 'annual' ? 'active' : ''}`}
                onClick={() => setBillingMode('annual')}
              >
                Annual Retainer (10% Off)
              </button>
            </div>
          </div>

          <div className="pricing-dual-cards">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`skeuo-card pricing-tactile-card ${tier.featured ? 'highlighted' : ''}`}
              >
                {tier.badge && (
                  <span className="pricing-stamp-badge">{tier.badge}</span>
                )}

                <h3 className="tier-title">{tier.name}</h3>
                <p className="tier-brief">{tier.brief}</p>

                <div className="tier-price-row">
                  <span className="tier-currency">$</span>
                  <span className="tier-sum">{tier.price}</span>
                  <span className="tier-frequency">{tier.frequency}</span>
                </div>

                <div className="tier-schedule-note">{tier.schedule}</div>

                <ul className="tier-features-list">
                  {tier.deliverables.map((item, idx) => (
                    <li key={idx} className="tier-feature-point">
                      <svg className="feature-brass-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className={`skeuo-btn ${tier.featured ? 'skeuo-btn-primary' : 'skeuo-btn-secondary'} tier-submit-btn`}
                  onClick={() => onSelectPlan(`${tier.name} (${billingMode})`)}
                >
                  <span>{tier.buttonLabel}</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
