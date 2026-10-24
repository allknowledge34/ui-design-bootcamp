import { CheckCircle2, Receipt, ArrowRight, ShieldCheck, Zap, AlertCircle } from 'lucide-react'

function FinanceShowcase() {
  const points = [
    'Automated reminders for unpaid or delayed client milestones',
    'Categorized expense tracking with real-time tax write-off estimates',
    'Instant quarterly profit & loss visibility with zero spreadsheet formulas'
  ]

  const ledgerItems = [
    { name: 'Workspace & Cloud Servers', cost: '$180.00', status: 'Paid', statusClass: 'status-paid', alert: false },
    { name: 'Design Software & Asset Suite', cost: '$54.99', status: 'Due in 2 days', statusClass: 'status-pending', alert: true },
    { name: 'Coworking Dedicated Desk', cost: '$320.00', status: 'Active monthly', statusClass: 'status-active', alert: false },
  ]

  return (
    <section className="glass-showcase-section" id="showcase">
      <div className="glass-container showcase-grid">
        <div className="showcase-visual-col">
          <div className="glass-dashboard-card">

            <div className="dash-hero-stats">
              <div className="stat-subcard">
                <span className="stat-kicker">October Revenue</span>
                <span className="stat-value text-emerald">$14,250.00</span>
                <span className="stat-delta">+$2,400 vs last month</span>
              </div>
              <div className="stat-subcard">
                <span className="stat-kicker">Expenses Tracked</span>
                <span className="stat-value text-slate">$3,120.00</span>
                <span className="stat-delta">84% tax-deductible</span>
              </div>
            </div>

            <div className="dash-bills-list">
              <div className="bills-list-title-row">
                <span className="list-title">Upcoming Outflows &amp; Subscriptions</span>
                <span className="list-count">3 items</span>
              </div>

              {ledgerItems.map((item) => (
                <div key={item.name} className="glass-bill-row">
                  <div className="bill-row-left">
                    <div className="bill-indicator">
                      {item.alert ? <AlertCircle size={14} className="text-amber" /> : <Zap size={14} className="text-blue" />}
                    </div>
                    <div>
                      <p className="bill-name">{item.name}</p>
                      <span className="bill-sub">Recurring Business Cost</span>
                    </div>
                  </div>
                  <div className="bill-row-right">
                    <span className="bill-cost">{item.cost}</span>
                    <span className={`bill-status-pill ${item.statusClass}`}>{item.status}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="dash-footer-highlight">
              <ShieldCheck size={16} className="text-emerald" />
              <span>Net freelance profit automatically calculated: <strong>$11,130.00</strong></span>
            </div>
          </div>
        </div>

        <div className="showcase-text-col">
          <div className="section-pill-tag">
            <span>Intelligent Cashflow</span>
          </div>

          <h2 className="showcase-headline">
            Management of bills and client payments made effortless.
          </h2>

          <p className="showcase-description">
            Never let an unpaid milestone or recurring expense sneak up on your bottom line. Tralance gives independent operators complete, calm mastery over every dollar entering and exiting their business.
          </p>

          <ul className="showcase-checklist">
            {points.map((pt) => (
              <li key={pt} className="checklist-row">
                <CheckCircle2 size={18} className="checklist-icon" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>

          <div className="showcase-action">
            <a href="#get-started" className="glass-btn-accent">
              <span>Experience Tralance</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinanceShowcase
