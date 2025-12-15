import { Link } from 'react-router-dom'

export default function Result() {
  const risk = localStorage.getItem("risk")

  return (
    <main>
      <h1>Résultat du diagnostic</h1>

      <p>
        Niveau de risque :
        <strong> {risk}</strong>
      </p>

      <Link to="/compliance">
        Voir les obligations légales
      </Link>
    </main>
  )
}
