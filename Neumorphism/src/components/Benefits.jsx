import { CreditCard, Zap, ShieldCheck } from 'lucide-react'

function Benefits() {
  const cards = [
    {
      id: 'transactions',
      icon: <CreditCard size={20} />,
      title: 'Easy Transactions',
      desc: 'Track every client retainer, milestone payment, and incoming wire without spreadsheet drudgery.',
      themeClass: 'card-warm-tint'
    },
    {
      id: 'expenses',
      icon: <Zap size={20} />,
      title: 'Expense Tracking',
      desc: 'Log business receipts in seconds and separate deductible write-offs from personal spending.',
      themeClass: 'card-lavender-tint'
    },
    {
      id: 'security',
      icon: <ShieldCheck size={20} />,
      title: 'Payment Radar',
      desc: 'Monitor settled, pending, and overdue invoices with real-time alerts so cashflow never stalls.',
      themeClass: 'card-peach-tint'
    }
  ]

  return (
    <section className="neu-benefits-section" id="features">
      <div className="neu-container">
        <div className="section-title-wrap">
          <h2 className="section-center-heading">
            Unleash the true potential for freelance finances.
          </h2>
        </div>

        <div className="benefits-three-grid">
          {cards.map((c) => (
            <div key={c.id} className={`neu-feature-card ${c.themeClass}`}>
              <div className="feature-icon-circle">
                {c.icon}
              </div>

              <h3 className="feature-card-title">{c.title}</h3>
              <p className="feature-card-text">{c.desc}</p>

              <a href="#download" className="neu-btn-black btn-feature-pill">
                <span>Learn More</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
