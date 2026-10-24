import { useState, useEffect } from 'react';

export default function InquiryModal({ isOpen, onClose, initialScope, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    scope: 'Brand Identity',
    timeline: 'Standard Pace (6-8 Weeks)',
    message: ''
  });

  useEffect(() => {
    if (initialScope) {
      setFormData(prev => ({
        ...prev,
        scope: initialScope.projectType || 'Brand Identity',
        timeline: initialScope.timeline || 'Standard Pace',
        message: initialScope.deliverables ? `Interested in: ${initialScope.deliverables}. Palette direction: ${initialScope.palette}.` : ''
      }));
    }
  }, [initialScope]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onShowToast(`Inquiry received from ${formData.name}. We will reply within 24 hours.`);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="inquiry-title">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <span className="pill-badge coral">Studio Commission</span>
        <h2 id="inquiry-title" style={{ fontSize: '1.8rem', fontWeight: 900, marginTop: '12px', marginBottom: '8px', letterSpacing: '-0.02em' }}>
          Start a project inquiry.
        </h2>
        <p style={{ color: 'var(--color-ink-muted)', fontSize: '0.9375rem', marginBottom: '24px', lineHeight: '1.5' }}>
          Tell us about your brand, upcoming editorial release, or campaign timeline. We respond to all qualified briefs within one business day.
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="client-name">Your Name *</label>
              <input
                id="client-name"
                type="text"
                className="form-input"
                required
                placeholder="e.g. Elena Rostova"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="client-email">Email Address *</label>
              <input
                id="client-email"
                type="email"
                className="form-input"
                required
                placeholder="elena@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="client-company">Company / Studio</label>
              <input
                id="client-company"
                type="text"
                className="form-input"
                placeholder="e.g. Monolith Press"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="client-scope">Primary Discipline</label>
              <select
                id="client-scope"
                className="form-select"
                value={formData.scope}
                onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
              >
                <option value="Brand Identity">Brand Identity &amp; Systems</option>
                <option value="Editorial Series">Editorial &amp; Book Illustration</option>
                <option value="Visual Campaign">Visual Campaign &amp; Direction</option>
                <option value="Packaging Suite">Packaging &amp; Spatial Graphics</option>
                <option value="Custom Exploration">Custom Multi-Discipline Commission</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="client-message">Project Scope &amp; Ambition</label>
            <textarea
              id="client-message"
              className="form-textarea"
              placeholder="Describe your story, timeline, deliverables, or aesthetic goals..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <button
              type="button"
              className="btn btn-outline btn-sm"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit Brief
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
