export function SelectedWork({ onOpenModal }) {
  const projects = [
    {
      id: 'neura-vault',
      tag: 'FINTECH SEC',
      title: 'NEURA//VAULT HSM',
      description: 'Zero-knowledge institutional custody platform securing $2.4B in high-velocity algorithmic digital assets.',
      stack: ['Rust', 'Wasm', 'Hardware KMS', 'Raft Consensus'],
      status: 'PRODUCTION DEPLOYED',
      schematic: (
        <svg width="100%" height="100%" viewBox="0 0 240 120" fill="none">
          <rect x="20" y="20" width="200" height="80" rx="2" stroke="#232035" strokeWidth="1" />
          <circle cx="120" cy="60" r="30" stroke="#00F0FF" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="120 40 135 70 105 70" stroke="#FF007F" strokeWidth="1.5" />
          <line x1="20" y1="60" x2="90" y2="60" stroke="#00F0FF" strokeWidth="1" />
          <line x1="150" y1="60" x2="220" y2="60" stroke="#00F0FF" strokeWidth="1" />
          <circle cx="120" cy="60" r="4" fill="#00F0FF" />
        </svg>
      ),
    },
    {
      id: 'aeon-core',
      tag: 'HIGH-FREQUENCY',
      title: 'AEON//CORE TRADING ENGINE',
      description: 'Distributed match engine with sub-100 microsecond deterministic execution and real-time risk liquidation.',
      stack: ['C++20', 'DPDK', 'ZeroMQ', 'Kernel Bypass'],
      status: 'BENCHMARKED 800K TPS',
      schematic: (
        <svg width="100%" height="100%" viewBox="0 0 240 120" fill="none">
          <path d="M20 90L60 60L100 75L140 35L180 50L220 20" stroke="#FF007F" strokeWidth="2" />
          <line x1="20" y1="105" x2="220" y2="105" stroke="#232035" strokeWidth="1" />
          <line x1="60" y1="105" x2="60" y2="60" stroke="#232035" strokeWidth="1" strokeDasharray="2 2" />
          <line x1="140" y1="105" x2="140" y2="35" stroke="#232035" strokeWidth="1" strokeDasharray="2 2" />
          <circle cx="140" cy="35" r="3" fill="#00F0FF" />
          <circle cx="220" cy="20" r="4" fill="#FFE600" />
        </svg>
      ),
    },
    {
      id: 'cyber-grid',
      tag: 'SPATIAL TELEMETRY',
      title: 'CYBER//GRID SPATIAL MESH',
      description: 'Autonomous multi-agent drone dispatch and LiDAR mesh telemetry platform for metropolitan logistics.',
      stack: ['Go', 'WebGPU', 'GraphQL', 'TimescaleDB'],
      status: 'FLEET INTEGRATED',
      schematic: (
        <svg width="100%" height="100%" viewBox="0 0 240 120" fill="none">
          <polygon points="120 15 190 55 190 95 120 115 50 95 50 55" stroke="#00F0FF" strokeWidth="1.5" />
          <polygon points="120 35 160 60 160 85 120 100 80 85 80 60" stroke="#9D4EDD" strokeWidth="1.2" strokeDasharray="2 2" />
          <line x1="120" y1="15" x2="120" y2="115" stroke="#232035" strokeWidth="1" />
          <circle cx="120" cy="65" r="3.5" fill="#FF007F" />
        </svg>
      ),
    },
  ]

  return (
    <section id="work" className="work-section">
      <div className="cyber-container">
        <div className="section-hud-header">
          <div className="section-hud-label">
            <span>[ + ]</span>
            <span>DEPLOYED INITIATIVES // SPEC ARCHIVE</span>
          </div>
          <h2 className="section-hud-title">
            Selected <span>Engineering Fieldwork</span>
          </h2>
          <p className="section-hud-desc">
            Production systems stress-tested under high throughput, stringent security parameters, and zero margin for error.
          </p>
        </div>

        <div className="work-grid">
          {projects.map((project) => (
            <article key={project.id} className="cyber-card work-card">
              <div className="work-preview-stage" aria-hidden="true">
                <div className="work-hud-crosshairs">
                  <span>[ SPEC // {project.id} ]</span>
                </div>
                {project.schematic}
              </div>

              <div className="work-body">
                <div className="work-meta-row">
                  <span className="cyber-badge cyber-badge-yellow">{project.tag}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--neon-green)' }}>
                    {project.status}
                  </span>
                </div>

                <h3 className="work-title">{project.title}</h3>
                <p className="work-desc">{project.description}</p>

                <div className="work-tech-tags">
                  {project.stack.map((tech) => (
                    <span key={tech} className="work-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  className="service-action-trigger"
                  onClick={() => onOpenModal(`Spec: ${project.title}`)}
                >
                  <span>Review Architecture</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
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
