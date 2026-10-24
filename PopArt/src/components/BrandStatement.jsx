export function BrandStatement() {
  return (
    <section id="statement" className="statement-section halftone-dot-bg">
      <div className="pop-container">
        <div className="statement-box">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <span className="pop-tag-pill" style={{ backgroundColor: '#FFE800', color: '#000', fontSize: '0.85rem' }}>
              ★ THE POP MANIFESTO ★
            </span>
          </div>

          <h2 className="statement-headline">
            WE DON&apos;T DO SUBTLE. WE PAINT THE CITY IN <span>SCREAMING COLOR</span>.
          </h2>

          <p className="statement-sub">
            Fast fashion gave the world fifty shades of beige. POP STORE exists to inject heavy primary pigment, bold comic outlines, and unapologetic attitude into your daily rotation.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span className="pop-tag-pill" style={{ backgroundColor: '#00F0FF', color: '#000' }}>
              100% HEAVYWEIGHT COMBED COTTON
            </span>
            <span className="pop-tag-pill" style={{ backgroundColor: '#FFE800', color: '#000' }}>
              HAND PULLED SCREEN PRINTS
            </span>
            <span className="pop-tag-pill" style={{ backgroundColor: '#FF1E27', color: '#FFF' }}>
              ZERO RESTOCKS EVER
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
