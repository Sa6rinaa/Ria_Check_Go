export default function Contact() {
  return (
    <main>
      <h1>Demande de devis</h1>

      <form>
        <input placeholder="Nom de l'entreprise" required />
        <input placeholder="Email" type="email" required />
        <textarea placeholder="Votre besoin" />

        <button type="submit">Envoyer</button>
      </form>
    </main>
  )
}
