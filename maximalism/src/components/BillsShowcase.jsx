import { ArrowUpRight, Check, Zap, Receipt, AlertCircle, ArrowRight } from 'lucide-react'

function BillsShowcase() {
  const highlights = [
    {
      title: 'Automated Overdue Chasing',
      desc: 'Polite, automated reminder alerts triggered the moment a client invoice passes agreed milestone deadlines.'
    },
    {
      title: 'Categorized Tax Deductions',
      desc: 'Every SaaS license, coworking desk, and equipment receipt sorted into IRS-friendly schedule deduction buckets.'
    },
    {
      title: '1-Click Profit & Loss Statements',
      desc: 'Crystal-clear quarterly net cash forecasts so you never get surprised at tax filing season.'
    }
  ]

  const sampleBills = [
    { name: 'Workspace & Cloud Infra', status: 'DUE IN 3 DAYS', cost: '$180.00', category: 'Infrastructure', alert: true },
    { name: 'Adobe Creative Suite Pro', status: 'PAID YESTERDAY', cost: '$54.99', category: 'Software', alert: false },
    { name: 'Design Workstation Lease', status: 'ACTIVE LEASE', cost: '$320.00', category: 'Hardware', alert: false },
    { name: 'Coworking Dedicated Desk', status: 'DUE IN 7 DAYS', cost: '$450.00', category: 'Facilities', alert: false },
  ]

  return (
    <section className="bills-max-section" id="bills">
      <div className="max-container bills-max-grid">
        <div className="bills-screen-column">
          <div className="bills-graphic-container">
            <div className="graphic-offset-border" aria-hidden="true"></div>

            <div className="bills-app-panel">
              <div className="panel-header-bar">
                <div className="panel-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>
                <span className="panel-title-chip">EXPENSE & BILLS RADAR v2.4</span>
              </div>

              <div className="bills-hero-stat-card">
                <div className="hero-stat-left">
                  <span className="hero-stat-kicker">MONTHLY EXPENSE LEDGER</span>
                  <span className="hero-stat-number">$4,850.00</span>
                </div>
                <div className="hero-stat-badge">
                  <Receipt size={16} strokeWidth={2.5} />
                  <span>24 BILLS SYNCED</span>
                </div>
              </div>

              <div className="bills-items-feed">
                {sampleBills.map((bill) => (
                  <div key={bill.name} className={`bill-feed-row ${bill.alert ? 'row-alert' : ''}`}>
                    <div className="bill-feed-left">
                      <div className="bill-indicator-icon">
                        {bill.alert ? <AlertCircle size={16} strokeWidth={2.5} /> : <Zap size={16} strokeWidth={2.5} />}
                      </div>
                      <div>
                        <p className="bill-feed-title">{bill.name}</p>
                        <span className="bill-feed-category">{bill.category}</span>
                      </div>
                    </div>
                    <div className="bill-feed-right">
                      <span className="bill-feed-cost">{bill.cost}</span>
                      <span className="bill-feed-status">{bill.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bills-panel-banner">
                <span className="banner-tag">✦ TAX SAVINGS ACTIVE</span>
                <span className="banner-val">+$840 SAVED</span>
              </div>
            </div>

            <div className="sticker-floating-visit">
              <ArrowUpRight size={18} strokeWidth={3} />
              <span>LIVE INTERACTIVE BILL MONITOR</span>
            </div>
          </div>
        </div>

        <div className="bills-text-column">
          <div className="bills-kicker-badge">
            <span>UNCOMPLICATED CASHFLOW</span>
          </div>

          <h2 className="bills-headline-max">
            MANAGEMENT OF BILLS & CLIENT INVOICES MADE COMPLETELY EFFORTLESS.
          </h2>

          <p className="bills-subheadline-max">
            Never let an unpaid milestone or recurring expense sneak up on your bottom line. Tralance gives independent operators complete, uncompromising mastery of their financial runway.
          </p>

          <div className="bills-highlight-stack">
            {highlights.map((h, index) => (
              <div key={h.title} className="highlight-row-card">
                <div className="highlight-index-box">
                  <span>0{index + 1}</span>
                </div>
                <div className="highlight-body">
                  <div className="highlight-title-row">
                    <Check size={18} strokeWidth={3} className="highlight-check" />
                    <h3 className="highlight-title-text">{h.title}</h3>
                  </div>
                  <p className="highlight-desc-text">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bills-action-row">
            <a href="#get-started" className="btn-hero-primary">
              <span className="btn-text">UNLOCK YOUR CASHFLOW</span>
              <span className="btn-icon-box">
                <ArrowRight size={20} strokeWidth={3} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BillsShowcase
