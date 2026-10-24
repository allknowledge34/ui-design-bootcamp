export function SelectedWork({ onOpenModal }) {
  const projects = [
    {
      id: 'bauhaus-archive',
      folio: 'FOLIO 01',
      title: 'Bauhaus Archive Digital Platform',
      discipline: 'Spatial Typography & Architecture',
      year: '2025',
      summary: 'Complete digital exhibition archive and interactive spatial typography engine showcasing 10,000+ historical artifacts.',
      vectorArt: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none">
          <rect width="400" height="250" fill="#EFECE3" />
          <line x1="40" y1="30" x2="360" y2="30" stroke="#121110" strokeWidth="1" />
          <line x1="40" y1="220" x2="360" y2="220" stroke="#121110" strokeWidth="1" />
          <rect x="60" y="55" width="120" height="140" stroke="#121110" strokeWidth="1.5" fill="#F8F6F0" />
          <circle cx="270" cy="125" r="55" stroke="#D0382B" strokeWidth="2" fill="none" />
          <polygon points="270,70 310,140 230,140" stroke="#121110" strokeWidth="1.5" fill="none" />
          <text x="75" y="130" fontFamily="Inter, sans-serif" fontSize="14" fontWeight="900" fill="#121110">ARCHIV</text>
        </svg>
      ),
    },
    {
      id: 'neue-zeit',
      folio: 'FOLIO 02',
      title: 'Neue Zeit Publishing Engine',
      discipline: 'Digital Broadsheet & Software System',
      year: '2025',
      summary: 'High-speed publishing infrastructure delivering multi-format editorial broadsheets with sub-200ms edge rendering.',
      vectorArt: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none">
          <rect width="400" height="250" fill="#EAE5D8" />
          <rect x="50" y="40" width="300" height="170" stroke="#121110" strokeWidth="1.5" fill="#F8F6F0" />
          <line x1="50" y1="85" x2="350" y2="85" stroke="#121110" strokeWidth="1" />
          <line x1="190" y1="85" x2="190" y2="210" stroke="#121110" strokeWidth="1" />
          <text x="70" y="70" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="900" fill="#121110" letterSpacing="-0.02em">NEUE ZEIT / BROADSHEET</text>
          <line x1="70" y1="110" x2="170" y2="110" stroke="#D0382B" strokeWidth="2" />
          <line x1="70" y1="125" x2="160" y2="125" stroke="#7A756D" strokeWidth="1" />
          <line x1="70" y1="140" x2="165" y2="140" stroke="#7A756D" strokeWidth="1" />
          <line x1="210" y1="110" x2="330" y2="110" stroke="#121110" strokeWidth="1" />
          <line x1="210" y1="125" x2="320" y2="125" stroke="#7A756D" strokeWidth="1" />
        </svg>
      ),
    },
    {
      id: 'monolith-chronometers',
      folio: 'FOLIO 03',
      title: 'Monolith Horology Atelier',
      discipline: 'E-Commerce Platform & Configurator',
      year: '2024',
      summary: 'Tactile timepiece configurator with micro-interaction ergonomics and real-time custom fabrication synchronization.',
      vectorArt: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none">
          <rect width="400" height="250" fill="#F0EDE4" />
          <circle cx="200" cy="125" r="75" stroke="#121110" strokeWidth="1.5" fill="#F8F6F0" />
          <circle cx="200" cy="125" r="60" stroke="#DFD8CB" strokeWidth="1" strokeDasharray="3 3" />
          <line x1="200" y1="65" x2="200" y2="78" stroke="#121110" strokeWidth="2" />
          <line x1="200" y1="172" x2="200" y2="185" stroke="#121110" strokeWidth="2" />
          <line x1="140" y1="125" x2="153" y2="125" stroke="#121110" strokeWidth="2" />
          <line x1="247" y1="125" x2="260" y2="125" stroke="#121110" strokeWidth="2" />
          <line x1="200" y1="125" x2="230" y2="105" stroke="#D0382B" strokeWidth="2" strokeLinecap="round" />
          <line x1="200" y1="125" x2="180" y2="145" stroke="#121110" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="200" cy="125" r="4" fill="#121110" />
        </svg>
      ),
    },
    {
      id: 'kinetic-quarterly',
      folio: 'FOLIO 04',
      title: 'Kinetic Quarterly Journal',
      discipline: 'Digital Magazine & Essay Repository',
      year: '2024',
      summary: 'Bespoke reading environment with fluid typography, darkroom photography previews, and zero-distraction reading layouts.',
      vectorArt: (
        <svg width="100%" height="100%" viewBox="0 0 400 250" fill="none">
          <rect width="400" height="250" fill="#E8E2D5" />
          <rect x="40" y="35" width="145" height="180" stroke="#121110" strokeWidth="1.5" fill="#F8F6F0" />
          <rect x="215" y="35" width="145" height="180" stroke="#121110" strokeWidth="1.5" fill="#F8F6F0" />
          <text x="60" y="70" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="22" fill="#121110">Essay</text>
          <line x1="60" y1="85" x2="160" y2="85" stroke="#D0382B" strokeWidth="1" />
          <line x1="60" y1="105" x2="165" y2="105" stroke="#7A756D" strokeWidth="1" />
          <line x1="60" y1="120" x2="155" y2="120" stroke="#7A756D" strokeWidth="1" />
          <line x1="60" y1="135" x2="160" y2="135" stroke="#7A756D" strokeWidth="1" />
          <rect x="235" y="55" width="105" height="100" stroke="#121110" strokeWidth="1" fill="#EFECE3" />
          <text x="235" y="180" fontFamily="Inter, sans-serif" fontSize="10" fontWeight="700" fill="#121110">PLATE IV</text>
        </svg>
      ),
    },
  ]

  return (
    <section id="work" className="work-section">
      <div className="editorial-container">
        <div className="editorial-section-header">
          <span className="editorial-section-num">02 // SELECTED WORK</span>
          <h2 className="editorial-section-title">Archival Folio</h2>
          <span className="editorial-meta-tag">FOUR RECENT COMMISSIONS</span>
        </div>

        <div className="work-gallery-grid">
          {projects.map((item) => (
            <article key={item.id} className="work-gallery-item">
              <div className="work-image-frame" aria-hidden="true">
                {item.vectorArt}
              </div>

              <div className="work-caption-row">
                <span className="editorial-meta-tag editorial-meta-vermilion">{item.folio}</span>
                <span className="editorial-meta-tag">{item.discipline} &bull; {item.year}</span>
              </div>

              <h3 className="work-item-title">{item.title}</h3>
              <p className="work-item-desc">{item.summary}</p>

              <div>
                <button
                  type="button"
                  className="service-inquire-link"
                  onClick={() => onOpenModal(`Folio: ${item.title}`)}
                >
                  <span>Examine Commission</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
