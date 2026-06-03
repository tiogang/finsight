import { FileText, Brain, Download, Clock } from 'lucide-react'

const rapports = [
  {
    id: 1,
    titre: 'Analyse complète — SOTUMAG 2024',
    societe: 'SOTUMAG',
    market: 'BVMT',
    date: '02 Juin 2025',
    type: 'Analyse fondamentale',
    rec: 'ACHETER',
    resume: "SOTUMAG affiche des performances exceptionnelles avec une marge nette de 28.4% et un ROE de 18.9%. Position dominante sur le marché vétérinaire tunisien. Score IA : 82/100.",
    pages: 8,
  },
  {
    id: 2,
    titre: 'Rapport sectoriel — Télécoms BVMT',
    societe: 'Secteur Télécoms',
    market: 'BVMT',
    date: '01 Juin 2025',
    type: 'Analyse sectorielle',
    rec: 'SURVEILLER',
    resume: "Le secteur télécoms tunisien reste sous pression avec des marges inférieures à 1%. CELLCOM et SOTETEL peinent à retrouver leurs niveaux pré-COVID. Opportunités limitées à court terme.",
    pages: 12,
  },
  {
    id: 3,
    titre: 'Opportunités Q3 2025 — Marché africain',
    societe: 'Multi-marchés',
    market: 'BVMT · NSE · BRVM',
    date: '30 Mai 2025',
    type: "Rapport d'opportunités",
    rec: 'ACHETER',
    resume: "Identification de 12 opportunités d'investissement à fort potentiel sur les marchés africains. Dangote Cement et Sonatel ressortent comme les positions les plus attractives hors BVMT.",
    pages: 15,
  },
  {
    id: 4,
    titre: 'Impact macro — Inflation TND & marchés',
    societe: 'Macro Tunisie',
    market: 'BVMT',
    date: '28 Mai 2025',
    type: 'Analyse macro',
    rec: 'NEUTRE',
    resume: "L'inflation persistante en Tunisie continue d'impacter les marges des sociétés importatrices. SOTUMAG reste la valeur la plus résistante grâce à son positionnement local.",
    pages: 6,
  },
]

const recStyle = {
  ACHETER: { background: '#f0fdf4', color: '#059669' },
  CONSERVER: { background: '#fffbeb', color: '#d97706' },
  SURVEILLER: { background: '#fef2f2', color: '#dc2626' },
  NEUTRE: { background: '#f3f4f6', color: '#6b7280' },
}

const typeColor = {
  'Analyse fondamentale': '#7f77dd',
  'Analyse sectorielle': '#2563eb',
  "Rapport d'opportunités": '#059669',
  'Analyse macro': '#d97706',
}

export default function Rapports() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px' }}>
          Rapports IA
        </h2>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#059669', border: 'none', color: '#fff',
          padding: '8px 16px', borderRadius: '8px', cursor: 'pointer',
          fontSize: '13px', fontWeight: '500'
        }}>
          <Brain size={14} /> Générer un rapport
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {rapports.map(r => (
          <div key={r.id} style={{
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: '12px', padding: '1.25rem',
            cursor: 'pointer', transition: 'border-color 0.15s, box-shadow 0.15s'
          }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = '#d1fae5'
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(5,150,105,0.08)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = '#e5e7eb'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ background: '#f3f4f6', borderRadius: '8px', padding: '8px' }}>
                  <FileText size={16} color="#6b7280" />
                </div>
                <div>
                  <div style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px', lineHeight: '1.4' }}>
                    {r.titre}
                  </div>
                  <div style={{ fontSize: '11px', color: '#9ca3af', marginTop: '2px' }}>
                    {r.market}
                  </div>
                </div>
              </div>
              <span style={{ ...recStyle[r.rec], fontSize: '10px', fontWeight: '500', padding: '2px 8px', borderRadius: '4px', whiteSpace: 'nowrap', marginLeft: '8px' }}>
                {r.rec}
              </span>
            </div>

            <div style={{ marginBottom: '10px' }}>
              <span style={{
                fontSize: '10px', fontWeight: '500', padding: '2px 8px', borderRadius: '4px',
                background: '#f3f4f6', color: typeColor[r.type] || '#6b7280'
              }}>
                {r.type}
              </span>
            </div>

            <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.6', marginBottom: '12px' }}>
              {r.resume}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px', borderTop: '1px solid #f3f4f6' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#9ca3af' }}>
                <Clock size={11} />
                {r.date} · {r.pages} pages
              </div>
              <button style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                background: '#f3f4f6', border: 'none', color: '#6b7280',
                padding: '4px 10px', borderRadius: '6px', cursor: 'pointer',
                fontSize: '11px', transition: 'all 0.15s'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#f0fdf4'
                  e.currentTarget.style.color = '#059669'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#f3f4f6'
                  e.currentTarget.style.color = '#6b7280'
                }}
              >
                <Download size={11} /> Télécharger PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}