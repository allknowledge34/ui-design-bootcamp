export function StandardsTicker() {
  const standards = [
    {
      code: '[01]',
      name: 'LOCAL-FIRST ENGINE',
      desc: 'All financial data is stored locally on your device with instant read/write cycles.'
    },
    {
      code: '[02]',
      name: 'ZERO TELEMETRY',
      desc: 'No analytics, no ad trackers, and no external server syncing of your balance.'
    },
    {
      code: '[03]',
      name: 'REAL-TIME CASHFLOW',
      desc: 'Continuous runway and net income calculations with zero manual spreadsheet formulas.'
    },
    {
      code: '[04]',
      name: 'CONTRACT ATTRIBUTION',
      desc: 'Map every invoice directly to active clients and track project-specific profitability.'
    },
    {
      code: '[05]',
      name: 'NATIVE ANDROID',
      desc: 'Engineered specifically for Android with minimal memory footprint and fast startup.'
    }
  ]

  return (
    <div className="standards-row-grid" aria-label="Product Standards">
      {standards.map((s) => (
        <div key={s.code} className="standard-tile">
          <span className="standard-code">{s.code}</span>
          <span className="standard-name">{s.name}</span>
          <p className="standard-desc">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}
