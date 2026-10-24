import { projectData } from '../data/projects';

export default function SelectedWork({ onSelectProject }) {
  return (
    <section id="work" className="work-section">
      <div className="container">
        <div className="work-header">
          <div>
            <span className="section-label">Selected Portfolio</span>
            <h2 className="section-title">Crafted with intention.</h2>
            <p className="section-subtitle">
              Every project is an exploration of silhouette, color weight, and narrative clarity. No templates, no stock files, just pure vector artistry.
            </p>
          </div>
          <span className="pill-badge yellow">3 Featured Case Studies</span>
        </div>

        <div className="work-showcase-stack">
          {projectData.map((project) => {
            const ArtComponent = project.artComponent;
            return (
              <article key={project.id} className={`work-item-card ${project.layoutClass}`}>
                <div className={`work-visual-stage ${project.stageClass}`}>
                  <ArtComponent />
                </div>

                <div className="work-content-stage">
                  <div className="work-item-top">
                    <div className="work-tag-row">
                      <span className={`pill-badge ${project.badgeClass}`}>{project.category}</span>
                      <span className="pill-badge">{project.year}</span>
                    </div>

                    <h3 className="work-item-title">{project.title}</h3>
                    <p className="work-item-desc">{project.description}</p>
                  </div>

                  <div>
                    <div className="work-spec-list">
                      <div className="work-spec-item">
                        <span className="work-spec-title">Client</span>
                        <span className="work-spec-detail">{project.client}</span>
                      </div>
                      <div className="work-spec-item">
                        <span className="work-spec-title">Disciplines</span>
                        <span className="work-spec-detail">{project.scope.split(',')[0]}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline btn-sm"
                      onClick={() => onSelectProject(project)}
                    >
                      Explore Case Study
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
