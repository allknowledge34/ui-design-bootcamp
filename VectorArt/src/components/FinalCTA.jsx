export default function FinalCTA({ onOpenInquiry }) {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-box">
          <div className="cta-text-block">
            <span className="pill-badge yellow">New Collaborations</span>
            <h2 className="cta-headline" style={{ marginTop: '16px' }}>
              Ready to draw something unforgettable?
            </h2>
            <p className="cta-description">
              We collaborate with forward-thinking founders, art directors, and cultural institutions worldwide. Let’s talk about your next milestone.
            </p>
            <div className="cta-badge-note">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span>Currently booking Q2 &amp; Q3 2026 commissions</span>
            </div>
          </div>

          <div className="cta-actions">
            <button
              type="button"
              className="btn btn-yellow"
              style={{ padding: '16px 32px', fontSize: '1.05rem' }}
              onClick={onOpenInquiry}
            >
              Start a Conversation
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
