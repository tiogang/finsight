import { useState } from 'react'
import { Search, BookOpen } from 'lucide-react'

const termes = [
  { terme: 'ROE', categorie: 'Rentabilité', definition: 'Return On Equity — Retour sur capitaux propres. Mesure la capacité d\'une entreprise à générer des profits à partir des fonds investis par ses actionnaires. Un ROE élevé indique une entreprise efficace.', formule: 'Résultat net / Capitaux propres × 100' },
  { terme: 'ROA', categorie: 'Rentabilité', definition: 'Return On Assets — Retour sur actifs. Mesure la capacité d\'une entreprise à générer des bénéfices à partir de l\'ensemble de ses actifs. Utile pour comparer des entreprises d\'un même secteur.', formule: 'Résultat net / Total actifs × 100' },
  { terme: 'Marge nette', categorie: 'Rentabilité', definition: 'Pourcentage du chiffre d\'affaires qui se transforme en bénéfice net après déduction de toutes les charges. Une marge nette élevée signifie que l\'entreprise garde une grande part de ses revenus.', formule: 'Résultat net / Chiffre d\'affaires × 100' },
  { terme: 'Marge brute', categorie: 'Rentabilité', definition: 'Différence entre le chiffre d\'affaires et le coût des marchandises vendues. Indique combien l\'entreprise gagne avant de payer ses charges d\'exploitation.', formule: '(CA - Coût des ventes) / CA × 100' },
  { terme: 'P/E Ratio', categorie: 'Valorisation', definition: 'Price to Earnings — Ratio cours/bénéfice. Compare le prix d\'une action au bénéfice par action. Un P/E élevé peut indiquer une action surévaluée ou de fortes perspectives de croissance.', formule: 'Prix de l\'action / Bénéfice par action' },
  { terme: 'Capitalisation boursière', categorie: 'Valorisation', definition: 'Valeur totale d\'une entreprise en bourse. Calculée en multipliant le nombre d\'actions par le cours actuel. Permet de classer les entreprises par taille.', formule: 'Nombre d\'actions × Prix de l\'action' },
  { terme: 'Liquidité générale', categorie: 'Solvabilité', definition: 'Mesure la capacité d\'une entreprise à rembourser ses dettes à court terme avec ses actifs à court terme. Un ratio supérieur à 1 indique une bonne santé financière à court terme.', formule: 'Actifs courants / Passifs courants' },
  { terme: 'Endettement', categorie: 'Solvabilité', definition: 'Ratio qui mesure la part des dettes dans le financement de l\'entreprise. Un endettement élevé peut être risqué mais aussi amplifier les rendements en période de croissance.', formule: 'Dettes totales / Capitaux propres' },
  { terme: 'EBITDA', categorie: 'Performance', definition: 'Earnings Before Interest, Taxes, Depreciation and Amortization. Bénéfice avant intérêts, impôts, dépréciation et amortissement. Indicateur de la performance opérationnelle pure d\'une entreprise.', formule: 'Résultat net + Intérêts + Impôts + Amortissements' },
  { terme: 'Dividende', categorie: 'Rendement', definition: 'Part des bénéfices distribuée aux actionnaires. Un dividende régulier est souvent signe de bonne santé financière et attire les investisseurs en quête de revenus passifs.', formule: 'Bénéfice distribué / Nombre d\'actions' },
  { terme: 'Rendement du dividende', categorie: 'Rendement', definition: 'Rapport entre le dividende versé et le prix de l\'action. Indique le retour annuel en dividendes pour un investisseur. Utile pour comparer des actions à revenus.', formule: 'Dividende annuel / Prix de l\'action × 100' },
  { terme: 'Chiffre d\'affaires', categorie: 'Performance', definition: 'Total des ventes réalisées par une entreprise sur une période donnée. C\'est la première ligne du compte de résultat et le point de départ de toute analyse financière.', formule: 'Somme de toutes les ventes' },
  { terme: 'Bénéfice net', categorie: 'Performance', definition: 'Profit final d\'une entreprise après déduction de toutes les charges, impôts et intérêts. C\'est le résultat final qui peut être distribué aux actionnaires ou réinvesti.', formule: 'CA - Toutes les charges - Impôts' },
  { terme: 'Actif', categorie: 'Bilan', definition: 'Ensemble des biens et droits que possède une entreprise — machines, stocks, créances, trésorerie. Le bilan liste tous les actifs d\'un côté et les sources de financement de l\'autre.', formule: 'Actifs = Passifs + Capitaux propres' },
  { terme: 'Capitaux propres', categorie: 'Bilan', definition: 'Montant appartenant aux actionnaires après déduction de toutes les dettes. Représente la valeur comptable nette de l\'entreprise. Aussi appelé "valeur nette comptable".', formule: 'Total actifs - Total dettes' },
  { terme: 'Score IA', categorie: 'FinSight', definition: 'Indicateur propriétaire FinSight sur 100, calculé par notre modèle de Machine Learning. Combine rentabilité, croissance, liquidité, structure financière et taille pour donner une note globale de santé financière.', formule: 'Modèle ML — Pondération de 5 dimensions' },
]

const categories = ['Toutes', ...new Set(termes.map(t => t.categorie))]

const categorieColor = {
  Rentabilité: { bg: '#f0fdf4', color: '#059669', border: '#bbf7d0' },
  Valorisation: { bg: '#eff6ff', color: '#2563eb', border: '#bfdbfe' },
  Solvabilité: { bg: '#fffbeb', color: '#d97706', border: '#fde68a' },
  Performance: { bg: '#f3f0ff', color: '#7f77dd', border: '#ddd6fe' },
  Rendement: { bg: '#fef2f2', color: '#dc2626', border: '#fecaca' },
  Bilan: { bg: '#f0f9ff', color: '#0891b2', border: '#bae6fd' },
  FinSight: { bg: '#f0fdf4', color: '#059669', border: '#bbf7d0' },
}

export default function Glossaire() {
  const [query, setQuery] = useState('')
  const [categorie, setCategorie] = useState('Toutes')
  const [expanded, setExpanded] = useState(null)

  const resultats = termes.filter(t => {
    const matchQuery = t.terme.toLowerCase().includes(query.toLowerCase()) ||
      t.definition.toLowerCase().includes(query.toLowerCase())
    const matchCat = categorie === 'Toutes' || t.categorie === categorie
    return matchQuery && matchCat
  })

  return (
    <div>
      <h2 style={{ color: '#1a1d2e', fontWeight: '500', fontSize: '18px', marginBottom: '1.5rem' }}>
        Glossaire financier
      </h2>

      {/* RECHERCHE */}
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <Search size={16} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
        <input
          type="text"
          placeholder="Rechercher un terme financier..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{
            width: '100%', padding: '12px 14px 12px 40px',
            background: '#ffffff', border: '1px solid #e5e7eb',
            borderRadius: '10px', fontSize: '14px', color: '#1a1d2e',
            outline: 'none', boxSizing: 'border-box'
          }}
          onFocus={e => e.target.style.borderColor = '#059669'}
          onBlur={e => e.target.style.borderColor = '#e5e7eb'}
        />
      </div>

      {/* FILTRES CATÉGORIES */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {categories.map(c => (
          <button key={c} onClick={() => setCategorie(c)} style={{
            padding: '5px 14px', borderRadius: '20px', border: '1px solid',
            cursor: 'pointer', fontSize: '12px', fontWeight: '500',
            transition: 'all 0.15s',
            background: categorie === c ? '#059669' : '#ffffff',
            color: categorie === c ? '#ffffff' : '#6b7280',
            borderColor: categorie === c ? '#059669' : '#e5e7eb',
          }}>
            {c}
          </button>
        ))}
      </div>

      {/* LISTE DES TERMES */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {resultats.map(t => {
          const config = categorieColor[t.categorie] || categorieColor.Performance
          const isExpanded = expanded === t.terme
          return (
            <div key={t.terme} onClick={() => setExpanded(isExpanded ? null : t.terme)} style={{
              background: '#ffffff', border: `1px solid ${isExpanded ? config.border : '#e5e7eb'}`,
              borderRadius: '10px', padding: '1rem 1.25rem',
              cursor: 'pointer', transition: 'all 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ background: config.bg, borderRadius: '6px', padding: '6px', border: `1px solid ${config.border}` }}>
                    <BookOpen size={14} color={config.color} />
                  </div>
                  <div>
                    <span style={{ fontWeight: '600', color: '#1a1d2e', fontSize: '14px' }}>{t.terme}</span>
                    <span style={{ fontSize: '11px', color: config.color, background: config.bg, padding: '2px 8px', borderRadius: '4px', marginLeft: '8px', border: `1px solid ${config.border}` }}>
                      {t.categorie}
                    </span>
                  </div>
                </div>
                <span style={{ color: '#9ca3af', fontSize: '18px', transform: isExpanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }}>
                  ›
                </span>
              </div>

              {isExpanded && (
                <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: `1px solid ${config.border}` }}>
                  <p style={{ fontSize: '13px', color: '#374151', lineHeight: '1.7', marginBottom: '10px' }}>
                    {t.definition}
                  </p>
                  <div style={{ background: config.bg, borderRadius: '8px', padding: '10px 14px', border: `1px solid ${config.border}` }}>
                    <span style={{ fontSize: '11px', color: config.color, fontWeight: '500' }}>Formule : </span>
                    <span style={{ fontSize: '12px', color: '#374151', fontFamily: 'monospace' }}>{t.formule}</span>
                  </div>
                </div>
              )}
            </div>
          )
        })}

        {resultats.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#9ca3af', fontSize: '14px' }}>
            Aucun terme trouvé pour "{query}"
          </div>
        )}
      </div>
    </div>
  )
}