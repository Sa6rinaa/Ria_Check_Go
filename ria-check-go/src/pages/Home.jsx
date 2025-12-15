import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()

    localStorage.setItem("risk", "ÉLEVÉ")
    localStorage.setItem("score", "45")

    navigate("/result")
  }

  return (
    <main>
      <h1>Diagnostic RIA</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Domaine d'utilisation
          <select required>
            <option>Recrutement</option>
            <option>Santé</option>
            <option>Finance</option>
            <option>Marketing</option>
          </select>
        </label>

        <label>
          Décision automatisée ?
          <select required>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </label>

        <button type="submit">Lancer le diagnostic</button>
      </form>
    </main>
  )
}
