import { Link } from 'react-router-dom'

export default function Compliance() {
  const score = localStorage.getItem("score")

  return (
    <main>
      <h1>Suivi de conformité</h1>

      <p>Taux de conformité : {score}%</p>

      <ul>
        <li>Analyse des risques : ❌</li>
        <li>Documentation technique : ⚠️</li>
        <li>Supervision humaine : ❌</li>
        <li>Transparence utilisateur : ✅</li>
        <li>DPIA RGPD : ❌</li>
      </ul>

      <Link to="/contact">
        Demander un accompagnement
      </Link>
    </main>
  )
}
