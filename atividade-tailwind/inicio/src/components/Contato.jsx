// EXERCÍCIO 6: formulário de contato
export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  return (
    <section id="contato">
      <form onSubmit={handleSubmit}>
        <h2>Fale com a gente</h2>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Leonardo Bevonesi De Conto" />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="bevonesilenardo@gmail.com" />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" placeholder="Adote gatos!" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
