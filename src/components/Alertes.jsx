import { AlertTriangle, TrendingUp, Info, Bell } from 'lucide-react'

const alertes = [
  {
    id: 1,
    titre: 'Signal ACHETER détecté — SOTUMAG',
    message: "Le modèle ML détecte une opportunité d'entrée sur SOTUMAG. Score en hausse de 78 à 82. Volume échangé en augmentation de +34% sur 5 jours.",
    societe: 'SOTUMAG',
    market: 'BVMT',
    type: 'opportunite',
    date: "Aujourd'hui 09:14",
    lu: false,
  },
  {
    id: 2,
    titre: 'Anomalie détectée — CELLCOM',
    message: "Chute inhabituelle du volume échangé sur CELLCOM. Variation de -18% en séance. Surveillance renforcée recommandée par l'IA.",
    societe: 'CELLCOM',
    market: 'BVMT',
    type: 'danger',
    date: "Aujourd'hui 08:32",
    lu: false,
  },
  {
    id: 3,
    titre: 'Rapport macro disponible — Inflation TND',
    message: "Le taux d'inflation tunisien atteint 9.3% en mai 2025. Impact potentiel sur les sociétés importatrices cotées à la BVMT.",
    societe: 'Macro Tunisie',
    market: 'BVMT',
    type: 'info',
    date: 'Hier 18:45',
    lu: true,
  },
  {
    id: 4,
    titre: 'Opportunité — Dangote Cement NSE',
    message: "Dangote Cement affiche une progression de +12% sur le mois. Le modèle prédit une continuation haussière avec une probabilité de 74%.",
    societe: 'Dangote Cement',
    market: 'NSE',
    type: 'opportunite',
    date: 'Hier 14:20',
    lu: true,
  },
  {
    id: 5,
    titre: 'Mise à jour scores IA — BRVM',
    message: "Les scores IA des sociétés BRVM ont été recalculés. Sonatel passe de 58 à 61. Ecobank maintient son score à 67.",
    societe: 'Multi-sociétés',
    market: 'BRVM',
    type: 'info',
    date: '30 Mai 2025',
    lu: true,
  },
  {
    id: 6,
    titre: 'Alerte baisse — SOTETEL',
    message: "SOTETEL enregistre une baisse de marge nette au T1 2025. Le score IA passe de 57 à 54. Révision de la recommandation en cours.",
    societe: 'SOTETEL',
    market: 'BVMT',
    type: 'danger',
    date: '29 Mai 2025',
    lu: true,
  },
]

const typeConfig = {
  opportunite: { icon: TrendingUp, color: '#059669', background: '#f0fdf4', border: '#bbf7d0', label: 'Opportunité' },
  danger: { icon: AlertTriangle, color: '#dc2626', background: '#fef2f2', border: '#fecaca', label: 'Alerte' },
  info: { icon: Info, color: '#2563eb', background: '#eff6ff', border: '#bfdbfe', label: 'Info' },
}

export default function Alertes() {
  const nonLues = alertes.filter(a => !a.lu).length

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px' }}>Alertes</h2>
          {nonLues > 0 && (
            <span style={{ background: '#fef2f2', color: '#dc2626', border: '1px solid #fecaca', fontSize: '11px', fontWeight: '600', padding: '2px 8px', borderRadius: '20px' }}>
              {nonLues} nouvelles
            </span>
          )}
        </div>
        <button style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: '#f3f4f6', border: 'none', color: '#6b7280',
          padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px'
        }}>
          <Bell size={14} /> Tout marquer comme lu
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {alertes.map(a => {
          const config = typeConfig[a.type]
          const Icon = config.icon
          return (
            <div key={a.id} style={{
              background: '#ffffff',
              border: `1px solid ${a.lu ? '#e5e7eb' : config.border}`,
              borderRadius: '12px', padding: '1rem 1.25rem',
              display: 'flex', alignItems: 'flex-start', gap: '12px',
              cursor: 'pointer', transition: 'box-shadow 0.15s',
              opacity: a.lu ? 0.75 : 1
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ background: config.background, borderRadius: '8px', padding: '8px', flexShrink: 0, marginTop: '2px' }}>
                <Icon size={16} color={config.color} />
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontWeight: '500', color: '#1a1d2e', fontSize: '13px' }}>
                      {a.titre}
                    </span>
                    {!a.lu && (
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: config.color, display: 'inline-block' }} />
                    )}
                  </div>
                  <span style={{ fontSize: '11px', color: '#9ca3af', whiteSpace: 'nowrap', marginLeft: '12px' }}>
                    {a.date}
                  </span>
                </div>

                <p style={{ fontSize: '12px', color: '#6b7280', lineHeight: '1.6', marginBottom: '8px' }}>
                  {a.message}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '10px', fontWeight: '500', padding: '2px 8px', borderRadius: '4px', background: config.background, color: config.color }}>
                    {config.label}
                  </span>
                  <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '4px', background: '#f3f4f6', color: '#6b7280' }}>
                    {a.market}
                  </span>
                  <span style={{ fontSize: '11px', color: '#9ca3af' }}>
                    {a.societe}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}