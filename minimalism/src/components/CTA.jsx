import { ArrowDownRight } from 'lucide-react'

function CTA() {
  return (
    <section className="cta-section" id="get-started">
      <div className="container">
        <div className="cta-card">
          <h2 className="cta-title">
            Take complete control of your freelance income today.
          </h2>
          <p className="cta-text">
            Join thousands of independent freelancers who trust Tralance for peace of mind and financial clarity.
          </p>
          <div className="cta-action-row">
            <a className="btn-pill-download" href="#get-started">
              <span>Download Tralance Free</span>
              <span className="pill-badge" aria-hidden="true">
                <ArrowDownRight size={14} strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
