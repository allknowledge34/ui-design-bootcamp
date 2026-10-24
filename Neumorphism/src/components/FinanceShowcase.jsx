import { CheckCircle2, ShieldCheck, Zap, AlertCircle } from 'lucide-react'

function FinanceShowcase() {
  const bills = [
    { name: 'Apex Studio Retainer', cost: '+$6,500.00', status: 'Paid', statusClass: 'status-income', icon: <Zap size={14} /> },
    { name: 'Dedicated Workspace', cost: '-$320.00', status: 'Auto-debit', statusClass: 'status-expense', icon: <ShieldCheck size={14} /> },
    { name: 'Design Software Suite', cost: '-$54.99', status: 'Due in 2 days', statusClass: 'status-due', icon: <AlertCircle size={14} /> }
  ]

  const points = [
    'Real-time client payment and retainer tracking',
    'Automated invoice due date notifications',
    'Instant monthly net profit calculation'
  ]

  return (
    <section className="neu-bills-section" id="management">
      <div className="neu-container bills-grid-layout">
        <div className="bills-card-col">
          <div className="neu-bills-plate">
            <div className="bills-plate-header">
              <span className="plate-kicker">October Ledger</span>
              <span className="plate-badge">Live Feed</span>
            </div>

            <div className="bills-profit-display">
              <span className="profit-label">Net Monthly Profit</span>
              <span className="profit-value">$11,130.00</span>
            </div>

            <div className="bills-items-list">
              {bills.map((bill) => (
                <div key={bill.name} className="neu-bill-item">
                  <div className="bill-item-left">
                    <div className="bill-icon-socket">
                      {bill.icon}
                    </div>
                    <div>
                      <h4 className="bill-name-title">{bill.name}</h4>
                      <span className="bill-type-sub">Recurring Freelance Entry</span>
                    </div>
                  </div>
                  <div className="bill-item-right">
                    <span className="bill-cost-value">{bill.cost}</span>
                    <span className={`bill-chip-tag ${bill.statusClass}`}>{bill.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bills-content-col">
          <h2 className="bills-heading">
            Management of bills and client payments made effortless.
          </h2>

          <p className="bills-description">
            Keep every client retainer, milestone payment, and recurring software subscription organized in one clear tactile workspace.
          </p>

          <ul className="bills-points-list">
            {points.map((pt) => (
              <li key={pt} className="bills-point-item">
                <div className="point-icon-socket">
                  <CheckCircle2 size={15} />
                </div>
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <a href="#download" className="neu-btn-black btn-bills-cta">
            <span>Learn More</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FinanceShowcase
