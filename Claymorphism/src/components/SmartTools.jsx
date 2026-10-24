import { Send, Users, FileText, Smartphone } from 'lucide-react'

function SmartTools() {
  const tools = [
    {
      title: 'Send Invoices',
      desc: 'Instant tracking of client payments.',
      icon: <Send size={18} />,
      colorClass: 'circle-coral'
    },
    {
      title: 'Request Funds',
      desc: 'Get paid easily from clients.',
      icon: <Users size={18} />,
      colorClass: 'circle-mint'
    },
    {
      title: 'Pay Bills',
      desc: 'Handle write-offs in a few taps.',
      icon: <FileText size={18} />,
      colorClass: 'circle-sky'
    },
    {
      title: 'Mobile Tracking',
      desc: 'Top up your runway anytime, anywhere.',
      icon: <Smartphone size={18} />,
      colorClass: 'circle-sage'
    }
  ]

  return (
    <section className="clay-tools-section" id="features">
      <div className="clay-container">
        <div className="section-head-center">
          <h2 className="section-title-chunky">Smart Money Tools</h2>
          <p className="section-sub-clean">Everything you need in one place.</p>
        </div>

        <div className="clay-card-plate tools-horizontal-card">
          {tools.map((t) => (
            <div key={t.title} className="tool-column-item">
              <div className={`clay-icon-bubble ${t.colorClass}`}>
                {t.icon}
              </div>
              <h3 className="tool-title-text">{t.title}</h3>
              <p className="tool-desc-text">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SmartTools
