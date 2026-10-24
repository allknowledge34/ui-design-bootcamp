import { ArrowUpRight, CheckCircle2, Receipt, ArrowRight } from 'lucide-react'

function BillsManagement() {
  const highlights = [
    'Automated invoice reminders for overdue client retainers',
    'Categorized expense breakdowns ready for tax deduction',
    'Instant profit and loss forecasts with zero spreadsheet formulas'
  ]

  return (
    <section className="bills-section" id="how-it-works">
      <div className="container bills-container">
        <div className="bills-visual">
          <div className="bills-phone-frame">
            <div className="bills-phone-island">
              <div className="phone-camera"></div>
            </div>

            <div className="bills-screen">
              <div className="bills-top-bar">
                <span className="bills-header-time">9:41</span>
                <span className="bills-header-title">Transactions</span>
              </div>

              <div className="bills-highlight-card">
                <span className="bills-hl-sub">Your total expenses</span>
                <span className="bills-hl-amount">$4,850.00</span>
                <div className="bills-hl-chip">
                  <Receipt size={12} />
                  <span>24 bills tracked</span>
                </div>
              </div>

              <div className="bills-list">
                <div className="bills-row">
                  <div className="bills-row-left">
                    <span className="bills-bullet dot-green"></span>
                    <div>
                      <p className="bills-name">Workspace & Cloud</p>
                      <p className="bills-date">Due in 3 days</p>
                    </div>
                  </div>
                  <span className="bills-val">$180.00</span>
                </div>

                <div className="bills-row">
                  <div className="bills-row-left">
                    <span className="bills-bullet dot-blue"></span>
                    <div>
                      <p className="bills-name">Adobe Suite Pro</p>
                      <p className="bills-date">Paid yesterday</p>
                    </div>
                  </div>
                  <span className="bills-val">$54.99</span>
                </div>

                <div className="bills-row">
                  <div className="bills-row-left">
                    <span className="bills-bullet dot-purple"></span>
                    <div>
                      <p className="bills-name">Design Hardware</p>
                      <p className="bills-date">Monthly lease</p>
                    </div>
                  </div>
                  <span className="bills-val">$320.00</span>
                </div>
              </div>
            </div>
          </div>

          <a href="#features" className="visit-site-badge">
            <ArrowUpRight size={18} strokeWidth={2.5} />
            <span>Visit site</span>
          </a>
        </div>

        <div className="bills-content">
          <h2 className="bills-headline">
            Management of bills & client payments made effortless.
          </h2>
          <p className="bills-desc">
            Stay ahead of every dollar. Keep invoices, recurring bills, and freelance project retainers in sync without ever touching a manual spreadsheet.
          </p>

          <ul className="bills-checklist">
            {highlights.map((item) => (
              <li key={item} className="checklist-item">
                <CheckCircle2 size={18} className="check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="bills-actions">
            <a href="#get-started" className="btn-pill-download">
              <span>Start Free Trial</span>
              <span className="pill-badge" aria-hidden="true">
                <ArrowRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BillsManagement
