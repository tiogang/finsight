function MetricCard({ label, value, sub, color }) {
  return (
    <div style={{
      background: '#ffffff', border: '1px solid #e5e7eb',
      borderRadius: '12px', padding: '1rem 1.25rem'
    }}>
      <div style={{ fontSize: '11px', color: '#9ca3af', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        {label}
      </div>
      <div style={{ fontSize: '22px', fontWeight: '600', color: color || '#1a1d2e' }}>
        {value}
      </div>
      <div style={{ fontSize: '11px', color: '#6b7280', marginTop: '4px' }}>
        {sub}
      </div>
    </div>
  )
}

export default function Metrics() {
  const data = [
    { label: 'Sociétés suivies', value: '47', sub: '4 bourses africaines', color: '#1a1d2e' },
    { label: 'Score moyen IA', value: '63/100', sub: '+2 pts ce mois', color: '#1a1d2e' },
    { label: 'Opportunités ACHETER', value: '12', sub: 'Détectées par ML', color: '#059669' },
    { label: 'Alertes actives', value: '3', sub: '2 urgentes', color: '#dc2626' },
  ]

  return (
    <div style={{
      display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '12px', marginBottom: '1.5rem'
    }}>
      {data.map((item) => (
        <MetricCard key={item.label} {...item} />
      ))}
    </div>
  )
}