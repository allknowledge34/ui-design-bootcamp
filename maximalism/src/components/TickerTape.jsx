import { Star, Zap, DollarSign, Shield, Flame, CheckCircle } from 'lucide-react'

function TickerTape() {
  const itemsTop = [
    { text: 'REAL-TIME INCOME TRACKER', icon: <DollarSign size={16} strokeWidth={3} /> },
    { text: 'ZERO SPREADSHEET HEADACHES', icon: <Zap size={16} strokeWidth={3} /> },
    { text: 'INSTANT TAX WRITE-OFFS', icon: <Flame size={16} strokeWidth={3} /> },
    { text: '100% PRIVATE & LOCAL', icon: <Shield size={16} strokeWidth={3} /> },
    { text: 'AUTOMATED PAYMENT RADAR', icon: <CheckCircle size={16} strokeWidth={3} /> },
    { text: 'MULTI-CURRENCY FREELANCE HUB', icon: <Star size={16} strokeWidth={3} /> },
  ]

  const itemsBottom = [
    { text: 'CLIENT RETAINER MANAGEMENT', icon: <Star size={14} strokeWidth={2.5} /> },
    { text: 'OVERDUE INVOICE AUTO-CHASER', icon: <Zap size={14} strokeWidth={2.5} /> },
    { text: 'PROFIT & LOSS IN 1-CLICK', icon: <DollarSign size={14} strokeWidth={2.5} /> },
    { text: 'DESIGNED FOR INDEPENDENT PROS', icon: <Flame size={14} strokeWidth={2.5} /> },
    { text: 'UNCOMPLICATED CASHFLOW CLARITY', icon: <Shield size={14} strokeWidth={2.5} /> },
  ]

  return (
    <div className="ticker-wrapper" aria-hidden="true">
      <div className="ticker-track ticker-fast">
        <div className="ticker-inner">
          {[...itemsTop, ...itemsTop, ...itemsTop].map((item, idx) => (
            <div key={idx} className="ticker-item">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-bullet">★</span>
            </div>
          ))}
        </div>
      </div>
      <div className="ticker-track ticker-reverse">
        <div className="ticker-inner">
          {[...itemsBottom, ...itemsBottom, ...itemsBottom].map((item, idx) => (
            <div key={idx} className="ticker-item secondary">
              <span className="ticker-icon">{item.icon}</span>
              <span className="ticker-text">{item.text}</span>
              <span className="ticker-bullet">⚡</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TickerTape
