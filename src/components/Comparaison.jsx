import { Brain, TrendingUp, TrendingDown } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useState } from 'react'

const toutesLesSocietes = [
  { name: 'SOTUMAG', market: 'BVMT', sector: 'Distribution', score: 82, rec: 'ACHETER', roe: 18.9, marge: 28.4, liquidite: 2.31, variation: '+3.2%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 96 }, { axe: 'Croissance', value: 70 }, { axe: 'Liquidité', value: 85 }, { axe: 'Structure', value: 75 }, { axe: 'Taille', value: 80 }],
  },
  { name: 'Dangote Cement', market: 'NSE', sector: 'Matériaux', score: 74, rec: 'ACHETER', roe: 22.1, marge: 19.2, liquidite: 1.87, variation: '+5.4%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 88 }, { axe: 'Croissance', value: 72 }, { axe: 'Liquidité', value: 74 }, { axe: 'Structure', value: 80 }, { axe: 'Taille', value: 95 }],
  },
  { name: 'Sonatel', market: 'BRVM', sector: 'Télécoms', score: 61, rec: 'CONSERVER', roe: 11.4, marge: 14.7, liquidite: 1.44, variation: '+2.1%', positif: true,
    radar: [{ axe: 'Rentabilité', value: 65 }, { axe: 'Croissance', value: 55 }, { axe: 'Liquidité', value: 60 }, { axe: 'Structure', value: 70 }, { axe: 'Taille', value: 78 }],
  },
  { name: 'SOTETEL', market: 'BVMT', sector: 'Génie civil', score: 54, rec: 'CONSERVER', roe: 5.2, marge: 0.7, liquidite: 1.08, variation: '-1.1%', positif: false,
    radar: [{ axe: 'Rentabilité', value: 48 }, { axe: 'Croissance', value: 87 }, { axe: 'Liquidité', value: 40 }, { axe: 'Structure', value: 75 }, { axe: 'Taille', value: 53 }],
  },
  { name: 'CELLCOM', market: 'BVMT', sector: 'Télécoms', score: 38, rec: 'SURVEILLER', roe: 3.8, marge: 0.4, liquidite: 1.12, variation: '-0.8%', positif: false,
    radar: [{ axe: 'Rentabilité', value: 32 }, { axe: 'Croissance', value: 47 }, { axe: 'Liquidité', value: 55 }, { axe: 'Structure', value: 45 }, { axe: 'Taille', value: 44 }],
  },
]

const recStyle = {
  ACHETER: { background: '#f0fdf4', color: '#059669' },
  CONSERVER: { background: '#fffbeb', color: '#d97706' },
  SURVEILLER: { background: '#fef2f2', color: '#dc2626' },
}

const COLORS = ['#059669', '#7f77dd']

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <p style={{ color: '#9ca3af', fontSize: '11px', marginBottom: '6px' }}>{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.fill, fontSize: '12px', margin: '2px 0' }}>
            {p.name}: <strong>{p.value}%</strong>
          </p>
        ))}
      </div>
    )
  }
  return null
}

export default function Comparaison() {
  const [selected, setSelected] = useState([null, null])

  const handleSelect = (index, name) => {
    const newSelected = [...selected]
    newSelected[index] = toutesLesSocietes.find(s => s.name === name) || null
    setSelected(newSelected)
  }

  const barData = selected[0] && selected[1] ? [
    { metric: 'ROE', [selected[0].name]: selected[0].roe, [selected[1].name]: selected[1].roe },
    { metric: 'Marge', [selected[0].name]: selected[0].marge, [selected[1].name]: selected[1].marge },
    { metric: 'Liquidité', [selected[0].name]: selected[0].liquidite, [selected[1].name]: selected[1].liquidite },
    { metric: 'Score IA', [selected[0].name]: selected[0].score, [selected[1].name]: selected[1].score },
  ] : []

  const radarData = selected[0] && selected[1] ? selected[0].radar.map((r, i) => ({
    axe: r.axe,
    [selected[0].name]: r.value,
    [selected[1].name]: selected[1].radar[i].value,
  })) : []

  return (
    <div>
      <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px', marginBottom: '1.5rem' }}>
        Comparer des sociétés
      </h2>

      {/* SÉLECTEURS */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '1.5rem' }}>
        {[0, 1].map(i => (
          <div key={i} style={{ background: '#ffffff', border: `1px solid ${selected[i] ? COLORS[i] + '60' : '#e5e7eb'}`, borderRadius: '12px', padding: '1.25rem' }}>
            <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Société {i + 1}
            </div>
            <select
              value={selected[i]?.name || ''}
              onChange={e => handleSelect(i, e.target.value)}
              style={{
                width: '100%', padding: '10px 12px', background: '#f9fafb',
                border: '1px solid #e5e7eb', borderRadius: '8px',
                fontSize: '14px', color: '#1a1d2e', outline: 'none', cursor: 'pointer'
              }}
            >
              <option value=''>Sélectionner une société...</option>
              {toutesLesSocietes.map(s => (
                <option key={s.name} value={s.name}>{s.name} — {s.market}</option>
              ))}
            </select>

            {selected[i] && (
              <div style={{ marginTop: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <div>
                    <div style={{ fontWeight: '600', color: '#1a1d2e', fontSize: '15px' }}>{selected[i].name}</div>
                    <div style={{ fontSize: '11px', color: '#9ca3af' }}>{selected[i].market} · {selected[i].sector}</div>
                  </div>
                  <span style={{ ...recStyle[selected[i].rec], fontSize: '11px', fontWeight: '500', padding: '3px 10px', borderRadius: '6px' }}>
                    {selected[i].rec}
                  </span>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                  {[
                    { label: 'Score IA', value: selected[i].score + '/100', color: COLORS[i] },
                    { label: 'ROE', value: selected[i].roe + '%' },
                    { label: 'Marge', value: selected[i].marge + '%' },
                  ].map(m => (
                    <div key={m.label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '8px 10px', border: '1px solid #f3f4f6' }}>
                      <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '3px' }}>{m.label}</div>
                      <div style={{ fontSize: '14px', fontWeight: '600', color: m.color || '#1a1d2e' }}>{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* GRAPHIQUES DE COMPARAISON */}
      {selected[0] && selected[1] ? (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px', marginBottom: '1rem' }}>Comparaison des indicateurs</div>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={barData}>
                  <XAxis dataKey="metric" stroke="#e5e7eb" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <YAxis stroke="#e5e7eb" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Tooltip content={customTooltip} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey={selected[0].name} fill={COLORS[0]} radius={[4, 4, 0, 0]} />
                  <Bar dataKey={selected[1].name} fill={COLORS[1]} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px', marginBottom: '1rem' }}>Profil financier comparé</div>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="axe" tick={{ fontSize: 11, fill: '#6b7280' }} />
                  <Radar dataKey={selected[0].name} stroke={COLORS[0]} fill={COLORS[0]} fillOpacity={0.1} strokeWidth={2} />
                  <Radar dataKey={selected[1].name} stroke={COLORS[1]} fill={COLORS[1]} fillOpacity={0.1} strokeWidth={2} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* TABLEAU COMPARATIF */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid #e5e7eb', fontWeight: '500', color: '#1a1d2e', fontSize: '13px' }}>
              Tableau comparatif détaillé
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                  <th style={{ padding: '10px 1.25rem', textAlign: 'left', fontSize: '11px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase' }}>Indicateur</th>
                  <th style={{ padding: '10px 1.25rem', textAlign: 'center', fontSize: '13px', color: COLORS[0], fontWeight: '600' }}>{selected[0].name}</th>
                  <th style={{ padding: '10px 1.25rem', textAlign: 'center', fontSize: '13px', color: COLORS[1], fontWeight: '600' }}>{selected[1].name}</th>
                  <th style={{ padding: '10px 1.25rem', textAlign: 'center', fontSize: '11px', color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase' }}>Avantage</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Score IA', v0: selected[0].score, v1: selected[1].score, unit: '/100', higher: true },
                  { label: 'ROE', v0: selected[0].roe, v1: selected[1].roe, unit: '%', higher: true },
                  { label: 'Marge nette', v0: selected[0].marge, v1: selected[1].marge, unit: '%', higher: true },
                  { label: 'Liquidité', v0: selected[0].liquidite, v1: selected[1].liquidite, unit: 'x', higher: true },
                ].map((row, i) => {
                  const winner = row.higher ? (row.v0 > row.v1 ? 0 : 1) : (row.v0 < row.v1 ? 0 : 1)
                  return (
                    <tr key={row.label} style={{ borderBottom: '1px solid #f3f4f6', background: i % 2 === 0 ? '#ffffff' : '#fafafa' }}>
                      <td style={{ padding: '12px 1.25rem', fontSize: '13px', color: '#374151', fontWeight: '500' }}>{row.label}</td>
                      <td style={{ padding: '12px 1.25rem', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: winner === 0 ? COLORS[0] : '#9ca3af' }}>
                        {row.v0}{row.unit}
                      </td>
                      <td style={{ padding: '12px 1.25rem', textAlign: 'center', fontSize: '14px', fontWeight: '600', color: winner === 1 ? COLORS[1] : '#9ca3af' }}>
                        {row.v1}{row.unit}
                      </td>
                      <td style={{ padding: '12px 1.25rem', textAlign: 'center' }}>
                        <span style={{ fontSize: '11px', fontWeight: '500', padding: '2px 10px', borderRadius: '20px', background: winner === 0 ? '#f0fdf4' : '#f3f0ff', color: COLORS[winner] }}>
                          {winner === 0 ? selected[0].name : selected[1].name}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* VERDICT IA */}
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '12px', padding: '1.25rem', marginTop: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Brain size={14} color="#059669" />
              <span style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px' }}>Verdict IA</span>
            </div>
            <p style={{ fontSize: '13px', color: '#065f46', lineHeight: '1.7' }}>
              Sur les 4 indicateurs clés analysés, <strong>{
                (() => {
                  const scores = [0, 0]
                  if (selected[0].score > selected[1].score) scores[0]++; else scores[1]++
                  if (selected[0].roe > selected[1].roe) scores[0]++; else scores[1]++
                  if (selected[0].marge > selected[1].marge) scores[0]++; else scores[1]++
                  if (selected[0].liquidite > selected[1].liquidite) scores[0]++; else scores[1]++
                  return scores[0] >= scores[1] ? selected[0].name : selected[1].name
                })()
              }</strong> ressort en tête avec de meilleures performances globales.
              La recommandation IA pour <strong>{selected[0].name}</strong> est <strong>{selected[0].rec}</strong> et pour <strong>{selected[1].name}</strong> est <strong>{selected[1].rec}</strong>.
            </p>
          </div>
        </>
      ) : (
        <div style={{ background: '#f9fafb', border: '1px dashed #e5e7eb', borderRadius: '12px', padding: '3rem', textAlign: 'center' }}>
          <div style={{ fontSize: '32px', marginBottom: '12px' }}>⚖️</div>
          <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '8px' }}>Sélectionnez deux sociétés à comparer</div>
          <div style={{ fontSize: '13px', color: '#9ca3af' }}>Choisissez une société dans chaque colonne pour voir la comparaison</div>
        </div>
      )}
    </div>
  )
}