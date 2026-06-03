import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const bourses = [
  {
    id: 'BVMT',
    nom: 'Bourse de Tunis',
    pays: 'Tunisie',
    indice: 'TUNINDEX',
    valeur: '8 234.5',
    variation: '+1.2%',
    positif: true,
    volume: '2.4M DT',
    societes: 81,
    data: [
      { jour: 'Lun', v: 8100 }, { jour: 'Mar', v: 8150 }, { jour: 'Mer', v: 8090 },
      { jour: 'Jeu', v: 8180 }, { jour: 'Ven', v: 8234 },
    ]
  },
  {
    id: 'BRVM',
    nom: 'Bourse Régionale Valeurs Mobilières',
    pays: 'Afrique de l\'Ouest',
    indice: 'BRVMCI',
    valeur: '214.3',
    variation: '+0.8%',
    positif: true,
    volume: '1.1B XOF',
    societes: 46,
    data: [
      { jour: 'Lun', v: 211 }, { jour: 'Mar', v: 212 }, { jour: 'Mer', v: 210 },
      { jour: 'Jeu', v: 213 }, { jour: 'Ven', v: 214 },
    ]
  },
  {
    id: 'NSE',
    nom: 'Nigerian Stock Exchange',
    pays: 'Nigeria',
    indice: 'NGX ALL-SHARE',
    valeur: '98 432.1',
    variation: '-0.4%',
    positif: false,
    volume: '4.2B NGN',
    societes: 154,
    data: [
      { jour: 'Lun', v: 99100 }, { jour: 'Mar', v: 98900 }, { jour: 'Mer', v: 99200 },
      { jour: 'Jeu', v: 98700 }, { jour: 'Ven', v: 98432 },
    ]
  },
  {
    id: 'JSE',
    nom: 'Johannesburg Stock Exchange',
    pays: 'Afrique du Sud',
    indice: 'JSE TOP 40',
    valeur: '74 210.8',
    variation: '+2.1%',
    positif: true,
    volume: '18.3B ZAR',
    societes: 340,
    data: [
      { jour: 'Lun', v: 72600 }, { jour: 'Mar', v: 73100 }, { jour: 'Mer', v: 73800 },
      { jour: 'Jeu', v: 74000 }, { jour: 'Ven', v: 74210 },
    ]
  },
]

const macro = [
  { label: 'Inflation Tunisie', value: '9.3%', delta: '+0.2%', positif: false },
  { label: 'Taux BCT', value: '8.0%', delta: 'stable', positif: null },
  { label: 'USD/TND', value: '3.12', delta: '+0.8%', positif: false },
  { label: 'EUR/TND', value: '3.38', delta: '+0.3%', positif: false },
  { label: 'Inflation Nigeria', value: '33.2%', delta: '-0.4%', positif: true },
  { label: 'USD/NGN', value: '1 580', delta: '-1.2%', positif: true },
]

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '8px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <p style={{ color: '#9ca3af', fontSize: '11px' }}>{label}</p>
        <p style={{ color: '#059669', fontSize: '12px', fontWeight: '500' }}>{payload[0].value.toLocaleString()}</p>
      </div>
    )
  }
  return null
}

export default function Marches() {
  return (
    <div>
      <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px', marginBottom: '1.5rem' }}>
        Marchés africains
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '1.5rem' }}>
        {bourses.map(b => (
          <div key={b.id} style={{
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: '12px', padding: '1.25rem',
            transition: 'box-shadow 0.15s', cursor: 'pointer'
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontWeight: '600', color: '#1a1d2e', fontSize: '15px' }}>{b.id}</span>
                  <span style={{ fontSize: '11px', background: '#f3f4f6', color: '#6b7280', padding: '2px 8px', borderRadius: '4px' }}>{b.pays}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#9ca3af' }}>{b.nom}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: '600', color: '#1a1d2e', fontSize: '16px' }}>{b.valeur}</div>
                <div style={{ fontSize: '12px', color: b.positif ? '#059669' : '#dc2626', display: 'flex', alignItems: 'center', gap: '3px', justifyContent: 'flex-end' }}>
                  {b.positif ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                  {b.variation}
                </div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={80}>
              <AreaChart data={b.data}>
                <defs>
                  <linearGradient id={`grad-${b.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={b.positif ? '#059669' : '#dc2626'} stopOpacity={0.1} />
                    <stop offset="95%" stopColor={b.positif ? '#059669' : '#dc2626'} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="jour" hide />
                <YAxis hide domain={['auto', 'auto']} />
                <Tooltip content={customTooltip} />
                <Area
                  type="monotone" dataKey="v"
                  stroke={b.positif ? '#059669' : '#dc2626'}
                  fill={`url(#grad-${b.id})`}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #f3f4f6' }}>
              <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                Volume : <span style={{ color: '#374151', fontWeight: '500' }}>{b.volume}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                Sociétés : <span style={{ color: '#374151', fontWeight: '500' }}>{b.societes}</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9ca3af' }}>
                Indice : <span style={{ color: '#374151', fontWeight: '500' }}>{b.indice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
        <div style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px', marginBottom: '1rem' }}>
          Indicateurs macro — Région Afrique & MENA
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {macro.map(m => (
            <div key={m.label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px 14px', border: '1px solid #f3f4f6' }}>
              <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '4px' }}>{m.label}</div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#1a1d2e' }}>{m.value}</div>
              <div style={{ fontSize: '11px', marginTop: '2px', color: m.positif === null ? '#9ca3af' : m.positif ? '#059669' : '#dc2626' }}>
                {m.delta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}