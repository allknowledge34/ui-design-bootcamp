import { UserCheck, PlusCircle, BarChart3, ArrowRight } from 'lucide-react'

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Set up clients and projects',
      desc: 'Create client profiles, assign agreed fixed rates or hourly budgets, and structure key deliverables in minutes.',
      icon: <UserCheck size={22} className="step-icon" />,
      highlight: 'Setup in 2 minutes'
    },
    {
      num: '02',
      title: 'Log income and expenses',
      desc: 'Record client wires when they land and log business expenses on the fly. Categorize write-offs without data drudgery.',
      icon: <PlusCircle size={22} className="step-icon" />,
      highlight: '2-tap quick logging'
    },
    {
      num: '03',
      title: 'See exactly where you stand',
      desc: 'Check live net profit margins, upcoming due dates, and pending payments instantly. Zero spreadsheet formulas required.',
      icon: <BarChart3 size={22} className="step-icon" />,
      highlight: 'Instant financial clarity'
    }
  ]

  return (
    <section className="glass-how-section" id="how-it-works">
      <div className="glass-container">
        <div className="section-header-centered">
          <div className="section-pill-tag">
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="section-title">
            From scattered receipts to complete financial clarity.
          </h2>
          <p className="section-description">
            Tralance keeps friction low so you spend less time wrestling spreadsheets and more time focused on billable client work.
          </p>
        </div>

        <div className="steps-glass-row">
          {steps.map((step, idx) => (
            <div key={step.num} className="glass-card step-card">
              <div className="step-card-header">
                <span className="step-number">{step.num}</span>
                <div className="step-icon-wrap">
                  {step.icon}
                </div>
              </div>

              <span className="step-badge">{step.highlight}</span>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>

              {idx < steps.length - 1 && (
                <div className="step-connector" aria-hidden="true">
                  <ArrowRight size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
