import { useEffect } from 'react';

export default function CaseStudyModal({ project, onClose, onOpenInquiry }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && project) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const ArtComponent = project.artComponent;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div className="modal-card" style={{ maxWidth: '820px' }} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close case study"
        >
          ✕
        </button>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
          <span className={`pill-badge ${project.badgeClass}`}>{project.category}</span>
          <span className="pill-badge">{project.year}</span>
        </div>

        <h2 id="modal-project-title" style={{ fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '16px' }}>
          {project.title}
        </h2>

        <div style={{ borderRadius: '12px', overflow: 'hidden', border: 'var(--border-bold)', marginBottom: '24px' }}>
          <ArtComponent />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '32px' }}>
          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Project Narrative</h4>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--color-ink-muted)', marginBottom: '16px' }}>
              {project.description}
            </p>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px' }}>Strategic Impact</h4>
            <p style={{ fontSize: '0.9375rem', lineHeight: '1.6', color: 'var(--color-ink-muted)' }}>
              {project.insight}
            </p>
          </div>

          <div style={{ backgroundColor: 'var(--color-bg)', padding: '20px', borderRadius: '12px', border: 'var(--border-fine)' }}>
            <h5 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-faint)', marginBottom: '8px' }}>
              Client &amp; Scope
            </h5>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, marginBottom: '16px' }}>
              {project.client}
            </div>

            <h5 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-faint)', marginBottom: '8px' }}>
              Delivered Assets
            </h5>
            <div style={{ fontSize: '0.85rem', color: 'var(--color-ink-muted)', lineHeight: '1.5', marginBottom: '16px' }}>
              {project.scope}
            </div>

            <h5 style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-ink-faint)', marginBottom: '8px' }}>
              Palette System
            </h5>
            <div style={{ display: 'flex', gap: '6px', height: '28px', borderRadius: '6px', overflow: 'hidden', border: 'var(--border-fine)', marginBottom: '20px' }}>
              {project.colorHexes.map((hex, i) => (
                <div key={i} style={{ flex: 1, backgroundColor: hex }} title={hex} />
              ))}
            </div>

            <button
              type="button"
              className="btn btn-coral btn-sm"
              style={{ width: '100%' }}
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
            >
              Commission Similar Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
