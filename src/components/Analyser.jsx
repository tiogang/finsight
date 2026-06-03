import { useState } from 'react'
import { Search, Brain, TrendingUp, TrendingDown } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts'

const toutesLesSocietes = [
  { name: 'SOTUMAG', market: 'BVMT', sector: 'Distribution', score: 82, rec: 'ACHETER', roe: '18.9%', marge: '28.4%', variation: '+3.2%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 96 }, { axe: 'Croissance', value: 70 }, { axe: 'Liquidité', value: 85 }, { axe: 'Structure', value: 75 }, { axe: 'Taille', value: 80 }],
    analyse: "SOTUMAG maintient sa position dominante avec une marge nette de 28.4% et un ROE de 18.9%. Position quasi-monopolistique sur la distribution vétérinaire en Tunisie. Recommandation ACHETER avec conviction forte."
  },
  { name: 'Dangote Cement', market: 'NSE', sector: 'Matériaux', score: 74, rec: 'ACHETER', roe: '22.1%', marge: '19.2%', variation: '+5.4%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 88 }, { axe: 'Croissance', value: 72 }, { axe: 'Liquidité', value: 74 }, { axe: 'Structure', value: 80 }, { axe: 'Taille', value: 95 }],
    analyse: "Leader incontesté du ciment en Afrique subsaharienne. ROE de 22.1% et croissance structurelle portée par la démographie africaine. Recommandation ACHETER long terme."
  },
  { name: 'Sonatel', market: 'BRVM', sector: 'Télécoms', score: 61, rec: 'CONSERVER', roe: '11.4%', marge: '14.7%', variation: '+2.1%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 65 }, { axe: 'Croissance', value: 55 }, { axe: 'Liquidité', value: 60 }, { axe: 'Structure', value: 70 }, { axe: 'Taille', value: 78 }],
    analyse: "Opérateur dominant en Afrique de l'Ouest. Marges correctes mais sous pression concurrentielle. Dividendes réguliers attractifs. CONSERVER."
  },
  { name: 'SOTETEL', market: 'BVMT', sector: 'Génie civil', score: 54, rec: 'CONSERVER', roe: '5.2%', marge: '0.7%', variation: '-1.1%', positif: false,
    radar: [{ axe: 'Rentabilité', value: 48 }, { axe: 'Croissance', value: 87 }, { axe: 'Liquidité', value: 40 }, { axe: 'Structure', value: 75 }, { axe: 'Taille', value: 53 }],
    analyse: "Forte dépendance aux marchés publics. Marges comprimées à 0.7%. Reprise post-COVID notable. CONSERVER en attendant confirmation de tendance."
  },
  { name: 'CELLCOM', market: 'BVMT', sector: 'Télécoms', score: 38, rec: 'SURVEILLER', roe: '3.8%', marge: '0.4%', variation: '-0.8%', positif: false,
    radar: [{ axe: 'Rentabilité', value: 32 }, { axe: 'Croissance', value: 47 }, { axe: 'Liquidité', value: 55 }, { axe: 'Structure', value: 45 }, { axe: 'Taille', value: 44 }],
    analyse: "Marges chroniquement comprimées. Structure capitalistique tendue. Impact COVID non totalement absorbé. Position à monitorer sans exposition significative."
  },
]

const recStyle = {
  ACHETER: { background: '#f0fdf4', color: '#059669' },
  CONSERVER: { background: '#fffbeb', color: '#d97706' },
  SURVEILLER: { background: '#fef2f2', color: '#dc2626' },
}

export default function Analyser() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)

  const resultats = toutesLesSocietes.filter(s =>
    s.name.toLowerCase().includes(query.toLowerCase()) ||
    s.market.toLowerCase().includes(query.toLowerCase()) ||
    s.sector.toLowerCase().includes(query.toLowerCase())
  )

  const scoreColor = s => s.score >= 70 ? '#059669' : s.score >= 50 ? '#d97706' : '#dc2626'

  return (
    <div>
      <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px', marginBottom: '1.5rem' }}>
        Analyser une société
      </h2>

      <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
        <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
        <input
          type="text"
          placeholder="Rechercher une société, un marché ou un secteur..."
          value={query}
          onChange={e => { setQuery(e.target.value); setSelected(null) }}
          style={{
            width: '100%', padding: '12px 14px 12px 40px',
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: '10px', fontSize: '14px', color: '#1a1d2e',
            outline: 'none', boxSizing: 'border-box',
            transition: 'border-color 0.15s'
          }}
          onFocus={e => e.target.style.borderColor = '#059669'}
          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
        />
      </div>

      {!selected ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {resultats.map(s => (
            <div key={s.name} onClick={() => setSelected(s)} style={{
              background: '#ffffff', border: '1px solid #e5e7eb',
              borderRadius: '10px', padding: '1rem 1.25rem',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              cursor: 'pointer', transition: 'box-shadow 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Brain size={18} color="#059669" />
                </div>
                <div>
                  <div style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '14px' }}>{s.name}</div>
                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>{s.market} · {s.sector}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '2px' }}>Score IA</div>
                  <div style={{ fontWeight: '600', color: scoreColor(s), fontSize: '16px' }}>{s.score}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '2px' }}>ROE</div>
                  <div style={{ fontWeight: '500', color: '#374151' }}>{s.roe}</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '2px' }}>Variation</div>
                  <div style={{ fontSize: '13px', color: s.positif ? '#059669' : '#dc2626', display: 'flex', alignItems: 'center', gap: '3px' }}>
                    {s.positif ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                    {s.variation}
                  </div>
                </div>
                <span style={{ ...recStyle[s.rec], fontSize: '11px', fontWeight: '500', padding: '4px 10px', borderRadius: '6px' }}>
                  {s.rec}
                </span>
              </div>
            </div>
          ))}
          {resultats.length === 0 && (
            <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af', fontSize: '14px' }}>
              Aucune société trouvée pour "{query}"
            </div>
          )}
        </div>
      ) : (
        <div>
          <button onClick={() => setSelected(null)} style={{
            background: 'transparent', border: 'none', color: '#6b7280',
            cursor: 'pointer', fontSize: '13px', marginBottom: '1.25rem',
            display: 'flex', alignItems: 'center', gap: '6px', padding: 0
          }}>
            ← Retour à la recherche
          </button>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '1.25rem' }}>
            {[
              { label: 'Score IA', value: selected.score + '/100', color: scoreColor(selected) },
              { label: 'ROE 2024', value: selected.roe, color: '#1a1d2e' },
              { label: 'Marge nette', value: selected.marge, color: '#1a1d2e' },
              { label: 'Variation', value: selected.variation, color: selected.positif ? '#059669' : '#dc2626' },
            ].map(m => (
              <div key={m.label} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem' }}>
                <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
                <div style={{ fontSize: '20px', fontWeight: '600', color: m.color }}>{m.value}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '1rem', fontSize: '13px' }}>Profil financier — Radar 5D</div>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={selected.radar}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="axe" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Radar dataKey="value" stroke="#059669" fill="#059669" fillOpacity={0.1} strokeWidth={2} />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '1rem', fontSize: '13px' }}>Informations générales</div>
                {[
                  { label: 'Société', value: selected.name },
                  { label: 'Marché', value: selected.market },
                  { label: 'Secteur', value: selected.sector },
                  { label: 'Recommandation', value: selected.rec },
                ].map(i => (
                  <div key={i.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f3f4f6' }}>
                    <span style={{ fontSize: '13px', color: '#9ca3af' }}>{i.label}</span>
                    <span style={{ fontSize: '13px', fontWeight: '500', color: '#1a1d2e' }}>{i.value}</span>
                  </div>
                ))}
              </div>
              <span style={{ ...recStyle[selected.rec], fontSize: '13px', fontWeight: '500', padding: '8px 16px', borderRadius: '8px', textAlign: 'center', marginTop: '1rem', display: 'block' }}>
                {selected.rec}
              </span>
            </div>
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Brain size={14} color="#059669" />
              <span style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px' }}>Analyse IA — Synthèse automatique</span>
            </div>
            <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '1rem', color: '#065f46', fontSize: '13px', lineHeight: '1.7', border: '1px solid #d1fae5' }}>
              {selected.analyse}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}