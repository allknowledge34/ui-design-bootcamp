import { DollarSign, Receipt, FolderKanban, CheckCircle2, ArrowUpRight, Flame, ShieldAlert, Sparkles } from 'lucide-react'

function FeatureMatrix() {
  return (
    <section className="matrix-section" id="features">
      <div className="max-container">
        <div className="section-head-banner">
          
          <h2 className="matrix-main-headline">
            EVERYTHING YOU NEED TO CRUSH YOUR FREELANCE CASHFLOW.
          </h2>
          <p className="matrix-lead">
            No bloated enterprise clutter. Just uncompromising tools engineered specifically for independent freelancers to track, organize, and retain more profit.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card bento-hero bento-yellow">
            <div className="bento-corner-tag">
              <Flame size={14} strokeWidth={3} />
              <span>CORE RADAR</span>
            </div>
            <div className="bento-icon-stamp stamp-dark">
              <DollarSign size={28} strokeWidth={3} />
            </div>
            <h3 className="bento-title">INCOME VELOCITY TRACKING</h3>
            <p className="bento-description">
              Record every milestone, retainer, and payment the second they hit. Break down exact earnings by individual client, project scope, or custom financial quarters with zero manual math.
            </p>
            <div className="bento-income-preview">
              <div className="income-pill-row">
                <span className="client-chip">Apex Studio Retainer</span>
                <span className="amount-chip chip-green">+$6,500.00</span>
              </div>
              <div className="income-pill-row">
                <span className="client-chip">Fintech Mobile UI</span>
                <span className="amount-chip chip-green">+$4,200.00</span>
              </div>
              <div className="income-pill-row">
                <span className="client-chip">Brand Identity Kit</span>
                <span className="amount-chip chip-green">+$3,750.00</span>
              </div>
            </div>
            <div className="bento-card-footer">
              <span className="footer-tag">REAL-TIME MULTI-CLIENT LEDGER</span>
              <a href="#get-started" className="bento-action-arrow" aria-label="Learn more about income tracking">
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="bento-card bento-purple">
            <div className="bento-corner-tag">
              <span>TAX SHIELD</span>
            </div>
            <div className="bento-icon-stamp stamp-white">
              <Receipt size={26} strokeWidth={3} />
            </div>
            <h3 className="bento-title">EXPENSE & DEDUCTION SHIELD</h3>
            <p className="bento-description">
              Log hardware leases, subscriptions, and work meals immediately. Distinguish tax-deductible expenses automatically to know your genuine take-home profit instead of just gross vanity metrics.
            </p>
            <div className="bento-meter-widget">
              <div className="meter-label-row">
                <span className="meter-name">Tax Deductibility Ratio</span>
                <span className="meter-percent">88%</span>
              </div>
              <div className="meter-bar-track">
                <div className="meter-bar-fill" style={{ width: '88%' }}></div>
              </div>
              <span className="meter-subtext">Estimated $3,840.00 saved in annual tax liabilities</span>
            </div>
            <div className="bento-card-footer">
              <span className="footer-tag">INSTANT PROFIT METRICS</span>
              <a href="#get-started" className="bento-action-arrow" aria-label="Learn more about expense tracking">
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="bento-card bento-cyan">
            <div className="bento-corner-tag">
              <span>UNIFIED HUB</span>
            </div>
            <div className="bento-icon-stamp stamp-dark">
              <FolderKanban size={26} strokeWidth={3} />
            </div>
            <h3 className="bento-title">PROJECT & CLIENT MATRIX</h3>
            <p className="bento-description">
              Organize every client profile, signed contract scope, delivery deadline, and billable rate in one unified command center. Never wonder which client owes what for which project.
            </p>
            <div className="bento-client-tags">
              <span className="badge-project-chip">✦ Monolith Labs (Active)</span>
              <span className="badge-project-chip">✦ Pulse Health (Review)</span>
              <span className="badge-project-chip">✦ Velocity Capital (Contract)</span>
            </div>
            <div className="bento-card-footer">
              <span className="footer-tag">CONTRACT & BUDGET ALIGNMENT</span>
              <a href="#get-started" className="bento-action-arrow" aria-label="Learn more about project organization">
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>

          <div className="bento-card bento-pink">
            <div className="bento-corner-tag">
              <ShieldAlert size={14} strokeWidth={3} />
              <span>RADAR ALERT</span>
            </div>
            <div className="bento-icon-stamp stamp-white">
              <CheckCircle2 size={26} strokeWidth={3} />
            </div>
            <h3 className="bento-title">PAYMENT RADAR & DEADLINES</h3>
            <p className="bento-description">
              Live status radar for every generated invoice: Paid, Pending, or Overdue. Spot delinquent clients before they disrupt your personal cashflow and trigger automated follow-up reminders.
            </p>
            <div className="bento-status-chips">
              <span className="status-pill status-paid">PAID • $6,500</span>
              <span className="status-pill status-pending">PENDING • 2 DAYS</span>
              <span className="status-pill status-overdue">OVERDUE • 5 DAYS</span>
            </div>
            <div className="bento-card-footer">
              <span className="footer-tag">ZERO LATE PAYMENT DRIFT</span>
              <a href="#get-started" className="bento-action-arrow" aria-label="Learn more about payment status">
                <ArrowUpRight size={20} strokeWidth={3} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureMatrix
