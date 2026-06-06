import { useState } from 'react'
import { LayoutDashboard, TrendingUp, Search, FileText, Bell, Star, Eye, Settings, Brain, BarChart2, BookOpen } from 'lucide-react'
import Metrics from './components/Metrics'
import Charts from './components/Charts'
import StockTable from './components/StockTable'
import StockDetail from './components/StockDetail'
import Rapports from './components/Rapports'
import Alertes from './components/Alertes'
import Marches from './components/Marches'
import Analyser from './components/Analyser'
import Landing from './pages/Landing'
import Comparaison from './components/Comparaison'
import Glossaire from './components/Glossaire'
import './App.css'

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', section: null },
  { icon: TrendingUp, label: 'Marchés', section: null },
  { icon: Search, label: 'Analyser', section: null },
  { icon: BarChart2, label: 'Comparer', section: null },
  { icon: BookOpen, label: 'Glossaire', section: null },
  { icon: FileText, label: 'Rapports IA', section: null },
  { icon: Bell, label: 'Alertes', section: null },
  { icon: Star, label: 'Favoris', section: 'Portefeuille' },
  { icon: Eye, label: 'Watchlist', section: null },
  { icon: Settings, label: 'Paramètres', section: 'Compte' },
 
]

function Sidebar({ active, setActive }) {
  let lastSection = null
  return (
    <div style={{
      width: '200px', minHeight: '100vh', background: '#ffffff',
      borderRight: '1px solid #e5e7eb', padding: '1rem 0.75rem',
      display: 'flex', flexDirection: 'column', gap: '2px', flexShrink: 0
    }}>
      <div style={{ padding: '0.5rem 0.75rem 1.5rem', fontSize: '16px', fontWeight: '600', color: '#1a1d2e', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }} />
        FinSight
      </div>
      {navItems.map((item) => {
        const showSection = item.section && item.section !== lastSection
        if (item.section) lastSection = item.section
        const Icon = item.icon
        const isActive = active === item.label
        return (
          <div key={item.label}>
            {showSection && (
              <div style={{ fontSize: '10px', color: '#9ca3af', padding: '12px 10px 4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {item.section}
              </div>
            )}
            <div onClick={() => setActive(item.label)} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '7px 10px', borderRadius: '8px', cursor: 'pointer',
              background: isActive ? '#f0fdf4' : 'transparent',
              color: isActive ? '#059669' : '#6b7280',
              fontWeight: isActive ? '500' : '400',
              transition: 'all 0.15s'
            }}>
              <Icon size={15} />
              {item.label}
            </div>
          </div>
        )
      })}
    </div>
  )
}

function Topbar() {
  return (
    <div style={{
      height: '52px', background: '#ffffff', borderBottom: '1px solid #e5e7eb',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 1.5rem', flexShrink: 0
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ background: '#f3f4f6', color: '#6b7280', padding: '3px 10px', borderRadius: '20px', fontSize: '11px' }}>
          BVMT · BRVM · NSE · JSE
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', background: '#f0fdf4', color: '#059669', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
          <Brain size={11} /> IA active
        </div>
        <div style={{
          width: '30px', height: '30px', borderRadius: '50%',
          background: '#dbeafe', display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: '11px', fontWeight: '500', color: '#2563eb'
        }}>MA</div>
      </div>
    </div>
  )
}

function App() {
  const [active, setActive] = useState('Dashboard')
  const [selectedStock, setSelectedStock] = useState(null)
  const [showLanding, setShowLanding] = useState(true)

  if (showLanding) {
  return <Landing onEnter={() => setShowLanding(false)} />
}

return (
  <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
    <Sidebar active={active} setActive={setActive} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <Topbar />
      <div style={{ flex: 1, overflow: 'auto', padding: '1.5rem', background: '#f8f9fb' }}>
        {selectedStock ? (
          <StockDetail name={selectedStock} onBack={() => setSelectedStock(null)} />
        ) : active === 'Rapports IA' ? (
          <Rapports />
        ) : active === 'Alertes' ? (
          <Alertes />
        ) : active === 'Marchés' ? (
          <Marches />
        ) : active === 'Analyser' ? (
          <Analyser />
        ) : active === 'Comparer' ? (
          <Comparaison />
        ) : active === 'Glossaire' ? (
          <Glossaire />
        ) : (
          <>
            <h2 style={{ color: '#1a1d2e', marginBottom: '1.5rem', fontWeight: '500' }}>
              Bonjour 👋 — Vue d'ensemble
            </h2>
            <Metrics />
            <Charts />
            <StockTable onSelect={setSelectedStock} />
          </>
        )}
      </div>
    </div>
  </div>
)

}

export default App