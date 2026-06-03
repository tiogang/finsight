const stocks = [
  { name: 'SOTUMAG', market: 'BVMT', sector: 'Distribution', score: 82, rec: 'ACHETER', roe: '18.9%', marge: '28.4%', covid: '+6%' },
  { name: 'Dangote Cement', market: 'NSE', sector: 'Matériaux', score: 74, rec: 'ACHETER', roe: '22.1%', marge: '19.2%', covid: '-8%' },
  { name: 'Sonatel', market: 'BRVM', sector: 'Télécoms', score: 61, rec: 'CONSERVER', roe: '11.4%', marge: '14.7%', covid: '-11%' },
  { name: 'SOTETEL', market: 'BVMT', sector: 'Génie civil', score: 54, rec: 'CONSERVER', roe: '5.2%', marge: '0.7%', covid: '-32%' },
  { name: 'CELLCOM', market: 'BVMT', sector: 'Télécoms', score: 38, rec: 'SURVEILLER', roe: '3.8%', marge: '0.4%', covid: '-24%' },
]

const recStyle = {
  ACHETER: { background: '#f0fdf4', color: '#059669' },
  CONSERVER: { background: '#fffbeb', color: '#d97706' },
  SURVEILLER: { background: '#fef2f2', color: '#dc2626' },
}

function ScoreBar({ score }) {
  const color = score >= 70 ? '#059669' : score >= 50 ? '#d97706' : '#dc2626'
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ flex: 1, height: '4px', background: '#f3f4f6', borderRadius: '2px' }}>
        <div style={{ width: `${score}%`, height: '4px', background: color, borderRadius: '2px' }} />
      </div>
      <span style={{ fontSize: '13px', fontWeight: '500', color: '#1a1d2e', minWidth: '24px' }}>
        {score}
      </span>
    </div>
  )
}

export default function StockTable({ onSelect }) {
  return (
    <div style={{
      background: '#ffffff', border: '1px solid #e5e7eb',
      borderRadius: '12px', overflow: 'hidden'
    }}>
      <div style={{
        padding: '1rem 1.25rem', borderBottom: '1px solid #e5e7eb',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <span style={{ fontWeight: '500', color: '#1a1d2e' }}>Sociétés — Score IA</span>
        <span style={{ fontSize: '11px', color: '#9ca3af' }}>Mis à jour aujourd'hui</span>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #e5e7eb', background: '#f9fafb' }}>
            {['Société', 'Marché', 'Score IA', 'ROE', 'Marge nette', 'Impact COVID', 'Recommandation'].map(h => (
              <th key={h} style={{
                padding: '10px 1.25rem', textAlign: 'left',
                fontSize: '11px', color: '#9ca3af',
                fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {stocks.map((s, i) => (
            <tr
              key={s.name}
              onClick={() => onSelect(s.name)}
              style={{
                borderBottom: i < stocks.length - 1 ? '1px solid #f3f4f6' : 'none',
                transition: 'background 0.15s',
                cursor: 'pointer'
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <td style={{ padding: '12px 1.25rem' }}>
                <div style={{ fontWeight: '500', color: '#1a1d2e' }}>{s.name}</div>
                <div style={{ fontSize: '11px', color: '#9ca3af' }}>{s.sector}</div>
              </td>
              <td style={{ padding: '12px 1.25rem' }}>
                <span style={{ background: '#f3f4f6', color: '#6b7280', fontSize: '11px', padding: '2px 8px', borderRadius: '4px' }}>
                  {s.market}
                </span>
              </td>
              <td style={{ padding: '12px 1.25rem', minWidth: '140px' }}>
                <ScoreBar score={s.score} />
              </td>
              <td style={{ padding: '12px 1.25rem', color: '#374151' }}>{s.roe}</td>
              <td style={{ padding: '12px 1.25rem', color: '#374151' }}>{s.marge}</td>
              <td style={{ padding: '12px 1.25rem', color: s.covid.startsWith('+') ? '#059669' : '#dc2626' }}>
                {s.covid}
              </td>
              <td style={{ padding: '12px 1.25rem' }}>
                <span style={{ ...recStyle[s.rec], fontSize: '11px', fontWeight: '500', padding: '3px 8px', borderRadius: '4px' }}>
                  {s.rec}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}