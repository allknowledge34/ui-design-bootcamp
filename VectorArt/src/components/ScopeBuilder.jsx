import { useState } from 'react';

const projectTypes = [
  { id: 'brand', label: 'Brand Identity', weeks: '6-8 Weeks', deliverables: 'Logomark, Type System, 20+ Vector Assets, Style Guide' },
  { id: 'editorial', label: 'Editorial Series', weeks: '3-4 Weeks', deliverables: 'Cover Art, 6-12 Internal Vector Plates, Spot Graphics' },
  { id: 'campaign', label: 'Visual Campaign', weeks: '4-6 Weeks', deliverables: 'Hero Key Visuals, Transit Posters, Dynamic Vector Kits' },
  { id: 'packaging', label: 'Packaging Suite', weeks: '5-7 Weeks', deliverables: 'Box Dielines, Vector Labeling, Tactile Unboxing Patterns' }
];

const paletteOptions = [
  {
    id: 'electric',
    name: 'Electric Studio',
    colors: ['#1E3BB3', '#FFC226', '#FA5246', '#FAF8F5'],
    mood: 'High-energy, authoritative, bold color contrast'
  },
  {
    id: 'mediterranean',
    name: 'Coral & Mint Modern',
    colors: ['#FA5246', '#2EC4B6', '#FFC226', '#121620'],
    mood: 'Warm, organic, humanistic narrative flow'
  },
  {
    id: 'monolith',
    name: 'Nocturne Precision',
    colors: ['#121620', '#1F9E92', '#142878', '#FAF8F5'],
    mood: 'Architectural, monolithic, structured clarity'
  }
];

const timelineOptions = [
  { id: 'standard', label: 'Standard Pace', desc: 'Full exploration & testing' },
  { id: 'expedited', label: 'Sprint Track', desc: 'Accelerated focused delivery' },
  { id: 'comprehensive', label: 'Full Overhaul', desc: 'Deep research & rollout' }
];

export default function ScopeBuilder({ onOpenInquiryWithScope }) {
  const [selectedType, setSelectedType] = useState(projectTypes[0]);
  const [selectedPalette, setSelectedPalette] = useState(paletteOptions[0]);
  const [selectedTimeline, setSelectedTimeline] = useState(timelineOptions[0]);

  const handleLaunchBrief = () => {
    onOpenInquiryWithScope({
      projectType: selectedType.label,
      palette: selectedPalette.name,
      timeline: selectedTimeline.label,
      deliverables: selectedType.deliverables
    });
  };

  return (
    <section id="scope-builder" className="interactive-scope-section">
      <div className="container">
        <div>
          <span className="section-label">Interactive Studio Tool</span>
          <h2 className="section-title">Configure your project brief.</h2>
          <p className="section-subtitle">
            Explore typical scopes, timelines, and vector color systems to tailor an engagement that fits your exact creative ambitions.
          </p>
        </div>

        <div className="scope-builder-box" style={{ marginTop: '48px' }}>
          <div className="scope-options-area">
            <h3>1. Select Studio Discipline</h3>
            <div className="scope-group">
              <span className="scope-group-label">Deliverable Focus</span>
              <div className="scope-btn-group">
                {projectTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    className={`scope-select-btn ${selectedType.id === type.id ? 'active' : ''}`}
                    onClick={() => setSelectedType(type)}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="scope-group">
              <span className="scope-group-label">2. Vector Palette Direction</span>
              <div className="scope-btn-group">
                {paletteOptions.map((palette) => (
                  <button
                    key={palette.id}
                    type="button"
                    className={`scope-select-btn ${selectedPalette.id === palette.id ? 'active' : ''}`}
                    onClick={() => setSelectedPalette(palette)}
                  >
                    {palette.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="scope-group">
              <span className="scope-group-label">3. Engagement Cadence</span>
              <div className="scope-btn-group">
                {timelineOptions.map((timeline) => (
                  <button
                    key={timeline.id}
                    type="button"
                    className={`scope-select-btn ${selectedTimeline.id === timeline.id ? 'active' : ''}`}
                    onClick={() => setSelectedTimeline(timeline)}
                  >
                    {timeline.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="scope-summary-card">
            <div>
              <div className="scope-summary-header">
                <span className="pill-badge mint">Configured Brief</span>
                <h4 className="scope-summary-title" style={{ marginTop: '8px' }}>{selectedType.label}</h4>
              </div>

              <div className="scope-summary-details">
                <div className="scope-row">
                  <span className="scope-row-label">Estimated Delivery:</span>
                  <span className="scope-row-val">{selectedType.weeks}</span>
                </div>
                <div className="scope-row">
                  <span className="scope-row-label">Pace:</span>
                  <span className="scope-row-val">{selectedTimeline.label}</span>
                </div>
                <div className="scope-row">
                  <span className="scope-row-label">Key Deliverables:</span>
                </div>
                <div style={{ fontSize: '0.84rem', color: 'var(--color-ink-muted)', lineHeight: '1.4' }}>
                  {selectedType.deliverables}
                </div>

                <div style={{ marginTop: '12px' }}>
                  <span className="scope-row-label">Selected Color Harmony:</span>
                  <div className="scope-palette-preview">
                    {selectedPalette.colors.map((c, i) => (
                      <div key={i} className="palette-swatch" style={{ backgroundColor: c }} title={c} />
                    ))}
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-ink-faint)', marginTop: '4px', display: 'block' }}>
                    {selectedPalette.mood}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="btn btn-coral"
              style={{ width: '100%', marginTop: '20px' }}
              onClick={handleLaunchBrief}
            >
              Request This Scope
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
