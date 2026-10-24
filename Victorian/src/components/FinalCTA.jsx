export function FinalCTA({ onOpenModal }) {
  return (
    <section id="inquire" className="final-cta-section">
      <div className="victorian-container">
        <div className="final-cta-box">
          <div className="flourish-corner flourish-tl" />
          <div className="flourish-corner flourish-tr" />
          <div className="flourish-corner flourish-bl" />
          <div className="flourish-corner flourish-br" />

          <span className="section-heraldic-tag">PRIVATE INVITATION</span>
          <h2 className="section-victorian-title" style={{ marginBottom: '16px' }}>
            DISCOVER THE SPLENDOUR OF A BYGONE ERA
          </h2>

          <div className="section-ornament-divider">
            <span />
            <span>❖</span>
            <span />
          </div>

          <p className="section-victorian-desc" style={{ maxWidth: '620px', margin: '0 auto 32px' }}>
            Our senior curators welcome inquiries from distinguished collectors, cultural institutions, and private estates worldwide. Arrange a private gallery showing at our London salons.
          </p>

          <button
            type="button"
            className="victorian-btn victorian-btn-gold"
            onClick={() => onOpenModal('Concierge Consultation')}
          >
            <span>ARRANGE CONCIERGE CONSULTATION</span>
          </button>
        </div>
      </div>
    </section>
  )
}
