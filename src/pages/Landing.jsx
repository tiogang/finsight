import { useState } from 'react'
import { ArrowRight, Brain, Globe, FileText, Bell, BarChart2, Shield } from 'lucide-react'

export default function Landing({ onEnter }) {
  const [email, setEmail] = useState('')

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif', color: '#1a1d2e', background: '#ffffff' }}>

      {/* NAVBAR */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1rem 6%', borderBottom: '1px solid #f3f4f6',
        position: 'sticky', top: 0, background: '#ffffffee', backdropFilter: 'blur(10px)',
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '18px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }} />
          FinSight Africa
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: '#6b7280', cursor: 'pointer' }}>Fonctionnalités</span>
          <span style={{ fontSize: '13px', color: '#6b7280', cursor: 'pointer' }}>Marchés</span>
          <span style={{ fontSize: '13px', color: '#6b7280', cursor: 'pointer' }}>Tarifs</span>
          <button onClick={onEnter} style={{
            background: '#059669', border: 'none', color: '#fff',
            padding: '8px 18px', borderRadius: '8px', cursor: 'pointer',
            fontSize: '13px', fontWeight: '500'
          }}>
            Voir la démo →
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '6rem 6% 4rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '6px',
          background: '#f0fdf4', color: '#059669', fontSize: '12px', fontWeight: '500',
          padding: '4px 12px', borderRadius: '20px', marginBottom: '1.5rem',
          border: '1px solid #bbf7d0'
        }}>
          <Brain size={12} /> Propulsé par l'intelligence artificielle
        </div>

        <h1 style={{ fontSize: '48px', fontWeight: '700', lineHeight: '1.15', marginBottom: '1.25rem', color: '#0f172a' }}>
          L'intelligence financière,{' '}
          <span style={{ color: '#059669' }}>accessible à tous</span>{' '}
          ceux qui en ont besoin.
        </h1>

        <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.7', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Commençons par l'Afrique. BVMT, BRVM, NSE, JSE — analysés et expliqués par l'IA.
          Pour les étudiants, les PME et les entrepreneurs qui méritent mieux.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                padding: '12px 16px', border: 'none', background: 'transparent',
                fontSize: '14px', color: '#1a1d2e', outline: 'none', width: '260px'
              }}
            />
            <button style={{
              background: '#059669', border: 'none', color: '#fff',
              padding: '12px 20px', cursor: 'pointer', fontSize: '14px',
              fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              Commencer <ArrowRight size={14} />
            </button>
          </div>
          <button onClick={onEnter} style={{
            background: 'transparent', border: '1px solid #e5e7eb', color: '#374151',
            padding: '12px 20px', borderRadius: '10px', cursor: 'pointer',
            fontSize: '14px', fontWeight: '500'
          }}>
            Voir la démo →
          </button>
        </div>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '12px' }}>
          Gratuit pendant 30 jours · Aucune carte bancaire requise
        </p>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section style={{ padding: '2rem 6% 5rem' }}>
        <div style={{
          maxWidth: '1000px', margin: '0 auto',
          background: '#f8f9fb', border: '1px solid #e5e7eb',
          borderRadius: '16px', padding: '8px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{ background: '#ffffff', borderRadius: '10px', padding: '1.5rem', border: '1px solid #f3f4f6' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#059669' }} />
              <span style={{ fontWeight: '600', fontSize: '14px', color: '#1a1d2e' }}>FinSight</span>
              <span style={{ marginLeft: 'auto', background: '#f0fdf4', color: '#059669', fontSize: '11px', padding: '2px 10px', borderRadius: '20px', border: '1px solid #bbf7d0' }}>
                <Brain size={10} style={{ display: 'inline', marginRight: '4px' }} />IA active
              </span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '1rem' }}>
              {[
                { label: 'Sociétés suivies', value: '47', color: '#1a1d2e' },
                { label: 'Score moyen IA', value: '63/100', color: '#1a1d2e' },
                { label: 'Opportunités', value: '12', color: '#059669' },
                { label: 'Alertes actives', value: '3', color: '#dc2626' },
              ].map(m => (
                <div key={m.label} style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px', border: '1px solid #f3f4f6' }}>
                  <div style={{ fontSize: '10px', color: '#9ca3af', marginBottom: '4px', textTransform: 'uppercase' }}>{m.label}</div>
                  <div style={{ fontSize: '18px', fontWeight: '600', color: m.color }}>{m.value}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#f9fafb', borderRadius: '8px', padding: '12px', border: '1px solid #f3f4f6' }}>
              {[
                { name: 'SOTUMAG', market: 'BVMT', score: 82, rec: 'ACHETER', color: '#059669' },
                { name: 'Dangote Cement', market: 'NSE', score: 74, rec: 'ACHETER', color: '#059669' },
                { name: 'Sonatel', market: 'BRVM', score: 61, rec: 'CONSERVER', color: '#d97706' },
              ].map((s, i) => (
                <div key={s.name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 0', borderBottom: i < 2 ? '1px solid #f3f4f6' : 'none'
                }}>
                  <div>
                    <span style={{ fontWeight: '500', fontSize: '13px', color: '#1a1d2e' }}>{s.name}</span>
                    <span style={{ fontSize: '11px', color: '#9ca3af', marginLeft: '8px' }}>{s.market}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <div style={{ width: '60px', height: '3px', background: '#f3f4f6', borderRadius: '2px' }}>
                        <div style={{ width: `${s.score}%`, height: '3px', background: s.color, borderRadius: '2px' }} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: '#1a1d2e' }}>{s.score}</span>
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: '500', padding: '2px 8px', borderRadius: '4px', background: s.color === '#059669' ? '#f0fdf4' : '#fffbeb', color: s.color }}>
                      {s.rec}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LE PROBLÈME */}
      <section style={{ padding: '5rem 6%', background: '#f8f9fb', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
          L'analyse financière était réservée à une élite.
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '580px', margin: '0 auto 3rem', lineHeight: '1.7' }}>
          Les outils professionnels coûtent une fortune et ignorent les marchés africains.
          Les étudiants, PME et entrepreneurs méritaient mieux. FinSight Africa change ça.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { emoji: '🎓', title: 'Étudiants', desc: 'Des données réelles pour vos mémoires et projets académiques. Fini les analyses sans sources fiables.' },
            { emoji: '🏢', title: 'PME', desc: 'Évaluez la solidité financière de vos partenaires commerciaux avant de signer un contrat.' },
            { emoji: '🚀', title: 'Entrepreneurs', desc: 'Comprenez les marchés dans lesquels vous investissez avec des analyses claires et accessibles.' },
          ].map(c => (
            <div key={c.title} style={{ background: '#ffffff', borderRadius: '12px', padding: '1.5rem', border: '1px solid #e5e7eb', textAlign: 'left' }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{c.emoji}</div>
              <div style={{ fontWeight: '600', fontSize: '15px', color: '#1a1d2e', marginBottom: '8px' }}>{c.title}</div>
              <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3 AVANTAGES CLÉS */}
      <section style={{ padding: '5rem 6%', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
          Tout ce dont vous avez besoin
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '3rem' }}>
          Des fonctionnalités pensées pour être utiles, pas pour impressionner.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {[
            { icon: Brain, title: 'Score IA expliqué', desc: 'Chaque société reçoit un score sur 100 avec les raisons derrière. Compréhensible par tous, pas seulement les experts.' },
            { icon: Globe, title: '4 bourses africaines', desc: 'BVMT, BRVM, NSE, JSE — des marchés que les grandes plateformes ignorent. On les met en lumière.' },
            { icon: FileText, title: 'Rapports en un clic', desc: 'Générez un rapport PDF professionnel en quelques secondes. Idéal pour vos présentations et mémoires.' },
            { icon: BarChart2, title: 'Comparaison sociétés', desc: 'Mettez deux entreprises côte à côte et comparez leurs performances financières en un coup d\'œil.' },
            { icon: Bell, title: 'Alertes intelligentes', desc: 'Soyez notifié quand une opportunité ou un risque est détecté sur les sociétés que vous suivez.' },
            { icon: Shield, title: 'Analyse solvabilité', desc: 'Vérifiez la santé financière d\'un partenaire commercial avant de vous engager.' },
          ].map(f => {
            const Icon = f.icon
            return (
              <div key={f.title} style={{
                background: '#ffffff', borderRadius: '12px', padding: '1.5rem',
                border: '1px solid #e5e7eb', textAlign: 'left',
                transition: 'box-shadow 0.15s', cursor: 'default'
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 20px rgba(5,150,105,0.08)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
              >
                <div style={{ background: '#f0fdf4', width: '36px', height: '36px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  <Icon size={18} color="#059669" />
                </div>
                <div style={{ fontWeight: '600', fontSize: '14px', color: '#1a1d2e', marginBottom: '8px' }}>{f.title}</div>
                <div style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.6' }}>{f.desc}</div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CALL TO ACTION FINAL */}
      <section style={{ padding: '5rem 6%', background: '#f0fdf4', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0f172a', marginBottom: '1rem' }}>
          Prêt à analyser les marchés africains ?
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '2rem' }}>
          Rejoignez les premiers utilisateurs de FinSight Africa.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: '10px', overflow: 'hidden' }}>
            <input
              type="email"
              placeholder="Votre adresse email"
              style={{
                padding: '12px 16px', border: 'none', background: 'transparent',
                fontSize: '14px', color: '#1a1d2e', outline: 'none', width: '260px'
              }}
            />
            <button style={{
              background: '#059669', border: 'none', color: '#fff',
              padding: '12px 20px', cursor: 'pointer', fontSize: '14px',
              fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px'
            }}>
              Commencer gratuitement <ArrowRight size={14} />
            </button>
          </div>
        </div>
        <p style={{ fontSize: '12px', color: '#9ca3af', marginTop: '12px' }}>
          Gratuit pendant 30 jours · Aucune carte bancaire requise
        </p>
        <button onClick={onEnter} style={{
          marginTop: '1rem', background: 'transparent', border: 'none',
          color: '#059669', cursor: 'pointer', fontSize: '14px', fontWeight: '500',
          textDecoration: 'underline'
        }}>
          Ou explorer la démo directement →
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 6%', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '600', fontSize: '14px', color: '#1a1d2e' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#059669' }} />
          FinSight Africa
        </div>
        <div style={{ fontSize: '12px', color: '#9ca3af' }}>
          © 2026 FinSight Africa · Tous droits réservés
        </div>
      </footer>

    </div>
  )
}