import { UserPlus, PlusCircle, BarChart3, ArrowRight } from 'lucide-react'

function WorkflowSteps() {
  const steps = [
    {
      num: '01',
      title: 'ADD YOUR CLIENTS & PROJECTS',
      text: 'Set up client accounts, define agreed hourly or flat-fee retainer contracts, and assign deliverable budgets in under 60 seconds.',
      icon: <UserPlus size={26} strokeWidth={2.8} />,
      accentClass: 'step-cyan',
      badge: 'INITIALIZE IN MINUTES'
    },
    {
      num: '02',
      title: 'LOG INCOMES & EXPENSES',
      text: 'Log incoming bank wires and record business deductions in 2 taps. Automatically associate receipts with the corresponding client file.',
      icon: <PlusCircle size={26} strokeWidth={2.8} />,
      accentClass: 'step-yellow',
      badge: 'ZERO DATA DRUDGERY'
    },
    {
      num: '03',
      title: 'SEE EXACTLY WHERE YOU STAND',
      text: 'Instant real-time visibility into net profit margins, overdue invoices, and upcoming tax liabilities without opening a single formula sheet.',
      icon: <BarChart3 size={26} strokeWidth={2.8} />,
      accentClass: 'step-pink',
      badge: 'COMPLETE FINANCIAL CLARITY'
    }
  ]

  return (
    <section className="workflow-section" id="workflow">
      <div className="max-container">
        <div className="workflow-head">
          <h2 className="workflow-title">
            HOW INDEPENDENT FREELANCERS ACHIEVE PURE CLARITY.
          </h2>
          <p className="workflow-sub">
            Three simple, repeatable stages engineered so you spend less time on bookkeeping friction and 100% of your energy on client work.
          </p>
        </div>

        <div className="steps-tri-grid">
          {steps.map((step) => (
            <div key={step.num} className={`step-card ${step.accentClass}`}>
              <div className="step-card-header">
                <span className="step-big-number">{step.num}</span>
                <div className="step-icon-bubble">
                  {step.icon}
                </div>
              </div>

              <span className="step-badge-pill">{step.badge}</span>

              <h3 className="step-card-title">{step.title}</h3>
              <p className="step-card-text">{step.text}</p>

              <div className="step-card-bottom">
                <div className="step-arrow-link">
                  <span>PHASE {step.num} READY</span>
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkflowSteps
