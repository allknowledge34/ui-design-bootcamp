import { ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react'

function FinalCTA() {
  return (
    <section className="final-cta-section" id="get-started">
      <div className="cta-container">
        <div className="glass-cta-bubble">

          <h2 className="cta-main-title">
            Start tracking your freelance finances today.
          </h2>

          <p className="cta-lead-text">
            Join independent creators and consultants who manage cashflow, log expenses, and get invoices paid on time.
          </p>

          <div className="cta-actions-cluster">
            <a href="#get-started" className="btn-black-pill btn-cta-large">
              <span>Get the App</span>
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          <div className="cta-trust-strip">
            <div className="trust-item">
              <ShieldCheck size={15} />
              <span>No credit card required</span>
            </div>
            <span className="trust-dot">•</span>
            <div className="trust-item">
              <Zap size={15} />
              <span>Instant setup</span>
            </div>
            <span className="trust-dot">•</span>
            <div className="trust-item">
              <ShieldCheck size={15} />
              <span>100% private data</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
