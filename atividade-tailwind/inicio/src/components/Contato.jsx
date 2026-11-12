// EXERCÍCIO 6: formulário de contato
const estiloCampo = 'w-full border border-stone-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500'
const estiloLabel = 'block text-sm font-medium mb-1'

export default function Contato() {
  function handleSubmit(evento) {
    evento.preventDefault()
    alert('Mensagem enviada! (de mentirinha)')
  }

  return (
    <section id="contato" className="max-w-xl mx-auto px-4 py-16">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg space-y-5">
        <h2 className="text-2xl font-bold text-center">Fale com a gente</h2>
        <div>
          <label className={estiloLabel} htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Leonardo Bevonesi De Conto" className={estiloCampo} />
        </div>
        <div>
          <label className={estiloLabel} htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="bevonesilenardo@gmail.com" className={estiloCampo} />
        </div>
        <div>
          <label className={estiloLabel} htmlFor="mensagem">Mensagem</label>
          <textarea id="mensagem" placeholder="Adote gatos!" className={`${estiloCampo} h-32`} />
        </div>
        <button type="submit" className="w-full bg-amber-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-700 active:scale-95 transition">Enviar</button>
      </form>
    </section>
  )
}
