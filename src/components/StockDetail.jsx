import { ArrowLeft, TrendingUp, TrendingDown, Brain } from 'lucide-react'
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts'

const stocksData = {
  SOTUMAG: {
    name: 'SOTUMAG', market: 'BVMT', sector: 'Distribution', rec: 'ACHETER',
    score: 82, roe: '18.9%', roa: '12.4%', marge: '28.4%', liquidite: '2.31',
    ca2024: '160 MDT', variation: '+3.2%', positif: true,
    analyse: "SOTUMAG maintient sa position dominante avec une marge nette de 28.4% et un ROE de 18.9%. Position quasi-monopolistique sur la distribution de produits vétérinaires et phytosanitaires en Tunisie. Résistance COVID démontrée avec une croissance de +6% en 2020. Dividendes réguliers et structure financière solide. Recommandation ACHETER avec conviction forte pour 2025.",
    radar: [
      { axe: 'Rentabilité', value: 96 },
      { axe: 'Croissance', value: 70 },
      { axe: 'Liquidité', value: 85 },
      { axe: 'Structure', value: 75 },
      { axe: 'Taille', value: 80 },
    ],
    historique: [
      { year: '2019', ca: 122 }, { year: '2020', ca: 129 },
      { year: '2021', ca: 138 }, { year: '2022', ca: 148 },
      { year: '2023', ca: 155 }, { year: '2024', ca: 160 },
    ]
  },
  SOTETEL: {
    name: 'SOTETEL', market: 'BVMT', sector: 'Génie civil', rec: 'CONSERVER',
    score: 54, roe: '5.2%', roa: '3.1%', marge: '0.7%', liquidite: '1.08',
    ca2024: '53 MDT', variation: '-1.1%', positif: false,
    analyse: "SOTETEL affiche une forte dépendance aux marchés publics avec une reprise marquée post-COVID. Les marges restent très comprimées à 0.7% en raison de la nature contractuelle de l'activité. Les perspectives 2025 sont liées aux chantiers d'infrastructure publics relancés. Profil spéculatif modéré — CONSERVER en attendant une confirmation de la tendance.",
    radar: [
      { axe: 'Rentabilité', value: 48 },
      { axe: 'Croissance', value: 87 },
      { axe: 'Liquidité', value: 40 },
      { axe: 'Structure', value: 75 },
      { axe: 'Taille', value: 53 },
    ],
    historique: [
      { year: '2019', ca: 50 }, { year: '2020', ca: 34 },
      { year: '2021', ca: 41 }, { year: '2022', ca: 46 },
      { year: '2023', ca: 50 }, { year: '2024', ca: 53 },
    ]
  },
  CELLCOM: {
    name: 'CELLCOM', market: 'BVMT', sector: 'Télécoms', rec: 'SURVEILLER',
    score: 38, roe: '3.8%', roa: '2.1%', marge: '0.4%', liquidite: '1.12',
    ca2024: '91 MDT', variation: '-0.8%', positif: false,
    analyse: "CELLCOM présente des marges chroniquement comprimées à 0.4% avec une forte volatilité liée à la dépendance des changes et aux coûts d'approvisionnement. L'impact COVID de -24% n'a pas été totalement absorbé en termes de marges. La structure capitalistique reste tendue. Position à monitorer sans exposition significative recommandée pour 2025.",
    radar: [
      { axe: 'Rentabilité', value: 32 },
      { axe: 'Croissance', value: 47 },
      { axe: 'Liquidité', value: 55 },
      { axe: 'Structure', value: 45 },
      { axe: 'Taille', value: 44 },
    ],
    historique: [
      { year: '2019', ca: 94 }, { year: '2020', ca: 71 },
      { year: '2021', ca: 78 }, { year: '2022', ca: 83 },
      { year: '2023', ca: 88 }, { year: '2024', ca: 91 },
    ]
  },
  'Dangote Cement': {
    name: 'Dangote Cement', market: 'NSE', sector: 'Matériaux', rec: 'ACHETER',
    score: 74, roe: '22.1%', roa: '14.3%', marge: '19.2%', liquidite: '1.87',
    ca2024: '2 140 MNGN', variation: '+5.4%', positif: true,
    analyse: "Dangote Cement est le leader incontesté du ciment en Afrique subsaharienne avec une présence dans 10 pays. ROE de 22.1% et marges solides à 19.2%. La croissance démographique africaine soutient une demande structurelle forte en matériaux de construction. Recommandation ACHETER pour les investisseurs long terme.",
    radar: [
      { axe: 'Rentabilité', value: 88 },
      { axe: 'Croissance', value: 72 },
      { axe: 'Liquidité', value: 74 },
      { axe: 'Structure', value: 80 },
      { axe: 'Taille', value: 95 },
    ],
    historique: [
      { year: '2019', ca: 1620 }, { year: '2020', ca: 1490 },
      { year: '2021', ca: 1780 }, { year: '2022', ca: 1920 },
      { year: '2023', ca: 2030 }, { year: '2024', ca: 2140 },
    ]
  },
  Sonatel: {
    name: 'Sonatel', market: 'BRVM', sector: 'Télécoms', rec: 'CONSERVER',
    score: 61, roe: '11.4%', roa: '7.2%', marge: '14.7%', liquidite: '1.44',
    ca2024: '1 380 MXOF', variation: '+2.1%', positif: true,
    analyse: "Sonatel est l'opérateur télécom dominant en Afrique de l'Ouest avec une présence au Sénégal, Mali, Guinée et Sierra Leone. Marges correctes à 14.7% mais sous pression concurrentielle croissante. Dividendes réguliers attractifs. CONSERVER avec potentiel de revalorisation en cas d'accélération du déploiement 5G.",
    radar: [
      { axe: 'Rentabilité', value: 65 },
      { axe: 'Croissance', value: 55 },
      { axe: 'Liquidité', value: 60 },
      { axe: 'Structure', value: 70 },
      { axe: 'Taille', value: 78 },
    ],
    historique: [
      { year: '2019', ca: 1180 }, { year: '2020', ca: 1120 },
      { year: '2021', ca: 1210 }, { year: '2022', ca: 1290 },
      { year: '2023', ca: 1350 }, { year: '2024', ca: 1380 },
    ]
  },
}

const recStyle = {
  ACHETER: { background: '#f0fdf4', color: '#059669' },
  CONSERVER: { background: '#fffbeb', color: '#d97706' },
  SURVEILLER: { background: '#fef2f2', color: '#dc2626' },
}

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '10px 14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
        <p style={{ color: '#9ca3af', fontSize: '11px', marginBottom: '4px' }}>{label}</p>
        <p style={{ color: '#059669', fontSize: '12px' }}>CA: <strong>{payload[0].value}</strong></p>
      </div>
    )
  }
  return null
}

export default function StockDetail({ name, onBack }) {
  const stock = stocksData[name]
  if (!stock) return null

  const scoreColor = stock.score >= 70 ? '#059669' : stock.score >= 50 ? '#d97706' : '#dc2626'

  return (
    <div>
      <button onClick={onBack} style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        background: 'transparent', border: 'none', color: '#6b7280',
        cursor: 'pointer', fontSize: '13px', marginBottom: '1.25rem', padding: 0
      }}>
        <ArrowLeft size={14} /> Retour au dashboard
      </button>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div>
          <h2 style={{ color: '#1a1d2e', fontWeight: '600', fontSize: '20px' }}>{stock.name}</h2>
          <span style={{ color: '#6b7280', fontSize: '13px' }}>{stock.market} · {stock.sector}</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: stock.positif ? '#059669' : '#dc2626', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            {stock.positif ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            {stock.variation}
          </span>
          <span style={{ ...recStyle[stock.rec], fontSize: '12px', fontWeight: '500', padding: '4px 12px', borderRadius: '6px' }}>
            {stock.rec}
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '1.25rem' }}>
        {[
          { label: 'Score IA', value: stock.score + '/100', color: scoreColor },
          { label: 'ROE 2024', value: stock.roe, color: '#1a1d2e' },
          { label: 'Marge nette', value: stock.marge, color: '#1a1d2e' },
          { label: 'Liquidité générale', value: stock.liquidite, color: '#1a1d2e' },
        ].map(m => (
          <div key={m.label} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '10px', padding: '1rem' }}>
            <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{m.label}</div>
            <div style={{ fontSize: '20px', fontWeight: '600', color: m.color }}>{m.value}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '1rem', fontSize: '13px' }}>Évolution CA</div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={stock.historique}>
              <XAxis dataKey="year" stroke="#e5e7eb" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <YAxis stroke="#e5e7eb" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Tooltip content={customTooltip} cursor={{ stroke: '#e5e7eb' }} />
              <Line type="monotone" dataKey="ca" stroke="#059669" strokeWidth={2} dot={{ fill: '#059669', r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
          <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '1rem', fontSize: '13px' }}>Profil financier — Radar 5D</div>
          <ResponsiveContainer width="100%" height={200}>
            <RadarChart data={stock.radar}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="axe" tick={{ fontSize: 11, fill: '#6b7280' }} />
              <Radar dataKey="value" stroke="#7f77dd" fill="#7f77dd" fillOpacity={0.15} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <Brain size={14} color="#7f77dd" />
          <span style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px' }}>Analyse IA — Synthèse automatique</span>
        </div>
        <div style={{ background: '#faf9ff', borderRadius: '8px', padding: '1rem', color: '#4c4899', fontSize: '13px', lineHeight: '1.7', border: '1px solid #e5e4f8' }}>
          {stock.analyse}
        </div>
      </div>
    </div>
  )
}