import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const caData = [
  { year: '2019', SOTUMAG: 122, SOTETEL: 50, CELLCOM: 94 },
  { year: '2020', SOTUMAG: 129, SOTETEL: 34, CELLCOM: 71 },
  { year: '2021', SOTUMAG: 138, SOTETEL: 41, CELLCOM: 78 },
  { year: '2022', SOTUMAG: 148, SOTETEL: 46, CELLCOM: 83 },
  { year: '2023', SOTUMAG: 155, SOTETEL: 50, CELLCOM: 88 },
  { year: '2024', SOTUMAG: 160, SOTETEL: 53, CELLCOM: 91 },
]

const margeData = [
  { year: '2019', SOTUMAG: 27.1, SOTETEL: 0.8, CELLCOM: 0.5 },
  { year: '2020', SOTUMAG: 28.3, SOTETEL: 0.4, CELLCOM: 0.2 },
  { year: '2021', SOTUMAG: 27.8, SOTETEL: 0.6, CELLCOM: 0.3 },
  { year: '2022', SOTUMAG: 28.9, SOTETEL: 0.7, CELLCOM: 0.4 },
  { year: '2023', SOTUMAG: 29.1, SOTETEL: 0.7, CELLCOM: 0.4 },
  { year: '2024', SOTUMAG: 28.4, SOTETEL: 0.7, CELLCOM: 0.4 },
]

const customTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: '#ffffff', border: '1px solid #e5e7eb',
        borderRadius: '8px', padding: '10px 14px',
        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
      }}>
        <p style={{ color: '#9ca3af', fontSize: '11px', marginBottom: '6px' }}>{label}</p>
        {payload.map(p => (
          <p key={p.name} style={{ color: p.color, fontSize: '12px', margin: '2px 0' }}>
            {p.name}: <strong>{p.value}</strong>
          </p>
        ))}
      </div>
    )
  }
  return null
}

function ChartCard({ title, children }) {
  return (
    <div style={{
      background: '#ffffff', border: '1px solid #e5e7eb',
      borderRadius: '12px', padding: '1.25rem'
    }}>
      <div style={{ fontWeight: '500', color: '#1a1d2e', marginBottom: '1.25rem', fontSize: '13px' }}>
        {title}
      </div>
      {children}
    </div>
  )
}

export default function Charts() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', margin: '12px 0' }}>
      <ChartCard title="Évolution du chiffre d'affaires (MDT)">
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={caData}>
            <XAxis dataKey="year" stroke="#d1d5db" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis stroke="#d1d5db" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip content={customTooltip} />
            <Legend wrapperStyle={{ fontSize: '11px', color: '#6b7280' }} />
            <Line type="monotone" dataKey="SOTUMAG" stroke="#059669" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="SOTETEL" stroke="#7f77dd" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="CELLCOM" stroke="#f59e0b" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard title="Marge nette comparée (%)">
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={margeData}>
            <XAxis dataKey="year" stroke="#d1d5db" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <YAxis stroke="#d1d5db" tick={{ fontSize: 11, fill: '#6b7280' }} />
            <Tooltip content={customTooltip} />
            <Legend wrapperStyle={{ fontSize: '11px', color: '#6b7280' }} />
            <Bar dataKey="SOTUMAG" fill="#059669" radius={[3, 3, 0, 0]} />
            <Bar dataKey="SOTETEL" fill="#7f77dd" radius={[3, 3, 0, 0]} />
            <Bar dataKey="CELLCOM" fill="#f59e0b" radius={[3, 3, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  )
}