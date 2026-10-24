import { DollarSign, Receipt, FolderKanban, Clock, ArrowUpRight } from 'lucide-react'

function Benefits() {
  const benefits = [
    {
      icon: <DollarSign size={22} className="benefit-icon" />,
      title: 'Income Tracking',
      desc: 'Record milestone payments and recurring client retainers as they arrive. View clear revenue breakdowns by client, project, or custom billing cycle.',
      tag: 'Revenue Clarity'
    },
    {
      icon: <Receipt size={22} className="benefit-icon" />,
      title: 'Expense Categorization',
      desc: 'Log business subscriptions, hardware leases, and work expenses in seconds. Keep write-offs organized and separate gross revenue from real net profit.',
      tag: 'Tax-Ready'
    },
    {
      icon: <FolderKanban size={22} className="benefit-icon" />,
      title: 'Project Organization',
      desc: 'Keep client contracts, deliverable notes, and agreed project budgets connected in one clean view. No more scattered invoices or forgotten terms.',
      tag: 'Client Matrix'
    },
    {
      icon: <Clock size={22} className="benefit-icon" />,
      title: 'Payment Status Radar',
      desc: 'Track which invoices are paid, pending, or overdue at a glance. Get clarity on upcoming cash flows and send polite payment reminders without friction.',
      tag: 'Cashflow Radar'
    }
  ]

  return (
    <section className="glass-benefits-section" id="benefits">
      <div className="glass-container">
        <div className="section-header-centered">
          <h2 className="section-title">
            Built strictly for the reality of freelance finances.
          </h2>
          <p className="section-description">
            No convoluted corporate accounting bloat. Just the exact tools independent contractors need to track income, protect margins, and understand cash flow.
          </p>
        </div>

        <div className="benefits-glass-grid">
          {benefits.map((b) => (
            <div key={b.title} className="glass-card benefit-card">
              <div className="benefit-card-top">
                <div className="benefit-icon-wrapper">
                  {b.icon}
                </div>
                <span className="benefit-pill-tag">{b.tag}</span>
              </div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
              <div className="benefit-card-footer">
                <span className="footer-learn-text">Explore feature</span>
                <ArrowUpRight size={14} className="footer-arrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
